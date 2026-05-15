"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import katex from "katex";

interface StepByStepProps {
  t: {
    badge: string;
    title: string;
    desc: string;
    steps: Array<{
      title: string;
      desc: string;
    }>;
  };
}

export default function StepByStep({ t }: StepByStepProps) {
  const formulas = [
    "f(x) = 3x^4 - 2x^2 + 5x",
    "f'(x) = \\frac{d}{dx}(3x^4) - \\frac{d}{dx}(2x^2) + \\frac{d}{dx}(5x)",
    "f'(x) = 3(4x^3) - 2(2x) + 5(1)",
    "f'(x) = 12x^3 - 4x + 5"
  ];

  const steps = t.steps.map((step, idx) => ({
    ...step,
    formula: formulas[idx]
  }));

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-[0.75rem] mb-4 block">{t.badge}</span>
          <h2 className="heading-font text-4xl md:text-5xl text-slate-900 mb-6">
            {t.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-200"></div>
          
          <div className="flex flex-col gap-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-16"
              >
                {/* Node */}
                <div className="absolute left-0 top-1 w-12 h-12 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center font-bold text-slate-900 shadow-sm z-10 text-[0.95rem]">
                  {idx + 1}
                </div>
                
                <div className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-sm relative group hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-slate-900 mb-4 text-xl">{step.title}</h3>
                  <div className="text-slate-900 text-xl mb-5 bg-slate-50 py-5 px-6 rounded-xl border border-slate-100 inline-block min-w-[200px]">
                    <div dangerouslySetInnerHTML={{ __html: katex.renderToString(step.formula, { displayMode: false }) }} />
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[1rem]">
                    {step.desc}
                  </p>
                </div>
                
                {idx < steps.length - 1 && (
                  <div className="absolute left-[15px] -bottom-6 text-slate-300">
                    <ChevronDown size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
