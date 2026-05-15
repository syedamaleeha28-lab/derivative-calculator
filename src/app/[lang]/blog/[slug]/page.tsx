import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout, { FormulaCard, TipCard, WarningCard, ExampleCard } from "@/components/EducationalArticle";
import katex from "katex";
import Link from "@/components/LanguageLink";
import { dictionaries, Lang } from "@/lib/dictionaries";

// ─── Post Data (Localized) ─────────────────────────────────────────────────

const getPostData = (slug: string, lang: Lang) => {
  const posts: Record<string, any> = {
    "como-aprender-derivadas-desde-cero": {
      es: {
        title: "Cómo aprender derivadas desde cero: Guía Completa",
        description: "Domina el cálculo diferencial con esta guía paso a paso. Aprende qué es una derivada y cómo resolver ejercicios.",
        date: "10 de Mayo, 2026",
        readTime: "8 min",
        category: "Tutorial Básico",
        tags: ["Calculus", "Derivadas", "Matemáticas"],
        author: { name: "Prof. Alberto Ruiz", role: "Ph.D. en Matemáticas" },
        breadcrumbs: [
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Aprender desde cero", href: "/blog/como-aprender-derivadas-desde-cero" }
        ],
        content: (
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 id="intro">Introducción al concepto de derivada</h2>
              <p>Si has llegado hasta aquí, probablemente estés buscando resolver dudas sobre cómo resolver derivadas. El cálculo diferencial es una de las ramas más fascinantes de las matemáticas porque nos permite entender el movimiento y el cambio.</p>
              <TipCard>
                La derivada representa la tasa de cambio instantánea. Puedes usar nuestra <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas</Link> para ver el procedimiento paso a paso.
              </TipCard>
            </section>
            <section>
               <h2 id="formula">Definición Formal</h2>
               <FormulaCard title="Definición por Límites">
                 <div dangerouslySetInnerHTML={{ __html: katex.renderToString("f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}", { displayMode: true }) }} />
               </FormulaCard>
            </section>
          </div>
        )
      },
      en: {
        title: "How to learn derivatives from scratch: Complete Guide",
        description: "Master differential calculus with this step-by-step guide. Learn what a derivative is and how to solve exercises.",
        date: "May 10, 2026",
        readTime: "8 min",
        category: "Basic Tutorial",
        tags: ["Calculus", "Derivatives", "Mathematics"],
        author: { name: "Prof. Alberto Ruiz", role: "Ph.D. in Mathematics" },
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Learn from scratch", href: "/blog/como-aprender-derivadas-desde-cero" }
        ],
        content: (
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 id="intro">Introduction to the derivative concept</h2>
              <p>If you have made it this far, you are probably looking to solve doubts about how to solve derivatives. Differential calculus is one of the most fascinating branches of mathematics because it allows us to understand movement and change.</p>
              <TipCard>
                The derivative represents the instantaneous rate of change. You can use our <Link href="/#calculator" className="text-secondary font-bold">derivative calculator</Link> to see the step-by-step procedure.
              </TipCard>
            </section>
            <section>
               <h2 id="formula">Formal Definition</h2>
               <FormulaCard title="Definition by Limits">
                 <div dangerouslySetInnerHTML={{ __html: katex.renderToString("f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}", { displayMode: true }) }} />
               </FormulaCard>
            </section>
          </div>
        )
      },
      pt: {
        title: "Como aprender derivadas do zero: Guia Completo",
        description: "Domine o cálculo diferencial com este guia passo a passo. Aprenda o que é uma derivada e como resolver exercícios.",
        date: "10 de Maio, 2026",
        readTime: "8 min",
        category: "Tutorial Básico",
        tags: ["Cálculo", "Derivadas", "Matemática"],
        author: { name: "Prof. Alberto Ruiz", role: "Ph.D. em Matemática" },
        breadcrumbs: [
          { label: "Início", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Aprender do zero", href: "/blog/como-aprender-derivadas-desde-cero" }
        ],
        content: (
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 id="intro">Introdução ao conceito de derivada</h2>
              <p>Se você chegou até aqui, provavelmente está procurando resolver dúvidas sobre como resolver derivadas. O cálculo diferencial é um dos ramos mais fascinantes da matemática porque nos permite entender o movimento e a mudança.</p>
              <TipCard>
                A derivada representa a taxa de variação instantânea. Você pode usar nossa <Link href="/#calculator" className="text-secondary font-bold">calculadora de derivadas</Link> para ver o procedimento passo a passo.
              </TipCard>
            </section>
            <section>
               <h2 id="formula">Definição Formal</h2>
               <FormulaCard title="Definição por Limites">
                 <div dangerouslySetInnerHTML={{ __html: katex.renderToString("f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}", { displayMode: true }) }} />
               </FormulaCard>
            </section>
          </div>
        )
      }
    },
    "errores-comunes-al-derivar": {
      es: {
        title: "Los 5 errores más comunes al derivar",
        description: "Análisis de los fallos más frecuentes en exámenes de cálculo. Aprende a evitarlos.",
        date: "08 de Mayo, 2026",
        readTime: "6 min",
        category: "Consejos",
        tags: ["Exámenes", "Calculus", "Guía"],
        author: { name: "Dra. Elena Martínez", role: "Catedrática de Análisis Matemático" },
        breadcrumbs: [
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Errores Comunes", href: "/blog/errores-comunes-al-derivar" }
        ],
        content: (
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 id="intro">¿Por qué cometemos errores?</h2>
              <p>El cálculo diferencial requiere una atención meticulosa. A menudo, el problema no es la falta de comprensión, sino pequeños descuidos.</p>
              <WarningCard>
                Uno de los fallos más típicos es derivar el producto de dos funciones simplemente derivando cada una por separado. ¡No olvides la regla del producto!
              </WarningCard>
            </section>
          </div>
        )
      },
      en: {
        title: "The 5 most common mistakes when differentiating",
        description: "Analysis of the most frequent failures in calculus exams. Learn how to avoid them.",
        date: "May 08, 2026",
        readTime: "6 min",
        category: "Tips",
        tags: ["Exams", "Calculus", "Guide"],
        author: { name: "Dr. Elena Martínez", role: "Professor of Mathematical Analysis" },
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Common Mistakes", href: "/blog/errores-comunes-al-derivar" }
        ],
        content: (
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 id="intro">Why do we make mistakes?</h2>
              <p>Differential calculus requires meticulous attention. Often, the problem is not a lack of understanding, but small oversights.</p>
              <WarningCard>
                One of the most typical failures is differentiating the product of two functions by simply differentiating each separately. Don't forget the product rule!
              </WarningCard>
            </section>
          </div>
        )
      },
      pt: {
        title: "Os 5 erros mais comuns ao derivar",
        description: "Análise das falhas mais frequentes em exames de cálculo. Aprenda a evitá-las.",
        date: "08 de Maio, 2026",
        readTime: "6 min",
        category: "Conselhos",
        tags: ["Exames", "Cálculo", "Guia"],
        author: { name: "Dra. Elena Martínez", role: "Catedrática de Análise Matemática" },
        breadcrumbs: [
          { label: "Início", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Erros Comuns", href: "/blog/errores-comunes-al-derivar" }
        ],
        content: (
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 id="intro">Por que cometemos erros?</h2>
              <p>O cálculo diferencial requer atenção meticulosa. Muitas vezes, o problema não é a falta de compreensão, mas pequenos descuidos.</p>
              <WarningCard>
                Uma das falhas mais típicas é derivar o produto de duas funções simplesmente derivando cada uma separadamente. Não esqueça a regra do produto!
              </WarningCard>
            </section>
          </div>
        )
      }
    },
    "entendiendo-regla-de-la-cadena": {
      es: {
        title: "Entendiendo la Regla de la Cadena",
        description: "La explicación más clara sobre la regla de la cadena para funciones compuestas.",
        date: "05 de Mayo, 2026",
        readTime: "10 min",
        category: "Tutorial Avanzado",
        tags: ["Regla de la Cadena", "Diferenciación"],
        author: { name: "Prof. Alberto Ruiz", role: "Ph.D. en Matemáticas" },
        breadcrumbs: [
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Regla de la Cadena", href: "/blog/entendiendo-regla-de-la-cadena" }
        ],
        content: (
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 id="intro">El corazón de la diferenciación</h2>
              <p>La regla de la cadena es la herramienta más potente que aprenderás en cálculo diferencial. Te permite derivar funciones dentro de funciones.</p>
              <FormulaCard title="Regla de la Cadena">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)", { displayMode: true }) }} />
              </FormulaCard>
            </section>
          </div>
        )
      },
      en: {
        title: "Understanding the Chain Rule",
        description: "The clearest explanation of the chain rule for composite functions.",
        date: "May 05, 2026",
        readTime: "10 min",
        category: "Advanced Tutorial",
        tags: ["Chain Rule", "Differentiation"],
        author: { name: "Prof. Alberto Ruiz", role: "Ph.D. in Mathematics" },
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Chain Rule", href: "/blog/entendiendo-regla-de-la-cadena" }
        ],
        content: (
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 id="intro">The heart of differentiation</h2>
              <p>The chain rule is the most powerful tool you will learn in differential calculus. It allows you to differentiate functions within functions.</p>
              <FormulaCard title="Chain Rule">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)", { displayMode: true }) }} />
              </FormulaCard>
            </section>
          </div>
        )
      },
      pt: {
        title: "Entendendo a Regra da Cadeia",
        description: "A explicação mais clara sobre a regra da cadeia para funções compostas.",
        date: "05 de Maio, 2026",
        readTime: "10 min",
        category: "Tutorial Avançado",
        tags: ["Regra da Cadeia", "Diferenciação"],
        author: { name: "Prof. Alberto Ruiz", role: "Ph.D. em Matemática" },
        breadcrumbs: [
          { label: "Início", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Regra da Cadeia", href: "/blog/entendiendo-regla-de-la-cadena" }
        ],
        content: (
          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 id="intro">O coração da diferenciação</h2>
              <p>A regra da cadeia é a ferramenta mais poderosa que você aprenderá no cálculo diferencial. Ela permite derivar funções dentro de funções.</p>
              <FormulaCard title="Regra da Cadeia">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)", { displayMode: true }) }} />
              </FormulaCard>
            </section>
          </div>
        )
      }
    }
  };

  const post = posts[slug];
  if (!post) return null;
  return post[lang] || post['es'];
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const post = getPostData(slug, currentLang);
  
  if (!post) return {};
  
  return {
    title: `${post.title} | Calculadora Derivadas`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const currentLang = (lang === "en" || lang === "pt" ? lang : "es") as Lang;
  const post = getPostData(slug, currentLang);
  
  if (!post) notFound();

  return <ArticleLayout {...post} showArticleMeta />;
}
