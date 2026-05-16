import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LanguageLink from "@/components/LanguageLink";
import { dictionaries } from "@/lib/dictionaries";
import type { Lang } from "@/lib/dictionary-types";
import {
  FOOTER_LEGAL_PAGES,
  getLegalPath,
  type LegalPageId,
} from "@/lib/legal-routes";
import { getLegalPageContent } from "@/lib/legal-pages";
import { absoluteUrl, normalizeLang, SITE_NAME, SITE_URL } from "@/lib/seo";

type LegalTrustPageProps = {
  lang: string;
  pageId: LegalPageId;
};

export default function LegalTrustPage({ lang, pageId }: LegalTrustPageProps) {
  const currentLang = normalizeLang(lang) as Lang;
  const content = getLegalPageContent(currentLang, pageId);
  const home = dictionaries[currentLang].breadcrumbs.home;
  const footer = dictionaries[currentLang].footer;
  const path = getLegalPath(pageId, currentLang);
  const canonical = absoluteUrl(currentLang, path);

  const schemaType =
    pageId === "about"
      ? "AboutPage"
      : pageId === "contact"
        ? "ContactPage"
        : "WebPage";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": schemaType,
      name: content.title,
      description: content.subtitle,
      url: canonical,
      inLanguage: currentLang === "es" ? "es" : currentLang === "pt" ? "pt-BR" : "en",
      dateModified: content.lastUpdated,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  ];

  const footerLabelKey = {
    privacy: "privacy",
    terms: "terms",
    disclaimer: "disclaimer",
    about: "about",
    contact: "contact",
  } as const;

  const relatedLinks = FOOTER_LEGAL_PAGES.filter((id) => id !== pageId).map((id) => ({
    id,
    href: getLegalPath(id, currentLang),
    label: footer[footerLabelKey[id]],
  }));

  const ctaHref = pageId === "about" ? "/#calculator" : "/";

  return (
    <main className="flex min-h-screen flex-col bg-slate-50/40">
      <JsonLd data={jsonLd} />
      <Navbar />
      <article className="flex-1 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wider text-slate-400 mb-8"
          >
            <LanguageLink href="/" className="hover:text-secondary transition-colors">
              {home}
            </LanguageLink>
            <span aria-hidden className="opacity-40">
              /
            </span>
            <span className="text-slate-700 normal-case tracking-normal text-sm font-medium">
              {content.title}
            </span>
          </nav>

          <header className="mb-10 rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-sm md:px-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
              {footer.legal}
            </p>
            <h1 className="heading-font text-3xl sm:text-4xl text-slate-900 leading-tight mb-3">
              {content.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{content.subtitle}</p>
            <p className="mt-4 text-xs text-slate-400">
              {currentLang === "en"
                ? "Last updated"
                : currentLang === "pt"
                  ? "Última atualização"
                  : "Última actualización"}
              : {content.lastUpdated}
            </p>
          </header>

          <div className="rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-sm md:px-10 space-y-10">
            {content.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
                <div className="space-y-3 text-slate-600 leading-relaxed text-[0.95rem]">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="mt-10 rounded-2xl border border-slate-200/80 bg-white px-6 py-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              {content.relatedTitle}
            </h2>
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
              {relatedLinks.map((link) => (
                <li key={link.id}>
                  <LanguageLink
                    href={link.href}
                    className="text-sm font-medium text-secondary hover:underline"
                  >
                    {link.label}
                  </LanguageLink>
                </li>
              ))}
            </ul>
          </aside>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <LanguageLink
              href={ctaHref}
              className="inline-flex justify-center items-center bg-secondary text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-md hover:opacity-95 transition-opacity"
            >
              {content.ctaLabel}
            </LanguageLink>
            <LanguageLink
              href="/how-it-works"
              className="inline-flex justify-center items-center border border-slate-200 bg-white text-slate-700 px-8 py-3 rounded-xl font-semibold text-sm hover:border-secondary/40 transition-colors"
            >
              {currentLang === "en"
                ? "How it works"
                : currentLang === "pt"
                  ? "Como funciona"
                  : "Cómo funciona"}
            </LanguageLink>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
