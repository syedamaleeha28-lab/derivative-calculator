import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnglishCalculatorHero from "@/components/EnglishCalculatorHero";
import { dictEn } from "@/lib/dictionaries-en";
import { EN_HOME_FAQS } from "@/lib/en-pages";
import { EN_ROUTES } from "@/lib/en-routes";
import { buildEnHomeSchemaGraph } from "@/lib/en-schema";
import { buildPageMetadata } from "@/lib/seo";

const homeJsonLd = JSON.stringify(buildEnHomeSchemaGraph(EN_HOME_FAQS)).replace(/</g, "\\u003c");

export async function generateMetadata(): Promise<Metadata> {
  const t = dictEn.metadata.home;
  return buildPageMetadata({
    path: EN_ROUTES.home,
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    ogLocale: "en_US",
  });
}

const FEATURED_CALCULATORS = [
  {
    title: "Derivative Calculator",
    href: EN_ROUTES.derivativeCalculator,
    desc: "General-purpose differentiation with step-by-step solutions.",
  },
  {
    title: "Partial Derivative Calculator",
    href: EN_ROUTES.partialDerivativeCalculator,
    desc: "Multivariable functions and ∂f/∂x computations.",
  },
  {
    title: "Implicit Differentiation Calculator",
    href: EN_ROUTES.implicitDifferentiationCalculator,
    desc: "Find dy/dx without solving for y first.",
  },
  {
    title: "Chain Rule Calculator",
    href: EN_ROUTES.chainRuleCalculator,
    desc: "Composite functions and nested differentiation.",
  },
  {
    title: "Second Derivative Calculator",
    href: EN_ROUTES.secondDerivativeCalculator,
    desc: "Concavity, inflection points, and f″(x).",
  },
];

export default function EnglishHomePage() {
  const t = dictEn.hero;

  return (
    <>
      <Script
        id="en-homepage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: homeJsonLd }}
      />
      <main className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <EnglishCalculatorHero h1={t.h1} intro={t.desc} />

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <h2 className="heading-font text-2xl md:text-3xl text-slate-900 mb-3 text-center">
            Specialized derivative calculators
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore focused tools for partial derivatives, implicit differentiation, the chain rule,
            and second derivatives—each with unique examples and FAQs.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_CALCULATORS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex flex-col h-full rounded-2xl border border-slate-200 p-5 hover:border-violet-300 hover:shadow-md transition-all bg-white"
                >
                  <span className="font-bold text-slate-900">{item.title}</span>
                  <p className="text-sm text-slate-500 mt-2 flex-1">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center text-sm text-slate-500">
            Primary site in Spanish:{" "}
            <Link href="/" className="text-violet-600 font-medium hover:underline">
              calculadora-derivadas.org
            </Link>
            {" · "}
            <Link href="/blog" className="text-violet-600 font-medium hover:underline">
              Calculus blog (Spanish)
            </Link>
            {" · "}
            <Link href="/ejemplos" className="text-violet-600 font-medium hover:underline">
              View derivative examples
            </Link>
          </p>
        </section>

        <section id="faq" className="py-16 bg-slate-50 border-t border-slate-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="heading-font text-2xl md:text-3xl text-slate-900 mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {EN_HOME_FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white"
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
          </div>
        </section>

        <Footer locale="en" />

        <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-xl border-t border-slate-200/50 md:hidden z-40 pb-[max(1rem,env(safe-area-inset-bottom))]">
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
