import type { ReactNode } from "react";

export type CommonFunctionFaq = { question: string; answer: string };

export type CommonFunctionLocaleContent = {
  title: string;
  description: string;
  breadcrumbLabel: string;
  category: string;
  tags: readonly string[];
  heroImageAlt: string;
  intro: string;
  formulaTitle: string;
  formulaLatex: string;
  formulaExplanation: string;
  exampleTitle: string;
  exampleSteps: readonly string[];
  exampleLatex?: string;
  extraSectionTitle?: string;
  extraSectionBody?: string;
  faqs: readonly CommonFunctionFaq[];
};

export type CommonFunctionPageDef = {
  id: string;
  esRoute: string;
  enSlug: string;
  es: CommonFunctionLocaleContent;
  en: CommonFunctionLocaleContent;
  /** Related page ids in same cluster */
  relatedIds: readonly string[];
};

export type CommonFunctionPageEntry = CommonFunctionPageDef & {
  date: string;
  dateIso: string;
  readTime: string;
  author: { name: string; role: string };
  esBreadcrumbs: readonly { label: string; href: string }[];
  enBreadcrumbs: readonly { label: string; href: string }[];
  EsContent: () => ReactNode;
  EnContent: () => ReactNode;
};
