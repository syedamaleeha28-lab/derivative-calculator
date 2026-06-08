import { CHROME_EXTENSION_URL } from "./chrome-extension-url";
import { ES_CALCULATOR_ROUTES } from "./es-routes";
import { ROUTES } from "./routes";
import { absoluteUrl } from "./seo";

/** Public English landing page path. */
export const MATH_FORMULA_HELPER_EXTENSION_PATH = "/math-formula-helper-extension" as const;

/** @deprecated Use CHROME_EXTENSION_URL from ./chrome-extension-url */
export const MATH_FORMULA_HELPER_CHROME_STORE_URL = CHROME_EXTENSION_URL;

export const MATH_FORMULA_HELPER_METADATA = {
  title: "Math Formula Helper Chrome Extension – Free Formula & Calculus Assistant",
  description:
    "Math Formula Helper is a free Chrome extension for students, engineers, and math learners. Copy symbols, save formulas, convert LaTeX, and access derivative calculation resources.",
  keywords:
    "math formula helper, chrome math extension, derivative calculator extension, calculus helper extension, formula organizer, latex converter extension, math symbols extension",
} as const;

export const MATH_FORMULA_HELPER_FEATURES = [
  {
    title: "Copy Mathematical Symbols",
    description:
      "Insert integrals, Greek letters, operators, and common notation with one click—ideal as a math symbols extension while writing homework or reports.",
  },
  {
    title: "Formula Notes Storage",
    description:
      "Keep a personal formula organizer for exam prep: save identities, derivative rules, and custom snippets you reuse across courses.",
  },
  {
    title: "LaTeX Formula Converter",
    description:
      "Turn plain-text math into LaTeX-ready output. This latex converter extension helps you paste clean formulas into documents, slides, and forums.",
  },
  {
    title: "Derivative Rule Templates",
    description:
      "Quick-reference cards for power, product, quotient, and chain rules—your calculus helper extension for checking work before you submit.",
  },
  {
    title: "Quick Access to Calculus Resources",
    description:
      "Jump straight to derivative calculators and guides on calculadora-derivadas.org without leaving your browser tab.",
  },
] as const;

export const MATH_FORMULA_HELPER_BENEFITS = [
  {
    title: "For Students",
    description:
      "Study faster with a chrome math extension that keeps symbols, notes, and derivative templates within reach during lectures and problem sets.",
  },
  {
    title: "For Teachers",
    description:
      "Share consistent notation and formula sheets. The math formula helper reduces friction when building assignments or classroom materials.",
  },
  {
    title: "For Engineers",
    description:
      "Reference standard derivatives and LaTeX snippets while documenting models—useful as a derivative calculator extension companion for verification.",
  },
  {
    title: "For STEM Professionals",
    description:
      "Organize recurring formulas across projects. Convert expressions to LaTeX and link out to full step-by-step calculus tools when you need deeper analysis.",
  },
] as const;

export const MATH_FORMULA_HELPER_STEPS = [
  {
    step: 1,
    title: "Install Extension",
    description:
      "Add Math Formula Helper from the Chrome Web Store in one click. The extension is free and lightweight.",
  },
  {
    step: 2,
    title: "Open Toolbar",
    description:
      "Click the extension icon in your browser toolbar to open the math formula helper panel.",
  },
  {
    step: 3,
    title: "Copy Symbols or Save Formulas",
    description:
      "Browse symbols, store notes in your formula organizer, or convert expressions with the built-in LaTeX tools.",
  },
  {
    step: 4,
    title: "Access Calculus Resources",
    description:
      "Open derivative rule templates and quick links to online calculators for step-by-step differentiation.",
  },
] as const;

export const MATH_FORMULA_HELPER_FAQS = [
  {
    q: "Is Math Formula Helper free?",
    a: "Yes. Math Formula Helper is a free Chrome extension with no subscription required. All core features—symbol copying, formula notes, LaTeX conversion, and calculus shortcuts—are available at no cost.",
  },
  {
    q: "Does it collect user data?",
    a: "The extension is designed for local productivity. Saved formulas stay on your device. It does not sell personal data or require an account to use the math formula helper toolbar.",
  },
  {
    q: "Does it work offline?",
    a: "Symbol palettes, saved formula notes, and derivative rule templates work offline once installed. Links to online derivative calculators require an internet connection.",
  },
  {
    q: "Can I save formulas locally?",
    a: "Yes. Use the built-in formula organizer to store custom entries, class notes, and favorite identities locally in your browser profile.",
  },
  {
    q: "Is it suitable for derivative calculations?",
    a: "Math Formula Helper includes derivative rule templates and quick access to calculadora-derivadas.org calculators. For full step-by-step symbolic differentiation, use the linked derivative calculator extension resources on this site.",
  },
] as const;

export const MATH_FORMULA_HELPER_INTERNAL_LINKS = [
  { label: "Homepage", href: ROUTES.home },
  { label: "Derivative Calculator", href: "/#calculator" },
  { label: "Partial Derivative Calculator", href: ES_CALCULATOR_ROUTES.partialDerivatives },
  { label: "Chain Rule Calculator", href: ES_CALCULATOR_ROUTES.chainRule },
  { label: "Implicit Differentiation Calculator", href: ES_CALCULATOR_ROUTES.implicitDerivatives },
] as const;

export function buildMathFormulaHelperSchemaGraph() {
  const pageUrl = absoluteUrl(MATH_FORMULA_HELPER_EXTENSION_PATH);

  const softwareApplication = {
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#software`,
    name: "Math Formula Helper",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    description:
      "Free Chrome extension for copying math symbols, storing formulas, converting LaTeX and accessing derivative resources.",
    url: pageUrl,
    downloadUrl: CHROME_EXTENSION_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Math Formula Helper Chrome Extension",
        item: pageUrl,
      },
    ],
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: MATH_FORMULA_HELPER_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [softwareApplication, breadcrumb, faq],
  };
}
