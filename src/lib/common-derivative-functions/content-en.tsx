import Link from "next/link";
import { ArticleWrap, CalcCTA } from "@/lib/en-articles/helpers";
import { EN_ROUTES } from "@/lib/en-routes";
import { COMMON_FUNCTION_PAGE_DEFS } from "./definitions";
import { DerivativeTable, FunctionPageBody } from "./helpers";
import type { CommonFunctionPageDef } from "./types";

export function createEnFunctionContent(def: CommonFunctionPageDef) {
  return function EnFunctionContent() {
    return (
      <ArticleWrap>
        <FunctionPageBody content={def.en} def={def} locale="en" />
        <CalcCTA />
      </ArticleWrap>
    );
  };
}

export function CommonFunctionsHubContentEn() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="overview">Common derivative functions hub</h2>
        <p>
          This central hub collects the derivatives students look up most often: powers of x, roots,
          exponentials, logarithms, and trigonometry. Each function has a dedicated page with the formula,
          a step-by-step example, and links to our{" "}
          <Link href="/en#calculator" className="text-violet-600 font-semibold hover:underline">
            derivative calculator
          </Link>
          .
        </p>
        <p>
          Explore the wider cluster:{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>
          ,{" "}
          <Link href={EN_ROUTES.derivativeCheatSheet} className="text-violet-600 font-semibold hover:underline">
            derivative cheat sheet
          </Link>
          , and{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            worked examples
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="index">Guides by function</h2>
        <ul className="grid gap-3 sm:grid-cols-2 my-6">
          {COMMON_FUNCTION_PAGE_DEFS.map((d) => (
            <li key={d.id}>
              <Link
                href={`/en/${d.enSlug}`}
                className="block rounded-xl border border-slate-200 bg-white px-4 py-3 hover:border-violet-300 hover:shadow-sm transition-all"
              >
                <span className="font-semibold text-violet-600">{d.en.breadcrumbLabel}</span>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{d.en.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <DerivativeTable locale="en" />
      <CalcCTA />
    </ArticleWrap>
  );
}
