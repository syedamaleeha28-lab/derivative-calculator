import ArticleLayout, { FormulaCard, TipCard, WarningCard, ExampleCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regla de la Potencia: Fórmula, Ejemplos y Guía Completa",
  description: "Aprende a derivar potencias con pasos detallados. Domina la regla de la potencia con ejemplos resueltos, aplicaciones y errores comunes a evitar.",
};

export default function PowerRulePage() {
  const formula = "\\dfrac{d}{dx}\\left[x^n\\right] = n \\cdot x^{n-1}";
  
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="intro">¿Qué es la Regla de la Potencia?</h2>
        <p>
          La <strong>regla de la potencia</strong> es una de las fórmulas más utilizadas en el cálculo diferencial. Nos permite encontrar la derivada de funciones de la forma $f(x) = x^n$ de manera rápida y eficiente. Es el primer paso para dominar <Link href="/what-is-a-derivative" className="text-secondary font-bold">qué es una derivada</Link> en la práctica.
        </p>
        <p className="mt-4">
          Si estás buscando <strong>cómo resolver derivadas de potencias</strong>, esta es la primera regla que debes aprender antes de pasar a temas más complejos como la <Link href="/reglas/regla-de-la-cadena" className="text-secondary font-bold">regla de la cadena</Link>.
        </p>
        <figure className="my-8 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
            <Image
              src="/images/potencia-exponente-regla-derivada.webp"
              alt="Ilustración educativa de la regla de la potencia: curva tipo x elevado a n y la fórmula d sobre d x de x a la n igual a n por x a la n menos uno, en colores violeta y lavanda."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="formula">Fórmula de la Regla de la Potencia</h2>
        <p className="mb-6">
          La fórmula establece que para derivar una potencia de x, bajamos el exponente $n$ multiplicando a la base y restamos uno al exponente. Esta es una de las <Link href="/basic-derivative-formulas" className="text-secondary font-bold">fórmulas de derivadas</Link> más fundamentales.
        </p>
        <FormulaCard title="Fórmula de la Potencia">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} />
        </FormulaCard>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos Resueltos Paso a Paso</h2>
        <p className="mb-8">Aquí te mostramos cómo aplicar la regla en diferentes escenarios. Para más casos, visita nuestra sección de <Link href="/derivative-examples" className="text-secondary font-bold">ejemplos de derivadas</Link>.</p>
        
        <ExampleCard 
          title="Derivada de una potencia simple: x⁵"
          steps={[
            "Identificamos el exponente n = 5.",
            "Bajamos el 5 multiplicando delante de la x.",
            "Restamos 1 al exponente: 5 - 1 = 4.",
            "Resultado: 5x⁴."
          ]}
        >
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} x^5 = 5x^4", { displayMode: true }) }} />
        </ExampleCard>

        <ExampleCard 
          title="Derivada de una raíz: √x"
          steps={[
            "Convertimos la raíz en exponente fraccionario: x¹/².",
            "Bajamos el exponente 1/2 multiplicando.",
            "Restamos 1: 1/2 - 1 = -1/2.",
            "Simplificamos volviendo a notación de raíz: 1 / (2√x)."
          ]}
        >
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} \\sqrt{x} = \\dfrac{1}{2\\sqrt{x}}", { displayMode: true }) }} />
        </ExampleCard>
      </section>

      <section>
        <h2 id="errores">Errores Comunes y Consejos</h2>
        <WarningCard>
          <strong>No restar 1 al exponente:</strong> Un error muy común es bajar el exponente pero dejar el número original arriba. ¡Recuerda siempre restar 1! Si tienes dudas, usa nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora paso a paso</Link> para verificar.
        </WarningCard>
        <TipCard>
          Para variables en el denominador como $1/x^2$, conviértelas primero en potencias negativas ($x^{-2}$) antes de aplicar la regla. Esto facilita mucho el cálculo.
        </TipCard>
      </section>

      <section>
        <h2 id="aplicaciones">Aplicaciones en el mundo real</h2>
        <p>
          En física, si tienes una función de posición $s(t) = t^2$, la regla de la potencia te permite encontrar la velocidad instantánea $v(t) = 2t$ al derivar respecto al tiempo. Este concepto es vital en <Link href="/partial-derivatives" className="text-secondary font-bold">cálculo multivariable</Link> también.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout 
      title="Regla de la Potencia: Fórmula, Ejemplos y Guía Completa"
      description="Aprende a derivar potencias con pasos detallados. Domina la regla de la potencia con ejemplos resueltos, aplicaciones y errores comunes a evitar."
      date="10 de Mayo, 2026"
      readTime="5 min"
      category="Reglas de Derivación"
      tags={["Básico", "Polinomios", "Cálculo"]}
      author={{
        name: "Prof. Alberto Ruiz",
        role: "Educador Matemático"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Reglas", href: "/reglas" },
        { label: "Regla de la Potencia", href: "/reglas/regla-de-la-potencia" }
      ]}
      content={content}
      faqs={[
        { question: "¿Se aplica a exponentes negativos?", answer: "Sí, la regla es universal. Por ejemplo, la derivada de x⁻³ es -3x⁻⁴." },
        { question: "¿Funciona con exponentes fraccionarios?", answer: "Totalmente. Es la forma estándar de derivar raíces cuadradas, cúbicas y de cualquier grado." }
      ]}
      relatedPosts={[
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" },
        { title: "Regla del Producto", slug: "reglas/regla-del-producto" },
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" }
      ]}
    />
  );
}
