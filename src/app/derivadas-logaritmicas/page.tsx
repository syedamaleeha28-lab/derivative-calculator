"use client";

import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";

export default function LogarithmicDerivativesPage() {
  const formula = "\\dfrac{d}{dx}[\\ln(u)] = \\dfrac{u'}{u}";
  
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué es una Derivada Logarítmica?</h2>
        <p>
          Las <strong>derivadas logarítmicas</strong> son aquellas funciones donde la variable independiente se encuentra dentro de un logaritmo. La más común es la derivada del logaritmo natural ($\ln x$), cuya resolución es fundamental en el cálculo diferencial.
        </p>
        <p className="mt-4">
          Nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas online</Link> puede procesar cualquier función logarítmica, ya sea de base natural ($e$) o base decimal, proporcionando el procedimiento paso a paso.
        </p>
      </section>

      <section>
        <h2 id="formula">Fórmula de la Derivada del Logaritmo</h2>
        <p className="mb-6">Para derivar un logaritmo natural de una función $u$, utilizamos la siguiente regla combinada con la regla de la cadena:</p>
        <FormulaCard title="Fórmula General">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} />
        </FormulaCard>
        <p className="mt-4">
          Básicamente, la derivada es la derivada del argumento dividida por el argumento original.
        </p>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos de Derivadas Logarítmicas Resueltos</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Ejemplo 1: Logaritmo Natural Simple"
            steps={[
              "Función f(x) = ln(x).",
              "Aplicamos la regla directa: u = x, u' = 1.",
              "Resultado: 1/x."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} \\ln(x) = \\dfrac{1}{x}", { displayMode: true }) }} />
          </ExampleCard>

          <ExampleCard 
            title="Ejemplo 2: Con Regla de la Cadena"
            steps={[
              "Función f(x) = ln(x² + 5).",
              "Identificamos u = x² + 5, por lo tanto u' = 2x.",
              "Aplicamos la fórmula u'/u: 2x / (x² + 5).",
              "Resultado: 2x / (x² + 5)."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = \\ln(x^2 + 5) \\implies f'(x) = \\dfrac{2x}{x^2 + 5}", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        Un error común en las <strong>derivadas logarítmicas</strong> es olvidar derivar el argumento cuando se trata de una función compuesta. Recuerda siempre aplicar la regla de la cadena para obtener el resultado correcto.
      </WarningCard>

      <section>
        <h2 id="derivacion-logaritmica">Técnica de Derivación Logarítmica</h2>
        <p>
          Esta técnica se utiliza para derivar funciones complejas como $x^x$ o productos de muchos factores. Consiste en aplicar logaritmos a ambos lados de la ecuación para simplificar las potencias antes de derivar.
        </p>
        <TipCard>
          Usa las propiedades de los logaritmos ($\ln(a \cdot b) = \ln a + \ln b$) para convertir productos en sumas antes de empezar a derivar. ¡Esto te ahorrará mucho tiempo!
        </TipCard>
      </section>

      <section>
        <h2 id="ayuda">Resuelve tus dudas online</h2>
        <p>
          Si tienes problemas con ejercicios complejos, nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas paso a paso</Link> te mostrará exactamente qué propiedad logarítmica se aplicó en cada etapa.
        </p>
        <p className="mt-4">
          También puedes consultar nuestra <Link href="/basic-derivative-formulas" className="text-secondary font-bold">tabla de derivadas</Link> para ver las fórmulas de logaritmos en otras bases.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Derivadas Logarítmicas: Fórmulas, Ejemplos y Técnicas"
      description="Aprende a resolver derivadas logarítmicas paso a paso. Guía completa sobre la derivada de ln(x), técnica de derivación logarítmica y ejercicios resueltos."
      date="10 de Mayo, 2026"
      readTime="10 min"
      category="Tutoriales"
      tags={["Logaritmos", "Calculus", "Derivadas"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Cálculo"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Tutoriales", href: "/blog" },
        { label: "Derivadas Logarítmicas", href: "/derivadas-logaritmicas" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuál es la derivada de ln(x)?", answer: "La derivada del logaritmo natural de x es 1/x." },
        { question: "¿Qué pasa si la base no es 'e'?", answer: "Para logaritmos en base 'a', la derivada es 1 / (x * ln(a))." },
        { question: "¿Cuándo usar derivación logarítmica?", answer: "Se recomienda cuando la base y el exponente contienen variables, como en f(x) = x^x." }
      ]}
      relatedPosts={[
        { title: "Derivadas Exponenciales", slug: "derivadas-exponenciales" },
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" },
        { title: "Calculadora de Pasos", slug: "how-to-use-derivative-calculator" }
      ]}
    />
  );
}
