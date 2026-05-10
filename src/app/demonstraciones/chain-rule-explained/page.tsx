import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import katex from "katex";

export const metadata: Metadata = {
  title: "Regla de la Cadena Explicada | Demonstración y Ejemplos | Derivio",
  description: "Aprende a dominar la regla de la cadena para funciones compuestas. Explicación visual, ejemplos resueltos y guía paso a paso para estudiantes.",
  keywords: "regla de la cadena explicada, derivada compuesta, cálculo diferencial fácil, derivadas paso a paso, ejercicios de derivadas",
};

export default function ChainRuleDemoPage() {
  const formula = "\\dfrac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)";
  
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0B0F19]">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#0B0F19] border-b border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Link href="/demonstraciones" className="inline-flex items-center gap-2 text-secondary dark:text-accent font-bold uppercase tracking-widest text-[0.8rem] mb-8 hover:opacity-70 transition-opacity">
            <ArrowLeft size={16} /> Volver a Demonstraciones
          </Link>
          <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white leading-tight mb-6">
            Regla de la <span className="text-secondary dark:text-accent">Cadena</span> <br />
            en el Cálculo
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            La regla de la cadena es fundamental para derivar funciones dentro de otras funciones. Imagínalo como una cebolla: vamos pelando capas desde afuera hacia adentro.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="bg-slate-50 dark:bg-black/20 p-12 rounded-[3rem] border border-slate-100 dark:border-white/5 text-center mb-20">
            <h2 className="heading-font text-2xl text-slate-900 dark:text-white mb-8">La Fórmula Maestra</h2>
            <div 
              className="text-3xl md:text-5xl text-secondary dark:text-accent overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="heading-font text-3xl text-slate-900 dark:text-white">¿Cómo funciona?</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Para derivar una función compuesta, primero derivas la función "exterior" (la f) manteniendo la "interior" (la g) intacta, y luego multiplicas todo por la derivada de la interior.
              </p>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Paso 1: Identifica f(u) y g(x)</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Paso 2: Deriva la exterior f'</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Paso 3: Multiplica por g'</span>
                </div>
              </div>
            </div>
            <div className="bg-violet-50 dark:bg-secondary/5 p-10 rounded-[2.5rem] border border-secondary/10 flex flex-col justify-center">
              <Zap className="text-secondary mb-6" size={32} />
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">Ejemplo Rápido: sin(x²)</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                La exterior es <strong>sin(u)</strong> y la interior es <strong>x²</strong>.
              </p>
              <div className="bg-white dark:bg-black/40 p-5 rounded-2xl font-mono text-secondary font-bold">
                Derivada = cos(x²) · 2x = 2x·cos(x²)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-[#0B0F19] border-t border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-8">¿Listo para resolver tus propios ejercicios?</h2>
          <Link href="/" className="bg-secondary hover:bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-secondary/20 active:scale-95">
            Abrir Calculadora Automática
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
