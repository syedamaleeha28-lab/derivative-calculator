import type { Lang } from "./dictionary-types";

/** Locale from URL path (`/en/...`, `/pt/...`, or default Spanish). */
export function getLangFromPathname(pathname: string): Lang {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment === "en" || segment === "pt") return segment;
  return "es";
}

/** Navbar language badge — explicit codes avoid ambiguous uppercase rendering. */
export const LANG_BADGE: Record<Lang, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
};
