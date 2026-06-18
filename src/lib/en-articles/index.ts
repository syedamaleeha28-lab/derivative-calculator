import type { EnArticleEntry } from "./types";
import { EN_ROUTES } from "../en-routes";
import { enArticleBreadcrumbs } from "./helpers";
import { enCommonFunctionBreadcrumbs } from "../common-derivative-functions/helpers";
import { ES_COMMON_FUNCTION_ROUTES } from "../common-derivative-functions/routes";
import {
  buildNewCommonFunctionEnEntries,
  COMMON_FUNCTIONS_HUB_EN_ENTRY,
} from "./common-function-entries";
import { DerivativeOfSinXContent } from "./content/derivative-of-sin-x";
import { DerivativeOfCosXContent } from "./content/derivative-of-cos-x";
import { DerivativeOfTanXContent } from "./content/derivative-of-tan-x";
import { DerivativeOfLnXContent } from "./content/derivative-of-ln-x";
import { DerivativeOfXSquaredContent } from "./content/derivative-of-x-squared";
import { DerivativeRulesContent } from "./content/derivative-rules";
import { DerivativeExamplesContent } from "./content/derivative-examples";
import { HowToDifferentiateAFractionContent } from "./content/how-to-differentiate-a-fraction";
import { PartialDerivativeExamplesContent } from "./content/partial-derivative-examples";
import { ImplicitDifferentiationExamplesContent } from "./content/implicit-differentiation-examples";
import { DerivativeFormulasContent } from "./content/derivative-formulas";
import { DerivativePracticeProblemsContent } from "./content/derivative-practice-problems";
import { DerivativeCheatSheetContent } from "./content/derivative-cheat-sheet";

const AUTHOR = {
  name: "Derivative Calculator Team",
  role: "Calculus education in English",
} as const;

function entry(
  meta: Omit<EnArticleEntry, "breadcrumbs" | "Content"> & {
    breadcrumbLabel: string;
    Content: EnArticleEntry["Content"];
    breadcrumbs?: EnArticleEntry["breadcrumbs"];
  }
): EnArticleEntry {
  const { breadcrumbLabel, Content, breadcrumbs, ...rest } = meta;
  return {
    ...rest,
    breadcrumbs: breadcrumbs ?? enArticleBreadcrumbs(rest.slug, breadcrumbLabel),
    Content,
  };
}

export const EN_ARTICLE_ENTRIES: EnArticleEntry[] = [
  entry({
    slug: "derivative-of-sin-x",
    title: "Derivative of sin(x): Formula, Proof Sketch, and Examples",
    description:
      "Learn the derivative of sin x step by step: the formula cos(x), limit definition intuition, chain rule for sin(g(x)), worked examples, and FAQ.",
    date: "June 1, 2026",
    dateIso: "2026-06-01",
    readTime: "15 min",
    category: "Trigonometry",
    tags: ["derivative of sin x", "trigonometric derivatives", "calculus"],
    author: AUTHOR,
    heroImageAlt: "Graph of sine and its derivative cosine illustrating slope",
    spanishAlternate: ES_COMMON_FUNCTION_ROUTES.derivadaDeSinX,
    faqs: [
      {
        question: "What is the derivative of sin(x)?",
        answer: "d/dx sin(x) = cos(x), provided x is measured in radians.",
      },
      {
        question: "How do you differentiate sin(3x)?",
        answer: "Use the chain rule: cos(3x) · 3 = 3cos(3x).",
      },
      {
        question: "Why do calculators require radians for sin(x)?",
        answer: "The standard calculus identity (sin x)′ = cos x is derived assuming radian measure.",
      },
      {
        question: "What is the derivative of x·sin(x)?",
        answer: "Apply the product rule: sin(x) + x·cos(x).",
      },
      {
        question: "Is the derivative of sin⁻¹(x) the same as cos(x)?",
        answer: "No. arcsin(x) is a different function; its derivative is 1/√(1−x²).",
      },
    ],
    relatedPosts: [
      { title: "Derivative of cos(x)", slug: "derivative-of-cos-x" },
      { title: "Derivative rules (full guide)", slug: "derivative-rules" },
    ],
    breadcrumbLabel: "Derivative of sin(x)",
    breadcrumbs: enCommonFunctionBreadcrumbs("derivative-of-sin-x", "Derivative of sin(x)"),
    Content: DerivativeOfSinXContent,
  }),
  entry({
    slug: "derivative-of-cos-x",
    title: "Derivative of cos(x): Formula, Proof, and Examples",
    description:
      "The derivative of cos x is −sin(x). See why the minus sign appears, chain rule examples, product cases, and practice tips.",
    date: "June 1, 2026",
    dateIso: "2026-06-01",
    readTime: "14 min",
    category: "Trigonometry",
    tags: ["derivative of cos x", "trigonometric derivatives"],
    author: AUTHOR,
    heroImageAlt: "Cosine curve and tangent slopes explained for cos x derivative",
    spanishAlternate: ES_COMMON_FUNCTION_ROUTES.derivadaDeCosX,
    faqs: [
      {
        question: "What is the derivative of cos(x)?",
        answer: "d/dx cos(x) = −sin(x) in radians.",
      },
      {
        question: "Why is the derivative of cos(x) negative?",
        answer: "Cosine decreases where sine increases in the same phase; differentiation yields −sin(x).",
      },
      {
        question: "How do you differentiate cos(2x)?",
        answer: "−sin(2x) · 2 = −2sin(2x) by the chain rule.",
      },
      {
        question: "What is the derivative of e^x·cos(x)?",
        answer: "Product rule: e^x(cos x − sin x).",
      },
    ],
    relatedPosts: [
      { title: "Derivative of sin(x)", slug: "derivative-of-sin-x" },
      { title: "Derivative of tan(x)", slug: "derivative-of-tan-x" },
    ],
    breadcrumbLabel: "Derivative of cos(x)",
    breadcrumbs: enCommonFunctionBreadcrumbs("derivative-of-cos-x", "Derivative of cos(x)"),
    Content: DerivativeOfCosXContent,
  }),
  entry({
    slug: "derivative-of-tan-x",
    title: "Derivative of tan(x): sec²(x) Derivation and Examples",
    description:
      "Derive d/dx tan(x) = sec²(x) from sin and cos, learn domain restrictions, chain rule cases, and worked problems.",
    date: "June 1, 2026",
    dateIso: "2026-06-01",
    readTime: "13 min",
    category: "Trigonometry",
    tags: ["derivative of tan x", "secant squared"],
    author: AUTHOR,
    heroImageAlt: "Tangent function and secant squared as its derivative",
    spanishAlternate: ES_COMMON_FUNCTION_ROUTES.derivadaDeTanX,
    faqs: [
      {
        question: "What is the derivative of tan(x)?",
        answer: "sec²(x), equivalently 1/cos²(x), for x where cos(x) ≠ 0.",
      },
      {
        question: "Can I write the derivative as 1 + tan²(x)?",
        answer: "Yes. The Pythagorean identity gives sec²(x) = 1 + tan²(x).",
      },
      {
        question: "What is the derivative of tan(3x)?",
        answer: "3sec²(3x) by the chain rule.",
      },
    ],
    relatedPosts: [
      { title: "Derivative of sin(x)", slug: "derivative-of-sin-x" },
      { title: "Derivative rules", slug: "derivative-rules" },
    ],
    breadcrumbLabel: "Derivative of tan(x)",
    breadcrumbs: enCommonFunctionBreadcrumbs("derivative-of-tan-x", "Derivative of tan(x)"),
    Content: DerivativeOfTanXContent,
  }),
  entry({
    slug: "derivative-of-ln-x",
    title: "Derivative of ln(x): 1/x and the Chain Rule",
    description:
      "Understand why d/dx ln(x) = 1/x, natural logarithm domain, ln(g(x)) with the chain rule, and logarithmic differentiation preview.",
    date: "June 1, 2026",
    dateIso: "2026-06-01",
    readTime: "14 min",
    category: "Logarithms",
    tags: ["derivative of ln x", "natural log derivative"],
    author: AUTHOR,
    heroImageAlt: "Natural logarithm graph and reciprocal as derivative",
    spanishAlternate: ES_COMMON_FUNCTION_ROUTES.derivadaDeLnX,
    faqs: [
      {
        question: "What is the derivative of ln(x)?",
        answer: "1/x for x > 0.",
      },
      {
        question: "What is the derivative of ln(3x)?",
        answer: "1/x for x > 0; ln(3x) = ln 3 + ln x has derivative 1/x.",
      },
      {
        question: "Does ln|x| work for negative x?",
        answer: "In many calculus courses, d/dx ln|x| = 1/x for x ≠ 0.",
      },
    ],
    relatedPosts: [
      { title: "Derivative of e^x", slug: "derivative-of-e-to-the-x" },
      { title: "Derivative rules", slug: "derivative-rules" },
    ],
    breadcrumbLabel: "Derivative of ln(x)",
    breadcrumbs: enCommonFunctionBreadcrumbs("derivative-of-ln-x", "Derivative of ln(x)"),
    Content: DerivativeOfLnXContent,
  }),
  entry({
    slug: "derivative-of-x-squared",
    title: "Derivative of x²: Power Rule Explained with Examples",
    description:
      "Apply the power rule to x², see limit definition intuition, generalize to x^n, and practice polynomial derivatives.",
    date: "June 1, 2026",
    dateIso: "2026-06-01",
    readTime: "12 min",
    category: "Algebra",
    tags: ["derivative of x squared", "power rule"],
    author: AUTHOR,
    heroImageAlt: "Parabola x squared and linear derivative 2x",
    spanishAlternate: ES_COMMON_FUNCTION_ROUTES.derivadaDeXCuadrado,
    faqs: [
      {
        question: "What is the derivative of x²?",
        answer: "2x by the power rule.",
      },
      {
        question: "What is the derivative of x^n?",
        answer: "n·x^(n−1) for real n (with domain restrictions for some n).",
      },
      {
        question: "What is the derivative of 5x²?",
        answer: "10x; constants multiply through.",
      },
    ],
    relatedPosts: [
      { title: "Derivative rules", slug: "derivative-rules" },
      { title: "Derivative examples", slug: "derivative-examples" },
    ],
    breadcrumbLabel: "Derivative of x²",
    breadcrumbs: enCommonFunctionBreadcrumbs("derivative-of-x-squared", "Derivative of x²"),
    Content: DerivativeOfXSquaredContent,
  }),
  entry({
    slug: "derivative-rules",
    title: "Derivative Rules: Complete Guide with Reference Table",
    description:
      "Power, product, quotient, chain, trig, log, and exponential derivative rules in one place—with formulas, tips, and when to use each.",
    date: "June 1, 2026",
    dateIso: "2026-06-01",
    readTime: "18 min",
    category: "Reference",
    tags: ["derivative rules", "differentiation rules", "calculus cheat sheet"],
    author: AUTHOR,
    heroImageAlt: "Summary table of differentiation rules for calculus students",
    spanishAlternate: "/reglas-de-derivacion",
    faqs: [
      {
        question: "What are the basic derivative rules?",
        answer: "Linearity, power rule, product rule, quotient rule, and chain rule cover most elementary functions.",
      },
      {
        question: "When do I use the chain rule?",
        answer: "When you differentiate a composition f(g(x))—an outer function applied to an inner one.",
      },
      {
        question: "What is the derivative of a constant?",
        answer: "Zero.",
      },
    ],
    relatedPosts: [
      { title: "Derivative examples", slug: "derivative-examples" },
      { title: "Derivative of sin(x)", slug: "derivative-of-sin-x" },
    ],
    breadcrumbLabel: "Derivative rules",
    Content: DerivativeRulesContent,
  }),
  entry({
    slug: "derivative-formulas",
    title: "Derivative Formulas: Complete Reference with Tables",
    description:
      "Every standard derivative formula in one place—power, product, quotient, chain, trig, log, exp, inverse, and application formulas—with tables and when-to-use guidance.",
    date: "June 9, 2026",
    dateIso: "2026-06-09",
    readTime: "18 min",
    category: "Reference",
    tags: ["derivative formulas", "differentiation formulas", "calculus reference"],
    author: AUTHOR,
    heroImageAlt: "Comprehensive table of derivative formulas for calculus students",
    spanishAlternate: "/formulas-de-derivadas",
    faqs: [
      {
        question: "What is the most important derivative formula?",
        answer: "The chain rule f′(g(x))·g′(x) appears inside nearly every non-polynomial problem.",
      },
      {
        question: "What is the derivative of x^n?",
        answer: "n·x^(n−1) by the power rule, with domain restrictions for some n.",
      },
      {
        question: "What is the derivative of sin(x)?",
        answer: "cos(x), provided x is measured in radians.",
      },
      {
        question: "What is the derivative of ln(x)?",
        answer: "1/x for x > 0.",
      },
      {
        question: "What is the derivative of e^x?",
        answer: "e^x—the exponential function is its own derivative.",
      },
      {
        question: "When do I use the product rule versus the chain rule?",
        answer: "Product rule for uv; chain rule for f(g(x)). If both apply, combine them.",
      },
    ],
    relatedPosts: [
      { title: "Derivative rules", slug: "derivative-rules" },
      { title: "Derivative cheat sheet", slug: "derivative-cheat-sheet" },
    ],
    breadcrumbLabel: "Derivative formulas",
    Content: DerivativeFormulasContent,
  }),
  entry({
    slug: "derivative-examples",
    title: "Derivative Examples: Beginner to Advanced Practice",
    description:
      "Worked derivative examples at three difficulty levels, practice questions with hints, and links to specialized guides.",
    date: "June 1, 2026",
    dateIso: "2026-06-01",
    readTime: "17 min",
    category: "Practice",
    tags: ["derivative examples", "differentiation practice"],
    author: AUTHOR,
    heroImageAlt: "Collage of calculus derivative practice problems with solutions",
    spanishAlternate: "/ejemplos-de-derivadas",
    faqs: [
      {
        question: "How do I practice derivatives effectively?",
        answer: "Mix rule identification drills with full problems; verify each step with a step-by-step calculator.",
      },
      {
        question: "What should beginners learn first?",
        answer: "Power rule, lineality, and simple trig before product, quotient, and chain rules.",
      },
    ],
    relatedPosts: [
      { title: "Derivative rules", slug: "derivative-rules" },
      { title: "How to differentiate a fraction", slug: "how-to-differentiate-a-fraction" },
    ],
    breadcrumbLabel: "Derivative examples",
    Content: DerivativeExamplesContent,
  }),
  entry({
    slug: "derivative-practice-problems",
    title: "Derivative Practice Problems: Beginner to Advanced Drills",
    description:
      "Structured derivative practice problems at three difficulty levels, application drills, self-tests, and a weekly study plan—with solution outlines and calculator links.",
    date: "June 9, 2026",
    dateIso: "2026-06-09",
    readTime: "20 min",
    category: "Practice",
    tags: ["derivative practice problems", "differentiation drills", "calculus exercises"],
    author: AUTHOR,
    heroImageAlt: "Graduated set of derivative practice problems from basic to advanced",
    spanishAlternate: "/ejercicios-de-derivadas",
    faqs: [
      {
        question: "How many derivative practice problems should I do per day?",
        answer: "Aim for 5–10 mixed problems daily, increasing difficulty as basics become automatic.",
      },
      {
        question: "What rules should beginners practice first?",
        answer: "Power rule and linearity before product, quotient, and chain rules.",
      },
      {
        question: "How do I check my derivative practice answers?",
        answer: "Use a step-by-step derivative calculator and compare each algebraic step.",
      },
      {
        question: "What is a good intermediate practice problem?",
        answer: "x²·e^x or sin(2x) stress product and chain rules in manageable form.",
      },
      {
        question: "How do I prepare for derivative exams?",
        answer: "Mix one beginner, one intermediate, and one advanced problem under timed conditions.",
      },
      {
        question: "Should I memorize formulas or practice classification?",
        answer: "Both—formulas tell you what; classifying the expression tells you which formula to use.",
      },
    ],
    relatedPosts: [
      { title: "Derivative examples", slug: "derivative-examples" },
      { title: "Derivative rules", slug: "derivative-rules" },
    ],
    breadcrumbLabel: "Practice problems",
    Content: DerivativePracticeProblemsContent,
  }),
  entry({
    slug: "derivative-cheat-sheet",
    title: "Derivative Cheat Sheet: Exam-Ready Quick Reference",
    description:
      "Printable derivative cheat sheet with core rules, trig and log tables, inverse trig rows, decision flow, common mistakes, and calculator links.",
    date: "June 9, 2026",
    dateIso: "2026-06-09",
    readTime: "12 min",
    category: "Reference",
    tags: ["derivative cheat sheet", "differentiation cheat sheet", "calculus quick reference"],
    author: AUTHOR,
    heroImageAlt: "One-page derivative cheat sheet with rules and standard function derivatives",
    spanishAlternate: "/tabla-de-derivadas",
    faqs: [
      {
        question: "What should a derivative cheat sheet include?",
        answer: "Power, product, quotient, chain rules plus trig, log, exp, and inverse trig rows.",
      },
      {
        question: "Is a cheat sheet enough to learn derivatives?",
        answer: "No—it is for review. Pair it with worked examples and deliberate practice.",
      },
      {
        question: "What is the derivative of tan(x)?",
        answer: "sec²(x), equivalently 1/cos²(x), where cos(x) ≠ 0.",
      },
      {
        question: "What is the quotient rule formula?",
        answer: "(u′v − uv′)/v² for a fraction u/v.",
      },
      {
        question: "How fast should I classify a derivative problem?",
        answer: "Under ten seconds to name the rule at exam fluency; use the five-second decision flow.",
      },
      {
        question: "Can I use a calculator while studying with this cheat sheet?",
        answer: "Yes—verify handwritten work with a step-by-step tool after attempting each problem first.",
      },
    ],
    relatedPosts: [
      { title: "Derivative formulas", slug: "derivative-formulas" },
      { title: "Derivative rules", slug: "derivative-rules" },
    ],
    breadcrumbLabel: "Cheat sheet",
    Content: DerivativeCheatSheetContent,
  }),
  entry({
    slug: "how-to-differentiate-a-fraction",
    title: "How to Differentiate a Fraction: Quotient Rule Guide",
    description:
      "Master the quotient rule for u/v, avoid common mistakes, decide when to simplify first, and study worked rational examples.",
    date: "June 1, 2026",
    dateIso: "2026-06-01",
    readTime: "15 min",
    category: "Techniques",
    tags: ["quotient rule", "differentiate a fraction"],
    author: AUTHOR,
    heroImageAlt: "Rational function fraction and quotient rule steps",
    spanishAlternate: "/blog/como-derivar-fracciones",
    faqs: [
      {
        question: "How do you differentiate a fraction?",
        answer: "Use the quotient rule: (u'v − uv')/v² when the function is a true quotient u/v.",
      },
      {
        question: "Is the derivative of u/v equal to u'/v'?",
        answer: "No. That is a common error; the correct formula involves both terms and v².",
      },
    ],
    relatedPosts: [
      { title: "Quotient rule calculator", slug: "quotient-rule-calculator" },
      { title: "Derivative rules", slug: "derivative-rules" },
    ],
    breadcrumbLabel: "Differentiate a fraction",
    Content: HowToDifferentiateAFractionContent,
  }),
  entry({
    slug: "partial-derivative-examples",
    title: "Partial Derivative Examples: Multivariable Calculus Practice",
    description:
      "Compute ∂f/∂x and ∂f/∂y with worked examples, notation guide, and links to the partial derivative calculator.",
    date: "June 1, 2026",
    dateIso: "2026-06-01",
    readTime: "16 min",
    category: "Multivariable",
    tags: ["partial derivative examples", "multivariable calculus"],
    author: AUTHOR,
    heroImageAlt: "3D surface sketch illustrating partial derivatives",
    spanishAlternate: "/blog/derivadas-parciales-ejemplos",
    faqs: [
      {
        question: "What is a partial derivative?",
        answer: "The rate of change of f with respect to one variable while holding the others fixed.",
      },
      {
        question: "How is ∂f/∂x different from df/dx?",
        answer: "df/dx is for functions of one variable; ∂f/∂x treats other variables as constants.",
      },
    ],
    relatedPosts: [
      { title: "Partial derivative calculator", slug: "partial-derivative-calculator" },
      { title: "Derivative examples", slug: "derivative-examples" },
    ],
    breadcrumbLabel: "Partial derivative examples",
    Content: PartialDerivativeExamplesContent,
  }),
  entry({
    slug: "implicit-differentiation-examples",
    title: "Implicit Differentiation Examples: Step-by-Step Solutions",
    description:
      "Differentiate circles, products, and trig relations when y is not isolated. Implicit differentiation examples with full algebra.",
    date: "June 1, 2026",
    dateIso: "2026-06-01",
    readTime: "16 min",
    category: "Techniques",
    tags: ["implicit differentiation examples", "dy/dx"],
    author: AUTHOR,
    heroImageAlt: "Implicit curve and tangent line from implicit differentiation",
    spanishAlternate: "/blog/derivadas-implicitas-paso-a-paso",
    faqs: [
      {
        question: "What is implicit differentiation?",
        answer: "Differentiating both sides of an equation relating x and y, then solving for dy/dx.",
      },
      {
        question: "Why multiply by dy/dx when differentiating y?",
        answer: "Because y is a function of x; the chain rule gives d/dx[y²] = 2y·dy/dx.",
      },
    ],
    relatedPosts: [
      { title: "Implicit differentiation calculator", slug: "implicit-differentiation-calculator" },
      { title: "Derivative rules", slug: "derivative-rules" },
    ],
    breadcrumbLabel: "Implicit differentiation",
    Content: ImplicitDifferentiationExamplesContent,
  }),
  COMMON_FUNCTIONS_HUB_EN_ENTRY,
  ...buildNewCommonFunctionEnEntries(),
];

export function getAllEnArticleSlugs(): string[] {
  return EN_ARTICLE_ENTRIES.map((a) => a.slug);
}

export function getEnArticleBySlug(slug: string): EnArticleEntry | undefined {
  return EN_ARTICLE_ENTRIES.find((a) => a.slug === slug);
}
