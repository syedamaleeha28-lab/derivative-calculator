import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

export const NON_INDEXABLE_PREFIXES = ["/api/", "/_next/", "/icon", "/favicon"];

export const BLOG_POSTS: {
  slug: string;
  lastModified?: string;
}[] = [
  { slug: "como-aprender-derivadas-desde-cero", lastModified: "2026-05-10" },
  { slug: "errores-comunes-al-derivar", lastModified: "2026-05-08" },
  { slug: "entendiendo-regla-de-la-cadena", lastModified: "2026-05-05" },
];

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
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.25 },
  { path: "/acerca-de", changeFrequency: "yearly", priority: 0.4 },
  { path: "/contacto", changeFrequency: "yearly", priority: 0.4 },
];

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const route of SITEMAP_ROUTES) {
    entries.push({
      url: absoluteUrl(route.path),
      lastModified: route.lastModified ? new Date(route.lastModified) : now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.lastModified ? new Date(post.lastModified) : now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}

export function getAllIndexablePaths(): string[] {
  const paths = SITEMAP_ROUTES.map((r) => r.path);
  for (const post of BLOG_POSTS) {
    paths.push(`/blog/${post.slug}`);
  }
  return paths.sort();
}
