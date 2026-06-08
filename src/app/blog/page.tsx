import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHub from "@/components/BlogHub";
import Link from "next/link";
import { dict } from "@/lib/dictionaries";
import { getBlogListingPosts } from "@/lib/blog-posts";
import { buildBlogCollectionSchema } from "@/lib/blog-seo";
import { metadataFromEntry } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const m = dict.metadata.blog;
  return metadataFromEntry("/blog", {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
  });
}

export default async function BlogPage() {
  const t = dict.blog;
  const posts = getBlogListingPosts();
  const blogJsonLd = JSON.stringify(buildBlogCollectionSchema(posts)).replace(
    /</g,
    "\\u003c"
  );

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Script
        id="blog-collection-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: blogJsonLd }}
      />
      <Navbar />
      <div className="pt-32 pb-24 bg-[#F8F6F2]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-violet-600 font-bold tracking-widest uppercase text-[0.7rem] mb-4 block">
              {t.badge}
            </span>
            <h1 className="heading-font text-[2.5rem] md:text-[3.2rem] text-slate-900 mb-6">
              {t.title1} <span className="text-violet-600">{t.title2}</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">{t.subtitle}</p>
            <p className="text-slate-500 text-[0.95rem] mt-4 leading-relaxed">
              Guías sobre{" "}
              <strong className="text-slate-700 font-medium">derivada de sin x</strong>,{" "}
              <strong className="text-slate-700 font-medium">regla de la cadena</strong>,{" "}
              <strong className="text-slate-700 font-medium">derivadas implícitas</strong> y{" "}
              <strong className="text-slate-700 font-medium">derivadas parciales</strong>.
              Practica con nuestra{" "}
              <Link href="/#calculator" className="text-violet-600 font-medium hover:underline">
                calculadora de derivadas con pasos
              </Link>
              , consulta{" "}
              <Link href="/reglas" className="text-violet-600 font-medium hover:underline">
                reglas de derivación
              </Link>{" "}
              y explora{" "}
              <Link href="/ejemplos" className="text-violet-600 font-medium hover:underline">
                ejemplos de derivadas resueltas
              </Link>
              .
            </p>
          </div>

          <BlogHub posts={posts} readMoreLabel={t.readMore} />

          <nav
            className="mt-16 pt-10 border-t border-slate-200 flex flex-wrap justify-center gap-3"
            aria-label="Recursos relacionados del sitio"
          >
            {[
              { label: "Calculadora", href: "/#calculator" },
              { label: "Cómo funciona", href: "/como-funciona" },
              { label: "Reglas", href: "/reglas" },
              { label: "Ejemplos", href: "/ejemplos" },
              { label: "Inicio", href: "/" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-violet-300 hover:text-violet-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  );
}
