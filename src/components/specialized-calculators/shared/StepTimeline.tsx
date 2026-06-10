"use client";

import type { CalcStep } from "@/lib/calculator-math";
import type { CalculatorTheme } from "@/lib/specialized-calculators/themes";
import MathBlock from "./MathBlock";

type Props = {
  steps: CalcStep[];
  theme: CalculatorTheme;
  title: string;
  dark?: boolean;
};

export default function StepTimeline({ steps, theme, title, dark = false }: Props) {
  return (
    <div
      className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-4 sm:p-5`}
    >
      <h3
        className={`text-sm font-bold uppercase tracking-wide mb-4 ${dark ? "text-slate-200" : theme.accentText}`}
      >
        {title}
      </h3>
      <ol className="space-y-4">
        {steps.map((step, i) => (
          <li key={i} className={`border-l-2 ${theme.stepBorder} pl-4`}>
            <p
              className={`text-xs font-semibold mb-1.5 ${dark ? "text-slate-400" : "text-slate-500"}`}
            >
              {i + 1}. {step.label}
            </p>
            <MathBlock latex={step.latex} display={false} />
            {step.detail && (
              <p className={`text-xs mt-1 ${dark ? "text-slate-400" : "text-slate-500"}`}>
                {step.detail}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
