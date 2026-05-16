import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";
import { generateMetadataForPath } from "@/lib/generate-page-metadata";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return generateMetadataForPath(lang, "/derivadas-de-varias-variables");
}

export default async function MultivariableDerivativesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;

  const t = {
    es: {
      title: "¿Qué son las Derivadas de Varias Variables?",
      p1: "Las derivadas de varias variables, también conocidas como derivadas parciales, se aplican a funciones que dependen de más de una variable independiente.",
      example: "Calcular ∂f/∂x para f(x, y) = x²y + sin(y)"
    },
    en: {
      title: "What are Multivariable Derivatives?",
      p1: "Multivariable derivatives, also known as partial derivatives, apply to functions that depend on more than one independent variable.",
      example: "Calculate ∂f/∂x for f(x, y) = x²y + sin(y)"
    },
    pt: {
      title: "O que são Derivadas de Várias Variáveis?",
      p1: "As derivadas de várias variáveis, também conhecidas como derivadas parciais, aplicam-se a funções que dependem de mais de uma variável independente.",
      example: "Calcular ∂f/∂x para f(x, y) = x²y + sin(y)"
    }
  }[currentLang];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">{t.title}</h2>
        <p>{t.p1}</p>
      </section>

      <section>
        <h2 id="ejemplos">{currentLang === 'en' ? 'Solved Examples' : currentLang === 'pt' ? 'Exemplos Resolvidos' : 'Ejemplos Resueltos'}</h2>
        <ExampleCard title={t.example}>
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x, y) = x^2y + \\sin(y) \\implies \\dfrac{\\partial f}{\\partial x} = 2xy", { displayMode: true }) }} />
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
      category="Advanced"
      tags={["Calculus", "Multivariable"]}
      author={{ name: "Calculadora Derivadas Team", role: "Expert" }}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Multivariable", href: "/derivadas-de-varias-variables" }]}
      content={content}
    />
  );
}
