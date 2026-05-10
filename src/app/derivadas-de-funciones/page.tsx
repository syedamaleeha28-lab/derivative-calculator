"use client";

import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";

export default function GeneralFunctionsPage() {
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué es la Derivada de una Función?</h2>
        <p>
          La <strong>derivada de una función</strong> es una medida de cómo cambia el valor de dicha función a medida que cambia su variable independiente. Es la herramienta central del cálculo diferencial y tiene aplicaciones en física, economía, biología e ingeniería.
        </p>
        <p className="mt-4">
          Nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas con pasos</Link> está diseñada para resolver prácticamente cualquier tipo de función matemática, proporcionando un desglose educativo de cada regla aplicada.
        </p>
      </section>

      <section>
        <h2 id="tipos">Tipos de Derivadas de Funciones</h2>
        <p className="mb-6">Dependiendo de la estructura de la expresión, podemos clasificar las derivadas en varias categorías:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Funciones Algebraicas", desc: "Polinomios, raíces y potencias racionales.", href: "/reglas/regla-de-la-potencia" },
            { title: "Funciones Trascendentes", desc: "Logarítmicas, exponenciales y trigonométricas.", href: "/reglas/derivadas-trigonometricas" },
            { title: "Funciones Compuestas", desc: "Funciones dentro de funciones.", href: "/reglas/regla-de-la-cadena" },
            { title: "Funciones Implícitas", desc: "Donde la variable 'y' no está despejada.", href: "/calculadora-de-derivadas-implicitas" }
          ].map((item, i) => (
            <Link key={i} href={item.href} className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-secondary/30 transition-all group">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-secondary">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos Generales de Derivadas</h2>
        <div className="space-y-8">
          <ExampleCard 
            title="Derivada de una función polinómica"
            steps={[
              "Función f(x) = 4x³ + 2x - 5.",
              "Derivamos término a término.",
              "4(3x²) + 2(1) - 0.",
              "Resultado final: 12x² + 2."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = 4x^3 + 2x - 5 \\implies f'(x) = 12x^2 + 2", { displayMode: true }) }} />
          </ExampleCard>
        </div>
      </section>

      <WarningCard>
        No todas las funciones son derivables. Una función debe ser continua y "suave" (sin picos) en un punto para que su derivada exista en ese lugar.
      </WarningCard>

      <section>
        <h2 id="procedimiento">¿Cómo resolver cualquier derivada?</h2>
        <p>
          Para <strong>resolver derivadas de funciones</strong> de forma efectiva, es fundamental conocer las reglas básicas. Puedes consultar nuestra <Link href="/basic-derivative-formulas" className="text-secondary font-bold">tabla de fórmulas</Link> para tenerlas siempre a mano.
        </p>
        <TipCard>
          Simplifica la expresión algebraica antes de empezar a derivar. A menudo, un poco de álgebra inicial hace que la derivada sea mucho más sencilla.
        </TipCard>
      </section>

      <section>
        <h2 id="online">Usa nuestra Calculadora de Derivadas</h2>
        <p>
          Si te encuentras con un ejercicio difícil, nuestra <strong>calculadora de derivadas online</strong> es la herramienta perfecta. No solo te da la respuesta, sino que te enseña el camino para llegar a ella, mejorando tu comprensión del cálculo.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Derivadas de Funciones: Guía Completa de Cálculo Diferencial"
      description="Domina el arte de derivar funciones. Guía completa sobre tipos de funciones, reglas de derivación y ejemplos resueltos paso a paso para estudiantes."
      date="10 de Mayo, 2026"
      readTime="15 min"
      category="Educación"
      tags={["Funciones", "Cálculo", "Derivadas"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Matemáticas"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Derivadas de Funciones", href: "/derivadas-de-funciones" }
      ]}
      content={content}
      faqs={[
        { question: "¿Qué funciones son las más difíciles de derivar?", answer: "Las funciones compuestas que requieren múltiples aplicaciones de la regla de la cadena suelen ser las más complejas." },
        { question: "¿La calculadora soporta todas las funciones?", answer: "Soportamos la gran mayoría de funciones algebraicas y trascendentes utilizadas en bachillerato y universidad." },
        { question: "¿Cuál es la aplicación más común de las derivadas?", answer: "Encontrar máximos y mínimos de funciones para problemas de optimización." }
      ]}
      relatedPosts={[
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" },
        { title: "Reglas de Derivación", slug: "reglas" },
        { title: "Ejemplos de Derivadas", slug: "derivative-examples" }
      ]}
    />
  );
}
