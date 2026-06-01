import Link from "next/link";
import katex from "katex";
import { FormulaCard, TipCard, WarningCard, ExampleCard } from "@/components/EducationalArticle";
import { EN_MAIN_CALCULATOR_HREF, EN_ROUTES } from "../en-routes";
import {
  EN_EXAMPLES_HUB_LINKS,
  EN_RULES_HUB_LINKS,
  EN_STANDARD_CALCULATOR_LINKS,
} from "../en-internal-links";

export function renderMath(tex: string, display = false) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(tex, { throwOnError: false, displayMode: display }),
      }}
    />
  );
}

export function enArticleBreadcrumbs(slug: string, label: string) {
  return [
    { label: "Home", href: EN_ROUTES.home },
    { label: "Guides", href: EN_ROUTES.derivativeRules },
    { label, href: `/en/${slug}` },
  ] as const;
}

export function InternalLinksBlock({
  links,
  heading = "Continue learning",
}: {
  links: readonly { href: string; label: string; desc?: string }[];
  heading?: string;
}) {
  return (
    <nav className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6" aria-label="Related guides">
      <h3 className="text-lg font-bold text-slate-900 mb-4">{heading}</h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-xl bg-white border border-slate-100 px-4 py-3 hover:border-violet-300 hover:shadow-sm transition-all"
            >
              <span className="font-semibold text-violet-600 text-sm">{link.label}</span>
              {link.desc && <p className="text-xs text-slate-500 mt-1 leading-relaxed">{link.desc}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function RelatedCalculatorsBlock() {
  return (
    <section className="my-12" aria-labelledby="related-calculators-heading">
      <h2 id="related-calculators-heading" className="text-2xl font-bold text-slate-900 mb-4">
        Related calculators
      </h2>
      <p className="text-slate-600 mb-6 leading-relaxed">
        Use these free tools to verify your work. Each calculator shows symbolic steps so you can match your
        handwritten procedure to the correct rule at every stage.
      </p>
      <InternalLinksBlock links={EN_STANDARD_CALCULATOR_LINKS} heading="Try a calculator" />
    </section>
  );
}

export function CalcCTA() {
  return (
    <div className="my-10 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-6 sm:p-8">
      <h3 className="text-lg font-bold text-slate-900 mb-2">Need to solve your own derivative?</h3>
      <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-4">
        Use our free{" "}
        <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
          derivative calculator with steps
        </Link>{" "}
        on the homepage—enter any expression, pick your variable, and compare your work to the full
        symbolic solution.
      </p>
      <Link
        href={EN_MAIN_CALCULATOR_HREF}
        className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-violet-700 transition-colors"
      >
        Open Derivative Calculator
      </Link>
    </div>
  );
}

export function ArticleWrap({ children }: { children: React.ReactNode }) {
  return <div className="space-y-12 text-slate-600 leading-relaxed">{children}</div>;
}

export function RulesLinksBlock() {
  return <InternalLinksBlock links={EN_RULES_HUB_LINKS} heading="Derivative rules & special functions" />;
}

export function ExamplesLinksBlock() {
  return <InternalLinksBlock links={EN_EXAMPLES_HUB_LINKS} heading="More derivative examples" />;
}

export {
  FormulaCard,
  TipCard,
  WarningCard,
  ExampleCard,
  Link,
  EN_ROUTES,
  EN_MAIN_CALCULATOR_HREF,
  EN_STANDARD_CALCULATOR_LINKS,
};
