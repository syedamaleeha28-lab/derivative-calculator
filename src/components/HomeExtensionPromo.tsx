import Link from "next/link";
import { ExternalLink, Puzzle } from "lucide-react";
import { CHROME_EXTENSION_URL } from "@/lib/chrome-extension-url";
import { EXTENSION_CROMO_FORMULAS_PATH } from "@/lib/extension-cromo-formulas";

export default function HomeExtensionPromo() {
  return (
    <section
      className="border-t border-slate-100 bg-white py-12 md:py-16"
      aria-labelledby="extension-promo-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <article className="flex flex-col gap-6 rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/60 p-6 shadow-sm md:flex-row md:items-center md:justify-between md:gap-10 md:p-8">
          <div className="flex items-start gap-4 md:max-w-2xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <Puzzle size={24} aria-hidden />
            </div>
            <div>
              <h2
                id="extension-promo-heading"
                className="heading-font mb-2 text-xl text-slate-900 md:text-2xl"
              >
                Math Formula Helper para Chrome
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Extensión gratuita para símbolos matemáticos, fórmulas, LaTeX y recursos de
                derivadas.{" "}
                <Link
                  href={EXTENSION_CROMO_FORMULAS_PATH}
                  className="font-medium text-violet-600 hover:text-violet-700 hover:underline"
                >
                  Más información
                </Link>
              </p>
            </div>
          </div>
          <a
            href={CHROME_EXTENSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-violet-700 md:self-center"
          >
            <Puzzle size={18} aria-hidden />
            Instalar Extensión
            <ExternalLink size={14} aria-hidden className="opacity-75" />
          </a>
        </article>
      </div>
    </section>
  );
}
