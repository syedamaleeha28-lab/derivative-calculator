"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import katex from "katex";

const RULES = [
  {
    name: "Regla de la Potencia",
    href: "/reglas/regla-de-la-potencia",
    formula: "\\dfrac{d}{dx}\\left[x^n\\right] = n \\cdot x^{n-1}",
    desc: "Aplica cuando x está elevado a una constante. El exponente baja y se reduce en 1.",
    color: "bg-violet-50 dark:bg-secondary/10 border-secondary/15 dark:border-secondary/20",
  },
  {
    name: "Regla del Producto",
    href: "/reglas/regla-del-producto",
    formula: "\\dfrac{d}{dx}\\left[u \\cdot v\\right] = u'v + uv'",
    desc: "Usada para derivar el producto de dos funciones. Aplica a ambos factores por separado.",
    color: "bg-slate-50 dark:bg-[#0f172a] border-slate-200/60 dark:border-[#1e293b]",
  },
  {
    name: "Regla del Cociente",
    href: "/reglas/regla-del-cociente",
    formula: "\\dfrac{d}{dx}\\left[\\dfrac{u}{v}\\right] = \\dfrac{u'v - uv'}{v^2}",
    desc: "Permite derivar la división de dos funciones. El denominador nunca puede ser cero.",
    color: "bg-slate-50 dark:bg-[#0f172a] border-slate-200/60 dark:border-[#1e293b]",
  },
  {
    name: "Regla de la Cadena",
    href: "/reglas/regla-de-la-cadena",
    formula: "\\dfrac{d}{dx}\\left[f(g(x))\\right] = f'(g(x)) \\cdot g'(x)",
    desc: "Fundamental para derivar funciones compuestas. Deriva la función exterior, luego la interior.",
    color: "bg-violet-50 dark:bg-secondary/10 border-secondary/15 dark:border-secondary/20",
  },
  {
    name: "Derivadas Trigonométricas",
    href: "/reglas/derivadas-trigonometricas",
    formula: "\\dfrac{d}{dx}\\left[\\sin(x)\\right] = \\cos(x)",
    desc: "Reglas específicas para funciones circulares. Incluye seno, coseno, tangente y más.",
    color: "bg-slate-50 dark:bg-[#0f172a] border-slate-200/60 dark:border-[#1e293b]",
  },
];

export default function Rules() {
  return (
    <section
      id="reglas"
      className="py-24 md:py-32 bg-white dark:bg-[#07111f] border-t border-slate-100 dark:border-[#1e293b]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold text-secondary dark:text-accent uppercase tracking-[0.18em] mb-5">
            <span className="w-6 h-px bg-secondary/40 dark:bg-accent/40 rounded" />
            Cálculo Diferencial
            <span className="w-6 h-px bg-secondary/40 dark:bg-accent/40 rounded" />
          </span>
          <h2 className="heading-font text-[2.2rem] md:text-[2.6rem] text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-4">
            Reglas de <span className="text-secondary dark:text-accent">Derivación</span> Fundamentales
          </h2>
          <p className="text-slate-600 dark:text-slate-200 text-[1.05rem] leading-relaxed">
Domina las técnicas esenciales del cálculo. Haz clic en cualquier regla para ver ejemplos resueltos paso a paso.
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RULES.map((rule, idx) => (
            <Link key={idx} href={rule.href}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`h-full cursor-pointer rounded-2xl border p-6 md:p-7 flex flex-col gap-5 shadow-sm hover:shadow-xl transition-all duration-300 ${rule.color}`}
              >
                {/* Rule name */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center shrink-0">
                    <span className="text-secondary dark:text-accent text-[0.75rem] font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="font-semibold text-[1rem] text-slate-900 dark:text-white">
                    {rule.name}
                  </h3>
                </div>

                {/* Formula box */}
                <div className="bg-white dark:bg-[#07111f] border border-slate-200 dark:border-[#1e293b] rounded-xl px-5 py-4 overflow-x-auto flex items-center justify-center shadow-sm min-h-[72px]">
                  <div
                    className="text-slate-900 dark:text-white"
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString(rule.formula, {
                        throwOnError: false,
                        displayMode: true,
                      }),
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-[0.88rem] text-slate-500 dark:text-slate-200 leading-relaxed">
                  {rule.desc}
                </p>
                
                {/* View more link */}
                <div className="mt-auto pt-2 text-[0.75rem] font-bold text-secondary dark:text-accent flex items-center gap-1.5 uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                  Ver ejemplos y guía <span className="text-[1.2rem]">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
