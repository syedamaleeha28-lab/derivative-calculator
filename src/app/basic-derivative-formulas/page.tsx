import ArticleLayout, { FormulaCard, TipCard, ExampleCard, WarningCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fórmulas de Derivadas: Tabla Completa y Reglas de Operación",
  description: "El formulario definitivo de derivadas para estudiantes. Consulta todas las fórmulas de funciones trigonométricas, exponenciales y logarítmicas con explicaciones claras.",
};

export default function BasicFormulas() {
  const formulas = [
    { name: "Constante", f: "c", d: "0", desc: "La derivada de cualquier número solo es siempre cero." },
    { name: "Identidad", f: "x", d: "1", desc: "La tasa de cambio de x respecto a sí misma es la unidad." },
    { name: "Potencia", f: "x^n", d: "n x^{n-1}", desc: "Baja el exponente y resta uno. Fundamental para polinomios." },
    { name: "Exponencial", f: "e^x", d: "e^x", desc: "La única función que es su propia derivada." },
    { name: "Logaritmo Natural", f: "\\ln(x)", d: "\\frac{1}{x}", desc: "Inversa de la exponencial." },
    { name: "Seno", f: "\\sin(x)", d: "\\cos(x)", desc: "Cambio cíclico de fase." },
    { name: "Coseno", f: "\\cos(x)", d: "-\\sin(x)", desc: "Recuerda siempre el signo negativo." },
    { name: "Tangente", f: "\\tan(x)", d: "\\sec^2(x)", desc: "Relacionada con la secante al cuadrado." }
  ];

  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="intro">Tu Formulario de Bolsillo</h2>
        <p>
          Tener a mano una <strong>tabla de derivadas</strong> es fundamental durante el proceso de aprendizaje. Aquí hemos recopilado las fórmulas básicas que todo estudiante de ingeniería o ciencias debe conocer de memoria para resolver ejercicios rápidamente.
        </p>
        <p className="mt-4">
          Si necesitas ver cómo se aplican estas fórmulas en problemas reales, consulta nuestra sección de <Link href="/derivative-examples" className="text-secondary font-bold">ejemplos de derivadas</Link>.
        </p>
        <div className="my-8 relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
          <Image
            src="/images/formulas-calculo-diferencial.svg"
            alt="Ilustración que muestra las principales fórmulas del cálculo diferencial flotando en un espacio 3D, incluyendo la regla de la potencia y derivadas trigonométricas."
            title="Fórmulas Fundamentales del Cálculo Diferencial"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

      <section>
        <h2 id="tabla">Tabla de Derivadas Básicas</h2>
        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-white/10 mt-8 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 dark:bg-white/5">
              <tr>
                <th className="px-6 py-4 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10">Función $f(x)$</th>
                <th className="px-6 py-4 font-bold text-secondary border-b border-slate-200 dark:border-white/10">Derivada $f'(x)$</th>
                <th className="px-6 py-4 font-bold text-slate-500 border-b border-slate-200 dark:border-white/10 hidden md:table-cell">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {formulas.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">
                    <span dangerouslySetInnerHTML={{ __html: katex.renderToString(item.f) }} />
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-900 dark:text-white font-bold">
                    <span dangerouslySetInnerHTML={{ __html: katex.renderToString(item.d) }} />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 hidden md:table-cell">
                    {item.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6">
          Muchas de estas fórmulas se derivan directamente de la <Link href="/what-is-a-derivative" className="text-secondary font-bold">definición formal de derivada</Link>.
        </p>
      </section>

      <section>
        <h2 id="reglas-operacion">Reglas de Operación Fundamentales</h2>
        <p className="mb-6">Además de las fórmulas directas para funciones específicas, existen leyes algebraicas que permiten derivar combinaciones de funciones:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <FormulaCard title="Suma / Resta">
              <div dangerouslySetInnerHTML={{ __html: katex.renderToString("(f \\pm g)' = f' \\pm g'", { displayMode: true }) }} />
            </FormulaCard>
            <p className="text-sm text-slate-500">La derivada de una suma es la suma de las derivadas individuales.</p>
          </div>
          <div className="space-y-6">
            <FormulaCard title="Múltiplo Constante">
              <div dangerouslySetInnerHTML={{ __html: katex.renderToString("(k \\cdot f)' = k \\cdot f'", { displayMode: true }) }} />
            </FormulaCard>
            <p className="text-sm text-slate-500">Las constantes multiplicativas salen de la derivada.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 id="avanzadas">Fórmulas Avanzadas</h2>
        <p>
          Para funciones más complejas, como multiplicaciones o funciones compuestas, debes aplicar reglas más sofisticadas que puedes encontrar en nuestras guías detalladas:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <li>
            <Link href="/reglas/regla-de-la-cadena" className="flex items-center justify-between p-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-secondary transition-all group">
              <span className="font-bold">Regla de la Cadena</span>
              <ChevronRight size={18} className="text-secondary group-hover:translate-x-1 transition-transform" />
            </Link>
          </li>
          <li>
            <Link href="/reglas/regla-del-producto" className="flex items-center justify-between p-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-secondary transition-all group">
              <span className="font-bold">Regla del Producto</span>
              <ChevronRight size={18} className="text-secondary group-hover:translate-x-1 transition-transform" />
            </Link>
          </li>
          <li>
            <Link href="/reglas/regla-del-cociente" className="flex items-center justify-between p-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-secondary transition-all group">
              <span className="font-bold">Regla del Cociente</span>
              <ChevronRight size={18} className="text-secondary group-hover:translate-x-1 transition-transform" />
            </Link>
          </li>
          <li>
            <Link href="/partial-derivatives" className="flex items-center justify-between p-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-secondary transition-all group">
              <span className="font-bold">Derivadas Parciales</span>
              <ChevronRight size={18} className="text-secondary group-hover:translate-x-1 transition-transform" />
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 id="consejos">Consejos para el Estudio</h2>
        <TipCard>
          ¿Te cuesta memorizarlas? Intenta resolver 5 ejercicios de cada tipo usando nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas</Link> para reforzar la memoria visual de los pasos.
        </TipCard>
        <WarningCard>
          Un error común es confundir la derivada de una constante (0) con la derivada de la identidad (1). Asegúrate de identificar bien qué términos dependen de la variable de derivación.
        </WarningCard>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Fórmulas de Derivadas: Tabla Completa y Reglas de Operación"
      description="El formulario definitivo de derivadas para estudiantes. Consulta todas las fórmulas de funciones trigonométricas, exponenciales y logarítmicas con explicaciones claras."
      date="10 de Mayo, 2026"
      readTime="6 min"
      category="Recursos"
      tags={["Fórmulas", "Tabla de Derivadas", "Cálculo"]}
      author={{
        name: "Prof. Alberto Ruiz",
        role: "Educador de Derivio"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Formularios", href: "/basic-derivative-formulas" },
        { label: "Tabla de Fórmulas", href: "/basic-derivative-formulas" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuál es la derivada de una constante?", answer: "La derivada de cualquier constante es siempre 0, ya que su valor no cambia respecto a ninguna variable." },
        { question: "¿Cómo se deriva e^x?", answer: "La función e^x es especial porque es su propia derivada. Sin embargo, si tienes e^(2x), debes aplicar la regla de la cadena." },
        { question: "¿Puedo imprimir este formulario?", answer: "Próximamente habilitaremos una versión en PDF optimizada para impresión y consulta rápida." }
      ]}
      relatedPosts={[
        { title: "¿Qué es una Derivada?", slug: "what-is-a-derivative" },
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-cadena" },
        { title: "Ejemplos Resueltos", slug: "derivative-examples" }
      ]}
    />
  );
}
