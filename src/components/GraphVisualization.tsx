"use client";

import { motion } from "framer-motion";

export default function GraphVisualization() {
  return (
    <section className="py-24 bg-white dark:bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="text-secondary dark:text-accent font-bold tracking-widest uppercase text-[0.75rem]">Análisis Visual</span>
            <h2 className="heading-font text-4xl md:text-5xl text-slate-900 dark:text-white leading-[1.1]">
              Visualiza el Cambio
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              La derivada representa la tasa de cambio instantánea. Nuestra herramienta gráfica te permite ver simultáneamente la función original y su derivada para que comprendas su relación geométrica y matemática.
            </p>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="font-mono text-sm">f(x) = sin(x)</span> - Función Original
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                <span className="font-mono text-sm">f'(x) = cos(x)</span> - Función Derivada
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-50 dark:bg-[#131927] border border-slate-200/60 dark:border-white/5 p-6 rounded-2xl shadow-sm relative overflow-hidden aspect-[4/3] flex items-center justify-center group">
              <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] dark:opacity-[0.05]"></div>
              
              <svg viewBox="0 0 400 300" className="w-full h-full relative z-10 drop-shadow-sm">
                <defs>
                  <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#A78BFA" />
                  </linearGradient>
                </defs>
                
                <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="1" />
                <line x1="200" y1="0" x2="200" y2="300" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="1" />
                
                <motion.path 
                  d="M0,150 Q50,50 100,150 T200,150 T300,150 T400,150" 
                  fill="none" 
                  stroke="url(#primaryGrad)" 
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="dark:stroke-white/80"
                />
                
                <motion.path 
                  d="M0,200 Q50,250 100,150 T200,50 T300,150 T400,250" 
                  fill="none" 
                  stroke="url(#secondaryGrad)" 
                  strokeWidth="3"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>

              <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#1E293B]/90 backdrop-blur border border-slate-200 dark:border-white/10 px-3 py-2 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-300 shadow-sm flex flex-col gap-1 z-20">
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary dark:bg-white/80"></span> f(x)</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary"></span> f'(x)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
