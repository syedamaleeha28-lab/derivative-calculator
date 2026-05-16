"use client";

import { dispatchCalculatorInput } from "@/lib/calculator-events";
import { useLang } from "@/contexts/I18nContext";

export default function PopularSearches() {
  const { dict } = useLang();
  const t = dict.popularSearches;

  if (!t?.functions?.length) return null;

  const handleSelect = (expr: string) => {
    dispatchCalculatorInput(expr);
    const el = document.getElementById("calculator");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="mt-8 border-t border-slate-100 pt-6"
      aria-labelledby="popular-functions-heading"
    >
      <h3
        id="popular-functions-heading"
        className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500"
      >
        {t.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {t.functions.map((expr) => (
          <button
            key={expr}
            type="button"
            onClick={() => handleSelect(expr)}
            className="rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-1.5 font-mono text-[0.8125rem] font-medium text-slate-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
          >
            {expr}
          </button>
        ))}
      </div>
    </section>
  );
}
