export type LegalPageId = "privacy" | "terms" | "disclaimer" | "about" | "contact";

/** Canonical Spanish public paths. */
export const LEGAL_PATHS: Record<LegalPageId, string> = {
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  disclaimer: "/disclaimer",
  about: "/acerca-de",
  contact: "/contacto",
};

export function getLegalPath(page: LegalPageId): string {
  return LEGAL_PATHS[page];
}

export const FOOTER_LEGAL_PAGES: LegalPageId[] = [
  "about",
  "contact",
  "privacy",
  "terms",
  "disclaimer",
];
