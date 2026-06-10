import type { Metadata } from "next";
import { buildPageMetadata } from "../seo";
import type { CalculatorPageConfig } from "./types";
import type { Locale } from "../locale";

export function buildCalculatorPageMetadata(
  page: CalculatorPageConfig,
  locale: Locale
): Metadata {
  return buildPageMetadata({
    path: page.path,
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords,
    ogLocale: locale === "es" ? "es_ES" : "en_US",
    absoluteTitle: true,
  });
}
