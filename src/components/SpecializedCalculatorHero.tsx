"use client";

import { motion } from "framer-motion";
import { Check, Zap, BookOpen } from "lucide-react";
import { SpecializedCalculator } from "@/components/specialized-calculators";
import { heroLabels } from "@/lib/specialized-calculators/hero-labels";
import { THEMES, type SpecializedCalculatorKind } from "@/lib/specialized-calculators/themes";
import type { Locale } from "@/lib/locale";

type Props = {
  locale: Locale;
  kind: SpecializedCalculatorKind;
  h1: string;
  intro: string;
  tag?: string;
};

function TrustPill({
  icon,
  text,
  dark,
}: {
  icon: React.ReactNode;
  text: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 text-[0.8rem] sm:text-[0.85rem] font-medium ${dark ? "text-slate-300" : "text-slate-600"}`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-lg shadow-sm ${
          dark ? "bg-slate-700 text-indigo-300" : "bg-white/80 text-current border border-white/60"
        }`}
      >
        {icon}
      </span>
      {text}
    </div>
  );
}

export default function SpecializedCalculatorHero({
  locale,
  kind,
  h1,
  intro,
  tag,
}: Props) {
  const theme = THEMES[kind];
  const copy = heroLabels(locale, kind);
  const Icon = theme.icon;
  const dark = kind === "higher-order";

  const scrollToCalc = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="calculator"
      className={`relative overflow-hidden pt-10 pb-12 md:pt-14 md:pb-16 scroll-mt-20 bg-gradient-to-b ${theme.heroGradient} ${dark ? "text-white" : ""}`}
      aria-labelledby="hero-heading"
    >
      {!dark && <div className="absolute inset-0 hero-mesh hero-mesh-animated opacity-40 pointer-events-none" />}
      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-5 sm:gap-6 lg:pr-2 xl:pr-6"
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[0.65rem] sm:text-[0.7rem] font-bold tracking-widest uppercase w-fit shadow-sm backdrop-blur-sm ${theme.badge}`}
            >
              <Icon size={14} aria-hidden />
              {tag ?? (locale === "es" ? "Calculadora especializada" : "Specialized calculator")}
            </div>

            <div>
              <h1
                id="hero-heading"
                className={`heading-font text-[2rem] sm:text-[2.5rem] lg:text-[2.85rem] xl:text-[3.1rem] leading-[1.08] tracking-tight mb-4 ${dark ? "text-white" : "text-slate-900"}`}
              >
                {h1}
              </h1>
              <p
                className={`text-[1rem] sm:text-[1.05rem] lg:text-[1.1rem] leading-relaxed max-w-xl ${dark ? "text-slate-300" : "text-slate-600"}`}
              >
                {intro}
              </p>
            </div>

            <motion.button
              type="button"
              onClick={scrollToCalc}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex w-fit items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-[0.82rem] uppercase tracking-wider text-white shadow-lg ${theme.cta} ${theme.ctaHover}`}
            >
              <Icon size={16} aria-hidden />
              {copy.cta}
            </motion.button>

            <div
              className={`flex flex-col gap-2.5 pt-4 border-t ${dark ? "border-slate-700" : "border-white/60"}`}
            >
              <TrustPill icon={<Check size={14} />} text={copy.trust1} dark={dark} />
              <TrustPill icon={<Zap size={14} />} text={copy.trust2} dark={dark} />
              <TrustPill icon={<BookOpen size={14} />} text={copy.trust3} dark={dark} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="relative flex w-full justify-center lg:justify-end"
          >
            <div className="relative z-10 w-full max-w-[600px] lg:max-w-[580px]">
              <SpecializedCalculator kind={kind} locale={locale} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
