import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import InternalLinksSection from "@/components/InternalLinksSection";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { dict } from "@/lib/dictionaries";
import { metadataFromEntry } from "@/lib/seo";
import HowToJsonLd from "@/components/HowToJsonLd";
import { COMO_FUNCIONA_INTERNAL_LINKS } from "@/lib/internal-links";
import { internalLinksToRelated } from "@/lib/blog-posts/related";

export async function generateMetadata(): Promise<Metadata> {
  const m = dict.metadata.comoFunciona;
  return metadataFromEntry("/como-funciona", {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
  });
}

export default async function ComoFuncionaPage() {
  const t = dict.howItWorks;

  const content = (
    <div className="space-y-16">
      {/* Step by Step */}
      <section>
        <h2 id="instrucciones">{t.sections.steps.title}</h2>
        <p className="mb-8">
          {t.sections.steps.desc}
        </p>
        <figure className="mb-10 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <Image
              src="/images/interfaz-calculadora-matematica.webp"
              alt={t.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
        <div className="flex flex-col gap-8">
          {t.sections.steps.items.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center font-bold shadow-lg shadow-secondary/20">
                {i + 1}
              </div>
              <div>
                <h3 className="text-[1.2rem] font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notation */}
      <section>
        <h2 id="funciones">{t.sections.functions.title}</h2>
        <p className="mb-6">
          {t.sections.functions.desc}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200">
            <h4 className="font-bold text-secondary mb-4 uppercase tracking-widest text-[0.7rem]">{t.sections.functions.trig}</h4>
            <ul className="space-y-3 font-mono text-[0.9rem] text-slate-600">
              <li className="flex justify-between"><span>"Seno":</span> <span className="text-slate-900 font-bold">sin(x)</span></li>
              <li className="flex justify-between"><span>"Coseno":</span> <span className="text-slate-900 font-bold">cos(x)</span></li>
              <li className="flex justify-between"><span>"Tangente":</span> <span className="text-slate-900 font-bold">tan(x)</span></li>
              <li className="flex justify-between"><span>"Arcoseno":</span> <span className="text-slate-900 font-bold">asin(x)</span></li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200">
            <h4 className="font-bold text-secondary mb-4 uppercase tracking-widest text-[0.7rem]">{t.sections.functions.special}</h4>
            <ul className="space-y-3 font-mono text-[0.9rem] text-slate-600">
              <li className="flex justify-between"><span>"Log. Natural":</span> <span className="text-slate-900 font-bold">ln(x)</span></li>
              <li className="flex justify-between"><span>"Exponencial":</span> <span className="text-slate-900 font-bold">e^(x)</span></li>
              <li className="flex justify-between"><span>"Raíz":</span> <span className="text-slate-900 font-bold">sqrt(x)</span></li>
              <li className="flex justify-between"><span>"Potencia":</span> <span className="text-slate-900 font-bold">x^n</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 id="ejemplos">{"Ejemplos de Uso Común"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ExampleCard title="Derivada del Seno">
            <p className="font-mono text-center text-lg">sin(x)</p>
          </ExampleCard>
          <ExampleCard title="Logaritmo Natural">
            <p className="font-mono text-center text-lg">ln(x)</p>
          </ExampleCard>
        </div>
      </section>

      {/* Tips */}
      <section>
        <h2 id="tips">{t.sections.tips.title}</h2>
        <TipCard>
          {t.sections.tips.proTip}
        </TipCard>
        <WarningCard>
          {t.sections.tips.warning}
        </WarningCard>
        <p className="mt-6">
          Después de practicar con la herramienta, revisa{" "}
          <Link href="/blog/derivada-de-sin-x" className="text-secondary font-bold hover:underline">
            aprende la derivada de sin x paso a paso
          </Link>{" "}
          o los{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-secondary font-bold hover:underline">
            ejercicios de regla de la cadena
          </Link>
          .
        </p>
      </section>

      <InternalLinksSection title="Artículos relacionados" links={COMO_FUNCIONA_INTERNAL_LINKS} />
    </div>
  );

  return (
    <>
      <HowToJsonLd
        
        name={t.title}
        description={t.description}
        path="/como-funciona"
        steps={t.sections.steps.items}
      />
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
      relatedPosts={internalLinksToRelated(COMO_FUNCIONA_INTERNAL_LINKS)}
    />
    </>
  );
}
