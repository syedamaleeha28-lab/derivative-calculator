"use client";

import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";

export default function ImplicitDerivativesPage() {
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué es la Derivación Implícita?</h2>
        <p>
          La <strong>derivación implícita</strong> es una técnica que se utiliza cuando no es posible (o es muy difícil) despejar la variable dependiente $y$ en términos de $x$. Se aplica en ecuaciones donde ambas variables están mezcladas, como en la ecuación de un círculo o una elipse.
        </p>
        <p className="mt-4">
          Aunque es un proceso avanzado, nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas online</Link> puede ayudarte a verificar los pasos intermedios de tus ejercicios de cálculo diferencial.
        </p>
      </section>

      <section>
        <h2 id="pasos">Pasos para Resolver Derivadas Implícitas</h2>
        <p className="mb-6">Sigue este procedimiento lógico para no perderte en el proceso:</p>
        <ol className="list-decimal pl-6 space-y-4 text-slate-600 dark:text-[#cbd5e1]">
          <li><strong>Deriva ambos lados:</strong> Diferencia cada término respecto a $x$.</li>
          <li><strong>Regla de la cadena para 'y':</strong> Cada vez que derives un término que contenga $y$, multiplica por $y'$ (o $dy/dx$).</li>
          <li><strong>Agrupa términos:</strong> Coloca todos los términos con $y'$ en un lado de la ecuación.</li>
          <li><strong>Factoriza $y'$:</strong> Extrae $y'$ como factor común.</li>
          <li><strong>Despeja:</strong> Divide por el resto de la expresión para encontrar la derivada final.</li>
        </ol>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos de Derivadas Implícitas Resueltos</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Derivar x² + y² = 25"
            steps={[
              "Derivamos respecto a x: d/dx(x²) + d/dx(y²) = d/dx(25).",
              "Obtenemos: 2x + 2y·y' = 0.",
              "Despejamos 2y·y' = -2x.",
              "Resultado final: y' = -x/y."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("x^2 + y^2 = 25 \\implies y' = -\\dfrac{x}{y}", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        El error más común en la <strong>derivación implícita</strong> es olvidar multiplicar por $y'$ al derivar términos con $y$. Recuerda que $y$ es una función oculta de $x$, por lo que siempre aplica la <Link href="/reglas/regla-de-la-cadena" className="text-secondary font-bold">regla de la cadena</Link>.
      </WarningCard>

      <section>
        <h2 id="aplicaciones">Aplicaciones Prácticas</h2>
        <p>
          Esta técnica es fundamental en física para encontrar razones de cambio relacionadas y en geometría para hallar la recta tangente a curvas que no son funciones simples.
        </p>
        <TipCard>
          Si la ecuación contiene productos como $xy$, deberás aplicar la <Link href="/reglas/regla-del-producto" className="text-secondary font-bold">regla del producto</Link> combinada con la derivación implícita.
        </TipCard>
      </section>

      <section>
        <h2 id="ayuda">Domina el cálculo con Derivio</h2>
        <p>
          Nuestra <strong>calculadora de derivadas paso a paso</strong> está en constante actualización para soportar expresiones cada vez más complejas. Practica con nuestros <Link href="/derivative-examples" className="text-secondary font-bold">ejemplos de derivadas</Link> para ganar confianza.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Calculadora de Derivadas Implícitas: Guía y Ejemplos"
      description="Aprende a resolver derivadas implícitas paso a paso. Guía completa con la técnica de derivación implícita, ejemplos resueltos y aplicaciones prácticas."
      date="10 de Mayo, 2026"
      readTime="15 min"
      category="Avanzado"
      tags={["Derivación Implícita", "Calculus", "Ejercicios"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Cálculo"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Derivadas Implícitas", href: "/calculadora-de-derivadas-implicitas" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuándo se usa la derivación implícita?", answer: "Se usa cuando y no está despejada y es difícil o imposible hacerlo, como en x³ + y³ = 6xy." },
        { question: "¿Qué significa y' en el resultado?", answer: "Representa la derivada de y respecto a x (dy/dx)." },
        { question: "¿Es más difícil que la derivación normal?", answer: "Requiere más álgebra y atención a la regla de la cadena, pero sigue los mismos principios básicos." }
      ]}
      relatedPosts={[
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" },
        { title: "Derivadas Parciales", slug: "partial-derivatives" },
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" }
      ]}
    />
  );
}
