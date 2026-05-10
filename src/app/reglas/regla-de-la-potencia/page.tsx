import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { AlertCircle, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import katex from "katex";

export const metadata: Metadata = {
  title: "Regla de la Potencia | Derivada de una Potencia | Derivio",
  description: "Aprende la regla de la potencia para derivar funciones paso a paso. Ejemplos resueltos, fórmulas y explicaciones para estudiantes de cálculo.",
  keywords: "regla de la potencia, derivada de una potencia, fórmulas de derivadas, cálculo diferencial, derivadas paso a paso",
};

export default function PowerRulePage() {
  const formula = "\\dfrac{d}{dx}\\left[x^n\\right] = n \\cdot x^{n-1}";
  
  const examples = [
    {
      q: "f(x) = x^5",
      a: "f'(x) = 5x^{5-1} = 5x^4",
      desc: "El exponente 5 baja multiplicando y se resta 1 al exponente original."
    },
    {
      q: "f(x) = x^2 + 4x",
      a: "f'(x) = 2x + 4",
      desc: "Derivamos cada término por separado usando la regla de la potencia."
    },
    {
      q: "f(x) = \\sqrt{x}",
      a: "f(x) = x^{1/2} \\implies f'(x) = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}",
      desc: "Convertimos la raíz en exponente fraccionario antes de derivar."
    }
  ];

  const faqs = [
    {
      q: "¿Qué pasa si el exponente es negativo?",
      a: "La regla sigue siendo la misma. Por ejemplo, la derivada de x⁻² es -2x⁻³."
    },
    {
      q: "¿Se aplica a raíces?",
      a: "Sí, siempre que conviertas la raíz a un exponente fraccionario (ej: √x = x¹/²)."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      
      {/* ─── Hero Section ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#0B0F19] border-b border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <Link href="/reglas" className="inline-flex items-center gap-2 text-secondary dark:text-accent text-[0.85rem] font-bold uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity">
            <span className="text-[1.2rem] mb-0.5">←</span> Volver a Reglas
          </Link>
          <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white leading-tight mb-6">
            Regla de la <span className="text-secondary dark:text-accent">Potencia</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            La regla de la potencia es la base fundamental del cálculo diferencial. Se utiliza para derivar cualquier función donde la variable x está elevada a una constante n.
          </p>
        </div>
      </section>

      {/* ─── Formula & Definition ─────────────────────────────────────── */}
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
              <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white">¿Qué es y cuándo usarla?</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Esta regla establece que para derivar una potencia de x, simplemente bajamos el exponente multiplicando a la base y luego restamos una unidad al exponente original.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary dark:text-accent shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Funciones polinómicas simples (ej: x², x³)</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary dark:text-accent shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Funciones con raíces (convertidas a potencias)</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-secondary dark:text-accent shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Variables en el denominador (ej: 1/x = x⁻¹)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Solved Examples ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F6F2] dark:bg-[#0B0F19]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="heading-font text-[2.2rem] text-slate-900 dark:text-white mb-12 text-center">Ejercicios Resueltos Paso a Paso</h2>
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

      {/* ─── Common Mistakes ─────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-[2.5rem] p-10 md:p-14">
            <div className="flex items-center gap-4 mb-8">
              <AlertCircle className="text-red-500" size={32} />
              <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white">Errores Comunes</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="space-y-2">
                <strong className="text-red-600 dark:text-red-400">Olvidar restar 1 al exponente:</strong>
                <p className="text-slate-600 dark:text-slate-400">Es común bajar el exponente pero dejar el original intacto (ej: d/dx x³ ≠ 3x³).</p>
              </li>
              <li className="space-y-2">
                <strong className="text-red-600 dark:text-red-400">Confundir con la regla de la cadena:</strong>
                <p className="text-slate-600 dark:text-slate-400">Cuando la base no es simplemente 'x' (ej: (sin x)²), se requiere la regla de la cadena, no solo la potencia.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F6F2] dark:bg-[#0B0F19]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-10 text-center">Preguntas Frecuentes</h2>
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

      {/* ─── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-8">¿Listo para practicar?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="bg-primary hover:bg-slate-700 dark:bg-secondary dark:hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg">
              Usar Calculadora
            </Link>
            <Link href="/ejercicios-resueltos" className="bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Ver más Ejemplos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
