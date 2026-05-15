import ArticleLayout, { FormulaCard, TipCard, ExampleCard, WarningCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import Image from "next/image";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].whatIsPage;

  return {
    title: t.title,
    description: t.description,
  };
}

export default async function WhatIsADerivative({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].whatIsPage;

  const content = (
    <div className="space-y-12 text-slate-600 leading-relaxed">
      <section>
        <h2 id="introduccion">{t.sections.intro.title}</h2>
        <p>
          {t.sections.intro.p1}
        </p>
        <p className="mt-4">
           <Link href="/reglas" className="text-secondary font-bold underline decoration-secondary/30 hover:decoration-secondary">{currentLang === "en" ? "Differentiation rules" : currentLang === "pt" ? "Regras de derivação" : "Reglas de derivación"}</Link> {currentLang === "en" ? "are the key to mastering calculus." : currentLang === "pt" ? "são a chave para dominar o cálculo." : "son la clave para dominar el cálculo."}
        </p>
      </section>

      <section>
        <h2 id="definicion-geometrica">{t.sections.geometry.title}</h2>
        <p>
          {t.sections.geometry.p1}
        </p>
        <div className="my-8 max-w-3xl mx-auto relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
          <Image
            src="/images/grafica-derivada-tangente.webp"
            alt={t.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
          />
        </div>
      </section>

      <section>
        <h2 id="tasa-de-cambio">{currentLang === "en" ? "Rate of Change" : currentLang === "pt" ? "Taxa de Variação" : "Tasa de Cambio Instantánea"}</h2>
        <FormulaCard title={currentLang === "en" ? "Formal Definition by Limits" : currentLang === "pt" ? "Definição Formal por Limites" : "Definición Formal por Límites"}>
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString("f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}", { displayMode: true }) }} />
        </FormulaCard>
      </section>

      <section>
        <h2 id="aplicaciones">{t.sections.apps.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">{t.sections.apps.economy}</h4>
            <p className="text-sm">{currentLang === "en" ? "Used to calculate marginal cost." : currentLang === "pt" ? "Usado para calcular o custo marginal." : "Se usa para calcular el costo marginal."}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">{t.sections.apps.engineering}</h4>
            <p className="text-sm">{currentLang === "en" ? "Fundamental for safe structures." : currentLang === "pt" ? "Fundamental para estruturas seguras." : "Fundamental para diseñar estructuras seguras."}</p>
          </div>
        </div>
      </section>
    </div>
  );

  return (
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
  );
}
