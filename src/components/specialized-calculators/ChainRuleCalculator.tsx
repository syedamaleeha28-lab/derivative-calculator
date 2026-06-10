"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { chainRuleWorkflow, sanitizeExpr } from "@/lib/calculator-math";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { CHAIN_RULE_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";

const PRESETS = [
  { outer: "sin(u)", inner: "3*x" },
  { outer: "u^2", inner: "x+1" },
  { outer: "ln(u)", inner: "x^2+1" },
  { outer: "exp(u)", inner: "sin(x)" },
];

export default function ChainRuleCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = CHAIN_RULE_THEME;
  const [outer, setOuter] = useState("sin(u)");
  const [inner, setInner] = useState("3*x");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof chainRuleWorkflow> | null>(null);

  const run = () => {
    try {
      sanitizeExpr(outer);
      sanitizeExpr(inner);
      if (!/\bu\b/.test(outer)) {
        setError(
          locale === "es"
            ? "Usa u como variable en la función exterior (ej. sin(u), u^2, ln(u))."
            : "Use u as the variable in the outer function (e.g. sin(u), u^2, ln(u))."
        );
        setResult(null);
        return;
      }
      setResult(chainRuleWorkflow(outer, inner, locale));
      setError("");
    } catch {
      setError(t.error);
      setResult(null);
    }
  };

  const inputClass = `w-full rounded-xl border-2 px-3 py-2.5 font-mono ${theme.inputBg} ${theme.inputRing}`;

  return (
    <CalculatorShell theme={theme} formula={t.chainFormula}>
      <div className="grid gap-4">
        <label className="block">
          <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>
            {locale === "es" ? "Exterior f(u)" : "Outer f(u)"}
          </span>
          <input
            value={outer}
            onChange={(e) => setOuter(e.target.value)}
            className={`mt-1.5 ${inputClass}`}
            placeholder="sin(u)"
          />
        </label>

        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-1 text-lime-600">
            <ArrowDown size={18} aria-hidden />
            <span className="text-[0.65rem] font-bold uppercase tracking-wide">
              {locale === "es" ? "compone con" : "composes with"}
            </span>
          </div>
        </div>

        <label className="block">
          <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>
            {locale === "es" ? "Interior g(x)" : "Inner g(x)"}
          </span>
          <input
            value={inner}
            onChange={(e) => setInner(e.target.value)}
            className={`mt-1.5 ${inputClass}`}
            placeholder="3*x"
          />
        </label>
      </div>

      {/* Nested function builder */}
      <div
        className={`rounded-2xl border-2 border-dashed ${theme.shellBorder} p-4 bg-lime-50/30`}
        aria-label={locale === "es" ? "Composición anidada" : "Nested composition"}
      >
        <p className={`text-[0.65rem] font-bold uppercase mb-3 ${theme.accentText}`}>
          {locale === "es" ? "Constructor visual" : "Visual builder"}
        </p>
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-2xl border-2 border-lime-400 bg-lime-100/60 px-5 py-3 text-center min-w-[200px]">
            <p className="text-[0.6rem] font-bold text-lime-800 uppercase mb-1">f(u)</p>
            <code className="text-sm font-mono text-lime-900">{outer}</code>
            <div className="mt-2 rounded-xl border border-lime-500 bg-white px-4 py-2">
              <p className="text-[0.55rem] font-bold text-amber-700 uppercase mb-0.5">g(x)</p>
              <code className="text-sm font-mono text-amber-900">{inner}</code>
            </div>
          </div>
          {result && (
            <div className="text-xs text-center">
              <MathBlock latex={`f(g(x)) = ${result.compositeTeX}`} display={false} />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={`${p.outer}-${p.inner}`}
            type="button"
            onClick={() => {
              setOuter(p.outer);
              setInner(p.inner);
              setResult(null);
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-lime-200 bg-white"
          >
            {p.outer} ∘ {p.inner}
          </button>
        ))}
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={run}
        className={`w-full py-3 rounded-xl text-white font-bold text-sm uppercase ${theme.cta} ${theme.ctaHover}`}
      >
        {locale === "es" ? "Aplicar regla de la cadena" : "Apply chain rule"}
      </motion.button>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className={`rounded-2xl border-2 ${theme.resultBorder} bg-white p-3 text-center`}>
              <p className={`text-[0.6rem] font-bold uppercase mb-2 ${theme.accentText}`}>
                f′(u)
              </p>
              <MathBlock latex={result.outerPrimeTeX} />
            </div>
            <div className="flex items-center justify-center">
              <X size={20} className="text-lime-500" aria-label="times" />
            </div>
            <div className={`rounded-2xl border-2 ${theme.resultBorder} bg-white p-3 text-center`}>
              <p className={`text-[0.6rem] font-bold uppercase mb-2 ${theme.accentText}`}>
                g′(x)
              </p>
              <MathBlock latex={result.innerPrimeTeX} />
            </div>
          </div>

          <div className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-4 text-center`}>
            <p className={`text-xs font-bold uppercase mb-2 ${theme.accentText}`}>
              f′(g(x)) · g′(x)
            </p>
            <MathBlock latex={result.outerPrimeAtInnerTeX} display={false} />
            <p className="text-lime-600 font-bold my-1">×</p>
            <MathBlock latex={result.innerPrimeTeX} display={false} />
            <div className="border-t border-lime-200 mt-3 pt-3">
              <p className="text-[0.65rem] font-bold uppercase text-lime-800 mb-1">
                {t.result}
              </p>
              <MathBlock latex={result.resultTeX} />
            </div>
          </div>

          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
