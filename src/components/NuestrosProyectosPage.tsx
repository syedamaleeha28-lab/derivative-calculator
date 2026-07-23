import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import {
  SCHEMA_CONTEXT,
  buildOrganizationNode,
  organizationRef,
} from "@/lib/calculator-pages/schema-shared";
import { buildBreadcrumbSchema } from "@/lib/calculator-pages/schema";
import {
  NUESTROS_PROYECTOS,
  NUESTROS_PROYECTOS_BREADCRUMBS,
  NUESTROS_PROYECTOS_FILOSOFIA,
  NUESTROS_PROYECTOS_INTRO,
  NUESTROS_PROYECTOS_LIST_TITLE,
  NUESTROS_PROYECTOS_METADATA,
  NUESTROS_PROYECTOS_PATH,
} from "@/lib/nuestros-proyectos";

export default function NuestrosProyectosPage() {
  const canonical = absoluteUrl(NUESTROS_PROYECTOS_PATH);
  const breadcrumb = buildBreadcrumbSchema(
    NUESTROS_PROYECTOS_BREADCRUMBS.map((crumb) => ({
      name: crumb.label,
      path: crumb.href,
    })),
    canonical
  );

  const jsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      buildOrganizationNode(),
      breadcrumb,
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#webpage`,
        name: NUESTROS_PROYECTOS_METADATA.title,
        description: NUESTROS_PROYECTOS_METADATA.description,
        url: canonical,
        inLanguage: "es",
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        },
        about: organizationRef(),
        publisher: organizationRef(),
      },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-50/40">
      <JsonLd data={jsonLd} />
      <Navbar />
      <article className="flex-1 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wider text-slate-400 mb-8"
          >
            {NUESTROS_PROYECTOS_BREADCRUMBS.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden className="opacity-40">
                    /
                  </span>
                )}
                {index < NUESTROS_PROYECTOS_BREADCRUMBS.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-secondary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-700 normal-case tracking-normal text-sm font-medium">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>

          <header className="mb-10 rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-sm md:px-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
              {NUESTROS_PROYECTOS_INTRO.eyebrow}
            </p>
            <h1 className="heading-font text-3xl sm:text-4xl text-slate-900 leading-tight mb-3">
              {NUESTROS_PROYECTOS_INTRO.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {NUESTROS_PROYECTOS_INTRO.subtitle}
            </p>
          </header>

          <section
            aria-labelledby="proyectos-list-heading"
            className="rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-sm md:px-10"
          >
            <h2
              id="proyectos-list-heading"
              className="text-xl font-bold text-slate-900 mb-8"
            >
              {NUESTROS_PROYECTOS_LIST_TITLE}
            </h2>

            <div className="space-y-8">
              {NUESTROS_PROYECTOS.map((project) => (
                <article
                  key={project.id}
                  className="border-t border-slate-100 pt-8 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="heading-font text-lg text-slate-900">
                      {project.current ? (
                        project.name
                      ) : (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-secondary hover:underline"
                        >
                          {project.name}
                          <ExternalLink
                            size={14}
                            aria-hidden
                            className="opacity-70"
                          />
                        </a>
                      )}
                    </h3>
                    {project.current && (
                      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        Proyecto actual
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[0.95rem]">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="filosofia-heading"
            className="mt-10 rounded-2xl border border-slate-200/80 bg-white px-6 py-8 shadow-sm md:px-10"
          >
            <h2
              id="filosofia-heading"
              className="text-xl font-bold text-slate-900 mb-3"
            >
              {NUESTROS_PROYECTOS_FILOSOFIA.title}
            </h2>
            <p className="text-slate-600 leading-relaxed text-[0.95rem]">
              {NUESTROS_PROYECTOS_FILOSOFIA.text}
            </p>
          </section>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href={ROUTES.acercaDe}
              className="inline-flex justify-center items-center bg-secondary text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-md hover:opacity-95 transition-opacity"
            >
              Acerca de nosotros
            </Link>
            <Link
              href={ROUTES.home}
              className="inline-flex justify-center items-center border border-slate-200 bg-white text-slate-700 px-8 py-3 rounded-xl font-semibold text-sm hover:border-secondary/40 transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
