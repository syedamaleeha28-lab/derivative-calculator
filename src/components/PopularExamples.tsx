"use client";

import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";
import Link from "@/components/LanguageLink";
import katex from "katex";
import { usePathname } from "next/navigation";
import { dictionaries, Lang } from "@/lib/dictionaries";

// ─── Section header ────────────────────────────────────────────────────────────
function SectionHeader({
  badge, title, subtitle,
}: { badge: string; title: React.ReactNode; subtitle: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold text-secondary uppercase tracking-[0.18em] mb-5">
        <span className="w-6 h-px bg-secondary/40 rounded" />
        {badge}
        <span className="w-6 h-px bg-secondary/40 rounded" />
      </span>
      <h2 className="heading-font text-[2.2rem] md:text-[2.6rem] text-slate-900 leading-[1.1] tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-slate-600 text-[1.05rem] leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

export default function PopularExamples() {
  const pathname = usePathname() || "";
  const currentLang = (pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es") as Lang;
  const t = dictionaries[currentLang].popularExamples;

  const EXAMPLES = [
    {
      category: t.categories.constants,
      exprTeX:  "f(x) = 5",
      derivTeX: "f'(x) = 0",
    },
    {
      category: t.categories.powers,
      exprTeX:  "f(x) = x^3",
      derivTeX: "f'(x) = 3x^{2}",
    },
    {
      category: t.categories.roots,
      exprTeX:  "f(x) = \\sqrt{x}",
      derivTeX: "f'(x) = \\dfrac{1}{2\\sqrt{x}}",
    },
    {
      category: t.categories.exponentials,
      exprTeX:  "f(x) = e^{x}",
      derivTeX: "f'(x) = e^{x}",
    },
    {
      category: t.categories.logarithms,
      exprTeX:  "f(x) = \\ln(x)",
      derivTeX: "f'(x) = \\dfrac{1}{x}",
    },
    {
      category: t.categories.trigonometry,
      exprTeX:  "f(x) = \\sin(x)",
      derivTeX: "f'(x) = \\cos(x)",
    },
  ];

  return (
    <section
      id="ejemplos"
      className="py-24 md:py-32 bg-[#F8F6F2] border-t border-slate-100"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <SectionHeader
          badge={t.badge}
          title={<>{t.title1}<span className="text-secondary">{t.title2}</span>{t.title3}</>}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXAMPLES.map((ex, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:border-secondary/20 transition-all duration-300"
            >
              {/* Category badge */}
              <span className="text-[0.67rem] font-bold text-secondary/70 uppercase tracking-[0.16em] mb-5 block">
                {ex.category}
              </span>

              {/* Input function */}
              <div className="bg-slate-50 rounded-xl px-4 py-3 border border-slate-100 mb-3 overflow-x-auto text-slate-800">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.exprTeX, { throwOnError: false }) }} />
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 px-1 mb-3">
                <ArrowRight
                  size={14}
                  className="text-slate-300 group-hover:text-secondary transition-colors group-hover:translate-x-0.5 transition-transform"
                />
                <span className="text-[0.65rem] text-slate-400 font-semibold uppercase tracking-widest">{currentLang === "en" ? "derivative" : currentLang === "pt" ? "derivada" : "derivada"}</span>
              </div>

              {/* Result */}
              <div className="bg-secondary/5 rounded-xl px-4 py-3 border border-secondary/10 overflow-x-auto text-secondary font-semibold">
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
            {t.cta}
          </Link>
        </div>

        {/* ─── SEO Educational Section ──────────────────────────────────── */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <div className="max-w-4xl">
            <h2 className="heading-font text-[2rem] md:text-[2.4rem] text-slate-900 mb-8 leading-tight">
              {t.seoTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-5">
                <h3 className="text-[1.25rem] font-bold text-slate-900 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-secondary rounded-full" />
                  {t.seoCard1Title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[1rem]">
                  {t.seoCard1Desc}
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="text-[1.25rem] font-bold text-slate-900 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-secondary rounded-full" />
                  {t.seoCard2Title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[1rem]">
                  {t.seoCard2Desc}
                </p>
              </div>
            </div>
            
            <p className="mt-10 text-slate-500 text-[0.95rem] italic border-l-2 border-slate-200 pl-6 py-1">
              "{t.quote}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
