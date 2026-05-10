import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Waves } from "lucide-react";
import katex from "katex";

export const metadata: Metadata = {
  title: "Derivada de sin(x) Explicada | Demonstración Gráfica | Derivio",
  description: "Entiende por qué la derivada del seno es el coseno. Explicación matemática y visual de las derivadas trigonométricas para estudiantes.",
  keywords: "derivada de sin x, derivada del seno, derivadas trigonométricas explicadas, cálculo diferencial fácil, derivadas paso a paso",
};

export default function SinXDemoPage() {
  const result = "\\dfrac{d}{dx} \\sin(x) = \\cos(x)";
  
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0B0F19]">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#0B0F19] border-b border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Link href="/demonstraciones" className="inline-flex items-center gap-2 text-secondary dark:text-accent font-bold uppercase tracking-widest text-[0.8rem] mb-8 hover:opacity-70 transition-opacity">
            <ArrowLeft size={16} /> Volver a Demonstraciones
          </Link>
          <h1 className="heading-font text-[3rem] md:text-[4rem] text-slate-900 dark:text-white leading-tight mb-6">
            Derivada de <span className="text-secondary dark:text-accent">sin(x)</span> <br />
            y su Naturaleza
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            Las funciones trigonométricas tienen una relación fascinante con sus derivadas. Aquí exploramos por qué el cambio de posición en un círculo unitario nos lleva del seno al coseno.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0F1420]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="bg-slate-50 dark:bg-black/20 p-12 rounded-[3rem] border border-slate-100 dark:border-white/5 text-center mb-16">
            <h2 className="heading-font text-2xl text-slate-900 dark:text-white mb-8">El Resultado</h2>
            <div 
              className="text-3xl md:text-5xl text-secondary dark:text-accent overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: katex.renderToString(result, { displayMode: true }) }} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="heading-font text-3xl text-slate-900 dark:text-white">Interpretación Visual</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Si observas la gráfica del seno, su pendiente (derivada) es máxima cuando cruza el eje X y es cero en sus crestas y valles. Si graficas esas pendientes, obtienes exactamente la curva del coseno.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="text-secondary shrink-0" />
                  <span>En x=0, sin(0)=0 pero su pendiente es 1 (cos(0)=1).</span>
                </li>
                <li className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="text-secondary shrink-0" />
                  <span>En x=π/2, sin(π/2)=1 pero su pendiente es 0 (cos(π/2)=0).</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl flex items-center justify-center overflow-hidden border border-slate-100 dark:border-white/5 shadow-inner">
               <Waves size={80} className="text-secondary opacity-20 absolute" />
               <div className="text-center p-8">
                  <span className="text-[0.7rem] font-bold text-secondary uppercase tracking-widest mb-2 block">Tip Académico</span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">Recuerda: la derivada del coseno es -seno. ¡Cuidado con el signo!</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-[#0B0F19] border-t border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white mb-8">¿Quieres derivar otra función trigonométrica?</h2>
          <Link href="/" className="bg-primary hover:bg-slate-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl active:scale-95">
            Abrir Calculadora
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
