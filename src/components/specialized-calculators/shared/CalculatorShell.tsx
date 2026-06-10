"use client";

import type { ReactNode } from "react";
import type { CalculatorTheme } from "@/lib/specialized-calculators/themes";

type Props = {
  theme: CalculatorTheme;
  formula?: string;
  formulaLatex?: string;
  children: ReactNode;
  dark?: boolean;
};

export default function CalculatorShell({
  theme,
  formula,
  children,
  dark = false,
}: Props) {
  const Icon = theme.icon;
  return (
    <div
      className={`rounded-3xl border-2 ${theme.shellBorder} ${theme.shellBg} shadow-xl overflow-hidden`}
    >
      {formula && (
        <div
          className={`px-4 py-3 border-b ${theme.shellBorder} ${dark ? "bg-slate-800/80" : "bg-white/60"} flex items-center gap-3`}
        >
          <Icon size={20} className={dark ? "text-indigo-300" : theme.accentText} aria-hidden />
          <span
            className={`text-sm font-mono font-semibold ${dark ? "text-indigo-200" : theme.accentText}`}
          >
            {formula}
          </span>
        </div>
      )}
      <div className="p-4 sm:p-5 space-y-4">{children}</div>
    </div>
  );
}
