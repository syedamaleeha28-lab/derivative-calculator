import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  
  const titles = {
    es: "Derivadas Exponenciales: Fórmulas y Ejercicios Paso a Paso",
    en: "Exponential Derivatives: Formulas and Exercises Step by Step",
    pt: "Derivadas Exponenciais: Fórmulas e Exercícios Passo a Passo"
  };
  
  return {
    title: titles[currentLang],
    description: "",
  };
}

export default async function ExponentialDerivativesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;

  const t = {
    es: {
      title: "¿Qué es una Derivada Exponencial?",
      p1: "Las derivadas exponenciales son aquellas donde la variable independiente se encuentra en el exponente.",
      formula1: "Base Natural (e)",
      formula2: "Cualquier Base (a)",
      example: "Ejemplo: e^(3x)"
    },
    en: {
      title: "What is an Exponential Derivative?",
      p1: "Exponential derivatives are those where the independent variable is in the exponent.",
      formula1: "Natural Base (e)",
      formula2: "Any Base (a)",
      example: "Example: e^(3x)"
    },
    pt: {
      title: "O que é uma Derivada Exponencial?",
      p1: "As derivadas exponenciais são aquelas onde a variável independente está no expoente.",
      formula1: "Base Natural (e)",
      formula2: "Qualquer Base (a)",
      example: "Exemplo: e^(3x)"
    }
  }[currentLang];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">{t.title}</h2>
        <p>{t.p1}</p>
      </section>

      <section>
        <h2 id="formula">{currentLang === 'en' ? 'Formulas' : currentLang === 'pt' ? 'Fórmulas' : 'Fórmulas'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormulaCard title={t.formula1}>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx}[e^u] = e^u \\cdot u'", { displayMode: true }) }} />
          </FormulaCard>
          <FormulaCard title={t.formula2}>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx}[a^u] = a^u \\cdot u' \\cdot \\ln(a)", { displayMode: true }) }} />
          </FormulaCard>
        </div>
      </section>

      <section>
        <h2 id="ejemplos">{currentLang === 'en' ? 'Solved Examples' : currentLang === 'pt' ? 'Exemplos Resolvidos' : 'Ejemplos Resueltos'}</h2>
        <ExampleCard title={t.example}>
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = e^{3x} \\implies f'(x) = 3e^{3x}", { displayMode: true }) }} />
        </ExampleCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title={t.title}
      description=""
      date="10 May, 2026"
      readTime="8 min"
      category="Tutorial"
      tags={["Calculus", "Exponential"]}
      author={{ name: "Calculadora Derivadas Team", role: "Expert" }}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Exponential", href: "/derivadas-exponenciales" }]}
      content={content}
    />
  );
}
