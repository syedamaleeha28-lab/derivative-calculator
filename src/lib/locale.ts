import type { Lang } from "./dictionary-types";
import { localePath as seoLocalePath } from "./seo";

export const LOCALE_COOKIE = "locale";

/** Locale from URL path (`/en/...`, `/pt/...`, `/es/...`, or default Spanish). */
export function getLangFromPathname(pathname: string): Lang {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment === "en" || segment === "pt" || segment === "es") return segment;
  return "es";
}

/** Strip leading locale prefix from a pathname. */
export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|pt|es)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

/** Public URL for a locale + logical path (Spanish has no `/es` prefix). */
export function localePath(lang: Lang, path: string): string {
  return seoLocalePath(lang, path);
}

/** Persist locale preference (read by middleware on next request). */
export function setLocaleCookie(lang: Lang): void {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${lang};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
}

/** Navbar language badge — explicit codes; never use CSS uppercase on locale codes. */
export const LANG_BADGE: Record<Lang, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
};

export const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: "es", label: "Español (ES)" },
  { code: "en", label: "English (EN)" },
  { code: "pt", label: "Português (PT)" },
];
