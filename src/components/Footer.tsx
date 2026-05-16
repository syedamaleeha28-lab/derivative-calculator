"use client";

import { usePathname } from "next/navigation";
import LanguageLink from "@/components/LanguageLink";
import FacebookSocialLink from "@/components/FacebookSocialLink";
import { dictionaries } from "@/lib/dictionaries";
import { getLangFromPathname } from "@/lib/locale";

export default function Footer() {
  const pathname = usePathname() || "";
  const currentLang = getLangFromPathname(pathname);
  const t = dictionaries[currentLang].footer;

  return (
    <footer className="bg-white border-t border-slate-200 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-600">
        <nav className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <LanguageLink href="/politica-de-privacidad" className="hover:underline">
            {t.privacy}
          </LanguageLink>
          <LanguageLink href="/terminos-de-servicio" className="hover:underline">
            {t.terms}
          </LanguageLink>
        </nav>
        <FacebookSocialLink iconSize={20} className="border-0 bg-transparent hover:bg-transparent hover:border-0 p-0" />
      </div>
    </footer>
  );
}
