import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import type { EnCalculatorPageConfig } from "./en-pages";

export function buildEnPageMetadata(page: EnCalculatorPageConfig): Metadata {
  return buildPageMetadata({
    path: page.path,
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords,
    ogLocale: "en_US",
  });
}
