"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "@/components/LanguageLink";
import { BrandLogoLink } from "./BrandLogo";
import FacebookSocialLink from "./FacebookSocialLink";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { useLang } from "@/contexts/I18nContext";
import { LANG_BADGE } from "@/lib/locale";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { lang: currentLang, dict } = useLang();
  const t = dict.nav;

  const NAV_LINKS = [
    { name: t.works, href: "/how-it-works" },
    { name: t.examples, href: "/derivative-examples" },
    { name: t.rules, href: "/reglas" },
    { name: t.blog, href: "/blog" },
  ];

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
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* ─── Marca (logo + nombre) ─────────────────────────────────────── */}
        <BrandLogoLink
          variant="nav"
          showWordmark
          className="select-none min-w-0 shrink"
        />

        {/* ─── Desktop nav ──────────────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link: { name: string; href: string }) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[0.92rem] font-medium text-slate-600 hover:text-secondary px-3.5 py-2 rounded-lg hover:bg-slate-100 transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ─── Desktop actions ──────────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-2">
          <FacebookSocialLink className="h-9 w-9" iconSize={16} />

          {/* ─── Language Switcher (Desktop) ─── */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 200)}
              className="flex items-center gap-1.5 p-2 text-slate-500 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Cambiar idioma"
            >
              <Globe size={17} />
              <span className="lang-badge min-w-[1.75rem] text-center text-xs font-bold text-slate-700">
                {LANG_BADGE[currentLang]}
              </span>
              <ChevronDown size={14} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-40 bg-white border border-slate-100 shadow-lg rounded-xl overflow-hidden py-1 z-50"
                >
                  <LocaleSwitcher onNavigate={() => setLangOpen(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/"
            className="ml-1 bg-[#16213e] hover:bg-[#8b5cf6] text-white px-5 py-2.5 rounded-lg text-[0.9rem] font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            {t.calculate}
          </Link>
        </div>

        {/* ─── Mobile toggles ────────────────────────────────────────────── */}
        <div className="flex items-center gap-1.5 md:hidden">
          <FacebookSocialLink className="h-9 w-9" iconSize={16} />
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="p-2 text-slate-500 flex items-center gap-1"
          >
            <Globe size={18} />
            <span className="lang-badge min-w-[1.75rem] text-center text-[0.65rem] font-bold text-slate-700">
              {LANG_BADGE[currentLang]}
            </span>
          </button>
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="p-2 text-slate-800"
            aria-label="Menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ─── Mobile menu ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
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
            <ul className="flex flex-col px-6 py-5 gap-1">
              {NAV_LINKS.map((link: { name: string; href: string }) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[1rem] font-medium text-slate-700 py-2.5 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-3 mt-1 border-t border-slate-100">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex justify-center w-full bg-[#16213e] hover:bg-[#8b5cf6] text-white py-3 rounded-xl font-semibold text-[0.95rem] shadow-md transition-all active:scale-95"
                >
                  {t.calcNow}
                </Link>
              </li>
              
              {/* ─── Language Switcher (Mobile Menu) ─── */}
              <AnimatePresence>
                {langOpen && (
                  <motion.li
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden border-t border-slate-100 mt-2 pt-2"
                  >
                    <LocaleSwitcher
                      variant="grid"
                      onNavigate={() => {
                        setMobileOpen(false);
                        setLangOpen(false);
                      }}
                    />
                  </motion.li>
                )}
              </AnimatePresence>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
