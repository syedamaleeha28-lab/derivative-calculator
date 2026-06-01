import { ES_CALCULATOR_ROUTES } from "./es-routes";
import { ROUTES } from "./routes";

export type EsNavLink = { name: string; href: string };

export type EsNavLinkKey = {
  nameKey: "calculator" | "partialDerivatives" | "chainRule" | "implicitDerivatives";
  href: string;
};

/** Resolved at render time via dictionary. */
export const ES_PRIMARY_NAV_KEYS: EsNavLinkKey[] = [
  { nameKey: "calculator", href: ROUTES.home },
  { nameKey: "partialDerivatives", href: ES_CALCULATOR_ROUTES.partialDerivatives },
  { nameKey: "chainRule", href: ES_CALCULATOR_ROUTES.chainRule },
  { nameKey: "implicitDerivatives", href: ES_CALCULATOR_ROUTES.implicitDerivatives },
];

export const ES_GUIDES_NAV: EsNavLink[] = [
  { name: "Reglas de derivación", href: ROUTES.reglas },
  { name: "Cómo funciona", href: ROUTES.comoFunciona },
  { name: "Derivada de sin(x)", href: "/blog/derivada-de-sin-x" },
  { name: "Derivada de cos(x)", href: "/blog/derivada-de-cos-x" },
  { name: "Derivada de tan(x)", href: "/blog/derivada-de-tan-x" },
  { name: "Cómo derivar fracciones", href: "/blog/como-derivar-fracciones" },
  { name: "Derivadas parciales (ejemplos)", href: "/blog/derivadas-parciales-ejemplos" },
  { name: "Derivadas implícitas", href: "/blog/derivadas-implicitas-paso-a-paso" },
];

export const ES_EXAMPLES_NAV_KEY = { nameKey: "examples" as const, href: ROUTES.ejemplos };
export const ES_BLOG_NAV_KEY = { nameKey: "blog" as const, href: ROUTES.blog };

export function isEsGuidePath(pathname: string): boolean {
  return ES_GUIDES_NAV.some(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`)
  );
}
