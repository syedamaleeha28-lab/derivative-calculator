"use client";

import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import Image from "next/image";

export default function DefinitionDerivativesPage() {
  const formula = "f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}";
  
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué es la Derivada por Definición?</h2>
        <p>
          La <strong>derivada por definición</strong>, también conocida como la <strong>derivada con límites</strong>, es el procedimiento fundamental para encontrar la razón de cambio de una función. Aunque existen reglas rápidas, entender este proceso es vital para comprender la esencia del cálculo diferencial.
        </p>
        <p className="mt-4">
          Si necesitas resolver ejercicios de forma inmediata, puedes usar nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas con pasos</Link>, la cual aplica las reglas derivadas de este límite fundamental.
        </p>
      </section>

      <section>
        <h2 id="formula">Fórmula de la Derivada con Límites</h2>
        <p className="mb-6">El límite que define la derivada en un punto $x$ se expresa matemáticamente así:</p>
        <FormulaCard title="Definición Formal de la Derivada">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} />
        </FormulaCard>
        <p className="mt-4">
          Este cociente representa la pendiente de una recta secante que se convierte en tangente a medida que $h$ se acerca a cero.
        </p>
        <figure className="my-8 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
            <Image
              src="/images/limite-secante-definicion-derivada.webp"
              alt="Gráfico educativo de la definición de derivada: curva, recta secante que se aproxima a la tangente y el punto de contacto, en colores violeta y lavanda."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos de Derivadas por Definición</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Derivar f(x) = x² por definición"
            steps={[
              "Planteamos el límite: lim_{h->0} [(x+h)² - x²] / h.",
              "Expandimos el binomio: (x² + 2xh + h² - x²) / h.",
              "Simplificamos términos: (2xh + h²) / h.",
              "Factorizamos h: h(2x + h) / h.",
              "Cancelamos h y evaluamos el límite (h=0): 2x."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} x^2 = 2x", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        El error más común al resolver <strong>derivadas con límites</strong> es cometer fallos algebraicos al expandir binomios o simplificar fracciones. ¡Sé muy cuidadoso con los paréntesis!
      </WarningCard>

      <section>
        <h2 id="pasos">Pasos generales para resolver</h2>
        <ol className="list-decimal pl-6 space-y-4 text-slate-600 dark:text-[#cbd5e1]">
          <li><strong>Evalúa f(x+h):</strong> Sustituye cada 'x' en la función original por '(x+h)'.</li>
          <li><strong>Sustituye en la fórmula:</strong> Coloca f(x+h) y f(x) en el numerador.</li>
          <li><strong>Simplifica el numerador:</strong> Elimina términos opuestos para que todo lo que quede tenga una 'h'.</li>
          <li><strong>Factoriza 'h':</strong> Esto te permitirá cancelar la indeterminación 0/0.</li>
          <li><strong>Aplica el límite:</strong> Haz que h sea igual a cero en la expresión final.</li>
        </ol>
        <TipCard>
          Si al final no puedes cancelar la 'h' del denominador, probablemente cometiste un error en la expansión algebraica del numerador.
        </TipCard>
      </section>

      <section>
        <h2 id="recursos">Acelera tu aprendizaje</h2>
        <p>
          Entender la base es genial, pero para tareas extensas, una <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas online</Link> es tu mejor aliada. Te ayudará a verificar si tu desarrollo por definición llegó al resultado correcto.
        </p>
        <p className="mt-4">
          También puedes consultar nuestra <Link href="/what-is-a-derivative" className="text-secondary font-bold">explicación conceptual de la derivada</Link> para ver la interpretación geométrica de este límite.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Derivada por Definición: Fórmulas y Límites Paso a Paso"
      description="Aprende a resolver derivadas usando la definición de límite. Guía detallada con ejemplos resueltos de derivadas por definición y pasos algebraicos."
      date="10 de Mayo, 2026"
      readTime="12 min"
      category="Fundamentos"
      tags={["Límites", "Definición", "Calculus"]}
      author={{
        name: "Academia Derivio",
        role: "Departamento de Matemáticas"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Derivada por Definición", href: "/derivadas-por-definicion" }
      ]}
      content={content}
      faqs={[
        { question: "¿Qué es el incremento 'h'?", answer: "Representa una distancia infinitamente pequeña entre dos puntos de la función." },
        { question: "¿Por qué se usa el límite?", answer: "Para evitar la división por cero y encontrar el valor exacto de la pendiente en un solo punto." },
        { question: "¿Es lo mismo que la regla de los cuatro pasos?", answer: "Sí, es el mismo procedimiento desglosado en etapas lógicas." }
      ]}
      relatedPosts={[
        { title: "Derivadas de Funciones", slug: "derivadas-de-funciones" },
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" },
        { title: "Cómo funciona", slug: "how-it-works" }
      ]}
    />
  );
}
