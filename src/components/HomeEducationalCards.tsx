"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { dict } from "@/lib/dictionaries";
import { resolveEducationalCardImage } from "@/lib/educational-card-images";
import { EDUCATIONAL_CARD_DISPLAY } from "@/lib/image-sizes";

export default function HomeEducationalCards() {
  const t = dict.seoCards;

  return (
    <section
      id="recursos-derivadas"
      className="py-16 md:py-20 bg-white border-t border-slate-100"
      aria-labelledby="educational-cards-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <h2
            id="educational-cards-heading"
            className="heading-font text-2xl md:text-4xl text-slate-900 mb-4"
          >
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card, idx) => {
            const image = resolveEducationalCardImage(card);

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex flex-col h-full p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-violet-200/80 hover:shadow-md transition-all duration-300"
              >
                <div className="mx-auto mb-5 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.src.width}
                    height={image.src.height}
                    loading="lazy"
                    sizes="(max-width: 768px) 112px, 128px"
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain object-center p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                    style={{
                      maxWidth: EDUCATIONAL_CARD_DISPLAY.width,
                      maxHeight: EDUCATIONAL_CARD_DISPLAY.height,
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center md:text-left">
                  {card.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6 flex-grow text-center md:text-left">
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className="inline-block mt-auto text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors text-center md:text-left"
                >
                  {card.link}
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
