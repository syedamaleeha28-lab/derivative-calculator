"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Clock, 
  Calendar, 
  ChevronRight, 
  User, 
  Tag, 
  List, 
  ChevronDown,
  ArrowRight,
  BookOpen,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  ExternalLink,
  Calculator
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";


interface Heading {
  id: string;
  text: string;
  level: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  content: React.ReactNode;
  faqs?: FAQItem[];
  relatedPosts?: {
    title: string;
    slug: string;
    image?: string;
  }[];
  breadcrumbs: {
    label: string;
    href: string;
  }[];
  image?: string;
  /** Texto alternativo en español para la imagen hero (SEO y accesibilidad). */
  heroImageAlt?: string;
  canonical?: string;
}

// ─── Content Blocks ──────────────────────────────────────────────────────────

export const FormulaCard = ({ children, title = "Fórmula" }: { children: React.ReactNode; title?: string }) => (
  <div className="my-8 p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    <div className="relative z-10">
      <div className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-secondary mb-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-secondary" /> {title}
      </div>
      <div className="text-[1.5rem] md:text-[2rem] font-serif text-center overflow-x-auto no-scrollbar py-4">
        {children}
      </div>
    </div>
  </div>
);

export const TipCard = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 flex gap-4">
    <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
      <Lightbulb size={20} />
    </div>
    <div>
      <h4 className="font-bold text-blue-900 dark:text-blue-300 text-[0.9rem] mb-1">PRO TIP</h4>
      <div className="text-blue-800/80 dark:text-blue-300/70 text-[0.95rem] leading-relaxed">{children}</div>
    </div>
  </div>
);

export const WarningCard = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20 flex gap-4">
    <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
      <AlertTriangle size={20} />
    </div>
    <div>
      <h4 className="font-bold text-amber-900 dark:text-amber-300 text-[0.9rem] mb-1">¡CUIDADO!</h4>
      <div className="text-amber-800/80 dark:text-amber-300/70 text-[0.95rem] leading-relaxed">{children}</div>
    </div>
  </div>
);

export const ExampleCard = ({ title, children, steps }: { title: string; children: React.ReactNode; steps?: string[] }) => (
  <div className="my-10 rounded-[2.5rem] bg-white dark:bg-[#0f172a] border border-slate-200/60 dark:border-white/5 shadow-xl overflow-hidden">
    <div className="px-8 py-6 bg-slate-50 dark:bg-white/5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
      <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
        <CheckCircle2 size={18} className="text-secondary" /> {title}
      </h4>
      <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">Ejemplo Práctico</span>
    </div>
    <div className="p-8">
      <div className="mb-6">{children}</div>
      {steps && (
        <div className="space-y-4 pt-6 border-t border-slate-50 dark:border-white/5">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <span className="shrink-0 w-6 h-6 rounded-full bg-secondary/10 text-secondary text-[0.7rem] font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-[0.9rem] text-slate-600 dark:text-slate-400 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

// ─── Learning Links Sidebar ──────────────────────────────────────────────────
const INTERNAL_LINKS = [
  { label: "Calculadora de Derivadas", href: "/#calculator", icon: <Calculator size={14} /> },
  { label: "Reglas de Derivación", href: "/reglas", icon: <BookOpen size={14} /> },
  { label: "Fórmulas de Cálculo", href: "/basic-derivative-formulas", icon: <List size={14} /> },
  { label: "Ejemplos Resueltos", href: "/derivative-examples", icon: <CheckCircle2 size={14} /> },
  { label: "Conceptos Básicos", href: "/what-is-a-derivative", icon: <HelpCircle size={14} /> },
  { label: "Derivadas Parciales", href: "/partial-derivatives", icon: <ExternalLink size={14} /> },
];

// ─── Main Article Component ──────────────────────────────────────────────────

export default function ArticleLayout({
  title,
  description,
  date,
  readTime,
  author,
  category,
  tags,
  content,
  faqs,
  relatedPosts,
  breadcrumbs,
  image,
  heroImageAlt,
  canonical
}: ArticleProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isTocOpen, setIsTocOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const elements = Array.from(contentRef.current.querySelectorAll("h2, h3"));
      const extracted = elements.map((el) => {
        const id = el.id || el.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") || "";
        el.id = id; 
        return {
          id,
          text: el.textContent || "",
          level: parseInt(el.tagName.replace("H", ""))
        };
      });
      setHeadings(extracted);
    }
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth"
      });
      setIsTocOpen(false);
    }
  };

  // ─── Schema JSON-LD ───────────────────────────────────────────────────────
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image
      ? {
          "@type": "ImageObject",
          "url": image,
          "width": 1200,
          "height": 630,
          "caption": heroImageAlt?.trim() || title,
        }
      : "https://derivio.app/og-image.jpg",
    "datePublished": date,
    "author": {
      "@type": "Person",
      "name": author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Derivio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://derivio.app/logo.png"
      }
    }
  };

  const faqSchema = faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.label,
      "item": `https://derivio.app${b.href}`
    }))
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 dark:bg-[#07111f]">
      {/* Schema Scripts */}
      <script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      {/* Hero Header */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-[0.75rem] font-bold text-slate-400 uppercase tracking-widest mb-10" aria-label="Breadcrumb">
            {breadcrumbs.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <Link href={b.href} className="hover:text-secondary transition-colors">{b.label}</Link>
                {i < breadcrumbs.length - 1 && <ChevronRight size={12} />}
              </div>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 items-center">
            <div className="max-w-[900px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-secondary/10 text-secondary dark:text-accent px-4 py-1.5 rounded-full text-[0.75rem] font-black uppercase tracking-widest">
                  {category}
                </span>
                <div className="h-4 w-px bg-slate-200 dark:bg-white/10" />
                <div className="flex items-center gap-4 text-slate-400 text-[0.8rem] font-medium">
                  <div className="flex items-center gap-1.5"><Calendar size={14} /> {date}</div>
                  <div className="flex items-center gap-1.5"><Clock size={14} /> {readTime} de lectura</div>
                </div>
              </div>

              <h1 className="heading-font text-[3rem] md:text-[4.5rem] text-slate-900 dark:text-white leading-[1] tracking-tight mb-8">
                {title}
              </h1>
              <p className="text-[1.25rem] text-slate-600 dark:text-slate-400 leading-relaxed max-w-[800px]">
                {description}
              </p>
            </div>

            {image && (
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/5 rotate-2">
                <Image
                  src={image}
                  alt={
                    heroImageAlt?.trim() ||
                    `Fotografía o ilustración de portada del artículo «${title}», relacionada con matemáticas y derivadas.`
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) min(92vw, 600px), 450px"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Article Content Layout */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
          
          {/* Main Article Column */}
          <div className="min-w-0">
            {/* Mobile TOC */}
            <div className="lg:hidden mb-12">
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full flex items-center justify-between p-5 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 font-bold text-slate-900 dark:text-white"
              >
                <div className="flex items-center gap-3">
                  <List size={20} className="text-secondary" />
                  Tabla de Contenidos
                </div>
                <ChevronDown className={`transition-transform duration-300 ${isTocOpen ? "rotate-180" : ""}`} size={20} />
              </button>
              <AnimatePresence>
                {isTocOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-white dark:bg-[#0f172a] border-x border-b border-slate-200 dark:border-white/5 rounded-b-2xl -mt-2"
                  >
                    <div className="p-6 flex flex-col gap-4">
                      {headings.map((h) => (
                        <button
                          key={h.id}
                          onClick={() => scrollTo(h.id)}
                          className={`text-left text-[0.9rem] ${h.level === 3 ? "pl-4 text-[0.85rem]" : "font-bold"} ${activeId === h.id ? "text-secondary" : "text-slate-500 dark:text-slate-400"}`}
                        >
                          {h.text}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <article ref={contentRef} className="article-content">
              {content}
            </article>

            {/* FAQs */}
            {faqs && faqs.length > 0 && (
              <div className="mt-20">
                <h2 className="heading-font text-[2.2rem] text-slate-900 dark:text-white mb-10 flex items-center gap-4">
                  <HelpCircle className="text-secondary" size={32} /> Preguntas Frecuentes
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group glass-card border border-slate-200/60 dark:border-white/5 overflow-hidden">
                      <summary className="list-none p-6 flex items-center justify-between cursor-pointer font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                        {faq.question}
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center group-open:rotate-180 transition-transform">
                          <ChevronDown size={16} />
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed text-[0.95rem]">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Author Section */}
            <footer className="mt-24 p-8 rounded-[2.5rem] bg-white dark:bg-[#0f172a] border border-slate-200/60 dark:border-white/5 flex flex-col md:flex-row items-center gap-8 shadow-sm">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent shrink-0 flex items-center justify-center text-white text-3xl font-black">
                {author.name.charAt(0)}
              </div>
              <div className="text-center md:text-left">
                <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-[0.2em] mb-1 block">Escrito por</span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{author.name}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-[0.9rem] leading-relaxed mb-4">
                  {author.role}. Especialista en educación matemática y creador de contenido pedagógico para estudiantes de secundaria y universidad.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-[0.7rem] font-bold text-slate-400 uppercase tracking-tighter">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </footer>
          </div>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 flex flex-col gap-12">
              
              {/* Desktop TOC */}
              <nav aria-label="Table of contents">
                <h4 className="text-[0.7rem] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <List size={14} /> Contenido
                </h4>
                <div className="flex flex-col gap-0 border-l border-slate-200 dark:border-white/5">
                  {headings.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => scrollTo(h.id)}
                      className={`text-left py-2.5 transition-all relative ${
                        h.level === 3 ? "pl-8 text-[0.85rem]" : "pl-6 text-[0.92rem] font-bold"
                      } ${
                        activeId === h.id 
                          ? "text-secondary" 
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {activeId === h.id && (
                        <motion.div 
                          layoutId="active-toc"
                          className="absolute left-0 top-0 w-0.5 h-full bg-secondary"
                        />
                      )}
                      {h.text}
                    </button>
                  ))}
                </div>
              </nav>

              {/* Learning Links */}
              <nav aria-label="Learning resources">
                <h4 className="text-[0.7rem] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <BookOpen size={14} /> Recursos
                </h4>
                <div className="flex flex-col gap-3">
                  {INTERNAL_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-secondary/30 hover:shadow-md transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/10 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-secondary/10 transition-all">
                        {link.icon}
                      </div>
                      <span className="text-[0.85rem] font-bold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Related Section CTA */}
              <div className="p-8 rounded-[2rem] bg-secondary/5 border border-secondary/10 relative overflow-hidden">
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
                <h5 className="font-bold text-secondary dark:text-accent mb-4 relative z-10">¿Te ha servido?</h5>
                <p className="text-[0.8rem] text-slate-500 dark:text-slate-400 mb-6 leading-relaxed relative z-10">
                  Calcula cualquier derivada al instante con nuestra herramienta online.
                </p>
                <Link href="/#calculator" className="flex items-center justify-center w-full bg-secondary text-white py-3 rounded-xl font-bold text-[0.85rem] shadow-lg shadow-secondary/20 hover:scale-[1.02] transition-all relative z-10">
                  Usar Calculadora
                </Link>
              </div>

              {relatedPosts && (
                <div>
                  <h4 className="text-[0.7rem] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Artículos Relacionados</h4>
                  <div className="flex flex-col gap-6">
                    {relatedPosts.map((post, i) => (
                    <Link 
                      key={i} 
                      href={post.slug.startsWith("/") ? post.slug : `/blog/${post.slug}`} 
                      className="group block"
                    >
                        <h5 className="text-[0.95rem] font-bold text-slate-900 dark:text-white leading-snug group-hover:text-secondary transition-colors">
                          {post.title}
                        </h5>
                        <div className="flex items-center gap-1 text-[0.75rem] text-secondary font-bold mt-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                          Leer más <ArrowRight size={12} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

        </div>
      </section>

      {/* Related Articles Bottom */}
      <section className="py-24 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#0f172a]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="heading-font text-[2rem] text-slate-900 dark:text-white">Artículos Recomendados</h2>
            <Link href="/blog" className="text-secondary font-bold text-[0.9rem] flex items-center gap-2 hover:gap-3 transition-all">
              Ver todos <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(relatedPosts || []).slice(0, 3).map((post, i) => (
              <Link 
                key={i} 
                href={post.slug.startsWith("/") ? post.slug : `/blog/${post.slug}`} 
                className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-[#1e293b] border border-slate-100 dark:border-white/5 hover:border-secondary/30 transition-all h-full flex flex-col"
              >
                <span className="text-[0.65rem] font-black text-secondary uppercase tracking-[0.2em] mb-4 block">Calculus Tips</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-4 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                  Aprende paso a paso cómo resolver ejercicios complejos y domina el cálculo diferencial rápidamente con nuestras guías interactivas.
                </p>
                <div className="mt-auto flex items-center gap-2 text-slate-900 dark:text-white font-bold text-[0.8rem]">
                   Leer artículo <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
