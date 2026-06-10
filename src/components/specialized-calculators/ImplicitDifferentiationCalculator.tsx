"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { implicitDifferentiationWorkflow, sanitizeExpr } from "@/lib/calculator-math";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { IMPLICIT_DIFF_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";

const PRESETS = [
  { left: "x^2 + y^2", right: "25" },
  { left: "x*y + x", right: "1" },
  { left: "x^3 + y^3", right: "3*x*y" },
  { left: "sin(x*y)", right: "x" },
];

export default function ImplicitDifferentiationCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = IMPLICIT_DIFF_THEME;
  const [left, setLeft] = useState("x^2 + y^2");
  const [right, setRight] = useState("25");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof implicitDifferentiationWorkflow> | null>(
    null
  );

  const run = () => {
    try {
      sanitizeExpr(left);
      sanitizeExpr(right);
      setResult(implicitDifferentiationWorkflow(left, right, locale));
      setError("");
    } catch {
      setError(t.error);
      setResult(null);
    }
  };

  const inputClass = `w-full rounded-xl border-2 px-3 py-2.5 font-mono ${theme.inputBg} ${theme.inputRing}`;

  return (
    <CalculatorShell theme={theme} formula={t.implicitFormula}>
      <p className={`text-xs font-bold uppercase ${theme.labelColor}`}>
        {locale === "es" ? "Modo ecuación" : "Equation mode"}
      </p>

      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <label className="flex-1 block">
          <span className="text-[0.65rem] font-semibold text-stone-500">
            {locale === "es" ? "Lado izquierdo" : "Left side"}
          </span>
          <input
            value={left}
            onChange={(e) => setLeft(e.target.value)}
            className={`mt-1 ${inputClass}`}
            placeholder="x^2 + y^2"
          />
        </label>
        <div
          className="flex items-center justify-center text-2xl font-bold text-stone-400 sm:pt-5"
          aria-hidden
        >
          =
        </div>
        <label className="flex-1 block">
          <span className="text-[0.65rem] font-semibold text-stone-500">
            {locale === "es" ? "Lado derecho" : "Right side"}
          </span>
          <input
            value={right}
            onChange={(e) => setRight(e.target.value)}
            className={`mt-1 ${inputClass}`}
            placeholder="25"
          />
        </label>
      </div>

      <div className={`rounded-xl border ${theme.resultBorder} bg-stone-100/80 px-4 py-3 text-center font-mono text-sm text-stone-700`}>
        F(x, y) = ({left}) − ({right}) = 0
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={`${p.left}=${p.right}`}
            type="button"
            onClick={() => {
              setLeft(p.left);
              setRight(p.right);
              setResult(null);
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-stone-200 bg-white"
          >
            {p.left} = {p.right}
          </button>
        ))}
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={run}
        className={`w-full py-3 rounded-xl text-white font-bold text-sm uppercase ${theme.cta} ${theme.ctaHover}`}
      >
        {locale === "es" ? "Resolver dy/dx" : "Solve for dy/dx"}
      </motion.button>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className={`rounded-2xl border-2 ${theme.resultBorder} bg-white p-4`}>
              <p className={`text-[0.65rem] font-bold uppercase mb-2 ${theme.accentText}`}>
                F(x, y)
              </p>
              <MathBlock latex={result.FTeX} />
            </div>
            <div className={`rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-4 text-center`}>
              <p className="text-[0.65rem] font-bold uppercase text-rose-800 mb-2">dy/dx</p>
              <MathBlock latex={result.resultTeX} />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className={`rounded-xl border ${theme.resultBorder} ${theme.resultBg} p-3`}>
              <p className={`text-[0.6rem] font-bold uppercase mb-1 ${theme.accentText}`}>
                ∂F/∂x
              </p>
              <MathBlock latex={result.FxTeX} display={false} />
            </div>
            <div className={`rounded-xl border ${theme.resultBorder} ${theme.resultBg} p-3`}>
              <p className={`text-[0.6rem] font-bold uppercase mb-1 ${theme.accentText}`}>
                ∂F/∂y
              </p>
              <MathBlock latex={result.FyTeX} display={false} />
            </div>
          </div>

          <div className={`rounded-2xl border ${theme.resultBorder} bg-white p-4 text-center`}>
            <p className="text-xs text-stone-500 mb-2">
              {locale === "es" ? "Fórmula implícita" : "Implicit formula"}
            </p>
            <MathBlock latex={`\\frac{dy}{dx} = -\\frac{F_x}{F_y} = ${result.resultTeX}`} />
          </div>

          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
