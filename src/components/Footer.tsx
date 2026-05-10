"use client";

import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";

const NAV_COLS = [
  {
    title: "Calculadoras",
    links: [
      { label: "Calculadora de Derivadas", href: "/calculadora-derivadas" },
      { label: "Calculadora de Integrales", href: "/calculadora-integrales" },
      { label: "Calculadora de Límites", href: "/calculadora-limites" },
      { label: "Derivadas Parciales", href: "/derivadas-parciales" },
    ],
  },
  {
    title: "Aprendizaje",
    links: [
      { label: "Regla del Producto", href: "/regla-del-producto" },
      { label: "Regla de la Cadena", href: "/regla-de-la-cadena" },
      { label: "Tabla de Derivadas", href: "/tabla-de-derivadas" },
      { label: "Ejercicios Resueltos", href: "/ejercicios-resueltos" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
      { label: "Blog de Cálculo", href: "/blog" },
      { label: "Política de Privacidad", href: "/politica-de-privacidad" },
      { label: "Términos de Servicio", href: "/terminos-de-servicio" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#07111f] pt-20 pb-10 border-t border-slate-100 dark:border-[#1e293b]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit group">
              {/* Brand mark */}
              <div className="relative w-9 h-9 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full bg-gradient-to-br from-secondary to-purple-600 rounded-xl flex items-center justify-center shadow-md border border-white/10 overflow-hidden">
                  <span className="text-white font-black text-[0.8rem] tracking-tighter select-none">
                    d/dx
                  </span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="heading-font text-[1.25rem] text-slate-900 dark:text-white tracking-tight leading-none font-bold">
                  Derivio
                </span>
                <span className="text-[0.65rem] text-secondary dark:text-accent font-bold tracking-[0.15em] uppercase leading-none mt-1">
                  Calculadora
                </span>
              </div>
            </Link>

            <p className="text-slate-500 dark:text-[#cbd5e1] leading-relaxed max-w-sm mb-6 text-[0.9rem]">
              La plataforma educativa moderna para aprender cálculo diferencial. Resuelve derivadas paso a paso y comprende las matemáticas de forma intuitiva.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {[Globe, Mail, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-[#1e293b] flex items-center justify-center text-slate-400 hover:text-secondary dark:hover:text-accent hover:border-secondary/30 dark:hover:border-secondary/30 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map(col => (
            <div key={col.title}>
              <h4 className="font-bold text-slate-900 dark:text-white mb-5 text-[0.72rem] uppercase tracking-[0.15em]">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.88rem] text-slate-500 dark:text-slate-200 hover:text-secondary dark:hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-400 dark:text-slate-500 text-[0.82rem]">
            © {new Date().getFullYear()} Derivio. Todos los derechos reservados.
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-[0.82rem]">
            Construido para estudiantes y profesionales de matemáticas.
          </p>
        </div>

      </div>
    </footer>
  );
}
