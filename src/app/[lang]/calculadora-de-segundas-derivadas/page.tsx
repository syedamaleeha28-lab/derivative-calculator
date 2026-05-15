import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  
  const titles = {
    es: "Calculadora de Segundas Derivadas: Guía y Concavidad",
    en: "Second Derivative Calculator: Guide and Concavity",
    pt: "Calculadora de Segundas Derivadas: Guia e Concavidade"
  };
  
  return {
    title: titles[currentLang],
    description: "",
  };
}

export default async function HigherOrderDerivativesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;

  const t = {
    es: {
      title: "¿Qué es una Segunda Derivada?",
      p1: "La segunda derivada de una función es el resultado de derivar la derivada de la función original. Nos indica la concavidad de una curva.",
      example: "Ejemplo: f(x) = x³ + 5x²"
    },
    en: {
      title: "What is a Second Derivative?",
      p1: "The second derivative of a function is the result of differentiating the derivative of the original function. It tells us the concavity of a curve.",
      example: "Example: f(x) = x³ + 5x²"
    },
    pt: {
      title: "O que é uma Segunda Derivada?",
      p1: "A segunda derivada de uma função é o resultado de diferenciar a derivada da função original. Ela nos diz a concavidade de uma curva.",
      example: "Exemplo: f(x) = x³ + 5x²"
    }
  }[currentLang];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">{t.title}</h2>
        <p>{t.p1}</p>
        <TipCard>
          {currentLang === 'en' 
            ? "Use the second derivative to find inflection points." 
            : currentLang === 'pt'
            ? "Use a segunda derivada para encontrar pontos de inflexão."
            : "Usa la segunda derivada para encontrar puntos de inflexión."}
        </TipCard>
      </section>

      <section>
        <h2 id="ejemplos">{currentLang === 'en' ? 'Solved Examples' : currentLang === 'pt' ? 'Exemplos Resolvidos' : 'Ejemplos Resueltos'}</h2>
        <ExampleCard title={t.example}>
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = x^3 + 5x^2 \\implies f''(x) = 6x + 10", { displayMode: true }) }} />
        </ExampleCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title={currentLang === 'en' ? "Second Derivative Guide" : currentLang === 'pt' ? "Guia de Segunda Derivada" : "Guía de Segunda Derivada"}
      description=""
      date="10 May, 2026"
      readTime="8 min"
      category="Tutorial"
      tags={["Calculus", "Second Derivative"]}
      author={{ name: "Calculadora Derivadas Team", role: "Expert" }}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Second Derivative", href: "/calculadora-de-segundas-derivadas" }]}
      content={content}
    />
  );
}
