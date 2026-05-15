import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['es', 'en', 'pt'];
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    pathname.match(/\.(.*)$/)
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    if (pathname.startsWith('/es/') || pathname === '/es') {
      const newPathname = pathname.replace(/^\/es/, '') || '/';
      return NextResponse.redirect(new URL(newPathname, request.url));
    }
    return;
  }

  return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next|api|.*\\.).*)'],
};
