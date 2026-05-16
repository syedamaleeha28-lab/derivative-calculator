import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "@/components/LanguageLink";
import { dictionaries } from "@/lib/dictionaries";
import { normalizeLang } from "@/lib/seo";

type LegalPageKey = "aboutPage" | "contactPage" | "disclaimerPage" | "privacy" | "terms";

export default async function SimpleLegalPage({
  lang,
  pageKey,
}: {
  lang: string;
  pageKey: LegalPageKey;
}) {
  const currentLang = normalizeLang(lang);
  const t = dictionaries[currentLang][pageKey] as {
    title: string;
    subtitle: string;
    sections: { title: string; content: string }[];
    back: string;
    accept?: string;
  };
  const home = dictionaries[currentLang].breadcrumbs.home;
  const c = dictionaries[currentLang].common;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-400 uppercase tracking-widest mb-10">
          <Link href="/" className="hover:text-secondary transition-colors">
            {home}
          </Link>
          <span className="opacity-30">/</span>
          <span className="text-slate-900">{t.title}</span>
        </nav>
        <h1 className="heading-font text-[3rem] text-slate-900 mb-4">{t.title}</h1>
        <p className="text-lg text-slate-600 mb-10">{t.subtitle}</p>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          {t.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
          {pageKey === "privacy" && (
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.contactTitle}</h2>
              <p>{c.contactBody}</p>
            </section>
          )}
          {pageKey === "terms" && (
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.liabilityTitle}</h2>
              <p>{c.liabilityBody}</p>
            </section>
          )}
        </div>
        <div className="mt-16 pt-12 border-t border-slate-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
          >
            {t.accept ?? t.back}
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
