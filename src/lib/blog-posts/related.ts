import { BLOG_RELATED_BY_SLUG, type InternalLinkItem } from "../internal-links";
import { ROUTES } from "../routes";
import { getBlogPostBySlug } from "./index";

export type EnrichedRelatedPost = {
  title: string;
  slug: string;
  description: string;
  anchorText: string;
};

const PAGE_META: Record<string, { title: string; description: string }> = {
  [ROUTES.ejemplos]: {
    title: "Ejemplos de derivadas resueltas",
    description:
      "Ejercicios comentados con polinomios, trigonométricas, producto y regla de la cadena.",
  },
  [ROUTES.reglas]: {
    title: "Reglas de derivación",
    description: "Potencia, producto, cociente y cadena explicadas en español.",
  },
  [ROUTES.comoFunciona]: {
    title: "Cómo funciona la calculadora",
    description: "Tutorial para ingresar funciones e interpretar cada paso.",
  },
  [ROUTES.blog]: {
    title: "Blog de cálculo diferencial",
    description: "Todas las guías sobre derivadas, trigonometría y reglas.",
  },
  "/#calculator": {
    title: "Calculadora de derivadas",
    description: "Calcula cualquier derivada con procedimiento paso a paso.",
  },
};

export function resolvePostHref(slug: string): string {
  if (slug.startsWith("/")) return slug;
  return `/blog/${slug}`;
}

export function internalLinksToRelated(
  links: readonly InternalLinkItem[]
): EnrichedRelatedPost[] {
  return links.map((link) => ({
    title: link.anchor,
    slug: link.href,
    description: link.description,
    anchorText: link.anchor,
  }));
}

/** Related articles for a blog post (SEO anchors + descriptions). */
export function getRelatedArticlesForPost(slug: string): EnrichedRelatedPost[] {
  const entry = getBlogPostBySlug(slug);
  const configured = BLOG_RELATED_BY_SLUG[slug];
  const fallback =
    configured ??
    (entry?.relatedPosts ?? []).map((r) => ({
      slug: r.slug,
      anchor: r.title,
    }));

  return fallback.slice(0, 4).map((item) => {
    const hrefSlug = item.slug;
    if (hrefSlug.startsWith("/")) {
      const meta = PAGE_META[hrefSlug];
      return {
        title: meta?.title ?? item.anchor,
        slug: hrefSlug,
        description: meta?.description ?? "",
        anchorText: item.anchor,
      };
    }
    const post = getBlogPostBySlug(hrefSlug);
    return {
      title: post?.title ?? item.anchor,
      slug: hrefSlug,
      description: post?.description ?? "",
      anchorText: item.anchor,
    };
  });
}

