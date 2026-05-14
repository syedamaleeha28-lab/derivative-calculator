"use client";

import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";
import Link from "next/link";
import katex from "katex";

const EXAMPLES = [
  {
    category: "Constantes",
    expr:  "f(x) = 5",
    deriv: "f'(x) = 0",
    exprTeX:  "f(x) = 5",
    derivTeX: "f'(x) = 0",
  },
  {
    category: "Potencias",
    expr:  "f(x) = x^3",
    deriv: "f'(x) = 3x^2",
    exprTeX:  "f(x) = x^3",
    derivTeX: "f'(x) = 3x^{2}",
  },
  {
    category: "Raíces",
    expr:  "f(x) = √x",
    deriv: "f'(x) = 1/(2√x)",
    exprTeX:  "f(x) = \\sqrt{x}",
    derivTeX: "f'(x) = \\dfrac{1}{2\\sqrt{x}}",
  },
  {
    category: "Exponenciales",
    expr:  "f(x) = eˣ",
    deriv: "f'(x) = eˣ",
    exprTeX:  "f(x) = e^{x}",
    derivTeX: "f'(x) = e^{x}",
  },
  {
    category: "Logaritmos",
    expr:  "f(x) = ln(x)",
    deriv: "f'(x) = 1/x",
    exprTeX:  "f(x) = \\ln(x)",
    derivTeX: "f'(x) = \\dfrac{1}{x}",
  },
  {
    category: "Trigonometría",
    expr:  "f(x) = sin(x)",
    deriv: "f'(x) = cos(x)",
    exprTeX:  "f(x) = \\sin(x)",
    derivTeX: "f'(x) = \\cos(x)",
  },
];

// ─── Section header ────────────────────────────────────────────────────────────
function SectionHeader({
  badge, title, subtitle,
}: { badge: string; title: React.ReactNode; subtitle: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold text-secondary dark:text-accent uppercase tracking-[0.18em] mb-5">
        <span className="w-6 h-px bg-secondary/40 dark:bg-accent/40 rounded" />
        {badge}
        <span className="w-6 h-px bg-secondary/40 dark:bg-accent/40 rounded" />
      </span>
      <h2 className="heading-font text-[2.2rem] md:text-[2.6rem] text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 text-[1.05rem] leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

export default function PopularExamples() {
  return (
    <section
      id="ejemplos"
      className="py-24 md:py-32 bg-[#F8F6F2] dark:bg-[#07111f] border-t border-slate-100 dark:border-[#1e293b]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <SectionHeader
          badge="Ejercicios de Cálculo"
          title={<>Ejercicios de <span className="text-secondary dark:text-accent">Derivadas</span> Resueltos</>}
          subtitle="Explora ejemplos resueltos de derivadas comunes. Desde funciones simples hasta derivadas compuestas con la regla de la cadena."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXAMPLES.map((ex, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-[#1e293b] rounded-2xl p-6 hover:shadow-lg hover:border-secondary/20 dark:hover:border-secondary/20 transition-all duration-300"
            >
              {/* Category badge */}
              <span className="text-[0.67rem] font-bold text-secondary/70 dark:text-accent/70 uppercase tracking-[0.16em] mb-5 block">
                {ex.category}
              </span>

              {/* Input function */}
              <div className="bg-slate-50 dark:bg-[#07111f] rounded-xl px-4 py-3 border border-slate-100 dark:border-[#1e293b] mb-3 overflow-x-auto text-slate-800 dark:text-[#f8fafc]">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.exprTeX, { throwOnError: false }) }} />
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 px-1 mb-3">
                <ArrowRight
                  size={14}
                  className="text-slate-300 dark:text-slate-400 group-hover:text-secondary dark:group-hover:text-accent transition-colors group-hover:translate-x-0.5 transition-transform"
                />
                <span className="text-[0.65rem] text-slate-400 dark:text-slate-300 font-semibold uppercase tracking-widest">derivada</span>
              </div>

              {/* Result */}
              <div className="bg-secondary/5 dark:bg-secondary/10 rounded-xl px-4 py-3 border border-secondary/10 dark:border-secondary/15 overflow-x-auto text-secondary dark:text-accent font-semibold">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.derivTeX, { throwOnError: false }) }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-[#16213e] hover:bg-[#8b5cf6] text-white px-8 py-3.5 rounded-xl font-semibold text-[0.95rem] transition-all shadow-xl shadow-slate-900/10 hover:shadow-secondary/20 active:scale-95"
          >
            <FlaskConical size={17} className="opacity-90" />
            Probar mi propia ecuación
          </Link>
        </div>

        {/* ─── SEO Educational Section ──────────────────────────────────── */}
        <div className="mt-24 pt-16 border-t border-slate-200 dark:border-white/10">
          <div className="max-w-4xl">
            <h2 className="heading-font text-[2rem] md:text-[2.4rem] text-slate-900 dark:text-[#f8fafc] mb-8 leading-tight">
              Domina el <span className="text-secondary dark:text-accent">Cálculo Diferencial</span> con Ejercicios de Derivadas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-5">
                <h3 className="text-[1.25rem] font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-secondary dark:bg-accent rounded-full" />
                  Ejemplos de Derivadas Paso a Paso
                </h3>
                <p className="text-slate-600 dark:text-slate-200 leading-relaxed text-[1rem]">
                  Estudiar <strong>derivadas resueltas</strong> es la forma más efectiva de comprender cómo se aplican las 
                  <Link href="/reglas" className="text-secondary dark:text-accent hover:underline ml-1 font-medium">reglas de derivación</Link>. 
                  Nuestra lista de <strong>ejemplos de derivadas</strong> cubre desde funciones constantes hasta complejas 
                  composiciones que requieren la regla de la cadena. Cada ejercicio está diseñado para mostrarte el 
                  procedimiento lógico que debes seguir.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="text-[1.25rem] font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-secondary dark:bg-accent rounded-full" />
                  Cómo Resolver Derivadas Online
                </h3>
                <p className="text-slate-600 dark:text-slate-200 leading-relaxed text-[1rem]">
                  Si necesitas <strong>resolver derivadas online</strong> con precisión académica, Derivio es tu mejor aliado. 
                  Más allá de darte una respuesta, te ofrecemos <strong>derivadas paso a paso</strong> con notación clara 
                  y profesional. Puedes practicar con nuestros <strong>ejercicios de derivadas</strong> o introducir tus 
                  propias funciones en la 
                  <Link href="/" className="text-secondary dark:text-accent hover:underline ml-1 font-medium">calculadora de la página principal</Link> 
                  para obtener una solución inmediata y educativa.
                </p>
              </div>
            </div>
            
            <p className="mt-10 text-slate-500 dark:text-slate-400 text-[0.95rem] italic border-l-2 border-slate-200 dark:border-slate-800 pl-6 py-1">
              "El cálculo no se trata de memorizar fórmulas, sino de entender cómo cambian las cosas. 
              Nuestra misión es hacer ese proceso visible y comprensible para todos."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
