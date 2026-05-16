"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { localePath } from "@/lib/locale";
import { getLocalizedPath, resolveToInternalPath } from "@/lib/routes";
import { useLang } from "@/contexts/I18nContext";

export default function LanguageLink({ href, ...props }: ComponentProps<typeof Link>) {
  const { lang: currentLang } = useLang();

  let localizedHref = href;

  if (typeof href === "string" && href.startsWith("/")) {
    const firstSegment = href.split("/").filter(Boolean)[0];
    const hasLocale = firstSegment === "en" || firstSegment === "pt" || firstSegment === "es";
    if (!hasLocale) {
      const internalPath = resolveToInternalPath(href);
      const logicalPath = getLocalizedPath(internalPath, currentLang);
      localizedHref = localePath(currentLang, logicalPath);
    }
  }

  return <Link href={localizedHref} {...props} />;
}
