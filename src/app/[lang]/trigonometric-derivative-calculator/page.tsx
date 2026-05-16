import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import type { Metadata } from "next";
import { generateMetadataForPath } from "@/lib/generate-page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generateMetadataForPath(lang, "/trigonometric-derivative-calculator");
}

export default function TrigCalculadoraPage() {
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="intro">Calculadora de Derivadas Trigonométricas Online</h2>
        <p>
          Resolver funciones con seno, coseno o tangente puede ser un desafío. Nuestra <strong>calculadora de derivadas trigonométricas con pasos</strong> está diseñada para simplificar este proceso, aplicando identidades trigonométricas y reglas de derivación de forma precisa y automática.
        </p>
        <p className="mt-4">
          Si necesitas resolver un ejercicio ahora mismo, nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas paso a paso</Link> es la herramienta ideal para verificar tus resultados de forma gratuita.
        </p>
      </section>

      <section>
        <h2 id="formulas">Tabla de Derivadas Trigonométricas</h2>
        <p className="mb-6">Estas son las fórmulas que nuestro motor matemático aplica instantáneamente:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center">
            <span className="text-[0.6rem] font-bold text-secondary uppercase mb-1">Seno</span>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("(\\sin x)' = \\cos x", { displayMode: true }) }} />
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center">
            <span className="text-[0.6rem] font-bold text-secondary uppercase mb-1">Coseno</span>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("(\\cos x)' = -\\sin x", { displayMode: true }) }} />
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center">
            <span className="text-[0.6rem] font-bold text-secondary uppercase mb-1">Tangente</span>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("(\\tan x)' = \\sec^2 x", { displayMode: true }) }} />
          </div>
        </div>
        <p className="mt-4">
          Para ver la lista completa, incluyendo secante, cosecante y cotangente, visita nuestra <Link href="/basic-derivative-formulas" className="text-secondary font-bold">tabla de fórmulas</Link>.
        </p>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos con Procedimiento</h2>
        <ExampleCard 
          title="Derivada de una función trigonométrica compuesta"
          steps={[
            "Dada la función f(x) = cos(3x²).",
            "Identificamos la función exterior (cos) y la interior (3x²).",
            "Aplicamos la regla de la cadena: -sin(3x²) * d/dx(3x²).",
            "Calculamos la derivada interior: 6x.",
            "Resultado: -6x sin(3x²)."
          ]}
        >
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = \\cos(3x^2) \\implies f'(x) = -6x\\sin(3x^2)", { displayMode: true }) }} />
        </ExampleCard>
      </section>

      <WarningCard>
        ¡Cuidado con los signos! Es muy común olvidar que la derivada del <strong>coseno</strong> y la <strong>cosecante</strong> llevan un signo negativo. Nuestra calculadora te ayudará a evitar estos pequeños fallos que arruinan un ejercicio.
      </WarningCard>

      <section>
        <h2 id="por-que-usar">¿Por qué usar nuestro calculador online?</h2>
        <p>
          A diferencia de una simple tabla, nuestra <strong>calculadora de derivadas trigonométricas</strong> maneja la <Link href="/rules/regla-de-la-cadena" className="text-secondary font-bold">regla de la cadena</Link> automáticamente. Esto es vital cuando el argumento de la función no es solo 'x', sino una expresión más compleja.
        </p>
        <TipCard>
          Si tienes una división de funciones trigonométricas, recuerda que también puedes aplicar la <Link href="/rules/regla-del-cociente" className="text-secondary font-bold">regla del cociente</Link> para llegar al resultado.
        </TipCard>
      </section>

      <section>
        <h2 id="gratis">Educación gratuita y de calidad</h2>
        <p>
          Derivio nació con el objetivo de ser el mejor compañero de estudio. Puedes usar nuestra <strong>calculadora de derivadas paso a paso</strong> sin necesidad de registro y desde cualquier dispositivo móvil.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Calculadora de Derivadas Trigonométricas con Pasos | Gratis"
      description="Resuelve derivadas de seno, coseno, tangente y más con nuestra calculadora online. Obtén el procedimiento paso a paso y aprende las reglas de derivación."
      date="10 de Mayo, 2026"
      readTime="10 min"
      category="Calculadoras"
      tags={["Trigonometría", "Calculadora", "Derivadas"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Cálculo Diferencial"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Calculadoras", href: "/calculadora-derivadas" },
        { label: "Trigonométricas", href: "/calculadora-de-derivadas-trigonometricas" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuál es la derivada de tan(x)?", answer: "La derivada de la tangente es la secante al cuadrado: sec²(x)." },
        { question: "¿Cómo se derivan las funciones inversas?", answer: "Las funciones como arcsin(x) tienen fórmulas especiales que involucran raíces cuadradas en el denominador." },
        { question: "¿La calculadora simplifica el resultado?", answer: "Sí, aplicamos identidades trigonométricas para darte la respuesta más elegante y simplificada posible." }
      ]}
      relatedPosts={[
        { title: "Derivadas Trigonométricas (Teoría)", slug: "reglas/derivadas-trigonometricas" },
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" },
        { title: "Ejemplos de Derivadas", slug: "/examples" }
      ]}
    />
  );
}
