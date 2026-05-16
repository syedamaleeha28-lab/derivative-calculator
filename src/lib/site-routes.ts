import type { MetadataRoute } from "next";
import type { Lang } from "./dictionary-types";
import {
  EDUCATIONAL_DERIVATIVE_PAGES,
  educationalPagePath,
} from "./educational-derivative-pages";
import { absoluteUrl, hreflangAlternates } from "./seo";

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
    paths: { es: "/how-it-works", en: "/how-it-works", pt: "/how-it-works" },
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    id: "examples",
    paths: { es: "/derivative-examples", en: "/derivative-examples", pt: "/derivative-examples" },
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    id: "rules",
    paths: { es: "/reglas", en: "/reglas", pt: "/reglas" },
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    id: "blog",
    paths: { es: "/blog", en: "/blog", pt: "/blog" },
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    id: "privacy",
    paths: {
      es: "/politica-de-privacidad",
      en: "/privacy-policy",
      pt: "/politica-de-privacidad",
    },
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    id: "terms",
    paths: {
      es: "/terminos-de-servicio",
      en: "/terms",
      pt: "/terminos-de-servicio",
    },
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    id: "disclaimer",
    paths: { es: "/disclaimer", en: "/disclaimer", pt: "/disclaimer" },
    changeFrequency: "yearly",
    priority: 0.25,
  },
  {
    id: "about",
    paths: { es: "/about", en: "/about", pt: "/about" },
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    id: "contact",
    paths: { es: "/contact", en: "/contact", pt: "/contact" },
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    id: "how-to-use-calculator",
    paths: {
      es: "/how-to-use-derivative-calculator",
      en: "/how-to-use-derivative-calculator",
      pt: "/how-to-use-derivative-calculator",
    },
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    id: "what-is-derivative",
    paths: { es: "/what-is-a-derivative", en: "/what-is-a-derivative", pt: "/what-is-a-derivative" },
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    id: "basic-formulas",
    paths: {
      es: "/basic-derivative-formulas",
      en: "/basic-derivative-formulas",
      pt: "/basic-derivative-formulas",
    },
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    id: "partial-derivatives",
    paths: { es: "/partial-derivatives", en: "/partial-derivatives", pt: "/partial-derivatives" },
    changeFrequency: "monthly",
    priority: 0.85,
  },
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
  {
    id: "rule-power",
    paths: {
      es: "/reglas/regla-de-la-potencia",
      en: "/reglas/regla-de-la-potencia",
      pt: "/reglas/regla-de-la-potencia",
    },
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    id: "rule-chain",
    paths: {
      es: "/reglas/regla-de-la-cadena",
      en: "/reglas/regla-de-la-cadena",
      pt: "/reglas/regla-de-la-cadena",
    },
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    id: "rule-product",
    paths: {
      es: "/reglas/regla-del-producto",
      en: "/reglas/regla-del-producto",
      pt: "/reglas/regla-del-producto",
    },
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    id: "rule-quotient",
    paths: {
      es: "/reglas/regla-del-cociente",
      en: "/reglas/regla-del-cociente",
      pt: "/reglas/regla-del-cociente",
    },
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    id: "rule-trig",
    paths: {
      es: "/reglas/derivadas-trigonometricas",
      en: "/reglas/derivadas-trigonometricas",
      pt: "/reglas/derivadas-trigonometricas",
    },
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    id: "derivadas-funciones",
    paths: {
      es: "/derivadas-de-funciones",
      en: "/derivadas-de-funciones",
      pt: "/derivadas-de-funciones",
    },
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    id: "derivadas-varias",
    paths: {
      es: "/derivadas-de-varias-variables",
      en: "/derivadas-de-varias-variables",
      pt: "/derivadas-de-varias-variables",
    },
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    id: "derivadas-exponenciales",
    paths: {
      es: "/derivadas-exponenciales",
      en: "/derivadas-exponenciales",
      pt: "/derivadas-exponenciales",
    },
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    id: "derivadas-logaritmicas",
    paths: {
      es: "/derivadas-logaritmicas",
      en: "/derivadas-logaritmicas",
      pt: "/derivadas-logaritmicas",
    },
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    id: "derivadas-definicion",
    paths: {
      es: "/derivadas-por-definicion",
      en: "/derivadas-por-definicion",
      pt: "/derivadas-por-definicion",
    },
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    id: "segundas-derivadas",
    paths: {
      es: "/calculadora-de-segundas-derivadas",
      en: "/calculadora-de-segundas-derivadas",
      pt: "/calculadora-de-segundas-derivadas",
    },
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    id: "implicitas",
    paths: {
      es: "/calculadora-de-derivadas-implicitas",
      en: "/calculadora-de-derivadas-implicitas",
      pt: "/calculadora-de-derivadas-implicitas",
    },
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    id: "trigonometricas",
    paths: {
      es: "/calculadora-de-derivadas-trigonometricas",
      en: "/calculadora-de-derivadas-trigonometricas",
      pt: "/calculadora-de-derivadas-trigonometricas",
    },
    changeFrequency: "monthly",
    priority: 0.85,
  },
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
