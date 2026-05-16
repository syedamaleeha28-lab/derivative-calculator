import JsonLd from "./JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import type { Lang } from "@/lib/dictionary-types";
import { dictionaries } from "@/lib/dictionaries";

export default function HomeJsonLd({ lang }: { lang: Lang }) {
  const dict = dictionaries[lang];
  const faqs = dict.faqsPage?.list ?? [];

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: dict.metadata.home.description,
    inLanguage: lang === "es" ? "es" : lang === "pt" ? "pt-BR" : "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}${lang === "es" ? "" : `/${lang}`}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/interfaz-calculadora-matematica.webp`,
    sameAs: ["https://www.facebook.com/profile.php?id=61590109041520"],
  };

  const faqPage =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item: { q: string; a: string }) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  const schemas = [website, organization, ...(faqPage ? [faqPage] : [])];
  return <JsonLd data={schemas} />;
}
