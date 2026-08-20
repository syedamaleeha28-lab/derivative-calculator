import type { ReactNode } from "react";
import type { SpecializedCalculatorKind } from "@/lib/specialized-calculators/themes";

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
  author: {
    name: string;
    role: string;
    jobTitle?: string;
    worksFor?: { "@type": "CollegeOrUniversity" | "Organization"; name: string };
  };
  heroImageAlt: string;
  /** Optional hero image path under /public (e.g. /images/....svg). */
  image?: string;
  /** Optional LearningResource JSON-LD classification (opt-in per page). */
  learningResource?: {
    learningResourceType: string;
    educationalLevel: string;
    teaches: string;
  };
  faqs: readonly EsAuthorityFaq[];
  relatedPosts: readonly { title: string; href: string; description?: string }[];
  /** English equivalent path for hreflang (parent will wire locale.ts). */
  englishAlternate: string;
  /** When true and calculatorKind is set, embed a specialized calculator above the article body. */
  embedCalculator?: boolean;
  calculatorKind?: SpecializedCalculatorKind;
};

export type EsAuthorityEntry = EsAuthorityMeta & {
  breadcrumbs: readonly { label: string; href: string }[];
  Content: () => ReactNode;
};
