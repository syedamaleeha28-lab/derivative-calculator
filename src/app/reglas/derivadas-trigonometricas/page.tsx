import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { AlertCircle, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import katex from "katex";

export const metadata: Metadata = {
  title: "Derivadas Trigonométricas | Tabla y Ejemplos Resueltos | Derivio",
  description: "Aprende las derivadas de seno, coseno, tangente y sus inversas. Guía completa con tabla de fórmulas y ejercicios explicados paso a paso.",
  keywords: "derivadas trigonométricas, derivada de seno, derivada de coseno, fórmulas de derivadas, cálculo diferencial, derivadas paso a paso",
};

export default function TrigDerivativesPage() {
  const formulas = [
    { name: "Seno", f: "\\dfrac{d}{dx}\\left[\\sin(x)\\right] = \\cos(x)" },
    { name: "Coseno", f: "\\dfrac{d}{dx}\\left[\\cos(x)\\right] = -\\sin(x)" },
    { name: "Tangente", f: "\\dfrac{d}{dx}\\left[\\tan(x)\\right] = \\sec^2(x)" }
  ];
  
  const examples = [
    {
      q: "f(x) = \\sin(5x)",
      a: "f'(x) = \\cos(5x) \\cdot 5 = 5\\cos(5x)",
      desc: "Usamos la regla de la cadena: derivada del seno por la derivada del argumento (5x)."
    },
    {
      q: "f(x) = x \\cdot \\cos(x)",
      a: "f'(x) = 1 \\cdot \\cos(x) + x \\cdot (-\\sin(x)) = \\cos(x) - x\\sin(x)",
      desc: "Aplicamos la regla del producto entre x y cos(x)."
    },
    {
      q: "f(x) = \\tan(x^2)",
      a: "f'(x) = \\sec^2(x^2) \\cdot (2x) = 2x\\sec^2(x^2)",
      desc: "Derivada de la tangente por la derivada de x²."
    }
  ];

  const faqs = [
    {
      q: "¿Por qué el coseno tiene signo negativo?",
      a: "Es una propiedad fundamental de las funciones trigonométricas. La pendiente del coseno es negativa en su fase inicial positiva."
    },
    {
      q: "¿Cómo derivar funciones inversas?",
      a: "Las funciones como arcsin(x) tienen fórmulas específicas que involucran raíces cuadradas. Nuestra calculadora las soporta todas."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#0B0F19] border-b border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <Link href="/reglas" className="inline-flex items-center gap-2 text-secondary dark:text-accent text-[0.85rem] font-bold uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity">
            <span className="text-[1.2rem] mb-0.5">← Volver a Reglas</span>
          </Link>
          <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white leading-tight mb-6">
            Derivadas <span className="text-secondary dark:text-accent">Trigonométricas</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Las funciones trigonométricas son cíclicas y sus derivadas también lo son. Aprender estas reglas es vital para problemas de física y oscilaciones.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-10 text-center">Tabla de Fórmulas Básicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formulas.map((form, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-black/20 p-8 rounded-2xl border border-slate-100 dark:border-white/5 flex flex-col items-center gap-4">
                <span className="text-[0.7rem] font-bold text-secondary dark:text-accent uppercase tracking-widest">{form.name}</span>
                <div 
                  className="text-xl text-slate-900 dark:text-white"
                  dangerouslySetInnerHTML={{ __html: katex.renderToString(form.f, { displayMode: true }) }} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F6F2] dark:bg-[#0B0F19]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="heading-font text-[2.2rem] text-slate-900 dark:text-white mb-12 text-center">Ejemplos de Cálculo Trigonométrico</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((ex, i) => (
              <div key={i} className="bg-white dark:bg-[#131927] p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all">
                <div className="text-[0.7rem] font-bold text-secondary dark:text-accent uppercase tracking-widest mb-4">Ejemplo {i + 1}</div>
                <div className="bg-slate-50 dark:bg-black/20 p-4 rounded-xl mb-4 text-center overflow-x-auto">
                  <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.q, { throwOnError: false }) }} />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <ChevronRight size={14} className="text-secondary dark:text-accent" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">Solución</span>
                </div>
                <div className="bg-secondary/5 dark:bg-secondary/10 p-4 rounded-xl mb-4 text-center overflow-x-auto text-secondary dark:text-accent font-bold">
                  <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.a, { throwOnError: false }) }} />
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-8">Obtén el resultado con pasos</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="bg-primary hover:bg-slate-700 dark:bg-secondary dark:hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg">
              Calculadora de Derivadas
            </Link>
            <Link href="/ejercicios-resueltos" className="bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Ejercicios Resueltos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
