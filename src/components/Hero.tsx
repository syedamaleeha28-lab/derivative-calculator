"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Check, Zap, BookOpen } from "lucide-react";
import CalculatorCard, { type CalculatorHandle } from "./CalculatorCard";
import { dict } from "@/lib/dictionaries";

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/80 bg-white/90 px-2.5 py-1 text-[0.68rem] sm:text-[0.75rem] font-semibold text-slate-700 shadow-sm"
    >
      <span className="flex h-4 w-4 items-center justify-center text-violet-600">
        {icon}
      </span>
      {text}
    </motion.div>
  );
}

export default function Hero() {
  const calculatorRef = useRef<CalculatorHandle>(null);

  return (
    <section
      id="calculator"
      className="relative overflow-hidden pt-4 pb-12 sm:pt-10 md:pt-14 md:pb-16 scroll-mt-20 bg-gradient-to-b from-white via-indigo-50/30 to-violet-50/40 hero-mesh hero-mesh-animated"
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
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-4 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-3 sm:gap-5 lg:pr-2 xl:pr-4 order-1 lg:order-1"
          >
            <div>
              <h1
                id="hero-heading"
                className="heading-font text-2xl sm:text-[2.5rem] lg:text-[2.65rem] xl:text-[2.9rem] leading-[1.08] text-slate-900 tracking-tight mb-2 sm:mb-3"
              >
                Calculadora de derivadas con pasos
              </h1>
              <p
                id="hero-description"
                className="text-[0.9rem] sm:text-[1rem] lg:text-[1.05rem] text-slate-600 leading-relaxed max-w-md"
              >
                Escribe f(x), calcula al instante y revisa cada paso con precision simbolica.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <TrustPill icon={<Check size={12} />} text="Gratis" />
              <TrustPill icon={<BookOpen size={12} />} text="Paso a paso" />
              <TrustPill icon={<Zap size={12} />} text="Precision simbolica" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="relative flex w-full justify-center lg:justify-end order-2 lg:order-2"
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

            <div className="relative z-10 w-full max-w-[620px] lg:max-w-[700px] xl:max-w-[740px]">
              <CalculatorCard ref={calculatorRef} enablePointEval />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
