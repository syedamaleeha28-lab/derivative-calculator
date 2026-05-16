"use client";

import LanguageLink from "@/components/LanguageLink";
import FacebookSocialLink from "@/components/FacebookSocialLink";
import { useLang } from "@/contexts/I18nContext";
import { FOOTER_LEGAL_PAGES, getLegalPath } from "@/lib/legal-routes";

const FOOTER_LABEL_KEY = {
  privacy: "privacy",
  terms: "terms",
  disclaimer: "disclaimer",
  about: "about",
  contact: "contact",
} as const;

export default function Footer() {
  const { lang, dict } = useLang();
  const t = dict.footer;

  return (
    <footer className="bg-white border-t border-slate-200 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <nav aria-label={t.legal} className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.legal}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
              {FOOTER_LEGAL_PAGES.map((pageId) => (
                <li key={pageId}>
                  <LanguageLink
                    href={getLegalPath(pageId, lang)}
                    className="hover:text-secondary hover:underline transition-colors"
                  >
                    {t[FOOTER_LABEL_KEY[pageId]]}
                  </LanguageLink>
                </li>
              ))}
            </ul>
          </nav>
          <FacebookSocialLink
            iconSize={20}
            className="shrink-0 border-0 bg-transparent hover:bg-transparent hover:border-0 p-0 self-start md:self-center"
          />
        </div>
      </div>
    </footer>
  );
}
