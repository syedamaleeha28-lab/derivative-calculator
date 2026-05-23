"use client";

import { useState, useRef, useEffect, forwardRef, useImperativeHandle, useMemo } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CornerDownLeft, Sparkles, AlertCircle, ChevronDown, BookOpen, CheckCircle2, Settings2, X } from "lucide-react";
import {
  CALCULATOR_SET_INPUT,
  type CalculatorSetInputDetail,
} from "@/lib/calculator-events";
import { dict } from "@/lib/dictionaries";
import { trackCalculatorUsed } from "@/lib/gtag";
import type { TranslationDictionary } from "@/lib/dictionaries";
// @ts-ignore
import nerdamer from "nerdamer/all.min";
import katex from "katex";

type Variant = "func" | "op" | "num" | "special" | "clear";
type BtnDef = { label: string; insert: string; tip: string; variant?: Variant };

const EXAMPLES = ["sin(x)", "x^2", "ln(x)", "e^(x)", "tan(x) - x"];

const COLOR: Record<Variant, string> = {
  func:
    "bg-gradient-to-br from-cyan-500 to-sky-600 text-white border-cyan-400/40 shadow-[0_2px_8px_rgba(34,211,238,0.35)] hover:from-cyan-400 hover:to-sky-500 hover:shadow-[0_4px_14px_rgba(34,211,238,0.45)]",
  op:
    "bg-gradient-to-br from-indigo-500 to-violet-600 text-white border-indigo-400/40 shadow-[0_2px_8px_rgba(99,102,241,0.35)] hover:from-indigo-400 hover:to-violet-500 hover:shadow-[0_4px_14px_rgba(99,102,241,0.45)]",
  num:
    "bg-white text-slate-900 border-slate-200/90 shadow-sm font-bold hover:bg-violet-50/80 hover:border-violet-300 hover:shadow-md",
  special:
    "bg-gradient-to-br from-violet-500 to-purple-600 text-white border-violet-400/35 shadow-[0_2px_8px_rgba(139,92,246,0.35)] hover:from-violet-400 hover:to-purple-500",
  clear:
    "bg-gradient-to-br from-rose-400 to-pink-500 text-white border-rose-300/40 shadow-[0_2px_8px_rgba(244,63,94,0.3)] hover:from-rose-500 hover:to-pink-600",
};

function Tip({ tip, children }: { tip: string; children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  if (!tip) return <>{children}</>;
  return (
    <motion.div
      className="relative h-full"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.1 }}
            className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded shadow-lg z-50 pointer-events-none"
          >
            {tip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CalcBtn({ btn, onClick }: { btn: BtnDef; onClick: (b: BtnDef) => void }) {
  const v: Variant = btn.variant ?? "func";
  const len = btn.label.length;
  const font =
    len > 4 ? "text-[0.68rem]" : len > 3 ? "text-[0.72rem]" : "text-[0.8rem]";

  return (
    <Tip tip={btn.tip}>
      <motion.button
        type="button"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => onClick(btn)}
        aria-label={btn.tip || btn.label}
        className={`w-full h-[40px] sm:h-[44px] flex items-center justify-center select-none rounded-xl font-semibold border transition-all duration-150 ${COLOR[v]}`}
      >
        <span className={`${font} px-0.5 text-center leading-none truncate`}>{btn.label}</span>
      </motion.button>
    </Tip>
  );
}

function buildKeypad(
  variable: string,
  tips: TranslationDictionary["calculator"]["tips"]
): BtnDef[] {
  const fn = (label: string, insert: string, tip: string, variant: Variant = "func"): BtnDef => ({
    label,
    insert,
    tip,
    variant,
  });

  return [
    fn("sin", "sin()", tips.sin),
    fn("cos", "cos()", tips.cos),
    fn("tan", "tan()", tips.tan),
    fn("ln", "ln()", tips.ln),
    fn("log", "log()", tips.log),
    fn("√", "sqrt()", tips.root, "special"),

    fn("asin", "asin()", tips.asin),
    fn("acos", "acos()", tips.acos),
    fn("atan", "atan()", tips.atan),
    fn("sec", "sec()", tips.sec),
    fn("csc", "csc()", tips.csc),
    fn("cot", "cot()", tips.cot),

    fn("sinh", "sinh()", tips.sinh),
    fn("cosh", "cosh()", tips.cosh),
    fn("tanh", "tanh()", tips.tanh),
    fn("eˣ", "e^()", tips.exp, "special"),
    fn("xⁿ", "^", tips.power, "special"),
    fn("π", "pi", tips.pi, "special"),

    fn(variable, variable, tips.var, "special"),
    fn("e", "e", tips.euler, "special"),
    fn("(", "(", tips.openPar, "special"),
    fn(")", ")", tips.closePar, "special"),
    fn("/", "/", tips.slash, "op"),
    fn("AC", "__clear__", tips.clearAll, "clear"),

    fn("7", "7", "", "num"),
    fn("8", "8", "", "num"),
    fn("9", "9", "", "num"),
    fn("+", "+", tips.sum, "op"),
    fn("−", "-", tips.sub, "op"),
    fn("⌫", "__del__", tips.delete, "op"),

    fn("4", "4", "", "num"),
    fn("5", "5", "", "num"),
    fn("6", "6", "", "num"),
    fn("×", "*", tips.mul, "op"),
    fn("^", "^", tips.power, "op"),
    fn(".", ".", tips.point, "num"),

    fn("1", "1", "", "num"),
    fn("2", "2", "", "num"),
    fn("3", "3", "", "num"),
    fn("0", "0", "", "num"),
  ];
}

function sanitize(expr: string): string {
  return expr
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-")
    .replace(/π/g, "pi")
    .replace(/√/g, "sqrt")
    .replace(/\blog10\s*\(/g, "§B10§(")
    .replace(/\bln\s*\(/g, "§LN§(")
    .replace(/\blog\s*\(/g, "§B10§(")
    .replace(/§LN§\(/g, "log(")
    .replace(/§B10§\(/g, "log10(")
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

function normalizeRmTrig(tex: string): string {
  return tex.replace(
    /\\mathrm\{(sin|cos|tan|sec|csc|cot|ln|exp|sinh|cosh|tanh|asin|acos|atan)\}/g,
    "\\$1"
  );
}

function simplifyTeXScalarMultiplication(tex: string): string {
  let s = normalizeRmTrig(tex);
  s = s.replace(/\\cdot/g, "");
  s = s.replace(/\s+/g, " ");
  return s;
}

function toDisplayTeX(tex: string): string {
  let s = tex
    .replace(/\\log\s*\\left\s*\(\s*10\s*\\right\s*\)/g, "\\ln\\left(10\\right)")
    .replace(/\\log\s*\(\s*10\s*\)/g, "\\ln\\left(10\\right)")
    .replace(/\\operatorname\{log\}\s*\\left\s*\(\s*10\s*\\right\s*\)/g, "\\ln\\left(10\\right)")
    .replace(/\blog\s*\(\s*10\s*\)/g, "\\ln(10)")
    .replace(/log10/g, "\\ln(10)")
    .replace(/\\log(?!_{10})/g, "\\ln")
    .replace(/\\cdot\s*\\ln/g, "\\ln")
    .replace(/\\ln\s*\\cdot/g, "\\ln");
  s = simplifyTeXScalarMultiplication(s);
  return s;
}

export interface CalculatorHandle {
  focusAndCalculate: () => void;
}

const CalculatorCard = forwardRef<CalculatorHandle>((props, ref) => {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  const [latexPreview, setLatexPreview] = useState("");
  const [latexResult, setLatexResult] = useState("");
  const [textResult, setTextResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState("");
  const [showSteps, setShowSteps] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [copied, setCopied] = useState(false);
  const [simplify, setSimplify] = useState(true);
  const [variable, setVariable] = useState("x");

    const t = dict.calculator;

  const keypad = useMemo(() => buildKeypad(variable, t.tips), [variable, t.tips]);

  const inputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showResult && !isCalculating) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [showResult, isCalculating]);

  useEffect(() => {
    const onSetInput = (event: Event) => {
      const { expression, scroll } = (event as CustomEvent<CalculatorSetInputDetail>).detail;
      setInput(expression);
      setShowResult(false);
      setError("");
      if (scroll) {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    };
    window.addEventListener(CALCULATOR_SET_INPUT, onSetInput);
    return () => window.removeEventListener(CALCULATOR_SET_INPUT, onSetInput);
  }, []);

  useImperativeHandle(ref, () => ({
    focusAndCalculate: () => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        inputRef.current?.focus();
        if (input.trim()) handleCalculate();
      }, 400);
    },
  }));

  useEffect(() => {
    if (!input.trim()) {
      setLatexPreview("");
      return;
    }
    try {
      const clean = sanitize(input);
      const expr = nerdamer(clean);
      setLatexPreview(toDisplayTeX(expr.toTeX()));
    } catch {
      setLatexPreview("");
    }
  }, [input]);

  const clearAll = () => {
    setInput("");
    setShowResult(false);
    setError("");
    setLatexPreview("");
    inputRef.current?.focus();
  };

  const handleBtn = (btn: BtnDef) => {
    if (!inputRef.current) return;

    if (btn.insert === "__clear__") {
      clearAll();
      return;
    }

    const start = inputRef.current.selectionStart || 0;
    const end = inputRef.current.selectionEnd || 0;
    const val = input;

    if (btn.insert === "__del__") {
      if (start === end) {
        const newVal = val.slice(0, Math.max(0, start - 1)) + val.slice(end);
        setInput(newVal);
        setTimeout(() => {
          if (inputRef.current) {
            const pos = Math.max(0, start - 1);
            inputRef.current.setSelectionRange(pos, pos);
          }
        }, 0);
      } else {
        const newVal = val.slice(0, start) + val.slice(end);
        setInput(newVal);
        setTimeout(() => {
          inputRef.current?.setSelectionRange(start, start);
        }, 0);
      }
    } else {
      let newVal: string;
      let finalPos: number;

      if (start !== end && btn.insert.endsWith("()")) {
        const fnName = btn.insert.slice(0, -1);
        newVal = val.slice(0, start) + fnName + val.slice(start, end) + ")" + val.slice(end);
        finalPos = start + fnName.length + (end - start) + 1;
      } else {
        newVal = val.slice(0, start) + btn.insert + val.slice(end);
        finalPos = start + btn.insert.length;
        if (btn.insert.endsWith("()")) finalPos = finalPos - 1;
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
    trackCalculatorUsed(pathname, input);
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
      } catch {
        setError(t.invalidExpr);
      } finally {
        setIsCalculating(false);
      }
    }, 280);
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-full flex flex-col gap-3 scroll-mt-20"
    >
      <div className="calc-shell overflow-hidden flex flex-col w-full relative z-10 rounded-3xl">
        {/* Input */}
        <div className="px-3 pt-4 pb-3 sm:px-4 sm:pt-5 sm:pb-3.5 border-b border-white/60 bg-white/70 backdrop-blur-sm">
          <AnimatePresence>
            {latexPreview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-1.5 px-2 py-1 bg-slate-50 rounded-lg border border-slate-100 overflow-x-auto text-center"
              >
                <div
                  className="text-slate-500 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString(latexPreview, {
                      throwOnError: false,
                      displayMode: false,
                    }),
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <p id="calc-field-help" className="sr-only">
            Enter a function of {variable}. Use sin, cos, ln, sqrt, and parentheses. Press Calculate or Enter.
          </p>

          <div
            className={`calc-input-glow relative flex items-center bg-white rounded-2xl border-2 transition-all duration-200 ${
              isFocused ? "border-violet-400" : "border-slate-200/90 shadow-inner"
            }`}
          >
            <div className="pl-3 pr-2.5 py-3 text-violet-600 font-serif italic text-base sm:text-lg font-semibold border-r border-violet-100 bg-gradient-to-b from-violet-50 to-indigo-50/80 select-none shrink-0">
              d/d{variable}
            </div>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setShowResult(false);
                setError("");
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={t.placeholder.replace("x", variable)}
              className="w-full min-w-0 bg-transparent py-3 px-3 text-base sm:text-lg font-mono font-medium text-slate-900 outline-none placeholder:text-slate-400"
              onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
              aria-label="Function to differentiate"
              aria-describedby="calc-field-help"
            />
            {input && (
              <button
                type="button"
                onClick={clearAll}
                className="pr-2 text-slate-300 hover:text-rose-400 transition-colors shrink-0"
                aria-label={t.tips.clearAll}
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 mt-1.5">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide min-w-0 flex-1">
              <span className="text-[0.55rem] font-bold text-slate-400 uppercase tracking-wider shrink-0">
                {t.examples}
              </span>
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => {
                    setInput(ex);
                    setShowResult(false);
                    setError("");
                  }}
                  className="whitespace-nowrap px-2 py-1 rounded-lg bg-white/90 border border-violet-100 text-[0.65rem] font-semibold text-slate-600 hover:border-cyan-300 hover:text-violet-700 hover:shadow-sm transition-all shrink-0"
                >
                  {ex}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setShowSettings((s) => !s)}
              className={`shrink-0 flex items-center gap-1 text-[0.62rem] font-bold uppercase tracking-wide transition-colors ${
                showSettings ? "text-violet-600" : "text-slate-400 hover:text-violet-600"
              }`}
              aria-expanded={showSettings}
            >
              <Settings2 size={10} />
              <span className="hidden sm:inline">{t.advanced}</span>
            </button>
          </div>

          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-3 pt-2 flex-wrap">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <div
                      role="switch"
                      aria-checked={simplify}
                      onClick={() => setSimplify((s) => !s)}
                      className={`relative w-7 h-3.5 rounded-full transition-colors cursor-pointer ${
                        simplify ? "bg-violet-500" : "bg-slate-300"
                      }`}
                    >
                      <motion.div
                        className={`absolute top-0.5 left-0.5 w-2.5 h-2.5 bg-white rounded-full shadow transition-transform ${
                          simplify ? "translate-x-3.5" : ""
                        }`}
                      />
                    </div>
                    <span className="text-[0.65rem] text-slate-600 font-semibold">{t.simplify}</span>
                  </label>
                  <label className="flex items-center gap-1.5">
                    <span className="text-[0.65rem] text-slate-500 font-semibold">{t.variable}</span>
                    <select
                      value={variable}
                      onChange={(e) => setVariable(e.target.value)}
                      className="text-[0.65rem] bg-white border border-slate-200 rounded px-1 py-0.5 font-semibold text-slate-700 outline-none"
                    >
                      {["x", "y", "t", "u", "v"].map((v) => (
                        <option key={v}>{v}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-rose-50/90 px-4 py-2 border-b border-rose-100 flex items-center gap-1.5 text-[0.75rem] font-medium text-rose-600"
            >
              <AlertCircle size={12} />
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unified keypad + calculate */}
        <div className="px-3 pb-4 pt-3 sm:px-4 sm:pb-5 sm:pt-3.5 bg-gradient-to-b from-indigo-50/40 via-violet-50/30 to-cyan-50/20">
          <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
            {keypad.map((b) => (
              <CalcBtn key={`${b.label}-${b.insert}`} btn={b} onClick={handleBtn} />
            ))}
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCalculate}
            disabled={!input.trim() || isCalculating}
            className="w-full h-[48px] sm:h-[52px] mt-3 sm:mt-3.5 rounded-2xl text-[0.9rem] font-bold tracking-wide flex items-center justify-center gap-2 text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-[0_8px_24px_-4px_rgba(99,102,241,0.55)] hover:shadow-[0_12px_28px_-4px_rgba(139,92,246,0.65)] disabled:opacity-40 disabled:shadow-none transition-all"
          >
            {isCalculating ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                >
                  <Sparkles size={16} />
                </motion.div>
                <span className="text-[0.75rem] uppercase tracking-wider">
                  {t.calculating}
                </span>
              </>
            ) : (
              <>
                <span className="uppercase text-[0.78rem] tracking-wide">{t.calculate}</span>
                <CornerDownLeft size={14} className="opacity-70" />
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Result */}
      <AnimatePresence>
        {showResult && !isCalculating && (
          <motion.div
            ref={resultRef}
            role="region"
            aria-live="polite"
            aria-labelledby="derivative-result-heading"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="w-full"
          >
            <div className="bg-gradient-to-br from-white via-violet-50/30 to-cyan-50/20 border border-violet-100/80 rounded-3xl px-4 pt-5 pb-4 sm:px-5 shadow-[0_16px_40px_-12px_rgba(99,102,241,0.25)]">
              <div className="flex items-center justify-between mb-3">
                <span
                  id="derivative-result-heading"
                  className="font-bold text-slate-400 text-[0.58rem] uppercase tracking-widest"
                >
                  {t.result}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(textResult);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className={`flex items-center gap-1 text-[0.6rem] font-bold px-2 py-0.5 rounded-full border transition-all ${
                      copied
                        ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                        : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 size={10} />
                        {t.copied}
                      </>
                    ) : (
                      "COPY"
                    )}
                  </button>
                  <span className="text-[0.55rem] font-bold bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full border border-violet-100 uppercase">
                    {simplify ? t.simplified : t.expanded}
                  </span>
                </div>
              </div>

              <div className="bg-white/80 rounded-2xl border border-indigo-100/80 px-4 py-5 overflow-x-auto flex flex-col sm:flex-row items-center justify-center gap-2 min-h-[72px] shadow-inner">
                <span className="text-slate-400 font-serif italic text-base shrink-0 select-none">
                  f&apos;({variable}) =
                </span>
                <div
                  className="text-slate-900 text-lg sm:text-xl"
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString(latexResult || "", {
                      throwOnError: false,
                      displayMode: true,
                    }),
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => setShowSteps((s) => !s)}
                className="w-full mt-3 text-[0.75rem] font-bold text-violet-600 flex items-center justify-center gap-1.5 py-3 rounded-xl hover:bg-violet-100/60 transition-colors"
              >
                <BookOpen size={14} />
                {showSteps ? t.hideSteps : t.showSteps}
                <motion.div animate={{ rotate: showSteps ? 180 : 0 }}>
                  <ChevronDown size={14} />
                </motion.div>
              </button>

              <AnimatePresence>
                {showSteps && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 flex flex-col gap-4">
                      {[
                        {
                          t: t.steps.step1.t,
                          d: t.steps.step1.d.replace("variable", variable),
                          f: `\\frac{d}{d${variable}}\\left[\\text{expresión}\\right]`,
                        },
                        { t: t.steps.step2.t, d: t.steps.step2.d, f: latexResult },
                        { t: t.steps.step3.t, d: t.steps.step3.d, f: latexResult },
                      ].map((step, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={11} className="text-violet-600" />
                          </div>
                          <div className="flex flex-col gap-1 min-w-0">
                            <h4 className="font-bold text-slate-900 text-[0.8rem]">{step.t}</h4>
                            <p className="text-[0.72rem] text-slate-500 leading-relaxed">{step.d}</p>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 overflow-x-auto">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: katex.renderToString(step.f, {
                                    throwOnError: false,
                                    displayMode: false,
                                  }),
                                }}
                              />
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
    </motion.div>
  );
});

CalculatorCard.displayName = "CalculatorCard";
export default CalculatorCard;
