import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopularExamples from "@/components/PopularExamples";
import SEOContent from "@/components/SEOContent";

export const metadata: Metadata = {
  title: "Ejemplos de Derivadas Resueltas | Derivio",
  description: "Explora ejemplos de derivadas resueltas paso a paso. Aprende cálculo diferencial con ejercicios explicados y fórmulas.",
  openGraph: {
    title: "Ejemplos de Derivadas Resueltas | Derivio",
    description: "Explora ejemplos de derivadas resueltas paso a paso. Aprende cálculo diferencial.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ejemplos de Derivadas Resueltas | Derivio",
    description: "Ejemplos de derivadas resueltas paso a paso.",
  },
};

export default function ExamplesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <div className="pt-20">
        <PopularExamples />
      </div>
      <section className="py-16 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-6">
            Aprende con Ejercicios de Derivadas
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
            La mejor forma de dominar el cálculo diferencial es a través de la práctica constante. En esta sección, hemos recopilado los ejercicios de derivadas más comunes que encontrarás en tus exámenes y tareas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">¿Por qué estudiar ejemplos resueltos?</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Ver el procedimiento paso a paso te permite identificar qué reglas de derivación se aplican en cada caso. Ya sea la regla de la potencia o la compleja regla de la cadena, nuestros ejemplos te guían en cada etapa.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">Variedad de Funciones</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Desde funciones algebraicas simples hasta funciones trigonométricas e hiperbólicas. Nuestra calculadora y estos ejemplos cubren todo el espectro del cálculo de derivadas online.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SEOContent />
      <Footer />
    </main>
  );
}
