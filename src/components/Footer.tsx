"use client";

import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";

const NAV_COLS = [
  {
    title: "Calculadoras",
    links: [
      { label: "Calculadora de Derivadas", href: "/#calculator" },
      { label: "Calculadora de Pasos", href: "/how-to-use-derivative-calculator" },
      { label: "Derivadas Parciales", href: "/partial-derivatives" },
      { label: "Reglas de Derivación", href: "/reglas" },
    ],
  },
  {
    title: "Aprendizaje",
    links: [
      { label: "Concepto de Derivada", href: "/what-is-a-derivative" },
      { label: "Regla de la Cadena", href: "/reglas/regla-de-la-cadena" },
      { label: "Formulario de Derivadas", href: "/basic-derivative-formulas" },
      { label: "Ejercicios Resueltos", href: "/derivative-examples" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Preguntas Frecuentes", href: "/how-it-works#faq" },
      { label: "Blog de Cálculo", href: "/blog" },
      { label: "Política de Privacidad", href: "/politica-de-privacidad" },
      { label: "Términos de Servicio", href: "/terminos-de-servicio" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#07111f] pt-24 pb-12 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <Link href="/" className="flex items-center gap-3 mb-8 w-fit group">
              {/* Brand mark */}
              <div className="relative w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full bg-gradient-to-br from-secondary to-purple-600 rounded-xl flex items-center justify-center shadow-lg border border-white/10 overflow-hidden">
                  <span className="text-white font-black text-[0.85rem] tracking-tighter select-none">
                    d/dx
                  </span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="heading-font text-[1.4rem] text-slate-900 dark:text-white tracking-tight leading-none font-bold">
                  Derivio
                </span>
                <span className="text-[0.7rem] text-secondary dark:text-accent font-bold tracking-[0.15em] uppercase leading-none mt-1.5">
                  Calculadora
                </span>
              </div>
            </Link>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mb-8 text-[0.95rem]">
              La plataforma educativa moderna diseñada para simplificar el aprendizaje del cálculo diferencial. Resuelve derivadas complejas con explicaciones detalladas y gratuitas.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[Globe, Mail, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-400 hover:text-secondary dark:hover:text-accent hover:border-secondary/30 dark:hover:border-secondary/30 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map(col => (
            <div key={col.title}>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-[0.75rem] uppercase tracking-[0.2em] opacity-80">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.92rem] text-slate-500 dark:text-slate-400 hover:text-secondary dark:hover:text-accent transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-secondary dark:bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-slate-500 text-[0.85rem]">
            © {new Date().getFullYear()} Derivio. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
             <p className="text-slate-400 dark:text-slate-500 text-[0.85rem] flex items-center gap-2">
                Hecho con <span className="text-secondary">♥</span> por educadores.
             </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
