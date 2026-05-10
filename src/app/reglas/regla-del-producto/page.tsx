import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { AlertCircle, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import katex from "katex";

export const metadata: Metadata = {
  title: "Regla del Producto | Derivada de una Multiplicación | Derivio",
  description: "Aprende cómo derivar el producto de dos funciones paso a paso. Guía completa con ejemplos resueltos, fórmulas y errores comunes.",
  keywords: "regla del producto, derivada de un producto, fórmulas de derivadas, cálculo diferencial, derivadas paso a paso",
};

export default function ProductRulePage() {
  const formula = "\\dfrac{d}{dx}\\left[u \\cdot v\\right] = u'v + uv'";
  
  const examples = [
    {
      q: "f(x) = x^2 \\cdot \\sin(x)",
      a: "f'(x) = 2x\\sin(x) + x^2\\cos(x)",
      desc: "Identificamos u=x² y v=sin(x). Aplicamos la fórmula: u'v + uv'."
    },
    {
      q: "f(x) = e^x \\cdot (x+1)",
      a: "f'(x) = e^x(x+1) + e^x(1) = e^x(x+2)",
      desc: "La derivada de eˣ es eˣ. Luego simplificamos factorizando eˣ."
    },
    {
      q: "f(x) = x \\cdot \\ln(x)",
      a: "f'(x) = 1 \\cdot \\ln(x) + x \\cdot \\frac{1}{x} = \\ln(x) + 1",
      desc: "Derivamos el primer término (1) y el segundo (1/x), luego multiplicamos cruzado."
    }
  ];

  const faqs = [
    {
      q: "¿Se puede usar para más de dos funciones?",
      a: "Sí, pero se vuelve más complejo. Para tres funciones (u·v·w), la regla es u'vw + uv'w + uvw'."
    },
    {
      q: "¿Es lo mismo que derivar cada una y multiplicar?",
      a: "¡No! Este es el error más común. La derivada de un producto NO es el producto de las derivadas."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#0B0F19] border-b border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <Link href="/rules" className="inline-flex items-center gap-2 text-secondary dark:text-accent text-[0.85rem] font-bold uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity">
            <span className="text-[1.2rem] mb-0.5">← Volver a Reglas</span>
          </Link>
          <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white leading-tight mb-6">
            Regla del <span className="text-secondary dark:text-accent">Producto</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            La regla del producto es esencial cuando necesitas derivar la multiplicación de dos funciones distintas. No caigas en la trampa de derivar cada una por separado.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-50 dark:bg-black/20 rounded-[2.5rem] p-12 border border-slate-100 dark:border-white/5 flex items-center justify-center shadow-inner">
              <div 
                className="text-4xl md:text-5xl text-slate-900 dark:text-white"
                dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} 
              />
            </div>
            <div className="space-y-6">
              <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white">¿Cómo aplicarla correctamente?</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Para aplicar esta regla, define tus dos funciones como 'u' y 'v'. El resultado será la derivada de la primera por la segunda sin derivar, más la primera sin derivar por la derivada de la segunda.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary dark:text-accent shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Multiplicación de polinomios y trigonométricas</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary dark:text-accent shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Funciones exponenciales mixtas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F6F2] dark:bg-[#0B0F19]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="heading-font text-[2.2rem] text-slate-900 dark:text-white mb-12 text-center">Ejemplos de Aplicación</h2>
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
              <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white">Lo que NO debes hacer</h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-bold mb-4">
              El error fundamental: d/dx [u·v] ≠ u' · v'
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Muchos estudiantes intentan derivar cada factor por separado y multiplicarlos. Esto es incorrecto. Si tienes x·sin(x), la derivada NO es 1·cos(x). Siempre usa la suma u'v + uv'.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F6F2] dark:bg-[#0B0F19]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-10 text-center">FAQ de la Regla del Producto</h2>
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
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-8">Resuelve tus ejercicios ahora</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="bg-primary hover:bg-slate-700 dark:bg-secondary dark:hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg">
              Abrir Calculadora
            </Link>
            <Link href="/examples" className="bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Más Ejemplos Resueltos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
