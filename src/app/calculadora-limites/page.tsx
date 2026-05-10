import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Calculadora de Límites Paso a Paso | Derivio",
  description: "Resuelve límites por L'Hôpital o métodos algebraicos. Próximamente disponible en la plataforma Derivio.",
};

export default function LimitesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0B0F19]">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary mb-8">
          <Sparkles size={40} />
        </div>
        <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white mb-6">
          Calculadora de <span className="text-secondary dark:text-accent">Límites</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          ¿Problemas con indeterminaciones 0/0 o infinito? Estamos integrando la regla de L'Hôpital en nuestro motor para ofrecerte soluciones de límites paso a paso muy pronto.
        </p>
        <Link href="/" className="bg-primary dark:bg-secondary text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-all">
          Resolver Derivadas Ahora <ArrowRight size={18} />
        </Link>
      </div>
      <Footer />
    </main>
  );
}
