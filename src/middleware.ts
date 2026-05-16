import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
    pathname.match(/\.(.*)$/)
  ) {
    return;
  }

  // Canonical Spanish URLs omit /es — redirect explicit /es paths
  if (pathname.startsWith("/es/") || pathname === "/es") {
    const canonical = pathname.replace(/^\/es/, "") || "/";
    return NextResponse.redirect(new URL(canonical, request.url));
  }

  const pathLocale = localeFromPathname(pathname);

  if (pathLocale) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, pathLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const preferred: Locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  // English / Portuguese: redirect to prefixed URL so pathname matches locale
  if (preferred === "en" || preferred === "pt") {
    const response = NextResponse.redirect(
      new URL(`/${preferred}${pathname === "/" ? "" : pathname}`, request.url)
    );
    response.cookies.set(LOCALE_COOKIE, preferred, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  // Spanish: internal rewrite to /es/* (browser URL stays unprefixed)
  const response = NextResponse.rewrite(
    new URL(`/es${pathname}`, request.url)
  );
  response.cookies.set(LOCALE_COOKIE, DEFAULT_LOCALE, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
