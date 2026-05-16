import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import Image from "next/image";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";
import { generateMetadataForPath } from "@/lib/generate-page-metadata";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return generateMetadataForPath(lang, "/derivadas-por-definicion");
}

export default async function DefinitionDerivativesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;

  const t = {
    es: {
      title: "¿Qué es la Derivada por Definición?",
      p1: "La derivada por definición, también conocida como la derivada con límites, es el procedimiento fundamental para encontrar la razón de cambio de una función.",
      formulaTitle: "Definición Formal de la Derivada",
      example: "Derivar f(x) = x² por definición"
    },
    en: {
      title: "What is the Derivative by Definition?",
      p1: "The derivative by definition, also known as the derivative with limits, is the fundamental procedure for finding the rate of change of a function.",
      formulaTitle: "Formal Definition of the Derivative",
      example: "Differentiate f(x) = x² by definition"
    },
    pt: {
      title: "O que é a Derivada por Definição?",
      p1: "A derivada por definição, também conhecida como a derivada com limites, é o procedimento fundamental para encontrar a taxa de variação de uma função.",
      formulaTitle: "Definição Formal da Derivada",
      example: "Derivar f(x) = x² por definição"
    }
  }[currentLang];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">{t.title}</h2>
        <p>{t.p1}</p>
      </section>

      <section>
        <h2 id="formula">{t.formulaTitle}</h2>
        <FormulaCard title={t.formulaTitle}>
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString("f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}", { displayMode: true }) }} />
        </FormulaCard>
        <figure className="my-8 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <Image
              src="/images/limite-secante-definicion-derivada.webp"
              alt={t.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="ejemplos">{currentLang === 'en' ? 'Solved Examples' : currentLang === 'pt' ? 'Exemplos Resolvidos' : 'Ejemplos Resueltos'}</h2>
        <ExampleCard title={t.example}>
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} x^2 = 2x", { displayMode: true }) }} />
        </ExampleCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title={t.title}
      description=""
      date="10 May, 2026"
      readTime="12 min"
      category="Fundamentals"
      tags={["Calculus", "Limits"]}
      author={{ name: "Calculadora Derivadas Team", role: "Expert" }}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Definition", href: "/derivadas-por-definicion" }]}
      content={content}
    />
  );
}
