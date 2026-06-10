import { dict } from "@/lib/dictionaries";
import {
  ES_BLOG_NAV_KEY,
  ES_CALCULATORS_NAV,
  ES_EXAMPLES_NAV_KEY,
  ES_PRIMARY_NAV_KEYS,
} from "@/lib/es-navigation";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PINTEREST_URL,
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
    "@type": ["SoftwareApplication", "WebApplication"],
    "@id": `${SITE_URL}/#software`,
    name: "Calculadora de Derivadas",
    alternateName: SITE_NAME,
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "MathematicsApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    url: canonical,
    description: meta.description,
    inLanguage: "es",
    image: absoluteUrl("/images/interfaz-calculadora-matematica.webp"),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    featureList: [
      "Calculadora de derivadas con pasos",
      "Calculadora de derivadas online gratis",
      "Derivadas paso a paso",
      "Derivadas parciales",
      "Derivadas implícitas",
      "Derivadas trigonométricas",
      "Reglas de derivación",
      "Resolver derivadas online",
      "Calculadora de cálculo diferencial",
      "Ejemplos de derivadas resueltas",
    ],
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  const learningResource = {
    "@type": "LearningResource",
    "@id": `${SITE_URL}/#learning-resource`,
    name: "Guía y calculadora de derivadas en español",
    description: meta.description,
    inLanguage: "es",
    learningResourceType: "Interactive Resource",
    educationalLevel: "Secondary school and undergraduate",
    teaches: "Cálculo diferencial y derivadas",
    url: canonical,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    provider: { "@id": `${SITE_URL}/#organization` },
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
      ...[...ES_PRIMARY_NAV_KEYS, ES_EXAMPLES_NAV_KEY, ES_BLOG_NAV_KEY].map((link) => ({
        name: dict.nav[link.nameKey],
        href: link.href,
      })),
      ...ES_CALCULATORS_NAV.filter((link) => link.href !== "/"),
    ].map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.name,
      url: absoluteUrl(link.href),
    })),
  };

  const faqPage = buildFaqPageSchema(faqs);

  const graph: Record<string, unknown>[] = [
    organization,
    website,
    softwareApplication,
    learningResource,
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
  pinterest: PINTEREST_URL,
} as const;
