"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { formatNumericResult } from "@/lib/calculator-math";

type PointEvaluationSectionProps = {
  variable: string;
  locale: "es" | "en";
  evalPoint: string;
  onEvalPointChange: (value: string) => void;
  expanded: boolean;
  onToggle: () => void;
};

export function PointEvaluationSection({
  variable,
  locale,
  evalPoint,
  onEvalPointChange,
  expanded,
  onToggle,
}: PointEvaluationSectionProps) {
  const label =
    locale === "es" ? "Evaluar en un punto (opcional)" : "Evaluate at a point (optional)";
  const placeholder = locale === "es" ? "ej. 0, π/2, 1" : "e.g. 0, pi/2, 1";

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={onToggle}
        style={{ touchAction: "manipulation" }}
        className="w-full flex items-center justify-between text-[0.7rem] font-bold text-violet-600 py-2 px-1 rounded-lg hover:bg-violet-50/60 transition-colors"
        aria-expanded={expanded}
      >
        {label}
        <ChevronDown size={12} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <label className="flex items-center gap-2 mt-1 pb-1">
              <span className="text-[0.75rem] font-semibold text-slate-600 shrink-0">
                {variable} =
              </span>
              <input
                type="text"
                value={evalPoint}
                onChange={(e) => onEvalPointChange(e.target.value)}
                placeholder={placeholder}
                className="flex-1 min-w-0 rounded-lg border border-slate-200 px-2.5 py-2 text-base font-mono text-slate-800 outline-none focus:border-violet-400"
              />
            </label>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type PointEvalResultLineProps = {
  variable: string;
  displayPoint: string;
  value: number;
  partial?: boolean;
};

export function PointEvalResultLine({
  variable,
  displayPoint,
  value,
  partial = false,
}: PointEvalResultLineProps) {
  const formatted = formatNumericResult(value);

  return (
    <div className="mt-3 rounded-xl border border-violet-100 bg-violet-50/70 px-4 py-3 text-center">
      <p className="text-[0.9rem] font-mono font-semibold text-slate-800">
        {partial ? (
          <>
            ∂f/∂{variable}({displayPoint}) = {formatted}
          </>
        ) : (
          <>
            f&apos;({displayPoint}) = {formatted}
          </>
        )}
      </p>
    </div>
  );
}
