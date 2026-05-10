import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FlaskConical } from "lucide-react";
import katex from "katex";

export const metadata: Metadata = {
  title: "Derivadas Logarítmicas Explicadas | Demonstración | Derivio",
  description: "Aprende cómo derivar logaritmos naturales y de base decimal. Guía completa con la fórmula de ln(x) y ejemplos resueltos paso a paso.",
  keywords: "derivada de logaritmos, derivada de ln x, cálculo diferencial fácil, derivadas explicadas fácil, ejemplos de derivadas",
};

export default function LogarithmicDemoPage() {
  const lnFormula = "\\dfrac{d}{dx} \\ln(x) = \\dfrac{1}{x}";
  const logFormula = "\\dfrac{d}{dx} \\log_b(x) = \\dfrac{1}{x \\ln(b)}";
  
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0B0F19]">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#0B0F19] border-b border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Link href="/demonstraciones" className="inline-flex items-center gap-2 text-secondary dark:text-accent font-bold uppercase tracking-widest text-[0.8rem] mb-8 hover:opacity-70 transition-opacity">
            <ArrowLeft size={16} /> Volver a Demonstraciones
          </Link>
          <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white leading-tight mb-6">
            Derivadas <span className="text-secondary dark:text-accent">Logarítmicas</span> <br />
            y sus Propiedades
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            Los logaritmos son fundamentales en el crecimiento exponencial y el decaimiento. Su derivada tiene una propiedad elegante: convierte una curva logarítmica en una hipérbola simple.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-black/20 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 text-center">
              <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Logaritmo Natural</span>
              <div 
                className="text-2xl md:text-3xl text-slate-900 dark:text-white overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: katex.renderToString(lnFormula, { displayMode: true }) }} 
              />
            </div>
            <div className="bg-slate-50 dark:bg-black/20 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 text-center">
              <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Cualquier Base (b)</span>
              <div 
                className="text-2xl md:text-3xl text-slate-900 dark:text-white overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: katex.renderToString(logFormula, { displayMode: true }) }} 
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="heading-font text-3xl text-slate-900 dark:text-white mb-6">¿Por qué es 1/x?</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6">
                El logaritmo natural es la inversa de la función exponencial eˣ. Usando la derivada de funciones inversas, podemos demostrar que la pendiente de ln(x) siempre es igual al recíproco de su posición en el eje X.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300">Dominio: x debe ser mayor que 0.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300">Pendiente: siempre positiva y decreciente.</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-secondary/5 p-10 rounded-[2.5rem] border border-secondary/10 flex flex-col md:flex-row items-center gap-10">
               <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-4">Uso de la Regla de la Cadena</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Si tienes ln(u), la derivada es u' / u. Por ejemplo, la derivada de ln(x² + 5) es 2x / (x² + 5). Esta es una de las aplicaciones más comunes en cálculo.
                  </p>
               </div>
               <div className="bg-white dark:bg-black/40 p-6 rounded-2xl border border-white/10 shadow-sm font-mono text-secondary font-bold text-center">
                  ln(u) → u' / u
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-[#0B0F19] border-t border-slate-100 dark:border-white/5 text-center">
        <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-8">Practica con logaritmos complejos</h2>
        <Link href="/" className="bg-secondary hover:bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl active:scale-95">
          Ver Calculadora de Logaritmos
        </Link>
      </section>

      <Footer />
    </main>
  );
}
