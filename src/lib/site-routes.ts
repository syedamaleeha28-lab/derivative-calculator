import type { MetadataRoute } from "next";
import type { Lang } from "./dictionary-types";
import { absoluteUrl } from "./seo";

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

/** Static routes (same path segment for all locales). */
export const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.9 },
  { path: "/how-to-use-derivative-calculator", changeFrequency: "monthly", priority: 0.9 },
  { path: "/reglas", changeFrequency: "weekly", priority: 0.95 },
  { path: "/reglas/regla-de-la-potencia", changeFrequency: "monthly", priority: 0.85 },
  { path: "/reglas/regla-de-la-cadena", changeFrequency: "monthly", priority: 0.85 },
  { path: "/reglas/regla-del-producto", changeFrequency: "monthly", priority: 0.85 },
  { path: "/reglas/regla-del-cociente", changeFrequency: "monthly", priority: 0.85 },
  { path: "/reglas/derivadas-trigonometricas", changeFrequency: "monthly", priority: 0.85 },
  { path: "/derivative-examples", changeFrequency: "weekly", priority: 0.9 },
  { path: "/what-is-a-derivative", changeFrequency: "monthly", priority: 0.9 },
  { path: "/partial-derivatives", changeFrequency: "monthly", priority: 0.85 },
  { path: "/basic-derivative-formulas", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/derivadas-de-funciones", changeFrequency: "monthly", priority: 0.8 },
  { path: "/derivadas-de-varias-variables", changeFrequency: "monthly", priority: 0.75 },
  { path: "/derivadas-exponenciales", changeFrequency: "monthly", priority: 0.8 },
  { path: "/derivadas-logaritmicas", changeFrequency: "monthly", priority: 0.8 },
  { path: "/derivadas-por-definicion", changeFrequency: "monthly", priority: 0.8 },
  { path: "/calculadora-de-segundas-derivadas", changeFrequency: "monthly", priority: 0.85 },
  { path: "/calculadora-de-derivadas-implicitas", changeFrequency: "monthly", priority: 0.85 },
  { path: "/calculadora-de-derivadas-trigonometricas", changeFrequency: "monthly", priority: 0.85 },
  { path: "/politica-de-privacidad", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terminos-de-servicio", changeFrequency: "yearly", priority: 0.3 },
];

const LANGS: Lang[] = ["es", "en", "pt"];

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const route of STATIC_ROUTES) {
    for (const lang of LANGS) {
      entries.push({
        url: absoluteUrl(lang, route.path),
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            LANGS.map((l) => [l === "es" ? "es" : l === "en" ? "en" : "pt", absoluteUrl(l, route.path)])
          ),
        },
      });
    }
  }

  for (const post of BLOG_POSTS) {
    for (const lang of LANGS) {
      const slug = post.slugs[lang];
      const path = `/blog/${slug}`;
      const localizedPaths = {
        es: `/blog/${post.slugs.es}`,
        en: `/blog/${post.slugs.en}`,
        pt: `/blog/${post.slugs.pt}`,
      };
      entries.push({
        url: absoluteUrl(lang, path),
        lastModified: post.lastModified ? new Date(post.lastModified) : now,
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: {
          languages: {
            es: absoluteUrl("es", localizedPaths.es),
            en: absoluteUrl("en", localizedPaths.en),
            pt: absoluteUrl("pt", localizedPaths.pt),
            "x-default": absoluteUrl("es", localizedPaths.es),
          },
        },
      });
    }
  }

  return entries;
}
