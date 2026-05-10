import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SEOContent from "@/components/SEOContent";
import StepByStep from "@/components/StepByStep";
import GraphVisualization from "@/components/GraphVisualization";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Calculadora de Derivadas Paso a Paso | Derivio",
  description: "Resuelve derivadas online con pasos detallados. Calculadora de derivadas gratuita con ejemplos, reglas y soluciones paso a paso.",
  openGraph: {
    title: "Calculadora de Derivadas Paso a Paso | Derivio",
    description: "Resuelve derivadas online con pasos detallados. Calculadora de derivadas gratuita.",
    url: "https://derivio.app",
    siteName: "Derivio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Derivadas Paso a Paso | Derivio",
    description: "Resuelve derivadas online con pasos detallados.",
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
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 dark:bg-[#07111f]/90 backdrop-blur-md border-t border-slate-200 dark:border-[#1e293b] md:hidden z-40 transform translate-y-0 transition-transform shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <button className="w-full bg-secondary dark:bg-secondary text-white py-3.5 rounded-xl font-bold shadow-lg shadow-secondary/30 flex justify-center items-center gap-2">
          Calcular Derivada Ahora
        </button>
      </div>
    </main>
  );
}
