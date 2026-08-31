"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sanitizeExpr } from "@/lib/calculator-math/sanitize";
import { loadEngine } from "@/lib/calculator-math/load-engine";
import { calculatorInputPlaceholder } from "@/lib/calculator-placeholder";
import { calcLabels } from "@/lib/specialized-calculators/labels";
import { PRODUCT_RULE_THEME } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";
import CalculatorShell from "./shared/CalculatorShell";
import MathBlock from "./shared/MathBlock";
import StepTimeline from "./shared/StepTimeline";

type ProductRuleResult = ReturnType<
  typeof import("@/lib/calculator-math").productRuleWorkflow
>;

function prefetchMath() {
  void loadEngine();
  void import("@/lib/calculator-math");
}

const PRESETS = [
  { f: "x^2", g: "sin(x)" },
  { f: "e^x", g: "cos(x)" },
  { f: "x", g: "ln(x)" },
  { f: "x+1", g: "x-2" },
];

export default function ProductRuleCalculator({ locale }: { locale: Locale }) {
  const t = calcLabels(locale);
  const theme = PRODUCT_RULE_THEME;
  const [f, setF] = useState("x^2");
  const [g, setG] = useState("sin(x)");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ProductRuleResult | null>(null);

  const run = () => {
    void (async () => {
      try {
        sanitizeExpr(f);
        sanitizeExpr(g);
        const { productRuleWorkflow } = await import("@/lib/calculator-math");
        setResult(productRuleWorkflow(f, g, "x"));
        setError("");
      } catch {
        setError(t.error);
        setResult(null);
      }
    })();
  };

  const inputClass = `w-full rounded-xl border-2 px-3 py-2.5 font-mono text-base outline-none transition-all ${theme.inputBg} ${theme.inputRing}`;

  return (
    <CalculatorShell theme={theme} formula={t.productFormula}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={`text-xs font-bold uppercase tracking-wide ${theme.labelColor}`}>
            u(x) — {t.fx}
          </span>
          <input
            value={f}
            onChange={(e) => setF(e.target.value)}
            onFocus={prefetchMath}
            className={`mt-1.5 ${inputClass}`}
            placeholder={calculatorInputPlaceholder(locale)}
            aria-label="u(x)"
          />
        </label>
        <label className="block">
          <span className={`text-xs font-bold uppercase tracking-wide ${theme.labelColor}`}>
            v(x) — {t.gx}
          </span>
          <input
            value={g}
            onChange={(e) => setG(e.target.value)}
            onFocus={prefetchMath}
            className={`mt-1.5 ${inputClass}`}
            placeholder={calculatorInputPlaceholder(locale)}
            aria-label="v(x)"
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-[0.65rem] font-bold text-slate-400 uppercase">{t.examples}</span>
        {PRESETS.map((p) => (
          <button
            key={`${p.f}-${p.g}`}
            type="button"
            onClick={() => {
              setF(p.f);
              setG(p.g);
              setResult(null);
            }}
            className="text-[0.7rem] px-2 py-1 rounded-lg border border-cyan-100 bg-white text-slate-600 hover:border-cyan-300"
          >
            u={p.f}, v={p.g}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={run}
          className={`flex-1 py-3 rounded-xl text-white font-bold text-sm uppercase tracking-wide shadow-lg ${theme.cta} ${theme.ctaHover}`}
        >
          {locale === "es" ? "Aplicar regla del producto" : "Apply product rule"}
        </motion.button>
        <button
          type="button"
          onClick={() => {
            setF("");
            setG("");
            setResult(null);
            setError("");
          }}
          className="px-4 py-3 rounded-xl border border-cyan-200 text-cyan-800 text-sm font-semibold"
        >
          {t.clear}
        </button>
      </div>

      {error && <p className="text-rose-600 text-sm">{error}</p>}

      {result && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-4 text-center`}>
            <p className={`text-xs font-bold uppercase ${theme.accentText} mb-2`}>{t.result}</p>
            <MathBlock latex={`(uv)' = ${result.resultTeX}`} />
          </div>
          <StepTimeline steps={result.steps} theme={theme} title={t.steps} />
        </motion.div>
      )}
    </CalculatorShell>
  );
}
