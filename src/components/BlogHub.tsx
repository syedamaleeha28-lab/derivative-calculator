"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Clock, ChevronRight, Star } from "lucide-react";
import { BLOG_CATEGORIES } from "@/lib/blog-posts";
import { resolveBlogOrRootHref } from "@/lib/blog-migrations";
import type { getBlogListingPosts } from "@/lib/blog-posts";

type Post = ReturnType<typeof getBlogListingPosts>[number];

const FEATURED_SLUGS = [
  "derivadas-para-principiantes",
  "regla-de-la-cadena-ejercicios",
  "ejemplos-de-derivadas-resueltas",
];

export default function BlogHub({
  posts,
  readMoreLabel,
}: {
  posts: Post[];
  readMoreLabel: string;
}) {
  const [category, setCategory] = useState<string>("Todos");

  const filtered = useMemo(() => {
    if (category === "Todos") return posts;
    return posts.filter((p) => p.category === category);
  }, [posts, category]);

  const featured = useMemo(
    () => posts.filter((p) => FEATURED_SLUGS.includes(p.slug)),
    [posts]
  );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              category === cat
                ? "bg-violet-600 text-white shadow-md"
                : "bg-white border border-slate-200 text-slate-600 hover:border-violet-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {category === "Todos" && featured.length > 0 && (
        <div className="mb-14">
          <h2 className="text-sm font-bold uppercase tracking-wider text-violet-600 mb-6 flex items-center gap-2">
            <Star size={16} className="fill-violet-600" /> Artículos destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((post) => (
              <Link key={post.slug} href={resolveBlogOrRootHref(post.slug)}>
                <article className="h-full rounded-2xl border-2 border-violet-200 bg-gradient-to-br from-violet-50/80 to-white p-6 hover:shadow-lg transition-all">
                  <span className="text-[0.65rem] font-bold uppercase text-violet-600">
                    {post.category}
                  </span>
                  <h3 className="heading-font text-xl text-slate-900 mt-2 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-3">{post.desc}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <Link key={post.slug} href={resolveBlogOrRootHref(post.slug)}>
            <article className="h-full bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl transition-all group cursor-pointer flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[0.65rem] font-bold uppercase tracking-wide text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-[0.7rem] text-slate-400 font-semibold">
                  <Clock size={12} /> {post.read}
                </div>
              </div>
              <h2 className="heading-font text-[1.25rem] text-slate-900 mb-3 group-hover:text-violet-600 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-slate-500 text-[0.9rem] leading-relaxed mb-6 flex-grow line-clamp-4">
                {post.desc}
              </p>
              <p className="text-[0.7rem] text-slate-400 mb-3">{post.date}</p>
              <div className="mt-auto flex items-center gap-2 text-violet-600 font-bold text-[0.85rem]">
                {readMoreLabel} <ChevronRight size={16} />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}
