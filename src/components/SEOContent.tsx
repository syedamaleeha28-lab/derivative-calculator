"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SEOContent() {
  const cards = [
    {
      title: "¿Qué es una derivada?",
      desc: "La derivada representa la tasa de cambio instantánea de una función. Es la pendiente de la recta tangente en un punto específico. Fundamental para entender el movimiento y optimización en cálculo diferencial.",
      link: "Aprende el concepto base →",
      href: "/what-is-a-derivative",
      imageSrc: "/images/que-es-una-derivada.png",
      imageAlt:
        "Ilustración educativa sobre el concepto de derivada: pendiente de la tangente y tasa de cambio en una curva.",
    },
    {
      title: "Cómo usar la calculadora",
      desc: "Simplemente ingresa tu expresión matemática usando nuestro teclado especializado. Obtendrás no solo el resultado final, sino la resolución de derivadas paso a paso con las reglas aplicadas.",
      link: "Ver tutorial rápido →",
      href: "/how-to-use-derivative-calculator",
      imageSrc: "/images/como-usar-calculadora-de-derivadas.png",
      imageAlt:
        "Ilustración que muestra cómo usar la calculadora de derivadas en línea con una interfaz clara y didáctica.",
    },
    {
      title: "Reglas de Derivación",
      desc: "Domina las reglas esenciales: regla de la potencia, regla del producto, cociente y la regla de la cadena. Nuestra plataforma identifica y explica cada regla al resolver derivadas online.",
      link: "Estudiar reglas →",
      href: "/reglas",
      imageSrc: "/images/reglas-de-derivacion.png",
      imageAlt:
        "Ilustración educativa con las reglas de derivación: potencia, producto, cociente y cadena.",
    },
    {
      title: "Ejemplos de Derivadas",
      desc: "Explora nuestra biblioteca de ejercicios resueltos. Desde polinomios simples hasta complejas derivadas trigonométricas y exponenciales para practicar y comprobar tus conocimientos.",
      link: "Ver galería de ejemplos →",
      href: "/derivative-examples",
      imageSrc: "/images/ejemplos-de-derivadas-resueltas.png",
      imageAlt:
        "Ilustración con ejemplos de derivadas resueltos paso a paso para practicar cálculo diferencial.",
    },
    {
      title: "Derivadas Parciales",
      desc: "Avanza hacia el cálculo multivariable. Aprende a mantener variables constantes mientras derivas respecto a otra. Próximamente incluiremos una calculadora específica para esto.",
      link: "Conceptos avanzados →",
      href: "/partial-derivatives",
      imageSrc: "/images/derivadas-parciales.png",
      imageAlt:
        "Ilustración educativa sobre derivadas parciales y funciones de varias variables en cálculo multivariable.",
    },
    {
      title: "Fórmulas de Derivadas",
      desc: "Accede a nuestra tabla de derivadas y fórmulas trigonométricas interactivas. Un recurso imprescindible para exámenes y tareas de nivel preparatoria y universidad.",
      link: "Ver formulario completo →",
      href: "/basic-derivative-formulas",
      imageSrc: "/images/formulas-de-derivadas.png",
      imageAlt:
        "Ilustración de un formulario con fórmulas de derivadas para consulta y estudio de cálculo.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#07111f] border-t border-slate-100 dark:border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-font text-3xl md:text-4xl text-slate-900 dark:text-white mb-5">
            Tu Calculadora de Derivadas Online y Gratuita
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-200 leading-relaxed">
            Nuestra plataforma educativa está diseñada para ayudarte a <strong className="font-semibold text-slate-800 dark:text-[#f8fafc]">resolver derivadas con pasos</strong> y comprender la lógica matemática detrás de cada función diferencial de forma rápida y sencilla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200/60 dark:border-[#1e293b] hover:bg-white dark:hover:bg-[#1e293b] transition-all duration-300 flex flex-col h-full shadow-sm"
            >
              <div className="relative mx-auto mb-5 h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/5 sm:h-32 sm:w-32">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 112px, 128px"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-200 leading-relaxed mb-6 flex-grow">
                {card.desc}
              </p>
              <Link
                href={card.href}
                className="inline-block mt-auto text-sm font-semibold text-secondary dark:text-accent group-hover:opacity-80 transition-opacity"
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
