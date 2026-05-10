"use client";

import { motion } from "framer-motion";
import { Zap, BookOpen, Calculator, LineChart } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Cálculo Instantáneo",
      desc: "Resultados en milisegundos gracias a nuestro motor matemático optimizado.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Desarrollo Paso a Paso",
      desc: "Entiende el proceso. Mostramos cada regla aplicada para llegar al resultado.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Gráficas Interactivas",
      desc: "Visualiza la función y su derivada simultáneamente para comprender su relación.",
    },
    {
      icon: <Calculator size={24} />,
      title: "Sintaxis Intuitiva",
      desc: "Escribe ecuaciones naturalmente sin necesidad de aprender comandos complejos.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white dark:bg-[#101827]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary dark:text-accent font-bold tracking-widest uppercase text-[0.75rem] mb-4 block">Características</span>
          <h2 className="heading-font text-4xl md:text-5xl text-slate-900 dark:text-white mb-6">
            Diseñado para el Aprendizaje
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Una herramienta diseñada no solo para darte la respuesta, sino para enseñarte cómo llegar a ella.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-[#1E293B]/40 border border-slate-200/60 dark:border-white/8 rounded-2xl p-8 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white dark:bg-white/5 text-primary dark:text-accent rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-white/5">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-white mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-200 leading-relaxed text-[0.95rem]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
