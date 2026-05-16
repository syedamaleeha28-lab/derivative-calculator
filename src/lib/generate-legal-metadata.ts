import type { Metadata } from "next";
import { buildPageMetadata, normalizeLang } from "./seo";
import { getLegalPageContent, type LegalPageKey } from "./legal-pages";
import { LEGAL_PATHS, type LegalPageId } from "./legal-routes";

const PAGE_KEY_MAP: Record<LegalPageId, LegalPageKey> = {
  privacy: "privacy",
  terms: "terms",
  disclaimer: "disclaimer",
  about: "about",
  contact: "contact",
};

export function generateLegalMetadata(
  langParam: string | undefined,
  pageId: LegalPageId
): Metadata {
  const lang = normalizeLang(langParam);
  const content = getLegalPageContent(lang, PAGE_KEY_MAP[pageId]);
  const path = LEGAL_PATHS[pageId][lang];

  return buildPageMetadata({
    lang,
    path,
    title: content.title,
    description: content.subtitle,
    localizedPaths: LEGAL_PATHS[pageId],
  });
}
