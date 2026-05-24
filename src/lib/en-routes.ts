/** English public routes under /en (single source of truth). */
export const EN_ROUTES = {
  home: "/en",
  derivativeCalculator: "/en/derivative-calculator",
  partialDerivativeCalculator: "/en/partial-derivative-calculator",
  implicitDerivativeCalculator: "/en/implicit-derivative-calculator",
  secondDerivativeCalculator: "/en/second-derivative-calculator",
  chainRuleDerivativeCalculator: "/en/chain-rule-derivative-calculator",
} as const;

export const EN_CALCULATOR_PAGES = [
  EN_ROUTES.derivativeCalculator,
  EN_ROUTES.partialDerivativeCalculator,
  EN_ROUTES.implicitDerivativeCalculator,
  EN_ROUTES.secondDerivativeCalculator,
  EN_ROUTES.chainRuleDerivativeCalculator,
] as const;

export const EN_NAV_LINKS = [
  { name: "Home", href: EN_ROUTES.home },
  { name: "Derivative Calculator", href: EN_ROUTES.derivativeCalculator },
  { name: "Partial Derivatives", href: EN_ROUTES.partialDerivativeCalculator },
  { name: "Chain Rule", href: EN_ROUTES.chainRuleDerivativeCalculator },
] as const;
