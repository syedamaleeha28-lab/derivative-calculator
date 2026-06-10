"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  criticalPointsWorkflow,
  sampleCurve,
  sanitizeExpr,
} from "@/lib/calculator-math";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { CRITICAL_POINTS_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import FunctionPlot from "./shared/FunctionPlot";
import StepTimeline from "./shared/StepTimeline";

const PRESETS = ["x^3 - 3*x", "x^4 - 4*x^2", "x*exp(-x)", "x^2/(x+1)"];

export default function CriticalPointsCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = CRITICAL_POINTS_THEME;
  const [f, setF] = useState("x^3 - 3*x");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof criticalPointsWorkflow> | null>(null);

  const curve = useMemo(() => {
    if (!result) return [];
    try {
      return sampleCurve(sanitizeExpr(f), "x", -4, 4);
    } catch {
      return [];
    }
  }, [f, result]);

  const markers = useMemo(
    () =>
      result?.points.map((p) => ({
        x: p.xNum,
        y: p.yNum,
        kind:
          p.classification === "local-max"
            ? ("max" as const)
            : p.classification === "local-min"
              ? ("min" as const)
              : ("other" as const),
      })) ?? [],
    [result]
  );

  const run = () => {
    try {
      sanitizeExpr(f);
      setResult(criticalPointsWorkflow(f, "x", locale));
      setError("");
    } catch {
      setError(t.error);
      setResult(null);
    }
  };

  return (
    <CalculatorShell theme={theme} formula="f′(x) = 0 → classify with f″(x)">
      <label className="block">
        <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.function}</span>
        <input
          value={f}
          onChange={(e) => setF(e.target.value)}
          className={`mt-1.5 w-full rounded-xl border-2 px-3 py-2.5 font-mono ${theme.inputBg} ${theme.inputRing}`}
        />
      </label>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((ex) => (
          <button
            key={ex}
            type="button"
            onClick={() => {
              setF(ex);
              setResult(null);
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-emerald-100 bg-white"
          >
            {ex}
          </button>
        ))}
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={run}
        className={`w-full py-3 rounded-xl text-white font-bold text-sm uppercase ${theme.cta} ${theme.ctaHover}`}
      >
        {locale === "es" ? "Detectar puntos críticos" : "Find critical points"}
      </motion.button>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <FunctionPlot
            curve={curve}
            markers={markers}
            theme={theme}
            title={t.graph}
          />

          <div className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-4`}>
            <p className={`text-xs font-bold uppercase mb-3 ${theme.accentText}`}>
              {t.criticalPoints}
            </p>
            {result.points.length === 0 ? (
              <p className="text-sm text-slate-500">{t.noCritical}</p>
            ) : (
              <ul className="space-y-2">
                {result.points.map((p) => (
                  <li
                    key={p.x}
                    className="flex flex-wrap items-center justify-between gap-2 text-sm bg-white/80 rounded-xl px-3 py-2 border border-emerald-100"
                  >
                    <span className="font-mono font-semibold text-slate-800">
                      x = {p.x} → ({p.xNum.toFixed(3)}, {p.yNum.toFixed(3)})
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        p.classification === "local-max"
                          ? "bg-red-100 text-red-700"
                          : p.classification === "local-min"
                            ? "bg-green-100 text-green-700"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {p.classificationLabel} (f″ = {p.fppAtPoint})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
