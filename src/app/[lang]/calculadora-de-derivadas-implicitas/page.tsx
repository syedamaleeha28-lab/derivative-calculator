import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  
  const titles = {
    es: "Calculadora de Derivadas Implícitas: Guía y Ejemplos",
    en: "Implicit Differentiation Calculator: Guide and Examples",
    pt: "Calculadora de Derivadas Implícitas: Guia e Exemplos"
  };
  
  const descs = {
    es: "Aprende a resolver derivadas implícitas paso a paso. Guía completa con la técnica de derivación implícita y ejercicios resueltos.",
    en: "Learn to solve implicit derivatives step by step. Complete guide with the implicit differentiation technique and solved exercises.",
    pt: "Aprenda a resolver derivadas implícitas passo a passo. Guia completo com a técnica de diferenciação implícita e exercícios resolvidos."
  };

  return {
    title: titles[currentLang],
    description: descs[currentLang],
  };
}

export default async function ImplicitDerivativesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;

  const t = {
    es: {
      title: "¿Qué es la Derivación Implícita?",
      p1: "La derivación implícita es una técnica que se utiliza cuando no es posible despejar la variable dependiente y en términos de x.",
      steps: "Pasos para Resolver",
      step1: "Deriva ambos lados respecto a x.",
      step2: "Usa la regla de la cadena para y (multiplica por y').",
      step3: "Agrupa y despeja y'.",
      example: "Ejemplo: x² + y² = 25"
    },
    en: {
      title: "What is Implicit Differentiation?",
      p1: "Implicit differentiation is a technique used when it is not possible to solve for the dependent variable y in terms of x.",
      steps: "Steps to Solve",
      step1: "Differentiate both sides with respect to x.",
      step2: "Use the chain rule for y (multiply by y').",
      step3: "Group and solve for y'.",
      example: "Example: x² + y² = 25"
    },
    pt: {
      title: "O que é Diferenciação Implícita?",
      p1: "A diferenciação implícita é uma técnica usada quando não é possível isolar a variável dependente y em termos de x.",
      steps: "Passos para Resolver",
      step1: "Diferencie ambos os lados em relação a x.",
      step2: "Use a regra da cadeia para y (multiplique por y').",
      step3: "Agrupe e isole y'.",
      example: "Exemplo: x² + y² = 25"
    }
  }[currentLang];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">{t.title}</h2>
        <p>{t.p1}</p>
        <TipCard>
          {currentLang === 'en' 
            ? "Use our main tool to verify your results step by step." 
            : currentLang === 'pt'
            ? "Use nossa ferramenta principal para verificar seus resultados passo a passo."
            : "Usa nuestra herramienta principal para verificar tus resultados paso a paso."}
        </TipCard>
      </section>

      <section>
        <h2 id="pasos">{t.steps}</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>{t.step1}</li>
          <li>{t.step2}</li>
          <li>{t.step3}</li>
        </ul>
      </section>

      <section>
        <h2 id="ejemplos">{currentLang === 'en' ? 'Solved Examples' : currentLang === 'pt' ? 'Exemplos Resolvidos' : 'Ejemplos Resueltos'}</h2>
        <ExampleCard title={t.example}>
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("x^2 + y^2 = 25 \\implies y' = -\\dfrac{x}{y}", { displayMode: true }) }} />
        </ExampleCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title={currentLang === 'en' ? "Implicit Differentiation Guide" : currentLang === 'pt' ? "Guia de Derivação Implícita" : "Guía de Derivación Implícita"}
      description=""
      date="10 May, 2026"
      readTime="15 min"
      category="Advanced"
      tags={["Calculus", "Implicit"]}
      author={{ name: "Calculadora Derivadas Team", role: "Expert" }}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Implicit", href: "/calculadora-de-derivadas-implicitas" }]}
      content={content}
    />
  );
}
