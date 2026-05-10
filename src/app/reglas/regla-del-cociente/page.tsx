import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { AlertCircle, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import katex from "katex";

export const metadata: Metadata = {
  title: "Regla del Cociente | Derivada de una División | Derivio",
  description: "Guía paso a paso sobre la regla del cociente. Aprende a derivar la división de dos funciones con ejemplos, fórmulas y consejos prácticos.",
  keywords: "regla del cociente, derivada de un cociente, fórmulas de derivadas, cálculo diferencial, derivadas paso a paso",
};

export default function QuotientRulePage() {
  const formula = "\\dfrac{d}{dx}\\left[\\dfrac{u}{v}\\right] = \\dfrac{u'v - uv'}{v^2}";
  
  const examples = [
    {
      q: "f(x) = \\frac{x^2}{x+1}",
      a: "f'(x) = \\frac{2x(x+1) - x^2(1)}{(x+1)^2} = \\frac{x^2+2x}{(x+1)^2}",
      desc: "Identificamos u=x² y v=x+1. Aplicamos la fórmula: (u'v - uv') / v²."
    },
    {
      q: "f(x) = \\frac{\\sin(x)}{x}",
      a: "f'(x) = \\frac{\\cos(x) \\cdot x - \\sin(x) \\cdot 1}{x^2}",
      desc: "Derivamos el seno (cos) y la x (1), luego organizamos según la regla del cociente."
    },
    {
      q: "f(x) = \\frac{1}{x^3}",
      a: "f'(x) = \\frac{0(x^3) - 1(3x^2)}{(x^3)^2} = \\frac{-3x^2}{x^6} = -3x^{-4}",
      desc: "Aunque se puede usar la potencia, el cociente también funciona con u=1."
    }
  ];

  const faqs = [
    {
      q: "¿Por qué el signo menos en el numerador?",
      a: "Es parte fundamental de la fórmula. A diferencia de la suma en el producto, el cociente requiere resta u'v - uv'."
    },
    {
      q: "¿Qué pasa si el denominador es cero?",
      a: "La derivada no existe en los puntos donde el denominador v(x) es igual a cero."
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
            Regla del <span className="text-secondary dark:text-accent">Cociente</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            La regla del cociente es la técnica estándar para derivar funciones que se encuentran en forma de fracción. Es una de las reglas que requiere más cuidado con los signos.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-50 dark:bg-black/20 rounded-[2.5rem] p-12 border border-slate-100 dark:border-white/5 flex items-center justify-center shadow-inner">
              <div 
                className="text-3xl md:text-4xl text-slate-900 dark:text-white"
                dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} 
              />
            </div>
            <div className="space-y-6">
              <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white">Fórmula y Estructura</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                La derivada de un cociente es: la derivada del de arriba por el de abajo sin derivar, MENOS el de arriba por la derivada del de abajo, todo sobre el de abajo al cuadrado.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary dark:text-accent shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Fracciones algebraicas</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary dark:text-accent shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Funciones racionales complejas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F6F2] dark:bg-[#0B0F19]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="heading-font text-[2.2rem] text-slate-900 dark:text-white mb-12 text-center">Ejercicios de Práctica</h2>
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
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-[2.5rem] p-10 md:p-14">
            <div className="flex items-center gap-4 mb-8">
              <AlertCircle className="text-red-500" size={32} />
              <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white">Peligros de esta regla</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="space-y-2">
                <strong className="text-red-600 dark:text-red-400">Invertir el orden de la resta:</strong>
                <p className="text-slate-600 dark:text-slate-400">Si haces uv' - u'v en el numerador, el resultado tendrá el signo opuesto al correcto.</p>
              </li>
              <li className="space-y-2">
                <strong className="text-red-600 dark:text-red-400">Olvidar el cuadrado del denominador:</strong>
                <p className="text-slate-600 dark:text-slate-400">Es muy común olvidar elevar 'v' al cuadrado al final del procedimiento.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F6F2] dark:bg-[#0B0F19]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-10 text-center">Dudas sobre el Cociente</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white dark:bg-[#131927] p-8 rounded-2xl border border-slate-100 dark:border-white/5">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <HelpCircle size={18} className="text-secondary dark:text-accent" /> {f.q}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-8">Calcula tu derivada en un segundo</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="bg-primary hover:bg-slate-700 dark:bg-secondary dark:hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg">
              Calculadora Gratis
            </Link>
            <Link href="/ejercicios-resueltos" className="bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Catálogo de Ejercicios
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
