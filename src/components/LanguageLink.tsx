"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { getLangFromPathname } from "@/lib/locale";

export default function LanguageLink({ href, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname() || "";
  const currentLang = getLangFromPathname(pathname);
  const locales = ["en", "pt"] as const;

  let localizedHref = href;

  if (currentLang !== "es" && typeof href === "string" && href.startsWith("/")) {
    // Only prepend if not already prepended
    const hrefSegments = href.split("/");
    if (!locales.includes(hrefSegments[1] as (typeof locales)[number])) {
      localizedHref = `/${currentLang}${href === "/" ? "" : href}`;
    }
  }

  return <Link href={localizedHref} {...props} />;
}
