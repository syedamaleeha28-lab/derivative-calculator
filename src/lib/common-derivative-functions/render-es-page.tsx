import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/EducationalArticle";
import { metadataFromEntry } from "@/lib/seo";
import { ES_MAIN_CALCULATOR_HREF } from "@/lib/routes";
import { EN_MAIN_CALCULATOR_HREF } from "@/lib/en-routes";
import {
  COMMON_FUNCTION_AUTHOR_EN,
  COMMON_FUNCTION_AUTHOR_ES,
  COMMON_FUNCTION_PAGE_DEFS,
  getCommonFunctionDefByEsRoute,
} from "./definitions";
import { createEsFunctionContent } from "./content-es";
import { createEnFunctionContent } from "./content-en";
import { esCommonFunctionBreadcrumbs, enCommonFunctionBreadcrumbs } from "./helpers";

const PAGE_META = {
  date: "18 de junio de 2026",
  dateIso: "2026-06-18",
  readTime: "8 min",
} as const;

export function buildEsCommonFunctionMetadata(route: string): Metadata {
  const def = getCommonFunctionDefByEsRoute(route);
  if (!def) return {};
  return metadataFromEntry(
    def.esRoute,
    {
      title: def.es.title,
      description: def.es.description,
      keywords: def.es.tags.join(", "),
    },
    {
      ogType: "article",
      publishedTime: PAGE_META.dateIso,
      absoluteTitle: true,
      alternateLanguages: {
        es: def.esRoute,
        en: `/en/${def.enSlug}`,
        "x-default": def.esRoute,
      },
    }
  );
}

export function renderEsCommonFunctionPage(route: string) {
  const def = getCommonFunctionDefByEsRoute(route);
  if (!def) notFound();
  const Content = createEsFunctionContent(def);

  return (
    <ArticleLayout
      title={def.es.title}
      description={def.es.description}
      date={PAGE_META.date}
      readTime={PAGE_META.readTime}
      author={COMMON_FUNCTION_AUTHOR_ES}
      category={def.es.category}
      tags={[...def.es.tags]}
      content={<Content />}
      faqs={[...def.es.faqs]}
      relatedPosts={def.relatedIds
        .map((id) => COMMON_FUNCTION_PAGE_DEFS.find((d) => d.id === id))
        .filter(Boolean)
        .map((d) => ({
          title: d!.es.breadcrumbLabel,
          slug: d!.esRoute,
          description: d!.es.description,
        }))}
      breadcrumbs={[...esCommonFunctionBreadcrumbs(def.esRoute, def.es.breadcrumbLabel)]}
      heroImageAlt={def.es.heroImageAlt}
      showArticleMeta
      calculatorHref={ES_MAIN_CALCULATOR_HREF}
    />
  );
}

/** Build EN article entry fields from a common-function definition. */
export function toEnArticleFields(def: (typeof COMMON_FUNCTION_PAGE_DEFS)[number]) {
  const Content = createEnFunctionContent(def);
  return {
    slug: def.enSlug,
    title: def.en.title,
    description: def.en.description,
    date: "June 18, 2026",
    dateIso: PAGE_META.dateIso,
    readTime: PAGE_META.readTime,
    category: def.en.category,
    tags: [...def.en.tags],
    author: COMMON_FUNCTION_AUTHOR_EN,
    heroImageAlt: def.en.heroImageAlt,
    spanishAlternate: def.esRoute,
    faqs: [...def.en.faqs],
    relatedPosts: def.relatedIds
      .map((id) => COMMON_FUNCTION_PAGE_DEFS.find((d) => d.id === id))
      .filter(Boolean)
      .map((d) => ({
        title: d!.en.breadcrumbLabel,
        slug: d!.enSlug,
      })),
    breadcrumbLabel: def.en.breadcrumbLabel,
    breadcrumbs: enCommonFunctionBreadcrumbs(def.enSlug, def.en.breadcrumbLabel),
    Content,
  };
}

export function getEnCommonFunctionSlugs(): string[] {
  return COMMON_FUNCTION_PAGE_DEFS.map((d) => d.enSlug);
}

export { PAGE_META };
