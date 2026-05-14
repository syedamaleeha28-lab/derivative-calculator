import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Servicio | Derivio",
  description: "Términos y condiciones de uso para la plataforma Derivio. Información legal y educativa.",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#07111f]">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-400 uppercase tracking-widest mb-10">
          <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
          <span className="opacity-30">/</span>
          <span className="text-slate-900 dark:text-white">Términos</span>
        </nav>
        <h1 className="heading-font text-[3rem] text-slate-900 dark:text-white mb-10">Términos de Servicio</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-200">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Uso del Servicio</h2>
            <p>
              Derivio es una plataforma educativa destinada a facilitar el aprendizaje del cálculo diferencial. Al acceder a este sitio, aceptas utilizarlo de manera responsable y con fines legales.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Descargo de Responsabilidad Educativa</h2>
            <p>
              Aunque nos esforzamos por ofrecer resultados precisos mediante nuestro motor simbólico, Derivio se proporciona "tal cual". No garantizamos que los resultados estén libres de errores. Te recomendamos verificar los resultados para trabajos críticos o exámenes académicos oficiales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Propiedad Intelectual</h2>
            <p>
              El diseño, el software del motor de derivación y los contenidos educativos de este sitio son propiedad de Derivio y están protegidos por leyes de propiedad intelectual. No se permite la copia o distribución masiva sin permiso previo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Limitación de Responsabilidad</h2>
            <p>
              Derivio no será responsable de ningún daño derivado del uso o la imposibilidad de uso de la calculadora, incluyendo errores en el cálculo de derivadas o pérdida de datos.
            </p>
          </section>
        </div>
        
        <div className="mt-16 pt-12 border-t border-slate-100 dark:border-white/5">
          <Link href="/" className="inline-flex items-center gap-2 bg-primary dark:bg-secondary text-white px-8 py-3 rounded-xl font-bold transition-all">
            Aceptar e Ir al Inicio
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
