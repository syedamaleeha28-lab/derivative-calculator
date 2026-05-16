"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { localePath } from "@/lib/locale";
import { useLang } from "@/contexts/I18nContext";

export default function LanguageLink({ href, ...props }: ComponentProps<typeof Link>) {
  const { lang: currentLang } = useLang();

  let localizedHref = href;

  if (typeof href === "string" && href.startsWith("/")) {
    const firstSegment = href.split("/").filter(Boolean)[0];
    const hasLocale = firstSegment === "en" || firstSegment === "pt" || firstSegment === "es";
    if (!hasLocale) {
      // Find if this is an internal path that needs localization
      const { getLocalizedPath } = require("@/lib/routes");
      const logicalPath = getLocalizedPath(href, currentLang);
      localizedHref = localePath(currentLang, logicalPath);
    }
  }

  return <Link href={localizedHref} {...props} />;
}
