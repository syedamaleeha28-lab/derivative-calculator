import { ES_CALCULATOR_ROUTES } from "./es-routes";

/** Canonical Spanish public routes (single source of truth for navigation). */
export const ROUTES = {
  home: "/",
  comoFunciona: "/como-funciona",
  ejemplos: "/ejemplos",
  reglas: "/reglas",
  blog: "/blog",
  contacto: "/contacto",
  acercaDe: "/acerca-de",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  disclaimer: "/disclaimer",
  extensionCromoFormulas: "/extension-cromo-formulas-matematicas",
} as const;

/** Primary Spanish calculator anchor on the homepage. */
export const ES_MAIN_CALCULATOR_HREF = `${ROUTES.home}#calculator` as const;

/** @deprecated Primary nav uses es-navigation.ts */
export const NAV_LINKS = [
  { nameKey: "calculator" as const, href: ROUTES.home },
  { nameKey: "partialDerivatives" as const, href: ES_CALCULATOR_ROUTES.partialDerivatives },
  { nameKey: "chainRule" as const, href: ES_CALCULATOR_ROUTES.chainRule },
  { nameKey: "implicitDerivatives" as const, href: ES_CALCULATOR_ROUTES.implicitDerivatives },
  { nameKey: "examples" as const, href: ROUTES.ejemplos },
  { nameKey: "blog" as const, href: ROUTES.blog },
] as const;
