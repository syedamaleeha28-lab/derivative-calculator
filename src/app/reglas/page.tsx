import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Rules from "@/components/Rules";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reglas de Derivación Explicadas | Derivio",
  description: "Aprende las principales reglas de derivación: regla de la cadena, producto, cociente y fórmulas esenciales.",
  openGraph: {
    title: "Reglas de Derivación Explicadas | Derivio",
    description: "Aprende las principales reglas de derivación: regla de la cadena, producto, cociente y fórmulas esenciales.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reglas de Derivación Explicadas | Derivio",
    description: "Aprende las principales reglas de derivación.",
  },
};

export default function RulesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <div className="pt-24">
        <Rules />
      </div>
      <section className="py-16 bg-[#F8F6F2] dark:bg-[#07111f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-6">
            Guía Completa de Fórmulas de Derivadas
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
              Para resolver derivadas complejas, es fundamental entender las reglas básicas que rigen el cálculo diferencial. Aquí te explicamos las fórmulas más importantes que utiliza nuestra calculadora.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
              <div className="bg-white dark:bg-[#131927] p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-4">Regla de la Cadena</h3>
                <p className="text-slate-500 dark:text-slate-300 mb-4">
                  Probablemente la regla más importante. Se utiliza para derivar funciones compuestas, es decir, una función dentro de otra. Es esencial para resolver ejercicios de derivadas avanzadas.
                </p>
              </div>
              
              <div className="bg-white dark:bg-[#131927] p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-4">Derivada del Producto y Cociente</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  Cuando tienes funciones multiplicándose o dividiéndose, no puedes simplemente derivar cada parte. Debes aplicar estas fórmulas específicas para obtener el resultado correcto.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-secondary/5 dark:bg-secondary/10 p-10 rounded-[2.5rem] border border-secondary/20">
              <Link href="/reglas" className="inline-flex items-center gap-2 text-secondary dark:text-accent text-[0.85rem] font-bold uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity">
                <span className="text-[1.2rem] mb-0.5">← Volver a Reglas</span>
              </Link>
              <h3 className="heading-font text-[1.5rem] text-secondary dark:text-accent mb-4 text-center">Aprende a Derivar con Derivio</h3>
              <p className="text-slate-700 dark:text-[#cbd5e1] text-center max-w-3xl mx-auto">
                Nuestra plataforma no solo te da el resultado; te enseña a aplicar estas fórmulas paso a paso. Es como tener un profesor de matemáticas personal disponible 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
