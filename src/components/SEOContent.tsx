"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "@/components/LanguageLink";
import { usePathname } from "next/navigation";
import { dictionaries, Lang } from "@/lib/dictionaries";

export default function SEOContent() {
  const pathname = usePathname() || "";
  const currentLang = (pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es") as Lang;
  const t = dictionaries[currentLang].seoCards;

  // Since we only have some cards in dictionary, we'll map them
  // We should ideally have all 6 cards in dictionary for full localization
  // For now, I'll use the dictionary cards and fallback if needed
  
  const IMAGES: Record<string, { src: string; alt: string }> = {
    "/what-is-a-derivative": {
      src: "/images/que-es-una-derivada.png",
      alt: "Concept of derivative"
    },
    "/how-to-use-derivative-calculator": {
      src: "/images/como-usar-calculadora-de-derivadas.png",
      alt: "How to use calculator"
    },
    "/reglas": {
      src: "/images/reglas-de-derivacion.png",
      alt: "Differentiation rules"
    },
    "/derivative-examples": {
      src: "/images/ejemplos-de-derivadas-resueltas.png",
      alt: "Derivative examples"
    },
    "/partial-derivatives": {
      src: "/images/derivadas-parciales.png",
      alt: "Partial derivatives"
    },
    "/basic-derivative-formulas": {
      src: "/images/formulas-de-derivadas.png",
      alt: "Derivative formulas"
    }
  };

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-font text-3xl md:text-4xl text-slate-900 mb-5">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card, idx) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-white transition-all duration-300 flex flex-col h-full shadow-sm"
            >
              <div className="relative mx-auto mb-5 h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm sm:h-32 sm:w-32">
                <Image
                  src={IMAGES[card.href]?.src || "/images/que-es-una-derivada.png"}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 112px, 128px"
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
          ))}
        </div>
      </div>
    </section>
  );
}
