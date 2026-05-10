"use client";

import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";

export default function LimitsDerivativesPage() {
  const formula = "f'(x) = \\lim_{\\Delta x \\to 0} \\dfrac{f(x+\\Delta x) - f(x)}{\\Delta x}";
  
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Cómo calcular derivadas con límites?</h2>
        <p>
          Resolver <strong>derivadas con límites</strong> es la forma más rigurosa de entender el cálculo. Consiste en encontrar el límite del cociente diferencial a medida que el incremento de la variable independiente tiende a cero. Este método es fundamental para demostrar todas las <Link href="/reglas" className="text-secondary font-bold">reglas de derivación</Link> que usamos a diario.
        </p>
        <p className="mt-4">
          Si buscas una solución rápida, nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas con pasos</Link> puede darte el resultado instantáneo, pero aquí aprenderás la teoría que hay detrás.
        </p>
      </section>

      <section>
        <h2 id="formula">La Fórmula del Límite Fundamental</h2>
        <p className="mb-6">Cualquier derivada puede hallarse aplicando este límite (siempre que el límite exista):</p>
        <FormulaCard title="Cociente de Newton">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString(formula, { displayMode: true }) }} />
        </FormulaCard>
        <p className="mt-4 text-center text-sm text-slate-500 italic">
          Representa el límite de la pendiente de las rectas secantes.
        </p>
      </section>

      <section>
        <h2 id="pasos">Pasos para resolver derivadas por límites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white">1. Incrementar la función</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Calcula $f(x + \Delta x)$ sustituyendo en la función original.</p>
            
            <h3 className="font-bold text-slate-900 dark:text-white">2. Restar la función original</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Obtén la diferencia $\Delta y = f(x + \Delta x) - f(x)$.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white">3. Dividir por el incremento</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Forma la fracción dividiendo entre $\Delta x$.</p>
            
            <h3 className="font-bold text-slate-900 dark:text-white">4. Evaluar el límite</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Calcula el límite cuando $\Delta x \to 0$ simplificando la indeterminación.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplo Resuelto</h2>
        <ExampleCard 
          title="Derivada de una función lineal: f(x) = 3x + 2"
          steps={[
            "Planteamos: lim [(3(x+h)+2) - (3x+2)] / h.",
            "Simplificamos: lim [3x + 3h + 2 - 3x - 2] / h.",
            "Nos queda: lim [3h] / h.",
            "Resultado final: 3."
          ]}
        >
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("\\lim_{h \\to 0} \\dfrac{3(x+h)+2 - (3x+2)}{h} = 3", { displayMode: true }) }} />
        </ExampleCard>
      </section>

      <WarningCard>
        El error principal en las <strong>derivadas con límites</strong> es olvidar que al evaluar el límite final, todas las $\Delta x$ (o $h$) que queden multiplicando deben hacerse cero, pero solo DESPUÉS de haber cancelado la $h$ del denominador.
      </WarningCard>

      <section>
        <h2 id="conclusiones">¿Es necesario usar siempre límites?</h2>
        <p>
          No. Una vez que dominas la técnica, es mucho más eficiente usar nuestra <Link href="/basic-derivative-formulas" className="text-secondary font-bold">tabla de derivadas</Link> para aplicar reglas directas. El método de límites se reserva generalmente para demostrar nuevas fórmulas o para entender profundamente el concepto de <Link href="/what-is-a-derivative" className="text-secondary font-bold">qué es una derivada</Link>.
        </p>
        <TipCard>
          Si el límite no existe o da un valor infinito, decimos que la función no es derivable en ese punto.
        </TipCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Derivadas con Límites: Guía Teórica y Práctica"
      description="Aprende a resolver derivadas con límites paso a paso. Guía completa sobre el cociente diferencial, ejemplos resueltos y el proceso de derivación por definición."
      date="10 de Mayo, 2026"
      readTime="10 min"
      category="Fundamentos"
      tags={["Límites", "Teoría", "Cálculo"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Matemáticas"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Derivadas con Límites", href: "/derivadas-con-limites" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuál es la diferencia con la derivada por definición?", answer: "Son el mismo concepto. 'Con límites' hace énfasis en el método matemático utilizado." },
        { question: "¿Por qué se usa Delta x?", answer: "Es una notación clásica para representar un pequeño cambio en la variable x." },
        { question: "¿Es posible derivar cualquier función con este método?", answer: "Sí, siempre que la función sea continua y derivable en el punto." }
      ]}
      relatedPosts={[
        { title: "Derivada por Definición", slug: "derivadas-por-definicion" },
        { title: "Regla de la Potencia", slug: "reglas/regla-de-la-potencia" },
        { title: "Ejemplos Resueltos", slug: "derivative-examples" }
      ]}
    />
  );
}
