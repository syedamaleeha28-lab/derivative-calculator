"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { usePathname } from "next/navigation";
import { dictionaries, Lang } from "@/lib/dictionaries";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const pathname = usePathname() || "";
  const currentLang = (pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es") as Lang;
  const t = dictionaries[currentLang].faqsPage;

  // FAQ Schema JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.list.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-[#F8F6F2] border-t border-slate-100"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold text-secondary uppercase tracking-[0.18em] mb-5">
            <span className="w-6 h-px bg-secondary/40 rounded" />
            {t.badge}
            <span className="w-6 h-px bg-secondary/40 rounded" />
          </span>
          <h2 className="heading-font text-[2.2rem] md:text-[2.6rem] text-slate-900 leading-[1.1] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-slate-600 text-[1.05rem] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="flex flex-col gap-3">
          {t.list.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-secondary/30 shadow-lg shadow-secondary/5"
                    : "border-slate-200 shadow-sm hover:border-secondary/20"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <span
                    className={`font-semibold text-[0.97rem] leading-snug transition-colors ${
                      isOpen ? "text-secondary" : "text-slate-900"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-secondary text-white rotate-180"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="faq-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-7 pb-6 pt-0 text-slate-600 leading-relaxed text-[0.93rem]">
                        <div className="h-px bg-slate-100 mb-4" />
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
