import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FlaskConical } from "lucide-react";
import katex from "katex";

export const metadata: Metadata = {
  title: "Regla del Producto Paso a Paso | Demonstración y Guía | Derivio",
  description: "Aprende a derivar el producto de dos funciones de forma fácil. Guía paso a paso con la fórmula u'v + uv' y ejemplos prácticos para estudiantes.",
  keywords: "regla del producto paso a paso, derivada de un producto, cálculo diferencial fácil, derivadas explicadas, ejemplos de derivadas",
};

export default function ProductRuleDemoPage() {
  const formula = "\\dfrac{d}{dx} [u \\cdot v] = u' \\cdot v + u \\cdot v'";
  
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0B0F19]">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#0B0F19] border-b border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Link href="/demonstraciones" className="inline-flex items-center gap-2 text-secondary dark:text-accent font-bold uppercase tracking-widest text-[0.8rem] mb-8 hover:opacity-70 transition-opacity">
            <ArrowLeft size={16} /> Volver a Demonstraciones
          </Link>
          <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white leading-tight mb-6">
            Regla del <span className="text-secondary dark:text-accent">Producto</span> <br />
            Paso a Paso
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            Derivar una multiplicación de funciones no es tan simple como multiplicar sus derivadas. En esta guía te enseñamos el método correcto para no fallar en tus exámenes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="bg-slate-50 dark:bg-black/20 p-12 rounded-[3rem] border border-slate-100 dark:border-white/5 text-center mb-20 shadow-inner">
            <h2 className="heading-font text-2xl text-slate-900 dark:text-white mb-8">La Estructura Correcta</h2>
            <div 
              className="text-3xl md:text-5xl text-secondary dark:text-accent overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="heading-font text-3xl text-slate-900 dark:text-white">Reglas de Oro</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                La regla del producto nos dice que la derivada es una suma de dos términos cruzados. Nunca intentes derivar cada parte y multiplicarlas al final.
              </p>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex gap-4 p-5 bg-white dark:bg-[#131927] border border-slate-100 dark:border-white/5 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold shrink-0">1</div>
                  <p className="text-slate-700 dark:text-slate-300">Deriva la primera función (u) y multiplícala por la segunda sin tocar (v).</p>
                </div>
                <div className="flex gap-4 p-5 bg-white dark:bg-[#131927] border border-slate-100 dark:border-white/5 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold shrink-0">2</div>
                  <p className="text-slate-700 dark:text-slate-300">Súmale la primera sin tocar (u) por la derivada de la segunda (v').</p>
                </div>
              </div>
            </div>
            
            <div className="bg-violet-50 dark:bg-secondary/5 p-12 rounded-[3rem] border border-secondary/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FlaskConical size={120} />
               </div>
               <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-2xl">Un Ejemplo Real</h3>
               <div className="space-y-4 relative z-10">
                  <div className="bg-white dark:bg-black/40 p-4 rounded-xl border border-slate-200/50 dark:border-white/5">
                     <span className="text-[0.6rem] font-bold uppercase text-slate-400 mb-1 block">Función</span>
                     <div className="text-lg font-bold text-slate-800 dark:text-slate-100">f(x) = x³ · ln(x)</div>
                  </div>
                  <div className="bg-secondary/5 dark:bg-secondary/10 p-4 rounded-xl border border-secondary/20">
                     <span className="text-[0.6rem] font-bold uppercase text-secondary mb-1 block">Solución Aplicada</span>
                     <div className="text-lg font-bold text-secondary dark:text-accent">f'(x) = 3x²·ln(x) + x³·(1/x)</div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm italic">Simplificando: f'(x) = 3x²ln(x) + x²</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-[#0B0F19] border-t border-slate-100 dark:border-white/5 text-center">
        <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-8">¿Tienes una función más difícil?</h2>
        <Link href="/" className="bg-primary hover:bg-slate-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 active:scale-95">
          Probar en la Calculadora
        </Link>
      </section>

      <Footer />
    </main>
  );
}
