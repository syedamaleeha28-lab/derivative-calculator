"use client";

import { useState } from "react";
import { ChevronDown, List } from "lucide-react";

const TOC_ITEMS = [
  { href: "#calculator", label: "Calculadora de derivadas" },
  { href: "#herramientas-calculo", label: "Calculadoras especializadas" },
  { href: "#home-common-functions-heading", label: "Funciones comunes" },
  { href: "#educational-cards-heading", label: "Recursos y guías" },
  { href: "#home-featured-blog-heading", label: "Blog destacado" },
  { href: "#home-recent-articles-heading", label: "Artículos recientes" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#home-longform-heading", label: "Guía completa" },
] as const;

/**
 * Jump-link table of contents for the homepage. Collapsed by default on mobile
 * (long page, easy to lose your place); always expanded on desktop.
 */
export default function HomeTableOfContents() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Tabla de contenido de la página"
      className="border-y border-slate-200 bg-slate-50/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-2 text-sm font-semibold text-slate-700 md:hidden"
        >
          <span className="flex items-center gap-2">
            <List size={16} className="text-violet-600" />
            Contenido de esta página
          </span>
          <ChevronDown
            size={16}
            className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1">
          <List size={16} className="text-violet-600" />
          Contenido de esta página
        </div>

        <ul
          className={`flex-wrap gap-x-5 gap-y-2 mt-3 md:mt-1 md:flex ${
            open ? "flex" : "hidden"
          }`}
        >
          {TOC_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-600 hover:text-violet-700 hover:underline underline-offset-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
