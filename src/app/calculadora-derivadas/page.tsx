import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PopularExamples from "@/components/PopularExamples";
import Features from "@/components/Features";
import Rules from "@/components/Rules";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Calculadora de Derivadas Paso a Paso | Resolver Derivadas Online",
  description: "Usa nuestra calculadora de derivadas para resolver funciones complejas con pasos detallados. Herramienta gratuita para derivadas trigonométricas, logarítmicas y más.",
};

export default function DerivadasPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <Hero />
      <Features />
      <Rules />
      <PopularExamples />
      <FAQ />
      <Footer />
    </main>
  );
}
