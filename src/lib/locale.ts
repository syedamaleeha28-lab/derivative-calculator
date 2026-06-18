import { EN_ROUTES } from "./en-routes";
import { ES_AUTHORITY_ROUTES } from "./es-authority-routes";
import { ES_CALCULATOR_ROUTES } from "./es-routes";
import { ROUTES } from "./routes";
import {
  ES_COMMON_FUNCTION_ROUTES,
} from "./common-derivative-functions/routes";

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
  { es: ES_CALCULATOR_ROUTES.productRule, en: EN_ROUTES.productRuleCalculator },
  { es: ES_CALCULATOR_ROUTES.quotientRule, en: EN_ROUTES.quotientRuleCalculator },
  { es: ES_CALCULATOR_ROUTES.secondDerivative, en: EN_ROUTES.secondDerivativeCalculator },
  {
    es: ES_CALCULATOR_ROUTES.higherOrderDerivative,
    en: EN_ROUTES.higherOrderDerivativeCalculator,
  },
  { es: ES_CALCULATOR_ROUTES.tangentLine, en: EN_ROUTES.tangentLineCalculator },
  { es: ES_CALCULATOR_ROUTES.criticalPoints, en: EN_ROUTES.criticalPointsCalculator },
  { es: ES_AUTHORITY_ROUTES.formulasDeDerivadas, en: EN_ROUTES.derivativeFormulas },
  {
    es: ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas,
    en: EN_ROUTES.derivativePracticeProblems,
  },
  { es: ES_AUTHORITY_ROUTES.tablaDeDerivadas, en: EN_ROUTES.derivativeCheatSheet },
  { es: ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes, en: EN_ROUTES.commonDerivativeFunctions },
  { es: ES_COMMON_FUNCTION_ROUTES.derivadaDeX, en: EN_ROUTES.derivativeOfX },
  { es: ES_COMMON_FUNCTION_ROUTES.derivadaDeXCuadrado, en: EN_ROUTES.derivativeOfXSquared },
  { es: ES_COMMON_FUNCTION_ROUTES.derivadaDeXCubo, en: EN_ROUTES.derivativeOfXCubed },
  { es: ES_COMMON_FUNCTION_ROUTES.derivadaDeRaizCuadradaDeX, en: EN_ROUTES.derivativeOfSquareRootX },
  { es: ES_COMMON_FUNCTION_ROUTES.derivadaDeEElevadoAX, en: EN_ROUTES.derivativeOfEToTheX },
  { es: ES_COMMON_FUNCTION_ROUTES.derivadaDeLnX, en: EN_ROUTES.derivativeOfLnX },
  { es: ES_COMMON_FUNCTION_ROUTES.derivadaDeLogX, en: EN_ROUTES.derivativeOfLogX },
  { es: ES_COMMON_FUNCTION_ROUTES.derivadaDeSinX, en: EN_ROUTES.derivativeOfSinX },
  { es: ES_COMMON_FUNCTION_ROUTES.derivadaDeCosX, en: EN_ROUTES.derivativeOfCosX },
  { es: ES_COMMON_FUNCTION_ROUTES.derivadaDeTanX, en: EN_ROUTES.derivativeOfTanX },
  { es: "/blog/como-derivar-fracciones", en: EN_ROUTES.howToDifferentiateAFraction },
  { es: "/blog/derivadas-parciales-ejemplos", en: EN_ROUTES.partialDerivativeExamples },
  { es: "/blog/derivadas-implicitas-paso-a-paso", en: EN_ROUTES.implicitDifferentiationExamples },
  { es: ROUTES.reglas, en: EN_ROUTES.derivativeRules },
  { es: ROUTES.ejemplos, en: EN_ROUTES.derivativeExamples },
  { es: ROUTES.blog, en: EN_ROUTES.blog },
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
    "es-ES": esPath,
    "en-US": enPath,
    "x-default": esPath,
  };
}

export function isEnglishPath(path: string): boolean {
  return getLocaleFromPathname(path) === "en";
}
