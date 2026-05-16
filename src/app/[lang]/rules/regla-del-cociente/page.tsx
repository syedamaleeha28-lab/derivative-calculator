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
  return generateMetadataForPath(lang, "/rules/regla-del-cociente");
}

export default function QuotientRulePage() {
  const formula = "\\dfrac{d}{dx}\\left[\\dfrac{u}{v}\\right] = \\dfrac{u'v - uv'}{v^2}";
  
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué es la Regla del Cociente?</h2>
        <p>
          La <strong>regla del cociente</strong> es el método formal para encontrar la derivada de una función que es la división de otras dos funciones. Es una de las reglas que requiere más atención a los detalles, especialmente por el signo negativo en el numerador y el denominador al cuadrado.
        </p>
        <p className="mt-4">
          Antes de dominar esta regla, asegúrate de entender bien la <Link href="/rules/regla-del-producto" className="text-secondary font-bold">regla del producto</Link>, ya que son conceptos hermanos.
        </p>
        <figure className="my-8 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
            <Image
              src="/images/cociente-fraccion-regla-derivada.webp"
              alt="Ilustración de la regla del cociente con fracción u entre v y la fórmula de su derivada con denominador al cuadrado, en paleta violeta educativa."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="formula">Fórmula de la Regla del Cociente</h2>
        <p className="mb-6">Si tenemos una función racional de la forma $u/v$, su derivada se rige por la siguiente fórmula:</p>
        <FormulaCard title="Fórmula General">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} />
        </FormulaCard>
        <TipCard>
          Una forma mnemotécnica de recordarla es: "La derivada del de arriba por el de abajo, menos el de arriba por la derivada del de abajo, todo sobre el de abajo al cuadrado".
        </TipCard>
      </section>

      <section>
        <h2 id="ejemplos">Ejercicios Resueltos Paso a Paso</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Ejemplo 1: Función Racional Simple"
            steps={[
              "Identificamos u = x² y v = x + 1.",
              "Derivadas individuales: u' = 2x, v' = 1.",
              "Aplicamos la fórmula: [2x(x+1) - (x²)(1)] / (x+1)².",
              "Simplificamos el numerador: (2x² + 2x - x²) / (x+1)² = (x² + 2x) / (x+1)²."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = \\frac{x^2}{x+1} \\implies f'(x) = \\frac{x^2+2x}{(x+1)^2}", { displayMode: true }) }} />
          </ExampleCard>

          <ExampleCard 
            title="Ejemplo 2: Trigonométrica sobre Lineal"
            steps={[
              "u = sin(x), v = x.",
              "Derivadas: u' = cos(x), v' = 1.",
              "Aplicamos regla: [cos(x) \cdot x - sin(x) \cdot 1] / x².",
              "Resultado: [x cos(x) - sin(x)] / x²."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = \\frac{\\sin(x)}{x} \\implies f'(x) = \\frac{x\\cos(x) - \\sin(x)}{x^2}", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        ¡Cuidado con el orden! En el numerador de la regla del cociente, el signo negativo es crítico. Si intercambias los términos (uv' - u'v), obtendrás el resultado con el signo opuesto. Siempre empieza derivando el numerador ($u'$).
      </WarningCard>

      <section>
        <h2 id="trucos">¿Cuándo evitar la regla del cociente?</h2>
        <p>
          A veces, es más fácil convertir una división en un producto con potencia negativa. Por ejemplo, $1/x^3$ se puede derivar más rápido como $x^{-3}$ usando la <Link href="/rules/regla-de-la-potencia" className="text-secondary font-bold">regla de la potencia</Link>.
        </p>
      </section>

      <section>
        <h2 id="procedimiento">Usa el motor de Derivio</h2>
        <p>
          Si tienes una función muy compleja, nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas online</Link> puede realizar todas las simplificaciones algebraicas por ti, mostrándote cada paso del proceso.
        </p>
        <p className="mt-4">
          Consulta más variaciones en nuestra galería de <Link href="/examples" className="text-secondary font-bold">ejemplos resueltos</Link>.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Regla del Cociente: Guía de Derivación de Fracciones"
      description="Aprende a resolver la derivada de una división de funciones. Fórmula de la regla del cociente, ejemplos paso a paso y consejos para evitar errores comunes."
      date="10 de Mayo, 2026"
      readTime="10 min"
      category="Reglas"
      tags={["Calculus", "Regla del Cociente", "Fracciones"]}
      author={{
        name: "Academia Derivio",
        role: "Departamento de Matemáticas"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Reglas", href: "/rules" },
        { label: "Regla del Cociente", href: "/rules/regla-del-cociente" }
      ]}
      content={content}
      faqs={[
        { question: "¿Qué pasa si el denominador es una constante?", answer: "En ese caso no necesitas la regla del cociente. Solo deriva el numerador y mantén el denominador igual." },
        { question: "¿Es obligatorio simplificar el resultado?", answer: "En la mayoría de los exámenes sí. Nuestra calculadora te muestra la forma más simplificada posible." },
        { question: "¿Puedo usar la regla de la cadena aquí?", answer: "Sí, es muy común que el numerador o el denominador requieran la regla de la cadena por sí mismos." }
      ]}
      relatedPosts={[
        { title: "Regla del Producto", slug: "/rules/regla-del-producto" },
        { title: "Regla de la Cadena", slug: "/rules/regla-de-la-cadena" },
        { title: "Tabla de Fórmulas", slug: "/basic-derivative-formulas" }
      ]}
    />
  );
}
