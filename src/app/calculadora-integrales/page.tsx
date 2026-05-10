import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Hammer, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Calculadora de Integrales Paso a Paso | Próximamente en Derivio",
  description: "Estamos construyendo el mejor motor de integración simbólica. Muy pronto podrás resolver integrales definidas e indefinidas paso a paso.",
};

export default function IntegralesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0B0F19]">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary mb-8 animate-bounce">
          <Hammer size={40} />
        </div>
        <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white mb-6">
          Calculadora de <span className="text-secondary dark:text-accent">Integrales</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Nuestro equipo de matemáticos e ingenieros está trabajando en el motor de integrales. Muy pronto podrás resolver integrales complejas con el mismo detalle paso a paso que nuestras derivadas.
        </p>
        <Link href="/" className="bg-primary dark:bg-secondary text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-all">
          Usar Calculadora de Derivadas <ArrowRight size={18} />
        </Link>
      </div>
      <Footer />
    </main>
  );
}
