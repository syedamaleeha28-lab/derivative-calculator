import { EN_ROUTES } from "./en-routes";

export type NavLink = { name: string; href: string };

/** Top-level English nav (single line on desktop). English routes only. */
export const EN_PRIMARY_NAV: NavLink[] = [
  { name: "Home", href: EN_ROUTES.home },
  { name: "Derivative Calculator", href: EN_ROUTES.derivativeCalculator },
  { name: "Partial Derivatives", href: EN_ROUTES.partialDerivativeCalculator },
  { name: "Chain Rule", href: EN_ROUTES.chainRuleCalculator },
  { name: "Implicit Differentiation", href: EN_ROUTES.implicitDifferentiationCalculator },
];

/** Educational guides and secondary calculator landings. */
export const EN_GUIDES_NAV: NavLink[] = [
  { name: "Derivative Rules", href: EN_ROUTES.derivativeRules },
  { name: "Derivative Formulas", href: EN_ROUTES.derivativeFormulas },
  { name: "Derivative Cheat Sheet", href: EN_ROUTES.derivativeCheatSheet },
  { name: "Practice Problems", href: EN_ROUTES.derivativePracticeProblems },
  { name: "Derivative of sin(x)", href: EN_ROUTES.derivativeOfSinX },
  { name: "Derivative of cos(x)", href: EN_ROUTES.derivativeOfCosX },
  { name: "Derivative of tan(x)", href: EN_ROUTES.derivativeOfTanX },
  { name: "Derivative of ln(x)", href: EN_ROUTES.derivativeOfLnX },
  { name: "Derivative of e^x", href: EN_ROUTES.derivativeOfEX },
  { name: "Derivative of x²", href: EN_ROUTES.derivativeOfXSquared },
  { name: "Differentiate a Fraction", href: EN_ROUTES.howToDifferentiateAFraction },
  { name: "Partial Derivative Examples", href: EN_ROUTES.partialDerivativeExamples },
  { name: "Implicit Differentiation Examples", href: EN_ROUTES.implicitDifferentiationExamples },
  { name: "Product Rule", href: EN_ROUTES.productRuleCalculator },
  { name: "Quotient Rule", href: EN_ROUTES.quotientRuleCalculator },
  { name: "Second Derivative", href: EN_ROUTES.secondDerivativeCalculator },
  { name: "Higher-Order Derivatives", href: EN_ROUTES.higherOrderDerivativeCalculator },
  { name: "Tangent Line", href: EN_ROUTES.tangentLineCalculator },
  { name: "Critical Points", href: EN_ROUTES.criticalPointsCalculator },
];

export const EN_EXAMPLES_NAV: NavLink = {
  name: "Examples",
  href: EN_ROUTES.derivativeExamples,
};

export const EN_BLOG_NAV: NavLink = { name: "Blog", href: EN_ROUTES.blog };

export function isEnGuidePath(pathname: string): boolean {
  return EN_GUIDES_NAV.some(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`)
  );
}
