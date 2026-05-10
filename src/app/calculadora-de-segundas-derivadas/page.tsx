"use client";

import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";

export default function HigherOrderDerivativesPage() {
  const formula = "f''(x) = \\dfrac{d}{dx} [f'(x)]";
  
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué es una Segunda Derivada?</h2>
        <p>
          La <strong>segunda derivada</strong> de una función es el resultado de derivar la derivada de la función original. En física, representa la aceleración si la función original describe la posición. En matemáticas, nos indica la <strong>concavidad</strong> de una curva y la ubicación de los puntos de inflexión.
        </p>
        <p className="mt-4">
          Nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas con pasos</Link> puede hallar derivadas de segundo, tercer y cuarto orden con explicaciones detalladas para cada etapa.
        </p>
      </section>

      <section>
        <h2 id="notacion">Notación de Derivadas de Orden Superior</h2>
        <p className="mb-6">Existen varias formas de representar la segunda derivada, las más comunes son:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-center">
            <span className="text-[0.7rem] font-bold text-secondary uppercase mb-2 block">Notación de Lagrange</span>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("f''(x)", { displayMode: true }) }} />
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-center">
            <span className="text-[0.7rem] font-bold text-secondary uppercase mb-2 block">Notación de Leibniz</span>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d^2y}{dx^2}", { displayMode: true }) }} />
          </div>
        </div>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos de Segundas Derivadas Resueltos</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Calcular f''(x) para f(x) = x³ + 5x²"
            steps={[
              "Calculamos la primera derivada: f'(x) = 3x² + 10x.",
              "Derivamos el resultado obtenido: d/dx (3x² + 10x).",
              "Resultado final: f''(x) = 6x + 10."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = x^3 + 5x^2 \\implies f''(x) = 6x + 10", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        Un error común es intentar calcular la <strong>segunda derivada</strong> directamente desde la función original sin pasar por la primera. Recuerda: es un proceso sucesivo. ¡Primero la primera, luego la segunda!
      </WarningCard>

      <section>
        <h2 id="concavidad">Concavidad y Puntos de Inflexión</h2>
        <p>
          Si $f''(x) > 0$, la función es cóncava hacia arriba (como una U). Si $f''(x) < 0$, es cóncava hacia abajo. Los puntos donde la segunda derivada cambia de signo se llaman <strong>puntos de inflexión</strong>.
        </p>
        <TipCard>
          Usa la segunda derivada para confirmar si un punto crítico encontrado con la primera derivada es un máximo o un mínimo local (Criterio de la Segunda Derivada).
        </TipCard>
      </section>

      <section>
        <h2 id="ayuda">Domina el cálculo con pasos</h2>
        <p>
          Nuestra <strong>calculadora de derivadas online</strong> te permite verificar la concavidad de tus funciones instantáneamente. Simplemente introduce tu función y revisa el desarrollo para encontrar las derivadas sucesivas.
        </p>
        <p className="mt-4">
          Aprende más sobre las reglas básicas en nuestra sección de <Link href="/reglas" className="text-secondary font-bold">reglas de derivación</Link>.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Calculadora de Segundas Derivadas: Guía y Concavidad"
      description="Aprende a calcular la segunda derivada de cualquier función. Guía sobre derivadas de orden superior, concavidad, puntos de inflexión y ejercicios resueltos."
      date="10 de Mayo, 2026"
      readTime="8 min"
      category="Tutoriales"
      tags={["Segunda Derivada", "Concavidad", "Calculus"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Cálculo"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Segundas Derivadas", href: "/calculadora-de-segundas-derivadas" }
      ]}
      content={content}
      faqs={[
        { question: "¿Qué representa la segunda derivada en física?", answer: "Representa la aceleración instantánea de un objeto en movimiento." },
        { question: "¿Puedo calcular terceras y cuartas derivadas?", answer: "Sí, el proceso es el mismo: derivar el resultado anterior sucesivamente." },
        { question: "¿Cómo se si hay un punto de inflexión?", answer: "Busca los valores de x donde f''(x) = 0 o no existe, y verifica que haya un cambio de signo en la concavidad." }
      ]}
      relatedPosts={[
        { title: "Derivadas de Funciones", slug: "derivadas-de-funciones" },
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" },
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" }
      ]}
    />
  );
}
