import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/EducationalArticle";
import { metadataFromEntry } from "@/lib/seo";
import { ES_MAIN_CALCULATOR_HREF } from "@/lib/routes";
import { getEsAuthorityByRoute } from "./index";
import type { EsAuthorityEntry } from "./types";

export function buildEsAuthorityMetadata(entry: EsAuthorityEntry): Metadata {
  return metadataFromEntry(
    entry.route,
    {
      title: entry.title,
      description: entry.description,
      keywords: entry.tags.join(", "),
    },
    {
      ogType: "article",
      publishedTime: entry.dateIso,
      absoluteTitle: true,
      alternateLanguages: {
        es: entry.route,
        en: entry.englishAlternate,
        "x-default": entry.route,
      },
    }
  );
}

export function EsAuthorityPage({ entry }: { entry: EsAuthorityEntry }) {
  const Content = entry.Content;

  return (
    <ArticleLayout
      title={entry.title}
      description={entry.description}
      date={entry.date}
      readTime={entry.readTime}
      author={entry.author}
      category={entry.category}
      tags={[...entry.tags]}
      content={<Content />}
      faqs={[...entry.faqs]}
      relatedPosts={entry.relatedPosts.map((p) => ({
        title: p.title,
        slug: p.href,
        description: p.description,
      }))}
      breadcrumbs={[...entry.breadcrumbs]}
      heroImageAlt={entry.heroImageAlt}
      showArticleMeta
      calculatorHref={ES_MAIN_CALCULATOR_HREF}
    />
  );
}

export function renderEsAuthorityPage(route: string) {
  const entry = getEsAuthorityByRoute(route);
  if (!entry) notFound();
  return <EsAuthorityPage entry={entry} />;
}

export function generateEsAuthorityMetadata(route: string): Metadata {
  const entry = getEsAuthorityByRoute(route);
  if (!entry) return {};
  return buildEsAuthorityMetadata(entry);
}
