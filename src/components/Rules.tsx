"use client";

import { motion } from "framer-motion";
import Link from "@/components/LanguageLink";
import katex from "katex";
import { usePathname } from "next/navigation";
import { dictionaries, Lang } from "@/lib/dictionaries";

export default function Rules() {
  const pathname = usePathname() || "";
  const currentLang = (pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es") as Lang;
  const t = dictionaries[currentLang].rules;

  const RULES = [
    {
      name: t.list.power.name,
      href: "/reglas/regla-de-la-potencia",
      formula: "\\dfrac{d}{dx}\\left[x^n\\right] = n \\cdot x^{n-1}",
      desc: t.list.power.desc,
      color: "bg-violet-50 border-secondary/15",
    },
    {
      name: t.list.product.name,
      href: "/reglas/regla-del-producto",
      formula: "\\dfrac{d}{dx}\\left[u \\cdot v\\right] = u'v + uv'",
      desc: t.list.product.desc,
      color: "bg-slate-50 border-slate-200/60",
    },
    {
      name: t.list.quotient.name,
      href: "/reglas/regla-del-cociente",
      formula: "\\dfrac{d}{dx}\\left[\\dfrac{u}{v}\\right] = \\dfrac{u'v - uv'}{v^2}",
      desc: t.list.quotient.desc,
      color: "bg-slate-50 border-slate-200/60",
    },
    {
      name: t.list.chain.name,
      href: "/reglas/regla-de-la-cadena",
      formula: "\\dfrac{d}{dx}\\left[f(g(x))\\right] = f'(g(x)) \\cdot g'(x)",
      desc: t.list.chain.desc,
      color: "bg-violet-50 border-secondary/15",
    },
    {
      name: t.list.trig.name,
      href: "/reglas/derivadas-trigonometricas",
      formula: "\\dfrac{d}{dx}\\left[\\sin(x)\\right] = \\cos(x)",
      desc: t.list.trig.desc,
      color: "bg-slate-50 border-slate-200/60",
    },
  ];

  return (
    <section
      id="reglas"
      className="py-24 md:py-32 bg-white border-t border-slate-100"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold text-secondary uppercase tracking-[0.18em] mb-5">
            <span className="w-6 h-px bg-secondary/40 rounded" />
            {t.badge}
            <span className="w-6 h-px bg-secondary/40 rounded" />
          </span>
          <h2 className="heading-font text-[2.2rem] md:text-[2.6rem] text-slate-900 leading-[1.1] tracking-tight mb-4">
            {t.title1}<span className="text-secondary">{t.title2}</span>{t.title3}
          </h2>
          <p className="text-slate-600 text-[1.05rem] leading-relaxed">
            {t.subtitle}
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
                  <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="text-secondary text-[0.75rem] font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="font-semibold text-[1rem] text-slate-900">
                    {rule.name}
                  </h3>
                </div>

                {/* Formula box */}
                <div className="bg-white border border-slate-200 rounded-xl px-5 py-4 overflow-x-auto flex items-center justify-center shadow-sm min-h-[72px]">
                  <div
                    className="text-slate-900"
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString(rule.formula, {
                        throwOnError: false,
                        displayMode: true,
                      }),
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-[0.88rem] text-slate-500 leading-relaxed">
                  {rule.desc}
                </p>
                
                {/* View more link */}
                <div className="mt-auto pt-2 text-[0.75rem] font-bold text-secondary flex items-center gap-1.5 uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                  {t.viewMore} <span className="text-[1.2rem]">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
