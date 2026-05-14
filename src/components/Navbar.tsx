"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BrandLogoLink } from "./BrandLogo";

const NAV_LINKS = [
  { name: "Cómo funciona", href: "/how-it-works" },
  { name: "Ejemplos", href: "/derivative-examples" },
  { name: "Reglas", href: "/reglas" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#07111f]/90 backdrop-blur-2xl border-b border-slate-100 dark:border-white/10 shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
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
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[0.92rem] font-medium text-slate-600 dark:text-slate-100 hover:text-secondary dark:hover:text-accent px-3.5 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ─── Desktop actions ──────────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Cambiar modo"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link
            href="/"
            className="ml-1 bg-[#16213e] hover:bg-[#8b5cf6] text-white px-5 py-2.5 rounded-lg text-[0.9rem] font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Calcular
          </Link>
        </div>

        {/* ─── Mobile toggles ────────────────────────────────────────────── */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className="p-2 text-slate-500 dark:text-slate-300">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="p-2 text-slate-800 dark:text-white"
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
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#07111f] backdrop-blur-xl border-b border-slate-100 dark:border-white/10 shadow-lg overflow-hidden"
          >
            <div className="px-6 pt-4 pb-3 border-b border-slate-100 dark:border-white/5">
              <BrandLogoLink
                variant="mobile"
                onNavigate={() => setMobileOpen(false)}
                className="w-fit"
              />
            </div>
            <ul className="flex flex-col px-6 py-5 gap-1">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[1rem] font-medium text-slate-700 dark:text-slate-100 py-2.5 hover:text-secondary dark:hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-3 mt-1 border-t border-slate-100 dark:border-white/5">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex justify-center w-full bg-[#16213e] hover:bg-[#8b5cf6] text-white py-3 rounded-xl font-semibold text-[0.95rem] shadow-md transition-all active:scale-95"
                >
                  Calcular Ahora
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
