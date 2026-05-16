import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { generateMetadataForPath } from "@/lib/generate-page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generateMetadataForPath(lang, "/reglas/regla-del-producto");
}

export default function ProductRulePage() {
  const formula = "\\dfrac{d}{dx}[u \\cdot v] = u'v + uv'";
  
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué es la Regla del Producto?</h2>
        <p>
          La <strong>regla del producto</strong> es una fórmula utilizada para encontrar la derivada de la multiplicación de dos funciones. A diferencia de lo que muchos piensan inicialmente, la derivada de un producto no es simplemente el producto de las derivadas.
        </p>
        <p className="mt-4">
          Es una de las reglas fundamentales que verás en cualquier curso de <Link href="/what-is-a-derivative" className="text-secondary font-bold">Cálculo Diferencial</Link> y es el paso previo para entender la <Link href="/reglas/regla-del-cociente" className="text-secondary font-bold">regla del cociente</Link>.
        </p>
        <figure className="my-8 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
            <Image
              src="/images/producto-funciones-uv-derivada.webp"
              alt="Ilustración de la regla del producto con dos bloques u y v y la fórmula de la derivada u prima v más u v prima, en estilo educativo violeta y lavanda."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="formula">Fórmula de la Regla del Producto</h2>
        <p className="mb-6">Para aplicar esta regla, definimos dos funciones $u$ y $v$. La derivada se calcula siguiendo este patrón:</p>
        <FormulaCard title="Fórmula General">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} />
        </FormulaCard>
        <p className="mt-4 text-center text-sm text-slate-500 italic">
          "La derivada del primero por el segundo sin derivar, más el primero sin derivar por la derivada del segundo."
        </p>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos Prácticos</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Ejemplo 1: Polinomio por Trigonométrica"
            steps={[
              "Identificamos u = x² y v = sin(x).",
              "Calculamos las derivadas individuales: u' = 2x, v' = cos(x).",
              "Aplicamos la fórmula u'v + uv': (2x)(sin(x)) + (x²)(cos(x)).",
              "Resultado final: 2x sin(x) + x² cos(x)."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = x^2 \\cdot \\sin(x) \\implies f'(x) = 2x\\sin(x) + x^2\\cos(x)", { displayMode: true }) }} />
          </ExampleCard>

          <ExampleCard 
            title="Ejemplo 2: Exponencial por Lineal"
            steps={[
              "u = eˣ, v = x + 1.",
              "Derivadas: u' = eˣ, v' = 1.",
              "Aplicamos regla: (eˣ)(x + 1) + (eˣ)(1).",
              "Simplificamos factorizando eˣ: eˣ(x + 2)."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = e^x(x+1) \\implies f'(x) = e^x(x+2)", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        El error más común entre principiantes es pensar que $(u \cdot v)' = u' \cdot v'$. Esto es incorrecto y llevará a resultados erróneos. Siempre debes usar la suma de los productos cruzados.
      </WarningCard>

      <section>
        <h2 id="casos-especiales">Casos de tres o más funciones</h2>
        <p>
          Si tienes tres funciones multiplicándose ($u \cdot v \cdot w$), la regla se extiende de forma lógica: se deriva una función a la vez mientras las otras dos se mantienen constantes.
        </p>
        <FormulaCard title="Producto de Tres Funciones">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString("(uvw)' = u'vw + uv'w + uvw'", { displayMode: true }) }} />
        </FormulaCard>
      </section>

      <section>
        <h2 id="verificacion">Verifica con Derivio</h2>
        <p>
          ¿No estás seguro de tu resultado? Nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas con procedimiento</Link> te mostrará paso a paso cómo se aplicó la regla del producto en tu ejercicio específico.
        </p>
        <TipCard>
          Si tu función es una división, te recomendamos leer nuestra guía sobre la <Link href="/reglas/regla-del-cociente" className="text-secondary font-bold">regla del cociente</Link>, que es una extensión de este concepto.
        </TipCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Regla del Producto: Guía Completa con Fórmulas y Ejemplos"
      description="Aprende a derivar la multiplicación de dos o más funciones. Explicaciones detalladas, fórmula de la regla del producto y ejercicios resueltos paso a paso."
      date="10 de Mayo, 2026"
      readTime="8 min"
      category="Reglas"
      tags={["Calculus", "Regla del Producto", "Diferenciación"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Matemáticas"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Reglas", href: "/reglas" },
        { label: "Regla del Producto", href: "/reglas/regla-del-producto" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuándo debo usar la regla del producto?", answer: "Debes usarla siempre que tengas dos expresiones que dependan de la variable (como x) multiplicándose entre sí." },
        { question: "¿Puedo usarla si uno de los factores es una constante?", answer: "Podrías, pero no es necesario. Para una constante c * f(x), la derivada es simplemente c * f'(x)." },
        { question: "¿Qué regla es más importante, producto o cadena?", answer: "Ambas son vitales. A menudo tendrás que usar la regla de la cadena dentro de un problema de regla del producto." }
      ]}
      relatedPosts={[
        { title: "Regla del Cociente", slug: "reglas/regla-del-cociente" },
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" },
        { title: "Ejemplos de Derivadas", slug: "derivative-examples" }
      ]}
    />
  );
}
