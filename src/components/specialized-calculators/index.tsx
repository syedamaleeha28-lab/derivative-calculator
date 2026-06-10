import type { ComponentType } from "react";
import type { Locale } from "@/lib/locale";
import type { SpecializedCalculatorKind } from "@/lib/specialized-calculators/themes";
import ProductRuleCalculator from "./ProductRuleCalculator";
import QuotientRuleCalculator from "./QuotientRuleCalculator";
import CriticalPointsCalculator from "./CriticalPointsCalculator";
import TangentLineCalculator from "./TangentLineCalculator";
import PartialDerivativesCalculator from "./PartialDerivativesCalculator";
import HigherOrderDerivativeCalculator from "./HigherOrderDerivativeCalculator";
import SecondDerivativeCalculator from "./SecondDerivativeCalculator";
import ChainRuleCalculator from "./ChainRuleCalculator";
import ImplicitDifferentiationCalculator from "./ImplicitDifferentiationCalculator";

type Props = { locale: Locale };

const REGISTRY: Record<SpecializedCalculatorKind, ComponentType<Props>> = {
  "product-rule": ProductRuleCalculator,
  "quotient-rule": QuotientRuleCalculator,
  "critical-points": CriticalPointsCalculator,
  "tangent-line": TangentLineCalculator,
  "partial-derivatives": PartialDerivativesCalculator,
  "higher-order": HigherOrderDerivativeCalculator,
  "second-derivative": SecondDerivativeCalculator,
  "chain-rule": ChainRuleCalculator,
  "implicit-differentiation": ImplicitDifferentiationCalculator,
};

export function SpecializedCalculator({
  kind,
  locale,
}: {
  kind: SpecializedCalculatorKind;
  locale: Locale;
}) {
  const Component = REGISTRY[kind];
  return <Component locale={locale} />;
}
