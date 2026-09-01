"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sanitizeExpr } from "@/lib/calculator-math/sanitize";
import { loadEngine } from "@/lib/calculator-math/load-engine";
import {
  runLimitWorkflowWithTimeout,
  type LimitWorkflowResult,
} from "@/lib/calculator-math/run-limit-client";
import { calculatorInputPlaceholder } from "@/lib/calculator-placeholder";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { LIMITS_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";

type LimitResult = LimitWorkflowResult;

function prefetchMath() {
  void loadEngine();
  void import("@/lib/calculator-math");
}

const PRESETS = [
  { f: "(x^2-4)/(x-2)", a: "2" },
  { f: "sin(x)/x", a: "0" },
  { f: "(1-cos(x))/x^2", a: "0" },
];

const ERROR_ES = "No se pudo calcular este límite";
const ERROR_EN = "Could not compute this limit";

export default function LimitsCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = LIMITS_THEME;
  const [f, setF] = useState("(x^2-4)/(x-2)");
  const [approach, setApproach] = useState("2");
  const [variable, setVariable] = useState("x");
  const [error, setError] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<LimitResult | null>(null);
  const [headlineTeX, setHeadlineTeX] = useState("");

  const run = async () => {
    setIsCalculating(true);
    setError("");
    setResult(null);
    setHeadlineTeX("");
    try {
      const clean = sanitizeExpr(f);
      const v = variable.trim() || "x";
      const workflow = await runLimitWorkflowWithTimeout(f, v, approach, locale);
      const { formatLimitApproachTeX, exprToTeX } = await import("@/lib/calculator-math");
      setHeadlineTeX(
        `\\lim_{${v}\\to ${formatLimitApproachTeX(workflow.approach)}} ${exprToTeX(clean)} = ${workflow.resultTeX}`
      );
      setResult(workflow);
    } catch {
      setError(locale === "es" ? ERROR_ES : ERROR_EN);
      setResult(null);
    } finally {
      setIsCalculating(false);
    }
  };

  const inputClass = `mt-1.5 w-full rounded-xl border-2 px-3 py-2.5 font-mono ${theme.inputBg} ${theme.inputRing}`;

  return (
    <CalculatorShell
      theme={theme}
      formula={locale === "es" ? "limₓ→a f(x)" : "limₓ→a f(x)"}
    >
      <label className="block">
        <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.function}</span>
        <input
          value={f}
          onChange={(e) => {
            setF(e.target.value);
            setResult(null);
          }}
          onFocus={prefetchMath}
          className={inputClass}
          placeholder={calculatorInputPlaceholder(locale)}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>
            {locale === "es" ? "Variable" : "Variable"}
          </span>
          <input
            value={variable}
            onChange={(e) => {
              setVariable(e.target.value);
              setResult(null);
            }}
            onFocus={prefetchMath}
            className={inputClass}
            placeholder="x"
          />
        </label>
        <label className="block">
          <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>
            {locale === "es" ? "x tiende a (punto finito)" : "x approaches (finite point)"}
          </span>
          <input
            value={approach}
            onChange={(e) => {
              setApproach(e.target.value);
              setResult(null);
            }}
            onFocus={prefetchMath}
            className={inputClass}
            placeholder={locale === "es" ? "ej. 2, 0, -1" : "e.g. 2, 0, -1"}
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={`${p.f}->${p.a}`}
            type="button"
            onClick={() => {
              setF(p.f);
              setApproach(p.a);
              setVariable("x");
              setResult(null);
              setHeadlineTeX("");
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-teal-100 bg-white text-teal-900"
          >
            lim→{p.a}: {p.f}
          </button>
        ))}
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={run}
        disabled={isCalculating}
        className={`w-full py-3 rounded-xl text-white font-bold text-sm uppercase ${theme.cta} ${theme.ctaHover} disabled:opacity-60`}
      >
        {isCalculating
          ? locale === "es"
            ? "Calculando…"
            : "Computing…"
          : locale === "es"
            ? "Calcular límite"
            : "Compute limit"}
      </motion.button>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className={`rounded-2xl border-2 ${theme.resultBorder} bg-white p-4 shadow-sm`}>
            <p className={`text-[0.65rem] font-bold uppercase mb-2 ${theme.accentText}`}>
              {t.result}
            </p>
            <MathBlock latex={headlineTeX} />
            <p className="mt-3 font-mono text-sm text-slate-700 break-all">{result.result}</p>
          </div>

          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
