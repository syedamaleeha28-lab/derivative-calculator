import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  BookOpen,
  Copy,
  ExternalLink,
  FileCode,
  GraduationCap,
  Layers,
  Puzzle,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CHROME_EXTENSION_URL } from "@/lib/chrome-extension-url";
import {
  buildExtensionCromoFormulasSchemaGraph,
  EXTENSION_CROMO_FORMULAS_BENEFITS,
  EXTENSION_CROMO_FORMULAS_BREADCRUMBS,
  EXTENSION_CROMO_FORMULAS_FAQS,
  EXTENSION_CROMO_FORMULAS_FEATURES,
  EXTENSION_CROMO_FORMULAS_INTERNAL_LINKS,
  EXTENSION_CROMO_FORMULAS_INTRO,
  EXTENSION_CROMO_FORMULAS_STEPS,
} from "@/lib/extension-cromo-formulas";

const FEATURE_ICONS = [Copy, BookOpen, FileCode, Layers, ArrowRight] as const;
const BENEFIT_ICONS = [GraduationCap, BookOpen, Wrench, Layers] as const;

const jsonLd = JSON.stringify(buildExtensionCromoFormulasSchemaGraph()).replace(/</g, "\\u003c");

export default function ExtensionCromoFormulasPage() {
  const intro = EXTENSION_CROMO_FORMULAS_INTRO;

  return (
    <>
      <Script
        id="extension-cromo-formulas-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <main className="flex min-h-screen flex-col bg-white">
        <Navbar />

        <section
          className="border-b border-slate-100 bg-gradient-to-b from-violet-50/60 to-white pt-28 pb-14 md:pt-32 md:pb-20"
          aria-labelledby="extension-hero-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wider text-slate-400"
            >
              {EXTENSION_CROMO_FORMULAS_BREADCRUMBS.map((crumb, index) => (
                <span key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && (
                    <span aria-hidden className="opacity-40">
                      /
                    </span>
                  )}
                  {index < EXTENSION_CROMO_FORMULAS_BREADCRUMBS.length - 1 ? (
                    <Link href={crumb.href} className="transition-colors hover:text-violet-600">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium normal-case tracking-normal text-slate-700">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-600">
                  Extensión gratuita de Chrome
                </p>
                <h1
                  id="extension-hero-heading"
                  className="heading-font mb-5 text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl"
                >
                  {intro.h1}
                </h1>
                <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">{intro.subtitle}</p>
                <a
                  href={CHROME_EXTENSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-violet-700"
                >
                  <Puzzle size={18} aria-hidden />
                  Instalar Extensión de Chrome
                  <ExternalLink size={14} aria-hidden className="opacity-80" />
                </a>
              </div>

              <div
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-violet-50/80 p-6 shadow-sm md:p-8"
                role="img"
                aria-label="Vista previa de la extensión Math Formula Helper"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-medium text-slate-400">Math Formula Helper</span>
                </div>
                <div className="space-y-3 rounded-xl border border-slate-200/80 bg-white p-5 shadow-inner">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                      <FileCode size={20} aria-hidden />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Fórmulas y Símbolos</p>
                      <p className="text-xs text-slate-500">LaTeX · Notas · Cálculo</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center font-mono text-sm text-slate-600">
                    {["∫", "∂", "∑", "π", "√", "θ", "λ", "∞"].map((symbol) => (
                      <span
                        key={symbol}
                        className="rounded-lg border border-slate-100 bg-slate-50 py-2 transition-colors hover:border-violet-200 hover:bg-violet-50"
                      >
                        {symbol}
                      </span>
                    ))}
                  </div>
                  <p className="rounded-lg bg-violet-50 px-3 py-2 font-mono text-xs text-violet-800">
                    d/dx [x² · sin(x)] → 2x·sin(x) + x²·cos(x)
                  </p>
                </div>
                <p className="mt-4 text-center text-xs text-slate-400">
                  Vista previa de la extensión
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 md:space-y-20 md:py-20 lg:px-8">
          <section aria-labelledby="extension-what-is-heading">
            <h2
              id="extension-what-is-heading"
              className="heading-font mb-4 text-2xl text-slate-900 md:text-3xl"
            >
              {intro.whatIsTitle}
            </h2>
            {intro.whatIsParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-4 text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {intro.whatIsBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-700"
                >
                  <span className="mt-0.5 text-violet-600" aria-hidden>
                    ✓
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="extension-features-heading">
            <h2
              id="extension-features-heading"
              className="heading-font mb-8 text-2xl text-slate-900 md:text-3xl"
            >
              Características Principales
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {EXTENSION_CROMO_FORMULAS_FEATURES.map((feature, i) => {
                const Icon = FEATURE_ICONS[i] ?? Copy;
                return (
                  <li
                    key={feature.title}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all hover:border-violet-200 hover:bg-white hover:shadow-sm"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                      <Icon size={22} aria-hidden />
                    </div>
                    <h3 className="mb-2 font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section aria-labelledby="extension-benefits-heading">
            <h2
              id="extension-benefits-heading"
              className="heading-font mb-8 text-2xl text-slate-900 md:text-3xl"
            >
              Beneficios
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {EXTENSION_CROMO_FORMULAS_BENEFITS.map((benefit, i) => {
                const Icon = BENEFIT_ICONS[i] ?? GraduationCap;
                return (
                  <article
                    key={benefit.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <Icon size={20} aria-hidden />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section aria-labelledby="extension-how-heading">
            <h2
              id="extension-how-heading"
              className="heading-font mb-8 text-2xl text-slate-900 md:text-3xl"
            >
              Cómo Utilizar la Extensión
            </h2>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {EXTENSION_CROMO_FORMULAS_STEPS.map((item) => (
                <li
                  key={item.step}
                  className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-6"
                >
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <h3 className="mb-2 font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 text-center">
              <a
                href={CHROME_EXTENSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-700 hover:underline"
              >
                Obtener Math Formula Helper en Chrome Web Store
                <ArrowRight size={16} aria-hidden />
              </a>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24" aria-labelledby="extension-faq-heading">
            <h2
              id="extension-faq-heading"
              className="heading-font mb-6 text-2xl text-slate-900 md:text-3xl"
            >
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {EXTENSION_CROMO_FORMULAS_FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-semibold text-slate-900">
                    {faq.q}
                    <span className="text-xl text-violet-500 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-4 leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="extension-internal-links-heading"
            className="border-t border-slate-200 pt-10"
          >
            <h2
              id="extension-internal-links-heading"
              className="heading-font mb-4 text-xl text-slate-900"
            >
              Recursos Relacionados
            </h2>
            <p className="mb-5 max-w-2xl text-sm text-slate-600">
              Combina la extensión con nuestras calculadoras gratuitas de derivadas para obtener
              soluciones paso a paso.
            </p>
            <ul className="flex flex-wrap gap-3">
              {EXTENSION_CROMO_FORMULAS_INTERNAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-violet-600 transition-colors hover:border-violet-300 hover:bg-violet-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-8 text-center md:p-10"
            aria-labelledby="extension-cta-heading"
          >
            <h2 id="extension-cta-heading" className="heading-font mb-3 text-2xl text-slate-900">
              Instala Math Formula Helper Hoy
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-slate-600">
              Extensión gratuita para símbolos matemáticos, fórmulas, LaTeX y recursos de derivadas.
            </p>
            <a
              href={CHROME_EXTENSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-violet-700"
            >
              <Puzzle size={18} aria-hidden />
              Instalar Extensión de Chrome
            </a>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
