"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { higherOrderWorkflow, sanitizeExpr } from "@/lib/calculator-math";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { HIGHER_ORDER_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";

const PRESETS = [
  { f: "x^5", n: 3 },
  { f: "sin(x)", n: 4 },
  { f: "e^x", n: 5 },
  { f: "x*exp(x)", n: 2 },
];

export default function HigherOrderDerivativeCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = HIGHER_ORDER_THEME;
  const dark = true;
  const [f, setF] = useState("x^5");
  const [order, setOrder] = useState(3);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof higherOrderWorkflow> | null>(null);

  const run = () => {
    try {
      sanitizeExpr(f);
      setResult(higherOrderWorkflow(f, "x", order, locale));
      setError("");
    } catch {
      setError(t.error);
      setResult(null);
    }
  };

  return (
    <CalculatorShell theme={theme} formula={`d^n f / dx^n`} dark={dark}>
      <label className="block">
        <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.function}</span>
        <input
          value={f}
          onChange={(e) => setF(e.target.value)}
          className={`mt-1.5 w-full rounded-xl border-2 px-3 py-2.5 font-mono ${theme.inputBg} ${theme.inputRing}`}
        />
      </label>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.order}</span>
          <span className="text-indigo-300 font-mono font-bold text-lg">n = {order}</span>
        </div>
        <input
          type="range"
          min={1}
          max={5}
          value={order}
          onChange={(e) => setOrder(Number(e.target.value))}
          className="w-full accent-indigo-500"
          aria-label={t.order}
        />
        <div className="flex justify-between text-[0.65rem] text-slate-500 mt-1">
          <span>1st</span>
          <span>2nd</span>
          <span>3rd</span>
          <span>4th</span>
          <span>5th</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={`${p.f}-n${p.n}`}
            type="button"
            onClick={() => {
              setF(p.f);
              setOrder(p.n);
              setResult(null);
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-slate-600 bg-slate-800 text-slate-200"
          >
            n={p.n}: {p.f}
          </button>
        ))}
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={run}
        className={`w-full py-3 rounded-xl text-white font-bold text-sm uppercase ${theme.cta} ${theme.ctaHover}`}
      >
        {locale === "es" ? "Calcular derivada de orden n" : "Compute nth derivative"}
      </motion.button>

      {error && <p className="text-rose-400 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-4 text-center`}>
            <p className="text-xs font-bold uppercase text-indigo-300 mb-2">
              f^({order})(x)
            </p>
            <MathBlock latex={result.resultTeX} />
          </div>

          <div className={`rounded-2xl border ${theme.resultBorder} p-4 ${theme.resultBg}`}>
            <p className="text-xs font-bold uppercase text-indigo-300 mb-3">{t.chainTitle}</p>
            <div className="flex flex-wrap gap-2">
              {result.chain.map((c) => (
                <div
                  key={c.order}
                  className="flex-1 min-w-[120px] rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-center"
                >
                  <p className="text-[0.65rem] text-slate-400 mb-1">n={c.order}</p>
                  <MathBlock latex={c.tex} display={false} />
                </div>
              ))}
            </div>
          </div>

          <StepTimeline steps={result.steps} theme={theme} title={t.steps} dark={dark} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
