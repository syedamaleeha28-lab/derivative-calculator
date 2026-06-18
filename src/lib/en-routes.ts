/** English public route paths under /en (single source of truth). */
export const EN_ROUTES = {
  /** Primary English calculator experience (homepage). */
  home: "/en",
  blog: "/en/blog",
  derivativeCalculator: "/en/derivative-calculator",
  partialDerivativeCalculator: "/en/partial-derivative-calculator",
  chainRuleCalculator: "/en/chain-rule-calculator",
  implicitDifferentiationCalculator: "/en/implicit-differentiation-calculator",
  secondDerivativeCalculator: "/en/second-derivative-calculator",
  productRuleCalculator: "/en/product-rule-calculator",
  quotientRuleCalculator: "/en/quotient-rule-calculator",
  higherOrderDerivativeCalculator: "/en/higher-order-derivative-calculator",
  tangentLineCalculator: "/en/tangent-line-calculator",
  criticalPointsCalculator: "/en/critical-points-calculator",
  /** Educational guides */
  derivativeOfSinX: "/en/derivative-of-sin-x",
  derivativeOfCosX: "/en/derivative-of-cos-x",
  derivativeOfTanX: "/en/derivative-of-tan-x",
  derivativeOfLnX: "/en/derivative-of-ln-x",
  derivativeOfEToTheX: "/en/derivative-of-e-to-the-x",
  /** @deprecated Use derivativeOfEToTheX — kept for internal link aliases. */
  derivativeOfEX: "/en/derivative-of-e-to-the-x",
  derivativeOfXSquared: "/en/derivative-of-x-squared",
  derivativeRules: "/en/derivative-rules",
  derivativeFormulas: "/en/derivative-formulas",
  derivativeExamples: "/en/derivative-examples",
  derivativePracticeProblems: "/en/derivative-practice-problems",
  derivativeCheatSheet: "/en/derivative-cheat-sheet",
  howToDifferentiateAFraction: "/en/how-to-differentiate-a-fraction",
  partialDerivativeExamples: "/en/partial-derivative-examples",
  implicitDifferentiationExamples: "/en/implicit-differentiation-examples",
  commonDerivativeFunctions: "/en/common-derivative-functions",
  derivativeOfX: "/en/derivative-of-x",
  derivativeOfXCubed: "/en/derivative-of-x-cubed",
  derivativeOfSquareRootX: "/en/derivative-of-square-root-x",
  derivativeOfLogX: "/en/derivative-of-log-x",
} as const;

/** Anchor link to the embedded calculator on the English homepage. */
export const EN_MAIN_CALCULATOR_HREF = `${EN_ROUTES.home}#calculator` as const;

/** Calculator landings that embed a specialized widget (not educational-only). */
export const EN_CALCULATOR_PAGES_WITH_WIDGET = [
  EN_ROUTES.partialDerivativeCalculator,
  EN_ROUTES.chainRuleCalculator,
  EN_ROUTES.implicitDifferentiationCalculator,
  EN_ROUTES.secondDerivativeCalculator,
  EN_ROUTES.productRuleCalculator,
  EN_ROUTES.quotientRuleCalculator,
  EN_ROUTES.higherOrderDerivativeCalculator,
  EN_ROUTES.tangentLineCalculator,
  EN_ROUTES.criticalPointsCalculator,
] as const;

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
  EN_ROUTES.criticalPointsCalculator,
] as const;

export const EN_ARTICLE_PAGES = [
  EN_ROUTES.derivativeOfSinX,
  EN_ROUTES.derivativeOfCosX,
  EN_ROUTES.derivativeOfTanX,
  EN_ROUTES.derivativeOfLnX,
  EN_ROUTES.derivativeOfXSquared,
  EN_ROUTES.derivativeRules,
  EN_ROUTES.derivativeFormulas,
  EN_ROUTES.derivativeExamples,
  EN_ROUTES.derivativePracticeProblems,
  EN_ROUTES.derivativeCheatSheet,
  EN_ROUTES.howToDifferentiateAFraction,
  EN_ROUTES.partialDerivativeExamples,
  EN_ROUTES.implicitDifferentiationExamples,
  EN_ROUTES.commonDerivativeFunctions,
  EN_ROUTES.derivativeOfX,
  EN_ROUTES.derivativeOfXCubed,
  EN_ROUTES.derivativeOfSquareRootX,
  EN_ROUTES.derivativeOfEToTheX,
  EN_ROUTES.derivativeOfLogX,
] as const;
