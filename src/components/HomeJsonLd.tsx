import JsonLd from "./JsonLd";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";
import { dict } from "@/lib/dictionaries";
import { SOCIAL_PROFILE_URLS } from "@/lib/social-links";

export default function HomeJsonLd() {
  const faqs = dict.faqsPage?.list ?? [];
  const meta = dict.metadata.home;

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: meta.description,
    inLanguage: "es",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
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
    sameAs: [...SOCIAL_PROFILE_URLS],
  };

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: meta.title,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description: meta.description,
    inLanguage: "es",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    image: absoluteUrl("/images/interfaz-calculadora-matematica.webp"),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
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

  const schemas = [
    website,
    organization,
    softwareApplication,
    ...(faqPage ? [faqPage] : []),
  ];
  return <JsonLd data={schemas} />;
}
