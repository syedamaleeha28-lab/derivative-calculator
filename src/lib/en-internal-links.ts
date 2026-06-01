import { EN_ROUTES } from "./en-routes";

/** Required calculator links on every English SEO page. */
export const EN_STANDARD_CALCULATOR_LINKS = [
  {
    label: "Derivative Calculator",
    href: EN_ROUTES.derivativeCalculator,
    desc: "Free step-by-step symbolic differentiation for any expression.",
  },
  {
    label: "Partial Derivative Calculator",
    href: EN_ROUTES.partialDerivativeCalculator,
    desc: "Compute ∂f/∂x and ∂f/∂y for multivariable functions.",
  },
  {
    label: "Chain Rule Calculator",
    href: EN_ROUTES.chainRuleCalculator,
    desc: "Differentiate nested and composite functions automatically.",
  },
  {
    label: "Implicit Differentiation Calculator",
    href: EN_ROUTES.implicitDifferentiationCalculator,
    desc: "Find dy/dx when y is not isolated explicitly.",
  },
] as const;

export const EN_RULES_HUB_LINKS = [
  {
    label: "Derivative of sin(x)",
    href: EN_ROUTES.derivativeOfSinX,
    desc: "Formula, proof sketch, and chain-rule examples.",
  },
  {
    label: "Derivative of cos(x)",
    href: EN_ROUTES.derivativeOfCosX,
    desc: "Why the minus sign appears and how to practice.",
  },
  {
    label: "Derivative of tan(x)",
    href: EN_ROUTES.derivativeOfTanX,
    desc: "sec²(x) derivation and domain restrictions.",
  },
  {
    label: "Derivative of ln(x)",
    href: EN_ROUTES.derivativeOfLnX,
    desc: "Logarithmic differentiation and chain rule with ln.",
  },
  {
    label: "Derivative of e^x",
    href: EN_ROUTES.derivativeOfEX,
    desc: "The exponential that is its own derivative.",
  },
  {
    label: "Product rule calculator",
    href: EN_ROUTES.productRuleCalculator,
    desc: "Differentiate products uv with guided steps.",
  },
  {
    label: "Quotient rule calculator",
    href: EN_ROUTES.quotientRuleCalculator,
    desc: "Handle fractions and rational expressions online.",
  },
] as const;

export const EN_EXAMPLES_HUB_LINKS = [
  {
    label: "Derivative examples (full gallery)",
    href: EN_ROUTES.derivativeExamples,
    desc: "Beginner, intermediate, and advanced worked problems.",
  },
  {
    label: "How to differentiate a fraction",
    href: EN_ROUTES.howToDifferentiateAFraction,
    desc: "Quotient rule walkthrough with common mistakes.",
  },
  {
    label: "Partial derivative examples",
    href: EN_ROUTES.partialDerivativeExamples,
    desc: "Multivariable practice with ∂ notation.",
  },
  {
    label: "Implicit differentiation examples",
    href: EN_ROUTES.implicitDifferentiationExamples,
    desc: "Circles, products, and trig implicit relations.",
  },
] as const;
