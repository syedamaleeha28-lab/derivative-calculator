import type { Lang } from "./dictionary-types";

/** Internal (canonical) path → localized public path per language. */
export const LOCALIZED_ROUTES: Record<string, Record<Lang, string>> = {
  "/": { en: "/", es: "/", pt: "/" },

  "/rules": { en: "/rules", es: "/reglas", pt: "/regras" },
  "/examples": { en: "/examples", es: "/ejemplos", pt: "/exemplos" },
  "/how-it-works": { en: "/how-it-works", es: "/como-funciona", pt: "/como-funciona" },
  "/blog": { en: "/blog", es: "/blog", pt: "/blog" },

  "/about": { en: "/about", es: "/acerca-de", pt: "/sobre" },
  "/contact": { en: "/contact", es: "/contacto", pt: "/contato" },
  "/disclaimer": { en: "/disclaimer", es: "/aviso-legal", pt: "/aviso-legal" },
  "/privacy-policy": {
    en: "/privacy-policy",
    es: "/politica-de-privacidad",
    pt: "/politica-de-privacidade",
  },
  "/terms": { en: "/terms", es: "/terminos-de-servicio", pt: "/termos-de-servico" },

  "/basic-derivative-formulas": {
    en: "/basic-derivative-formulas",
    es: "/formulas-basicas-de-derivacion",
    pt: "/formulas-basicas-de-derivacao",
  },
  "/how-to-use-derivative-calculator": {
    en: "/how-to-use-derivative-calculator",
    es: "/como-usar-calculadora-de-derivadas",
    pt: "/como-usar-calculadora-de-derivadas",
  },
  "/partial-derivatives": {
    en: "/partial-derivatives",
    es: "/derivadas-parciales",
    pt: "/derivadas-parciais",
  },
  "/what-is-a-derivative": {
    en: "/what-is-a-derivative",
    es: "/que-es-una-derivada",
    pt: "/o-que-e-uma-derivada",
  },

  "/implicit-derivative-calculator": {
    en: "/implicit-derivative-calculator",
    es: "/calculadora-de-derivadas-implicitas",
    pt: "/calculadora-de-derivadas-implicitas",
  },
  "/trigonometric-derivative-calculator": {
    en: "/trigonometric-derivative-calculator",
    es: "/calculadora-de-derivadas-trigonometricas",
    pt: "/calculadora-de-derivadas-trigonometricas",
  },
  "/second-derivative-calculator": {
    en: "/second-derivative-calculator",
    es: "/calculadora-de-segundas-derivadas",
    pt: "/calculadora-de-segundas-derivadas",
  },

  "/derivatives-of-functions": {
    en: "/derivatives-of-functions",
    es: "/derivadas-de-funciones",
    pt: "/derivadas-de-funcoes",
  },
  "/multivariable-derivatives": {
    en: "/multivariable-derivatives",
    es: "/derivadas-de-varias-variables",
    pt: "/derivadas-de-varias-variaveis",
  },
  "/exponential-derivatives": {
    en: "/exponential-derivatives",
    es: "/derivadas-exponenciales",
    pt: "/derivadas-exponenciais",
  },
  "/logarithmic-derivatives": {
    en: "/logarithmic-derivatives",
    es: "/derivadas-logaritmicas",
    pt: "/derivadas-logaritmicas",
  },
  "/derivative-by-definition": {
    en: "/derivative-by-definition",
    es: "/derivadas-por-definicion",
    pt: "/derivadas-por-definicao",
  },
};

/** Old public paths → internal paths (unprefixed legacy URLs). */
export const LEGACY_PATH_ALIASES: Record<string, string> = {
  "/derivative-examples": "/examples",
  "/como-funciona": "/how-it-works",
  "/ejemplos": "/examples",
  "/reglas": "/rules",
  "/regras": "/rules",
  "/acerca-de": "/about",
  "/sobre": "/about",
  "/contacto": "/contact",
  "/contato": "/contact",
  "/aviso-legal": "/disclaimer",
  "/politica-de-privacidad": "/privacy-policy",
  "/politica-de-privacidade": "/privacy-policy",
  "/terminos-de-servicio": "/terms",
  "/termos-de-servico": "/terms",
  "/formulas-basicas-de-derivacion": "/basic-derivative-formulas",
  "/formulas-basicas-de-derivacao": "/basic-derivative-formulas",
  "/como-usar-calculadora-de-derivadas": "/how-to-use-derivative-calculator",
  "/derivadas-parciales": "/partial-derivatives",
  "/derivadas-parciais": "/partial-derivatives",
  "/que-es-una-derivada": "/what-is-a-derivative",
  "/o-que-e-uma-derivada": "/what-is-a-derivative",
  "/calculadora-de-derivadas-implicitas": "/implicit-derivative-calculator",
  "/calculadora-de-derivadas-trigonometricas": "/trigonometric-derivative-calculator",
  "/calculadora-de-segundas-derivadas": "/second-derivative-calculator",
  "/derivadas-de-funciones": "/derivatives-of-functions",
  "/derivadas-de-funcoes": "/derivatives-of-functions",
  "/derivadas-de-varias-variables": "/multivariable-derivatives",
  "/derivadas-de-varias-variaveis": "/multivariable-derivatives",
  "/derivadas-exponenciales": "/exponential-derivatives",
  "/derivadas-exponenciais": "/exponential-derivatives",
  "/derivadas-logaritmicas": "/logarithmic-derivatives",
  "/derivadas-por-definicion": "/derivative-by-definition",
  "/derivadas-por-definicao": "/derivative-by-definition",
};

const INTERNAL_PATHS = new Set(Object.keys(LOCALIZED_ROUTES));

/** Resolve any localized or legacy path to the canonical internal path. */
export function resolveToInternalPath(path: string): string {
  const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const legacy = LEGACY_PATH_ALIASES[normalized];
  if (legacy) return legacy;

  if (INTERNAL_PATHS.has(normalized)) return normalized;

  for (const [internal, locales] of Object.entries(LOCALIZED_ROUTES)) {
    if (normalized === internal) return internal;
    if (internal !== "/" && normalized.startsWith(internal + "/")) {
      return normalized;
    }
    for (const locPath of Object.values(locales)) {
      if (locPath === "/") continue;
      if (normalized === locPath) return internal;
      if (normalized.startsWith(locPath + "/")) {
        return internal + normalized.slice(locPath.length);
      }
    }
  }

  return normalized;
}

/** Localized public path for an internal path and language. */
export function getLocalizedPath(internalPath: string, lang: Lang): string {
  const internal = resolveToInternalPath(internalPath);

  if (LOCALIZED_ROUTES[internal]) {
    return LOCALIZED_ROUTES[internal][lang];
  }

  for (const [base, locales] of Object.entries(LOCALIZED_ROUTES)) {
    if (base === "/") continue;
    if (internal.startsWith(base + "/")) {
      const remainder = internal.slice(base.length);
      return locales[lang] + remainder;
    }
  }

  return internal;
}

/** @deprecated Prefer resolveToInternalPath — kept for middleware. */
export function getInternalPath(localizedPath: string, _lang?: Lang): string {
  return resolveToInternalPath(localizedPath);
}

/** Per-locale paths for SEO hreflang (internal path → localized paths). */
export function getLocalizedPathsRecord(internalPath: string): Record<Lang, string> {
  const internal = resolveToInternalPath(internalPath);
  const langs: Lang[] = ["es", "en", "pt"];
  const record = {} as Record<Lang, string>;
  for (const lang of langs) {
    record[lang] = getLocalizedPath(internal, lang);
  }
  return record;
}

/** If path uses wrong slug for locale, return the correct localized path; else null. */
export function getCorrectLocalizedPath(path: string, currentLang: Lang): string | null {
  const internal = resolveToInternalPath(path);
  const expected = getLocalizedPath(internal, currentLang);
  if (path === expected || path.startsWith(expected + "/")) return null;

  for (const [base] of Object.entries(LOCALIZED_ROUTES)) {
    if (base === "/") continue;
    if (internal === base || internal.startsWith(base + "/")) {
      const suffix = internal.slice(base.length);
      const correct = getLocalizedPath(base, currentLang) + suffix;
      if (path !== correct && !path.startsWith(correct + "/")) return correct;
      return null;
    }
  }

  return path !== expected ? expected : null;
}
