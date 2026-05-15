import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "@/components/LanguageLink";
import { dictionaries, Lang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].privacy;

  return {
    title: `${t.title} | Calculadora Derivadas`,
    description: t.subtitle,
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].privacy;

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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{currentLang === 'en' ? '4. Contact' : currentLang === 'pt' ? '4. Contato' : '4. Contacto'}</h2>
            <p>
              {currentLang === 'en' 
                ? 'If you have questions about this policy, you can contact us through our blog or official social media.'
                : currentLang === 'pt'
                ? 'Se você tiver dúvidas sobre esta política, pode entrar em contato conosco através do nosso blog ou redes sociais oficiais.'
                : 'Si tienes preguntas sobre esta política, puedes contactarnos a través de nuestro blog o redes sociales oficiales.'
              }
            </p>
          </section>
        </div>
        
        <div className="mt-16 pt-12 border-t border-slate-100">
          <Link href="/" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105">
            {t.back}
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
