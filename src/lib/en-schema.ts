import { dictEn } from "./dictionaries-en";
import { EN_HOME_FAQS } from "./en-pages";
import {
  SCHEMA_CONTEXT,
  buildOrganizationNode,
  buildSoftwareApplicationNode,
  buildWebPageNode,
  organizationRef,
  schemaLanguage,
} from "./calculator-pages/schema-shared";
import { absoluteUrl, SITE_NAME, SITE_URL } from "./seo";
import type { EnFaqItem } from "./en-pages";

export function buildEnFaqSchema(faqs: EnFaqItem[], pageUrl: string) {
  if (faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: schemaLanguage("en"),
    isPartOf: { "@id": `${pageUrl}#webpage` },
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

export function buildEnHomeSchemaGraph(faqs: EnFaqItem[]) {
  const meta = dictEn.metadata.home;
  const pageUrl = absoluteUrl("/en");
  const websiteId = `${pageUrl}#website`;
  const softwareId = `${pageUrl}#software`;
  const webPageId = `${pageUrl}#webpage`;

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: pageUrl,
    name: `${SITE_NAME} (English)`,
    description: meta.description,
    inLanguage: schemaLanguage("en"),
    publisher: organizationRef(),
  };

  const softwareApplication = buildSoftwareApplicationNode({
    id: softwareId,
    name: meta.title,
    description: meta.description,
    url: pageUrl,
    locale: "en",
    websiteId,
  });

  const webPage = buildWebPageNode({
    id: webPageId,
    url: pageUrl,
    name: meta.title,
    description: meta.description,
    locale: "en",
    websiteId,
    mainEntityId: softwareId,
    speakableSelectors: ["#hero-heading", "#faq"],
  });

  const learningResource = {
    "@type": "LearningResource",
    "@id": `${pageUrl}#learning`,
    name: meta.title,
    description: meta.description,
    inLanguage: schemaLanguage("en"),
    learningResourceType: "Interactive Resource",
    educationalLevel: "Secondary school and undergraduate",
    teaches: "Differential calculus and derivatives",
    url: pageUrl,
    isPartOf: { "@id": webPageId },
    provider: organizationRef(),
  };

  const breadcrumb = buildEnBreadcrumbSchema([{ name: "Home", path: "/en" }], pageUrl);
  const faq = buildEnFaqSchema(faqs, pageUrl);

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      buildOrganizationNode(),
      website,
      webPage,
      softwareApplication,
      learningResource,
      breadcrumb,
      ...(faq ? [faq] : []),
    ],
  };
}
