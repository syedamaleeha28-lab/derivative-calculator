import type { EnArticleEntry } from "./types";
import { EN_COMMON_FUNCTIONS_HUB_SLUG } from "../common-derivative-functions/routes";
import { CommonFunctionsHubContentEn } from "../common-derivative-functions/content-en";
import {
  COMMON_FUNCTION_PAGE_DEFS,
  COMMON_FUNCTION_AUTHOR_EN,
} from "../common-derivative-functions/definitions";
import { toEnArticleFields } from "../common-derivative-functions/render-es-page";
import { enHubBreadcrumbs } from "../common-derivative-functions/helpers";

const NEW_EN_SLUGS = new Set([
  "derivative-of-x",
  "derivative-of-x-cubed",
  "derivative-of-square-root-x",
  "derivative-of-e-to-the-x",
  "derivative-of-log-x",
]);

/** EN article entries for common-function pages not already in the main registry. */
export function buildNewCommonFunctionEnEntries(): EnArticleEntry[] {
  return COMMON_FUNCTION_PAGE_DEFS.filter((d) => NEW_EN_SLUGS.has(d.enSlug)).map((def) => {
    const fields = toEnArticleFields(def);
    return {
      ...fields,
      tags: [...fields.tags],
      faqs: [...fields.faqs],
      breadcrumbs: [...fields.breadcrumbs],
      relatedPosts: fields.relatedPosts.map((p) => ({ ...p })),
    };
  });
}

export const COMMON_FUNCTIONS_HUB_EN_ENTRY: EnArticleEntry = {
  slug: EN_COMMON_FUNCTIONS_HUB_SLUG,
  title: "Common Derivative Functions: Complete Table and Step-by-Step Guides",
  description:
    "Central hub for derivatives of x, x², √x, e^x, ln x, sin x, cos x, tan x, and more. Full reference table plus links to every function guide.",
  date: "June 18, 2026",
  dateIso: "2026-06-18",
  readTime: "20 min",
  category: "Reference",
  tags: [
    "common derivative functions",
    "derivative table",
    "derivative formulas",
    "calculus reference",
  ],
  author: COMMON_FUNCTION_AUTHOR_EN,
  heroImageAlt: "Complete derivative table for common functions",
  spanishAlternate: "/derivadas-de-funciones-comunes",
  faqs: [
    {
      question: "What are the most common derivatives in calculus?",
      answer: "x, x², √x, e^x, ln x, sin x, cos x, and tan x appear in almost every course.",
    },
    {
      question: "Where can I find a full derivative table?",
      answer: "This hub includes algebraic, trigonometric, logarithmic, exponential, and inverse trig tables.",
    },
    {
      question: "How do I practice after reading the table?",
      answer: "Open any function guide for a worked example, then verify with our derivative calculator.",
    },
    {
      question: "Does the table include inverse trigonometric functions?",
      answer: "Yes: arcsin, arccos, arctan, arccot, arcsec, and arccsc with standard formulas.",
    },
  ],
  relatedPosts: [
    { title: "Derivative of x", slug: "derivative-of-x" },
    { title: "Derivative of sin(x)", slug: "derivative-of-sin-x" },
    { title: "Derivative rules", slug: "derivative-rules" },
  ],
  breadcrumbs: [...enHubBreadcrumbs()],
  Content: CommonFunctionsHubContentEn,
};
