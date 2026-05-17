"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Layers,
  ListOrdered,
  Sparkles,
} from "lucide-react";
import { dict } from "@/lib/dictionaries";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45 },
};

function SectionHeading({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4 md:mb-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
        {icon}
      </span>
      <h2 className="heading-font text-2xl md:text-3xl text-slate-900 tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default function HomeSeoSections() {
  const t = dict.homeSeo;

  return (
    <section
      id="guia-derivadas"
      className="border-t border-slate-100 bg-gradient-to-b from-violet-50/30 via-white to-white"
      aria-label="Guía sobre derivadas y uso de la calculadora"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.header {...fadeUp} className="max-w-2xl mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600 mb-3">
            Guía educativa
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">{t.intro}</p>
        </motion.header>

        <div className="space-y-12 md:space-y-16">
        <motion.article {...fadeUp} className="max-w-3xl">
          <SectionHeading icon={<BookOpen size={20} aria-hidden />} title={t.whatIs.title} />
          <p className="text-slate-600 text-[1.02rem] leading-relaxed mb-5">
            {t.whatIs.content}
          </p>
          <Link
            href={t.whatIs.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
          >
            {t.whatIs.linkLabel}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </motion.article>

        <motion.article
          {...fadeUp}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-2xl border border-slate-200/70 bg-white p-6 md:p-8 shadow-sm"
        >
          <SectionHeading
            icon={<ListOrdered size={20} aria-hidden />}
            title={t.howToUse.title}
          />
          <ol className="space-y-4 mb-6">
            {t.howToUse.steps.map((step, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#16213e] text-white text-sm font-bold">
                  {idx + 1}
                </span>
                <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
          <Link
            href={t.howToUse.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
          >
            {t.howToUse.linkLabel}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </motion.article>

        <motion.article {...fadeUp} transition={{ duration: 0.45, delay: 0.1 }}>
          <SectionHeading icon={<Layers size={20} aria-hidden />} title={t.types.title} />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6">
            {t.types.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 text-slate-700 text-[0.95rem] shadow-sm"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-violet-500"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={t.types.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
          >
            {t.types.linkLabel}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </motion.article>

        <motion.nav
          {...fadeUp}
          transition={{ duration: 0.45, delay: 0.15 }}
          aria-label={t.internalLinks.title}
        >
          <div className="flex items-center gap-2 mb-5">
            <Sparkles size={18} className="text-violet-600" aria-hidden />
            <h2 className="text-lg font-bold text-slate-900">{t.internalLinks.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.internalLinks.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col gap-1 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm hover:border-violet-300 hover:shadow-md transition-all duration-300"
              >
                <span className="font-semibold text-slate-900 group-hover:text-violet-600 transition-colors">
                  {link.label}
                </span>
                <span className="text-sm text-slate-500">{link.description}</span>
                <ArrowRight
                  size={16}
                  className="mt-2 text-violet-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </motion.nav>
        </div>
      </div>
    </section>
  );
}
