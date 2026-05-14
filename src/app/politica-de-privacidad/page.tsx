import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Derivio",
  description: "Consulta nuestra política de privacidad. Información sobre el manejo de datos y cumplimiento para Derivio.",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#07111f]">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-400 uppercase tracking-widest mb-10">
          <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
          <span className="opacity-30">/</span>
          <span className="text-slate-900 dark:text-white">Privacidad</span>
        </nav>
        <h1 className="heading-font text-[3rem] text-slate-900 dark:text-white mb-10">Política de Privacidad</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-200">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introducción</h2>
            <p>
              En Derivio, valoramos tu privacidad. Esta política describe cómo manejamos la información cuando utilizas nuestra calculadora de derivadas y recursos educativos.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Información que Recopilamos</h2>
            <p>
              Derivio es una herramienta educativa gratuita. No requerimos registro para su uso básico. Podemos recopilar datos técnicos no identificables (como tipo de navegador) para mejorar la experiencia del usuario y el rendimiento del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Uso de Cookies y Publicidad</h2>
            <p>
              Utilizamos cookies para personalizar el contenido y analizar nuestro tráfico. También podemos mostrar anuncios a través de Google AdSense, que utiliza cookies para mostrar anuncios basados en tus visitas anteriores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad estándar para proteger la integridad de nuestro sitio. Las expresiones matemáticas ingresadas en la calculadora se procesan en tiempo real y no se almacenan permanentemente en nuestros servidores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política, puedes contactarnos a través de nuestro blog o redes sociales oficiales.
            </p>
          </section>
        </div>
        
        <div className="mt-16 pt-12 border-t border-slate-100 dark:border-white/5">
          <Link href="/" className="inline-flex items-center gap-2 bg-primary dark:bg-secondary text-white px-8 py-3 rounded-xl font-bold transition-all">
            Volver al Inicio
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
