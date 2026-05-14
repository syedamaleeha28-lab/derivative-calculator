import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Derivadas Exponenciales: Fórmulas y Ejercicios Paso a Paso",
  description: "Aprende a resolver derivadas exponenciales con cualquier base. Guía detallada con la derivada de e^x, ejemplos resueltos y aplicaciones de la regla de la cadena.",
};

export default function ExponentialDerivativesPage() {
  const formula = "\\dfrac{d}{dx}[e^u] = e^u \\cdot u'";
  
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué es una Derivada Exponencial?</h2>
        <p>
          Las <strong>derivadas exponenciales</strong> son aquellas donde la variable independiente se encuentra en el exponente. La función más emblemática es $e^x$, cuya propiedad única es que su derivada es idéntica a la función original.
        </p>
        <p className="mt-4">
          Dominar este tema es crucial para entender el crecimiento y decrecimiento en problemas reales. Nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas online</Link> resuelve estas funciones con precisión absoluta.
        </p>
      </section>

      <section>
        <h2 id="formula">Fórmulas de Derivadas Exponenciales</h2>
        <p className="mb-6">Dependiendo de la base de la potencia, aplicamos una de estas dos reglas fundamentales:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormulaCard title="Base Natural (e)">
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} />
          </FormulaCard>
          <FormulaCard title="Cualquier Base (a)">
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx}[a^u] = a^u \\cdot u' \\cdot \\ln(a)", { displayMode: true }) }} />
          </FormulaCard>
        </div>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos de Derivadas Exponenciales Resueltos</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Ejemplo 1: Función Exponencial Compuesta"
            steps={[
              "Función f(x) = e^(3x).",
              "Identificamos el exponente u = 3x, por lo tanto u' = 3.",
              "Aplicamos la fórmula e^u * u'.",
              "Resultado: 3e^(3x)."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = e^{3x} \\implies f'(x) = 3e^{3x}", { displayMode: true }) }} />
          </ExampleCard>

          <ExampleCard 
            title="Ejemplo 2: Base Distinta de e"
            steps={[
              "Función f(x) = 5^x.",
              "Base a = 5, u = x, u' = 1.",
              "Aplicamos la fórmula a^u * ln(a).",
              "Resultado: 5^x * ln(5)."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} 5^x = 5^x \\ln(5)", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        Un error clásico es confundir la regla de la potencia ($x^n$) con la regla exponencial ($a^x$). En la potencia, la base es la variable; en la exponencial, la variable está en el exponente. ¡No las intercambies!
      </WarningCard>

      <section>
        <h2 id="cadena">Relación con la Regla de la Cadena</h2>
        <p>
          Casi todas las <strong>derivadas exponenciales</strong> en exámenes involucran la <Link href="/reglas/regla-de-la-cadena" className="text-secondary font-bold">regla de la cadena</Link>. Siempre que el exponente sea más que una simple 'x', debes multiplicar el resultado por la derivada de ese exponente.
        </p>
        <TipCard>
          {'Si tienes una función como $e^{\\sin x}$, la derivada es $e^{\\sin x} \\cdot \\cos x$. Mantienes la exponencial intacta y multiplicas por la derivada de lo que está "arriba".'}
        </TipCard>
      </section>

      <section>
        <h2 id="ayuda">Verifica tus ejercicios paso a paso</h2>
        <p>
          ¿Tienes una base compleja o exponentes anidados? Usa nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas con pasos</Link> para ver el desglose completo del cálculo y asegurar tu aprendizaje.
        </p>
        <p className="mt-4">
          Explora más temas relacionados como las <Link href="/derivadas-logaritmicas" className="text-secondary font-bold">derivadas logarítmicas</Link> para dominar todas las funciones trascendentes.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Derivadas Exponenciales: Fórmulas y Ejercicios Paso a Paso"
      description="Aprende a resolver derivadas exponenciales con cualquier base. Guía detallada con la derivada de e^x, ejemplos resueltos y aplicaciones de la regla de la cadena."
      date="10 de Mayo, 2026"
      readTime="8 min"
      category="Matemáticas"
      tags={["Exponenciales", "Cálculo Diferencial", "Derivadas"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Análisis Matemático"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Derivadas Exponenciales", href: "/derivadas-exponenciales" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuál es la derivada de e^x?", answer: "La derivada de e^x es simplemente e^x. Es la única función cuya pendiente es igual a su valor en cada punto." },
        { question: "¿Cómo se deriva 2^x?", answer: "Aplicando la regla general: 2^x * ln(2)." },
        { question: "¿Qué es una función exponencial compuesta?", answer: "Es una función donde el exponente es otra función, como e^(x^2). Se resuelve usando la regla de la cadena." }
      ]}
      relatedPosts={[
        { title: "Derivadas Logarítmicas", slug: "derivadas-logaritmicas" },
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" },
        { title: "Ejemplos de Derivadas", slug: "derivative-examples" }
      ]}
    />
  );
}
