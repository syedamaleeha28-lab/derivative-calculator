import Link from "next/link";
import katex from "katex";
import { FormulaCard, TipCard, ExampleCard } from "@/components/EducationalArticle";
import { ES_CALCULATOR_ROUTES } from "../es-routes";
import { EN_ROUTES } from "../en-routes";
import { ES_MAIN_CALCULATOR_HREF, ROUTES } from "../routes";
import { ES_STANDARD_CALCULATOR_LINKS } from "../calculator-pages/standard-links";
import { EN_STANDARD_CALCULATOR_LINKS } from "../en-internal-links";
import { EN_MAIN_CALCULATOR_HREF } from "../en-routes";
import {
  ES_COMMON_FUNCTIONS_HUB,
  EN_COMMON_FUNCTIONS_HUB,
} from "./routes";
import type { CommonFunctionLocaleContent, CommonFunctionPageDef } from "./types";
import { getCommonFunctionDefById } from "./definitions";

export function renderMath(tex: string, display = false) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(tex, { throwOnError: false, displayMode: display }),
      }}
    />
  );
}

export function esCommonFunctionBreadcrumbs(route: string, label: string) {
  return [
    { label: "Inicio", href: ROUTES.home },
    { label: "Derivadas de funciones comunes", href: ES_COMMON_FUNCTIONS_HUB },
    { label, href: route },
  ] as const;
}

export function enCommonFunctionBreadcrumbs(slug: string, label: string) {
  return [
    { label: "Home", href: EN_ROUTES.home },
    { label: "Common derivative functions", href: EN_COMMON_FUNCTIONS_HUB },
    { label, href: `/en/${slug}` },
  ] as const;
}

export function esHubBreadcrumbs() {
  return [
    { label: "Inicio", href: ROUTES.home },
    { label: "Derivadas de funciones comunes", href: ES_COMMON_FUNCTIONS_HUB },
  ] as const;
}

export function enHubBreadcrumbs() {
  return [
    { label: "Home", href: EN_ROUTES.home },
    { label: "Common derivative functions", href: EN_COMMON_FUNCTIONS_HUB },
  ] as const;
}

function hubLinksForDef(def: CommonFunctionPageDef, locale: "es" | "en") {
  return def.relatedIds
    .map((id) => getCommonFunctionDefById(id))
    .filter((d): d is CommonFunctionPageDef => Boolean(d))
    .map((d) => ({
      href: locale === "es" ? d.esRoute : `/en/${d.enSlug}`,
      label: locale === "es" ? d.es.breadcrumbLabel : d.en.breadcrumbLabel,
    }));
}

export function HubBackLink({ locale }: { locale: "es" | "en" }) {
  const href = locale === "es" ? ES_COMMON_FUNCTIONS_HUB : EN_COMMON_FUNCTIONS_HUB;
  const label =
    locale === "es"
      ? "← Volver al hub de derivadas de funciones comunes"
      : "← Back to common derivative functions hub";
  return (
    <p className="mb-6">
      <Link href={href} className="text-violet-600 font-semibold hover:underline">
        {label}
      </Link>
    </p>
  );
}

export function RelatedFunctionLinks({
  def,
  locale,
}: {
  def: CommonFunctionPageDef;
  locale: "es" | "en";
}) {
  const links = hubLinksForDef(def, locale);
  if (links.length === 0) return null;
  const heading = locale === "es" ? "Funciones relacionadas" : "Related functions";
  return (
    <nav className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6" aria-label={heading}>
      <h3 className="text-lg font-bold text-slate-900 mb-4">{heading}</h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-xl bg-white border border-slate-100 px-4 py-3 hover:border-violet-300 hover:shadow-sm transition-all font-semibold text-violet-600 text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function CalculatorLinksBlock({ locale }: { locale: "es" | "en" }) {
  const links =
    locale === "es"
      ? ES_STANDARD_CALCULATOR_LINKS.slice(0, 4)
      : EN_STANDARD_CALCULATOR_LINKS.slice(0, 4);
  const heading = locale === "es" ? "Calculadoras relacionadas" : "Related calculators";
  const intro =
    locale === "es"
      ? "Verifica tus derivadas con herramientas gratuitas que muestran cada paso."
      : "Check your work with free step-by-step calculator tools.";
  return (
    <section className="my-12" aria-labelledby="calc-links-heading">
      <h2 id="calc-links-heading" className="text-2xl font-bold text-slate-900 mb-4">
        {heading}
      </h2>
      <p className="text-slate-600 mb-6 leading-relaxed">{intro}</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-xl bg-white border border-slate-200 px-4 py-3 hover:border-violet-300 hover:shadow-sm transition-all"
            >
              <span className="font-semibold text-violet-600 text-sm">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        <Link
          href={locale === "es" ? ES_MAIN_CALCULATOR_HREF : EN_MAIN_CALCULATOR_HREF}
          className="text-violet-600 font-semibold hover:underline"
        >
          {locale === "es" ? "Calculadora principal de derivadas →" : "Main derivative calculator →"}
        </Link>
      </p>
    </section>
  );
}

export function ChainRuleTip({ locale }: { locale: "es" | "en" }) {
  const href = locale === "es" ? ES_CALCULATOR_ROUTES.chainRule : EN_ROUTES.chainRuleCalculator;
  const text =
    locale === "es"
      ? "Para composiciones f(g(x)), repasa la regla de la cadena en nuestra calculadora especializada."
      : "For compositions f(g(x)), practice the chain rule with our dedicated calculator.";
  return (
    <TipCard>
      {text}{" "}
      <Link href={href} className="font-semibold text-violet-600 hover:underline">
        {locale === "es" ? "Calculadora de regla de la cadena" : "Chain rule calculator"}
      </Link>
    </TipCard>
  );
}

export function FunctionPageBody({
  content,
  def,
  locale,
}: {
  content: CommonFunctionLocaleContent;
  def: CommonFunctionPageDef;
  locale: "es" | "en";
}) {
  return (
    <>
      <HubBackLink locale={locale} />
      <section>
        <h2 id="intro">{locale === "es" ? "Introducción" : "Introduction"}</h2>
        <p>{content.intro}</p>
      </section>

      <section>
        <h2 id="formula">{locale === "es" ? "Fórmula y explicación" : "Formula and explanation"}</h2>
        <FormulaCard title={content.formulaTitle}>{renderMath(content.formulaLatex, true)}</FormulaCard>
        <p className="mt-4">{content.formulaExplanation}</p>
        <ChainRuleTip locale={locale} />
      </section>

      <section>
        <h2 id="ejemplo">{locale === "es" ? "Ejemplo paso a paso" : "Step-by-step example"}</h2>
        <ExampleCard title={content.exampleTitle} steps={[...content.exampleSteps]}>
          {content.exampleLatex ? renderMath(content.exampleLatex, true) : null}
        </ExampleCard>
      </section>

      {content.extraSectionTitle && content.extraSectionBody && (
        <section>
          <h2 id="extra">{content.extraSectionTitle}</h2>
          <p>{content.extraSectionBody}</p>
        </section>
      )}

      <CalculatorLinksBlock locale={locale} />
      <RelatedFunctionLinks def={def} locale={locale} />
    </>
  );
}

export function DerivativeTable({ locale }: { locale: "es" | "en" }) {
  const es = locale === "es";
  const thFunc = es ? "Función f(x)" : "Function f(x)";
  const thDeriv = es ? "Derivada f′(x)" : "Derivative f′(x)";

  const Table = ({
    title,
    rows,
  }: {
    title: string;
    rows: [string, string][];
  }) => (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-slate-50">
              <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">{thFunc}</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">{thDeriv}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([f, d]) => (
              <tr key={f}>
                <td className="border border-slate-200 px-4 py-3 font-mono text-slate-800">{f}</td>
                <td className="border border-slate-200 px-4 py-3 font-mono text-slate-800">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  return (
    <>
      <Table
        title={es ? "Funciones algebraicas" : "Algebraic functions"}
        rows={[
          ["c (constante)", "0"],
          ["x", "1"],
          ["x²", "2x"],
          ["x³", "3x²"],
          ["xⁿ", "n xⁿ⁻¹"],
          ["√x", "1/(2√x)"],
          ["1/x", "−1/x²"],
        ]}
      />
      <Table
        title={es ? "Funciones trigonométricas" : "Trigonometric functions"}
        rows={[
          ["sin x", "cos x"],
          ["cos x", "−sin x"],
          ["tan x", "sec² x"],
          ["cot x", "−csc² x"],
          ["sec x", "sec x tan x"],
          ["csc x", "−csc x cot x"],
        ]}
      />
      <Table
        title={es ? "Funciones logarítmicas" : "Logarithmic functions"}
        rows={[
          ["ln x", "1/x"],
          ["log₁₀ x", "1/(x ln 10)"],
          ["log_a x", "1/(x ln a)"],
        ]}
      />
      <Table
        title={es ? "Funciones exponenciales" : "Exponential functions"}
        rows={[
          ["eˣ", "eˣ"],
          ["aˣ", "aˣ ln a"],
        ]}
      />
      <Table
        title={es ? "Funciones trigonométricas inversas" : "Inverse trigonometric functions"}
        rows={[
          ["arcsin x", "1/√(1−x²)"],
          ["arccos x", "−1/√(1−x²)"],
          ["arctan x", "1/(1+x²)"],
          ["arccot x", "−1/(1+x²)"],
          ["arcsec x", "1/(|x|√(x²−1))"],
          ["arccsc x", "−1/(|x|√(x²−1))"],
        ]}
      />
    </>
  );
}
