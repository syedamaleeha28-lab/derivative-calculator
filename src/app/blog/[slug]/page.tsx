import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/EducationalArticle";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog-posts";
import { getRelatedArticlesForPost } from "@/lib/blog-posts/related";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildPageMetadata({
    path: `/blog/${slug}`,
    title: post.title,
    description: post.description,
    keywords: post.tags.join(", "),
    ogType: "article",
    publishedTime: post.dateIso,
  });
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const Content = post.Content;

  return (
    <ArticleLayout
      title={post.title}
      description={post.description}
      date={post.date}
      readTime={post.readTime}
      author={post.author}
      category={post.category}
      tags={post.tags}
      content={<Content />}
      faqs={post.faqs}
      relatedPosts={getRelatedArticlesForPost(slug)}
      breadcrumbs={post.breadcrumbs}
      heroImageAlt={post.heroImageAlt}
      showArticleMeta
    />
  );
}
