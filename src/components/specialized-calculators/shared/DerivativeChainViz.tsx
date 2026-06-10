"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { CalculatorTheme } from "@/lib/specialized-calculators/themes";
import MathBlock from "./MathBlock";

type ChainItem = { order: number; tex: string; label: string };

type Props = {
  chain: ChainItem[];
  theme: CalculatorTheme;
  activeOrder?: number;
  onSelect?: (order: number) => void;
  title: string;
  dark?: boolean;
};

export default function DerivativeChainViz({
  chain,
  theme,
  activeOrder,
  onSelect,
  title,
  dark = false,
}: Props) {
  return (
    <div className={`rounded-2xl border ${theme.resultBorder} ${theme.resultBg} p-4`}>
      <p
        className={`text-xs font-bold uppercase tracking-wide mb-3 ${dark ? "text-slate-300" : theme.accentText}`}
      >
        {title}
      </p>
      <div className="flex flex-wrap items-stretch gap-1">
        {chain.map((c, i) => {
          const active = activeOrder === c.order;
          return (
            <div key={c.order} className="flex items-center gap-1">
              <motion.button
                type="button"
                onClick={() => onSelect?.(c.order)}
                whileHover={onSelect ? { scale: 1.02 } : undefined}
                className={`min-w-[100px] rounded-xl border-2 px-3 py-2.5 text-center transition-all ${
                  active
                    ? "border-rose-500 bg-white shadow-md ring-2 ring-rose-200"
                    : dark
                      ? "border-slate-600 bg-slate-900/60 hover:border-indigo-400"
                      : `${theme.resultBorder} bg-white/80 hover:shadow-sm`
                } ${onSelect ? "cursor-pointer" : "cursor-default"}`}
              >
                <p
                  className={`text-[0.65rem] font-bold mb-1 ${dark ? "text-indigo-300" : theme.accentText}`}
                >
                  {c.label}
                </p>
                <MathBlock latex={c.tex} display={false} />
              </motion.button>
              {i < chain.length - 1 && (
                <ChevronRight
                  size={16}
                  className={dark ? "text-slate-500 shrink-0" : "text-slate-300 shrink-0"}
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
