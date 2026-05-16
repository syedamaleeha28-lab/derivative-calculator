import type { Lang } from "./dictionary-types";

export type LegalPageId = "privacy" | "terms" | "disclaimer" | "about" | "contact";

/** Canonical public paths per locale (Spanish uses unprefixed URLs). */
export const LEGAL_PATHS: Record<LegalPageId, Record<Lang, string>> = {
  privacy: {
    es: "/politica-de-privacidad",
    en: "/privacy-policy",
    pt: "/politica-de-privacidad",
  },
  terms: {
    es: "/terminos-de-servicio",
    en: "/terms",
    pt: "/terminos-de-servicio",
  },
  disclaimer: {
    es: "/disclaimer",
    en: "/disclaimer",
    pt: "/disclaimer",
  },
  about: {
    es: "/about",
    en: "/about",
    pt: "/about",
  },
  contact: {
    es: "/contact",
    en: "/contact",
    pt: "/contact",
  },
};

export function getLegalPath(page: LegalPageId, lang: Lang): string {
  return LEGAL_PATHS[page][lang];
}

/** Footer link order for trust / legal navigation. */
export const FOOTER_LEGAL_PAGES: LegalPageId[] = [
  "about",
  "contact",
  "privacy",
  "terms",
  "disclaimer",
];
