"use client";

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Delete, CornerDownLeft, Sparkles, AlertCircle, ChevronDown, BookOpen, CheckCircle2, Settings2, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { dictionaries, Lang } from "@/lib/dictionaries";
// @ts-ignore
import nerdamer from "nerdamer/all.min";
import katex from "katex";

// ─── Types ───────────────────────────────────────────────────────────────────
type Variant = "func" | "op" | "num" | "special";
type BtnDef  = { label: string; insert: string; tip: string; variant?: Variant };

const EXAMPLES = ["sin(x)", "x^2", "ln(x)", "e^(x)", "tan(x) - x"];

// ─── Variant color map ────────────────────────────────────────────────────────
const COLOR: Record<Variant, string> = {
  func:    "bg-[#f8fafc] text-[#7c3aed] border-[#d8b4fe] hover:bg-[#8b5cf6] hover:text-white transition-all",
  op:      "bg-white text-[#0f172a] border-[#cbd5e1] hover:bg-[#f3f4f6] hover:border-[#8b5cf6] transition-all",
  num:     "bg-white text-[#0f172a] border-[#cbd5e1] hover:bg-[#f3f4f6] hover:border-[#8b5cf6] transition-all",
  special: "bg-[#f8fafc] text-[#7c3aed] border-[#d8b4fe] hover:bg-[#8b5cf6] hover:text-white transition-all",
};

// ─── Tooltip ──────────────────────────────────────────────────────────────────
function Tip({ tip, children }: { tip: string; children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  if (!tip) return <>{children}</>;
  return (
    <div className="relative h-full" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.12 }}
            className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-xl z-50 pointer-events-none"
          >
            {tip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Section label ────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.62rem] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2 flex items-center gap-2">
      <span className="inline-block w-3 h-px bg-slate-200 rounded" />
      {children}
    </p>
  );
}

// ─── Calculator button ─────────────────────────────────────────────────────────────
function CalcBtn({ btn, onClick }: {
  btn: BtnDef; onClick: (b: BtnDef) => void;
}) {
  const v: Variant = btn.variant ?? "func";
  
  // Responsive font size based on label length
  const getFontSize = (label: string) => {
    if (label.length > 4) return "text-[0.78rem]";
    if (label.length > 3) return "text-[0.85rem]";
    return "text-[0.95rem]";
  };

  return (
    <Tip tip={btn.tip}>
      <motion.button
        whileHover={{ y: -1.5, borderColor: "#8b5cf6" }}
        whileTap={{ scale: 0.94, transition: { duration: 0.05 } }}
        onClick={() => onClick(btn)}
        aria-label={btn.tip || btn.label}
        title={btn.tip}
        className={`w-full h-[46px] sm:h-[50px] flex items-center justify-center select-none rounded-[12px] font-bold border transition-all duration-150 overflow-hidden shadow-sm ${COLOR[v]}`}
      >
        <span className={`${getFontSize(btn.label)} px-1 text-center truncate tracking-tight`}>
          {btn.label}
        </span>
      </motion.button>
    </Tip>
  );
};


// ─── Input sanitizer: maps user-friendly notation → nerdamer internals ─────────
function sanitize(expr: string): string {
  return expr
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-")
    .replace(/π/g, "pi")
    .replace(/√/g, "sqrt")
    .replace(/\blog10\s*\(/g,  "§B10§(")
    .replace(/\bln\s*\(/g,     "§LN§(")
    .replace(/\blog\s*\(/g,    "§B10§(")
    .replace(/§LN§\(/g,        "log(")
    .replace(/§B10§\(/g,       "log10(")
    .replace(/\basin\s*\(/g, "asin(")
    .replace(/\bacos\s*\(/g, "acos(")
    .replace(/\batan\s*\(/g, "atan(")
    .replace(/sin⁻¹/g, "asin")
    .replace(/cos⁻¹/g, "acos")
    .replace(/tan⁻¹/g, "atan")
    .replace(/e\^/g, "exp")
    .trim();
}

function toExactTeX(nerdamerObj: { toTeX(): string; text(): string }): string {
  return toDisplayTeX(nerdamerObj.toTeX());
}

/**
 * Nerdamer often emits \\mathrm{cos} instead of \\cos; normalize for KaTeX and downstream rules.
 */
function normalizeRmTrig(tex: string): string {
  return tex.replace(
    /\\mathrm\{(sin|cos|tan|sec|csc|cot|ln|exp|sinh|cosh|tanh|asin|acos|atan)\}/g,
    "\\$1"
  );
}

/**
 * Makes scalar multiplication easier to read for beginners: "2x" instead of "2 \\cdot x",
 * "3x^{2}" instead of "3 \\cdot x^{2}". Reorders "2 \\cdot \\cos(...) \\cdot x" → "2x\\cos(...)".
 * Keeps \\cdot where it separates non-trivial factors. Display-only.
 */
function simplifyTeXScalarMultiplication(tex: string): string {
  const NUM = "-?\\d+(?:\\.\\d+)?";
  const VAR = "[xytuv]";
  const trigFnPattern = "sin|cos|tan|sec|csc|cot|ln|exp|log|asin|acos|atan|sinh|cosh|tanh";
  
  let s = normalizeRmTrig(tex);
  
  // Remove ALL \cdot occurrences that are used for multiplication
  s = s.replace(/\\cdot/g, "");
  
  // Clean up any double spaces that might remain
  s = s.replace(/\s+/g, " ");
  
  return s;
}

// ─── LaTeX post-processor ────────────────────────────────────────────────────
function toDisplayTeX(tex: string): string {
  let s = tex
    .replace(/\\log\s*\\left\s*\(\s*10\s*\\right\s*\)/g, "\\ln\\left(10\\right)")
    .replace(/\\log\s*\(\s*10\s*\)/g,                     "\\ln\\left(10\\right)")
    .replace(/\\operatorname\{log\}\s*\\left\s*\(\s*10\s*\\right\s*\)/g, "\\ln\\left(10\\right)")
    .replace(/\blog\s*\(\s*10\s*\)/g,                      "\\ln(10)")
    .replace(/log10/g,                                      "\\ln(10)")
    .replace(/\\log(?!_{10})/g, "\\ln")
    .replace(/\\cdot\s*\\ln/g, "\\ln")
    .replace(/\\ln\s*\\cdot/g, "\\ln");
  s = simplifyTeXScalarMultiplication(s);
  return s;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export interface CalculatorHandle {
  focusAndCalculate: () => void;
}

const CalculatorCard = forwardRef<CalculatorHandle>((props, ref) => {
  const [input, setInput]                 = useState("");
  const [latexPreview, setLatexPreview]   = useState("");
  const [latexResult, setLatexResult]     = useState("");
  const [textResult, setTextResult]       = useState("");
  const [showResult, setShowResult]       = useState(false);
  const [isFocused, setIsFocused]         = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError]                 = useState("");
  const [showSteps, setShowSteps]         = useState(false);
  const [showSettings, setShowSettings]   = useState(false);
  const [showScientific, setShowScientific] = useState(false);
  const [copied, setCopied]               = useState(false);
  const [simplify, setSimplify]           = useState(true);
  const [variable, setVariable]           = useState("x");

  const pathname = usePathname() || "";
  const currentLang = (pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es") as Lang;
  const t = dictionaries[currentLang].calculator;

  // ─── Dynamic Button Definitions ───────────────────────────────────────────────
  const ROW_TRIG: BtnDef[] = [
    { label: "sin",   insert: "sin()",  tip: t.tips.sin },
    { label: "cos",   insert: "cos()",  tip: t.tips.cos },
    { label: "tan",   insert: "tan()",  tip: t.tips.tan },
    { label: "sec",   insert: "sec()",  tip: t.tips.sec },
    { label: "csc",   insert: "csc()",  tip: t.tips.csc },
    { label: "cot",   insert: "cot()",  tip: t.tips.cot },
    { label: "sin⁻¹", insert: "asin()", tip: t.tips.asin },
    { label: "cos⁻¹", insert: "acos()", tip: t.tips.acos },
    { label: "tan⁻¹", insert: "atan()", tip: t.tips.atan },
    { label: "sinh",  insert: "sinh()", tip: t.tips.sinh },
    { label: "cosh",  insert: "cosh()", tip: t.tips.cosh },
    { label: "tanh",  insert: "tanh()", tip: t.tips.tanh },
  ];

  const ROW_FUNC: BtnDef[] = [
    { label: "ln",    insert: "ln()",   tip: t.tips.ln },
    { label: "log",   insert: "log()",  tip: t.tips.log },
    { label: "eˣ",    insert: "e^()",   tip: t.tips.exp },
    { label: "xⁿ",    insert: "^",      tip: t.tips.power },
    { label: "√",     insert: "sqrt()", tip: t.tips.root,           variant: "special" },
    { label: "π",     insert: "pi",     tip: t.tips.pi,             variant: "special" },
  ];

  const NUMPAD: BtnDef[] = [
    { label: "7",  insert: "7",       tip: "",               variant: "num" },
    { label: "8",  insert: "8",       tip: "",               variant: "num" },
    { label: "9",  insert: "9",       tip: "",               variant: "num" },
    { label: "(",  insert: "(",       tip: t.tips.openPar,   variant: "special" },
    { label: ")",  insert: ")",       tip: t.tips.closePar,  variant: "special" },
    { label: "⌫",  insert: "__del__", tip: t.tips.delete,    variant: "op"  },
    
    { label: "4",  insert: "4",       tip: "",               variant: "num" },
    { label: "5",  insert: "5",       tip: "",               variant: "num" },
    { label: "6",  insert: "6",       tip: "",               variant: "num" },
    { label: "+",  insert: "+",       tip: t.tips.sum,       variant: "op"  },
    { label: "−",  insert: "-",       tip: t.tips.sub,       variant: "op"  },
    { label: "÷",  insert: "/",       tip: t.tips.div,       variant: "op"  },

    { label: "1",  insert: "1",       tip: "",               variant: "num" },
    { label: "2",  insert: "2",       tip: "",               variant: "num" },
    { label: "3",  insert: "3",       tip: "",               variant: "num" },
    { label: "0",  insert: "0",       tip: "",               variant: "num" },
    { label: ".",  insert: ".",       tip: t.tips.point,     variant: "num" },
    { label: "×",  insert: "*",       tip: t.tips.mul,       variant: "op"  },
  ];

  const inputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showResult && !isCalculating) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [showResult, isCalculating]);

  useImperativeHandle(ref, () => ({
    focusAndCalculate: () => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        inputRef.current?.focus();
        if (input.trim()) {
          handleCalculate();
        }
      }, 500);
    }
  }));

  useEffect(() => {
    if (!input.trim()) { setLatexPreview(""); return; }
    try {
      const clean = sanitize(input);
      const expr = nerdamer(clean);
      setLatexPreview(toDisplayTeX(expr.toTeX()));
    } catch { setLatexPreview(""); }
  }, [input]);

  const handleBtn = (btn: BtnDef) => {
    if (!inputRef.current) return;
    const start = inputRef.current.selectionStart || 0;
    const end = inputRef.current.selectionEnd || 0;
    const val = input;

    if (btn.insert === "__del__") {
      if (start === end) {
        // Backspace behavior
        const newVal = val.slice(0, Math.max(0, start - 1)) + val.slice(end);
        setInput(newVal);
        setTimeout(() => {
          if (inputRef.current) {
            const pos = Math.max(0, start - 1);
            inputRef.current.setSelectionRange(pos, pos);
          }
        }, 0);
      } else {
        // Delete selection
        const newVal = val.slice(0, start) + val.slice(end);
        setInput(newVal);
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.setSelectionRange(start, start);
          }
        }, 0);
      }
    } else {
      let newVal: string;
      let finalPos: number;

      if (start !== end && btn.insert.endsWith("()")) {
        // Wrap selection: "sin(" + selection + ")"
        const fnName = btn.insert.slice(0, -1); // "sin("
        newVal = val.slice(0, start) + fnName + val.slice(start, end) + ")" + val.slice(end);
        finalPos = start + fnName.length + (end - start) + 1;
      } else {
        newVal = val.slice(0, start) + btn.insert + val.slice(end);
        const newPos = start + btn.insert.length;
        finalPos = newPos;
        if (btn.insert.endsWith("()")) {
          finalPos = newPos - 1;
        }
      }

      setInput(newVal);

      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.setSelectionRange(finalPos, finalPos);
          inputRef.current.focus();
        }
      }, 0);
    }
    setShowResult(false);
    setError("");
  };

  const handleCalculate = () => {
    if (!input.trim()) return;
    setIsCalculating(true);
    setShowResult(false);
    setShowSteps(false);
    setError("");
    setTimeout(() => {
      try {
        const clean = sanitize(input);
        const derivative = nerdamer(`diff(${clean}, ${variable})`);
        setLatexResult(toExactTeX(derivative));
        setTextResult(derivative.text());
        setShowResult(true);
      } catch (err) {
        setError(t.invalidExpr);
      } finally {
        setIsCalculating(false);
      }
    }, 320);
  };

  const clearAll = () => {
    setInput(""); setShowResult(false); setError(""); setLatexPreview("");
    inputRef.current?.focus();
  };

  return (
    <div ref={cardRef} className="w-full flex flex-col gap-2.5 relative scroll-mt-24">
      <div className="glass-card overflow-hidden flex flex-col w-full max-w-lg mx-auto relative z-10 border border-slate-200/50 shadow-2xl bg-white">
        {/* Input Header */}
        <div className="px-4 pt-5 pb-4 md:px-6 md:pt-5 md:pb-5 border-b border-slate-200 bg-white/40">
          <AnimatePresence>
            {latexPreview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-3 px-3 py-2 bg-slate-50/80 rounded-[12px] border border-slate-100 overflow-x-auto text-center"
              >
                <div
                  className="text-slate-500"
                  dangerouslySetInnerHTML={{ __html: katex.renderToString(latexPreview, { throwOnError: false, displayMode: false }) }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <p id="calc-field-help" className="sr-only">
            Escribe una función de {variable}. Usa sin, cos, exp, sqrt y paréntesis. Pulsa Calcular o Intro para ver la derivada debajo.
          </p>
          <div className={`relative flex items-center bg-white rounded-[14px] border transition-all duration-300 shadow-sm overflow-hidden ${
            isFocused ? "border-secondary/60 ring-3 ring-secondary/10" : "border-slate-200"
          }`}>
            <div className="pl-4 pr-3 py-3 text-slate-400 font-serif italic text-[1rem] border-r border-slate-200 bg-slate-100/50 select-none shrink-0 leading-none">
              d/d{variable}
            </div>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => { setInput(e.target.value); setShowResult(false); setError(""); }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={t.placeholder.replace("x", variable)}
              className="w-full min-w-0 bg-transparent py-3.5 px-4 text-[1.05rem] md:text-[1.15rem] font-mono text-slate-900 outline-none placeholder:text-slate-300"
              onKeyDown={e => e.key === "Enter" && handleCalculate()}
              aria-label="Función a derivar"
              aria-describedby="calc-field-help"
            />
            {input && (
              <button onClick={clearAll} className="pr-4 text-slate-300 hover:text-red-400 transition-colors shrink-0" aria-label="Borrar todo">
                <X size={17} />
              </button>
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-0.5 no-scrollbar">
            <span className="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest shrink-0">{t.examples}</span>
            {EXAMPLES.map(ex => (
              <button key={ex} onClick={() => { setInput(ex); setShowResult(false); setError(""); }}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[0.7rem] font-bold text-slate-500 hover:border-secondary/50 hover:text-secondary transition-all active:scale-95 shadow-sm shrink-0">
                {ex}
              </button>
            ))}
          </div>
        </div>

        {/* Settings Bar */}
        <div className="px-4 md:px-6 py-2 border-b border-slate-200 bg-slate-50/50 flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setShowSettings(s => !s)}
            className={`flex items-center gap-1.5 text-[0.72rem] font-bold transition-colors ${showSettings ? "text-secondary" : "text-slate-400 hover:text-secondary"}`}
            aria-expanded={showSettings}
          >
            <Settings2 size={11} /> {t.advanced.toUpperCase()}
          </button>
          <AnimatePresence>
            {showSettings && (
              <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}
                className="flex items-center gap-4 flex-wrap">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div onClick={() => setSimplify(s => !s)}
                    className={`relative w-7.5 h-4 rounded-full transition-colors duration-200 cursor-pointer ${simplify ? "bg-secondary" : "bg-slate-300"}`}>
                    <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform duration-200 ${simplify ? "translate-x-3.5" : ""}`} />
                  </div>
                  <span className="text-[0.7rem] text-slate-600 font-bold uppercase tracking-wide">{t.simplify}</span>
                </label>
                <label className="flex items-center gap-2">
                  <span className="text-[0.7rem] text-slate-500 font-bold uppercase tracking-wide">{t.variable}</span>
                  <select value={variable} onChange={e => setVariable(e.target.value)}
                    className="text-[0.7rem] bg-white border border-slate-200 rounded-md px-1.5 py-0.5 font-bold text-slate-700 outline-none cursor-pointer">
                    {["x", "y", "t", "u", "v"].map(v => <option key={v}>{v}</option>)}
                  </select>
                </label>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="bg-red-50 px-4 md:px-6 py-2.5 border-b border-red-100 flex items-center gap-2 text-[0.75rem] font-medium text-red-600">
              <AlertCircle size={14} /> {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── KEYBOARD Redesign ─────────────────────────────────────────── */}
        <div className="px-3.5 md:px-6 pt-3 pb-4 md:pt-4 md:pb-5 flex flex-col gap-3 bg-slate-50/30">
          
          <div>
            <Label>{currentLang === "en" ? "Numbers & Operators" : currentLang === "pt" ? "Números e Operadores" : "Números y Operadores"}</Label>
            <div className="grid grid-cols-6 gap-1 md:gap-1.5">
              {NUMPAD.map(b => (
                <CalcBtn key={b.label} btn={b} onClick={handleBtn} />
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowScientific(!showScientific)}
            className="flex items-center justify-between w-full px-1 py-1 text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.15em] hover:text-secondary transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="inline-block w-3 h-px bg-slate-200 rounded" />
              {currentLang === "en" ? "Scientific Functions" : currentLang === "pt" ? "Funções Científicas" : "Funciones Científicas"}
            </span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${showScientific ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {showScientific && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-1 md:gap-1.5 pt-1">
                  {ROW_TRIG.map(b => <CalcBtn key={b.label} btn={b} onClick={handleBtn} />)}
                  {ROW_FUNC.map(b => <CalcBtn key={b.label} btn={b} onClick={handleBtn} />)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.005, backgroundColor: "#07111f" }}
            whileTap={{ scale: 0.985 }}
            onClick={handleCalculate}
            disabled={!input.trim() || isCalculating}
            className="w-full h-[52px] bg-[#0f172a] text-white rounded-xl text-[1rem] font-bold tracking-wider flex items-center justify-center gap-3 shadow-lg disabled:opacity-40 transition-all duration-300 border border-white/5 mt-1"
          >
            {isCalculating ? (
              <div className="flex items-center gap-3">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}>
                  <Sparkles size={18} />
                </motion.div>
                <span className="text-[0.85rem] uppercase tracking-widest">{currentLang === "en" ? "Calculating..." : currentLang === "pt" ? "Calculando..." : "Calculando..."}</span>
              </div>
            ) : (
              <>
                <span className="uppercase text-[0.85rem] tracking-[0.08em]">{t.calculate}</span>
                <CornerDownLeft size={16} className="opacity-70" />
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* ─── RESULT CARD ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showResult && !isCalculating && (
          <motion.div
            ref={resultRef}
            role="region"
            aria-live="polite"
            aria-labelledby="derivative-result-heading"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="bg-white border border-slate-200/50 rounded-[20px] px-4 pt-5 pb-4 md:px-6 md:pt-6 md:pb-5 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span id="derivative-result-heading" className="font-bold text-slate-400 text-[0.62rem] uppercase tracking-[0.15em]">{t.result}</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(textResult);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className={`flex items-center gap-1.5 text-[0.65rem] font-bold px-2.5 py-1 rounded-full border transition-all ${copied ? "bg-green-50 text-green-600 border-green-200" : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"}`}
                  >
                    {copied ? (
                      <><CheckCircle2 size={11} /> {currentLang === "en" ? "Copied!" : "¡Copiado!"}</>
                    ) : (
                      <>COPY RESULT</>
                    )}
                  </button>
                  <span className="text-[0.6rem] font-bold bg-secondary/10 text-secondary px-2.5 py-1 rounded-full border border-secondary/20 uppercase tracking-wider">
                    {simplify ? t.simplified : t.expanded}
                  </span>
                </div>
              </div>

              <div className="bg-slate-50/50 rounded-[14px] border border-slate-100 px-4 py-6 overflow-x-auto flex flex-col sm:flex-row items-center justify-center gap-3 shadow-inner min-h-[80px]">
                <span className="text-slate-400 font-serif italic text-lg shrink-0 select-none">
                  f'({variable}) =
                </span>
                <div
                  className="text-slate-900 text-xl md:text-2xl"
                  dangerouslySetInnerHTML={{ __html: katex.renderToString(latexResult || "", { throwOnError: false, displayMode: true }) }}
                />
              </div>

              <button
                onClick={() => setShowSteps(s => !s)}
                className="w-full mt-3 text-[0.78rem] font-bold text-secondary flex items-center justify-center gap-2 py-3.5 rounded-xl hover:bg-secondary/5 transition-all border border-transparent hover:border-secondary/10"
              >
                <BookOpen size={15} />
                {showSteps ? t.hideSteps : t.showSteps}
                <motion.div animate={{ rotate: showSteps ? 180 : 0 }}>
                  <ChevronDown size={15} />
                </motion.div>
              </button>

              <AnimatePresence>
                {showSteps && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 flex flex-col gap-5">
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                      {[
                        {
                          t: t.steps.step1.t,
                          d: t.steps.step1.d.replace("variable", variable),
                          f: `\\frac{d}{d${variable}}\\left[\\text{expresión}\\right]`,
                        },
                        {
                          t: t.steps.step2.t,
                          d: t.steps.step2.d,
                          f: latexResult,
                        },
                        {
                          t: t.steps.step3.t,
                          d: t.steps.step3.d,
                          f: latexResult,
                        },
                      ].map((step, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-6.5 h-6.5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={12} className="text-secondary" />
                          </div>
                          <div className="flex flex-col gap-2 min-w-0">
                            <h4 className="font-bold text-slate-900 text-[0.85rem] uppercase tracking-tight">{step.t}</h4>
                            <p className="text-[0.78rem] text-slate-500 leading-relaxed">{step.d}</p>
                            <div className="bg-slate-50/50 p-4 rounded-[14px] border border-slate-100 overflow-x-auto">
                              <div dangerouslySetInnerHTML={{ __html: katex.renderToString(step.f, { throwOnError: false, displayMode: false }) }} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

CalculatorCard.displayName = "CalculatorCard";
export default CalculatorCard;
