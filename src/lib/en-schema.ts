import { SITE_NAME, SITE_URL, absoluteUrl } from "./seo";
import type { EnCalculatorPageConfig, EnFaqItem } from "./en-pages";

const SCHEMA_CONTEXT = "https://schema.org";

export function buildEnFaqSchema(faqs: EnFaqItem[], pageUrl: string) {
  if (faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "en",
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

export function buildEnBreadcrumbSchema(
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

export function buildEnCalculatorPageSchema(page: EnCalculatorPageConfig) {
  const pageUrl = absoluteUrl(page.path);

  const softwareApplication = {
    "@type": ["SoftwareApplication", "WebApplication"],
    "@id": `${pageUrl}#software`,
    name: page.h1,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: pageUrl,
    description: page.meta.description,
    inLanguage: "en",
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
    inLanguage: "en",
    learningResourceType: "Interactive Resource",
    educationalLevel: "Secondary school and undergraduate",
    teaches: "Differential calculus and derivatives",
    url: pageUrl,
  };

  const breadcrumb = buildEnBreadcrumbSchema(
    [
      { name: "Home", path: "/en" },
      { name: page.h1.split("—")[0].trim(), path: page.path },
    ],
    pageUrl
  );

  const faq = buildEnFaqSchema(page.faqs, pageUrl);

  const graph: Record<string, unknown>[] = [
    softwareApplication,
    learningResource,
    breadcrumb,
    ...(faq ? [faq] : []),
  ];

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": graph,
  };
}

export function buildEnHomeSchemaGraph(faqs: EnFaqItem[]) {
  const pageUrl = absoluteUrl("/en");

  const website = {
    "@type": "WebSite",
    "@id": `${pageUrl}#website`,
    url: pageUrl,
    name: `${SITE_NAME} (English)`,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const breadcrumb = buildEnBreadcrumbSchema([{ name: "Home", path: "/en" }], pageUrl);
  const faq = buildEnFaqSchema(faqs, pageUrl);

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [website, breadcrumb, ...(faq ? [faq] : [])],
  };
}
