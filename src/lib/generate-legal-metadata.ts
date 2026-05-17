import type { Metadata } from "next";
import { buildPageMetadata } from "./seo";
import { getLegalPageContent, type LegalPageKey } from "./legal-pages";
import { LEGAL_PATHS, type LegalPageId } from "./legal-routes";

const PAGE_KEY_MAP: Record<LegalPageId, LegalPageKey> = {
  privacy: "privacy",
  terms: "terms",
  disclaimer: "disclaimer",
  about: "about",
  contact: "contact",
};

export function generateLegalMetadata(pageId: LegalPageId): Metadata {
  const content = getLegalPageContent(PAGE_KEY_MAP[pageId]);
  const path = LEGAL_PATHS[pageId];

  return buildPageMetadata({
    path,
    title: content.title,
    description: content.subtitle,
  });
}
