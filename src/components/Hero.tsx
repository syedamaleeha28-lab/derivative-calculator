"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, BookOpen } from "lucide-react";
import CalculatorCard, { type CalculatorHandle } from "./CalculatorCard";
import { usePathname } from "next/navigation";
import { dictionaries, Lang } from "@/lib/dictionaries";
import LanguageLink from "@/components/LanguageLink";

const MotionLink = motion(LanguageLink);

// ─── Inline SVG mascot robot ──────────────────────────────────────────────────
function MascotRobot() {
  return (
    <svg
      viewBox="0 0 140 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Mascota robot Calculadora Derivadas"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <radialGradient id="faceGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </radialGradient>
      </defs>

      {/* Subtle Floating Symbols */}
      <g opacity="0.4">
        <text x="10" y="30" fill="#E56B6F" fontSize="12" fontWeight="bold" transform="rotate(-15 10 30)">∫</text>
        <text x="115" y="40" fill="#8B5CF6" fontSize="10" fontWeight="bold" transform="rotate(10 115 40)">dx</text>
        <circle cx="120" cy="110" r="2.5" fill="#E56B6F" opacity="0.3" />
      </g>

      {/* Antenna */}
      <path d="M70 18L70 35" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
      <circle cx="70" cy="15" r="5" fill="#E56B6F" />
      <circle cx="70" cy="15" r="2" fill="white" opacity="0.4" />

      {/* Head */}
      <rect x="30" y="35" width="80" height="65" rx="32" fill="url(#bodyGrad)" />
      <rect x="38" y="43" width="64" height="42" rx="21" fill="url(#faceGrad)" />
      
      {/* Eyes */}
      <g filter="url(#softGlow)">
        <circle cx="55" cy="62" r="5" fill="#22D3EE" />
        <circle cx="85" cy="62" r="5" fill="#22D3EE" />
      </g>
      <circle cx="56.5" cy="60.5" r="1.5" fill="white" opacity="0.7" />
      <circle cx="86.5" cy="60.5" r="1.5" fill="white" opacity="0.7" />

      {/* Smile */}
      <path d="M62 78 Q70 84 78 78" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />

      {/* Body */}
      <rect x="35" y="105" width="70" height="55" rx="28" fill="url(#bodyGrad)" />
      <rect x="48" y="118" width="44" height="24" rx="12" fill="white" opacity="0.1" />
      
      {/* Heart */}
      <circle cx="70" cy="130" r="7" fill="#E56B6F" />
      <path d="M67.5 130L72.5 130" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* Hands */}
      <circle cx="25" cy="120" r="7" fill="#8B5CF6" />
      <circle cx="115" cy="120" r="7" fill="#8B5CF6" />
      
      {/* Legs */}
      <rect x="48" y="156" width="16" height="10" rx="5" fill="#8B5CF6" />
      <rect x="76" y="156" width="16" height="10" rx="5" fill="#8B5CF6" />
    </svg>
  );
}

// ─── Trust pill ───────────────────────────────────────────────────────────────
function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-[0.82rem] font-medium text-slate-500">
      <span className="text-secondary">{icon}</span>
      {text}
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const calculatorRef = useRef<CalculatorHandle>(null);
  const pathname = usePathname() || "";
  const currentLang = (pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es") as Lang;
  const t = dictionaries[currentLang].hero;
  const calcT = dictionaries[currentLang].calculator;

  const handleCalculateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    calculatorRef.current?.focusAndCalculate();
  };

  return (
    <section
      id="calculator"
      className="relative overflow-hidden pt-12 pb-10 md:pt-16 md:pb-14 scroll-mt-24 bg-white"
      aria-labelledby="hero-heading"
    >
      {/* Ambient background blobs — very subtle */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col items-center">
        {/* 1 — Compact hero copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-10 flex flex-col items-center gap-4 md:gap-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/8 border border-secondary/20 text-secondary text-[0.68rem] font-bold tracking-widest uppercase w-fit shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            {t.tag}
          </div>

          <div>
            <h1
              id="hero-heading"
              className="heading-font text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] text-slate-900 tracking-tight mb-3 md:mb-4"
            >
              {t.title1}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-secondary">{t.title2}</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
                  className="absolute bottom-0.5 left-0 right-0 h-[2px] md:h-[3px] bg-secondary/20 rounded-full origin-left"
                />
              </span>
              {" "}{t.title3}
            </h1>
            <p
              id="hero-description"
              className="text-[0.95rem] md:text-[1.05rem] text-slate-600 leading-relaxed max-w-[42rem] mx-auto"
            >
              {t.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <motion.button
              type="button"
              onClick={handleCalculateClick}
              whileHover={{ scale: 1.02, backgroundColor: "#0f172a" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-[#16213e] text-white px-6 py-3 rounded-xl font-bold text-[0.85rem] uppercase tracking-wider shadow-lg transition-all border border-white/5"
            >
              {t.calcBtn} <ArrowRight size={16} />
            </motion.button>
            <MotionLink
              href="/how-it-works"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0f172a] border-2 border-slate-200 hover:border-secondary px-6 py-3 rounded-xl font-bold text-[0.85rem] uppercase tracking-wider hover:bg-slate-50 transition-all shadow-sm"
            >
              <BookOpen size={15} className="text-secondary shrink-0" /> {t.howBtn}
            </MotionLink>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-1 border-t border-slate-100 w-full max-w-lg">
            <TrustPill icon={<Check size={13} />} text={t.trust1} />
            <TrustPill icon={<Zap size={13} />} text={t.trust2} />
            <TrustPill icon={<BookOpen size={13} />} text={t.trust3} />
          </div>
        </motion.div>

        {/* 2 — Calculator + result */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <div
            className="absolute -top-6 left-4 w-[48px] sm:w-[56px] z-20 drop-shadow-lg pointer-events-none select-none"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MascotRobot />
            </motion.div>
          </div>

          <div className="absolute inset-0 bg-secondary/5 rounded-[2rem] blur-3xl -z-10 opacity-60" />

          <CalculatorCard ref={calculatorRef} />
        </motion.div>
        </div>
      </div>
    </section>
  );
}
