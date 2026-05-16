"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, BookOpen } from "lucide-react";
import CalculatorCard, { type CalculatorHandle } from "./CalculatorCard";
import { usePathname } from "next/navigation";
import { dictionaries, Lang } from "@/lib/dictionaries";
import LanguageLink from "@/components/LanguageLink";

const MotionLink = motion(LanguageLink);

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[0.75rem] font-medium text-slate-500">
      <span className="text-violet-600">{icon}</span>
      {text}
    </div>
  );
}

export default function Hero() {
  const calculatorRef = useRef<CalculatorHandle>(null);
  const pathname = usePathname() || "";
  const currentLang = (pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es") as Lang;
  const t = dictionaries[currentLang].hero;

  const handleCalculateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    calculatorRef.current?.focusAndCalculate();
  };

  return (
    <section
      id="calculator"
      className="relative overflow-hidden pt-8 pb-8 md:pt-10 md:pb-10 scroll-mt-20 bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-violet-500/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] xl:grid-cols-[minmax(0,1fr)_440px] gap-6 lg:gap-8 xl:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="order-1 lg:order-2 w-full lg:sticky lg:top-20"
          >
            <CalculatorCard ref={calculatorRef} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="order-2 lg:order-1 flex flex-col gap-4 lg:gap-5 lg:pt-2"
          >
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-violet-50 border border-violet-200/80 text-violet-700 text-[0.62rem] font-bold tracking-widest uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              {t.tag}
            </div>

            <div>
              <h1
                id="hero-heading"
                className="heading-font text-[1.65rem] sm:text-[2rem] lg:text-[2.35rem] xl:text-[2.5rem] leading-[1.12] text-slate-900 tracking-tight mb-2.5"
              >
                {t.title1}{" "}
                <span className="text-violet-600">{t.title2}</span> {t.title3}
              </h1>
              <p
                id="hero-description"
                className="text-[0.9rem] sm:text-[0.95rem] text-slate-600 leading-relaxed max-w-md"
              >
                {t.desc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <motion.button
                type="button"
                onClick={handleCalculateClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-[0.78rem] uppercase tracking-wider shadow-md"
              >
                {t.calcBtn} <ArrowRight size={15} />
              </motion.button>
              <MotionLink
                href="/how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 hover:border-violet-300 px-5 py-2.5 rounded-xl font-bold text-[0.78rem] uppercase tracking-wider hover:bg-slate-50 transition-colors"
              >
                <BookOpen size={14} className="text-violet-600 shrink-0" /> {t.howBtn}
              </MotionLink>
            </div>

            <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-100">
              <TrustPill icon={<Check size={12} />} text={t.trust1} />
              <TrustPill icon={<Zap size={12} />} text={t.trust2} />
              <TrustPill icon={<BookOpen size={12} />} text={t.trust3} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
