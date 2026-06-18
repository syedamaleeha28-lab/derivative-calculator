import { ES_COMMON_FUNCTION_ROUTES } from "./common-derivative-functions/routes";

/** Blog slugs that now live at top-level authority pages (301 in next.config). */
export const MIGRATED_BLOG_SLUGS = [
  "derivada-de-sin-x",
  "derivada-de-cos-x",
  "derivada-de-tan-x",
] as const;

export type MigratedBlogSlug = (typeof MIGRATED_BLOG_SLUGS)[number];

const MIGRATED_BLOG_TO_ROOT: Record<MigratedBlogSlug, string> = {
  "derivada-de-sin-x": ES_COMMON_FUNCTION_ROUTES.derivadaDeSinX,
  "derivada-de-cos-x": ES_COMMON_FUNCTION_ROUTES.derivadaDeCosX,
  "derivada-de-tan-x": ES_COMMON_FUNCTION_ROUTES.derivadaDeTanX,
};

export function isMigratedBlogSlug(slug: string): slug is MigratedBlogSlug {
  return Object.hasOwn(MIGRATED_BLOG_TO_ROOT, slug);
}

/** Canonical href for a blog slug or absolute path. */
export function resolveBlogOrRootHref(slug: string): string {
  if (slug.startsWith("/")) return slug;
  if (isMigratedBlogSlug(slug)) return MIGRATED_BLOG_TO_ROOT[slug];
  return `/blog/${slug}`;
}
