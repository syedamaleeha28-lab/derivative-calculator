import type { Metadata } from "next";
import type { Lang } from "./dictionary-types";

export const SITE_URL = "https://calculadoraderivadas.app";
export const SITE_NAME = "Calculadora Derivadas";

const OG_LOCALE: Record<Lang, string> = {
  es: "es_ES",
  en: "en_US",
  pt: "pt_BR",
};

const HTML_LANG: Record<Lang, string> = {
  es: "es",
  en: "en",
  pt: "pt",
};

/** Normalize route param to supported locale. */
export function normalizeLang(lang: string | undefined): Lang {
  if (lang === "en" || lang === "pt") return lang;
  return "es";
}

/** Build public path for a locale (Spanish uses no /es prefix). */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "es") return clean === "/" ? "/" : clean;
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

/** Absolute canonical URL for a page. */
export function absoluteUrl(lang: Lang, path: string): string {
  const p = localePath(lang, path);
  if (p === "/") return SITE_URL;
  return `${SITE_URL}${p}`;
}

/** hreflang alternates for a shared logical path across locales. */
export function hreflangAlternates(
  path: string,
  localizedPaths?: Partial<Record<Lang, string>>
): Record<string, string> {
  const langs: Lang[] = ["es", "en", "pt"];
  const map: Record<string, string> = {};

  for (const lang of langs) {
    const localized = localizedPaths?.[lang] ?? path;
    map[HTML_LANG[lang]] = absoluteUrl(lang, localized);
  }
  map["x-default"] = absoluteUrl("es", localizedPaths?.es ?? path);
  return map;
}

export type PageMetadataInput = {
  lang: Lang;
  /** Logical path without locale prefix, e.g. `/reglas` */
  path: string;
  title: string;
  description: string;
  keywords?: string;
  ogType?: "website" | "article";
  /** ISO date string for articles */
  publishedTime?: string;
  noindex?: boolean;
  /** Per-locale pathname overrides (blog slugs, etc.) */
  localizedPaths?: Partial<Record<Lang, string>>;
};

/** Build Next.js Metadata with canonical, hreflang, Open Graph, and Twitter cards. */
export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const {
    lang,
    path,
    title,
    description,
    keywords,
    ogType = "website",
    noindex = false,
    localizedPaths,
    publishedTime,
  } = input;

  const canonical = absoluteUrl(lang, localizedPaths?.[lang] ?? path);
  const ogTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
      languages: hreflangAlternates(path, localizedPaths),
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      type: ogType,
      ...(publishedTime && ogType === "article" ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/** Shorthand when copy lives in dictionaries or PAGE_SEO. */
export function metadataFromEntry(
  lang: Lang,
  path: string,
  entry: { title: string; description: string; keywords?: string },
  options?: Partial<Omit<PageMetadataInput, "lang" | "path" | "title" | "description" | "keywords">>
): Metadata {
  return buildPageMetadata({
    lang,
    path,
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    ...options,
  });
}
