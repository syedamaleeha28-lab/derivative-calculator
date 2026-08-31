"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { Locale } from "@/lib/locale";
import type { SpecializedCalculatorKind } from "@/lib/specialized-calculators/themes";

type Props = { locale: Locale };

const REGISTRY: Record<SpecializedCalculatorKind, ComponentType<Props>> = {
  "product-rule": dynamic(() => import("./ProductRuleCalculator")),
  "quotient-rule": dynamic(() => import("./QuotientRuleCalculator")),
  "critical-points": dynamic(() => import("./CriticalPointsCalculator")),
  "tangent-line": dynamic(() => import("./TangentLineCalculator")),
  "partial-derivatives": dynamic(() => import("./PartialDerivativesCalculator")),
  "higher-order": dynamic(() => import("./HigherOrderDerivativeCalculator")),
  "second-derivative": dynamic(() => import("./SecondDerivativeCalculator")),
  "chain-rule": dynamic(() => import("./ChainRuleCalculator")),
  "implicit-differentiation": dynamic(() => import("./ImplicitDifferentiationCalculator")),
  limits: dynamic(() => import("./LimitsCalculator")),
  continuity: dynamic(() => import("./ContinuityCalculator")),
  lhopital: dynamic(() => import("./LHopitalCalculator")),
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
