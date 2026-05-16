import ArticleLayout, { FormulaCard, TipCard, WarningCard, ExampleCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import Image from "next/image";
import type { Metadata } from "next";
import { generateMetadataForPath } from "@/lib/generate-page-metadata";

const PAGE_PATH = "/reglas/regla-de-la-potencia";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generateMetadataForPath(lang, PAGE_PATH);
}

export default function PowerRulePage() {
  const formula = "\\dfrac{d}{dx}\\left[x^n\\right] = n \\cdot x^{n-1}";

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="intro">¿Qué es la Regla de la Potencia?</h2>
        <p>
          La <strong>regla de la potencia</strong> es una de las fórmulas más utilizadas en el cálculo diferencial. Nos permite encontrar la derivada de funciones de la forma $f(x) = x^n$ de manera rápida y eficiente. Es el primer paso para dominar{" "}
          <Link href="/what-is-a-derivative" className="text-secondary font-bold">
            qué es una derivada
          </Link>{" "}
          en la práctica.
        </p>
        <p className="mt-4">
          Si estás buscando <strong>cómo resolver derivadas de potencias</strong>, esta es la primera regla que debes aprender antes de pasar a temas más complejos como la{" "}
          <Link href="/reglas/regla-de-la-cadena" className="text-secondary font-bold">
            regla de la cadena
          </Link>
          .
        </p>
        <figure className="my-8 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <Image
              src="/images/potencia-exponente-regla-derivada.webp"
              alt="Ilustración educativa de la regla de la potencia: curva tipo x elevado a n y la fórmula d sobre d x de x a la n igual a n por x a la n menos uno, en colores violeta y lavanda."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
              loading="lazy"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="formula">Fórmula de la Regla de la Potencia</h2>
        <p className="mb-6">
          Para cualquier constante real $n$, la derivada de $x^n$ se calcula multiplicando por el exponente y restando uno a la potencia:
        </p>
        <FormulaCard title="Fórmula General">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} />
        </FormulaCard>
        <p className="mt-4">
          Esta regla también aplica a raíces y exponentes fraccionarios cuando reescribes la expresión como potencia. Consulta la{" "}
          <Link href="/basic-derivative-formulas" className="text-secondary font-bold">
            tabla de fórmulas de derivadas
          </Link>{" "}
          para ver más casos.
        </p>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos Resueltos</h2>
        <div className="space-y-8">
          <ExampleCard
            title="Ejemplo 1: Polinomio simple"
            steps={[
              "Identificamos n = 3 en f(x) = x³.",
              "Multiplicamos por el exponente: 3x².",
              "Restamos 1 al exponente: 3x².",
            ]}
          >
            <div
              className="text-center"
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("f(x) = x^3 \\implies f'(x) = 3x^2", { displayMode: true }),
              }}
            />
          </ExampleCard>
          <ExampleCard
            title="Ejemplo 2: Raíz cuadrada"
            steps={[
              "Reescribimos √x como x^(1/2).",
              "Aplicamos la regla: (1/2)x^(-1/2).",
              "Simplificamos: 1/(2√x).",
            ]}
          >
            <div
              className="text-center"
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("f(x) = \\sqrt{x} \\implies f'(x) = \\dfrac{1}{2\\sqrt{x}}", {
                  displayMode: true,
                }),
              }}
            />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        La regla de la potencia no aplica directamente a expresiones como $e^x$ o $a^x$ (bases distintas de la variable). Para esos casos necesitas las reglas de derivadas exponenciales.
      </WarningCard>

      <section>
        <h2 id="practica">Practica con la calculadora</h2>
        <p>
          Usa nuestra{" "}
          <Link href="/#calculator" className="text-secondary font-bold">
            calculadora de derivadas paso a paso
          </Link>{" "}
          para verificar tus ejercicios de potencias y explorar más ejemplos en{" "}
          <Link href="/derivative-examples" className="text-secondary font-bold">
            ejercicios resueltos
          </Link>
          .
        </p>
        <TipCard>
          Si el exponente es una variable (como en $x^x$), necesitarás logaritmos y la regla de la cadena, no solo la regla de la potencia.
        </TipCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Regla de la Potencia: Fórmula, Ejemplos y Guía Completa"
      description="Aprende a derivar potencias con pasos detallados. Domina la regla de la potencia con ejemplos resueltos, aplicaciones y errores comunes a evitar."
      date="10 de Mayo, 2026"
      readTime="8 min"
      category="Reglas"
      tags={["Calculus", "Regla de la Potencia", "Derivadas"]}
      author={{
        name: "Calculadora Derivadas Team",
        role: "Expertos en Cálculo",
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Reglas", href: "/reglas" },
        { label: "Regla de la Potencia", href: PAGE_PATH },
      ]}
      content={content}
      faqs={[
        {
          question: "¿La regla de la potencia aplica a constantes?",
          answer: "Si f(x) = c (constante), su derivada es 0. La regla de la potencia aplica cuando la variable está en la base.",
        },
        {
          question: "¿Qué pasa con exponentes negativos?",
          answer: "Sigue funcionando: por ejemplo, la derivada de x⁻² es -2x⁻³.",
        },
        {
          question: "¿Cómo derivo una raíz cúbica?",
          answer: "Escribe ∛x como x^(1/3) y aplica la regla de la potencia.",
        },
      ]}
      relatedPosts={[
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" },
        { title: "Regla del Producto", slug: "reglas/regla-del-producto" },
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" },
      ]}
    />
  );
}
