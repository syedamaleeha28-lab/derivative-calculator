"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { getAlternatePath, getLocaleFromPathname, LANG_OPTIONS } from "@/lib/locale";
import type { Locale } from "@/lib/locale";

type LocaleSwitcherVariant = "desktop" | "mobile" | "compact";

function CompactLocaleDropdown({
  pathname,
  currentLocale,
}: {
  pathname: string;
  currentLocale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const active = LANG_OPTIONS.find((lang) => lang.locale === currentLocale) ?? LANG_OPTIONS[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-9 min-w-[3.25rem] items-center justify-center gap-0.5 rounded-lg border border-slate-200/90 bg-white/95 px-2 text-[0.7rem] font-bold text-slate-700 shadow-sm transition-colors hover:border-violet-200 hover:bg-violet-50/60 active:scale-95"
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span aria-hidden className="text-[0.85rem] leading-none">
          {active.flag}
        </span>
        <span className="uppercase tracking-wide">{active.locale}</span>
        <ChevronDown
          size={12}
          className={`shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 top-[calc(100%+0.35rem)] z-[60] min-w-[9.5rem] overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
        >
          {LANG_OPTIONS.map((lang) => {
            const isActive = currentLocale === lang.locale;
            const href = getAlternatePath(pathname, lang.locale);

            return (
              <li key={lang.locale} role="option" aria-selected={isActive}>
                <Link
                  href={href}
                  hrefLang={lang.locale}
                  lang={lang.locale}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 text-[0.82rem] font-medium transition-colors ${
                    isActive
                      ? "bg-violet-50 text-violet-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-violet-600"
                  }`}
                >
                  <span aria-hidden>{lang.flag}</span>
                  <span>{lang.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function LocaleSwitcher({
  variant = "desktop",
}: {
  variant?: LocaleSwitcherVariant;
}) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  if (variant === "compact") {
    return <CompactLocaleDropdown pathname={pathname} currentLocale={currentLocale} />;
  }

  const baseClass =
    variant === "desktop"
      ? "inline-flex items-center rounded-lg border border-slate-200/90 bg-white/90 p-0.5 text-[0.72rem] sm:text-[0.75rem] font-semibold shadow-sm"
      : "inline-flex w-full items-center rounded-xl border border-slate-200 bg-slate-50 p-1 text-[0.8rem] font-semibold";

  return (
    <div className={baseClass} role="navigation" aria-label="Language switcher">
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
