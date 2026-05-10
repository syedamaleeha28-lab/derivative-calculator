"use client";

import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";

export default function MultivariableDerivativesPage() {
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué son las Derivadas de Varias Variables?</h2>
        <p>
          Las <strong>derivadas de varias variables</strong>, también conocidas como <strong>derivadas parciales</strong>, se aplican a funciones que dependen de más de una variable independiente (como $x$, $y$, $z$). En lugar de medir el cambio total, medimos cómo cambia la función respecto a una variable mientras mantenemos las demás constantes.
        </p>
        <p className="mt-4">
          Nuestra sección de <Link href="/partial-derivatives" className="text-secondary font-bold">derivadas parciales</Link> profundiza en este tema, y pronto integraremos una calculadora específica para este nivel avanzado de cálculo.
        </p>
      </section>

      <section>
        <h2 id="conceptos">Conceptos Clave del Cálculo Multivariable</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Derivada Parcial</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              La pendiente de la función en la dirección de uno de los ejes coordenados. Se denota con el símbolo $\partial$.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">Gradiente</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Un vector que contiene todas las derivadas parciales de la función. Indica la dirección de máximo crecimiento.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos de Derivadas de Varias Variables</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Calcular ∂f/∂x para f(x, y) = x²y + sin(y)"
            steps={[
              "Identificamos que derivamos respecto a x.",
              "Tratamos a 'y' como si fuera un número constante.",
              "Derivada de x²y: (2x) * y = 2xy.",
              "Derivada de sin(y) respecto a x: 0 (es una constante).",
              "Resultado final: ∂f/∂x = 2xy."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x, y) = x^2y + \\sin(y) \\implies \\dfrac{\\partial f}{\\partial x} = 2xy", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        El error más frecuente es intentar derivar todas las variables al mismo tiempo. Recuerda: en una <strong>derivada parcial</strong>, todas las letras que no sean la variable de diferenciación se comportan como números fijos.
      </WarningCard>

      <section>
        <h2 id="aplicaciones">Aplicaciones en Ciencia y Datos</h2>
        <p>
          Este tipo de cálculo es la base de la optimización en Inteligencia Artificial (Descenso del Gradiente) y de las leyes de la termodinámica en física.
        </p>
        <TipCard>
          Si necesitas calcular el cambio total en todas las direcciones, busca el concepto de <strong>Diferencial Total</strong>.
        </TipCard>
      </section>

      <section>
        <h2 id="ayuda">Aprende cálculo avanzado con pasos</h2>
        <p>
          Dominar las <strong>derivadas de varias variables</strong> requiere una base sólida en <Link href="/derivadas-de-funciones" className="text-secondary font-bold">derivadas simples</Link>. Asegúrate de revisar nuestras guías de <Link href="/reglas" className="text-secondary font-bold">reglas de derivación</Link> antes de avanzar.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Derivadas de Varias Variables: Guía de Cálculo Multivariable"
      description="Aprende a resolver derivadas de varias variables o derivadas parciales. Guía completa con ejemplos resueltos, gradientes y aplicaciones avanzadas."
      date="10 de Mayo, 2026"
      readTime="12 min"
      category="Cálculo Avanzado"
      tags={["Multivariable", "Derivadas Parciales", "Gradiente"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Matemáticas"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Varias Variables", href: "/derivadas-de-varias-variables" }
      ]}
      content={content}
      faqs={[
        { question: "¿Qué diferencia hay con una derivada normal?", answer: "En la normal solo hay una variable. En varias variables, derivas una y congelas las demás." },
        { question: "¿Qué significa el símbolo ∂?", answer: "Es la 'd' redondeada (Jacobi) que indica que la derivada es parcial y no total." },
        { question: "¿Para qué sirve el gradiente?", answer: "Es fundamental en optimización para encontrar la ruta más rápida hacia un mínimo o máximo." }
      ]}
      relatedPosts={[
        { title: "Derivadas Parciales", slug: "partial-derivatives" },
        { title: "Derivadas Implícitas", slug: "calculadora-de-derivadas-implicitas" },
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" }
      ]}
    />
  );
}
