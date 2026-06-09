import type { ReactNode } from "react";

export type EsAuthorityFaq = { question: string; answer: string };

export type EsAuthorityMeta = {
  route: string;
  title: string;
  description: string;
  date: string;
  dateIso: string;
  readTime: string;
  category: string;
  tags: readonly string[];
  author: { name: string; role: string };
  heroImageAlt: string;
  faqs: readonly EsAuthorityFaq[];
  relatedPosts: readonly { title: string; href: string; description?: string }[];
  /** English equivalent path for hreflang (parent will wire locale.ts). */
  englishAlternate: string;
};

export type EsAuthorityEntry = EsAuthorityMeta & {
  breadcrumbs: readonly { label: string; href: string }[];
  Content: () => ReactNode;
};
