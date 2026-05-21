import type { ReactNode } from "react";

export type BlogFaq = { question: string; answer: string };

export type BlogPostMeta = {
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
  faqs: readonly BlogFaq[];
  relatedPosts: readonly { title: string; slug: string }[];
};

export type BlogPostEntry = BlogPostMeta & {
  breadcrumbs: readonly { label: string; href: string }[];
  Content: () => ReactNode;
};
