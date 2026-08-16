"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  formatLimitApproachTeX,
  exprToTeX,
  sanitizeExpr,
} from "@/lib/calculator-math";
import {
  runContinuityWorkflowWithTimeout,
  type ContinuityWorkflowResult,
} from "@/lib/calculator-math/run-continuity-client";
import { calculatorInputPlaceholder } from "@/lib/calculator-placeholder";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { CONTINUITY_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";

const PRESETS = [
  { f: "(x^2-4)/(x-2)", a: "2" },
  { f: "x^2", a: "2" },
  { f: "1/x", a: "0" },
];

const ERROR_ES = "No se pudo comprobar la continuidad";
const ERROR_EN = "Could not check continuity";

export default function ContinuityCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = CONTINUITY_THEME;
  const [f, setF] = useState("(x^2-4)/(x-2)");
  const [approach, setApproach] = useState("2");
  const [variable, setVariable] = useState("x");
  const [error, setError] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<ContinuityWorkflowResult | null>(null);

  const run = async () => {
    setIsCalculating(true);
    setError("");
    setResult(null);
    try {
      sanitizeExpr(f);
      const workflow = await runContinuityWorkflowWithTimeout(
        f,
        variable.trim() || "x",
        approach,
        locale
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
      formula={locale === "es" ? "continua ⇔ lim f = f(a)" : "continuous ⇔ lim f = f(a)"}
    >
      <label className="block">
        <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.function}</span>
        <input
          value={f}
          onChange={(e) => {
            setF(e.target.value);
            setResult(null);
          }}
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
            className={inputClass}
            placeholder="x"
          />
        </label>
        <label className="block">
          <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>
            {locale === "es" ? "Punto x = a (finito)" : "Point x = a (finite)"}
          </span>
          <input
            value={approach}
            onChange={(e) => {
              setApproach(e.target.value);
              setResult(null);
            }}
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
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-indigo-100 bg-white text-indigo-900"
          >
            x→{p.a}: {p.f}
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
            ? "Comprobando…"
            : "Checking…"
          : locale === "es"
            ? "Comprobar continuidad"
            : "Check continuity"}
      </motion.button>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div
            className={`rounded-2xl border-2 bg-white p-4 shadow-sm ${
              result.continuous ? theme.resultBorder : "border-rose-200"
            }`}
          >
            <p
              className={`text-[0.65rem] font-bold uppercase mb-2 ${
                result.continuous ? theme.accentText : "text-rose-700"
              }`}
            >
              {t.result}
            </p>
            <p
              className={`text-lg font-bold ${
                result.continuous ? "text-emerald-800" : "text-rose-800"
              }`}
            >
              {result.verdict}
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{result.reason}</p>
            <div className="mt-3 space-y-2">
              <MathBlock
                latex={`\\lim_{${variable}\\to ${formatLimitApproachTeX(result.approach)}} ${exprToTeX(sanitizeExpr(f))} = ${result.limitTeX}`}
              />
              <MathBlock
                latex={`f(${formatLimitApproachTeX(result.approach)}) = ${result.fAtATeX}`}
              />
            </div>
          </div>

          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
