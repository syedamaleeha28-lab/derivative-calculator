"use client";

import ArticleLayout, { FormulaCard, TipCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DerivativeRules() {
  const rules = [
    { name: "Regla de la Potencia", slug: "regla-de-la-potencia", desc: "Para funciones de la forma x^n." },
    { name: "Regla del Producto", slug: "regla-del-producto", desc: "Cuando dos funciones se están multiplicando." },
    { name: "Regla del Cociente", slug: "regla-del-cociente", desc: "Para derivadas de divisiones de funciones." },
    { name: "Regla de la Cadena", slug: "regla-de-la-cadena", desc: "Fundamental para funciones compuestas." },
    { name: "Derivadas Trigonométricas", slug: "derivadas-trigonometricas", desc: "Seno, coseno, tangente y más." }
  ];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="importancia">¿Por qué aprender las reglas de derivación?</h2>
        <p>
          Las reglas de derivación son atajos matemáticos que nos permiten encontrar la derivada de una función sin tener que recurrir a la definición formal de límite cada vez. Dominar estas reglas es la clave para resolver problemas de cálculo de forma eficiente.
        </p>
      </section>

      <section>
        <h2 id="lista-reglas">Principales Reglas de Diferenciación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {rules.map((rule, i) => (
            <Link key={i} href={`/reglas/${rule.slug}`} className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-secondary transition-all shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-secondary mb-2 flex items-center justify-between">
                {rule.name}
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{rule.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 id="tabla-resumen">Tabla Resumen de Fórmulas</h2>
        <p className="mb-6">Aquí tienes las reglas más utilizadas que debes memorizar:</p>
        <div className="space-y-4">
          <FormulaCard title="Regla de la Potencia">
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\frac{d}{dx}[x^n] = n x^{n-1}", { displayMode: true }) }} />
          </FormulaCard>
          <FormulaCard title="Regla de la Cadena">
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)", { displayMode: true }) }} />
          </FormulaCard>
        </div>
      </section>

      <TipCard>
        ¿Sabías que nuestra calculadora identifica automáticamente qué regla aplicar? Prueba a introducir una función compleja y observa la explicación paso a paso.
      </TipCard>
    </div>
  );

  return (
    <ArticleLayout
      title="Reglas de Derivación: Guía Completa y Fórmulas"
      description="Explora todas las reglas de diferenciación en un solo lugar. Desde la regla de la potencia hasta la regla de la cadena con ejemplos y explicaciones."
      date="10 de Mayo, 2026"
      readTime="10 min"
      category="Reglas"
      tags={["Calculus", "Fórmulas", "Reglas"]}
      author={{
        name: "Academia Derivio",
        role: "Departamento de Matemáticas"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Aprender", href: "/derivative-rules" },
        { label: "Reglas de Derivación", href: "/derivative-rules" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuál es la regla más difícil?", answer: "Para muchos estudiantes es la regla de la cadena, ya que requiere identificar correctamente las funciones interna y externa." },
        { question: "¿Puedo aplicar varias reglas a la vez?", answer: "¡Sí! Las funciones complejas a menudo requieren usar el producto y la cadena simultáneamente." }
      ]}
    />
  );
}
