import type { Lang } from "./dictionary-types";

export const LOCALIZED_ROUTES: Record<string, Record<Lang, string>> = {
  "/rules": {
    en: "/rules",
    es: "/reglas",
    pt: "/regras",
  },
  "/examples": {
    en: "/examples",
    es: "/ejemplos",
    pt: "/exemplos",
  },
  "/how-it-works": {
    en: "/how-it-works",
    es: "/como-funciona",
    pt: "/como-funciona",
  },
};

/** Get the localized path for a given internal path and language */
export function getLocalizedPath(internalPath: string, lang: Lang): string {
  // Check exact match first
  if (LOCALIZED_ROUTES[internalPath]) {
    return LOCALIZED_ROUTES[internalPath][lang];
  }
  
  // Check prefix match (e.g. /rules/regla-de-la-potencia)
  for (const [internal, locales] of Object.entries(LOCALIZED_ROUTES)) {
    if (internalPath.startsWith(internal + "/")) {
      const remainder = internalPath.slice(internal.length);
      return locales[lang] + remainder;
    }
  }
  
  return internalPath;
}

/** Get the internal path for a given localized path and language */
export function getInternalPath(localizedPath: string, lang: Lang): string {
  // Check exact match
  for (const [internal, locales] of Object.entries(LOCALIZED_ROUTES)) {
    if (locales[lang] === localizedPath) {
      return internal;
    }
  }
  
  // Check prefix match
  for (const [internal, locales] of Object.entries(LOCALIZED_ROUTES)) {
    const locPrefix = locales[lang] + "/";
    if (localizedPath.startsWith(locPrefix)) {
      const remainder = localizedPath.slice(locPrefix.length - 1);
      return internal + remainder;
    }
  }
  
  return localizedPath;
}

/** Check if a given path is an old or mismatched localized path and return the correct one */
export function getCorrectLocalizedPath(path: string, currentLang: Lang): string | null {
  // Check if it's already a correct localized path (exact or prefix)
  let isCorrect = false;
  for (const [internal, locales] of Object.entries(LOCALIZED_ROUTES)) {
    if (locales[currentLang] === path || path.startsWith(locales[currentLang] + "/")) {
      isCorrect = true;
      break;
    }
  }
  if (isCorrect) return null;

  // Check if it's an internal path or a path from another language
  for (const [internal, locales] of Object.entries(LOCALIZED_ROUTES)) {
    if (path === internal) {
      return locales[currentLang];
    }
    if (path.startsWith(internal + "/")) {
      const remainder = path.slice(internal.length);
      return locales[currentLang] + remainder;
    }
    
    for (const [l, locPath] of Object.entries(locales)) {
      if (path === locPath) {
        return locales[currentLang];
      }
      if (path.startsWith(locPath + "/")) {
        const remainder = path.slice(locPath.length);
        return locales[currentLang] + remainder;
      }
    }
  }

  return null;
}


