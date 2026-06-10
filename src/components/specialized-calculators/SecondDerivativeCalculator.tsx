"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { secondDerivativeWorkflow, sanitizeExpr } from "@/lib/calculator-math";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { SECOND_DERIVATIVE_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";
import DerivativeChainViz from "./shared/DerivativeChainViz";

const PRESETS = [
  { f: "x^4 - 3*x^2", order: 2 },
  { f: "sin(x)", order: 2 },
  { f: "x*exp(x)", order: 3 },
  { f: "ln(x)", order: 2 },
];

type OrderMode = 1 | 2 | 3 | "nth";

export default function SecondDerivativeCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = SECOND_DERIVATIVE_THEME;
  const [f, setF] = useState("x^4 - 3*x^2");
  const [orderMode, setOrderMode] = useState<OrderMode>(2);
  const [nthOrder, setNthOrder] = useState(4);
  const [activeChain, setActiveChain] = useState<number | undefined>(2);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof secondDerivativeWorkflow> | null>(null);

  const order = orderMode === "nth" ? nthOrder : orderMode;

  const run = () => {
    try {
      sanitizeExpr(f);
      setResult(secondDerivativeWorkflow(f, "x", order, locale));
      setActiveChain(order);
      setError("");
    } catch {
      setError(t.error);
      setResult(null);
    }
  };

  const orderButtons: { mode: OrderMode; label: string }[] = [
    { mode: 1, label: locale === "es" ? "1.ª" : "1st" },
    { mode: 2, label: locale === "es" ? "2.ª" : "2nd" },
    { mode: 3, label: locale === "es" ? "3.ª" : "3rd" },
    { mode: "nth", label: "n" },
  ];

  return (
    <CalculatorShell theme={theme} formula={locale === "es" ? "f″, concavidad e inflexión" : "f″, concavity & inflection"}>
      <label className="block">
        <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.function}</span>
        <input
          value={f}
          onChange={(e) => setF(e.target.value)}
          className={`mt-1.5 w-full rounded-xl border-2 px-3 py-2.5 font-mono ${theme.inputBg} ${theme.inputRing}`}
          placeholder="x^4 - 3*x^2"
        />
      </label>

      <div>
        <span className={`text-xs font-bold uppercase ${theme.labelColor}`}>{t.order}</span>
        <div className="flex gap-2 mt-2">
          {orderButtons.map(({ mode, label }) => (
            <button
              key={String(mode)}
              type="button"
              onClick={() => setOrderMode(mode)}
              className={`flex-1 py-2.5 rounded-xl font-bold text-sm border-2 transition-all ${
                orderMode === mode
                  ? "bg-rose-600 text-white border-rose-600 shadow-md"
                  : "bg-white text-rose-800 border-rose-200 hover:border-rose-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {orderMode === "nth" && (
          <div className="mt-3">
            <div className="flex justify-between text-xs font-semibold text-rose-700 mb-1">
              <span>n</span>
              <span className="font-mono text-lg">{nthOrder}</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              value={nthOrder}
              onChange={(e) => setNthOrder(Number(e.target.value))}
              className="w-full accent-rose-600"
              aria-label={t.order}
            />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={`${p.f}-o${p.order}`}
            type="button"
            onClick={() => {
              setF(p.f);
              setOrderMode(p.order <= 3 ? (p.order as 1 | 2 | 3) : "nth");
              if (p.order > 3) setNthOrder(p.order);
              setResult(null);
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-rose-100 bg-white text-rose-800"
          >
            f^({p.order}): {p.f}
          </button>
        ))}
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={run}
        className={`w-full py-3 rounded-xl text-white font-bold text-sm uppercase ${theme.cta} ${theme.ctaHover}`}
      >
        {locale === "es" ? "Analizar derivadas y concavidad" : "Analyze derivatives & concavity"}
      </motion.button>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <DerivativeChainViz
            chain={result.chain}
            theme={theme}
            activeOrder={activeChain}
            onSelect={setActiveChain}
            title={t.chainTitle}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            <div className={`rounded-2xl border-2 ${theme.resultBorder} bg-white p-4 shadow-sm`}>
              <p className={`text-[0.65rem] font-bold uppercase mb-2 ${theme.accentText}`}>
                f^({order})(x)
              </p>
              <MathBlock latex={result.resultTeX} />
            </div>
            {order >= 2 && (
              <div className={`rounded-2xl border-2 ${theme.resultBorder} bg-white p-4 shadow-sm`}>
                <p className={`text-[0.65rem] font-bold uppercase mb-2 ${theme.accentText}`}>
                  {locale === "es" ? "f″(x)" : "f″(x)"}
                </p>
                <MathBlock latex={result.chain.find((c) => c.order === 2)?.tex ?? "—"} />
              </div>
            )}
          </div>

          {order >= 2 && result.concavity.length > 0 && (
            <div className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-4`}>
              <p className={`text-xs font-bold uppercase mb-3 ${theme.accentText}`}>
                {locale === "es" ? "Análisis de concavidad" : "Concavity analysis"}
              </p>
              <ul className="space-y-2">
                {result.concavity.map((c, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm border ${
                      c.sign === "concave-up"
                        ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                        : c.sign === "concave-down"
                          ? "bg-amber-50 border-amber-200 text-amber-900"
                          : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                  >
                    <span className="font-mono text-xs shrink-0">{c.intervalLabel}</span>
                    <span className="font-medium">{c.signLabel}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {order >= 2 && (
            <div className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-4`}>
              <p className={`text-xs font-bold uppercase mb-3 ${theme.accentText}`}>
                {locale === "es" ? "Puntos de inflexión" : "Inflection points"}
              </p>
              {result.inflectionPoints.length === 0 ? (
                <p className="text-sm text-slate-500">
                  {locale === "es"
                    ? "No se detectaron cambios de concavidad en el intervalo analizado."
                    : "No concavity changes detected in the analyzed interval."}
                </p>
              ) : (
                <ul className="space-y-2">
                  {result.inflectionPoints.map((p) => (
                    <li
                      key={p.x}
                      className="flex flex-wrap gap-2 items-center rounded-xl bg-white border border-rose-100 px-3 py-2 text-sm"
                    >
                      <span className="font-mono font-bold text-rose-700">x = {p.x}</span>
                      {p.yNum !== null && (
                        <span className="text-slate-600">
                          ({p.x}, {p.yNum.toFixed(4)})
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
