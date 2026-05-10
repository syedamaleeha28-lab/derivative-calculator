"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Delete, CornerDownLeft, Sparkles, AlertCircle, ChevronDown, BookOpen, CheckCircle2, Settings2, X } from "lucide-react";
// @ts-ignore
import nerdamer from "nerdamer/all.min";
import katex from "katex";

// ─── Types ───────────────────────────────────────────────────────────────────
type Variant = "func" | "op" | "num" | "special";
type BtnDef  = { label: string; insert: string; tip: string; variant?: Variant };

// ─── Button Definitions ───────────────────────────────────────────────────────

// ─── Button Definitions ───────────────────────────────────────────────────────

// Row A: Trig — 5 buttons per row in mobile
// Row A: Trig
const ROW_TRIG: BtnDef[] = [
  { label: "sin",   insert: "sin(",   tip: "Seno" },
  { label: "cos",   insert: "cos(",   tip: "Coseno" },
  { label: "tan",   insert: "tan(",   tip: "Tangente" },
  { label: "sec",   insert: "sec(",   tip: "Secante" },
  { label: "csc",   insert: "csc(",   tip: "Cosecante" },
  { label: "cot",   insert: "cot(",   tip: "Cotangente" },
  { label: "sin⁻¹", insert: "asin(",  tip: "Arcoseno" },
  { label: "cos⁻¹", insert: "acos(",  tip: "Arcocoseno" },
  { label: "tan⁻¹", insert: "atan(",  tip: "Arcotangente" },
  { label: "sinh",  insert: "sinh(",  tip: "Seno hip." },
  { label: "cosh",  insert: "cosh(",  tip: "Coseno hip." },
  { label: "tanh",  insert: "tanh(",  tip: "Tan hip." },
];

const ROW_FUNC: BtnDef[] = [
  { label: "ln",    insert: "ln(",    tip: "Log. natural" },
  { label: "log",   insert: "log(",   tip: "Log. base 10" },
  { label: "eˣ",    insert: "e^(",    tip: "Exponencial" },
  { label: "xⁿ",    insert: "^(",     tip: "Potencia" },
  { label: "√",     insert: "sqrt(",  tip: "Raíz",           variant: "special" },
  { label: "π",     insert: "pi",     tip: "Pi",             variant: "special" },
];

const NUMPAD: BtnDef[] = [
  { label: "7",  insert: "7",       tip: "",               variant: "num" },
  { label: "8",  insert: "8",       tip: "",               variant: "num" },
  { label: "9",  insert: "9",       tip: "",               variant: "num" },
  { label: "(",  insert: "(",       tip: "Abrir paréntesis", variant: "special" },
  { label: ")",  insert: ")",       tip: "Cerrar paréntesis", variant: "special" },
  { label: "⌫",  insert: "__del__", tip: "Borrar",         variant: "op"  },
  
  { label: "4",  insert: "4",       tip: "",               variant: "num" },
  { label: "5",  insert: "5",       tip: "",               variant: "num" },
  { label: "6",  insert: "6",       tip: "",               variant: "num" },
  { label: "+",  insert: "+",       tip: "Suma",           variant: "op"  },
  { label: "−",  insert: "-",       tip: "Resta",          variant: "op"  },
  { label: "÷",  insert: "/",       tip: "Dividir",        variant: "op"  },

  { label: "1",  insert: "1",       tip: "",               variant: "num" },
  { label: "2",  insert: "2",       tip: "",               variant: "num" },
  { label: "3",  insert: "3",       tip: "",               variant: "num" },
  { label: "0",  insert: "0",       tip: "",               variant: "num" },
  { label: ".",  insert: ".",       tip: "Punto decimal",  variant: "num" },
  { label: "×",  insert: "*",       tip: "Multiplicar",    variant: "op"  },
];

const EXAMPLES = ["sin(x)^2", "ln(x)/x", "e^(x^2)", "tan(x) − x"];

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
            className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-xl z-50 pointer-events-none"
          >
            {tip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-slate-900 dark:border-t-slate-100" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Section label ────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.68rem] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
      <span className="inline-block w-3 h-px bg-slate-200 dark:bg-slate-700 rounded" />
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
    if (label.length > 4) return "text-[0.85rem]";
    if (label.length > 3) return "text-[0.95rem]";
    return "text-[1.125rem]";
  };

  return (
    <Tip tip={btn.tip}>
      <motion.button
        whileHover={{ y: -1.5, borderColor: "#8b5cf6" }}
        whileTap={{ scale: 0.94, transition: { duration: 0.05 } }}
        onClick={() => onClick(btn)}
        aria-label={btn.tip || btn.label}
        title={btn.tip}
        className={`w-full h-[54px] sm:h-[60px] flex items-center justify-center select-none rounded-[14px] font-bold border transition-all duration-150 overflow-hidden shadow-sm ${COLOR[v]}`}
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

// ─── LaTeX post-processor ────────────────────────────────────────────────────
function toDisplayTeX(tex: string): string {
  return tex
    .replace(/\\log\s*\\left\s*\(\s*10\s*\\right\s*\)/g, "\\ln\\left(10\\right)")
    .replace(/\\log\s*\(\s*10\s*\)/g,                     "\\ln\\left(10\\right)")
    .replace(/\\operatorname\{log\}\s*\\left\s*\(\s*10\s*\\right\s*\)/g, "\\ln\\left(10\\right)")
    .replace(/\blog\s*\(\s*10\s*\)/g,                      "\\ln(10)")
    .replace(/log10/g,                                      "\\ln(10)")
    .replace(/\\log(?!_{10})/g, "\\ln")
    .replace(/\\cdot\s*\\ln/g, "\\ln")
    .replace(/\\ln\s*\\cdot/g, "\\ln")
    ;
}

// ─── Main Component ───────────────────────────────────────────────────────────
import { forwardRef, useImperativeHandle } from "react";

export interface CalculatorHandle {
  focusAndCalculate: () => void;
}

const CalculatorCard = forwardRef<CalculatorHandle>((props, ref) => {
  const [input, setInput]                 = useState("");
  const [latexPreview, setLatexPreview]   = useState("");
  const [latexResult, setLatexResult]     = useState("");
  const [showResult, setShowResult]       = useState(false);
  const [isFocused, setIsFocused]         = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError]                 = useState("");
  const [showSteps, setShowSteps]         = useState(false);
  const [showSettings, setShowSettings]   = useState(false);
  const [simplify, setSimplify]           = useState(true);
  const [variable, setVariable]           = useState("x");

  const inputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
    if (btn.insert === "__del__") {
      setInput(p => p.slice(0, -1));
    } else {
      setInput(p => p + btn.insert);
    }
    setShowResult(false);
    setError("");
    inputRef.current?.focus();
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
        setShowResult(true);
      } catch (err) {
        setError("Expresión inválida. Revisa la sintaxis e inténtalo de nuevo.");
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
    <div ref={cardRef} className="w-full flex flex-col gap-4 relative scroll-mt-24">
      <div className={`absolute -inset-8 bg-secondary/10 rounded-[3rem] blur-3xl transition-opacity duration-700 ${isFocused ? "opacity-100" : "opacity-0"} pointer-events-none -z-10 hidden dark:block`} />
      <div className="glass-card overflow-hidden flex flex-col w-full max-w-[680px] mx-auto relative z-10 border border-slate-200/50 dark:border-white/5 shadow-2xl">
        {/* Input Header */}
        <div className="px-5 pt-6 pb-5 md:px-7 md:pt-7 md:pb-6 border-b border-slate-200 dark:border-[#1e293b] bg-white/40 dark:bg-[#0f172a]/50">
          <AnimatePresence>
            {latexPreview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-3.5 px-4 py-2.5 bg-slate-50/80 dark:bg-white/5 rounded-[14px] border border-slate-100 dark:border-white/5 overflow-x-auto text-center"
              >
                <div
                  className="text-slate-500 dark:text-slate-400"
                  dangerouslySetInnerHTML={{ __html: katex.renderToString(latexPreview, { throwOnError: false, displayMode: false }) }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className={`relative flex items-center bg-white dark:bg-[#07111f] rounded-[16px] border transition-all duration-300 shadow-sm overflow-hidden ${
            isFocused ? "border-secondary/60 ring-4 ring-secondary/10 dark:ring-secondary/15" : "border-slate-200 dark:border-[#1e293b]"
          }`}>
            <div className="pl-5 pr-4 py-4 text-slate-400 dark:text-slate-500 font-serif italic text-[1.1rem] border-r border-slate-200 dark:border-[#1e293b] bg-slate-100/50 select-none shrink-0 leading-none">
              d/d{variable}
            </div>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => { setInput(e.target.value); setShowResult(false); setError(""); }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={`Ej: sin(${variable})² + ${variable}³`}
              className="w-full min-w-0 bg-transparent py-4 px-5 text-[1.25rem] md:text-[1.35rem] font-mono text-slate-900 dark:text-white outline-none placeholder:text-slate-300 dark:placeholder:text-slate-600"
              onKeyDown={e => e.key === "Enter" && handleCalculate()}
              aria-label="Campo de entrada de la función"
            />
            {input && (
              <button onClick={clearAll} className="pr-5 text-slate-300 hover:text-red-400 dark:text-slate-600 dark:hover:text-red-400 transition-colors shrink-0" aria-label="Borrar todo">
                <X size={18} />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
            <span className="text-[0.6rem] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest shrink-0">Ejemplos</span>
            {EXAMPLES.map(ex => (
              <button key={ex} onClick={() => { setInput(ex); setShowResult(false); setError(""); }}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-[0.7rem] font-bold text-slate-500 dark:text-slate-400 hover:border-secondary/50 hover:text-secondary dark:hover:text-accent transition-all active:scale-95 shadow-sm shrink-0">
                {ex}
              </button>
            ))}
          </div>
        </div>

        {/* Settings Bar */}
        <div className="px-5 md:px-7 py-2.5 border-b border-slate-200 dark:border-[#1e293b] bg-slate-50/50 flex items-center gap-4 flex-wrap">
          <button
            onClick={() => setShowSettings(s => !s)}
            className={`flex items-center gap-1.5 text-[0.72rem] font-bold transition-colors ${showSettings ? "text-secondary dark:text-accent" : "text-slate-400 dark:text-slate-500 hover:text-secondary dark:hover:text-accent"}`}
            aria-expanded={showSettings}
          >
            <Settings2 size={11} /> OPCIONES
          </button>
          <AnimatePresence>
            {showSettings && (
              <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}
                className="flex items-center gap-4 flex-wrap">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div onClick={() => setSimplify(s => !s)}
                    className={`relative w-7.5 h-4 rounded-full transition-colors duration-200 cursor-pointer ${simplify ? "bg-secondary" : "bg-slate-300 dark:bg-slate-600"}`}>
                    <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform duration-200 ${simplify ? "translate-x-3.5" : ""}`} />
                  </div>
                  <span className="text-[0.7rem] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wide">Simplificar</span>
                </label>
                <label className="flex items-center gap-2">
                  <span className="text-[0.7rem] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">Var</span>
                  <select value={variable} onChange={e => setVariable(e.target.value)}
                    className="text-[0.7rem] bg-white dark:bg-[#07111f] border border-slate-200 dark:border-[#1e293b] rounded-md px-1.5 py-0.5 font-bold text-slate-700 dark:text-slate-200 outline-none cursor-pointer">
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
              className="bg-red-50 dark:bg-red-900/10 px-5 md:px-7 py-3 border-b border-red-100 dark:border-red-900/20 flex items-center gap-2 text-[0.78rem] font-medium text-red-600 dark:text-red-400">
              <AlertCircle size={14} /> {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── KEYBOARD Redesign ─────────────────────────────────────────── */}
        <div className="px-3.5 pt-4 pb-5 md:px-5 md:pt-5 md:pb-6 flex flex-col gap-5 bg-slate-50/30 dark:bg-transparent">
          
          <div>
            <Label>Funciones Científicas</Label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
              {ROW_TRIG.map(b => <CalcBtn key={b.label} btn={b} onClick={handleBtn} />)}
              {ROW_FUNC.map(b => <CalcBtn key={b.label} btn={b} onClick={handleBtn} />)}
            </div>
          </div>

          <div>
            <Label>Teclado Numérico</Label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
              {NUMPAD.map(b => (
                <CalcBtn key={b.label} btn={b} onClick={handleBtn} />
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.005, backgroundColor: "#07111f" }}
            whileTap={{ scale: 0.985 }}
            onClick={handleCalculate}
            disabled={!input.trim() || isCalculating}
            className="w-full h-[58px] bg-[#0f172a] dark:bg-[#020617] text-white rounded-[14px] text-[1.1rem] font-bold tracking-wider flex items-center justify-center gap-3 shadow-xl hover:shadow-secondary/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 border border-white/5"
          >
            {isCalculating ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}>
                <Sparkles size={20} />
              </motion.div>
            ) : (
              <>
                <span className="uppercase text-[0.95rem] tracking-[0.1em]">Calcular Derivada</span>
                <CornerDownLeft size={18} className="opacity-70" />
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* ─── RESULT CARD ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showResult && !isCalculating && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="w-full max-w-[680px] mx-auto"
          >
            <div className="bg-white dark:bg-[#0f172a] border border-slate-200/50 dark:border-[#1e293b] rounded-[24px] px-5 pt-6 pb-5 md:px-8 md:pt-8 md:pb-7 shadow-xl">

              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-slate-400 dark:text-slate-500 text-[0.62rem] uppercase tracking-[0.15em]">Resultado</span>
                <span className="text-[0.6rem] font-bold bg-secondary/10 text-secondary px-2.5 py-1 rounded-full border border-secondary/20 uppercase tracking-wider">
                  {simplify ? "Simplificado" : "Expandido"}
                </span>
              </div>

              <div className="bg-slate-50/50 dark:bg-[#07111f] rounded-[18px] border border-slate-100 dark:border-[#1e293b] px-5 py-7 overflow-x-auto flex items-center justify-center gap-4 shadow-inner min-h-[90px]">
                <span className="text-slate-400 dark:text-slate-500 font-serif italic text-lg shrink-0 select-none">
                  f'({variable}) =
                </span>
                <div
                  className="text-slate-900 dark:text-white"
                  dangerouslySetInnerHTML={{ __html: katex.renderToString(latexResult || "", { throwOnError: false, displayMode: true }) }}
                />
              </div>

              <button
                onClick={() => setShowSteps(s => !s)}
                className="w-full mt-4 text-[0.82rem] font-bold text-secondary dark:text-accent flex items-center justify-center gap-2 py-3.5 rounded-[14px] hover:bg-secondary/5 transition-all border border-transparent hover:border-secondary/10"
              >
                <BookOpen size={15} />
                {showSteps ? "OCULTAR PASOS" : "VER SOLUCIÓN PASO A PASO"}
                <motion.div animate={{ rotate: showSteps ? 180 : 0 }} transition={{ duration: 0.3 }}>
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
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

                      {[
                        {
                          t: "1. Identificar la estructura",
                          d: `Expresión diferenciable respecto a ${variable}. Identificamos las reglas aplicables: potencia, cadena, producto, cociente.`,
                          f: `\\frac{d}{d${variable}}\\left[\\text{expresión}\\right]`,
                        },
                        {
                          t: "2. Aplicar reglas de derivación",
                          d: "Se diferencia cada término según las reglas correspondientes y se aplica la regla de la cadena donde sea necesario.",
                          f: latexResult,
                        },
                        {
                          t: "3. Simplificar el resultado",
                          d: "Se combinan términos semejantes y se reduce la expresión a su forma mínima.",
                          f: latexResult,
                        },
                      ].map((step, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-6.5 h-6.5 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={12} className="text-secondary dark:text-accent" />
                          </div>
                          <div className="flex flex-col gap-2 min-w-0">
                            <h4 className="font-bold text-slate-900 dark:text-white text-[0.85rem] uppercase tracking-tight">{step.t}</h4>
                            <p className="text-[0.78rem] text-slate-500 dark:text-slate-400 leading-relaxed">{step.d}</p>
                            <div className="bg-slate-50/50 dark:bg-white/5 p-4 rounded-[14px] border border-slate-100 dark:border-white/5 overflow-x-auto">
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


