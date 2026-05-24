"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EN_ROUTES } from "@/lib/en-routes";
import { getLocaleFromPathname } from "@/lib/locale";
import logo from "../../public/images/derivio-calculator-logo.webp";

const LOGO_ALT =
  "Calculadora Derivadas — logotipo de la calculadora de derivadas en línea con notación d/dx.";

type BrandLogoVariant = "nav" | "footer" | "mobile";

const variantClass: Record<
  BrandLogoVariant,
  { wrap: string; sizes: string; priority: boolean; imgClass: string }
> = {
  nav: {
    wrap: "flex h-9 shrink-0 items-center min-[360px]:h-10 sm:h-9 md:h-9",
    sizes: "(max-width: 768px) 56px, 90px",
    priority: true,
    imgClass:
      "h-6 w-auto min-[360px]:h-7 sm:h-8 md:h-9 max-w-[5.5rem] object-contain object-right",
  },
  footer: {
    wrap: "flex h-10 shrink-0 items-center sm:h-10",
    sizes: "192px",
    priority: false,
    imgClass: "h-10 w-auto max-w-[12rem] object-contain object-left",
  },
  mobile: {
    wrap: "flex h-9 shrink-0 items-center",
    sizes: "160px",
    priority: false,
    imgClass: "h-9 w-auto max-w-[10rem] object-contain object-left",
  },
};

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
  const pathname = usePathname();
  const homeHref = getLocaleFromPathname(pathname) === "en" ? EN_ROUTES.home : "/";

  return (
    <Link
      href={homeHref}
      onClick={onNavigate}
      className={
        isNavWordmark
          ? `flex min-w-0 items-center gap-1 rounded-lg py-0.5 pl-0 pr-0.5 -my-1 transition-colors hover:bg-slate-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:gap-1.5 sm:py-1 sm:pl-0.5 md:pl-1 md:pr-1.5 md:-ml-0.5 ${className}`
          : `inline-flex items-center group select-none ${className}`
      }
    >
      <div className={v.wrap} {...(isNavWordmark ? { "aria-hidden": true } : {})}>
        <Image
          src={logo}
          alt={isNavWordmark ? "" : LOGO_ALT}
          width={logo.width}
          height={logo.height}
          priority={v.priority}
          loading={v.priority ? "eager" : "lazy"}
          sizes={v.sizes}
          className={v.imgClass}
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
