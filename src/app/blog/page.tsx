import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog de Cálculo Diferencial y Derivadas | Derivio",
  description: "Aprende derivadas fácilmente con tutoriales, ejercicios, reglas y artículos educativos de cálculo diferencial.",
  openGraph: {
    title: "Blog de Cálculo Diferencial y Derivadas | Derivio",
    description: "Aprende derivadas fácilmente con tutoriales, ejercicios y artículos.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Cálculo Diferencial y Derivadas | Derivio",
    description: "Aprende derivadas fácilmente con tutoriales.",
  },
};

const POSTS = [
  {
    title: "Cómo aprender derivadas desde cero",
    slug: "como-aprender-derivadas-desde-cero",
    desc: "Una guía completa para principiantes que quieren entender el concepto de derivada sin complicaciones.",
    date: "10 May 2026",
    read: "5 min",
  },
  {
    title: "Los 5 errores más comunes al derivar",
    slug: "errores-comunes-al-derivar",
    desc: "Evita estos fallos típicos en tus exámenes de cálculo. Analizamos la regla de la cadena y el producto.",
    date: "08 May 2026",
    read: "8 min",
  },
  {
    title: "Entendiendo la Regla de la Cadena",
    slug: "entendiendo-regla-de-la-cadena",
    desc: "Explicación visual y sencilla de la regla más utilizada en el cálculo de derivadas online.",
    date: "05 May 2026",
    read: "6 min",
  },
];

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <div className="pt-32 pb-24 bg-[#F8F6F2] dark:bg-[#07111f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary dark:text-accent font-bold tracking-widest uppercase text-[0.7rem] mb-4 block">Recursos Educativos</span>
            <h1 className="heading-font text-[2.8rem] md:text-[3.5rem] text-slate-900 dark:text-white mb-6">
              Blog de <span className="text-secondary dark:text-accent">Cálculo</span>
            </h1>
            <p className="text-slate-600 dark:text-[#cbd5e1] text-lg">
              Artículos diseñados para que aprender derivadas sea una experiencia fácil y entretenida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, idx) => (
              <Link key={idx} href={`/blog/${post.slug}`}>
                <article className="h-full bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-[#1e293b] rounded-[2rem] p-8 hover:shadow-xl transition-all group cursor-pointer flex flex-col">
                  <div className="flex items-center gap-3 text-[0.75rem] text-slate-400 dark:text-slate-500 mb-6 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} /> {post.read}
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    {post.date}
                  </div>
                  <h2 className="heading-font text-[1.4rem] text-slate-900 dark:text-white mb-4 group-hover:text-secondary dark:group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 dark:text-[#cbd5e1] text-[0.95rem] leading-relaxed mb-8">
                    {post.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-secondary dark:text-accent font-bold text-[0.9rem]">
                    Leer artículo <ChevronRight size={16} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
