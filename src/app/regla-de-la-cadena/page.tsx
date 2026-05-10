import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { AlertCircle, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import katex from "katex";

export const metadata: Metadata = {
  title: "Regla de la Cadena | Derivada de Funciones Compuestas | Derivio",
  description: "Domina la regla de la cadena para resolver derivadas compuestas paso a paso. La guía más completa con ejemplos, fórmulas y explicaciones visuales.",
  keywords: "regla de la cadena, derivada compuesta, fórmulas de derivadas, cálculo diferencial, derivadas paso a paso",
};

export default function ChainRulePage() {
  const formula = "\\dfrac{d}{dx}\\left[f(g(x))\\right] = f'(g(x)) \\cdot g'(x)";
  
  const examples = [
    {
      q: "f(x) = (3x^2 + 1)^5",
      a: "f'(x) = 5(3x^2 + 1)^4 \\cdot (6x) = 30x(3x^2 + 1)^4",
      desc: "Derivamos la potencia exterior, luego multiplicamos por la derivada del interior (6x)."
    },
    {
      q: "f(x) = \\sin(x^2)",
      a: "f'(x) = \\cos(x^2) \\cdot (2x) = 2x\\cos(x^2)",
      desc: "La derivada de sin(u) es cos(u) · u'. Aquí u = x²."
    },
    {
      q: "f(x) = e^{2x}",
      a: "f'(x) = e^{2x} \\cdot (2) = 2e^{2x}",
      desc: "Derivamos el exponente y multiplicamos por la función original."
    }
  ];

  const faqs = [
    {
      q: "¿Cómo identificar una función compuesta?",
      a: "Busca una función 'dentro' de otra. Por ejemplo, en sin(2x), el '2x' es la función interior y 'sin' la exterior."
    },
    {
      q: "¿Se puede aplicar varias veces?",
      a: "Sí. Para funciones muy anidadas (ej: sin(cos(x²))), aplicas la regla de la cadena recursivamente."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#07111f] border-b border-slate-100 dark:border-[#1e293b]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <Link href="/reglas" className="inline-flex items-center gap-2 text-secondary dark:text-accent text-[0.85rem] font-bold uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity">
            <span className="text-[1.2rem] mb-0.5">← Volver a Reglas</span>
          </Link>
          <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white leading-tight mb-6">
            Regla de la <span className="text-secondary dark:text-accent">Cadena</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            La regla de la cadena es la herramienta más poderosa del cálculo diferencial. Permite derivar funciones compuestas, que son la mayoría de las funciones en problemas reales.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#07111f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-50 dark:bg-[#07111f] rounded-[2.5rem] p-12 border border-slate-100 dark:border-[#1e293b] flex items-center justify-center shadow-inner">
              <div 
                className="text-3xl md:text-4xl text-slate-900 dark:text-white"
                dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} 
              />
            </div>
            <div className="space-y-6">
              <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white">Capas de Derivación</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Imagina una función compuesta como una cebolla. Derivamos la capa exterior manteniendo lo de adentro igual, y luego multiplicamos por la derivada de lo de adentro.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary dark:text-accent shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Funciones trigonométricas con argumentos complejos</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary dark:text-accent shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Potencias de funciones completas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F6F2] dark:bg-[#07111f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="heading-font text-[2.2rem] text-slate-900 dark:text-white mb-12 text-center">Derivadas Compuestas Paso a Paso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((ex, i) => (
              <div key={i} className="bg-white dark:bg-[#0f172a] p-8 rounded-[2rem] border border-slate-100 dark:border-[#1e293b] shadow-sm hover:shadow-xl transition-all">
                <div className="text-[0.7rem] font-bold text-secondary dark:text-accent uppercase tracking-widest mb-4">Ejemplo {i + 1}</div>
                <div className="bg-slate-50 dark:bg-[#07111f] p-4 rounded-xl mb-4 text-center overflow-x-auto">
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

      <section className="py-20 bg-white dark:bg-[#07111f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-[2.5rem] p-10 md:p-14">
            <div className="flex items-center gap-4 mb-8">
              <AlertCircle className="text-red-500" size={32} />
              <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white">Errores de concepto</h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-bold mb-4">
              Olvidar derivar la función interior (u').
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Es el error más frecuente. Muchos estudiantes derivan f(g(x)) como f'(g(x)) y olvidan multiplicar por g'(x). Recuerda siempre: ¡Capa exterior por derivada de la interior!
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F6F2] dark:bg-[#07111f]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-10 text-center">Dudas sobre la Cadena</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white dark:bg-[#0f172a] p-8 rounded-2xl border border-slate-100 dark:border-[#1e293b]">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <HelpCircle size={18} className="text-secondary dark:text-accent" /> {f.q}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#07111f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-8">Verifica tu procedimiento</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="bg-primary hover:bg-slate-700 dark:bg-secondary dark:hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg">
              Usar Calculadora Paso a Paso
            </Link>
            <Link href="/ejercicios-resueltos" className="bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Más Ejemplos Resueltos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
