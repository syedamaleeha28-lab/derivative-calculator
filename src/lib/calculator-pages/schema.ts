import { absoluteUrl } from "../seo";
import { resolveCalculatorKind } from "../specialized-calculators/kinds";
import type { SpecializedCalculatorKind } from "../specialized-calculators/themes";
import type { CalculatorPageConfig, FaqItem } from "./types";
import type { Locale } from "../locale";
import {
  SCHEMA_CONTEXT,
  buildOrganizationNode,
  buildSoftwareApplicationNode,
  buildWebPageNode,
  organizationRef,
  schemaLanguage,
} from "./schema-shared";

const TEACHES_BY_KIND: Record<SpecializedCalculatorKind, { es: string; en: string }> = {
  "product-rule": {
    es: "Regla del producto para derivadas",
    en: "Product rule differentiation",
  },
  "quotient-rule": {
    es: "Regla del cociente para derivadas",
    en: "Quotient rule differentiation",
  },
  "critical-points": {
    es: "Análisis de puntos críticos y extremos",
    en: "Critical points and extrema analysis",
  },
  "tangent-line": {
    es: "Recta tangente y pendiente f′(a)",
    en: "Tangent lines and slope f′(a)",
  },
  "partial-derivatives": {
    es: "Derivadas parciales multivariable",
    en: "Multivariable partial derivatives",
  },
  "higher-order": {
    es: "Derivadas de orden superior",
    en: "Higher-order derivatives",
  },
  "second-derivative": {
    es: "Segunda derivada, concavidad e inflexión",
    en: "Second derivatives, concavity, and inflection",
  },
  "chain-rule": {
    es: "Regla de la cadena y funciones compuestas",
    en: "Chain rule and composite functions",
  },
  "implicit-differentiation": {
    es: "Derivación implícita y dy/dx",
    en: "Implicit differentiation and dy/dx",
  },
};

function teachesForPage(page: CalculatorPageConfig, locale: Locale): string {
  const kind = resolveCalculatorKind(page);
  if (kind) return TEACHES_BY_KIND[kind][locale];
  return locale === "es"
    ? "Cálculo diferencial y derivadas"
    : "Differential calculus and derivatives";
}

export function buildFaqSchema(faqs: FaqItem[], pageUrl: string, locale: Locale) {
  if (faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: schemaLanguage(locale),
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
  const websiteId = locale === "es" ? `${absoluteUrl("/")}#website` : `${absoluteUrl("/en")}#website`;
  const breadcrumbLabel = page.h1.split("—")[0].split("|")[0].trim();
  const embedCalculator = page.embedCalculator ?? locale === "es";
  const title = page.meta.title;
  const description = page.meta.description;

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

  const graph: Record<string, unknown>[] = [buildOrganizationNode(), breadcrumb];

  if (embedCalculator) {
    const softwareId = `${pageUrl}#software`;
    const webPageId = `${pageUrl}#webpage`;

    graph.push(
      buildWebPageNode({
        id: webPageId,
        url: pageUrl,
        name: title,
        description,
        locale,
        websiteId,
        mainEntityId: softwareId,
        speakableSelectors: ["#hero-heading", "#faq"],
      }),
      buildSoftwareApplicationNode({
        id: softwareId,
        name: title,
        description,
        url: pageUrl,
        locale,
        websiteId,
      }),
      {
        "@type": "LearningResource",
        "@id": `${pageUrl}#learning`,
        name: title,
        description,
        inLanguage: schemaLanguage(locale),
        learningResourceType: "Interactive Resource",
        educationalLevel: "Secondary school and undergraduate",
        teaches: teachesForPage(page, locale),
        url: pageUrl,
        isPartOf: { "@id": webPageId },
        provider: organizationRef(),
      }
    );
  } else {
    graph.push(
      buildWebPageNode({
        id: `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        locale,
        websiteId,
        speakableSelectors: ["#hero-heading", "#faq"],
      })
    );
  }

  if (faq) graph.push(faq);

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": graph,
  };
}
