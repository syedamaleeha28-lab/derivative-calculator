import { SITE_NAME, SITE_URL, absoluteUrl } from "../seo";
import { SOCIAL_PROFILE_URLS } from "../social-links";
import type { Locale } from "../locale";

export const SCHEMA_CONTEXT = "https://schema.org";
export const ORGANIZATION_ID = `${SITE_URL}/#organization` as const;
export const DEFAULT_SCHEMA_IMAGE = absoluteUrl("/images/interfaz-calculadora-matematica.webp");

export function schemaLanguage(locale: Locale | "es" | "en"): string {
  return locale === "es" ? "es-ES" : "en-US";
}

export function organizationRef() {
  return { "@id": ORGANIZATION_ID };
}

export function buildOrganizationNode() {
  return {
    "@type": "Organization" as const,
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject" as const,
      url: DEFAULT_SCHEMA_IMAGE,
    },
    sameAs: [...SOCIAL_PROFILE_URLS],
  };
}

export function buildOfferNode() {
  return {
    "@type": "Offer" as const,
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  };
}

export function buildSoftwareApplicationNode(opts: {
  id: string;
  name: string;
  description: string;
  url: string;
  locale: Locale | "es" | "en";
  websiteId?: string;
}) {
  return {
    "@type": ["SoftwareApplication", "WebApplication"] as const,
    "@id": opts.id,
    name: opts.name,
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "MathematicsApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    url: opts.url,
    description: opts.description,
    inLanguage: schemaLanguage(opts.locale),
    image: DEFAULT_SCHEMA_IMAGE,
    offers: buildOfferNode(),
    provider: organizationRef(),
    publisher: organizationRef(),
    ...(opts.websiteId ? { isPartOf: { "@id": opts.websiteId } } : {}),
  };
}

export function buildWebPageNode(opts: {
  id: string;
  url: string;
  name: string;
  description: string;
  locale: Locale | "es" | "en";
  websiteId?: string;
  mainEntityId?: string;
  speakableSelectors?: string[];
}) {
  return {
    "@type": "WebPage" as const,
    "@id": opts.id,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: schemaLanguage(opts.locale),
    ...(opts.websiteId ? { isPartOf: { "@id": opts.websiteId } } : {}),
    ...(opts.mainEntityId ? { mainEntity: { "@id": opts.mainEntityId } } : {}),
    ...(opts.speakableSelectors?.length
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: opts.speakableSelectors,
          },
        }
      : {}),
  };
}
