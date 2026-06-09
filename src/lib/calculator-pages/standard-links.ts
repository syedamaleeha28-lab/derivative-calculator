import { ES_CALCULATOR_ROUTES } from "../es-routes";
import { EN_ROUTES } from "../en-routes";
import { ROUTES } from "../routes";

/** Required cluster links on every calculator landing (Spanish). */
export const ES_STANDARD_CALCULATOR_LINKS = [
  { label: "Calculadora de derivadas", href: ROUTES.home },
  { label: "Calculadora de derivadas parciales", href: ES_CALCULATOR_ROUTES.partialDerivatives },
  { label: "Calculadora regla de la cadena", href: ES_CALCULATOR_ROUTES.chainRule },
  { label: "Calculadora derivadas implícitas", href: ES_CALCULATOR_ROUTES.implicitDerivatives },
] as const;

/** Required cluster links on every calculator landing (English). */
export const EN_STANDARD_CALCULATOR_LINKS_INTERNAL = [
  { label: "Derivative calculator", href: EN_ROUTES.home },
  { label: "Partial derivative calculator", href: EN_ROUTES.partialDerivativeCalculator },
  { label: "Chain rule calculator", href: EN_ROUTES.chainRuleCalculator },
  { label: "Implicit differentiation calculator", href: EN_ROUTES.implicitDifferentiationCalculator },
] as const;

export function esStandardInternalLinks(): { label: string; href: string }[] {
  return [...ES_STANDARD_CALCULATOR_LINKS];
}

export function enStandardInternalLinks(): { label: string; href: string }[] {
  return [...EN_STANDARD_CALCULATOR_LINKS_INTERNAL];
}
