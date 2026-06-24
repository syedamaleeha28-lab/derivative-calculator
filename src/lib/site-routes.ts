import type { MetadataRoute } from "next";
import { BLOG_POST_ENTRIES } from "./blog-posts";
import { isMigratedBlogSlug } from "./blog-migrations";
import { EN_ARTICLE_ENTRIES } from "./en-articles";
import { EN_INDEXABLE_CALCULATOR_PAGES } from "./en-pages";
import { ES_PAGE_LIST } from "./es-pages";
import { ES_AUTHORITY_ROUTE_LIST } from "./es-authority-routes";
import { ES_COMMON_FUNCTION_ROUTE_LIST } from "./common-derivative-functions/routes";
import { EN_ROUTES } from "./en-routes";
import { getHreflangAlternates } from "./locale";
import { absoluteUrl } from "./seo";

export const NON_INDEXABLE_PREFIXES = ["/api/", "/_next/"];

/** Blog slugs for sitemap — synced from blog-posts registry. */
export const BLOG_POSTS: { slug: string; lastModified?: string }[] = BLOG_POST_ENTRIES.filter(
  (p) => !isMigratedBlogSlug(p.slug)
).map((p) => ({ slug: p.slug, lastModified: p.dateIso }));

export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
  priority: number;
  lastModified?: string;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/como-funciona", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.85 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.25 },
  { path: "/acerca-de", changeFrequency: "yearly", priority: 0.4 },
  { path: "/contacto", changeFrequency: "yearly", priority: 0.4 },
  { path: "/extension-cromo-formulas-matematicas", changeFrequency: "monthly", priority: 0.75 },
  ...ES_AUTHORITY_ROUTE_LIST.map((path) => ({
    path,
    changeFrequency: "weekly" as const,
    priority:
      path === "/reglas-de-derivacion" || path === "/derivadas-de-funciones-comunes"
        ? 0.95
        : 0.9,
  })),
  ...ES_COMMON_FUNCTION_ROUTE_LIST.map((path) => ({
    path,
    changeFrequency: "weekly" as const,
    priority: 0.88,
  })),
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

export const EN_ARTICLE_SITEMAP_ROUTES: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
  priority: number;
  lastModified?: string;
}[] = EN_ARTICLE_ENTRIES.map((article) => ({
  path: `/en/${article.slug}`,
  changeFrequency: "monthly" as const,
  priority: 0.8,
  lastModified: article.dateIso,
}));

export const EN_CALCULATOR_SITEMAP_ROUTES: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
  priority: number;
}[] = EN_INDEXABLE_CALCULATOR_PAGES.map((page) => ({
  path: page.path,
  changeFrequency: "weekly" as const,
  priority: 0.86,
}));

export const EN_SITEMAP_ROUTES: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
  priority: number;
}[] = [
  { path: EN_ROUTES.home, changeFrequency: "weekly", priority: 0.95 },
  { path: EN_ROUTES.blog, changeFrequency: "weekly", priority: 0.85 },
  ...EN_CALCULATOR_SITEMAP_ROUTES,
  ...EN_ARTICLE_SITEMAP_ROUTES.map(({ path, changeFrequency, priority }) => ({
    path,
    changeFrequency,
    priority,
  })),
];

function sitemapLanguageAlternates(path: string): Record<string, string> {
  const alts = getHreflangAlternates(path);
  return Object.fromEntries(
    Object.entries(alts).map(([lang, altPath]) => [lang, absoluteUrl(altPath)])
  );
}

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();
  const now = new Date();

  const pushEntry = (entry: MetadataRoute.Sitemap[number]) => {
    if (seen.has(entry.url)) return;
    seen.add(entry.url);
    entries.push(entry);
  };

  for (const route of SITEMAP_ROUTES) {
    pushEntry({
      url: absoluteUrl(route.path),
      lastModified: route.lastModified ? new Date(route.lastModified) : now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: sitemapLanguageAlternates(route.path) },
    });
  }

  for (const route of ES_CALCULATOR_SITEMAP_ROUTES) {
    pushEntry({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: sitemapLanguageAlternates(route.path) },
    });
  }

  for (const route of EN_SITEMAP_ROUTES) {
    const article = EN_ARTICLE_SITEMAP_ROUTES.find((a) => a.path === route.path);
    pushEntry({
      url: absoluteUrl(route.path),
      lastModified: article?.lastModified ? new Date(article.lastModified) : now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: sitemapLanguageAlternates(route.path) },
    });
  }

  for (const post of BLOG_POSTS) {
    pushEntry({
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
  for (const route of EN_ARTICLE_SITEMAP_ROUTES) {
    if (!paths.includes(route.path)) paths.push(route.path);
  }
  for (const post of BLOG_POSTS) {
    paths.push(`/blog/${post.slug}`);
  }
  return paths.sort();
}

export { EN_INDEXABLE_CALCULATOR_PAGES };
