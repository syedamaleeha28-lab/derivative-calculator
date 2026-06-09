import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EN_ARTICLE_ENTRIES } from "@/lib/en-articles";
import { EN_MAIN_CALCULATOR_HREF, EN_ROUTES } from "@/lib/en-routes";
import { ROUTES } from "@/lib/routes";
import { SITE_URL, absoluteUrl, buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: EN_ROUTES.blog,
    title: "Calculus Blog: Derivative Guides, Rules, and Worked Examples",
    description:
      "English articles on derivatives and differentiation: derivative rules, formulas, trig derivatives, partial derivatives, implicit differentiation, and step-by-step practice.",
    keywords:
      "derivative blog, calculus articles, derivative guides, differentiation tutorials, derivative examples",
    ogLocale: "en_US",
    alternateLanguages: {
      es: ROUTES.blog,
      en: EN_ROUTES.blog,
      "x-default": ROUTES.blog,
    },
  });
}

function buildCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}${EN_ROUTES.blog}#collection`,
    name: "Derivative and Calculus Articles",
    url: absoluteUrl(EN_ROUTES.blog),
    inLanguage: "en",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: EN_ARTICLE_ENTRIES.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: absoluteUrl(`/en/${article.slug}`),
      })),
    },
  };
}

export default function EnBlogPage() {
  const articles = [...EN_ARTICLE_ENTRIES].sort((a, b) =>
    b.dateIso.localeCompare(a.dateIso)
  );
  const jsonLd = JSON.stringify(buildCollectionSchema()).replace(/</g, "\\u003c");

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Script
        id="en-blog-collection-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <Navbar />
      <div className="pt-32 pb-24 bg-[#F8F6F2]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-violet-600 font-bold tracking-widest uppercase text-[0.7rem] mb-4 block">
              Calculus Blog
            </span>
            <h1 className="heading-font text-[2.5rem] md:text-[3.2rem] text-slate-900 mb-6">
              Derivative Guides <span className="text-violet-600">&amp; Tutorials</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              In-depth English articles on differentiation: rules, formulas, worked
              examples, and exam-ready practice problems.
            </p>
            <p className="text-slate-500 text-[0.95rem] mt-4 leading-relaxed">
              Solve any function step by step with the{" "}
              <Link
                href={EN_MAIN_CALCULATOR_HREF}
                className="text-violet-600 font-medium hover:underline"
              >
                derivative calculator
              </Link>
              , review the{" "}
              <Link
                href={EN_ROUTES.derivativeRules}
                className="text-violet-600 font-medium hover:underline"
              >
                derivative rules
              </Link>{" "}
              or browse{" "}
              <Link
                href={EN_ROUTES.derivativeExamples}
                className="text-violet-600 font-medium hover:underline"
              >
                solved derivative examples
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.slug} href={`/en/${article.slug}`}>
                <article className="h-full bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl transition-all group cursor-pointer flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wide text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[0.7rem] text-slate-400 font-semibold">
                      <Clock size={12} /> {article.readTime}
                    </div>
                  </div>
                  <h2 className="heading-font text-[1.25rem] text-slate-900 mb-3 group-hover:text-violet-600 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 text-[0.9rem] leading-relaxed mb-6 flex-grow line-clamp-4">
                    {article.description}
                  </p>
                  <p className="text-[0.7rem] text-slate-400 mb-3">{article.date}</p>
                  <div className="mt-auto flex items-center gap-2 text-violet-600 font-bold text-[0.85rem]">
                    Read article <ChevronRight size={16} />
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <nav
            className="mt-16 pt-10 border-t border-slate-200 flex flex-wrap justify-center gap-3"
            aria-label="Related site resources"
          >
            {[
              { label: "Derivative Calculator", href: EN_MAIN_CALCULATOR_HREF },
              { label: "Derivative Rules", href: EN_ROUTES.derivativeRules },
              { label: "Examples", href: EN_ROUTES.derivativeExamples },
              { label: "Cheat Sheet", href: EN_ROUTES.derivativeCheatSheet },
              { label: "Home", href: EN_ROUTES.home },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-violet-300 hover:text-violet-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <Footer locale="en" />
    </main>
  );
}
