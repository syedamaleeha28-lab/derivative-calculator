import type { MetadataRoute } from "next";
import { BLOG_POST_ENTRIES } from "./blog-posts";
import { EN_PAGE_LIST } from "./en-pages";
import { ES_PAGE_LIST } from "./es-pages";
import { EN_ROUTES } from "./en-routes";
import { getHreflangAlternates } from "./locale";
import { absoluteUrl } from "./seo";

export const NON_INDEXABLE_PREFIXES = ["/api/", "/_next/", "/icon", "/favicon"];

/** Blog slugs for sitemap — synced from blog-posts registry. */
export const BLOG_POSTS: { slug: string; lastModified?: string }[] = BLOG_POST_ENTRIES.map(
  (p) => ({ slug: p.slug, lastModified: p.dateIso })
);

export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
  priority: number;
  lastModified?: string;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/como-funciona", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ejemplos", changeFrequency: "weekly", priority: 0.9 },
  { path: "/reglas", changeFrequency: "weekly", priority: 0.95 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.85 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.25 },
  { path: "/acerca-de", changeFrequency: "yearly", priority: 0.4 },
  { path: "/contacto", changeFrequency: "yearly", priority: 0.4 },
];

export const ES_CALCULATOR_SITEMAP_ROUTES: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
  priority: number;
}[] = ES_PAGE_LIST.map((page) => ({
  path: page.path,
  changeFrequency: "weekly" as const,
  priority: 0.92,
}));

export const EN_SITEMAP_ROUTES: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
  priority: number;
}[] = [
  { path: EN_ROUTES.home, changeFrequency: "weekly", priority: 0.95 },
  { path: EN_ROUTES.derivativeCalculator, changeFrequency: "weekly", priority: 0.9 },
  { path: EN_ROUTES.partialDerivativeCalculator, changeFrequency: "weekly", priority: 0.88 },
  { path: EN_ROUTES.implicitDifferentiationCalculator, changeFrequency: "weekly", priority: 0.88 },
  { path: EN_ROUTES.secondDerivativeCalculator, changeFrequency: "weekly", priority: 0.86 },
  { path: EN_ROUTES.chainRuleCalculator, changeFrequency: "weekly", priority: 0.88 },
];

function sitemapLanguageAlternates(path: string): Record<string, string> {
  const alts = getHreflangAlternates(path);
  return Object.fromEntries(
    Object.entries(alts).map(([lang, altPath]) => [lang, absoluteUrl(altPath)])
  );
}

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const route of SITEMAP_ROUTES) {
    entries.push({
      url: absoluteUrl(route.path),
      lastModified: route.lastModified ? new Date(route.lastModified) : now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: sitemapLanguageAlternates(route.path) },
    });
  }

  for (const route of ES_CALCULATOR_SITEMAP_ROUTES) {
    entries.push({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: sitemapLanguageAlternates(route.path) },
    });
  }

  for (const route of EN_SITEMAP_ROUTES) {
    entries.push({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: sitemapLanguageAlternates(route.path) },
    });
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.lastModified ? new Date(post.lastModified) : now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: sitemapLanguageAlternates(`/blog/${post.slug}`) },
    });
  }

  return entries;
}

export function getAllIndexablePaths(): string[] {
  const paths = SITEMAP_ROUTES.map((r) => r.path);
  for (const route of ES_CALCULATOR_SITEMAP_ROUTES) {
    paths.push(route.path);
  }
  for (const route of EN_SITEMAP_ROUTES) {
    paths.push(route.path);
  }
  for (const post of BLOG_POSTS) {
    paths.push(`/blog/${post.slug}`);
  }
  return paths.sort();
}

export { EN_PAGE_LIST };
