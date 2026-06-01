import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { dictEn } from "@/lib/dictionaries-en";
import { EN_ROUTES } from "@/lib/en-routes";
import { buildPageMetadata } from "@/lib/seo";

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

/** Legacy URL — main calculator lives on /en (homepage). */
export default function DerivativeCalculatorRedirectPage() {
  permanentRedirect(EN_ROUTES.home);
}
