import type { MetadataRoute } from "next";
import type { Lang } from "./dictionary-types";
import {
  EDUCATIONAL_DERIVATIVE_PAGES,
  educationalPagePath,
} from "./educational-derivative-pages";
import { absoluteUrl, hreflangAlternates } from "./seo";
import { getLocalizedPathsRecord } from "./routes";

function sitemapEntry(
  id: string,
  internalPath: string,
  changeFrequency: SitemapRouteConfig["changeFrequency"],
  priority: number,
  lastModified?: string
): SitemapRouteConfig {
  return {
    id,
    paths: getLocalizedPathsRecord(internalPath),
    changeFrequency,
    priority,
    lastModified,
  };
}

const RULE_SUBPAGE_SLUGS = [
  "regla-de-la-potencia",
  "regla-de-la-cadena",
  "regla-del-producto",
  "regla-del-cociente",
  "derivadas-trigonometricas",
] as const;

export const SITEMAP_LANGS: Lang[] = ["es", "en", "pt"];

/** Routes excluded from indexing (admin, system, assets). */
export const NON_INDEXABLE_PREFIXES = ["/api/", "/_next/", "/icon", "/favicon"];

export type SitemapRouteConfig = {
  /** Stable key for grouping hreflang alternates */
  id: string;
  /** Per-locale pathname (no domain, leading slash) */
  paths: Record<Lang, string>;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
  priority: number;
  lastModified?: string;
};

/** Blog posts with locale-specific slugs. */
export const BLOG_POSTS: {
  id: string;
  slugs: Record<Lang, string>;
  lastModified?: string;
}[] = [
  {
    id: "como-aprender-derivadas-desde-cero",
    slugs: {
      es: "como-aprender-derivadas-desde-cero",
      en: "how-to-learn-derivatives-from-scratch",
      pt: "como-aprender-derivadas-do-zero",
    },
    lastModified: "2026-05-10",
  },
  {
    id: "errores-comunes-al-derivar",
    slugs: {
      es: "errores-comunes-al-derivar",
      en: "common-mistakes-when-differentiating",
      pt: "erros-comuns-ao-derivar",
    },
    lastModified: "2026-05-08",
  },
  {
    id: "entendiendo-regla-de-la-cadena",
    slugs: {
      es: "entendiendo-regla-de-la-cadena",
      en: "understanding-the-chain-rule",
      pt: "entendendo-regra-da-cadeia",
    },
    lastModified: "2026-05-05",
  },
];

/** Core + legal + educational pages for sitemap and hreflang. */
export const SITEMAP_ROUTES: SitemapRouteConfig[] = [
  {
    id: "home",
    paths: { es: "/", en: "/", pt: "/" },
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    id: "how-it-works",
    paths: { es: "/como-funciona", en: "/how-it-works", pt: "/como-funciona" },
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    id: "examples",
    paths: { es: "/ejemplos", en: "/examples", pt: "/exemplos" },
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    id: "rules",
    paths: { es: "/reglas", en: "/rules", pt: "/regras" },
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    id: "blog",
    paths: { es: "/blog", en: "/blog", pt: "/blog" },
    changeFrequency: "weekly",
    priority: 0.8,
  },
  sitemapEntry("privacy", "/privacy-policy", "yearly", 0.3),
  sitemapEntry("terms", "/terms", "yearly", 0.3),
  sitemapEntry("disclaimer", "/disclaimer", "yearly", 0.25),
  sitemapEntry("about", "/about", "yearly", 0.4),
  sitemapEntry("contact", "/contact", "yearly", 0.4),
  sitemapEntry("how-to-use-calculator", "/how-to-use-derivative-calculator", "monthly", 0.9),
  sitemapEntry("what-is-derivative", "/what-is-a-derivative", "monthly", 0.9),
  sitemapEntry("basic-formulas", "/basic-derivative-formulas", "monthly", 0.9),
  sitemapEntry("partial-derivatives", "/partial-derivatives", "monthly", 0.85),
  ...EDUCATIONAL_DERIVATIVE_PAGES.map((page) => ({
    id: `derivative-${page.slug}`,
    paths: {
      es: educationalPagePath(page.slug),
      en: educationalPagePath(page.slug),
      pt: educationalPagePath(page.slug),
    } as Record<Lang, string>,
    changeFrequency: "monthly" as const,
    priority: 0.88,
  })),
  ...RULE_SUBPAGE_SLUGS.map((slug) =>
    sitemapEntry(`rule-${slug}`, `/rules/${slug}`, "monthly", 0.85)
  ),
  sitemapEntry("derivadas-funciones", "/derivatives-of-functions", "monthly", 0.8),
  sitemapEntry("derivadas-varias", "/multivariable-derivatives", "monthly", 0.75),
  sitemapEntry("derivadas-exponenciales", "/exponential-derivatives", "monthly", 0.8),
  sitemapEntry("derivadas-logaritmicas", "/logarithmic-derivatives", "monthly", 0.8),
  sitemapEntry("derivadas-definicion", "/derivative-by-definition", "monthly", 0.8),
  sitemapEntry("segundas-derivadas", "/second-derivative-calculator", "monthly", 0.85),
  sitemapEntry("implicitas", "/implicit-derivative-calculator", "monthly", 0.85),
  sitemapEntry("trigonometricas", "/trigonometric-derivative-calculator", "monthly", 0.85),
];

/** @deprecated Use SITEMAP_ROUTES — kept for any legacy imports */
export const STATIC_ROUTES = SITEMAP_ROUTES.filter(
  (r) => !r.id.startsWith("derivative-") && !["privacy", "terms", "disclaimer", "about", "contact"].includes(r.id)
).map((r) => ({
  path: r.paths.es,
  changeFrequency: r.changeFrequency,
  priority: r.priority,
}));

function alternatesForPaths(paths: Record<Lang, string>): { languages: Record<string, string> } {
  return {
    languages: hreflangAlternates(paths.es, paths),
  };
}

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const route of SITEMAP_ROUTES) {
    for (const lang of SITEMAP_LANGS) {
      entries.push({
        url: absoluteUrl(lang, route.paths[lang]),
        lastModified: route.lastModified ? new Date(route.lastModified) : now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: alternatesForPaths(route.paths),
      });
    }
  }

  for (const post of BLOG_POSTS) {
    const paths: Record<Lang, string> = {
      es: `/blog/${post.slugs.es}`,
      en: `/blog/${post.slugs.en}`,
      pt: `/blog/${post.slugs.pt}`,
    };
    for (const lang of SITEMAP_LANGS) {
      entries.push({
        url: absoluteUrl(lang, paths[lang]),
        lastModified: post.lastModified ? new Date(post.lastModified) : now,
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: alternatesForPaths(paths),
      });
    }
  }

  return entries;
}

/** All logical paths that should be indexable (for validation / tests). */
export function getAllIndexablePaths(): string[] {
  const paths = new Set<string>();
  for (const route of SITEMAP_ROUTES) {
    for (const lang of SITEMAP_LANGS) {
      paths.add(route.paths[lang]);
    }
  }
  for (const post of BLOG_POSTS) {
    for (const lang of SITEMAP_LANGS) {
      paths.add(`/blog/${post.slugs[lang]}`);
    }
  }
  return [...paths].sort();
}
