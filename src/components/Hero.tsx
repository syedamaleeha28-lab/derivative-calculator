"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, BookOpen } from "lucide-react";
import CalculatorCard from "./CalculatorCard";

// ─── Inline SVG mascot robot ──────────────────────────────────────────────────
function MascotRobot() {
  return (
    <svg
      viewBox="0 0 140 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Mascota robot Derivio"
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
    <div className="flex items-center gap-2 text-[0.82rem] font-medium text-slate-500 dark:text-slate-400">
      <span className="text-secondary dark:text-accent">{icon}</span>
      {text}
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24 min-h-screen flex flex-col justify-center"
    >
      {/* Ambient background blobs — very subtle */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/3 -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/4 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3 -z-10" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 w-full mt-16 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-20 items-start">

          {/* ─── LEFT — Copy ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/8 dark:bg-secondary/10 border border-secondary/20 text-secondary dark:text-accent text-[0.72rem] font-bold tracking-widest uppercase w-fit shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary dark:bg-accent animate-pulse" />
              Herramienta Académica Gratuita
            </div>

            {/* Headline */}
            <div>
              <h1 className="heading-font text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] leading-[1.04] text-slate-900 dark:text-[#f8fafc] tracking-tight mb-5">
                Calculadora de Derivadas{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-secondary dark:text-accent">Paso a Paso</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                    className="absolute bottom-1 left-0 right-0 h-[3px] bg-secondary/20 dark:bg-accent/20 rounded-full origin-left"
                  />
                </span>
                {" "}para Resolver Funciones.
              </h1>
              <p className="text-[1.1rem] md:text-[1.18rem] text-slate-600 dark:text-[#cbd5e1] leading-relaxed max-w-[520px]">
                Obtén resultados simbólicos exactos y explicaciones detalladas. Nuestra herramienta te ayuda a derivar funciones trigonométricas, logarítmicas y compuestas de forma gratuita y educativa.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <motion.a
                href="#hero"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-[#16213e] hover:bg-[#8b5cf6] text-white px-8 py-4 rounded-xl font-semibold text-[1rem] shadow-xl shadow-slate-900/10 hover:shadow-secondary/20 transition-all"
              >
                Calcular Ahora <ArrowRight size={17} />
              </motion.a>
              <motion.a
                href="#como-funciona"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0f172a] border-2 border-[#cbd5e1] hover:border-[#8b5cf6] px-8 py-4 rounded-xl font-semibold text-[1rem] hover:bg-slate-50 transition-all shadow-sm"
              >
                <BookOpen size={16} className="text-secondary" /> Cómo funciona
              </motion.a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1 border-t border-slate-100 dark:border-white/5">
              <TrustPill icon={<Check size={14} />} text="Precisión simbólica exacta" />
              <TrustPill icon={<Zap size={14} />} text="Resultado instantáneo" />
              <TrustPill icon={<BookOpen size={14} />} text="Explicación paso a paso" />
            </div>

            {/* Social proof */}
            <p className="text-[0.78rem] text-slate-400 dark:text-slate-500 font-medium">
              Más de <span className="text-slate-600 dark:text-[#f8fafc] font-bold">50,000</span> estudiantes y profesores confían en esta herramienta.
            </p>
          </motion.div>

          {/* ─── RIGHT — Calculator + Mascot ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            {/* Calculator wrapper */}
            <div className="relative w-full max-w-[700px]">

              {/* Mascot robot — floats to the top-left of the calculator */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -left-2 md:-top-16 md:-left-10 w-[64px] md:w-[88px] z-20 drop-shadow-xl pointer-events-none select-none"
                aria-hidden="true"
              >
                <MascotRobot />
                {/* Speech bubble */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                    className="absolute -top-1 left-full ml-2 whitespace-nowrap bg-white dark:bg-[#1e293b] text-slate-700 dark:text-[#f8fafc] text-[10px] font-bold px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-[#1e293b] shadow-md"
                  >
                    ¡Listo para calcular!
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-white dark:border-r-[#1e293b]" />
                  </motion.div>
              </motion.div>

              {/* Subtle glow behind calculator */}
              <div className="absolute inset-0 bg-secondary/6 dark:bg-secondary/10 rounded-[2.5rem] blur-3xl -z-10 scale-95" />

              <CalculatorCard />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
