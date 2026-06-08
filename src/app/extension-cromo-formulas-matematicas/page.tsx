import type { Metadata } from "next";
import ExtensionCromoFormulasPage from "@/components/ExtensionCromoFormulasPage";
import {
  EXTENSION_CROMO_FORMULAS_METADATA,
  EXTENSION_CROMO_FORMULAS_PATH,
} from "@/lib/extension-cromo-formulas";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: EXTENSION_CROMO_FORMULAS_PATH,
    title: EXTENSION_CROMO_FORMULAS_METADATA.title,
    description: EXTENSION_CROMO_FORMULAS_METADATA.description,
    keywords: EXTENSION_CROMO_FORMULAS_METADATA.keywords,
    ogLocale: "es_ES",
    hreflang: false,
  });
}

export default function Page() {
  return <ExtensionCromoFormulasPage />;
}
