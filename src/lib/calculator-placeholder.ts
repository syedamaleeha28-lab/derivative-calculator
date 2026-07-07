import type { Locale } from "./locale";

export const CALCULATOR_INPUT_PLACEHOLDER_ES =
  "Ej: sin(x), x^2/(x-1), ln(x). Usa ^ para potencias y * para multiplicar.";

export const CALCULATOR_INPUT_PLACEHOLDER_EN =
  "e.g. sin(x), x^2/(x-1), ln(x). Use ^ for powers and * for multiplication.";

export function calculatorInputPlaceholder(locale: Locale): string {
  return locale === "es" ? CALCULATOR_INPUT_PLACEHOLDER_ES : CALCULATOR_INPUT_PLACEHOLDER_EN;
}
