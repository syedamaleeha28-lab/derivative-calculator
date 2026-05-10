import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, HelpCircle, Info } from "lucide-react";
import katex from "katex";

export const metadata: Metadata = {
  title: "Derivada de x² Explicada Paso a Paso | Demonstración | Derivio",
  description: "Entiende por qué la derivada de x² es 2x. Demonstración detallada usando la definición de límite y la regla de la potencia para principiantes.",
  keywords: "derivada de x al cuadrado, derivada de x2, demostración de derivada, cálculo diferencial fácil, derivadas paso a paso",
};

export default function XSquaredDemoPage() {
  const definition = "f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}";
  const step1 = "f'(x) = \\lim_{h \\to 0} \\dfrac{(x+h)^2 - x^2}{h}";
  const step2 = "f'(x) = \\lim_{h \\to 0} \\dfrac{x^2 + 2xh + h^2 - x^2}{h}";
  const step3 = "f'(x) = \\lim_{h \\to 0} \\dfrac{2xh + h^2}{h}";
  const step4 = "f'(x) = \\lim_{h \\to 0} (2x + h) = 2x";

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0B0F19]">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#0B0F19] border-b border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Link href="/demonstraciones" className="inline-flex items-center gap-2 text-secondary dark:text-accent font-bold uppercase tracking-widest text-[0.8rem] mb-8 hover:opacity-70 transition-opacity">
            <ArrowLeft size={16} /> Volver a Demonstraciones
          </Link>
          <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white leading-tight mb-6">
            Derivada de <span className="text-secondary dark:text-accent">x²</span> <br />
            Explicada Paso a Paso
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            ¿Alguna vez te has preguntado de dónde viene el famoso 2x? En esta lección demostramos la derivada de x² utilizando la definición formal de límite.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-black/20 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5">
                <h2 className="heading-font text-2xl text-slate-900 dark:text-white mb-6">La Definición de Límite</h2>
                <div 
                  className="text-2xl text-secondary dark:text-accent mb-6 overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: katex.renderToString(definition, { displayMode: true }) }} 
                />
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Para cualquier función, la derivada representa la pendiente de la recta tangente en un punto dado. Esta es la fórmula universal.
                </p>
              </div>

              <div className="bg-violet-50 dark:bg-secondary/5 p-8 rounded-[2rem] border border-secondary/10">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Info size={18} className="text-secondary" /> Concepto Clave
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Cuando h tiende a cero, estamos acercando dos puntos infinitamente hasta que se convierten en uno solo: el punto de tangencia.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="heading-font text-3xl text-slate-900 dark:text-white mb-8">El Desarrollo Matemático</h2>
              
              <div className="space-y-4">
                {[
                  { label: "1. Sustitución", math: step1 },
                  { label: "2. Expansión", math: step2 },
                  { label: "3. Simplificación", math: step3 },
                  { label: "4. Resultado Final", math: step4 },
                ].map((step, idx) => (
                  <div key={idx} className="p-6 bg-white dark:bg-[#131927] border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
                    <span className="text-[0.7rem] font-bold text-secondary dark:text-accent uppercase tracking-widest mb-2 block">{step.label}</span>
                    <div 
                      className="text-lg text-slate-800 dark:text-slate-200 overflow-x-auto"
                      dangerouslySetInnerHTML={{ __html: katex.renderToString(step.math, { displayMode: false }) }} 
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F6F2] dark:bg-[#0B0F19]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="heading-font text-[2.2rem] text-slate-900 dark:text-white mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-[#131927] p-8 rounded-2xl border border-slate-100 dark:border-white/5">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <HelpCircle size={18} className="text-secondary" /> ¿Por qué se cancela la h?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Al dividir el numerador entre h, eliminamos la indeterminación 0/0, lo que nos permite evaluar el límite directamente.
              </p>
            </div>
            <div className="bg-white dark:bg-[#131927] p-8 rounded-2xl border border-slate-100 dark:border-white/5">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <HelpCircle size={18} className="text-secondary" /> ¿Funciona para x³?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                ¡Sí! El procedimiento es idéntico, solo que tendrías que expandir (x+h)³ usando el binomio de Newton.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-8">¿Quieres ver otra derivada?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:bg-slate-700">
              Ir a la Calculadora
            </Link>
            <Link href="/demonstraciones" className="bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Más Demonstraciones
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
