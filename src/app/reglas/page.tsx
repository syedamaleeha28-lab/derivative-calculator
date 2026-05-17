import ArticleLayout, { TipCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { dict } from "@/lib/dictionaries";
import { metadataFromEntry } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = dict.rulesPage;
  return metadataFromEntry("/reglas", { title: t.title, description: t.description });
}

export default async function ReglasPage() {
  const t = dict.rulesPage;
  const rules = dict.rules.list;

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="importancia">{t.sections.importance.title}</h2>
        <p>
          {t.sections.importance.p1}
        </p>
        <p className="mt-4">
          {t.sections.importance.p2.replace("qué es una derivada", "").trim()}{" "}
          <Link href="/como-funciona" className="text-secondary font-bold underline decoration-secondary/30 hover:decoration-secondary">
            qué es una derivada
          </Link>{" "}
          antes de memorizar las fórmulas.
        </p>
        <figure className="my-10 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <Image
              src="/images/guia-reglas-derivacion-matematicas.webp"
              alt={t.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="catalogo">{t.sections.catalog.title}</h2>
        <p className="mb-8">{t.sections.catalog.desc}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.entries(rules).map(([key, rule], i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:border-secondary transition-all shadow-sm flex flex-col h-full">
              <h3 className="font-bold text-slate-900 text-xl mb-3 flex items-center justify-between group-hover:text-secondary transition-colors">
                {rule.name}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {rule.desc}
              </p>
              <div className="mt-auto text-secondary font-bold text-[0.8rem] flex items-center gap-1">
                {t.sections.catalog.readMore} <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="resumen-formulas">{t.sections.formulas.title}</h2>
        <p className="mb-6">{t.sections.formulas.desc}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormulaCard title={rules.power.name}>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\frac{d}{dx}x^n = n x^{n-1}", { displayMode: true }) }} />
          </FormulaCard>
          <FormulaCard title={rules.chain.name}>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("[f(g(x))]' = f'(g(x)) \\cdot g'(x)", { displayMode: true }) }} />
          </FormulaCard>
        </div>
        <p className="mt-6">
          {t.sections.formulas.p1.replace("tabla de fórmulas completa", "").trim()}{" "}
          <Link href="/reglas" className="text-secondary font-bold">
            tabla de fórmulas completa
          </Link>.
        </p>
      </section>

      <section>
        <h2 id="ejemplos-reales">Ejemplos de Aplicación</h2>
        <p>
          No basta con saber la fórmula; hay que saber cuándo aplicarla. En funciones complejas, a menudo tendrás que combinar varias reglas.
        </p>
        <TipCard>
          Si tienes una división de funciones, siempre es preferible usar la regla del cociente, pero a veces puedes subir el denominador como potencia negativa y usar el producto.
        </TipCard>
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
      relatedPosts={[
        { title: "Tabla de Fórmulas", slug: "/reglas" },
        { title: "Ejemplos de Cálculo", slug: "/ejemplos" },
        { title: "¿Qué es una Derivada?", slug: "/como-funciona" },
      ]}
    />
  );
}
