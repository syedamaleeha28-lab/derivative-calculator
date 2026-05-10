import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout, { FormulaCard, TipCard, WarningCard, ExampleCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "next/link";

// ─── Post Data (In a real app, this would come from a CMS or DB) ───────────

const POSTS: Record<string, any> = {
  "como-aprender-derivadas-desde-cero": {
    title: "Cómo aprender derivadas desde cero: Guía Completa para Estudiantes",
    slug: "como-aprender-derivadas-desde-cero",
    description: "Domina el cálculo diferencial con esta guía paso a paso. Aprende qué es una derivada, cómo resolver ejercicios y utiliza nuestra calculadora de derivadas online.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    date: "10 de Mayo, 2026",
    readTime: "8 min",
    category: "Tutorial Básico",
    tags: ["Calculus", "Derivadas", "Matemáticas"],
    author: {
      name: "Prof. Alberto Ruiz",
      role: "Ph.D. en Matemáticas Aplicadas"
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Aprender desde cero", href: "/blog/como-aprender-derivadas-desde-cero" }
    ],
    faqs: [
      {
        question: "¿Cuál es la regla de derivación más importante?",
        answer: "Sin duda, la Regla de la Cadena. Es fundamental para resolver funciones compuestas, que son las más comunes en los ejercicios de cálculo."
      },
      {
        question: "¿Necesito saber álgebra para aprender derivadas?",
        answer: "Sí, el álgebra sólida es la base del cálculo. Simplificar expresiones y manejar potencias es clave para obtener el resultado correcto."
      }
    ],
    relatedPosts: [
      { title: "Los 5 errores más comunes al derivar", slug: "errores-comunes-al-derivar" },
      { title: "Entendiendo la Regla de la Cadena", slug: "entendiendo-regla-de-la-cadena" }
    ],
    content: (
      <div className="space-y-12 text-slate-600 dark:text-slate-300 leading-relaxed">
        <section>
          <h2 id="intro">Introducción al concepto de derivada</h2>
          <p>
            Si has llegado hasta aquí, probablemente estés buscando resolver dudas sobre <strong>cómo resolver derivadas</strong>. El cálculo diferencial es una de las ramas más fascinantes de las matemáticas porque nos permite entender el movimiento y el cambio. En Derivio, nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas paso a paso</Link> está diseñada para que este proceso sea lo más sencillo posible.
          </p>
          <p className="mt-4">
            Antes de empezar con los ejercicios, es recomendable repasar las <Link href="/reglas" className="text-secondary font-bold">reglas de derivación</Link> básicas que rigen todo el cálculo.
          </p>
        </section>

        <section>
          <h2 id="definicion">¿Qué es una derivada en matemáticas?</h2>
          <p>
            Desde un punto de vista geométrico, la derivada de una función en un punto dado es la pendiente de la recta tangente a la gráfica de la función en dicho punto. Representa la <strong>tasa de cambio instantánea</strong> de una variable respecto a otra.
          </p>
          <TipCard>
            Piensa en la derivada como un "velocímetro" de funciones. Si tienes una función que describe tu posición, su derivada te diría tu velocidad en cada segundo exacto. Puedes leer más sobre esto en nuestra guía detallada <Link href="/what-is-a-derivative" className="text-secondary font-bold underline decoration-secondary/30">¿Qué es una derivada?</Link>.
          </TipCard>
        </section>

        <section>
          <h2 id="formula">La Definición Formal de la Derivada</h2>
          <p>
            La definición de la derivada mediante límites es la base de todo el cálculo diferencial. Aunque hoy en día usamos <Link href="/basic-derivative-formulas" className="text-secondary font-bold">fórmulas de derivadas</Link> rápidas, entender esta fórmula es vital para comprender la lógica matemática.
          </p>
          <FormulaCard title="Definición por Límites">
            <div dangerouslySetInnerHTML={{ __html: katex.renderToString("f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}", { displayMode: true }) }} />
          </FormulaCard>
        </section>

        <section>
          <h2 id="paso-a-paso">Pasos para resolver ejercicios de derivadas</h2>
          <p>
            Cuando te enfrentas a un problema de diferenciación, seguir un orden lógico te ahorrará muchos errores. Aquí te explicamos el proceso que sigue nuestro motor matemático:
          </p>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-[0.7rem] font-bold flex items-center justify-center">1</span>
              <span><strong>Identifica la estructura:</strong> Observa si tienes una potencia, un producto, un cociente o una función compuesta.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-[0.7rem] font-bold flex items-center justify-center">2</span>
              <span><strong>Aplica la regla correspondiente:</strong> Utiliza fórmulas conocidas como la <Link href="/reglas/regla-de-la-potencia" className="text-secondary font-bold">regla de la potencia</Link> o la derivada del seno/coseno.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-[0.7rem] font-bold flex items-center justify-center">3</span>
              <span><strong>Usa la regla de la cadena:</strong> Si tienes funciones anidadas, deriva de afuera hacia adentro. Mira nuestro <Link href="/reglas/regla-de-la-cadena" className="text-secondary font-bold">tutorial de la regla de la cadena</Link>.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-[0.7rem] font-bold flex items-center justify-center">4</span>
              <span><strong>Simplifica:</strong> Realiza las operaciones algebraicas finales para obtener la respuesta más limpia.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 id="ejemplo">Ejemplo Práctico de Derivación</h2>
          <p>Veamos cómo resolver una función polinómica básica paso a paso. Si quieres ver más variedad, visita nuestra galería de <Link href="/derivative-examples" className="text-secondary font-bold">ejemplos de derivadas resueltos</Link>.</p>
          <ExampleCard 
            title="Derivar f(x) = 3x² + 5x - 7"
            steps={[
              "Aplicamos la regla de la potencia a 3x², bajando el 2: 3 * 2 * x¹ = 6x.",
              "Derivamos 5x, cuya derivada es simplemente el coeficiente: 5.",
              "La derivada de la constante -7 es 0.",
              "Sumamos los resultados: f'(x) = 6x + 5."
            ]}
          >
            <div className="text-center" dangerouslySetInnerHTML={{ __html: katex.renderToString("f(x) = 3x^2 + 5x - 7 \\implies f'(x) = 6x + 5", { displayMode: true }) }} />
          </ExampleCard>
        </section>

        <section>
          <h2 id="errores">Errores comunes que debes evitar</h2>
          <WarningCard>
            Uno de los fallos más típicos es derivar el producto de dos funciones simplemente derivando cada una por separado. Recuerda que para u·v debes aplicar la <Link href="/reglas/regla-del-producto" className="text-secondary font-bold underline">regla del producto</Link>: (u'v + uv').
          </WarningCard>
          <p>
            Otro error frecuente ocurre con las <Link href="/reglas/derivadas-trigonometricas" className="text-secondary font-bold">derivadas trigonométricas</Link>, como olvidar que la derivada del coseno de x es menos el seno de x. El signo negativo es crítico.
          </p>
        </section>

        <section>
          <h2 id="conclusion">Conclusión</h2>
          <p>
            Aprender cálculo requiere práctica constante. Utiliza nuestra <strong>calculadora de derivadas con pasos</strong> para verificar tus ejercicios y entender la lógica detrás de cada paso. No te desanimes por la complejidad inicial, con paciencia dominarás las derivadas online.
          </p>
        </section>
      </div>
    )
  },
  "errores-comunes-al-derivar": {
    title: "Los 5 errores más comunes al derivar y cómo evitarlos",
    slug: "errores-comunes-al-derivar",
    description: "Análisis de los fallos más frecuentes en exámenes de cálculo. Aprende a aplicar correctamente la regla de la cadena y el producto.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    date: "08 de Mayo, 2026",
    readTime: "6 min",
    category: "Consejos",
    tags: ["Exámenes", "Calculus", "Guía"],
    author: {
      name: "Dra. Elena Martínez",
      role: "Catedrática de Análisis Matemático"
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Errores Comunes", href: "/blog/errores-comunes-al-derivar" }
    ],
    faqs: [
      { question: "¿Cómo evito errores de signos?", answer: "Usa paréntesis en cada paso de la derivación, especialmente cuando aplicas la regla del cociente." }
    ],
    relatedPosts: [
      { title: "Cómo aprender derivadas desde cero", slug: "como-aprender-derivadas-desde-cero" }
    ],
    content: (
       <div className="space-y-12 text-slate-600 dark:text-slate-300 leading-relaxed">
          <section>
             <h2 id="intro">¿Por qué cometemos errores en Cálculo?</h2>
             <p>El cálculo diferencial requiere una atención meticulosa a los detalles. A menudo, el problema no es la falta de comprensión, sino pequeños descuidos que arruinan un ejercicio completo.</p>
             <p className="mt-4">
               Muchos de estos errores se pueden evitar consultando una <Link href="/basic-derivative-formulas" className="text-secondary font-bold">tabla de fórmulas</Link> confiable.
             </p>
          </section>
          <section>
             <h2 id="error1">Error 1: Fallos en la Regla del Producto</h2>
             <p>Este es el error número uno. Muchos estudiantes creen que la derivada de un producto es el producto de las derivadas. Para corregirlo, estudia nuestra guía de la <Link href="/reglas/regla-del-producto" className="text-secondary font-bold">regla del producto</Link>.</p>
             <WarningCard>
                Fórmula correcta: (u·v)' = u'v + uv'. Nunca simplemente u'·v'.
             </WarningCard>
          </section>
          <section>
             <h2 id="error2">Error 2: Olvidar la Regla de la Cadena</h2>
             <p>Al derivar funciones compuestas como sin(x²), es común olvidar derivar el interior. Aprende a identificar estas funciones con nuestro <Link href="/reglas/regla-de-la-cadena" className="text-secondary font-bold">tutorial de regla de la cadena</Link>.</p>
          </section>
          <section>
             <h2 id="conclusion">Usa herramientas de apoyo</h2>
             <p>Para evitar estos fallos, lo ideal es usar una <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas paso a paso</Link> que te permita ver en qué punto exacto te has desviado del camino correcto.</p>
          </section>
       </div>
    )
  },
  "entendiendo-regla-de-la-cadena": {
    title: "Entendiendo la Regla de la Cadena: Guía Definitiva",
    slug: "entendiendo-regla-de-la-cadena",
    description: "La explicación más clara sobre la regla de la cadena. Ejemplos resueltos, pasos detallados y aplicaciones en derivadas complejas.",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    date: "05 de Mayo, 2026",
    readTime: "10 min",
    category: "Tutorial Avanzado",
    tags: ["Regla de la Cadena", "Diferenciación"],
    author: {
      name: "Prof. Alberto Ruiz",
      role: "Ph.D. en Matemáticas"
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Regla de la Cadena", href: "/blog/entendiendo-regla-de-la-cadena" }
    ],
    content: (
       <div className="space-y-12 text-slate-600 dark:text-slate-300 leading-relaxed">
          <section>
             <h2 id="intro">El corazón de la diferenciación</h2>
             <p>La regla de la cadena es, sin duda, la herramienta más potente que aprenderás en cálculo diferencial. Te permite derivar funciones dentro de funciones, algo que verás constantemente en <Link href="/derivative-examples" className="text-secondary font-bold">ejercicios avanzados</Link>.</p>
          </section>
          <section>
             <h2 id="formula">La Fórmula de la Cadena</h2>
             <p>Esta regla establece que la derivada de una función compuesta es la derivada de la función exterior evaluada en la interior, multiplicada por la derivada de la función interior.</p>
             <FormulaCard>
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)", { displayMode: true }) }} />
             </FormulaCard>
             <p className="mt-4">
               Si esto te parece complicado, no te preocupes. Nuestra <Link href="/#calculator" className="text-secondary font-bold">herramienta online</Link> desglosa cada aplicación de esta regla para que la entiendas visualmente.
             </p>
          </section>
          <section>
            <h2 id="ejemplos">Más Recursos</h2>
            <p>
              Dominar la cadena te permitirá entender luego las <Link href="/partial-derivatives" className="text-secondary font-bold">derivadas parciales</Link> y otros conceptos de cálculo multivariable.
            </p>
          </section>
       </div>
    )
  }
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS[params.slug];
  if (!post) return {};
  return {
    title: `${post.title} | Derivio`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  return <ArticleLayout {...post} />;
}
