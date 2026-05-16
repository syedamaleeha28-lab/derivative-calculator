"use client";

import Link from "@/components/LanguageLink";
import { usePathname } from "next/navigation";
import { BrandLogoLink } from "./BrandLogo";
import FacebookSocialLink from "./FacebookSocialLink";
import { dictionaries, Lang } from "@/lib/dictionaries";

export default function Footer() {
  const pathname = usePathname() || "";
  const currentLang = (pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es") as Lang;
  const t = dictionaries[currentLang].footer;

  const NAV_COLS = Object.values(t.cols);

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="mb-8 w-fit">
              <BrandLogoLink variant="footer" className="group-hover:opacity-95 transition-opacity" />
            </div>

            <p className="text-slate-500 leading-relaxed max-w-sm mb-6 text-[0.95rem]">
              {t.desc}
            </p>

            <FacebookSocialLink className="h-10 w-10" />
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col: any) => (
            <div key={col.title}>
              <h4 className="font-bold text-slate-900 mb-6 text-[0.75rem] uppercase tracking-[0.2em] opacity-80">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link: any) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.92rem] text-slate-500 hover:text-secondary transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-secondary mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[0.85rem]">
            © {new Date().getFullYear()} Calculadora Derivadas. {t.rights}
          </p>
          <div className="flex items-center gap-6">
             <p className="text-slate-400 text-[0.85rem] flex items-center gap-2">
                {t.madeWith} <span className="text-secondary">♥</span> {currentLang === "en" ? "by educators" : currentLang === "pt" ? "por educadores" : "por educadores"}.
             </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
