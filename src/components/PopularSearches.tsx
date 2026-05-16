"use client";

import Link from "@/components/LanguageLink";
import { usePathname } from "next/navigation";
import { dictionaries, Lang } from "@/lib/dictionaries";
import { Search } from "lucide-react";

export default function PopularSearches() {
  const pathname = usePathname() || "";
  const currentLang = (pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es") as Lang;
  const dict = dictionaries[currentLang] as any;
  const t = dict.popularSearches;

  if (!t) return null;

  return (
    <div className="mt-16 pt-12 border-t border-slate-100">
      <h3 className="text-slate-900 font-bold text-lg mb-6 flex items-center gap-2">
        <Search size={20} className="text-secondary" />
        {t.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {t.list.map((item: { label: string; href: string }, i: number) => (
          <Link
            key={i}
            href={item.href}
            className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:bg-white hover:border-secondary/30 hover:text-secondary transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
