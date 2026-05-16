import type { Lang } from "./dictionary-types";
import { getLocalizedPath, resolveToInternalPath } from "./routes";

export type LegalPageId = "privacy" | "terms" | "disclaimer" | "about" | "contact";

const LEGAL_INTERNAL: Record<LegalPageId, string> = {
  privacy: "/privacy-policy",
  terms: "/terms",
  disclaimer: "/disclaimer",
  about: "/about",
  contact: "/contact",
};

/** Canonical internal path for a legal page. */
export function getLegalInternalPath(page: LegalPageId): string {
  return LEGAL_INTERNAL[page];
}

/** Localized public path (no locale prefix) for footer links and metadata. */
export function getLegalPath(page: LegalPageId, lang: Lang): string {
  return getLocalizedPath(LEGAL_INTERNAL[page], lang);
}

/** @deprecated Use getLegalInternalPath in components with LanguageLink. */
export const LEGAL_PATHS: Record<LegalPageId, Record<Lang, string>> = {
  privacy: {
    es: getLocalizedPath("/privacy-policy", "es"),
    en: getLocalizedPath("/privacy-policy", "en"),
    pt: getLocalizedPath("/privacy-policy", "pt"),
  },
  terms: {
    es: getLocalizedPath("/terms", "es"),
    en: getLocalizedPath("/terms", "en"),
    pt: getLocalizedPath("/terms", "pt"),
  },
  disclaimer: {
    es: getLocalizedPath("/disclaimer", "es"),
    en: getLocalizedPath("/disclaimer", "en"),
    pt: getLocalizedPath("/disclaimer", "pt"),
  },
  about: {
    es: getLocalizedPath("/about", "es"),
    en: getLocalizedPath("/about", "en"),
    pt: getLocalizedPath("/about", "pt"),
  },
  contact: {
    es: getLocalizedPath("/contact", "es"),
    en: getLocalizedPath("/contact", "en"),
    pt: getLocalizedPath("/contact", "pt"),
  },
};

export function resolveLegalPath(path: string): LegalPageId | null {
  const internal = resolveToInternalPath(path);
  for (const [id, internalPath] of Object.entries(LEGAL_INTERNAL)) {
    if (internal === internalPath) return id as LegalPageId;
  }
  return null;
}

/** Footer link order for trust / legal navigation. */
export const FOOTER_LEGAL_PAGES: LegalPageId[] = [
  "about",
  "contact",
  "privacy",
  "terms",
  "disclaimer",
];
