import { absoluteUrl } from "./seo";
import type { Locale } from "./locale";

/** Default SoftwareApplication description (homepage + calculator pages). */
export const DEFAULT_SOFTWARE_APPLICATION_DESCRIPTION =
  "Calculadora de derivadas online gratis con pasos detallados. Resuelve derivadas de funciones trigonométricas, parciales, implícitas y más.";

export const HOMEPAGE_SOFTWARE_APPLICATION_NAME = "Calculadora de Derivadas";

/** Strip marketing suffix from calculator h1 for schema name. */
export function deriveSoftwareApplicationName(h1: string): string {
  return h1.split(/\s+con\s+Pasos/i)[0]?.trim() || h1;
}

export type SoftwareApplicationSchemaInput = {
  name: string;
  url: string;
  description?: string;
  locale?: Locale | "es" | "en";
};

/** Standalone FAQPage-style JSON-LD object for SoftwareApplication rich results. */
export function buildSoftwareApplicationJsonLd(input: SoftwareApplicationSchemaInput) {
  const url = input.url.startsWith("http") ? input.url : absoluteUrl(input.url);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: input.description ?? DEFAULT_SOFTWARE_APPLICATION_DESCRIPTION,
    url,
    inLanguage: input.locale === "en" ? "en" : "es",
  };
}
