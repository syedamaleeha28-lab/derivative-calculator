export type WorkedExample = {
  title: string;
  problem: string;
  steps: string[];
  result: string;
};

export type FaqItem = { q: string; a: string };

export type RelatedCalculator = {
  label: string;
  href: string;
  description: string;
};

export type CalculatorPageConfig = {
  slug: string;
  path: string;
  h1: string;
  intro: string[];
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  defaultExamples: string[];
  tag?: string;
  defaultVariable?: string;
  examples: WorkedExample[];
  faqs: FaqItem[];
  relatedCalculators: RelatedCalculator[];
  internalLinks: { label: string; href: string }[];
  educationalSections: { h2: string; paragraphs: string[] }[];
  breadcrumbHome: { label: string; path: string };
  /** When false, page is educational-only with CTA to the main calculator (default false). */
  embedCalculator?: boolean;
};
