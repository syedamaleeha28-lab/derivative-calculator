import ArticleLayout, { TipCard, FormulaCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reglas de Derivación: Guía Completa para Estudiantes",
  description: "Domina todas las reglas de diferenciación. Desde la regla de la potencia hasta la cadena, con explicaciones detalladas, fórmulas y ejemplos prácticos paso a paso.",
};

const RULES_LIST = [
  { name: "Regla de la Potencia", slug: "regla-de-la-potencia", desc: "La base fundamental para derivar polinomios y funciones algebraicas simples." },
  { name: "Regla de la Cadena", slug: "regla-de-la-cadena", desc: "Esencial para derivar funciones compuestas (una función dentro de otra)." },
  { name: "Regla del Producto", slug: "regla-del-producto", desc: "Se aplica cuando tienes dos funciones multiplicándose entre sí." },
  { name: "Regla del Cociente", slug: "regla-del-cociente", desc: "La fórmula necesaria para derivar divisiones o fracciones de funciones." },
  { name: "Derivadas Trigonométricas", slug: "derivadas-trigonometricas", desc: "Aprende a derivar seno, coseno, tangente y sus funciones inversas." },
  { name: "Derivadas Implícitas", slug: "../calculadora-de-derivadas-implicitas", desc: "Técnica para derivar funciones donde la 'y' no está despejada." },
  { name: "Derivadas Parciales", slug: "../calculadora-de-derivadas-parciales", desc: "Cálculo multivariable: deriva respecto a una variable y mantén el resto constante." },
  { name: "Derivadas Logarítmicas", slug: "../derivadas-logaritmicas", desc: "Aprende las propiedades para derivar logaritmos de cualquier base." }
];

export default function ReglasPage() {
  const content = (
    <div className="space-y-12">
      <section>
        <h2 id="importancia">¿Por qué son importantes las reglas de derivación?</h2>
        <p>
          Las <strong>reglas de derivación</strong> son atajos matemáticos que nos permiten encontrar la tasa de cambio de una función sin tener que aplicar la pesada definición formal por límites. Dominar estas fórmulas es la clave para aprobar cualquier curso de <strong>Cálculo Diferencial</strong>.
        </p>
        <p className="mt-4">
          Si eres nuevo en esto, te recomendamos empezar por entender <Link href="/what-is-a-derivative" className="text-secondary font-bold underline decoration-secondary/30 hover:decoration-secondary">qué es una derivada</Link> antes de memorizar las fórmulas.
        </p>
        <figure className="my-10 max-w-3xl mx-auto">
          <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-lg">
            <Image
              src="/images/guia-reglas-derivacion-matematicas.webp"
              alt="Infografía educativa en tonos violeta que resume las reglas de derivación: potencia, cadena, producto y cociente, con fórmulas básicas."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(768px, 85vw), 800px"
            />
          </div>
        </figure>
      </section>

      <section>
        <h2 id="catalogo">Catálogo de Reglas Principales</h2>
        <p className="mb-8">Haz clic en cada regla para ver una explicación detallada, la fórmula y ejemplos paso a paso:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {RULES_LIST.map((rule, i) => (
            <Link key={i} href={`/reglas/${rule.slug}`} className="group p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-secondary transition-all shadow-sm flex flex-col h-full">
              <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3 flex items-center justify-between group-hover:text-secondary transition-colors">
                {rule.name}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                {rule.desc}
              </p>
              <div className="mt-auto text-secondary font-bold text-[0.8rem] flex items-center gap-1">
                Leer guía <ChevronRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 id="resumen-formulas">Resumen de Fórmulas Clave</h2>
        <p className="mb-6">Aquí tienes las dos reglas que resolverán el 80% de tus ejercicios de cálculo:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormulaCard title="Regla de la Potencia">
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\frac{d}{dx}x^n = n x^{n-1}", { displayMode: true }) }} />
          </FormulaCard>
          <FormulaCard title="Regla de la Cadena">
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("[f(g(x))]' = f'(g(x)) \\cdot g'(x)", { displayMode: true }) }} />
          </FormulaCard>
        </div>
        <p className="mt-6">
          Para una lista más extensa que incluya exponenciales y logaritmos, consulta nuestra <Link href="/basic-derivative-formulas" className="text-secondary font-bold">tabla de fórmulas completa</Link>.
        </p>
      </section>

      <section>
        <h2 id="ejemplos-reales">Ejemplos de Aplicación</h2>
        <p>
          No basta con saber la fórmula; hay que saber cuándo aplicarla. En funciones complejas, a menudo tendrás que combinar varias reglas. Por ejemplo, una <Link href="/reglas/regla-del-producto" className="text-secondary font-bold">regla del producto</Link> que dentro tenga una <Link href="/reglas/regla-de-la-cadena" className="text-secondary font-bold">regla de la cadena</Link>.
        </p>
        <TipCard>
          Si tienes una división de funciones, siempre es preferible usar la <Link href="/reglas/regla-del-cociente" className="text-secondary font-bold">regla del cociente</Link>, pero a veces puedes subir el denominador como potencia negativa y usar el producto.
        </TipCard>
        <p className="mt-6">
          Mira cómo se resuelven estos casos en nuestra sección de <Link href="/derivative-examples" className="text-secondary font-bold">ejercicios resueltos de derivadas</Link>.
        </p>
      </section>

      <section>
        <h2 id="automatizacion">Usa nuestra Calculadora</h2>
        <p>
          Si estás atascado con un ejercicio difícil, nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas paso a paso</Link> te mostrará exactamente qué regla se aplicó en cada momento, permitiéndote aprender de forma interactiva.
        </p>
      </section>
    </div>
  );

  return (
    <ArticleLayout
      title="Reglas de Derivación: Guía Completa para Estudiantes"
      description="Domina todas las reglas de diferenciación. Desde la regla de la potencia hasta la cadena, con explicaciones detalladas, fórmulas y ejemplos prácticos paso a paso."
      date="10 de Mayo, 2026"
      readTime="10 min"
      category="Educación"
      tags={["Reglas", "Cálculo", "Derivadas", "Fórmulas"]}
      author={{
        name: "Academia Derivio",
        role: "Departamento de Matemáticas"
      }}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Aprender", href: "/reglas" },
        { label: "Reglas de Derivación", href: "/reglas" }
      ]}
      content={content}
      faqs={[
        { question: "¿Cuál es la regla más utilizada?", answer: "Sin duda la regla de la potencia y la regla de la cadena son las más fundamentales en casi todos los problemas de cálculo." },
        { question: "¿Cómo se deriva un producto de tres funciones?", answer: "Puedes derivar las dos primeras como un solo bloque usando la regla del producto y luego aplicar el producto nuevamente con la tercera." },
        { question: "¿Qué regla debo aplicar para raíces cuadradas?", answer: "Primero convierte la raíz en un exponente fraccionario (1/2) y luego aplica la regla de la potencia." }
      ]}
      relatedPosts={[
        { title: "Tabla de Fórmulas", slug: "basic-derivative-formulas" },
        { title: "Ejemplos de Cálculo", slug: "derivative-examples" },
        { title: "¿Qué es una Derivada?", slug: "what-is-a-derivative" }
      ]}
    />
  );
}
