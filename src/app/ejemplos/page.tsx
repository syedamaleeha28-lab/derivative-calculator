import ArticleLayout, { ExampleCard, TipCard } from "@/components/EducationalArticle";
import InternalLinksSection from "@/components/InternalLinksSection";
import katex from "katex";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { dict } from "@/lib/dictionaries";
import { metadataFromEntry } from "@/lib/seo";
import { CONTENT_FIGURE } from "@/lib/image-sizes";
import cuadernoEjemplosImg from "../../../public/images/cuaderno-ejemplos-resueltos.webp";
import { EJEMPLOS_INTERNAL_LINKS } from "@/lib/internal-links";
import { internalLinksToRelated } from "@/lib/blog-posts/related";
export async function generateMetadata(): Promise<Metadata> {
  const m = dict.metadata.ejemplos;
  return metadataFromEntry("/ejemplos", {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
  });
}

export default async function DerivativeExamples() {
      const t = dict.examplesPage;

  const examples = [
    {
      title: "Derivada de una función constante",
      func: "f(x) = 15",
      res: "f'(x) = 0",
      desc: "La derivada de cualquier constante es siempre cero."
    },
    {
      title: "Derivada de un polinômio",
      func: "f(x) = x^3 + 2x^2 - 5",
      res: "f'(x) = 3x^2 + 4x",
      desc: "Aplicamos la regla de la potencia término a término."
    },
    {
      title: "Derivada del Seno con constante",
      func: "f(x) = 4\\sin(x)",
      res: "f'(x) = 4\\cos(x)",
      desc: "La constante multiplicativa (4) se mantiene."
    },
    {
      title: "Regla de la Cadena básica",
      func: "f(x) = (2x + 1)^5",
      res: "f'(x) = 5(2x + 1)^4 \\cdot (2) = 10(2x + 1)^4",
      desc: "Derivamos la potencia exterior y luego la interna."
    },
    {
      title: "Derivada de un Producto",
      func: "f(x) = x^2 \\cdot \\ln(x)",
      res: "f'(x) = 2x\\ln(x) + x^2(\\frac{1}{x}) = 2x\\ln(x) + x",
      desc: "Aplicamos la fórmula u'v + uv'."
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
          {t.sections.intro.p2.replace("reglas de derivación", "").trim()}{" "}
          <Link href="/reglas" className="text-secondary font-bold">
            reglas de derivación fundamentales
          </Link>
          .
        </p>
        <figure className="my-10 max-w-3xl mx-auto">
          <Image
            src={cuadernoEjemplosImg}
            alt={t.title}
            width={CONTENT_FIGURE.width}
            height={CONTENT_FIGURE.height}
            loading="lazy"
            className="w-full h-auto rounded-2xl border border-slate-100 shadow-lg object-cover"
            sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
          />
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
        <h2 id="practica">Prueba con tus propios ejercicios</h2>
        <p>
          Si tienes un ejercicio específico que no aparece aquí, utiliza nuestra herramienta principal para obtener la solución inmediata.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/#calculator" className="bg-secondary text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all">
            Ir a la Calculadora
          </Link>
        </div>
        <p className="mt-8 text-center text-slate-600">
          Amplía la práctica con{" "}
          <Link href="/blog/ejemplos-de-derivadas-resueltas" className="text-secondary font-bold hover:underline">
            más ejemplos de derivadas resueltas
          </Link>{" "}
          y{" "}
          <Link href="/blog/derivadas-implicitas-paso-a-paso" className="text-secondary font-bold hover:underline">
            derivadas implícitas resueltas
          </Link>
          .
        </p>
      </section>

      <InternalLinksSection title="Artículos relacionados" links={EJEMPLOS_INTERNAL_LINKS} />
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
      relatedPosts={internalLinksToRelated(EJEMPLOS_INTERNAL_LINKS)}
    />
  );
}
