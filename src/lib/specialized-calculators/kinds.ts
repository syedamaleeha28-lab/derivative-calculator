import type { CalculatorPageConfig } from "@/lib/calculator-pages/types";
import type { SpecializedCalculatorKind } from "./themes";

const SLUG_TO_KIND: Record<string, SpecializedCalculatorKind> = {
  "calculadora-regla-producto": "product-rule",
  "product-rule-calculator": "product-rule",
  "calculadora-regla-cociente": "quotient-rule",
  "quotient-rule-calculator": "quotient-rule",
  "calculadora-puntos-criticos": "critical-points",
  "critical-points-calculator": "critical-points",
  "calculadora-recta-tangente": "tangent-line",
  "tangent-line-calculator": "tangent-line",
  "calculadora-de-derivadas-parciales": "partial-derivatives",
  "partial-derivative-calculator": "partial-derivatives",
  "calculadora-derivadas-orden-superior": "higher-order",
  "higher-order-derivative-calculator": "higher-order",
  "calculadora-segunda-derivada": "second-derivative",
  "second-derivative-calculator": "second-derivative",
  "calculadora-regla-de-la-cadena": "chain-rule",
  "chain-rule-calculator": "chain-rule",
  "calculadora-de-derivadas-implicitas": "implicit-differentiation",
  "implicit-differentiation-calculator": "implicit-differentiation",
};

export function resolveCalculatorKind(
  page: CalculatorPageConfig
): SpecializedCalculatorKind | null {
  if (page.calculatorKind) return page.calculatorKind;
  return SLUG_TO_KIND[page.slug] ?? null;
}
