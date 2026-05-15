"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export default function LanguageLink({ href, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname() || "";
  
  // Detect current language from pathname
  const segments = pathname.split("/");
  const firstSegment = segments[1];
  const locales = ["en", "pt"];
  const currentLang = locales.includes(firstSegment) ? firstSegment : "es";

  let localizedHref = href;

  if (currentLang !== "es" && typeof href === "string" && href.startsWith("/")) {
    // Only prepend if not already prepended
    const hrefSegments = href.split("/");
    if (!locales.includes(hrefSegments[1])) {
      localizedHref = `/${currentLang}${href === "/" ? "" : href}`;
    }
  }

  return <Link href={localizedHref} {...props} />;
}
