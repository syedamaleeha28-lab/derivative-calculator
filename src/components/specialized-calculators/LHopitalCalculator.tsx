"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { exprToTeX, sanitizeExpr } from "@/lib/calculator-math";
import {
  runLhopitalWorkflowWithTimeout,
  type LhopitalWorkflowResult,
} from "@/lib/calculator-math/run-lhopital-client";
import { calculatorInputPlaceholder } from "@/lib/calculator-placeholder";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { heroLabels } from "@/lib/specialized-calculators/hero-labels";
import { LHOPITAL_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";

const PRESETS = [
  { f: "sin(x)", g: "x", a: "0" },
  { f: "e^x-1", g: "x", a: "0" },
  { f: "1-cos(x)", g: "x^2", a: "0" },
  { f: "x+1", g: "x+2", a: "1" },
];

const ERROR_ES = "No se pudo aplicar L'Hôpital a esta expresión";
const ERROR_EN = "Could not apply L'Hôpital to this expression";

export default function LHopitalCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const copy = heroLabels(locale, "lhopital");
  const theme = LHOPITAL_THEME;
  const [f, setF] = useState("sin(x)");
  const [g, setG] = useState("x");
  const [approach, setApproach] = useState("0");
  const [variable, setVariable] = useState("x");
  const [error, setError] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<LhopitalWorkflowResult | null>(null);

  const run = async () => {
    setIsCalculating(true);
    setError("");
    setResult(null);
    try {
      sanitizeExpr(f);
      sanitizeExpr(g);
      const workflow = await runLhopitalWorkflowWithTimeout(
        f,
        g,
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
      formula={locale === "es" ? "lim f/g = lim f′/g′  (0/0)" : "lim f/g = lim f′/g′  (0/0)"}
    >
      <div className="flex flex-col gap-1.5 rounded-xl border border-violet-100 bg-white/80 px-3 py-2.5 text-[0.75rem] text-slate-600">
        <p className="text-[0.85rem] leading-relaxed text-slate-700">
          {locale === "es"
            ? "Esta calculadora resuelve casos 0/0 en un punto finito; los casos ∞/∞ se explican más abajo, pero aún no se calculan automáticamente."
            : "This calculator solves 0/0 cases at a finite point; ∞/∞ cases are explained below, but they are not computed automatically yet."}
        </p>
        <p>{copy.trust1}</p>
        <p>{copy.trust2}</p>
        <p>{copy.trust3}</p>
      </div>

      <div className="relative rounded-2xl border-2 border-violet-200 bg-white p-4">
        <div className="space-y-3">
          <label className="block">
            <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>
              {locale === "es" ? "Numerador f(x)" : "Numerator f(x)"}
            </span>
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
          <div className="border-t-2 border-violet-400 mx-2" aria-hidden />
          <label className="block">
            <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>
              {locale === "es" ? "Denominador g(x)" : "Denominator g(x)"}
            </span>
            <input
              value={g}
              onChange={(e) => {
                setG(e.target.value);
                setResult(null);
              }}
              className={inputClass}
              placeholder={calculatorInputPlaceholder(locale)}
            />
          </label>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.variable}</span>
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
            {locale === "es" ? "x tiende a (punto finito)" : "x approaches (finite point)"}
          </span>
          <input
            value={approach}
            onChange={(e) => {
              setApproach(e.target.value);
              setResult(null);
            }}
            className={inputClass}
            placeholder={locale === "es" ? "ej. 0, 1, -1" : "e.g. 0, 1, -1"}
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={`${p.f}/${p.g}->${p.a}`}
            type="button"
            onClick={() => {
              setF(p.f);
              setG(p.g);
              setApproach(p.a);
              setVariable("x");
              setResult(null);
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-violet-100 bg-white text-violet-900"
          >
            lim→{p.a}: {p.f}/{p.g}
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
          : copy.cta}
      </motion.button>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div
            className={`rounded-2xl border-2 bg-white p-4 shadow-sm ${
              result.applies && !result.exhausted ? theme.resultBorder : "border-amber-200"
            }`}
          >
            <p
              className={`text-[0.65rem] font-bold uppercase mb-2 ${
                result.applies && !result.exhausted ? theme.accentText : "text-amber-800"
              }`}
            >
              {t.result}
            </p>
            <p
              data-testid="lhopital-verdict"
              className={`text-lg font-bold ${
                result.applies && !result.exhausted ? "text-emerald-800" : "text-amber-900"
              }`}
            >
              {result.verdict}
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{result.reason}</p>
            <div className="mt-3 space-y-2">
              <MathBlock
                latex={`\\lim_{${variable}\\to ${result.approach}} \\dfrac{${exprToTeX(sanitizeExpr(f))}}{${exprToTeX(sanitizeExpr(g))}} = ${result.resultTeX || "\\text{¿?}"}`}
              />
            </div>
            {result.result ? (
              <p data-testid="lhopital-result" className="mt-3 font-mono text-sm text-slate-700 break-all">
                {result.result}
              </p>
            ) : null}
          </div>

          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
