import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "@/components/LanguageLink";
import { Clock, ChevronRight } from "lucide-react";
import { dictionaries, Lang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].blog;

  return {
    title: `${t.title1}${t.title2} | Calculadora Derivadas`,
    description: t.subtitle,
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].blog;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="pt-32 pb-24 bg-[#F8F6F2]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-[0.7rem] mb-4 block">{t.badge}</span>
            <h1 className="heading-font text-[2.8rem] md:text-[3.5rem] text-slate-900 mb-6">
              {t.title1} <span className="text-secondary">{t.title2}</span>
            </h1>
            <p className="text-slate-600 text-lg">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.posts?.map((post, idx) => (
              <Link key={idx} href={`/blog/${post.slug}`}>
                <article className="h-full bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl transition-all group cursor-pointer flex flex-col">
                  <div className="flex items-center gap-3 text-[0.75rem] text-slate-400 mb-6 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} /> {post.read}
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    {post.date}
                  </div>
                  <h2 className="heading-font text-[1.4rem] text-slate-900 mb-4 group-hover:text-secondary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-[0.95rem] leading-relaxed mb-8">
                    {post.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-secondary font-bold text-[0.9rem]">
                    {t.readMore} <ChevronRight size={16} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
