import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Calculadora de Derivadas Parciales Paso a Paso | Derivio",
  description: "Aprende a calcular derivadas parciales respecto a x, y, z. Próximamente disponible para funciones multivariable en Derivio.",
};

export default function ParcialesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0B0F19]">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary mb-8">
          <Layers size={40} />
        </div>
        <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white mb-6">
          Derivadas <span className="text-secondary dark:text-accent">Parciales</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          El cálculo multivariable es el siguiente paso. Estamos optimizando nuestra interfaz para que puedas seleccionar respecto a qué variable derivar en funciones complejas de varias dimensiones.
        </p>
        <Link href="/" className="bg-primary dark:bg-secondary text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-all">
          Ir a Derivadas Simples <ArrowRight size={18} />
        </Link>
      </div>
      <Footer />
    </main>
  );
}
