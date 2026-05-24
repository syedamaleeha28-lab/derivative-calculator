/** English public routes under /en (single source of truth). */
export const EN_ROUTES = {
  home: "/en",
  derivativeCalculator: "/en/derivative-calculator",
  partialDerivativeCalculator: "/en/partial-derivative-calculator",
  chainRuleCalculator: "/en/chain-rule-calculator",
  implicitDifferentiationCalculator: "/en/implicit-differentiation-calculator",
  secondDerivativeCalculator: "/en/second-derivative-calculator",
} as const;

export const EN_CALCULATOR_PAGES = [
  EN_ROUTES.derivativeCalculator,
  EN_ROUTES.partialDerivativeCalculator,
  EN_ROUTES.chainRuleCalculator,
  EN_ROUTES.implicitDifferentiationCalculator,
  EN_ROUTES.secondDerivativeCalculator,
] as const;

export const EN_NAV_LINKS = [
  { name: "Home", href: EN_ROUTES.home },
  { name: "Derivative Calculator", href: EN_ROUTES.derivativeCalculator },
  { name: "Partial Derivatives", href: EN_ROUTES.partialDerivativeCalculator },
  { name: "Chain Rule", href: EN_ROUTES.chainRuleCalculator },
  { name: "Implicit Differentiation", href: EN_ROUTES.implicitDifferentiationCalculator },
] as const;
