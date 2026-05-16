import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout, { ExampleCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import {
  EDUCATIONAL_DERIVATIVE_PAGES,
  educationalPagePath,
  getEducationalPage,
} from "@/lib/educational-derivative-pages";
import { buildPageMetadata, normalizeLang } from "@/lib/seo";
import type { Lang } from "@/lib/dictionary-types";
import { dictionaries } from "@/lib/dictionaries";
import Link from "@/components/LanguageLink";

const LANGS: Lang[] = ["es", "en", "pt"];

export function generateStaticParams() {
  return EDUCATIONAL_DERIVATIVE_PAGES.flatMap((page) =>
    LANGS.map((lang) => ({ lang, slug: page.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const page = getEducationalPage(slug);
  if (!page) return {};
  const currentLang = normalizeLang(lang);
  const copy = page.copy[currentLang];
  const path = educationalPagePath(slug);
  return buildPageMetadata({
    lang: currentLang,
    path,
    title: copy.title,
    description: copy.description,
    keywords: `derivative ${page.expression}, ${page.expression} derivative, differentiation`,
  });
}

export default async function DerivativeOfPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const page = getEducationalPage(slug);
  if (!page) notFound();

  const currentLang = normalizeLang(lang);
  const copy = page.copy[currentLang];
  const home = dictionaries[currentLang].breadcrumbs.home;
  const solvedLabel = dictionaries[currentLang].common.solvedExamples;

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="intro">{copy.title}</h2>
        <p>{copy.intro}</p>
      </section>
      <section>
        <h2 id="formula">{copy.formulaTitle}</h2>
        <FormulaCard title={copy.formulaTitle}>
          <div
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(page.latexFormula, { displayMode: true }),
            }}
          />
        </FormulaCard>
      </section>
      <section>
        <h2 id="ejemplos">{copy.examplesTitle}</h2>
        <ExampleCard title={copy.exampleTitle}>
          <div
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(page.latexExample, { displayMode: true }),
            }}
          />
        </ExampleCard>
        <p className="mt-6">
          <Link
            href={`/#calculator`}
            className="text-secondary font-bold underline decoration-secondary/30"
          >
            {currentLang === "en"
              ? "Try in calculator"
              : currentLang === "pt"
                ? "Testar na calculadora"
                : "Probar en la calculadora"}
          </Link>
          : <code className="font-mono text-sm bg-slate-100 px-2 py-0.5 rounded">{page.calculatorInput}</code>
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title={copy.title}
      description={copy.description}
      date="17 May, 2026"
      readTime="6 min"
      category={copy.category}
      tags={page.tags}
      author={{ name: "Calculadora Derivadas Team", role: "Expert" }}
      breadcrumbs={[
        { label: home, href: "/" },
        { label: solvedLabel, href: "/examples" },
        { label: page.expression, href: educationalPagePath(slug) },
      ]}
      content={content}
    />
  );
}
