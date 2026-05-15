import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import Image from "next/image";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].howItWorks;

  return {
    title: t.title,
    description: t.description,
  };
}

export default async function HowItWorks({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].howItWorks;

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
              <li className="flex justify-between"><span>{currentLang === "en" ? "Sine" : "Seno"}:</span> <span className="text-slate-900 font-bold">sin(x)</span></li>
              <li className="flex justify-between"><span>{currentLang === "en" ? "Cosine" : "Coseno"}:</span> <span className="text-slate-900 font-bold">cos(x)</span></li>
              <li className="flex justify-between"><span>{currentLang === "en" ? "Tangent" : "Tangente"}:</span> <span className="text-slate-900 font-bold">tan(x)</span></li>
              <li className="flex justify-between"><span>{currentLang === "en" ? "Arcsine" : "Arcoseno"}:</span> <span className="text-slate-900 font-bold">asin(x)</span></li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200">
            <h4 className="font-bold text-secondary mb-4 uppercase tracking-widest text-[0.7rem]">{t.sections.functions.special}</h4>
            <ul className="space-y-3 font-mono text-[0.9rem] text-slate-600">
              <li className="flex justify-between"><span>{currentLang === "en" ? "Natural Log" : "Log. Natural"}:</span> <span className="text-slate-900 font-bold">ln(x)</span></li>
              <li className="flex justify-between"><span>{currentLang === "en" ? "Exponential" : "Exponencial"}:</span> <span className="text-slate-900 font-bold">e^(x)</span></li>
              <li className="flex justify-between"><span>{currentLang === "en" ? "Root" : "Raíz"}:</span> <span className="text-slate-900 font-bold">sqrt(x)</span></li>
              <li className="flex justify-between"><span>{currentLang === "en" ? "Power" : "Potencia"}:</span> <span className="text-slate-900 font-bold">x^n</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 id="ejemplos">{currentLang === "en" ? "Common Usage Examples" : currentLang === "pt" ? "Exemplos de Uso Comum" : "Ejemplos de Uso Comum"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ExampleCard title={currentLang === "en" ? "Sine Derivative" : currentLang === "pt" ? "Derivada do Seno" : "Derivada del Seno"}>
            <p className="font-mono text-center text-lg">sin(x)</p>
          </ExampleCard>
          <ExampleCard title={currentLang === "en" ? "Natural Logarithm" : currentLang === "pt" ? "Logaritmo Natural" : "Logaritmo Natural"}>
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
