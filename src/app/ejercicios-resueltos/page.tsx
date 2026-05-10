import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, ChevronRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Ejercicios de Derivadas Resueltos Paso a Paso | Derivio",
  description: "Practica con nuestra colección de ejercicios de derivadas resueltos. Aprende paso a paso con soluciones detalladas y explicaciones claras.",
};

const EXERCISES = [
  {
    level: "Básico",
    title: "Derivada de x³ + 5x²",
    solution: "f'(x) = 3x² + 10x",
    tags: ["Potencia", "Suma"]
  },
  {
    level: "Intermedio",
    title: "Derivada de sin(x) · cos(x)",
    solution: "f'(x) = cos²(x) - sin²(x) = cos(2x)",
    tags: ["Producto", "Trig"]
  },
  {
    level: "Avanzado",
    title: "Derivada de ln(sin(x²))",
    solution: "f'(x) = 2x · cot(x²)",
    tags: ["Cadena", "Log", "Trig"]
  }
];

export default function ExercisesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0B0F19]">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-[#F8F6F2] dark:bg-[#0B0F19] border-b border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-400 uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span className="opacity-30">/</span>
            <span className="text-slate-900 dark:text-white">Ejercicios</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="heading-font text-[3.5rem] md:text-[4.5rem] text-slate-900 dark:text-white leading-[1.1] mb-8">
              Ejercicios <br />
              <span className="text-secondary dark:text-accent">Resueltos</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
              La mejor forma de aprender cálculo es practicando. Aquí tienes una selección de problemas con sus soluciones detalladas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {EXERCISES.map((ex, i) => (
              <div key={i} className="bg-white dark:bg-[#131927] border border-slate-100 dark:border-white/5 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-secondary/20 transition-all group">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[0.65rem] font-bold text-secondary dark:text-accent uppercase tracking-widest px-3 py-1 bg-secondary/10 dark:bg-secondary/20 rounded-full">
                    {ex.level}
                  </span>
                  <BookOpen size={20} className="text-slate-300 dark:text-slate-700" />
                </div>
                <h2 className="heading-font text-2xl text-slate-900 dark:text-white mb-6 group-hover:text-secondary transition-colors">
                  {ex.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {ex.tags.map(tag => (
                    <span key={tag} className="text-[0.6rem] font-bold text-slate-400 border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-50 dark:border-white/5">
                  <span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest block mb-2">Solución</span>
                  <p className="text-lg font-bold text-slate-800 dark:text-slate-200 font-mono">
                    {ex.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-slate-500 dark:text-slate-400 mb-8">¿Quieres resolver tus propios ejercicios personalizados?</p>
            <Link href="/" className="inline-flex items-center gap-3 bg-primary dark:bg-secondary text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:scale-105 active:scale-95">
              Usar Calculadora Paso a Paso <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
