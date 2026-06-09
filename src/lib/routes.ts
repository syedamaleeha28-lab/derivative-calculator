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
