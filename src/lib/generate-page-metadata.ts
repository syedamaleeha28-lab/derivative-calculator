import type { Metadata } from "next";
import { buildPageMetadata, normalizeLang } from "./seo";
import { getLocalizedPathsRecord, resolveToInternalPath } from "./routes";
import { getPageSeo, PAGE_SEO_PATH_ALIASES } from "./page-metadata";

/** Metadata from PAGE_SEO registry (specialty & rule subpages). */
export function generateMetadataForPath(
  langParam: string | undefined,
  path: string
): Metadata {
  const lang = normalizeLang(langParam);
  const internalPath = resolveToInternalPath(PAGE_SEO_PATH_ALIASES[path] ?? path);
  const seo = getPageSeo(internalPath, lang);
  if (!seo) {
    throw new Error(`Missing PAGE_SEO entry for path: ${internalPath}`);
  }
  return buildPageMetadata({
    lang,
    path: internalPath,
    ...seo,
    localizedPaths: getLocalizedPathsRecord(internalPath),
  });
}
