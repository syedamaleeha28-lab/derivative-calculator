import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import Image from "next/image";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";
import { generateMetadataForPath } from "@/lib/generate-page-metadata";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return generateMetadataForPath(lang, "/derivatives-of-functions");
}

export default async function GeneralFunctionsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;

  const t = {
    es: {
      title: "¿Qué es la Derivada de una Función?",
      p1: "La derivada de una función es una medida de cómo cambia el valor de dicha función a medida que cambia su variable independiente.",
      example: "Derivada de una función polinómica"
    },
    en: {
      title: "What is the Derivative of a Function?",
      p1: "The derivative of a function is a measure of how the value of that function changes as its independent variable changes.",
      example: "Derivative of a polynomial function"
    },
    pt: {
      title: "O que é a Derivada de uma Função?",
      p1: "A derivada de uma função é uma medida de como o valor dessa função muda conforme sua variável independente muda.",
      example: "Derivada de uma função polinomial"
    }
  }[currentLang];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">{t.title}</h2>
        <p>{t.p1}</p>
        <figure className="my-10 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <Image
              src="/images/tipos-funciones-derivar-educativo.webp"
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
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = 4x^3 + 2x - 5 \\implies f'(x) = 12x^2 + 2", { displayMode: true }) }} />
        </ExampleCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title={t.title}
      description=""
      date="10 May, 2026"
      readTime="15 min"
      category="Education"
      tags={["Calculus", "Functions"]}
      author={{ name: "Calculadora Derivadas Team", role: "Expert" }}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Functions", href: "/derivadas-de-funciones" }]}
      content={content}
    />
  );
}
