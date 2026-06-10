import type { Metadata } from "next";
import { getHreflangAlternates } from "./locale";

/** Canonical production origin (www). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://www.calculadora-derivadas.org"
).replace(/\/$/, "");

export const SITE_NAME = "Calculadora Derivadas";

/** Default Open Graph image (absolute path under /public). */
export const DEFAULT_OG_IMAGE = "/images/interfaz-calculadora-matematica.webp";

/** Absolute canonical URL for a page. */
export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${clean}`;
}

export type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
  ogImage?: string;
  /** Open Graph locale override (defaults to es_ES). */
  ogLocale?: string;
  /** When false, skip automatic hreflang alternates. */
  hreflang?: boolean;
  /** Manual hreflang map (path → locale code). Overrides auto-detection when set. */
  alternateLanguages?: Record<string, string>;
  /** When true, use the title as-is (no root layout template suffix). */
  absoluteTitle?: boolean;
};

/** Build Next.js Metadata with canonical, Open Graph, and Twitter cards. */
export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const {
    path,
    title,
    description,
    keywords,
    ogType = "website",
    noindex = false,
    publishedTime,
    ogImage,
    ogLocale = "es_ES",
    hreflang = true,
    alternateLanguages,
    absoluteTitle = false,
  } = input;

  const canonical = absoluteUrl(path);
  const isEnglish = ogLocale === "en_US";
  const ogTitle =
    absoluteTitle || isEnglish
      ? title
      : title.includes(SITE_NAME)
        ? title
        : `${title} | ${SITE_NAME}`;
  const resolvedOgImage = ogImage ?? absoluteUrl(DEFAULT_OG_IMAGE);
  const ogImages = [
    {
      url: resolvedOgImage.startsWith("http") ? resolvedOgImage : absoluteUrl(resolvedOgImage),
      width: 1200,
      height: 630,
      alt: title,
    },
  ];

  const languageAlternates = hreflang
  ? Object.fromEntries(
      Object.entries(alternateLanguages ?? getHreflangAlternates(path)).map(
        ([lang, altPath]) => [lang, absoluteUrl(altPath)]
      )
    )
  : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
      ...(languageAlternates ? { languages: languageAlternates } : {}),
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: ogLocale,
      type: ogType,
      ...(ogImages ? { images: ogImages } : {}),
      ...(publishedTime && ogType === "article" ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...(ogImages ? { images: [ogImages[0].url] } : {}),
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function metadataFromEntry(
  path: string,
  entry: { title: string; description: string; keywords?: string },
  options?: Partial<Omit<PageMetadataInput, "path" | "title" | "description" | "keywords">>
): Metadata {
  return buildPageMetadata({
    path,
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    ...options,
  });
}
