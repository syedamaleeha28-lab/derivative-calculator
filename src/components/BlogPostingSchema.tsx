import Script from "next/script";
import {
  buildBlogPostingJsonLd,
  type BlogPostingSchemaInput,
} from "@/lib/blog-posting-schema";

type Props = BlogPostingSchemaInput & {
  id?: string;
};

/** Reusable JSON-LD block for BlogPosting rich results on blog articles. */
export default function BlogPostingSchema({ id, ...input }: Props) {
  const jsonLd = JSON.stringify(buildBlogPostingJsonLd(input)).replace(/</g, "\\u003c");

  return (
    <Script
      id={id ?? "blog-posting-jsonld"}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
