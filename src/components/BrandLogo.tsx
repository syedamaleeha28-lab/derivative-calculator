"use client";

import Image from "next/image";
import Link from "@/components/LanguageLink";
import { usePathname } from "next/navigation";

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

/** Logo compacto y alineado a la derecha del recuadro para acercarlo al wordmark. */
const NAV_WORDMARK_LOGO_WRAP =
  "relative flex h-8 w-[4.625rem] shrink-0 items-center justify-end sm:h-9 sm:w-[5.125rem] md:w-[5.5rem]";

export function BrandLogoLink({
  variant,
  onNavigate,
  className = "",
  showWordmark = false,
}: {
  variant: BrandLogoVariant;
  onNavigate?: () => void;
  className?: string;
  /** Muestra el texto «Calculadora Derivadas» junto al logo. */
  showWordmark?: boolean;
}) {
  const v = variantClass[variant];
  const isNavWordmark = showWordmark && variant === "nav";
  const wrapClass = isNavWordmark ? NAV_WORDMARK_LOGO_WRAP : v.wrap;
  const imgSizes = isNavWordmark ? "(max-width: 768px) 76px, 90px" : v.sizes;
  const pathname = usePathname() || "";
  const lang = pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es";

  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={
        isNavWordmark
          ? `flex items-center gap-1 sm:gap-1.5 min-w-0 rounded-lg py-1 pl-1 pr-1.5 -my-1 -ml-0.5 transition-colors hover:bg-slate-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${className}`
          : `inline-flex items-center group select-none ${className}`
      }
    >
      <div className={wrapClass} {...(isNavWordmark ? { "aria-hidden": true } : {})}>
        <Image
          src="/images/derivio-calculator-logo.webp"
          alt={isNavWordmark ? "" : LOGO_ALT}
          fill
          className={
            isNavWordmark
              ? "object-contain object-right"
              : "object-contain object-left"
          }
          sizes={imgSizes}
          priority={v.priority}
        />
      </div>
      {isNavWordmark && (
        <span className="flex min-w-0 shrink items-center leading-none" lang={lang}>
          <span className="heading-font whitespace-nowrap text-[0.75rem] font-semibold tracking-tight text-slate-900 sm:text-[0.875rem] md:text-[0.9375rem]">
            Calculadora{" "}
            <span className="font-bold text-secondary">Derivadas</span>
          </span>
        </span>
      )}
    </Link>
  );
}
