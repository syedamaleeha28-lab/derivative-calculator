import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SEOContent from "@/components/SEOContent";
import StepByStep from "@/components/StepByStep";
import GraphVisualization from "@/components/GraphVisualization";
import { Calculator } from "lucide-react";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Derivio — Calculadora de Derivadas Paso a Paso | Resuelve Online Gratis",
  description: "Usa nuestra calculadora de derivadas online para obtener el resultado con procedimiento detallado. Resuelve derivadas con pasos de funciones trigonométricas, logarítmicas y parciales gratis.",
  keywords: "calculadora de derivadas, calculadora de derivadas con pasos, calculadora de derivadas online, calculadora de derivadas paso a paso, resolver derivadas online, derivadas paso a paso gratis",
  openGraph: {
    title: "Derivio — Calculadora de Derivadas Online con Procedimiento",
    description: "Resuelve derivadas paso a paso gratis. El motor matemático más preciso para tus ejercicios de cálculo diferencial.",
    url: "https://derivio.app",
    siteName: "Derivio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Derivadas Paso a Paso | Derivio",
    description: "Resuelve derivadas online con pasos detallados y explicaciones claras.",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <Hero />
      <SEOContent />
      <StepByStep />
      <GraphVisualization />
      <FAQ />
      <Footer />
      
      {/* Sticky Mobile Calculate Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 dark:bg-[#020617]/90 backdrop-blur-xl border-t border-slate-200/50 dark:border-white/5 md:hidden z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <a 
          href="#hero" 
          className="w-full bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] py-3.5 rounded-[14px] text-[0.9rem] font-black uppercase tracking-[0.05em] shadow-xl flex justify-center items-center gap-2 transition-all active:scale-95 border border-white/5"
        >
          <Calculator size={16} />
          Calcular Ahora
        </a>
      </div>

    </main>
  );
}

