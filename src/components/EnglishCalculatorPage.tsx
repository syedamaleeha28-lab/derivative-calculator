import CalculatorLandingPage from "@/components/CalculatorLandingPage";
import type { EnCalculatorPageConfig } from "@/lib/en-pages";

type Props = {
  page: EnCalculatorPageConfig;
};

/** @deprecated Use CalculatorLandingPage with locale="en" directly. */
export default function EnglishCalculatorPage({ page }: Props) {
  return <CalculatorLandingPage locale="en" page={page} />;
}
