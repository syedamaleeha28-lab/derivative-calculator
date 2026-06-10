"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { partialDerivativeWorkflow, sanitizeExpr } from "@/lib/calculator-math";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { PARTIAL_DERIVATIVE_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";

const VARIABLES = ["x", "y", "z"] as const;
const PRESETS = [
  { f: "x^2*y + y^2", v: "x" },
  { f: "x*y*z", v: "y" },
  { f: "sin(x)*cos(y)", v: "x" },
  { f: "x^2 + y^2 + z^2", v: "z" },
];

export default function PartialDerivativesCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = PARTIAL_DERIVATIVE_THEME;
  const [f, setF] = useState("x^2*y + y^2");
  const [variable, setVariable] = useState<(typeof VARIABLES)[number]>("x");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof partialDerivativeWorkflow> | null>(
    null
  );

  const run = () => {
    try {
      sanitizeExpr(f);
      setResult(partialDerivativeWorkflow(f, variable, locale));
      setError("");
    } catch {
      setError(t.error);
      setResult(null);
    }
  };

  return (
    <CalculatorShell theme={theme} formula={t.partialFormula}>
      <label className="block">
        <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>
          f(x, y, z)
        </span>
        <input
          value={f}
          onChange={(e) => setF(e.target.value)}
          className={`mt-1.5 w-full rounded-xl border-2 px-3 py-2.5 font-mono ${theme.inputBg} ${theme.inputRing}`}
          placeholder="x^2*y + sin(y)*z"
        />
      </label>

      <div>
        <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.variable}</span>
        <div className="flex gap-2 mt-2">
          {VARIABLES.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setVariable(v)}
              className={`flex-1 py-2.5 rounded-xl font-bold text-sm border-2 transition-all ${
                variable === v
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-white text-teal-800 border-teal-200 hover:border-teal-400"
              }`}
            >
              ∂/∂{v}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={`${p.f}-${p.v}`}
            type="button"
            onClick={() => {
              setF(p.f);
              setVariable(p.v as (typeof VARIABLES)[number]);
              setResult(null);
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-teal-100 bg-white"
          >
            ∂f/∂{p.v}: {p.f}
          </button>
        ))}
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={run}
        className={`w-full py-3 rounded-xl text-white font-bold text-sm uppercase ${theme.cta} ${theme.ctaHover}`}
      >
        {locale === "es" ? "Calcular derivada parcial" : "Compute partial derivative"}
      </motion.button>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-4 text-center`}>
            <MathBlock latex={`\\frac{\\partial f}{\\partial ${variable}} = ${result.resultTeX}`} />
          </div>
          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
