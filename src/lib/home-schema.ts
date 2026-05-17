import { dict } from "@/lib/dictionaries";
import { NAV_LINKS } from "@/lib/routes";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SOCIAL_PROFILE_URLS,
  X_URL,
} from "@/lib/social-links";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

const SCHEMA_CONTEXT = "https://schema.org";

export type FaqItem = { q: string; a: string };

/** Build FAQPage schema from homepage FAQ dictionary (single source of truth). */
export function buildFaqPageSchema(faqs: FaqItem[]) {
  if (faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    inLanguage: "es",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/** Consolidated JSON-LD @graph for the homepage (Rich Results–friendly). */
export function buildHomePageSchemaGraph() {
  const meta = dict.metadata.home;
  const faqs = dict.faqsPage.list;
  const canonical = `${SITE_URL}/`;

  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/interfaz-calculadora-matematica.webp"),
    },
    sameAs: [...SOCIAL_PROFILE_URLS],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Spanish"],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: meta.description,
    inLanguage: "es",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const softwareApplication = {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: "Calculadora de Derivadas",
    alternateName: SITE_NAME,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: canonical,
    description: meta.description,
    inLanguage: "es",
    image: absoluteUrl("/images/interfaz-calculadora-matematica.webp"),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Calculadora de derivadas",
      "Derivadas online",
      "Derivadas paso a paso",
      "Derivadas parciales",
      "Reglas de derivación",
      "Cálculo diferencial",
      "Derivadas matemáticas",
      "Derivada de sin x",
      "Derivada de ln x",
      "Derivadas trigonométricas",
      "Derivadas resueltas",
      "Resolver derivadas online",
      "Calculadora matemática",
    ],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: canonical,
      },
    ],
  };

  const mainNavigation = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#navigation`,
    name: "Navegación principal",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", url: SITE_URL },
      ...NAV_LINKS.map((link, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: dict.nav[link.nameKey],
        url: absoluteUrl(link.href),
      })),
    ],
  };

  const faqPage = buildFaqPageSchema(faqs);

  const graph: Record<string, unknown>[] = [
    organization,
    website,
    softwareApplication,
    breadcrumbList,
    mainNavigation,
    ...(faqPage ? [faqPage] : []),
  ];

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": graph,
  };
}

/** Social URLs exposed for metadata / verification. */
export const ORGANIZATION_SOCIAL = {
  facebook: FACEBOOK_URL,
  instagram: INSTAGRAM_URL,
  x: X_URL,
} as const;
