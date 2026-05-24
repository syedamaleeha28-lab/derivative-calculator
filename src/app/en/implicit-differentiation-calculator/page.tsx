import type { Metadata } from "next";
import CalculatorLandingPage from "@/components/CalculatorLandingPage";
import { EN_CALCULATOR_PAGES } from "@/lib/en-pages";
import { buildCalculatorPageMetadata } from "@/lib/calculator-pages/metadata";

const page = EN_CALCULATOR_PAGES.implicitDifferentiationCalculator;

export async function generateMetadata(): Promise<Metadata> {
  return buildCalculatorPageMetadata(page, "en");
}

export default function ImplicitDifferentiationCalculatorPage() {
  return <CalculatorLandingPage locale="en" page={page} />;
}
