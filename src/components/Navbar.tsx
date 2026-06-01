"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogoLink } from "./BrandLogo";
import LocaleSwitcher from "./LocaleSwitcher";
import { dict } from "@/lib/dictionaries";
import { dictEn } from "@/lib/dictionaries-en";
import {
  EN_BLOG_NAV,
  EN_EXAMPLES_NAV,
  EN_GUIDES_NAV,
  EN_PRIMARY_NAV,
  isEnGuidePath,
} from "@/lib/en-navigation";
import {
  ES_BLOG_NAV_KEY,
  ES_EXAMPLES_NAV_KEY,
  ES_GUIDES_NAV,
  ES_PRIMARY_NAV_KEYS,
  isEsGuidePath,
} from "@/lib/es-navigation";
import { EN_MAIN_CALCULATOR_HREF, EN_ROUTES } from "@/lib/en-routes";
import { getLocaleFromPathname } from "@/lib/locale";
import { ES_MAIN_CALCULATOR_HREF } from "@/lib/routes";

function isNavLinkActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === EN_ROUTES.home) return pathname === EN_ROUTES.home;
  return pathname === href || pathname.startsWith(`${href}/`);
}

const DESKTOP_LINK =
  "inline-flex items-center whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] font-medium leading-none tracking-tight transition-colors";
const DESKTOP_LINK_ACTIVE = `${DESKTOP_LINK} text-violet-700 bg-violet-50 font-semibold`;
const DESKTOP_LINK_IDLE = `${DESKTOP_LINK} text-slate-600 hover:bg-slate-100 hover:text-violet-700`;

const MOBILE_LINK =
  "block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium transition-colors";
const MOBILE_LINK_ACTIVE = `${MOBILE_LINK} bg-violet-50 text-violet-700 font-semibold`;
const MOBILE_LINK_IDLE = `${MOBILE_LINK} text-slate-700 hover:bg-slate-50 hover:text-violet-700`;

function desktopLinkClass(active: boolean) {
  return active ? DESKTOP_LINK_ACTIVE : DESKTOP_LINK_IDLE;
}

function mobileLinkClass(active: boolean) {
  return active ? MOBILE_LINK_ACTIVE : MOBILE_LINK_IDLE;
}

type GuidesDropdownProps = {
  label: string;
  items: readonly { name: string; href: string }[];
  pathname: string;
  isGuideActive: boolean;
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

function GuidesDropdown({
  label,
  items,
  pathname,
  isGuideActive,
  variant,
  onNavigate,
}: GuidesDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (variant !== "desktop" || !open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open, variant]);

  if (variant === "desktop") {
    return (
      <li ref={rootRef} className="relative shrink-0">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`${desktopLinkClass(isGuideActive)} gap-0.5`}
          aria-expanded={open}
          aria-haspopup="true"
        >
          {label}
          <ChevronDown
            size={14}
            className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
        <div
          className={`absolute left-0 top-full z-50 pt-1.5 transition-all ${
            open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
          }`}
        >
          <ul
            role="menu"
            className="max-h-[min(70vh,24rem)] w-56 overflow-y-auto rounded-xl border border-slate-200 bg-white py-1.5 shadow-xl"
          >
            {items.map((item) => {
              const active = isNavLinkActive(pathname, item.href);
              return (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={`block px-3.5 py-2 text-[0.8125rem] leading-snug ${
                      active
                        ? "bg-violet-50 font-semibold text-violet-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-violet-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${mobileLinkClass(isGuideActive)} flex w-full items-center justify-between`}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-2"
            role="list"
          >
            {items.map((item) => {
              const active = isNavLinkActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={`${mobileLinkClass(active)} text-[0.9rem]`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isEnglish = locale === "en";
  const calcHref = isEnglish ? EN_MAIN_CALCULATOR_HREF : ES_MAIN_CALCULATOR_HREF;
  const t = isEnglish ? dictEn.nav : dict.nav;

  const primaryLinks = isEnglish
    ? EN_PRIMARY_NAV
    : ES_PRIMARY_NAV_KEYS.map((item) => ({
        name: dict.nav[item.nameKey],
        href: item.href,
      }));

  const guidesLinks = isEnglish ? EN_GUIDES_NAV : ES_GUIDES_NAV;
  const examplesLink = isEnglish
    ? EN_EXAMPLES_NAV
    : { name: dict.nav[ES_EXAMPLES_NAV_KEY.nameKey], href: ES_EXAMPLES_NAV_KEY.href };
  const blogLink = isEnglish
    ? EN_BLOG_NAV
    : { name: dict.nav[ES_BLOG_NAV_KEY.nameKey], href: ES_BLOG_NAV_KEY.href };

  const guidesActive = isEnglish ? isEnGuidePath(pathname) : isEsGuidePath(pathname);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "sticky top-0 border-b border-slate-100 bg-white/95 py-2 shadow-sm backdrop-blur-xl"
          : "relative py-3"
      } md:relative md:border-none md:bg-transparent md:py-3 md:shadow-none`}
      aria-label={isEnglish ? "Main navigation" : "Navegación principal"}
    >
      <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-3 sm:px-4 lg:gap-4 lg:px-6 xl:px-8">
        <BrandLogoLink
          variant="nav"
          showWordmark
          className="min-w-0 shrink lg:max-w-[11rem] xl:max-w-none"
        />

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <ul className="flex max-w-full flex-nowrap items-center gap-0.5">
            {primaryLinks.map((link) => {
              const active = isNavLinkActive(pathname, link.href);
              return (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className={desktopLinkClass(active)}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <GuidesDropdown
              label={t.guides}
              items={guidesLinks}
              pathname={pathname}
              isGuideActive={guidesActive}
              variant="desktop"
            />
            <li className="shrink-0">
              <Link
                href={examplesLink.href}
                className={desktopLinkClass(isNavLinkActive(pathname, examplesLink.href))}
                aria-current={isNavLinkActive(pathname, examplesLink.href) ? "page" : undefined}
              >
                {examplesLink.name}
              </Link>
            </li>
            <li className="shrink-0">
              <Link
                href={blogLink.href}
                className={desktopLinkClass(isNavLinkActive(pathname, blogLink.href))}
                aria-current={isNavLinkActive(pathname, blogLink.href) ? "page" : undefined}
              >
                {blogLink.name}
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <LocaleSwitcher variant="desktop" />
          <Link
            href={calcHref}
            className="whitespace-nowrap rounded-lg bg-[#16213e] px-4 py-2 text-[0.8125rem] font-semibold text-white shadow-md transition-all hover:bg-[#8b5cf6] hover:shadow-lg active:scale-95 lg:px-4"
          >
            {t.calculate}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 md:hidden">
          <LocaleSwitcher variant="compact" />
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
            className="absolute left-0 top-full w-full overflow-hidden border-b border-slate-100 bg-white shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-0.5 px-4 py-4" role="list">
              {primaryLinks.map((link) => {
                const active = isNavLinkActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className={mobileLinkClass(active)}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <GuidesDropdown
                label={t.guides}
                items={guidesLinks}
                pathname={pathname}
                isGuideActive={guidesActive}
                variant="mobile"
                onNavigate={closeMobile}
              />
              <li>
                <Link
                  href={examplesLink.href}
                  onClick={closeMobile}
                  className={mobileLinkClass(isNavLinkActive(pathname, examplesLink.href))}
                >
                  {examplesLink.name}
                </Link>
              </li>
              <li>
                <Link
                  href={blogLink.href}
                  onClick={closeMobile}
                  className={mobileLinkClass(isNavLinkActive(pathname, blogLink.href))}
                >
                  {blogLink.name}
                </Link>
              </li>
              <li className="mt-3 border-t border-slate-100 pt-4">
                <Link
                  href={calcHref}
                  onClick={closeMobile}
                  className="flex w-full justify-center rounded-xl bg-[#16213e] py-3 text-[0.95rem] font-semibold text-white shadow-md transition-all hover:bg-[#8b5cf6] active:scale-95"
                >
                  {t.calculate}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
