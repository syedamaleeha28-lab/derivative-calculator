import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight, GraduationCap, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Demonstraciones de Derivadas | Cálculo Diferencial Explicado | Derivio",
  description: "Aprende cómo se derivan las funciones con nuestras demonstraciones paso a paso. Cálculo diferencial fácil para estudiantes con explicaciones visuales.",
  keywords: "derivadas explicadas, cálculo diferencial fácil, cómo derivar funciones, derivadas paso a paso, ejemplos de derivadas",
};

const DEMOS = [
  {
    title: "Derivada de x²",
    slug: "derivative-of-x-squared",
    desc: "Explicación visual de por qué la derivada de x² es 2x usando la definición formal.",
    category: "Básico",
    icon: <Lightbulb size={20} className="text-amber-500" />
  },
  {
    title: "Regla de la Cadena",
    slug: "chain-rule-explained",
    desc: "Cómo derivar funciones compuestas entendiendo las capas externas e internas.",
    category: "Avanzado",
    icon: <GraduationCap size={20} className="text-secondary" />
  },
  {
    title: "Derivada de sin(x)",
    slug: "derivative-of-sin-x",
    desc: "Demostración geométrica y analítica de la derivada de las funciones trigonométricas.",
    category: "Trigonometría",
    icon: <BookOpen size={20} className="text-blue-500" />
  },
  {
    title: "Regla del Producto",
    slug: "product-rule-step-by-step",
    desc: "Guía detallada para multiplicar y derivar funciones de forma simultánea.",
    category: "Intermedio",
    icon: <ChevronRight size={20} className="text-emerald-500" />
  },
  {
    title: "Derivadas Logarítmicas",
    slug: "logarithmic-derivatives",
    desc: "Entiende el comportamiento del logaritmo natural y su relación con 1/x.",
    category: "Logaritmos",
    icon: <Lightbulb size={20} className="text-purple-500" />
  }
];

export default function DemonstrationsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0B0F19]">
      <Navbar />
      
      {/* ─── Hero Section ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-[#F8F6F2] dark:bg-[#0B0F19] border-b border-slate-100 dark:border-white/5 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-accent text-[0.7rem] font-bold uppercase tracking-widest mb-6">
              Academia Derivio
            </span>
            <h1 className="heading-font text-[3.5rem] md:text-[4.5rem] text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-8">
              Demonstraciones de <br />
              <span className="text-secondary dark:text-accent">Cálculo Diferencial</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed max-w-2xl">
              No solo resuelvas ejercicios, entiende el porqué detrás de cada fórmula. Nuestras demonstraciones te guían paso a paso a través de la lógica matemática.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Grid Section ────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEMOS.map((demo) => (
              <Link 
                key={demo.slug} 
                href={`/demonstraciones/${demo.slug}`}
                className="group block p-8 bg-white dark:bg-[#131927] border border-slate-100 dark:border-white/5 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-secondary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-black/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {demo.icon}
                </div>
                <div className="text-[0.65rem] font-bold text-secondary dark:text-accent uppercase tracking-widest mb-3">
                  {demo.category}
                </div>
                <h2 className="heading-font text-xl text-slate-900 dark:text-white mb-4 group-hover:text-secondary dark:group-hover:text-accent transition-colors">
                  {demo.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {demo.desc}
                </p>
                <div className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-wider group-hover:text-secondary transition-colors">
                  Ver demonstración <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 dark:bg-black/20 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-font text-[2.5rem] text-slate-900 dark:text-white mb-8">¿Necesitas resolver una derivada ahora?</h2>
          <Link 
            href="/"
            className="inline-flex items-center gap-2.5 bg-primary hover:bg-slate-700 dark:bg-secondary dark:hover:bg-indigo-500 text-white px-10 py-4 rounded-xl font-bold text-[1rem] transition-all shadow-xl shadow-primary/10 active:scale-95"
          >
            Usar Calculadora Paso a Paso
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
