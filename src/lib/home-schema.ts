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
  X_URL,
} from "@/lib/social-links";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";
import {
  SCHEMA_CONTEXT,
  buildOrganizationNode,
  buildSoftwareApplicationNode,
  buildWebPageNode,
  organizationRef,
  schemaLanguage,
} from "@/lib/calculator-pages/schema-shared";

export type FaqItem = { q: string; a: string };

/** Build FAQPage schema from homepage FAQ dictionary (single source of truth). */
export function buildFaqPageSchema(faqs: FaqItem[]) {
  if (faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    inLanguage: schemaLanguage("es"),
    isPartOf: { "@id": `${SITE_URL}/#webpage` },
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
  const websiteId = `${canonical}#website`;
  const softwareId = `${canonical}#software`;
  const webPageId = `${canonical}#webpage`;

  const organization = buildOrganizationNode();

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: SITE_URL,
    name: SITE_NAME,
    description: meta.description,
    inLanguage: schemaLanguage("es"),
    publisher: organizationRef(),
  };

  const webPage = buildWebPageNode({
    id: webPageId,
    url: canonical,
    name: meta.title,
    description: meta.description,
    locale: "es",
    websiteId,
    mainEntityId: softwareId,
    speakableSelectors: ["#hero-heading", "#faq"],
  });

  const softwareApplication = buildSoftwareApplicationNode({
    id: softwareId,
    name: meta.title,
    description: meta.description,
    url: canonical,
    locale: "es",
    websiteId,
  });

  const learningResource = {
    "@type": "LearningResource",
    "@id": `${SITE_URL}/#learning-resource`,
    name: "Guía y calculadora de derivadas en español",
    description: meta.description,
    inLanguage: schemaLanguage("es"),
    learningResourceType: "Interactive Resource",
    educationalLevel: "Secondary school and undergraduate",
    teaches: "Cálculo diferencial y derivadas",
    url: canonical,
    isPartOf: { "@id": webPageId },
    provider: organizationRef(),
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
    webPage,
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
