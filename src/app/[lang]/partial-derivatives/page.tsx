import ArticleLayout, { FormulaCard, TipCard, WarningCard, ExampleCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import Image from "next/image";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";
import { metadataFromEntry, normalizeLang } from "@/lib/seo";
import { LOCALIZED_ROUTES } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = normalizeLang(lang);
  const t = dictionaries[currentLang].partialPage;
  return metadataFromEntry(currentLang, "/partial-derivatives", { title: t.title, description: t.description }, {
    localizedPaths: LOCALIZED_ROUTES["/partial-derivatives"],
  });
}

export default async function PartialDerivatives({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].partialPage;

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">{t.sections.intro.title}</h2>
        <p>
          {t.sections.intro.p1}
        </p>
        <p className="mt-4">
          <Link href="/what-is-a-derivative" className="text-secondary font-bold">{currentLang === "en" ? "derivative concept" : currentLang === "pt" ? "conceito de derivada" : "concepto de derivada"}</Link> {currentLang === "en" ? "in higher dimensions." : currentLang === "pt" ? "em dimensões superiores." : "en dimensiones superiores."}
        </p>
      </section>

      <section>
        <h2 id="notacion">{t.sections.notation.title}</h2>
        <p>
          {t.sections.notation.p1}
        </p>
        <FormulaCard title={currentLang === "en" ? "Partial Derivative Notation" : currentLang === "pt" ? "Notação de Derivada Parcial" : "Notación de Derivada Parcial"}>
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\frac{\\partial f}{\\partial x} \\quad \\text{o} \\quad f_x(x, y)", { displayMode: true }) }} />
        </FormulaCard>
      </section>

      <section>
        <h2 id="como-calcular">{currentLang === "en" ? "How to Calculate Partial Derivatives" : currentLang === "pt" ? "Como calcular derivadas parciais" : "Cómo calcular derivadas parciales"}</h2>
        <ExampleCard title={currentLang === "en" ? "Practical Example" : currentLang === "pt" ? "Exemplo Prático" : "Ejemplo Práctico"}>
           <div className="bg-slate-50 p-3 rounded-lg mt-2 font-mono text-center text-secondary font-bold">
                $f(x, y) = 3x^2y + y^3$
            </div>
            <div className="mt-4 space-y-2">
              <p><strong>fx:</strong> 6xy</p>
              <p><strong>fy:</strong> 3x^2 + 3y^2</p>
            </div>
        </ExampleCard>
      </section>

      <section>
        <h2 id="interpretacion">{currentLang === "en" ? "Geometric Interpretation" : currentLang === "pt" ? "Interpretação Geométrica" : "Interpretación Geométrica"}</h2>
        <div className="my-8 max-w-3xl mx-auto relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
          <Image
            src="/images/superficie-derivadas-parciales.webp"
            alt={t.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
          />
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
