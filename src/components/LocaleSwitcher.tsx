"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternatePath, getLocaleFromPathname, LANG_OPTIONS } from "@/lib/locale";

export default function LocaleSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  const baseClass =
    variant === "desktop"
      ? "inline-flex items-center rounded-lg border border-slate-200/90 bg-white/90 p-0.5 text-[0.72rem] sm:text-[0.75rem] font-semibold shadow-sm"
      : "inline-flex w-full items-center rounded-xl border border-slate-200 bg-slate-50 p-1 text-[0.8rem] font-semibold";

  return (
    <div
      className={baseClass}
      role="navigation"
      aria-label="Language switcher"
    >
      {LANG_OPTIONS.map((lang) => {
        const isActive = currentLocale === lang.locale;
        const href = getAlternatePath(pathname, lang.locale);

        return (
          <Link
            key={lang.locale}
            href={href}
            className={`flex items-center gap-1 rounded-md px-2 py-1.5 transition-colors whitespace-nowrap ${
              isActive
                ? "bg-violet-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-violet-50 hover:text-violet-700"
            } ${variant === "mobile" ? "flex-1 justify-center" : ""}`}
            hrefLang={lang.locale}
            lang={lang.locale}
            aria-current={isActive ? "true" : undefined}
          >
            <span aria-hidden>{lang.flag}</span>
            <span>{lang.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
