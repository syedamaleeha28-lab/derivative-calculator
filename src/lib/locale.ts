import { EN_ROUTES } from "./en-routes";
import { ES_CALCULATOR_ROUTES } from "./es-routes";
import { ROUTES } from "./routes";

export type Locale = "es" | "en";

export const DEFAULT_LOCALE: Locale = "es";
export const ENGLISH_PREFIX = "/en";

export const LANG_OPTIONS = [
  { locale: "es" as const, label: "Español", flag: "🇪🇸", href: "/" },
  { locale: "en" as const, label: "English", flag: "🇺🇸", href: EN_ROUTES.home },
] as const;

/** Paired routes for hreflang and language switching. */
export const LOCALE_ROUTE_PAIRS: { es: string; en: string }[] = [
  { es: ROUTES.home, en: EN_ROUTES.home },
  { es: ROUTES.home, en: EN_ROUTES.derivativeCalculator },
  {
    es: ES_CALCULATOR_ROUTES.partialDerivatives,
    en: EN_ROUTES.partialDerivativeCalculator,
  },
  {
    es: ES_CALCULATOR_ROUTES.chainRule,
    en: EN_ROUTES.chainRuleCalculator,
  },
  {
    es: ES_CALCULATOR_ROUTES.implicitDerivatives,
    en: EN_ROUTES.implicitDifferentiationCalculator,
  },
];

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const trimmed = path.replace(/\/+$/, "") || "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === ENGLISH_PREFIX || pathname.startsWith(`${ENGLISH_PREFIX}/`)
    ? "en"
    : "es";
}

export function getAlternatePath(path: string, targetLocale: Locale): string {
  const normalized = normalizePath(path);

  if (targetLocale === "en") {
    const pair = LOCALE_ROUTE_PAIRS.find((p) => normalizePath(p.es) === normalized);
    if (pair) return pair.en;
    if (normalized.startsWith(ENGLISH_PREFIX)) return normalized;
    return EN_ROUTES.home;
  }

  const pair = LOCALE_ROUTE_PAIRS.find((p) => normalizePath(p.en) === normalized);
  if (pair) return pair.es;
  if (normalized.startsWith(ENGLISH_PREFIX)) return ROUTES.home;
  return normalized;
}

export function getHreflangAlternates(path: string): Record<string, string> {
  const normalized = normalizePath(path);
  const locale = getLocaleFromPathname(normalized);
  const esPath =
    locale === "es" ? normalized : getAlternatePath(normalized, "es");
  const enPath =
    locale === "en" ? normalized : getAlternatePath(normalized, "en");

  return {
    es: esPath,
    en: enPath,
    "x-default": esPath,
  };
}

export function isEnglishPath(path: string): boolean {
  return getLocaleFromPathname(path) === "en";
}
