import {
  DEFAULT_SCHEMA_IMAGE,
  ORGANIZATION_ID,
  SCHEMA_CONTEXT,
} from "./calculator-pages/schema-shared";
import { absoluteUrl, SITE_URL } from "./seo";

export type BlogPostingSchemaInput = {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image?: string;
  imageCaption?: string;
  inLanguage?: string;
};

/** BlogPosting JSON-LD for individual blog articles (Google rich results). */
export function buildBlogPostingJsonLd(input: BlogPostingSchemaInput) {
  const url = absoluteUrl(input.path);
  const imageUrl = input.image ?? DEFAULT_SCHEMA_IMAGE;

  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    headline: input.headline,
    description: input.description,
    url,
    inLanguage: input.inLanguage ?? "es-ES",
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
      caption: input.imageCaption ?? input.headline,
    },
    author: {
      "@type": "Person",
      name: input.authorName,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Calculadora Derivadas",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/derivio-calculator-logo.webp"),
        width: 512,
        height: 512,
      },
    },
  };
}

const REQUIRED_BLOG_POSTING_FIELDS = [
  "@type",
  "headline",
  "description",
  "datePublished",
  "author",
  "publisher",
  "url",
] as const;

/** Lightweight validator for BlogPosting JSON-LD objects. */
export function validateBlogPostingJsonLd(
  data: Record<string, unknown>
): string[] {
  const errors: string[] = [];

  if (data["@type"] !== "BlogPosting") {
    errors.push('expected @type "BlogPosting"');
  }

  for (const field of REQUIRED_BLOG_POSTING_FIELDS) {
    if (data[field] == null || data[field] === "") {
      errors.push(`missing ${field}`);
    }
  }

  return errors;
}
