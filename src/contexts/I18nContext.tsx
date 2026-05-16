"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import type { Lang } from "@/lib/dictionary-types";
import type { TranslationDictionary } from "@/lib/dictionaries";
import { getLangFromPathname } from "@/lib/locale";

type I18nContextValue = {
  lang: Lang;
  dict: TranslationDictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  lang: serverLang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  const pathname = usePathname() || "";
  const pathLang = getLangFromPathname(pathname);
  const lang = pathLang;

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      dict: dictionaries[lang],
    }),
    [lang]
  );

  // serverLang keeps SSR html[lang] in sync; pathLang drives client UI after navigation
  void serverLang;

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useLang(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useLang must be used within I18nProvider");
  }
  return ctx;
}
