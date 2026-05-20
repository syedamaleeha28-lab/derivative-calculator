import { absoluteUrl } from "./seo";

/** Published posts — keep in sync with `BLOG_POSTS` in site-routes.ts */
export const PUBLISHED_BLOG_SLUGS = [
  "como-aprender-derivadas-desde-cero",
  "errores-comunes-al-derivar",
  "entendiendo-regla-de-la-cadena",
] as const;

/** Planned articles for topical authority (add route + sitemap when published). */
export const PLANNED_BLOG_POSTS: {
  slug: string;
  title: string;
  metaDescription: string;
  primaryKeyword: string;
  internalLinks: { label: string; href: string }[];
}[] = [
  {
    slug: "que-es-una-derivada",
    title: "Qué es una derivada: explicación sencilla para principiantes",
    metaDescription:
      "Concepto de derivada, interpretación geométrica y ejemplos básicos para empezar cálculo diferencial sin complicaciones.",
    primaryKeyword: "qué es una derivada",
    internalLinks: [
      { label: "Calculadora de derivadas", href: "/" },
      { label: "Cómo funciona", href: "/como-funciona" },
    ],
  },
  {
    slug: "regla-de-la-cadena-explicada",
    title: "Regla de la cadena explicada con ejemplos paso a paso",
    metaDescription:
      "Aprende la regla de la cadena con ejercicios resueltos y errores frecuentes al derivar funciones compuestas.",
    primaryKeyword: "regla de la cadena",
    internalLinks: [
      { label: "Reglas de derivación", href: "/reglas" },
      { label: "Ejemplos resueltos", href: "/ejemplos" },
    ],
  },
  {
    slug: "derivadas-trigonometricas-paso-a-paso",
    title: "Derivadas trigonométricas paso a paso",
    metaDescription:
      "Derivada de sin(x), cos(x), tan(x) y composiciones trigonométricas con procedimiento claro para estudiantes.",
    primaryKeyword: "derivadas trigonométricas",
    internalLinks: [
      { label: "Ejemplos trigonométricos", href: "/ejemplos" },
      { label: "Calculadora online", href: "/#calculator" },
    ],
  },
  {
    slug: "derivadas-implicitas-faciles",
    title: "Derivadas implícitas fáciles: método y ejemplos",
    metaDescription:
      "Cómo abordar derivadas implícitas con buena notación y verificación usando una calculadora de derivadas con pasos.",
    primaryKeyword: "derivadas implícitas",
    internalLinks: [
      { label: "Cómo funciona la calculadora", href: "/como-funciona" },
      { label: "Reglas", href: "/reglas" },
    ],
  },
  {
    slug: "ejemplos-derivadas-resueltas-guia",
    title: "Ejemplos de derivadas resueltas: guía de práctica",
    metaDescription:
      "Colección orientativa de ejercicios de derivadas resueltos para repasar antes de un examen de cálculo diferencial.",
    primaryKeyword: "ejemplos de derivadas resueltas",
    internalLinks: [
      { label: "Galería de ejemplos", href: "/ejemplos" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    slug: "como-resolver-derivadas-online",
    title: "Cómo resolver derivadas online de forma efectiva",
    metaDescription:
      "Consejos para usar una calculadora de derivadas online gratis sin depender solo del resultado final.",
    primaryKeyword: "resolver derivadas online",
    internalLinks: [
      { label: "Inicio", href: "/" },
      { label: "Tutorial", href: "/como-funciona" },
    ],
  },
  {
    slug: "derivadas-para-principiantes",
    title: "Derivadas para principiantes: por dónde empezar",
    metaDescription:
      "Ruta de estudio desde límites hasta reglas básicas, con recursos en español y práctica guiada.",
    primaryKeyword: "derivadas para principiantes",
    internalLinks: [
      { label: "Blog", href: "/blog" },
      { label: "Reglas", href: "/reglas" },
    ],
  },
];

/** Blog index CollectionPage JSON-LD */
export function buildBlogCollectionSchema(posts: { title: string; slug: string; desc: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": absoluteUrl("/blog"),
    name: "Blog de derivadas y cálculo diferencial",
    description:
      "Artículos educativos en español sobre derivadas, reglas de derivación y técnicas de estudio.",
    inLanguage: "es",
    url: absoluteUrl("/blog"),
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: post.title,
        url: absoluteUrl(`/blog/${post.slug}`),
      })),
    },
  };
}
