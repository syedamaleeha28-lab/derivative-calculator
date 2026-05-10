"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

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

        {/* ─── Logo ─────────────────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group select-none">
          <div className="relative w-9 h-9 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-secondary/30 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-full h-full bg-gradient-to-br from-secondary to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-secondary/20 border border-white/10 overflow-hidden">
              <span className="text-white font-black text-[0.8rem] tracking-tighter select-none">
                d/dx
              </span>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 blur-md rounded-full" />
            </div>
          </div>

          <div className="flex flex-col leading-none">
            <span className="heading-font text-[1.25rem] text-slate-900 dark:text-white tracking-tight leading-none font-bold">
              Derivio
            </span>
            <span className="text-[0.65rem] text-secondary dark:text-accent font-bold tracking-[0.15em] uppercase leading-none mt-1">
              Calculadora
            </span>
          </div>
        </Link>

        {/* ─── Desktop nav ──────────────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[0.92rem] font-medium text-slate-600 dark:text-slate-200 hover:text-secondary dark:hover:text-accent px-3.5 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
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
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
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
          <button onClick={toggleTheme} className="p-2 text-slate-500 dark:text-slate-400">
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
            <ul className="flex flex-col px-6 py-5 gap-1">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[1rem] font-medium text-slate-700 dark:text-slate-200 py-2.5 hover:text-secondary dark:hover:text-accent transition-colors"
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
