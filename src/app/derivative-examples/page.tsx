import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ejemplos de Derivadas Resueltos: Guía Práctica Paso a Paso",
  description: "Explora una amplia variedad de ejercicios de derivadas resueltos. Aprende paso a paso con ejemplos de funciones polinómicas, trigonométricas y logarítmicas.",
};

export default function DerivativeExamples() {
  const examples = [
    {
      title: "Derivada de una función constante",
      func: "f(x) = 15",
      res: "f'(x) = 0",
      desc: "La derivada de cualquier constante es siempre cero porque las constantes no cambian. Es el ejemplo más básico del cálculo."
    },
    {
      title: "Derivada de un polinomio",
      func: "f(x) = x^3 + 2x^2 - 5",
      res: "f'(x) = 3x^2 + 4x",
      desc: "Aplicamos la regla de la potencia término a término. El exponente baja y se reduce en uno."
    },
    {
      title: "Derivada del Seno con constante",
      func: "f(x) = 4\\sin(x)",
      res: "f'(x) = 4\\cos(x)",
      desc: "La constante multiplicativa (4) se mantiene, y derivamos el seno para obtener el coseno."
    },
    {
      title: "Regla de la Cadena básica",
      func: "f(x) = (2x + 1)^5",
      res: "f'(x) = 5(2x + 1)^4 \\cdot (2) = 10(2x + 1)^4",
      desc: "Derivamos la potencia exterior manteniendo el interior, luego multiplicamos por la derivada interna (2)."
    },
    {
      title: "Derivada de un Producto",
      func: "f(x) = x^2 \\cdot \\ln(x)",
      res: "f'(x) = 2x\\ln(x) + x^2(\\frac{1}{x}) = 2x\\ln(x) + x",
      desc: "Aplicamos la fórmula u'v + uv'. Identificamos u=x² y v=ln(x)."
    }
  ];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="importancia">Aprender mediante ejemplos prácticos</h2>
        <p>
          La mejor forma de dominar el cálculo diferencial es resolviendo problemas variados. A continuación, presentamos una colección de <strong>ejemplos de derivadas resueltos</strong> que cubren los casos más frecuentes que encontrarás en tus exámenes y tareas académicas.
        </p>
        <p className="mt-4">
          Antes de sumergirte en los ejercicios, asegúrate de conocer las <Link href="/reglas" className="text-secondary font-bold">reglas de derivación</Link> fundamentales que se aplican en cada paso.
        </p>
      </section>

      <section>
        <h2 id="basicos">Ejemplos de Derivadas Básicas</h2>
        <p>
          Comenzamos con las funciones elementales. Estos ejercicios son la base para problemas más complejos de <Link href="/what-is-a-derivative" className="text-secondary font-bold">tasa de cambio instantánea</Link>.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8">
          {examples.slice(0, 3).map((ex, i) => (
            <ExampleCard key={i} title={ex.title}>
              <div className="text-center py-6 space-y-4">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.func, { displayMode: true }) }} />
                <div className="text-secondary font-bold text-xl">↓</div>
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.res, { displayMode: true }) }} />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 border-t border-slate-50 dark:border-white/5 pt-4">
                {ex.desc}
              </p>
            </ExampleCard>
          ))}
        </div>
      </section>

      <section>
        <h2 id="avanzados">Ejercicios con Reglas Especiales</h2>
        <p>
          A medida que las funciones se vuelven más complejas, necesitamos herramientas como la <Link href="/reglas/regla-de-la-cadena" className="text-secondary font-bold">regla de la cadena</Link> o la regla del producto.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8">
          {examples.slice(3).map((ex, i) => (
            <ExampleCard key={i} title={ex.title}>
              <div className="text-center py-6 space-y-4">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.func, { displayMode: true }) }} />
                <div className="text-secondary font-bold text-xl">↓</div>
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(ex.res, { displayMode: true }) }} />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 border-t border-slate-50 dark:border-white/5 pt-4">
                {ex.desc}
              </p>
            </ExampleCard>
          ))}
        </div>
      </section>

      <section>
        <h2 id="fórmulas">Consulta el Formulario</h2>
        <p>
          Si olvidas alguna derivada específica mientras practicas, puedes consultar nuestra <Link href="/basic-derivative-formulas" className="text-secondary font-bold">tabla de fórmulas completa</Link> para tener todas las referencias a mano.
        </p>
      </section>

      <section>
        <h2 id="practica">Prueba con tus propios ejercicios</h2>
        <p>
          Si tienes un ejercicio específico que no aparece aquí, utiliza nuestra herramienta principal para obtener la solución inmediata con todo el procedimiento detallado.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/#calculator" className="bg-secondary text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all">
            Ir a la Calculadora
          </Link>
        </div>
      </section>

      <TipCard>
        La práctica constante es la clave. Intenta derivar funciones similares cambiando los exponentes o los signos para comprobar si has entendido la lógica detrás de cada regla.
      </TipCard>
    </div>
  );

  return (
    <ArticleLayout
      title="Ejemplos de Derivadas Resueltos: Guía Práctica Paso a Paso"
      description="Explora una amplia variedad de ejercicios de derivadas resueltos. Aprende paso a paso con ejemplos de funciones polinómicas, trigonométricas y logarítmicas."
      date="10 de Mayo, 2026"
      readTime="8 min"
      category="Ejercicios"
      tags={["Ejemplos", "Práctica", "Derivadas", "Calculus"]}
      author={{
        name: "Prof. Alberto Ruiz",
        role: "Docente de Cálculo"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Práctica", href: "/derivative-examples" },
        { label: "Ejemplos Resueltos", href: "/derivative-examples" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cómo puedo practicar más?", answer: "Te recomendamos intentar resolver el ejercicio por tu cuenta antes de ver la solución completa. Compara tus pasos con los resultados de nuestra calculadora." },
        { question: "¿Qué hago si mi resultado es diferente?", answer: "Asegúrate de haber simplificado la expresión final. Muchas veces dos resultados se ven diferentes pero son equivalentes algebraicamente." },
        { question: "¿Tienen ejemplos de derivadas parciales?", answer: "Sí, tenemos una sección dedicada exclusivamente a las derivadas parciales para funciones de varias variables." }
      ]}
      relatedPosts={[
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" },
        { title: "Regla del Producto", slug: "reglas/regla-del-producto" },
        { title: "Derivadas Parciales", slug: "partial-derivatives" }
      ]}
    />
  );
}
