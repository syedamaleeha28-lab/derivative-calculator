import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, ChevronRight, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";
import katex from "katex";
import { notFound } from "next/navigation";

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  read: string;
  category: string;
  content: React.ReactNode;
}

const POSTS: Record<string, BlogPost> = {
  "como-aprender-derivadas-desde-cero": {
    title: "Cómo aprender derivadas desde cero",
    slug: "como-aprender-derivadas-desde-cero",
    description: "Una guía completa para principiantes que quieren entender el concepto de derivada sin complicaciones.",
    date: "10 May 2026",
    read: "5 min",
    category: "Tutorial",
    content: (
      <div className="space-y-10">
        <section>
          <h2 className="heading-font text-3xl text-slate-900 dark:text-white mb-6">Introducción al Cálculo Diferencial</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Aprender derivadas puede parecer intimidante al principio, pero en esencia, una derivada es simplemente una medida de <strong>cómo cambia algo</strong>. Si estás en un coche, la derivada de tu posición es tu velocidad. Si estás en una montaña rusa, la derivada es la inclinación de la vía en cada punto.
          </p>
        </section>

        <section className="bg-slate-50 dark:bg-[#0f172a] p-8 rounded-3xl border border-slate-100 dark:border-[#1e293b]">
          <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-4">La Definición Visual</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Imagina una curva en un gráfico. La derivada en un punto específico es la pendiente de la línea que apenas toca ese punto (la recta tangente).
          </p>
          <div className="bg-white dark:bg-black/40 p-6 rounded-2xl text-center overflow-x-auto shadow-inner">
             <div dangerouslySetInnerHTML={{ __html: katex.renderToString("f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}", { displayMode: true }) }} />
          </div>
        </section>

        <section>
          <h2 className="heading-font text-3xl text-slate-900 dark:text-white mb-6">Pasos para Dominar las Derivadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 bg-white dark:bg-[#131927] border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
                <CheckCircle2 className="text-secondary mb-4" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Entiende la pendiente</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Antes de las fórmulas, entiende que buscas la inclinación de una curva.</p>
             </div>
             <div className="p-6 bg-white dark:bg-[#131927] border border-slate-100 dark:border-white/5 rounded-2xl shadow-sm">
                <CheckCircle2 className="text-secondary mb-4" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Aprende las reglas básicas</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Empieza por la regla de la potencia y las constantes. Son los pilares.</p>
             </div>
          </div>
        </section>
      </div>
    )
  },
  "errores-comunes-al-derivar": {
    title: "Los 5 errores más comunes al derivar",
    slug: "errores-comunes-al-derivar",
    description: "Evita estos fallos típicos en tus exámenes de cálculo. Analizamos la regla de la cadena y el producto.",
    date: "08 May 2026",
    read: "8 min",
    category: "Tips",
    content: (
      <div className="space-y-10">
        <section>
          <h2 className="heading-font text-3xl text-slate-900 dark:text-white mb-6">¿Por qué fallamos en Cálculo?</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Incluso los mejores estudiantes cometen errores por descuido. Aquí analizamos los "pecados capitales" de la derivación para que nunca te pase a ti.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex gap-4 p-8 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-3xl">
             <AlertTriangle className="text-red-500 shrink-0" size={28} />
             <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-2">1. La trampa del producto</h3>
                <p className="text-slate-600 dark:text-slate-400">Creer que la derivada de u·v es u'·v'. ¡Error! Siempre usa la fórmula u'v + uv'.</p>
             </div>
          </div>
          <div className="flex gap-4 p-8 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-3xl">
             <AlertTriangle className="text-red-500 shrink-0" size={28} />
             <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-2">2. Olvidar la Regla de la Cadena</h3>
                <p className="text-slate-600 dark:text-slate-400">Derivar sin(x²) como cos(x²) sin multiplicar por el 2x interior. La capa interior siempre importa.</p>
             </div>
          </div>
        </section>

        <section>
          <h2 className="heading-font text-3xl text-slate-900 dark:text-white mb-6">Cómo evitar estos errores</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            La mejor forma de verificar tus resultados es usar una <strong>calculadora de derivadas online</strong> que muestre los pasos. Esto te permite comparar tu procedimiento con el camino correcto.
          </p>
        </section>
      </div>
    )
  },
  "entendiendo-regla-de-la-cadena": {
    title: "Entendiendo la Regla de la Cadena",
    slug: "entendiendo-regla-de-la-cadena",
    description: "Explicación visual y sencilla de la regla más utilizada en el cálculo de derivadas online.",
    date: "05 May 2026",
    read: "6 min",
    category: "Tutorial",
    content: (
      <div className="space-y-10">
        <section>
          <h2 className="heading-font text-3xl text-slate-900 dark:text-white mb-6">La Regla de la Cadena Desmitificada</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Si hay una regla que genera dudas, es esta. Pero una vez que entiendes el concepto de "composición de funciones", todo se vuelve lógico.
          </p>
        </section>

        <section className="bg-violet-50 dark:bg-secondary/5 p-10 rounded-[3rem] border border-secondary/10">
          <h3 className="font-bold text-slate-900 dark:text-white text-2xl mb-6">La Metáfora de la Cebolla</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Imagina una función como sin(x²). El "seno" es la capa exterior y el "x²" es el corazón. Para derivar, pelamos la primera capa (coseno) y luego multiplicamos por la derivada del corazón (2x).
          </p>
          <div className="bg-white dark:bg-black/40 p-6 rounded-2xl text-center shadow-sm">
             <div dangerouslySetInnerHTML={{ __html: katex.renderToString("\\dfrac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)", { displayMode: true }) }} />
          </div>
        </section>

        <section>
           <h2 className="heading-font text-3xl text-slate-900 dark:text-white mb-6">Preguntas Frecuentes</h2>
           <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-[#1e293b] rounded-2xl">
                 <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <HelpCircle size={18} className="text-secondary" /> ¿Cuándo debo usarla?
                 </h4>
                 <p className="text-slate-500 dark:text-slate-400 text-sm">Siempre que tengas una función dentro de otra. Ejemplos: log(x²), (3x-1)⁵, e^{"{"}cos x{"}"}.</p>
              </div>
           </div>
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
    title: `${post.title} | Blog de Cálculo | Derivio`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#07111f]">
      <Navbar />
      
      {/* ─── Breadcrumbs & Header ───────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-[#F8F6F2] dark:bg-[#07111f] border-b border-slate-100 dark:border-[#1e293b]">
        <div className="max-w-[800px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-400 uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-slate-900 dark:text-white truncate">{post.title}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-accent px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-[0.8rem]">
              <Calendar size={14} /> {post.date}
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[0.8rem]">
              <Clock size={14} /> {post.read} lectura
            </div>
          </div>

          <h1 className="heading-font text-[3rem] md:text-[3.8rem] text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ─── Article Content ────────────────────────────────────────── */}
      <article className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {post.content}
          </div>

          {/* ─── Internal Linking ────────────────────────────────────── */}
          <div className="mt-20 pt-12 border-t border-slate-100 dark:border-[#1e293b]">
             <h3 className="heading-font text-2xl text-slate-900 dark:text-white mb-8">Sigue aprendiendo</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/rules" className="p-6 bg-slate-50 dark:bg-[#0f172a] rounded-2xl border border-slate-100 dark:border-[#1e293b] hover:border-secondary/30 transition-all group">
                   <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest mb-1 block">Reglas</span>
                   <p className="text-slate-900 dark:text-white font-bold">Ver reglas de derivación</p>
                </Link>
                <Link href="/demonstraciones" className="p-6 bg-slate-50 dark:bg-[#0f172a] rounded-2xl border border-slate-100 dark:border-[#1e293b] hover:border-secondary/30 transition-all group">
                   <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest mb-1 block">Academia</span>
                   <p className="text-slate-900 dark:text-white font-bold">Ver demonstraciones paso a paso</p>
                </Link>
             </div>
          </div>
        </div>
      </article>

      {/* ─── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F6F2] dark:bg-[#07111f] border-t border-slate-100 dark:border-[#1e293b]">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
           <h2 className="heading-font text-[2.5rem] text-slate-900 dark:text-white mb-8">¿Listo para calcular?</h2>
           <Link href="/" className="bg-slate-900 dark:bg-secondary hover:bg-slate-800 dark:hover:bg-accent text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl active:scale-95">
              Ir a la Calculadora de Derivadas
           </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
