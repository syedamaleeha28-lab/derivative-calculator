import ArticleLayout, { ExampleCard, TipCard, WarningCard } from "@/components/EducationalArticle";
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
  return generateMetadataForPath(lang, "/reglas/derivadas-trigonometricas");
}

export default function TrigDerivativesPage() {
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Cómo derivar funciones trigonométricas?</h2>
        <p>
          Las <strong>derivadas trigonométricas</strong> son un conjunto de reglas que nos permiten encontrar la tasa de cambio de funciones como seno, coseno y tangente. Estas funciones son cíclicas y sus derivadas reflejan este comportamiento oscilatorio.
        </p>
        <p className="mt-4">
          Para resolver funciones más complejas como $\sin(x^2)$, necesitarás combinar estas fórmulas con la <Link href="/reglas/regla-de-la-cadena" className="text-secondary font-bold">regla de la cadena</Link>.
        </p>
        <figure className="my-8 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
            <Image
              src="/images/circulo-trigonometria-derivadas-seno-coseno.webp"
              alt="Ilustración de la circunferencia unitaria y la relación entre seno y coseno para recordar las derivadas trigonométricas básicas, con estética violeta."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="tabla">Tabla de Fórmulas Fundamentales</h2>
        <p className="mb-6">Memorizar estas tres fórmulas te permitirá resolver la gran mayoría de los ejercicios escolares:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center">
            <span className="text-[0.7rem] font-bold text-secondary mb-2 uppercase">Seno</span>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\frac{d}{dx}\\sin x = \\cos x", { displayMode: true }) }} />
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center">
            <span className="text-[0.7rem] font-bold text-secondary mb-2 uppercase">Coseno</span>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\frac{d}{dx}\\cos x = -\\sin x", { displayMode: true }) }} />
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center">
            <span className="text-[0.7rem] font-bold text-secondary mb-2 uppercase">Tangente</span>
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\frac{d}{dx}\\tan x = \\sec^2 x", { displayMode: true }) }} />
          </div>
        </div>
        <p className="mt-6">
          Puedes encontrar el resto de funciones (secante, cosecante, cotangente) en nuestro <Link href="/basic-derivative-formulas" className="text-secondary font-bold">formulario completo de derivadas</Link>.
        </p>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos Paso a Paso</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Ejemplo 1: Regla de la Cadena con Seno"
            steps={[
              "Función f(x) = sin(5x).",
              "La derivada de sin(u) es cos(u).",
              "Multiplicamos por la derivada del ángulo (5x), que es 5.",
              "Resultado final: 5 cos(5x)."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = \\sin(5x) \\implies f'(x) = 5\\cos(5x)", { displayMode: true }) }} />
          </ExampleCard>

          <ExampleCard 
            title="Ejemplo 2: Producto con Coseno"
            steps={[
              "Función f(x) = x * cos(x).",
              "Aplicamos la regla del producto (u'v + uv').",
              "u' = 1, v = cos(x).",
              "u = x, v' = -sin(x).",
              "Resultado: cos(x) - x sin(x)."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = x\\cos(x) \\implies f'(x) = \\cos(x) - x\\sin(x)", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        Uno de los errores más frecuentes es olvidar el signo negativo al derivar el <strong>coseno</strong>. Recuerda: la derivada del seno es positiva, pero la del coseno siempre es negativa ($-\sin x$).
      </WarningCard>

      <section>
        <h2 id="avanzado">Funciones Trigonométricas Inversas</h2>
        <p>
          Las derivadas de $\arcsin(x)$, $\arccos(x)$ y $\arctan(x)$ son fundamentales para integrar mediante sustitución trigonométrica. Nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas</Link> también resuelve estas funciones con procedimiento detallado.
        </p>
      </section>

      <section>
        <h2 id="recursos">Más recursos de estudio</h2>
        <p>
          Si quieres practicar más, visita nuestra galería de <Link href="/derivative-examples" className="text-secondary font-bold">ejercicios resueltos de trigonometría</Link> o repasa las <Link href="/reglas" className="text-secondary font-bold">reglas generales de derivación</Link>.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Derivadas Trigonométricas: Fórmulas y Ejercicios Resueltos"
      description="Domina las derivadas de seno, coseno, tangente y más. Guía completa con tabla de fórmulas, regla de la cadena aplicada y ejemplos paso a paso."
      date="10 de Mayo, 2026"
      readTime="10 min"
      category="Reglas"
      tags={["Calculus", "Trigonometría", "Derivadas"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Cálculo"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Reglas", href: "/reglas" },
        { label: "Derivadas Trigonométricas", href: "/reglas/derivadas-trigonometricas" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuál es la derivada de la tangente?", answer: "La derivada de tan(x) es sec²(x). También se puede expresar como 1 + tan²(x) dependiendo de la identidad que prefieras." },
        { question: "¿Cómo se derivan ángulos en grados?", answer: "En cálculo, siempre debemos trabajar en radianes. Si el ángulo está en grados, primero debes convertirlo multiplicando por π/180." },
        { question: "¿Existen derivadas de funciones hiperbólicas?", answer: "Sí, como sinh(x) y cosh(x). Sus reglas son muy similares pero los signos cambian ligeramente." }
      ]}
      relatedPosts={[
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" },
        { title: "Regla del Producto", slug: "reglas/regla-del-producto" },
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" }
      ]}
    />
  );
}
