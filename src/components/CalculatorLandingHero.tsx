"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Check, Zap, BookOpen } from "lucide-react";
import CalculatorCard, { type CalculatorHandle } from "./CalculatorCard";
import { dict } from "@/lib/dictionaries";
import { dictEn } from "@/lib/dictionaries-en";
import type { Locale } from "@/lib/locale";

type Props = {
  locale: Locale;
  h1: string;
  intro: string;
  tag?: string;
  defaultExamples?: string[];
  initialVariable?: string;
};

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-[0.8rem] sm:text-[0.85rem] font-medium text-slate-600">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-cyan-50 text-violet-600 shadow-sm">
        {icon}
      </span>
      {text}
    </div>
  );
}

export default function CalculatorLandingHero({
  locale,
  h1,
  intro,
  tag,
  defaultExamples,
  initialVariable,
}: Props) {
  const calculatorRef = useRef<CalculatorHandle>(null);
  const heroDict = locale === "en" ? dictEn.hero : dict.hero;
  const calcDict = locale === "en" ? dictEn.calculator : dict.calculator;
  const badge = tag ?? heroDict.tag;

  const handleCalculateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    calculatorRef.current?.focusAndCalculate();
  };

  return (
    <section
      id="calculator"
      className="relative overflow-hidden pt-10 pb-12 md:pt-14 md:pb-16 scroll-mt-20 bg-gradient-to-b from-white via-indigo-50/30 to-violet-50/40 hero-mesh hero-mesh-animated"
      aria-labelledby="hero-heading"
    >
      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-5 sm:gap-6 lg:pr-2 xl:pr-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-violet-200/80 text-violet-700 text-[0.65rem] sm:text-[0.7rem] font-bold tracking-widest uppercase w-fit shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 animate-pulse" />
              {badge}
            </div>

            <div>
              <h1
                id="hero-heading"
                className="heading-font text-[2rem] sm:text-[2.5rem] lg:text-[2.85rem] xl:text-[3.1rem] leading-[1.08] text-slate-900 tracking-tight mb-4"
              >
                {h1}
              </h1>
              <p className="text-[1rem] sm:text-[1.05rem] lg:text-[1.1rem] text-slate-600 leading-relaxed max-w-xl">
                {intro}
              </p>
            </div>

            <motion.button
              type="button"
              onClick={handleCalculateClick}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-fit items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-[0.82rem] uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-[0_10px_30px_-6px_rgba(99,102,241,0.55)]"
            >
              {heroDict.calcBtn}
            </motion.button>

            <div className="flex flex-col gap-2.5 pt-4 border-t border-violet-100/80">
              <TrustPill icon={<Check size={14} />} text={heroDict.trust1} />
              <TrustPill icon={<Zap size={14} />} text={heroDict.trust2} />
              <TrustPill icon={<BookOpen size={14} />} text={heroDict.trust3} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="relative flex w-full justify-center lg:justify-end"
          >
            <div className="relative z-10 w-full max-w-[600px] lg:max-w-[580px]">
              <CalculatorCard
                ref={calculatorRef}
                dictionary={calcDict}
                examplePresets={defaultExamples}
                initialVariable={initialVariable}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
