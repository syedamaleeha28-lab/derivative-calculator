"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Zap, BookOpen } from "lucide-react";
import CalculatorCard, { type CalculatorHandle } from "./CalculatorCard";
import { dict } from "@/lib/dictionaries";
import { ROUTES } from "@/lib/routes";

const MotionLink = motion.create(Link);

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="flex items-center gap-2 text-[0.8rem] sm:text-[0.85rem] font-medium text-slate-600"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-cyan-50 text-violet-600 shadow-sm">
        {icon}
      </span>
      {text}
    </motion.div>
  );
}

export default function Hero() {
  const calculatorRef = useRef<CalculatorHandle>(null);
  const t = dict.hero;

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
      <motion.div
        className="pointer-events-none absolute -top-24 -left-20 h-[320px] w-[320px] rounded-full bg-violet-400/25 blur-[90px]"
        animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-16 h-[280px] w-[280px] rounded-full bg-cyan-400/20 blur-[80px]"
        animate={{ x: [0, -20, 0], y: [0, 24, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/3 h-[200px] w-[200px] rounded-full bg-indigo-400/15 blur-[70px]"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(139,92,246,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.1) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-5 sm:gap-6 lg:pr-2 xl:pr-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-violet-200/80 text-violet-700 text-[0.65rem] sm:text-[0.7rem] font-bold tracking-widest uppercase w-fit shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 animate-pulse" />
              {t.tag}
            </div>

            <div>
              <h1
                id="hero-heading"
                className="heading-font text-[2rem] sm:text-[2.5rem] lg:text-[2.85rem] xl:text-[3.1rem] leading-[1.08] text-slate-900 tracking-tight mb-4"
              >
                {t.h1}
              </h1>
              <p
                id="hero-description"
                className="text-[1rem] sm:text-[1.05rem] lg:text-[1.1rem] text-slate-600 leading-relaxed max-w-xl"
              >
                {t.desc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                type="button"
                onClick={handleCalculateClick}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-[0.82rem] uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-[0_10px_30px_-6px_rgba(99,102,241,0.55)] hover:shadow-[0_14px_36px_-6px_rgba(139,92,246,0.65)] transition-shadow"
              >
                {t.calcBtn} <ArrowRight size={16} />
              </motion.button>
              <MotionLink
                href={ROUTES.comoFunciona}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white/90 text-slate-800 border border-slate-200/90 hover:border-violet-300 px-6 py-3.5 rounded-2xl font-bold text-[0.82rem] uppercase tracking-wider hover:bg-violet-50/50 transition-colors shadow-sm backdrop-blur-sm"
              >
                <BookOpen size={15} className="text-violet-600 shrink-0" /> {t.howBtn}
              </MotionLink>
            </div>

            <div className="flex flex-col gap-2.5 pt-4 border-t border-violet-100/80">
              <TrustPill icon={<Check size={14} />} text={t.trust1} />
              <TrustPill icon={<Zap size={14} />} text={t.trust2} />
              <TrustPill icon={<BookOpen size={14} />} text={t.trust3} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="relative flex w-full justify-center lg:justify-end"
          >
            <motion.div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <motion.div
                className="hero-calc-glow h-[min(88%,480px)] w-[min(100%,560px)] rounded-[2rem]"
                animate={{ opacity: [0.55, 0.85, 0.55], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <div className="relative z-10 w-full max-w-[600px] lg:max-w-[580px]">
              <CalculatorCard ref={calculatorRef} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
