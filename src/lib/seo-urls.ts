import type { Lang } from "./dictionary-types";
import { SITE_URL } from "./seo";

/** Client-safe absolute URL builder for JSON-LD and breadcrumbs. */
export function getAbsoluteUrl(lang: Lang, href: string): string {
  if (href.startsWith("http")) return href;
  if (href.startsWith("#")) {
    const base = lang === "es" ? SITE_URL : `${SITE_URL}/${lang}`;
    return `${base}${href}`;
  }
  const prefix = lang === "es" ? "" : `/${lang}`;
  if (href === "/") return SITE_URL;
  return `${SITE_URL}${prefix}${href}`;
}
