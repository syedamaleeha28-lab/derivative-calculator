"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { quotientRuleWorkflow, sanitizeExpr } from "@/lib/calculator-math";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { QUOTIENT_RULE_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";

const PRESETS = [
  { u: "sin(x)", v: "x" },
  { u: "x^2+1", v: "x-1" },
  { u: "e^x", v: "x^2" },
  { u: "ln(x)", v: "x" },
];

export default function QuotientRuleCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = QUOTIENT_RULE_THEME;
  const [u, setU] = useState("sin(x)");
  const [v, setV] = useState("x");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof quotientRuleWorkflow> | null>(null);

  const run = () => {
    try {
      sanitizeExpr(u);
      sanitizeExpr(v);
      setResult(quotientRuleWorkflow(u, v, "x"));
      setError("");
    } catch {
      setError(t.error);
      setResult(null);
    }
  };

  const inputClass = `w-full rounded-xl border-2 px-3 py-2.5 font-mono text-base outline-none ${theme.inputBg} ${theme.inputRing}`;

  return (
    <CalculatorShell theme={theme} formula={t.quotientFormula}>
      <div className="relative rounded-2xl border-2 border-orange-200 bg-white p-4">
        <div className="space-y-3">
          <label className="block">
            <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.numerator}</span>
            <input value={u} onChange={(e) => setU(e.target.value)} className={`mt-1 ${inputClass}`} />
          </label>
          <div className="border-t-2 border-orange-400 mx-2" aria-hidden />
          <label className="block">
            <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.denominator}</span>
            <input value={v} onChange={(e) => setV(e.target.value)} className={`mt-1 ${inputClass}`} />
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={`${p.u}/${p.v}`}
            type="button"
            onClick={() => {
              setU(p.u);
              setV(p.v);
              setResult(null);
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-orange-100 bg-white"
          >
            {p.u}/{p.v}
          </button>
        ))}
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={run}
        className={`w-full py-3 rounded-xl text-white font-bold text-sm uppercase shadow-lg ${theme.cta} ${theme.ctaHover}`}
      >
        {locale === "es" ? "Derivar cociente" : "Differentiate quotient"}
      </motion.button>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className={`rounded-2xl border ${theme.resultBorder} p-4 text-center ${theme.resultBg}`}>
            <MathBlock latex={`\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = ${result.resultTeX}`} />
          </div>
          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
