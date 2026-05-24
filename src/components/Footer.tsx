"use client";

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { dict } from "@/lib/dictionaries";
import { dictEn } from "@/lib/dictionaries-en";
import { FOOTER_LEGAL_PAGES, getLegalPath } from "@/lib/legal-routes";
import type { Locale } from "@/lib/locale";

const FOOTER_LABEL_KEY = {
  privacy: "privacy",
  terms: "terms",
  disclaimer: "disclaimer",
  about: "about",
  contact: "contact",
} as const;

type FooterProps = {
  locale?: Locale;
};

export default function Footer({ locale = "es" }: FooterProps) {
  const t = locale === "en" ? dictEn.footer : dict.footer;

  return (
    <footer className="border-t border-slate-200 bg-white py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <nav aria-label={t.legal} className="flex min-w-0 flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.legal}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
              {FOOTER_LEGAL_PAGES.map((pageId) => (
                <li key={pageId}>
                  <Link
                    href={getLegalPath(pageId)}
                    className="transition-colors hover:text-violet-600 hover:underline"
                  >
                    {t[FOOTER_LABEL_KEY[pageId]]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3 sm:items-end">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.social}</p>
            <SocialLinks iconSize={18} className="sm:justify-end" ariaLabel={t.social} />
          </div>
        </div>
      </div>
    </footer>
  );
}
