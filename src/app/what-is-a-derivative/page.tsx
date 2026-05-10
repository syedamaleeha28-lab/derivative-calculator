"use client";

import ArticleLayout, { FormulaCard, TipCard, ExampleCard, WarningCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";

export default function WhatIsADerivative() {
  const content = (
    <div className="space-y-12 text-slate-600 dark:text-slate-300 leading-relaxed">
      <section>
        <h2 id="introduccion">Introducción al Cálculo Diferencial</h2>
        <p>
          La derivada es uno de los conceptos más poderosos y fundamentales de todas las matemáticas. En su esencia, la derivada mide <strong>cómo cambia una cantidad</strong> en respuesta a cambios en otra cantidad. Es la herramienta principal del cálculo diferencial para estudiar el movimiento, el crecimiento y la optimización.
        </p>
        <p className="mt-4">
          Si eres estudiante de bachillerato o ingeniería, entender este concepto es el primer paso para dominar las <Link href="/reglas" className="text-secondary font-bold underline decoration-secondary/30 hover:decoration-secondary">reglas de derivación</Link> que aplicarás en tus exámenes.
        </p>
      </section>

      <section>
        <h2 id="definicion-geometrica">La Definición Geométrica</h2>
        <p>
          Visualmente, si graficas una función $f(x)$, la derivada en un punto específico representa la <strong>pendiente de la recta tangente</strong> a la curva en ese punto exacto. Esta pendiente nos indica si la función está subiendo o bajando y con qué rapidez lo hace.
        </p>
        <TipCard>
          Si la curva fuera una montaña rusa, la derivada te diría qué tan inclinada está la pista en cada metro del recorrido. Una derivada positiva significa subida, negativa bajada, y cero un punto plano.
        </TipCard>
        <p>
          Para aprender a calcular estas pendientes manualmente, puedes consultar nuestra guía sobre la <Link href="/reglas/regla-de-la-potencia" className="text-secondary font-bold">regla de la potencia</Link>, que es la base de las derivadas algebraicas.
        </p>
      </section>

      <section>
        <h2 id="tasa-de-cambio">Tasa de Cambio Instantánea</h2>
        <p>
          A diferencia de la velocidad promedio (que se calcula entre dos puntos distantes), la derivada nos da la <strong>velocidad instantánea</strong>. Es lo que marca el velocímetro de un coche en un segundo preciso.
        </p>
        <FormulaCard title="Definición Formal por Límites">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString("f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}", { displayMode: true }) }} />
        </FormulaCard>
        <p>
          Aunque la definición por límites es la base teórica, en la práctica utilizamos <Link href="/basic-derivative-formulas" className="text-secondary font-bold">fórmulas de derivadas</Link> abreviadas para obtener resultados más rápido.
        </p>
      </section>

      <section>
        <h2 id="notacion">Notaciones Comunes</h2>
        <p>
          En matemáticas, existen diferentes formas de escribir una derivada. Las más comunes son:
        </p>
        <ul className="list-disc pl-6 space-y-3 mt-4">
          <li><strong>Notación de Leibniz:</strong> $dy/dx$ (ideal para entender cambios relativos).</li>
          <li><strong>Notación de Lagrange:</strong> $f'(x)$ (la más usada en secundaria).</li>
          <li><strong>Notación de Newton:</strong> $\dot{y}$ (común en física para derivadas respecto al tiempo).</li>
        </ul>
        <p className="mt-4">
          Nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas paso a paso</Link> utiliza principalmente la notación de Leibniz y Lagrange para facilitar la comprensión.
        </p>
      </section>

      <section>
        <h2 id="aplicaciones">Aplicaciones Reales</h2>
        <p>
          ¿Por qué molestarse en aprender esto? Las derivadas están en todas partes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Economía</h4>
            <p className="text-sm">Se usa para calcular el costo marginal y maximizar los beneficios de una empresa.</p>
          </div>
          <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Ingeniería</h4>
            <p className="text-sm">Fundamental para diseñar estructuras seguras y sistemas de control automático.</p>
          </div>
        </div>
        <p className="mt-6">
          Para ver aplicaciones prácticas con números reales, visita nuestra sección de <Link href="/derivative-examples" className="text-secondary font-bold">ejemplos de derivadas resueltos</Link>.
        </p>
      </section>

      <section>
        <h2 id="conclusión">Conclusión</h2>
        <p>
          Entender qué es una derivada es abrir la puerta al mundo de las ciencias exactas. Una vez que domines el concepto de cambio, resolver derivadas de <Link href="/reglas/derivadas-trigonometricas" className="text-secondary font-bold">seno, coseno</Link> o funciones logarítmicas será mucho más intuitivo.
        </p>
        <WarningCard>
          Recuerda que para que una función sea derivable en un punto, debe ser continua en ese punto. No todas las funciones tienen derivada en todo su dominio.
        </WarningCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="¿Qué es una derivada? Concepto, Definición y Guía Completa"
      description="Descubre qué es una derivada de forma sencilla. Exploramos su definición geométrica como pendiente, su aplicación como tasa de cambio y ejemplos prácticos de cálculo."
      date="10 de Mayo, 2026"
      readTime="7 min"
      category="Fundamentos"
      tags={["Cálculo", "Derivadas", "Matemáticas"]}
      author={{
        name: "Prof. Alberto Ruiz",
        role: "Educador de Derivio"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Aprender", href: "/reglas" },
        { label: "¿Qué es una derivada?", href: "/what-is-a-derivative" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuál es la diferencia entre derivada y diferencial?", answer: "La derivada es la tasa de cambio (la pendiente), mientras que la diferencial representa un cambio infinitamente pequeño en la variable." },
        { question: "¿Cómo se calcula una derivada paso a paso?", answer: "Puedes usar reglas como la de la potencia o la cadena, o usar nuestra calculadora gratuita para ver todo el procedimiento." },
        { question: "¿Qué es una derivada parcial?", answer: "Es la derivada de una función de varias variables respecto a una sola de ellas, manteniendo las otras constantes. Ver más en nuestra guía de derivadas parciales." }
      ]}
      relatedPosts={[
        { title: "Reglas de Derivación", slug: "reglas" },
        { title: "Ejemplos de Cálculo", slug: "derivative-examples" },
        { title: "Fórmulas Esenciales", slug: "basic-derivative-formulas" }
      ]}
    />
  );
}
