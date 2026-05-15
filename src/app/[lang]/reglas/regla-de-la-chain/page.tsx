"use client";

import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import Image from "next/image";

export default function ChainRulePage() {
  const formula = "\\dfrac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)";
  
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué es la Regla de la Cadena?</h2>
        <p>
          La <strong>regla de la cadena</strong> es una fórmula para calcular la derivada de una función compuesta. En términos sencillos, se utiliza cuando tienes una función "dentro" de otra. Es, sin duda, la herramienta más utilizada en el cálculo diferencial.
        </p>
        <p className="mt-4">
          Si necesitas un repaso de las bases, consulta nuestra <Link href="/basic-derivative-formulas" className="text-secondary font-bold">tabla de fórmulas básicas</Link>.
        </p>
        <figure className="my-8 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
            <Image
              src="/images/funciones-anidadas-regla-cadena.webp"
              alt="Diagrama educativo de funciones compuestas para la regla de la cadena: capas exterior e interior y la idea de multiplicar la derivada exterior por la derivada interior, en tonos violeta."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="formula">Fórmula de la Regla de la Cadena</h2>
        <p className="mb-6">La estructura matemática formal es la siguiente:</p>
        <FormulaCard title="Fórmula General">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} />
        </FormulaCard>
        <p className="mt-4">
          Donde $f$ es la función exterior y $g$ es la función interior. El resultado es la derivada de la exterior multiplicada por la derivada de la interior.
        </p>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos Resueltos Paso a Paso</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Ejemplo 1: Potencia de una función"
            steps={[
              "Identificamos la función exterior: u^5 y la interior: g(x) = 3x^2 + 1.",
              "Derivamos lo exterior: 5(3x^2 + 1)^4.",
              "Multiplicamos por la derivada de lo interior: g'(x) = 6x.",
              "Resultado final: 30x(3x^2 + 1)^4."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = (3x^2 + 1)^5 \\implies f'(x) = 30x(3x^2 + 1)^4", { displayMode: true }) }} />
          </ExampleCard>

          <ExampleCard 
            title="Ejemplo 2: Función trigonométrica"
            steps={[
              "La función exterior es sin(u) y la interior es x^2.",
              "La derivada de sin(u) es cos(u).",
              "Multiplicamos por la derivada de x^2, que es 2x.",
              "Resultado: 2x cos(x^2)."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = \\sin(x^2) \\implies f'(x) = 2x\\cos(x^2)", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        El error más común es olvidar derivar la función interior ($g'(x)$). Muchos estudiantes se quedan solo en $f'(g(x))$, lo cual es un resultado incompleto. ¡Siempre recuerda derivar lo de adentro!
      </WarningCard>

      <section>
        <h2 id="analogia">La analogía de la cebolla</h2>
        <p>
          Imagina una función compuesta como una cebolla. Para llegar al centro, tienes que pelar capa por capa. La regla de la cadena te dice que derives la capa exterior manteniendo el resto intacto, y luego pases a la siguiente capa multiplicando los resultados.
        </p>
        <TipCard>
          Esta regla se puede aplicar de forma recursiva. Si tienes una función con tres niveles de anidamiento, simplemente aplicas la cadena dos veces.
        </TipCard>
      </section>

      <section>
        <h2 id="aplicaciones">Aplicaciones Avanzadas</h2>
        <p>
          La regla de la cadena es vital para entender las <Link href="/partial-derivatives" className="text-secondary font-bold">derivadas parciales</Link> y es el motor detrás del algoritmo de <em>Backpropagation</em> en el entrenamiento de Inteligencia Artificial.
        </p>
        <p className="mt-4">
          Puedes practicar más ejercicios en nuestra sección de <Link href="/derivative-examples" className="text-secondary font-bold">ejemplos de derivadas</Link>.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Regla de la Cadena: Guía Definitiva y Ejemplos"
      description="Aprende a dominar la regla de la cadena para funciones compuestas. Explicaciones paso a paso, fórmulas y ejercicios resueltos para aprobar cálculo."
      date="10 de Mayo, 2026"
      readTime="12 min"
      category="Reglas"
      tags={["Calculus", "Regla de la Cadena", "Derivadas Compuestas"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Cálculo"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Reglas", href: "/reglas" },
        { label: "Regla de la Cadena", href: "/reglas/regla-de-la-chain" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuándo se usa la regla de la cadena?", answer: "Se usa siempre que tengas una función dentro de otra, como sin(3x), ln(x^2) o (x+1)^3." },
        { question: "¿Qué pasa si hay 3 funciones anidadas?", answer: "Aplicas la regla sucesivamente: derivas la primera, por la derivada de la segunda, por la derivada de la tercera." },
        { question: "¿Es lo mismo que la derivada del producto?", answer: "No. El producto es para f(x) * g(x). La cadena es para f(g(x)). Son estructuras matemáticas distintas." }
      ]}
      relatedPosts={[
        { title: "Regla del Producto", slug: "reglas/regla-del-producto" },
        { title: "Derivadas Trigonométricas", slug: "reglas/derivadas-trigonometricas" },
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" }
      ]}
    />
  );
}
