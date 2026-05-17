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
} as const;

export const NAV_LINKS = [
  { nameKey: "works" as const, href: ROUTES.comoFunciona },
  { nameKey: "examples" as const, href: ROUTES.ejemplos },
  { nameKey: "rules" as const, href: ROUTES.reglas },
  { nameKey: "blog" as const, href: ROUTES.blog },
];
