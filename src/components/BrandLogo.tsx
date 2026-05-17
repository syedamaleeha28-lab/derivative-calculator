"use client";

import Image from "next/image";
import Link from "next/link";

const LOGO_ALT =
  "Calculadora Derivadas — logotipo de la calculadora de derivadas en línea con notación d/dx.";

type BrandLogoVariant = "nav" | "footer" | "mobile";

const variantClass: Record<BrandLogoVariant, { wrap: string; sizes: string; priority: boolean }> = {
  nav: {
    wrap: "relative h-9 w-[9.25rem] sm:w-40 shrink-0",
    sizes: "160px",
    priority: true,
  },
  footer: {
    wrap: "relative h-10 w-44 sm:w-48 shrink-0",
    sizes: "192px",
    priority: false,
  },
  mobile: {
    wrap: "relative h-9 w-40 shrink-0",
    sizes: "160px",
    priority: false,
  },
};

const NAV_WORDMARK_LOGO_WRAP =
  "relative flex h-6 w-8 shrink-0 items-center justify-end min-[360px]:h-7 min-[360px]:w-9 sm:h-8 sm:w-[4.625rem] md:h-9 md:w-[5.5rem]";

export function BrandLogoLink({
  variant,
  onNavigate,
  className = "",
  showWordmark = false,
}: {
  variant: BrandLogoVariant;
  onNavigate?: () => void;
  className?: string;
  showWordmark?: boolean;
}) {
  const v = variantClass[variant];
  const isNavWordmark = showWordmark && variant === "nav";
  const wrapClass = isNavWordmark ? NAV_WORDMARK_LOGO_WRAP : v.wrap;
  const imgSizes = isNavWordmark ? "(max-width: 768px) 56px, 90px" : v.sizes;

  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={
        isNavWordmark
          ? `flex min-w-0 items-center gap-1 rounded-lg py-0.5 pl-0 pr-0.5 -my-1 transition-colors hover:bg-slate-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:gap-1.5 sm:py-1 sm:pl-0.5 md:pl-1 md:pr-1.5 md:-ml-0.5 ${className}`
          : `inline-flex items-center group select-none ${className}`
      }
    >
      <div className={wrapClass} {...(isNavWordmark ? { "aria-hidden": true } : {})}>
        <Image
          src="/images/derivio-calculator-logo.webp"
          alt={isNavWordmark ? "" : LOGO_ALT}
          fill
          className={isNavWordmark ? "object-contain object-right" : "object-contain object-left"}
          sizes={imgSizes}
          priority={v.priority}
        />
      </div>
      {isNavWordmark && (
        <span className="flex min-w-0 items-center leading-none" lang="es">
          <span className="heading-font whitespace-nowrap text-[0.625rem] font-semibold tracking-tight text-slate-900 min-[360px]:text-[0.6875rem] sm:text-sm md:text-[0.9375rem]">
            Calculadora{" "}
            <span className="font-bold text-secondary">Derivadas</span>
          </span>
        </span>
      )}
    </Link>
  );
}
