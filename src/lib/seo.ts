import type { Metadata } from "next";

/** Canonical production origin (include www). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://www.calculadora-derivadas.org"
).replace(/\/$/, "");

export const SITE_NAME = "Calculadora Derivadas";

/** Absolute canonical URL for a page. */
export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return SITE_URL;
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
  } = input;

  const canonical = absoluteUrl(path);
  const ogTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const ogImages = ogImage
    ? [{ url: ogImage, width: 1200, height: 630, alt: title }]
    : undefined;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "es_ES",
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
