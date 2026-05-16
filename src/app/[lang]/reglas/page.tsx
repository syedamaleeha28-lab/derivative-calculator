import ArticleLayout, { TipCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";
import { metadataFromEntry, normalizeLang } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = normalizeLang(lang);
  const t = dictionaries[currentLang].rulesPage;
  return metadataFromEntry(currentLang, "/reglas", { title: t.title, description: t.description });
}

export default async function ReglasPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].rulesPage;
  const rules = dictionaries[currentLang].rules.list;

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="importancia">{t.sections.importance.title}</h2>
        <p>
          {t.sections.importance.p1}
        </p>
        <p className="mt-4">
          {t.sections.importance.p2.replace("qué es una derivada", "").trim()} <Link href="/what-is-a-derivative" className="text-secondary font-bold underline decoration-secondary/30 hover:decoration-secondary">{currentLang === "en" ? "what is a derivative" : currentLang === "pt" ? "o que é uma derivada" : "qué es una derivada"}</Link> {currentLang === "en" ? "before memorizing formulas." : currentLang === "pt" ? "antes de memorizar as fórmulas." : "antes de memorizar las fórmulas."}
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
            <Link key={i} href={`/reglas/${key === 'power' ? 'regla-de-la-potencia' : key === 'chain' ? 'regla-de-la-cadena' : key === 'product' ? 'regla-del-producto' : key === 'quotient' ? 'regla-del-cociente' : key === 'trig' ? 'derivadas-trigonometricas' : ''}`} className="group p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:border-secondary transition-all shadow-sm flex flex-col h-full">
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
            </Link>
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
          {t.sections.formulas.p1.replace("tabla de fórmulas completa", "").trim()} <Link href="/basic-derivative-formulas" className="text-secondary font-bold">{currentLang === "en" ? "full formulas table" : currentLang === "pt" ? "tabela de fórmulas completa" : "tabla de fórmulas completa"}</Link>.
        </p>
      </section>

      <section>
        <h2 id="ejemplos-reales">{currentLang === "en" ? "Application Examples" : currentLang === "pt" ? "Exemplos de Aplicação" : "Ejemplos de Aplicación"}</h2>
        <p>
          {currentLang === "en" 
            ? "It is not enough to know the formula; you have to know when to apply it. In complex functions, you will often have to combine several rules."
            : currentLang === "pt"
            ? "Não basta saber a fórmula; é preciso saber quando aplicá-la. Em funções complexas, muitas vezes você terá que combinar várias regras."
            : "No basta con saber la fórmula; hay que saber cuándo aplicarla. En funciones complejas, a menudo tendrás que combinar varias reglas."
          }
        </p>
        <TipCard>
          {currentLang === "en"
            ? "If you have a division of functions, it is always preferable to use the quotient rule, but sometimes you can move the denominator as a negative power and use the product rule."
            : currentLang === "pt"
            ? "Se você tiver uma divisão de funções, é sempre preferível usar a regra do quociente, mas às vezes você pode subir o denominador como uma potência negativa e usar a regra do produto."
            : "Si tienes una división de funciones, siempre es preferible usar la regla del cociente, pero a veces puedes subir el denominador como potencia negativa y usar el producto."
          }
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
        { title: currentLang === "en" ? "Formulas Table" : currentLang === "pt" ? "Tabela de Fórmulas" : "Tabla de Fórmulas", slug: "basic-derivative-formulas" },
        { title: currentLang === "en" ? "Calculus Examples" : currentLang === "pt" ? "Exemplos de Cálculo" : "Ejemplos de Cálculo", slug: "derivative-examples" },
        { title: currentLang === "en" ? "What is a Derivative?" : currentLang === "pt" ? "O que é uma Derivada?" : "¿Qué es una Derivada?", slug: "what-is-a-derivative" }
      ]}
    />
  );
}
