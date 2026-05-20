import Link from "next/link";
import { PLANNED_BLOG_POSTS } from "@/lib/blog-seo";

export default function BlogSeoSection() {
  return (
    <section
      className="mt-20 pt-16 border-t border-slate-200"
      aria-labelledby="blog-seo-plan-heading"
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2
          id="blog-seo-plan-heading"
          className="heading-font text-2xl md:text-3xl text-slate-900 mb-4"
        >
          Próximos artículos sobre derivadas
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Estamos ampliando el blog con guías sobre derivadas explicadas, regla de la cadena,
          derivadas implícitas y ejercicios resueltos. Cada artículo enlazará a la calculadora,
          ejemplos y reglas para reforzar tu estudio.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {PLANNED_BLOG_POSTS.map((post) => (
          <li
            key={post.slug}
            className="rounded-2xl border border-slate-100 bg-white p-5 text-left"
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-wider text-violet-600 mb-2">
              Próximamente
            </p>
            <h3 className="font-bold text-slate-900 text-[1.05rem] mb-2 leading-snug">
              {post.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-3">{post.metaDescription}</p>
            <p className="text-xs text-slate-400">
              <span className="font-medium text-slate-600">Enlaces: </span>
              {post.internalLinks.map((link, i) => (
                <span key={link.href}>
                  {i > 0 && " · "}
                  <Link href={link.href} className="text-violet-600 hover:underline">
                    {link.label}
                  </Link>
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>

      <nav
        className="mt-12 flex flex-wrap justify-center gap-3"
        aria-label="Enlaces internos desde el blog"
      >
        {[
          { label: "Calculadora de derivadas", href: "/" },
          { label: "Cómo funciona", href: "/como-funciona" },
          { label: "Ejemplos resueltos", href: "/ejemplos" },
          { label: "Reglas de derivación", href: "/reglas" },
          { label: "Preguntas frecuentes", href: "/#faq" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-violet-300 hover:text-violet-600 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
