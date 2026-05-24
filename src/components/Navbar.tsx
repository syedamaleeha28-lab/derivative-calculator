"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogoLink } from "./BrandLogo";
import SocialLinks from "./SocialLinks";
import LocaleSwitcher from "./LocaleSwitcher";
import { dict } from "@/lib/dictionaries";
import { dictEn } from "@/lib/dictionaries-en";
import { EN_NAV_LINKS, EN_ROUTES } from "@/lib/en-routes";
import { getLocaleFromPathname } from "@/lib/locale";
import { NAV_LINKS as NAV_ROUTE_LINKS, ROUTES } from "@/lib/routes";

const SPANISH_NAV_LINKS = NAV_ROUTE_LINKS.map((link) => ({
  name: dict.nav[link.nameKey],
  href: link.href,
}));

function isNavLinkActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === EN_ROUTES.home) return pathname === EN_ROUTES.home;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClassName(active: boolean, variant: "desktop" | "mobile"): string {
  const base =
    variant === "desktop"
      ? "text-[0.9rem] font-medium px-3 py-2 rounded-lg transition-all"
      : "block text-[1rem] font-medium py-2.5 transition-colors";

  if (active) {
    return variant === "desktop"
      ? `${base} text-violet-600 bg-violet-50 font-semibold`
      : `${base} text-violet-600 font-semibold`;
  }

  return variant === "desktop"
    ? `${base} text-slate-600 hover:text-violet-600 hover:bg-slate-100`
    : `${base} text-slate-700 hover:text-violet-600`;
}

export default function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isEnglish = locale === "en";
  const navLinks = isEnglish ? EN_NAV_LINKS : SPANISH_NAV_LINKS;
  const calcHref = isEnglish ? `${EN_ROUTES.home}#calculator` : ROUTES.home;
  const t = isEnglish ? dictEn.nav : dict.nav;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "sticky top-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm py-2"
          : "relative py-3"
      } md:relative md:bg-transparent md:border-none md:shadow-none md:py-4`}
      aria-label={isEnglish ? "Main navigation" : "Navegación principal"}
    >
      <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-2.5 sm:gap-3 sm:px-4 md:justify-between md:gap-3 md:px-6 lg:px-12">
        <BrandLogoLink
          variant="nav"
          showWordmark
          className="min-w-0 flex-1 md:flex-none"
        />

        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = isNavLinkActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={navLinkClassName(active, "desktop")}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <LocaleSwitcher variant="desktop" />
          <SocialLinks variant="navbar" iconSize={16} />
          <Link
            href={calcHref}
            className="ml-0.5 bg-[#16213e] hover:bg-[#8b5cf6] text-white px-4 lg:px-5 py-2.5 rounded-lg text-[0.88rem] lg:text-[0.9rem] font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            {t.calculate}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-1.5 md:hidden">
          <LocaleSwitcher variant="desktop" />
          <SocialLinks variant="navbar" iconSize={14} className="gap-1 sm:gap-1.5" />
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100 active:bg-slate-200"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white backdrop-blur-xl border-b border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 pt-4 pb-3 border-b border-slate-100">
              <BrandLogoLink
                variant="mobile"
                onNavigate={() => setMobileOpen(false)}
                className="w-fit"
              />
            </div>
            <ul className="flex flex-col px-6 py-5 gap-1" role="list">
              {navLinks.map((link) => {
                const active = isNavLinkActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={navLinkClassName(active, "mobile")}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3 mt-1 border-t border-slate-100">
                <Link
                  href={calcHref}
                  onClick={() => setMobileOpen(false)}
                  className="flex justify-center w-full bg-[#16213e] hover:bg-[#8b5cf6] text-white py-3 rounded-xl font-semibold text-[0.95rem] shadow-md transition-all active:scale-95"
                >
                  {t.calcNow}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
