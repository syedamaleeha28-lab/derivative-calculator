import type { Metadata } from "next";
import { buildPageMetadata, metadataFromEntry, normalizeLang } from "./seo";
import { getPageSeo } from "./page-metadata";

/** Metadata from PAGE_SEO registry (specialty & rule subpages). */
export function generateMetadataForPath(
  langParam: string | undefined,
  path: string
): Metadata {
  const lang = normalizeLang(langParam);
  const seo = getPageSeo(path, lang);
  if (!seo) {
    throw new Error(`Missing PAGE_SEO entry for path: ${path}`);
  }
  return buildPageMetadata({ lang, path, ...seo });
}
