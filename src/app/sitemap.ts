import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/site-routes";

/**
 * Dynamic sitemap with hreflang alternates for es / en / pt.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries();
}

/** Revalidate sitemap periodically in production. */
export const revalidate = 86400;
