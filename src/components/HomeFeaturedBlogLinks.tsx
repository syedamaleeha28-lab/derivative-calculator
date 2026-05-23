import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { HOME_FEATURED_BLOG_LINKS } from "@/lib/internal-links";
import { dict } from "@/lib/dictionaries";

export default function HomeFeaturedBlogLinks() {
  const t = dict.homeInternalLinks;

  return (
    <section
      className="py-16 md:py-20 bg-white border-t border-slate-100"
      aria-labelledby="home-featured-blog-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="text-violet-600" size={22} aria-hidden />
          <p className="text-violet-600 font-bold tracking-widest uppercase text-[0.7rem]">
            {t.featuredBadge}
          </p>
        </div>
        <h2
          id="home-featured-blog-heading"
          className="heading-font text-2xl md:text-3xl text-slate-900 mb-3"
        >
          {t.featuredTitle}
        </h2>
        <p className="text-slate-600 max-w-2xl mb-10 leading-relaxed">{t.featuredLead}</p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_FEATURED_BLOG_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-slate-50/50 p-6 hover:border-violet-300 hover:bg-white hover:shadow-lg transition-all"
              >
                <span className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors leading-snug">
                  {link.anchor}
                </span>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed flex-1">{link.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[0.8rem] font-bold text-violet-600">
                  {t.readMore} <ArrowRight size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
