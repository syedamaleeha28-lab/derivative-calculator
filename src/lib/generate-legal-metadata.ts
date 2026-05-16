import type { Metadata } from "next";
import { buildPageMetadata, normalizeLang } from "./seo";
import { getLegalPageContent, type LegalPageKey } from "./legal-pages";
import { getLocalizedPathsRecord } from "./routes";
import { getLegalInternalPath, type LegalPageId } from "./legal-routes";

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
  const internalPath = getLegalInternalPath(pageId);

  return buildPageMetadata({
    lang,
    path: internalPath,
    title: content.title,
    description: content.subtitle,
    localizedPaths: getLocalizedPathsRecord(internalPath),
  });
}
