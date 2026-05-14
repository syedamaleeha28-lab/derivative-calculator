import ArticleLayout, { FormulaCard, TipCard, WarningCard, ExampleCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Derivadas Parciales: Guía Completa de Cálculo Multivariable",
  description: "Aprende a resolver derivadas parciales paso a paso. Conceptos, notación, interpretación geométrica y aplicaciones en física e ingeniería.",
};

export default function PartialDerivatives() {
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="que-es">¿Qué es una derivada parcial?</h2>
        <p>
          Cuando trabajamos con funciones de varias variables, como $f(x, y)$ o $f(x, y, z)$, la derivada ordinaria ya no es suficiente. La <strong>derivada parcial</strong> mide la tasa de cambio de la función respecto a una sola de esas variables, manteniendo todas las demás constantes.
        </p>
        <p className="mt-4">
          Es un concepto fundamental en el cálculo multivariable y es el primer paso para entender el <Link href="/what-is-a-derivative" className="text-secondary font-bold">concepto de derivada</Link> en dimensiones superiores.
        </p>
      </section>

      <section>
        <h2 id="notacion">Notación Profesional y Símbolo Del</h2>
        <p>
          En matemáticas avanzadas, usamos el símbolo "del" ($\partial$) para distinguir las derivadas parciales de las ordinarias ($d$). Este símbolo fue introducido para indicar que solo estamos considerando una parte del cambio total de la función.
        </p>
        <FormulaCard title="Notación de Derivada Parcial">
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\frac{\\partial f}{\\partial x} \\quad \\text{o} \\quad f_x(x, y)", { displayMode: true }) }} />
        </FormulaCard>
        <p>
          Si quieres repasar las bases antes de seguir, te recomendamos ver nuestra <Link href="/basic-derivative-formulas" className="text-secondary font-bold">tabla de fórmulas básicas</Link>, ya que las reglas (potencia, cadena, etc.) se aplican exactamente igual aquí.
        </p>
      </section>

      <section>
        <h2 id="como-calcular">Cómo calcular derivadas parciales paso a paso</h2>
        <p className="mb-6">El secreto para resolver estas derivadas es tratar a las demás variables como si fueran números ordinarios. Si derivas respecto a $x$, la variable $y$ se comporta como un $5$ o un $10$.</p>
        
        <ExampleCard title="Ejemplo Práctico: Función de dos variables">
          <p className="mb-4">Dada la función $f(x, y) = 3x^2y + y^3$, calculemos sus derivadas parciales:</p>
          <ul className="space-y-6 mt-4">
            <li>
              <div className="font-bold text-slate-900 dark:text-white mb-2">1. Derivada respecto a $x$ ($f_x$):</div>
              <p className="text-[0.95rem]">Tratamos a $y$ como constante. La derivada de $3x^2y$ es $(3y) \cdot 2x = 6xy$. La derivada de $y^3$ (constante) es $0$.</p>
              <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-lg mt-2 font-mono text-center text-secondary font-bold">
                $f_x = 6xy$
              </div>
            </li>
            <li>
              <div className="font-bold text-slate-900 dark:text-white mb-2">2. Derivada respecto a $y$ ($f_y$):</div>
              <p className="text-[0.95rem]">Tratamos a $x$ como constante. La derivada de $3x^2y$ es $(3x^2) \cdot 1 = 3x^2$. La derivada de $y^3$ es $3y^2$.</p>
              <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-lg mt-2 font-mono text-center text-secondary font-bold">
                $f_y = 3x^2 + 3y^2$
              </div>
            </li>
          </ul>
        </ExampleCard>
      </section>

      <WarningCard>
        Un error común es intentar aplicar la <Link href="/reglas/regla-del-producto" className="text-secondary font-bold">regla del producto</Link> entre $x$ e $y$ de forma innecesaria. Recuerda: si la variable no es sobre la que estás derivando, es una constante y no requiere derivación compleja.
      </WarningCard>

      <section>
        <h2 id="interpretacion">Interpretación Geométrica</h2>
        <p>
          Mientras que la derivada ordinaria es la pendiente de una línea en un plano 2D, la derivada parcial representa la pendiente de la superficie en la dirección de uno de los ejes coordenados. Es como cortar una superficie 3D con un plano paralelo a los ejes.
        </p>
        <div className="my-8 relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
          <Image
            src="/images/superficie-derivadas-parciales.svg"
            alt="Ilustración 3D de una superficie matemática con derivadas parciales, mostrando las tangentes en las direcciones x e y."
            title="Superficie 3D de Derivadas Parciales"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p className="text-sm text-center text-slate-500 mt-2 mb-6">Las derivadas parciales indican las pendientes en los ejes x e y respectivamente.</p>
        <TipCard>
          Imagina que estás en una montaña (una superficie $z=f(x,y)$). La derivada parcial respecto a $x$ es la inclinación si solo caminas hacia el Este, y respecto a $y$ es la inclinación si solo caminas hacia el Norte.
        </TipCard>
      </section>

      <section>
        <h2 id="aplicaciones">Aplicaciones en Ciencia y Datos</h2>
        <p>
          Las derivadas parciales no son solo teoría; son el motor de la tecnología moderna:
        </p>
        <ul className="list-disc pl-6 space-y-3 mt-4">
          <li><strong>Inteligencia Artificial:</strong> El entrenamiento de redes neuronales utiliza el <em>Gradiente</em> (un vector de derivadas parciales) para minimizar errores.</li>
          <li><strong>Termodinámica:</strong> Para estudiar cómo cambia la presión respecto a la temperatura manteniendo el volumen constante.</li>
          <li><strong>Optimización:</strong> Para encontrar máximos y mínimos en funciones de costo complejas.</li>
        </ul>
        <p className="mt-6">
          Puedes ver más casos de uso en nuestra sección de <Link href="/derivative-examples" className="text-secondary font-bold">ejemplos de cálculo</Link>.
        </p>
      </section>

      <section>
        <h2 id="herramientas">Calculadora de Derivadas Parciales</h2>
        <p>
          Aunque nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora principal</Link> está optimizada para una variable, estamos expandiendo constantemente nuestras capacidades para incluir cálculo multivariable completo muy pronto.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Derivadas Parciales: Guía Completa de Cálculo Multivariable"
      description="Aprende a resolver derivadas parciales paso a paso. Conceptos, notación, interpretación geométrica y aplicaciones en física e ingeniería."
      date="10 de Mayo, 2026"
      readTime="12 min"
      category="Avanzado"
      tags={["Multivariable", "Ingeniería", "IA", "Cálculo"]}
      author={{
        name: "Dr. Marcos Vega",
        role: "Experto en Análisis Matemático"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Avanzado", href: "/partial-derivatives" },
        { label: "Derivadas Parciales", href: "/partial-derivatives" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cómo se identifica una derivada parcial?", answer: "Se identifica por el símbolo ∂ o por subíndices como fx. Indica que la función tiene más de una variable independiente." },
        { question: "¿Qué es una derivada parcial de segundo orden?", answer: "Es derivar una derivada parcial por segunda vez. Puede ser respecto a la misma variable (fxx) o respecto a otra diferente (fxy, llamada mixta)." },
        { question: "¿Son difíciles de calcular?", answer: "No si dominas las reglas básicas. El truco es ignorar las variables 'ajenas' y tratarlas como números constantes." }
      ]}
      relatedPosts={[
        { title: "Regla de la Cadena", slug: "reglas/regla-de-la-chain" },
        { title: "¿Qué es una Derivada?", slug: "what-is-a-derivative" },
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" }
      ]}
    />
  );
}
