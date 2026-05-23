import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getRecentBlogPosts } from "@/lib/blog-posts";
import { ROUTES } from "@/lib/routes";
import { dict } from "@/lib/dictionaries";

export default function HomeRecentArticles() {
  const t = dict.homeInternalLinks;
  const posts = getRecentBlogPosts(6);

  return (
    <section
      className="py-16 md:py-20 bg-slate-50/80 border-t border-slate-100"
      aria-labelledby="home-recent-articles-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-violet-600 font-bold tracking-widest uppercase text-[0.7rem] mb-2">
              {t.recentBadge}
            </p>
            <h2
              id="home-recent-articles-heading"
              className="heading-font text-2xl md:text-3xl text-slate-900"
            >
              {t.recentTitle}
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl leading-relaxed">{t.recentLead}</p>
          </div>
          <Link
            href={ROUTES.blog}
            className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:gap-3 transition-all shrink-0"
          >
            {t.viewAllBlog} <ArrowRight size={16} />
          </Link>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full rounded-2xl bg-white border border-slate-200 p-6 hover:border-violet-300 hover:shadow-md transition-all"
              >
                <span className="text-[0.65rem] font-black uppercase tracking-widest text-violet-600 mb-2">
                  {post.category}
                </span>
                <h3 className="font-bold text-slate-900 leading-snug group-hover:text-violet-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2 flex-1">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-[0.75rem] text-slate-400 font-medium">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
