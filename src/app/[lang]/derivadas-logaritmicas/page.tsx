import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  
  const titles = {
    es: "Derivadas Logarítmicas: Fórmulas, Ejemplos y Técnicas",
    en: "Logarithmic Derivatives: Formulas, Examples, and Techniques",
    pt: "Derivadas Logarítmicas: Fórmulas, Exemplos e Técnicas"
  };
  
  return {
    title: titles[currentLang],
    description: "",
  };
}

export default async function LogarithmicDerivativesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;

  const t = {
    es: {
      title: "¿Qué es una Derivada Logarítmica?",
      p1: "Las derivadas logarítmicas son aquellas funciones donde la variable independiente se encuentra dentro de un logaritmo.",
      formula: "Fórmula del Logaritmo Natural",
      example: "Ejemplo: ln(x² + 5)"
    },
    en: {
      title: "What is a Logarithmic Derivative?",
      p1: "Logarithmic derivatives are those functions where the independent variable is inside a logarithm.",
      formula: "Natural Logarithm Formula",
      example: "Example: ln(x² + 5)"
    },
    pt: {
      title: "O que é uma Derivada Logarítmica?",
      p1: "As derivadas logarítmicas são aquelas funções onde a variável independente está dentro de um logaritmo.",
      formula: "Fórmula do Logaritmo Natural",
      example: "Exemplo: ln(x² + 5)"
    }
  }[currentLang];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">{t.title}</h2>
        <p>{t.p1}</p>
      </section>

      <section>
        <h2 id="formula">{t.formula}</h2>
        <FormulaCard title={t.formula}>
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx}[\\ln(u)] = \\dfrac{u'}{u}", { displayMode: true }) }} />
        </FormulaCard>
      </section>

      <section>
        <h2 id="ejemplos">{currentLang === 'en' ? 'Solved Examples' : currentLang === 'pt' ? 'Exemplos Resolvidos' : 'Ejemplos Resueltos'}</h2>
        <ExampleCard title={t.example}>
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = \\ln(x^2 + 5) \\implies f'(x) = \\dfrac{2x}{x^2 + 5}", { displayMode: true }) }} />
        </ExampleCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title={t.title}
      description=""
      date="10 May, 2026"
      readTime="10 min"
      category="Tutorial"
      tags={["Calculus", "Logarithms"]}
      author={{ name: "Calculadora Derivadas Team", role: "Expert" }}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Logarithmic", href: "/derivadas-logaritmicas" }]}
      content={content}
    />
  );
}
