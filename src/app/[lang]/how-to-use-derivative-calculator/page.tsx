import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import Link from "@/components/LanguageLink";
import Image from "next/image";
import { Calculator, List, Zap, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";
import { metadataFromEntry, normalizeLang } from "@/lib/seo";
import HowToJsonLd from "@/components/HowToJsonLd";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = normalizeLang(lang);
  const t = dictionaries[currentLang].howToUsePage;
  return metadataFromEntry(currentLang, "/how-to-use-derivative-calculator", {
    title: t.title,
    description: t.description,
  });
}

export default async function HowToUseCalculator({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].howToUsePage;

  const steps = [
    { ...t.sections.steps.s1, icon: <Calculator size={20} /> },
    { ...t.sections.steps.s2, icon: <Zap size={20} /> },
    { ...t.sections.steps.s3, icon: <BookOpen size={20} /> }
  ];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="pasos-basicos">{t.sections.steps.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4 p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                {step.icon}
              </div>
              <h4 className="font-bold text-slate-900">{step.t}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
        <div className="my-8 max-w-3xl mx-auto relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
          <Image
            src="/images/interfaz-calculadora-matematica.webp"
            alt={t.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
          />
        </div>
      </section>

      <section>
        <h2 id="notacion">{t.sections.syntax.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="p-8 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100">
            <h4 className="font-bold mb-4 text-emerald-700 uppercase text-[0.7rem] tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> {t.sections.syntax.recommended}
            </h4>
            <ul className="text-sm space-y-3 font-mono">
              <li className="flex justify-between"><span>sin(x^2)</span> <span className="text-emerald-600 font-bold">✓</span></li>
              <li className="flex justify-between"><span>ln(3x + 1)</span> <span className="text-emerald-600 font-bold">✓</span></li>
              <li className="flex justify-between"><span>(x + 1)/(x - 1)</span> <span className="text-emerald-600 font-bold">✓</span></li>
              <li className="flex justify-between"><span>e^(2x)</span> <span className="text-emerald-600 font-bold">✓</span></li>
            </ul>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-rose-50/50 border border-rose-100">
            <h4 className="font-bold mb-4 text-rose-700 uppercase text-[0.7rem] tracking-widest flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-rose-500" /> {t.sections.syntax.avoid}
            </h4>
            <ul className="text-sm space-y-3 font-mono text-slate-400">
              <li className="flex justify-between"><span>sinx^2</span> <span className="text-rose-400 font-bold">✗</span></li>
              <li className="flex justify-between"><span>log 3x + 1</span> <span className="text-rose-400 font-bold">✗</span></li>
              <li className="flex justify-between"><span>x+1 / x-1</span> <span className="text-rose-400 font-bold">✗</span></li>
              <li className="flex justify-between"><span>e^2x</span> <span className="text-rose-400 font-bold">✗</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );

  const howToSteps = [t.sections.steps.s1, t.sections.steps.s2, t.sections.steps.s3].map((s) => ({
    title: s.t,
    desc: s.d,
  }));

  return (
    <>
      <HowToJsonLd
        lang={currentLang}
        name={t.title}
        description={t.description}
        path="/how-to-use-derivative-calculator"
        steps={howToSteps}
      />
    <ArticleLayout 
      title={t.title}
      description={t.description}
      date={t.date}
      readTime={t.readTime}
      category={t.category}
      tags={t.tags}
      author={{
        name: "Calculadora Derivadas Team",
        role: t.authorRole
      }}
      breadcrumbs={t.breadcrumbs}
      content={content}
      faqs={t.faqs}
    />
    </>
  );
}
