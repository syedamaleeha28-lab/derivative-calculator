import ArticleLayout, { ExampleCard, TipCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import Image from "next/image";
import type { Metadata } from "next";
import { dictionaries, Lang } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].examplesPage;

  return {
    title: t.title,
    description: t.description,
  };
}

export default async function DerivativeExamples({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const t = dictionaries[currentLang].examplesPage;

  const examples = [
    {
      title: currentLang === "en" ? "Derivative of a constant function" : currentLang === "pt" ? "Derivada de uma função constante" : "Derivada de una función constante",
      func: "f(x) = 15",
      res: "f'(x) = 0",
      desc: currentLang === "en" ? "The derivative of any constant is always zero." : currentLang === "pt" ? "A derivada de qualquer constante é sempre zero." : "La derivada de cualquier constante es siempre cero."
    },
    {
      title: currentLang === "en" ? "Derivative of a polynomial" : currentLang === "pt" ? "Derivada de um polinômio" : "Derivada de un polinômio",
      func: "f(x) = x^3 + 2x^2 - 5",
      res: "f'(x) = 3x^2 + 4x",
      desc: currentLang === "en" ? "We apply the power rule term by term." : currentLang === "pt" ? "Aplicamos a regra da potência termo a termo." : "Aplicamos la regla de la potencia término a término."
    },
    {
      title: currentLang === "en" ? "Sine derivative with constant" : currentLang === "pt" ? "Derivada do Seno com constante" : "Derivada del Seno con constante",
      func: "f(x) = 4\\sin(x)",
      res: "f'(x) = 4\\cos(x)",
      desc: currentLang === "en" ? "The multiplicative constant (4) remains." : currentLang === "pt" ? "A constante multiplicativa (4) se mantém." : "La constante multiplicativa (4) se mantiene."
    },
    {
      title: currentLang === "en" ? "Basic Chain Rule" : currentLang === "pt" ? "Regra da Cadeia básica" : "Regla de la Cadena básica",
      func: "f(x) = (2x + 1)^5",
      res: "f'(x) = 5(2x + 1)^4 \\cdot (2) = 10(2x + 1)^4",
      desc: currentLang === "en" ? "We differentiate the outer power and then the inner part." : currentLang === "pt" ? "Derivamos a potência exterior e depois a interna." : "Derivamos la potencia exterior y luego la interna."
    },
    {
      title: currentLang === "en" ? "Product Rule Derivative" : currentLang === "pt" ? "Derivada de um Produto" : "Derivada de un Producto",
      func: "f(x) = x^2 \\cdot \\ln(x)",
      res: "f'(x) = 2x\\ln(x) + x^2(\\frac{1}{x}) = 2x\\ln(x) + x",
      desc: currentLang === "en" ? "We apply the u'v + uv' formula." : currentLang === "pt" ? "Aplicamos a fórmula u'v + uv'." : "Aplicamos la fórmula u'v + uv'."
    }
  ];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="importancia">{t.sections.intro.title}</h2>
        <p>
          {t.sections.intro.p1}
        </p>
        <p className="mt-4">
          {t.sections.intro.p2.replace("reglas de derivación", "").trim()} <Link href="/reglas" className="text-secondary font-bold">{currentLang === "en" ? "fundamental differentiation rules" : currentLang === "pt" ? "regras de derivação fundamentais" : "reglas de derivación fundamentales"}</Link>.
        </p>
        <figure className="my-10 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <Image
              src="/images/cuaderno-ejemplos-resueltos.webp"
              alt={t.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="basicos">{t.sections.basic.title}</h2>
        <p>
          {t.sections.basic.desc}
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8">
          {examples.slice(0, 3).map((ex, i) => (
            <ExampleCard key={i} title={ex.title}>
              <div className="text-center py-6 space-y-4">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.func, { displayMode: true }) }} />
                <div className="text-secondary font-bold text-xl">↓</div>
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.res, { displayMode: true }) }} />
              </div>
              <p className="text-sm text-slate-500 border-t border-slate-50 pt-4">
                {ex.desc}
              </p>
            </ExampleCard>
          ))}
        </div>
      </section>

      <section>
        <h2 id="avanzados">{t.sections.advanced.title}</h2>
        <p>
          {t.sections.advanced.desc}
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8">
          {examples.slice(3).map((ex, i) => (
            <ExampleCard key={i} title={ex.title}>
              <div className="text-center py-6 space-y-4">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.func, { displayMode: true }) }} />
                <div className="text-secondary font-bold text-xl">↓</div>
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.res, { displayMode: true }) }} />
              </div>
              <p className="text-sm text-slate-500 border-t border-slate-50 pt-4">
                {ex.desc}
              </p>
            </ExampleCard>
          ))}
        </div>
      </section>

      <section>
        <h2 id="practica">{currentLang === "en" ? "Try with your own exercises" : currentLang === "pt" ? "Tente com seus próprios exercícios" : "Prueba con tus propios ejercicios"}</h2>
        <p>
          {currentLang === "en" 
            ? "If you have a specific exercise that does not appear here, use our main tool to get the immediate solution."
            : currentLang === "pt"
            ? "Se você tiver um exercício específico que não aparece aqui, use nossa ferramenta principal para obter a solução imediata."
            : "Si tienes un ejercicio específico que no aparece aquí, utiliza nuestra herramienta principal para obtener la solución inmediata."
          }
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/#calculator" className="bg-secondary text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all">
            {currentLang === "en" ? "Go to Calculator" : currentLang === "pt" ? "Ir para a Calculadora" : "Ir a la Calculadora"}
          </Link>
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
