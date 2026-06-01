import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/EducationalArticle";
import {
  getAllEnArticleSlugs,
  getEnArticleBySlug,
} from "@/lib/en-articles";
import { EN_MAIN_CALCULATOR_HREF } from "@/lib/en-routes";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllEnArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getEnArticleBySlug(slug);
  if (!article) return {};

  return buildPageMetadata({
    path: `/en/${slug}`,
    title: article.title,
    description: article.description,
    keywords: article.tags.join(", "),
    ogType: "article",
    publishedTime: article.dateIso,
    ogLocale: "en_US",
    alternateLanguages: article.spanishAlternate
      ? {
          es: article.spanishAlternate,
          en: `/en/${slug}`,
          "x-default": article.spanishAlternate,
        }
      : undefined,
  });
}

export default async function EnArticlePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const article = getEnArticleBySlug(slug);
  if (!article) notFound();

  const Content = article.Content;
  const relatedPosts = article.relatedPosts.map((p) => ({
    ...p,
    slug: p.slug.startsWith("/") ? p.slug : `/en/${p.slug}`,
  }));

  return (
    <ArticleLayout
      locale="en"
      title={article.title}
      description={article.description}
      date={article.date}
      readTime={article.readTime}
      author={article.author}
      category={article.category}
      tags={article.tags}
      content={<Content />}
      faqs={article.faqs}
      relatedPosts={relatedPosts}
      breadcrumbs={article.breadcrumbs}
      heroImageAlt={article.heroImageAlt}
      showArticleMeta
      calculatorHref={EN_MAIN_CALCULATOR_HREF}
    />
  );
}
