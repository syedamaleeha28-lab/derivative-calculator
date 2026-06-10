"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  sampleCurve,
  sanitizeExpr,
  tangentLineWorkflow,
} from "@/lib/calculator-math";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { TANGENT_LINE_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import FunctionPlot from "./shared/FunctionPlot";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";

const PRESETS = [
  { f: "x^2", a: "2" },
  { f: "sin(x)", a: "0" },
  { f: "ln(x)", a: "1" },
  { f: "x^3 - 3*x", a: "1" },
];

export default function TangentLineCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = TANGENT_LINE_THEME;
  const [f, setF] = useState("x^2");
  const [point, setPoint] = useState("2");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof tangentLineWorkflow> | null>(null);

  const curve = useMemo(() => {
    try {
      return sampleCurve(sanitizeExpr(f), "x", -4, 4);
    } catch {
      return [];
    }
  }, [f]);

  const tangentLine = useMemo(() => {
    if (!result || result.slope === null || result.y0 === null) return undefined;
    const a = parseFloat(point);
    if (!Number.isFinite(a)) return undefined;
    return { slope: result.slope, through: { x: a, y: result.y0 } };
  }, [result, point]);

  const run = () => {
    try {
      sanitizeExpr(f);
      setResult(tangentLineWorkflow(f, "x", point, locale));
      setError("");
    } catch {
      setError(t.error);
      setResult(null);
    }
  };

  return (
    <CalculatorShell theme={theme} formula="y = f(a) + f′(a)(x − a)">
      <div className="grid gap-4 sm:grid-cols-[1fr_120px]">
        <label className="block">
          <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.function}</span>
          <input
            value={f}
            onChange={(e) => setF(e.target.value)}
            className={`mt-1.5 w-full rounded-xl border-2 px-3 py-2.5 font-mono ${theme.inputBg} ${theme.inputRing}`}
          />
        </label>
        <label className="block">
          <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.point}</span>
          <input
            value={point}
            onChange={(e) => setPoint(e.target.value)}
            className={`mt-1.5 w-full rounded-xl border-2 px-3 py-2.5 font-mono text-center ${theme.inputBg} ${theme.inputRing}`}
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={`${p.f}@${p.a}`}
            type="button"
            onClick={() => {
              setF(p.f);
              setPoint(p.a);
              setResult(null);
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-violet-100 bg-white"
          >
            f={p.f} @ {p.a}
          </button>
        ))}
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={run}
        className={`w-full py-3 rounded-xl text-white font-bold text-sm uppercase ${theme.cta} ${theme.ctaHover}`}
      >
        {locale === "es" ? "Calcular recta tangente" : "Compute tangent line"}
      </motion.button>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <FunctionPlot
            curve={curve}
            tangentLine={tangentLine}
            theme={theme}
            title={t.graph}
            markers={
              result.y0 !== null && tangentLine
                ? [{ x: tangentLine.through.x, y: tangentLine.through.y, kind: "other" }]
                : []
            }
          />

          <div className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-4 text-center space-y-2`}>
            <p className={`text-xs font-bold uppercase ${theme.accentText}`}>{t.tangentEq}</p>
            <MathBlock latex={result.equationTeX} />
            {result.slope !== null && (
              <p className="text-sm text-slate-600">
                {t.slope}: <strong>{result.slope.toFixed(4)}</strong>
              </p>
            )}
          </div>

          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
