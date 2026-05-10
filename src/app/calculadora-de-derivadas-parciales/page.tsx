"use client";

import ArticleLayout, { ExampleCard, TipCard, WarningCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";

export default function PartialCalculadoraPage() {
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="intro">¿Buscas una calculadora de derivadas parciales?</h2>
        <p>
          Encontrar una <strong>calculadora de derivadas parciales con pasos</strong> que sea precisa y fácil de usar es fundamental para estudiantes de ingeniería y ciencias. Este tipo de cálculo permite analizar funciones de varias variables ($x$, $y$, $z$) midiendo el cambio respecto a una sola de ellas.
        </p>
        <p className="mt-4">
          Nuestra plataforma está evolucionando para ofrecerte la mejor experiencia en <strong>derivadas de varias variables</strong>. Mientras tanto, puedes usar nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas online</Link> para resolver cada componente de tus ejercicios multivariable.
        </p>
      </section>

      <section>
        <h2 id="como-funciona">¿Cómo resolver derivadas parciales paso a paso?</h2>
        <p className="mb-6">El proceso es idéntico a una derivada normal, con un pequeño truco: <strong>congelar</strong> las variables que no te interesan.</p>
        <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-8 border border-slate-200 dark:border-white/5">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-[0.7rem] font-bold flex items-center justify-center mt-1">1</span>
              <span>Selecciona la variable respecto a la cual vas a derivar (ej. $x$).</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-[0.7rem] font-bold flex items-center justify-center mt-1">2</span>
              <span>Trata a todas las demás variables (como $y$ o $z$) como constantes numéricas.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-[0.7rem] font-bold flex items-center justify-center mt-1">3</span>
              <span>Aplica las <Link href="/reglas" className="text-secondary font-bold">reglas de derivación</Link> estándar (potencia, producto, etc.).</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos de Aplicación</h2>
        <ExampleCard 
          title="Derivada Parcial de una Función en 3D"
          steps={[
            "Dada f(x, y) = x³y² + 5x.",
            "Para ∂f/∂x: y² es constante. Derivamos x³: 3x²y² + 5.",
            "Para ∂f/∂y: x³ es constante. Derivamos y²: 2x³y + 0.",
            "¡Listo! Tienes ambas componentes del gradiente."
          ]}
        >
          <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x, y) = x^3y^2 + 5x \\implies f_x = 3x^2y^2 + 5", { displayMode: true }) }} />
        </ExampleCard>
      </section>

      <WarningCard>
        Muchos estudiantes fallan al derivar términos donde las variables están multiplicándose. No olvides que si derivas respecto a $x$, la variable $y$ simplemente "acompaña" al coeficiente.
      </WarningCard>

      <section>
        <h2 id="importancia">Importancia en el mundo real</h2>
        <p>
          Las <strong>calculadoras de derivadas parciales</strong> son herramientas vitales en campos como la Inteligencia Artificial (específicamente en redes neuronales), la termodinámica y el diseño de estructuras en ingeniería civil.
        </p>
        <TipCard>
          Si estás estudiando para un examen, recuerda que la suma de las derivadas parciales multiplicadas por sus diferenciales te da el <strong>Diferencial Total</strong>.
        </TipCard>
      </section>

      <section>
        <h2 id="online">Próximamente: Motor Multivariable Completo</h2>
        <p>
          Estamos trabajando para que Derivio sea la <strong>calculadora de derivadas online</strong> más completa del mundo hispano. Muy pronto podrás introducir funciones multivariable y obtener el gradiente completo con un solo clic.
        </p>
        <p className="mt-4">
          Mientras esperas, repasa tus bases con nuestra <Link href="/basic-derivative-formulas" className="text-secondary font-bold">tabla de derivadas</Link>.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Calculadora de Derivadas Parciales con Pasos | Online"
      description="Usa nuestra guía y calculadora de derivadas parciales para resolver funciones de varias variables paso a paso. Aprende cálculo multivariable de forma sencilla."
      date="10 de Mayo, 2026"
      readTime="10 min"
      category="Calculadoras"
      tags={["Multivariable", "Ingeniería", "Derivadas Parciales"]}
      author={{
        name: "Academia Derivio",
        role: "Expertos en Software Matemático"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Calculadoras", href: "/calculadora-derivadas" },
        { label: "Derivadas Parciales", href: "/calculadora-de-derivadas-parciales" }
      ]}
      content={content}
      faqs={[
        { question: "¿Derivio resuelve derivadas de tres variables?", answer: "Sí, el procedimiento es el mismo: derivas respecto a una y mantienes las otras dos constantes." },
        { question: "¿Qué es el símbolo del gradiente (∇)?", answer: "Es el vector que agrupa todas las derivadas parciales de una función." },
        { question: "¿Es gratis usar la calculadora?", answer: "Totalmente. Todos nuestros recursos y calculadoras son gratuitos." }
      ]}
      relatedPosts={[
        { title: "Derivadas de Varias Variables", slug: "derivadas-de-varias-variables" },
        { title: "Derivadas Implícitas", slug: "calculadora-de-derivadas-implicitas" },
        { title: "Ejemplos de Derivadas", slug: "derivative-examples" }
      ]}
    />
  );
}
