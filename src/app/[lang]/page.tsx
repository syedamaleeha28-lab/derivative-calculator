import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SEOContent from "@/components/SEOContent";
import StepByStep from "@/components/StepByStep";
import GraphVisualization from "@/components/GraphVisualization";
import { Calculator } from "lucide-react";
import HomeJsonLd from "@/components/HomeJsonLd";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { dictionaries, Lang } from "@/lib/dictionaries";
import { buildPageMetadata, normalizeLang } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = normalizeLang(lang);
  const t = dictionaries[currentLang].metadata.home;

  return buildPageMetadata({
    lang: currentLang,
    path: "/",
    title: t.title,
    description: t.description,
    keywords: t.keywords,
  });
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].nav;
  const tStep = dictionaries[currentLang].stepByStep;
  const tGraph = dictionaries[currentLang].graph;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <SEOContent />
      <StepByStep t={tStep} />
      <GraphVisualization t={tGraph} />
      <FAQ />
      <HomeJsonLd lang={currentLang} />
      <Footer />
      
      {/* Sticky Mobile Calculate Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-xl border-t border-slate-200/50 md:hidden z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <a 
          href="#calculator" 
          className="w-full bg-[#0f172a] text-white py-3.5 rounded-[14px] text-[0.9rem] font-black uppercase tracking-[0.05em] shadow-xl flex justify-center items-center gap-2 transition-all active:scale-95 border border-white/5"
        >
          <Calculator size={16} />
          {t.calcNow}
        </a>
      </div>

    </main>
  );
}
