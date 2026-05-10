import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Derivadas | Derivio",
  description: "Respuestas sobre derivadas, cálculo diferencial y cómo resolver derivadas online paso a paso.",
  openGraph: {
    title: "Preguntas Frecuentes sobre Derivadas | Derivio",
    description: "Respuestas sobre derivadas, cálculo diferencial y cómo resolver derivadas online paso a paso.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes sobre Derivadas | Derivio",
    description: "Preguntas frecuentes sobre derivadas.",
  },
};

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <div className="pt-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-10">
          <nav className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span className="opacity-30">/</span>
            <span className="text-slate-900 dark:text-white">FAQ</span>
          </nav>
        </div>
        <FAQ />
      </div>
      <section className="py-16 bg-white dark:bg-[#101827]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-font text-[2.2rem] text-slate-900 dark:text-white mb-8 text-center">
              Guía de Inicio Rápido
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">¿Cómo introducir funciones correctamente?</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Para obtener los mejores resultados, usa paréntesis para agrupar términos y símbolos estándar. Por ejemplo, escribe <code>3x^2</code> para tres equis al cuadrado o <code>sin(x)</code> para el seno de equis. Nuestra calculadora es inteligente y detectará la mayoría de las expresiones comunes.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">¿Es seguro usar Derivio?</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Absolutamente. Derivio es una herramienta educativa gratuita diseñada para ayudar a estudiantes de todo el mundo a mejorar sus habilidades en matemáticas y cálculo diferencial. No recopilamos datos personales y todo el procesamiento se hace de forma segura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
