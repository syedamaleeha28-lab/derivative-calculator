import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeCalculatorTools from "@/components/HomeCalculatorTools";
import HomeEducationalCards from "@/components/HomeEducationalCards";
import HomeLongFormSeo from "@/components/HomeLongFormSeo";
import HomeFeaturedBlogLinks from "@/components/HomeFeaturedBlogLinks";
import HomeRecentArticles from "@/components/HomeRecentArticles";
import HomeExtensionPromo from "@/components/HomeExtensionPromo";
import { Calculator } from "lucide-react";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { dict } from "@/lib/dictionaries";
import { buildHomePageSchemaGraph } from "@/lib/home-schema";
import { buildPageMetadata } from "@/lib/seo";

const homeJsonLd = JSON.stringify(buildHomePageSchemaGraph()).replace(/</g, "\\u003c");

export async function generateMetadata(): Promise<Metadata> {
  const t = dict.metadata.home;

  return buildPageMetadata({
    path: "/",
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    absoluteTitle: true,
  });
}

export default function Home() {
  const t = dict.nav;

  return (
    <>
      <Script
        id="homepage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: homeJsonLd }}
      />
      <main className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <Hero />
        <HomeCalculatorTools />
        <HomeEducationalCards />
        <HomeFeaturedBlogLinks />
        <HomeRecentArticles />
        <HomeLongFormSeo />
        <HomeExtensionPromo />
        <FAQ />
        <Footer />

        <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-xl border-t border-slate-200/50 md:hidden z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a
            href="#calculator"
            className="w-full bg-[#0f172a] text-white py-3.5 rounded-[14px] text-[0.9rem] font-black uppercase tracking-[0.05em] shadow-xl flex justify-center items-center gap-2 transition-all active:scale-95 border border-white/5"
          >
            <Calculator size={16} />
            {t.calcNow}
          </a>
        </div>
      </main>
    </>
  );
}
