import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import katex from "katex";
import { Table, Book, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Tabla de Derivadas Completa | Fórmulas de Cálculo | Derivio",
  description: "Consulta nuestra tabla de derivadas completa. Incluye reglas básicas, trigonométricas, logarítmicas, exponenciales y más.",
};

const TABLES = [
  {
    category: "Reglas Básicas",
    rules: [
      { f: "c", d: "0", desc: "Constante" },
      { f: "x", d: "1", desc: "Identidad" },
      { f: "x^n", d: "n \\cdot x^{n-1}", desc: "Potencia" },
      { f: "ax", d: "a", desc: "Lineal" },
      { f: "cx^n", d: "c \\cdot n \\cdot x^{n-1}", desc: "Potencia con constante" },
    ]
  },
  {
    category: "Trigonométricas",
    rules: [
      { f: "\\sin(x)", d: "\\cos(x)", desc: "Seno" },
      { f: "\\cos(x)", d: "-\\sin(x)", desc: "Coseno" },
      { f: "\\tan(x)", d: "\\sec^2(x)", desc: "Tangente" },
      { f: "\\sec(x)", d: "\\sec(x)\\tan(x)", desc: "Secante" },
      { f: "\\csc(x)", d: "-\\csc(x)\\cot(x)", desc: "Cosecante" },
      { f: "\\cot(x)", d: "-\\csc^2(x)", desc: "Cotangente" },
    ]
  },
  {
    category: "Logaritmos y Exponenciales",
    rules: [
      { f: "\\ln(x)", d: "\\frac{1}{x}", desc: "Logaritmo natural" },
      { f: "\\log_a(x)", d: "\\frac{1}{x \\ln(a)}", desc: "Logaritmo base a" },
      { f: "e^x", d: "e^x", desc: "Exponencial base e" },
      { f: "a^x", d: "a^x \\ln(a)", desc: "Exponencial base a" },
    ]
  }
];

export default function TablePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#07111f]">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#07111f] border-b border-slate-100 dark:border-[#1e293b]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center md:text-left">
          <nav className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-400 uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span className="opacity-30">/</span>
            <span className="text-slate-900 dark:text-white">Tabla</span>
          </nav>
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-[0.7rem] font-bold uppercase tracking-widest mb-6">
            Formularios
          </span>
          <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white leading-tight mb-6">
            Tabla de <span className="text-secondary dark:text-accent">Derivadas</span>
          </h1>
          <p className="text-slate-600 dark:text-[#cbd5e1] text-lg max-w-2xl leading-relaxed">
            Una guía rápida y completa con todas las fórmulas de derivación que necesitas para tus ejercicios de cálculo diferencial.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {TABLES.map((table) => (
              <div key={table.category} className="space-y-6">
                <h2 className="heading-font text-2xl text-slate-900 dark:text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <Table size={18} />
                  </div>
                  {table.category}
                </h2>
                
                <div className="overflow-x-auto bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-[#1e293b] rounded-[2rem] shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-black/20 text-slate-400 dark:text-slate-500 text-[0.7rem] uppercase tracking-widest font-bold">
                        <th className="px-8 py-5 border-b border-slate-100 dark:border-white/5">Función f(x)</th>
                        <th className="px-8 py-5 border-b border-slate-100 dark:border-white/5">Derivada f'(x)</th>
                        <th className="px-8 py-5 border-b border-slate-100 dark:border-white/5">Nombre</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 dark:text-slate-300">
                      {table.rules.map((rule, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                          <td className="px-8 py-6 border-b border-slate-100 dark:border-white/5">
                            <div className="text-lg" dangerouslySetInnerHTML={{ __html: katex.renderToString(rule.f) }} />
                          </td>
                          <td className="px-8 py-6 border-b border-slate-100 dark:border-white/5">
                            <div className="text-lg text-secondary dark:text-accent font-bold" dangerouslySetInnerHTML={{ __html: katex.renderToString(rule.d) }} />
                          </td>
                          <td className="px-8 py-6 border-b border-slate-100 dark:border-white/5 text-sm font-medium">
                            {rule.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-secondary/5 dark:bg-secondary/10 rounded-[3rem] border border-secondary/20 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <Zap className="text-secondary mb-4" size={32} />
              <h3 className="heading-font text-2xl text-slate-900 dark:text-white mb-4">¿Quieres ver el procedimiento paso a paso?</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Nuestra calculadora no solo te da el resultado, sino que te explica cada regla aplicada para que aprendas el proceso completo.
              </p>
            </div>
            <Link href="/" className="bg-secondary hover:bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-secondary/20">
              Probar Calculadora
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
