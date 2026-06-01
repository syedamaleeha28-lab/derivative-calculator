import type { ReactNode } from "react";

export type EnArticleFaq = { question: string; answer: string };

export type EnArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateIso: string;
  readTime: string;
  category: string;
  tags: readonly string[];
  author: { name: string; role: string };
  heroImageAlt: string;
  faqs: readonly EnArticleFaq[];
  relatedPosts: readonly { title: string; slug: string; description?: string }[];
  /** Spanish equivalent path for hreflang (optional). */
  spanishAlternate?: string;
};

export type EnArticleEntry = EnArticleMeta & {
  breadcrumbs: readonly { label: string; href: string }[];
  Content: () => ReactNode;
};
