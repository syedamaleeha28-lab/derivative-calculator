import { SITE_NAME, SITE_URL, absoluteUrl } from "../seo";
import type { CalculatorPageConfig, FaqItem } from "./types";
import type { Locale } from "../locale";

const SCHEMA_CONTEXT = "https://schema.org";

export function buildFaqSchema(faqs: FaqItem[], pageUrl: string, locale: Locale) {
  if (faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: locale,
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

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
  pageUrl: string
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildCalculatorPageSchema(page: CalculatorPageConfig, locale: Locale) {
  const pageUrl = absoluteUrl(page.path);
  const breadcrumbLabel = page.h1.split("—")[0].split("|")[0].trim();

  const softwareApplication = {
    "@type": ["SoftwareApplication", "WebApplication"],
    "@id": `${pageUrl}#software`,
    name: page.h1,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: pageUrl,
    description: page.meta.description,
    inLanguage: locale,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const learningResource = {
    "@type": "LearningResource",
    "@id": `${pageUrl}#learning`,
    name: page.h1,
    description: page.meta.description,
    inLanguage: locale,
    learningResourceType: "Interactive Resource",
    educationalLevel: "Secondary school and undergraduate",
    teaches:
      locale === "es"
        ? "Cálculo diferencial y derivadas"
        : "Differential calculus and derivatives",
    url: pageUrl,
  };

  const breadcrumb = buildBreadcrumbSchema(
    [
      { name: page.breadcrumbHome.label, path: page.breadcrumbHome.path },
      {
        name: locale === "es" ? "Calculadoras" : "Calculators",
        path: locale === "es" ? "/#herramientas-calculo" : "/en#calculators",
      },
      { name: breadcrumbLabel, path: page.path },
    ],
    pageUrl
  );

  const faq = buildFaqSchema(page.faqs, pageUrl, locale);

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [softwareApplication, learningResource, breadcrumb, ...(faq ? [faq] : [])],
  };
}
