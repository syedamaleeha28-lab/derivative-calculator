import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCorrectLocalizedPath, getInternalPath } from "./lib/routes";

const LOCALES = ["es", "en", "pt"] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = "es";
const LOCALE_COOKIE = "locale";

function isLocale(value: string | undefined): value is Locale {
  return value === "es" || value === "en" || value === "pt";
}

function localeFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocale(segment) ? segment : null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.match(/\.(.*)$/) ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt"
  ) {
    return;
  }

  const pathLocale = localeFromPathname(pathname);

  // If path has no locale, redirect to preferred locale
  if (!pathLocale) {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
    const preferred: Locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

    // Check if the path needs localization translation
    const logical = pathname === "/" ? "/" : pathname;
    const correctLocal = getCorrectLocalizedPath(logical, preferred) || logical;
    
    const response = NextResponse.redirect(
      new URL(`/${preferred}${correctLocal === "/" ? "" : correctLocal}`, request.url)
    );
    response.cookies.set(LOCALE_COOKIE, preferred, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const actualLocale = pathLocale;
  const logicalPath = pathname.replace(`/${pathLocale}`, "") || "/";

  // 1. Redirect if the path is a mismatched localized slug (e.g. /es/rules -> /es/reglas)
  const correctLocalizedPath = getCorrectLocalizedPath(logicalPath, actualLocale);
  if (correctLocalizedPath !== null) {
    const targetUrl = `/${actualLocale}${correctLocalizedPath === "/" ? "" : correctLocalizedPath}`;
    const response = NextResponse.redirect(new URL(targetUrl, request.url));
    response.cookies.set(LOCALE_COOKIE, actualLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  // 2. Rewrite the localized logical path to the internal standard path (e.g. /reglas -> /rules)
  const internalPath = getInternalPath(logicalPath, actualLocale);
  
  // Construct internal URL: /es/rules (Next.js app router always matches /[lang]/...)
  const rewriteUrl = new URL(`/${actualLocale}${internalPath === "/" ? "" : internalPath}`, request.url);
  
  const response = NextResponse.rewrite(rewriteUrl);
  response.cookies.set(LOCALE_COOKIE, actualLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
