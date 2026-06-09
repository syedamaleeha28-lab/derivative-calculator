import type { Metadata } from "next";
import CalculatorLandingPage from "@/components/CalculatorLandingPage";
import { ES_CALCULATOR_PAGES } from "@/lib/es-pages";
import { buildCalculatorPageMetadata } from "@/lib/calculator-pages/metadata";

const page = ES_CALCULATOR_PAGES.quotientRule;

export async function generateMetadata(): Promise<Metadata> {
  return buildCalculatorPageMetadata(page, "es");
}

export default function CalculadoraReglaCocientePage() {
  return <CalculatorLandingPage locale="es" page={page} />;
}
