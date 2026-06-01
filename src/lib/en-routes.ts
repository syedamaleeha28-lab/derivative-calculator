/** English public routes under /en (single source of truth). */
export const EN_ROUTES = {
  home: "/en",
  derivativeCalculator: "/en/derivative-calculator",
  partialDerivativeCalculator: "/en/partial-derivative-calculator",
  chainRuleCalculator: "/en/chain-rule-calculator",
  implicitDifferentiationCalculator: "/en/implicit-differentiation-calculator",
  secondDerivativeCalculator: "/en/second-derivative-calculator",
  productRuleCalculator: "/en/product-rule-calculator",
  quotientRuleCalculator: "/en/quotient-rule-calculator",
  higherOrderDerivativeCalculator: "/en/higher-order-derivative-calculator",
  tangentLineCalculator: "/en/tangent-line-calculator",
  /** Educational guides */
  derivativeOfSinX: "/en/derivative-of-sin-x",
  derivativeOfCosX: "/en/derivative-of-cos-x",
  derivativeOfTanX: "/en/derivative-of-tan-x",
  derivativeOfLnX: "/en/derivative-of-ln-x",
  derivativeOfEX: "/en/derivative-of-e-x",
  derivativeOfXSquared: "/en/derivative-of-x-squared",
  derivativeRules: "/en/derivative-rules",
  derivativeExamples: "/en/derivative-examples",
  howToDifferentiateAFraction: "/en/how-to-differentiate-a-fraction",
  partialDerivativeExamples: "/en/partial-derivative-examples",
  implicitDifferentiationExamples: "/en/implicit-differentiation-examples",
} as const;

export const EN_CALCULATOR_PAGES = [
  EN_ROUTES.derivativeCalculator,
  EN_ROUTES.partialDerivativeCalculator,
  EN_ROUTES.chainRuleCalculator,
  EN_ROUTES.implicitDifferentiationCalculator,
  EN_ROUTES.secondDerivativeCalculator,
  EN_ROUTES.productRuleCalculator,
  EN_ROUTES.quotientRuleCalculator,
  EN_ROUTES.higherOrderDerivativeCalculator,
  EN_ROUTES.tangentLineCalculator,
] as const;

export const EN_ARTICLE_PAGES = [
  EN_ROUTES.derivativeOfSinX,
  EN_ROUTES.derivativeOfCosX,
  EN_ROUTES.derivativeOfTanX,
  EN_ROUTES.derivativeOfLnX,
  EN_ROUTES.derivativeOfEX,
  EN_ROUTES.derivativeOfXSquared,
  EN_ROUTES.derivativeRules,
  EN_ROUTES.derivativeExamples,
  EN_ROUTES.howToDifferentiateAFraction,
  EN_ROUTES.partialDerivativeExamples,
  EN_ROUTES.implicitDifferentiationExamples,
] as const;

export const EN_NAV_LINKS = [
  { name: "Home", href: EN_ROUTES.home },
  { name: "Derivative Calculator", href: EN_ROUTES.derivativeCalculator },
  { name: "Derivative Rules", href: EN_ROUTES.derivativeRules },
  { name: "Derivative Examples", href: EN_ROUTES.derivativeExamples },
  { name: "Partial Derivatives", href: EN_ROUTES.partialDerivativeCalculator },
  { name: "Chain Rule", href: EN_ROUTES.chainRuleCalculator },
  { name: "Implicit Differentiation", href: EN_ROUTES.implicitDifferentiationCalculator },
] as const;
