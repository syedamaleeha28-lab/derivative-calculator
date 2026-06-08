import type { Metadata } from "next";
import MathFormulaHelperExtensionPage from "@/components/MathFormulaHelperExtensionPage";
import {
  MATH_FORMULA_HELPER_EXTENSION_PATH,
  MATH_FORMULA_HELPER_METADATA,
} from "@/lib/math-formula-helper-extension";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: MATH_FORMULA_HELPER_EXTENSION_PATH,
    title: MATH_FORMULA_HELPER_METADATA.title,
    description: MATH_FORMULA_HELPER_METADATA.description,
    keywords: MATH_FORMULA_HELPER_METADATA.keywords,
    ogLocale: "en_US",
    hreflang: false,
  });
}

export default function Page() {
  return <MathFormulaHelperExtensionPage />;
}
