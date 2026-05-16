"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Lang } from "@/lib/dictionary-types";
import {
  LANG_BADGE,
  LANG_OPTIONS,
  localePath,
  setLocaleCookie,
  stripLocalePrefix,
} from "@/lib/locale";
import { useLang } from "@/contexts/I18nContext";

type LocaleSwitcherProps = {
  variant?: "dropdown" | "grid";
  onNavigate?: () => void;
};

export function LocaleSwitcher({ variant = "dropdown", onNavigate }: LocaleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname() || "";
  const { lang: currentLang } = useLang();

  const switchLocale = (target: Lang) => {
    if (target === currentLang) return;
    setLocaleCookie(target);
    const logicalPath = stripLocalePrefix(pathname);
    router.push(localePath(target, logicalPath));
    onNavigate?.();
  };

  if (variant === "grid") {
    return (
      <div className="grid grid-cols-3 gap-2">
        {LANG_OPTIONS.map((opt) => (
          <button
            key={opt.code}
            type="button"
            onClick={() => switchLocale(opt.code)}
            className={`lang-badge rounded-lg py-2 text-sm transition-colors ${
              currentLang === opt.code
                ? "bg-slate-100 font-semibold text-primary"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            {LANG_BADGE[opt.code]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <>
      {LANG_OPTIONS.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => switchLocale(opt.code)}
          className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
            currentLang === opt.code
              ? "bg-slate-100 font-medium text-primary"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </>
  );
}
