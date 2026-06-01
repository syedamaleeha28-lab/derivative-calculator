"use client";

import { motion } from "framer-motion";
import { Check, Zap, BookOpen } from "lucide-react";
import CalculatorCtaBanner from "./CalculatorCtaBanner";
import { dict } from "@/lib/dictionaries";
import { dictEn } from "@/lib/dictionaries-en";
import type { Locale } from "@/lib/locale";

type Props = {
  locale: Locale;
  h1: string;
  intro: string;
  tag?: string;
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

/** Text-focused hero for educational calculator landings (no embedded widget). */
export default function EducationalLandingHero({ locale, h1, intro, tag }: Props) {
  const heroDict = locale === "en" ? dictEn.hero : dict.hero;
  const badge = tag ?? heroDict.tag;

  return (
    <header className="relative overflow-hidden pt-10 pb-12 md:pt-14 md:pb-16 bg-gradient-to-b from-white via-indigo-50/30 to-violet-50/40 hero-mesh">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-violet-200/80 text-violet-700 text-[0.65rem] sm:text-[0.7rem] font-bold tracking-widest uppercase w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 animate-pulse" />
            {badge}
          </div>

          <div>
            <h1 className="heading-font text-[2rem] sm:text-[2.5rem] lg:text-[2.85rem] leading-[1.08] text-slate-900 tracking-tight mb-4">
              {h1}
            </h1>
            <p className="text-[1rem] sm:text-[1.05rem] text-slate-600 leading-relaxed">{intro}</p>
          </div>

          <CalculatorCtaBanner locale={locale} />

          <div className="flex flex-col gap-2.5 pt-2 border-t border-violet-100/80">
            <TrustPill icon={<Check size={14} />} text={heroDict.trust1} />
            <TrustPill icon={<Zap size={14} />} text={heroDict.trust2} />
            <TrustPill icon={<BookOpen size={14} />} text={heroDict.trust3} />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
