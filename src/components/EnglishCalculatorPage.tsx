import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnglishCalculatorHero from "@/components/EnglishCalculatorHero";
import type { EnCalculatorPageConfig } from "@/lib/en-pages";
import { buildEnCalculatorPageSchema } from "@/lib/en-schema";

type Props = {
  page: EnCalculatorPageConfig;
};

export default function EnglishCalculatorPage({ page }: Props) {
  const jsonLd = JSON.stringify(buildEnCalculatorPageSchema(page)).replace(/</g, "\\u003c");

  return (
    <>
      <Script
        id={`jsonld-${page.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <main className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <EnglishCalculatorHero
          h1={page.h1}
          intro={page.intro[0]}
          defaultExamples={page.defaultExamples}
          initialVariable={page.defaultVariable}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-14">
          {page.intro.slice(1).map((paragraph, i) => (
            <p key={i} className="text-slate-600 text-[1.05rem] leading-relaxed">
              {paragraph}
            </p>
          ))}

          {page.educationalSections.map((section) => (
            <section key={section.h2} aria-labelledby={section.h2.replace(/\s+/g, "-").toLowerCase()}>
              <h2
                id={section.h2.replace(/\s+/g, "-").toLowerCase()}
                className="heading-font text-2xl md:text-3xl text-slate-900 mb-4"
              >
                {section.h2}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section aria-labelledby="worked-examples-heading">
            <h2
              id="worked-examples-heading"
              className="heading-font text-2xl md:text-3xl text-slate-900 mb-6"
            >
              Step-by-step examples
            </h2>
            <div className="space-y-6">
              {page.examples.map((ex) => (
                <article
                  key={ex.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 md:p-8"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{ex.title}</h3>
                  <p className="font-mono text-sm text-violet-700 bg-white border border-violet-100 rounded-lg px-4 py-3 mb-4">
                    {ex.problem}
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-600 text-[0.95rem] mb-4">
                    {ex.steps.map((step, i) => (
                      <li key={i} className="leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ol>
                  <p className="text-sm font-semibold text-slate-800">
                    Result: <span className="font-mono text-violet-700">{ex.result}</span>
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="related-calculators-heading">
            <h2
              id="related-calculators-heading"
              className="heading-font text-2xl md:text-3xl text-slate-900 mb-6"
            >
              Related calculators
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.relatedCalculators.map((calc) => (
                <li key={calc.href}>
                  <Link
                    href={calc.href}
                    className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-5 hover:border-violet-300 hover:shadow-md transition-all"
                  >
                    <span className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                      {calc.label}
                    </span>
                    <p className="text-sm text-slate-500 mt-2 flex-1">{calc.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[0.8rem] font-bold text-violet-600">
                      Open <ArrowRight size={14} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="faq"
            className="scroll-mt-24"
            aria-labelledby="page-faq-heading"
          >
            <h2
              id="page-faq-heading"
              className="heading-font text-2xl md:text-3xl text-slate-900 mb-6"
            >
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white open:shadow-sm"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-slate-900 flex justify-between items-center">
                    {faq.q}
                    <span className="text-violet-500 text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-4 text-slate-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="internal-links-heading" className="border-t border-slate-200 pt-10">
            <h2
              id="internal-links-heading"
              className="heading-font text-xl text-slate-900 mb-4"
            >
              Explore more resources
            </h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {page.internalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-violet-600 font-medium hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <Footer locale="en" />

        <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-xl border-t border-slate-200/50 md:hidden z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a
            href="#calculator"
            className="w-full bg-[#0f172a] text-white py-3.5 rounded-[14px] text-[0.9rem] font-black uppercase tracking-[0.05em] shadow-xl flex justify-center items-center gap-2"
          >
            <Calculator size={16} />
            Calculate Now
          </a>
        </div>
      </main>
    </>
  );
}
