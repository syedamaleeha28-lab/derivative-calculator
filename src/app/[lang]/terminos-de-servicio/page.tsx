import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "@/components/LanguageLink";
import { dictionaries, Lang } from "@/lib/dictionaries";
import { metadataFromEntry, normalizeLang } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = normalizeLang(lang);
  const t = dictionaries[currentLang].terms;
  return metadataFromEntry(currentLang, "/terminos-de-servicio", { title: t.title, description: t.subtitle });
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].terms;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-400 uppercase tracking-widest mb-10">
          <Link href="/" className="hover:text-secondary transition-colors">{currentLang === 'en' ? 'Home' : currentLang === 'pt' ? 'Início' : 'Inicio'}</Link>
          <span className="opacity-30">/</span>
          <span className="text-slate-900">{t.title}</span>
        </nav>
        <h1 className="heading-font text-[3rem] text-slate-900 mb-10">{t.title}</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          {t.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{currentLang === 'en' ? '4. Limitation of Liability' : currentLang === 'pt' ? '4. Limitação de Responsabilidade' : '4. Limitación de Responsabilidad'}</h2>
            <p>
              {currentLang === 'en' 
                ? 'Calculadora Derivadas will not be liable for any damages arising from the use or inability to use the calculator, including errors in the calculation of derivatives or loss of data.'
                : currentLang === 'pt'
                ? 'Calculadora Derivadas não será responsável por quaisquer danos decorrentes do uso ou da incapacidade de usar a calculadora, incluindo erros no cálculo de derivadas ou perda de dados.'
                : 'Calculadora Derivadas no será responsable de ningún daño derivado del uso o la imposibilidad de uso de la calculadora, incluyendo errores en el cálculo de derivadas o pérdida de datos.'
              }
            </p>
          </section>
        </div>
        
        <div className="mt-16 pt-12 border-t border-slate-100">
          <Link href="/" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105">
            {t.accept}
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
