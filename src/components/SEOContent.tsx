"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { dict } from "@/lib/dictionaries";
import { getEducationalCardImageById } from "@/lib/educational-card-images";
import PopularSearches from "./PopularSearches";

export default function SEOContent() {
  const t = dict.seoCards;

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-font text-3xl md:text-4xl text-slate-900 mb-5">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card, idx) => {
            const image = getEducationalCardImageById(card.id);
            return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-white transition-all duration-300 flex flex-col h-full shadow-sm"
            >
              <div className="relative mx-auto mb-5 h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm sm:h-32 sm:w-32">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 112px, 128px"
                  loading="lazy"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6 flex-grow">
                {card.desc}
              </p>
              <Link
                href={card.href}
                className="inline-block mt-auto text-sm font-semibold text-secondary group-hover:opacity-80 transition-opacity"
              >
                {card.link}
              </Link>
            </motion.div>
            );
          })}
        </div>
        <PopularSearches />
      </div>
    </section>
  );
}
