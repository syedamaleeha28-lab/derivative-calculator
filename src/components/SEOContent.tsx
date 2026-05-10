"use client";

import { motion } from "framer-motion";
import { BookOpen, HelpCircle, Layers, FunctionSquare, LayoutGrid, Sigma } from "lucide-react";

export default function SEOContent() {
  const cards = [
    {
      title: "¿Qué es una derivada?",
      desc: "La derivada representa la tasa de cambio instantánea de una función. Es la pendiente de la recta tangente en un punto específico. Fundamental para entender el movimiento y optimización en cálculo diferencial.",
      icon: <HelpCircle className="text-primary" />,
      link: "Aprende el concepto base →",
      href: "/what-is-a-derivative",
    },
    {
      title: "Cómo usar la calculadora",
      desc: "Simplemente ingresa tu expresión matemática usando nuestro teclado especializado. Obtendrás no solo el resultado final, sino la resolución de derivadas paso a paso con las reglas aplicadas.",
      icon: <LayoutGrid className="text-secondary" />,
      link: "Ver tutorial rápido →",
      href: "/how-to-use-derivative-calculator",
    },
    {
      title: "Reglas de Derivación",
      desc: "Domina las reglas esenciales: regla de la potencia, regla del producto, cociente y la regla de la cadena. Nuestra plataforma identifica y explica cada regla al resolver derivadas online.",
      icon: <BookOpen className="text-accent" />,
      link: "Estudiar reglas →",
      href: "/reglas",
    },
    {
      title: "Ejemplos de Derivadas",
      desc: "Explora nuestra biblioteca de ejercicios resueltos. Desde polinomios simples hasta complejas derivadas trigonométricas y exponenciales para practicar y comprobar tus conocimientos.",
      icon: <FunctionSquare className="text-primary" />,
      link: "Ver galería de ejemplos →",
      href: "/derivative-examples",
    },
    {
      title: "Derivadas Parciales",
      desc: "Avanza hacia el cálculo multivariable. Aprende a mantener variables constantes mientras derivas respecto a otra. Próximamente incluiremos una calculadora específica para esto.",
      icon: <Layers className="text-secondary" />,
      link: "Conceptos avanzados →",
      href: "/partial-derivatives",
    },
    {
      title: "Fórmulas de Derivadas",
      desc: "Accede a nuestra tabla de derivadas y fórmulas trigonométricas interactivas. Un recurso imprescindible para exámenes y tareas de nivel preparatoria y universidad.",
      icon: <Sigma className="text-accent" />,
      link: "Ver formulario completo →",
      href: "/basic-derivative-formulas",
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#07111f] border-t border-slate-100 dark:border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-font text-3xl md:text-4xl text-slate-900 dark:text-white mb-5">
            Tu Calculadora de Derivadas Online y Gratuita
          </h2>
          <p className="text-lg text-slate-600 dark:text-[#cbd5e1] leading-relaxed">
            Nuestra plataforma educativa está diseñada para ayudarte a <strong className="font-semibold text-slate-800 dark:text-[#f8fafc]">resolver derivadas con pasos</strong> y comprender la lógica matemática detrás de cada función diferencial de forma rápida y sencilla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200/60 dark:border-[#1e293b] hover:bg-white dark:hover:bg-[#1e293b] transition-all duration-300 flex flex-col h-full shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-slate-500 dark:text-[#cbd5e1] leading-relaxed mb-6 flex-grow">
                {card.desc}
              </p>
              <a href={card.href} className="inline-block mt-auto text-sm font-semibold text-secondary dark:text-accent group-hover:opacity-80 transition-opacity">
                {card.link}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
