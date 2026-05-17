import Link from "next/link";
import { dict } from "@/lib/dictionaries";

export default function HomeLongFormSeo() {
  const t = dict.homeLongForm;

  return (
    <section
      className="border-t border-slate-100 bg-slate-50/80"
      aria-labelledby="home-longform-heading"
    >
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="mb-10 md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600 mb-3">
            {t.badge}
          </p>
          <h2
            id="home-longform-heading"
            className="heading-font text-2xl md:text-3xl text-slate-900 tracking-tight mb-4"
          >
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">{t.lead}</p>
        </header>

        {t.sections.map((section) => (
          <div key={section.id} className="mb-10 last:mb-0">
            <h2 className="heading-font text-xl md:text-2xl text-slate-900 mt-0 mb-4">
              {section.h2}
            </h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-slate-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            {section.subsections?.map((sub) => (
              <div key={sub.h3} className="mt-6">
                <h3 className="heading-font text-lg md:text-xl text-slate-900 mb-3">
                  {sub.h3}
                </h3>
                {sub.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}

        <nav
          className="mt-12 pt-8 border-t border-slate-200"
          aria-label="Enlaces internos del sitio"
        >
          <p className="text-sm font-semibold text-slate-900 mb-4">{t.linksTitle}</p>
          <ul className="flex flex-wrap gap-3">
            {t.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-violet-300 hover:text-violet-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </section>
  );
}
