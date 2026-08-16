import { EN_ROUTES } from "./en-routes";

export type NavLink = { name: string; href: string };

export type NavGroup = { label: string; items: NavLink[] };

/** Top-level English nav (single line on desktop). English routes only. */
export const EN_PRIMARY_NAV: NavLink[] = [
  { name: "Home", href: EN_ROUTES.home },
];

/** "Calculators" dropdown: grouped tools. */
export const EN_CALCULATORS_NAV_GROUPS: NavGroup[] = [
  {
    label: "Main",
    items: [{ name: "Derivative Calculator", href: EN_ROUTES.derivativeCalculator }],
  },
  {
    label: "Differentiation Rules",
    items: [
      { name: "Product Rule Calculator", href: EN_ROUTES.productRuleCalculator },
      { name: "Quotient Rule Calculator", href: EN_ROUTES.quotientRuleCalculator },
      { name: "Chain Rule Calculator", href: EN_ROUTES.chainRuleCalculator },
      { name: "Implicit Differentiation Calculator", href: EN_ROUTES.implicitDifferentiationCalculator },
    ],
  },
  {
    label: "Advanced Derivatives",
    items: [
      { name: "Partial Derivative Calculator", href: EN_ROUTES.partialDerivativeCalculator },
      { name: "Second Derivative Calculator", href: EN_ROUTES.secondDerivativeCalculator },
      { name: "Higher Order Derivative Calculator", href: EN_ROUTES.higherOrderDerivativeCalculator },
    ],
  },
  {
    label: "Function Analysis",
    items: [
      { name: "Tangent Line Calculator", href: EN_ROUTES.tangentLineCalculator },
      { name: "Critical Points Calculator", href: EN_ROUTES.criticalPointsCalculator },
    ],
  },
  {
    label: "Limits & Continuity",
    items: [
      { name: "Limit Calculator", href: EN_ROUTES.limitCalculator },
      { name: "Continuity Calculator", href: EN_ROUTES.continuityCalculator },
    ],
  },
];

/** Flat list for footer, schema, and active-path helpers. */
export const EN_CALCULATORS_NAV: NavLink[] = EN_CALCULATORS_NAV_GROUPS.flatMap(
  (group) => group.items
);

/** "Guides" dropdown: educational content only. */
export const EN_GUIDES_NAV: NavLink[] = [
  { name: "Common Derivative Functions", href: EN_ROUTES.commonDerivativeFunctions },
  { name: "Derivative Rules", href: EN_ROUTES.derivativeRules },
  { name: "Derivative Formulas", href: EN_ROUTES.derivativeFormulas },
  { name: "Derivative Examples", href: EN_ROUTES.derivativeExamples },
  { name: "Derivative Practice Problems", href: EN_ROUTES.derivativePracticeProblems },
  { name: "Derivative Cheat Sheet", href: EN_ROUTES.derivativeCheatSheet },
  { name: "Derivative of sin(x)", href: EN_ROUTES.derivativeOfSinX },
  { name: "Derivative of cos(x)", href: EN_ROUTES.derivativeOfCosX },
  { name: "Derivative of tan(x)", href: EN_ROUTES.derivativeOfTanX },
  { name: "Derivative of ln(x)", href: EN_ROUTES.derivativeOfLnX },
  { name: "Derivative of e^x", href: EN_ROUTES.derivativeOfEX },
  { name: "Derivative of x²", href: EN_ROUTES.derivativeOfXSquared },
  { name: "Differentiate a Fraction", href: EN_ROUTES.howToDifferentiateAFraction },
  { name: "Partial Derivative Examples", href: EN_ROUTES.partialDerivativeExamples },
  { name: "Implicit Differentiation Examples", href: EN_ROUTES.implicitDifferentiationExamples },
];

export const EN_EXAMPLES_NAV: NavLink = {
  name: "Examples",
  href: EN_ROUTES.derivativeExamples,
};

export const EN_BLOG_NAV: NavLink = { name: "Blog", href: EN_ROUTES.blog };

/** Footer "Guides" column — single source of truth across all English pages. */
export const EN_FOOTER_GUIDES_NAV: NavLink[] = [
  { name: "Common Derivative Functions", href: EN_ROUTES.commonDerivativeFunctions },
  { name: "Derivative Rules", href: EN_ROUTES.derivativeRules },
  { name: "Derivative Formulas", href: EN_ROUTES.derivativeFormulas },
  { name: "Derivative Examples", href: EN_ROUTES.derivativeExamples },
  { name: "Derivative Practice Problems", href: EN_ROUTES.derivativePracticeProblems },
  { name: "Derivative Cheat Sheet", href: EN_ROUTES.derivativeCheatSheet },
];

export function isEnGuidePath(pathname: string): boolean {
  return EN_GUIDES_NAV.some(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`)
  );
}

export function isEnCalculatorPath(pathname: string): boolean {
  return EN_CALCULATORS_NAV.some(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`)
  );
}
