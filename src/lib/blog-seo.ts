import { absoluteUrl } from "./seo";
import { getAllBlogSlugs } from "./blog-posts";

/** Published posts — synced via getAllBlogSlugs() from blog-posts registry */
export const PUBLISHED_BLOG_SLUGS = getAllBlogSlugs();

/** Blog index CollectionPage JSON-LD */
export function buildBlogCollectionSchema(
  posts: { title: string; slug: string; desc: string }[]
) {
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

/** Blog index BreadcrumbList JSON-LD (Home > Blog). */
export function buildBlogBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl("/blog")}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
    ],
  };
}
