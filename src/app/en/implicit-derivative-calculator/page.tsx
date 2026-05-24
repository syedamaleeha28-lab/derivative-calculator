import type { Metadata } from "next";
import EnglishCalculatorPage from "@/components/EnglishCalculatorPage";
import { EN_CALCULATOR_PAGES } from "@/lib/en-pages";
import { buildEnPageMetadata } from "@/lib/en-metadata";

const page = EN_CALCULATOR_PAGES.implicitDerivativeCalculator;

export async function generateMetadata(): Promise<Metadata> {
  return buildEnPageMetadata(page);
}

export default function ImplicitDerivativeCalculatorPage() {
  return <EnglishCalculatorPage page={page} />;
}
