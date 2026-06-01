import Link from "next/link";
import { Calculator } from "lucide-react";
import { EN_MAIN_CALCULATOR_HREF } from "@/lib/en-routes";
import { ES_MAIN_CALCULATOR_HREF } from "@/lib/routes";
import type { Locale } from "@/lib/locale";

type Props = {
  locale: Locale;
  className?: string;
};

const COPY = {
  en: {
    heading: "Need to solve your own derivative?",
    body: "Use our free step-by-step derivative calculator on the main page—enter any expression and compare your work to the full solution trace.",
    button: "Open Derivative Calculator",
  },
  es: {
    heading: "¿Necesitas resolver tu propia derivada?",
    body: "Usa la calculadora principal con pasos detallados: introduce tu expresión y compara tu procedimiento con la solución simbólica.",
    button: "Abrir calculadora de derivadas",
  },
} as const;

export default function CalculatorCtaBanner({ locale, className = "" }: Props) {
  const t = COPY[locale];
  const href = locale === "en" ? EN_MAIN_CALCULATOR_HREF : ES_MAIN_CALCULATOR_HREF;

  return (
    <section
      className={`rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-6 sm:p-8 ${className}`}
      aria-labelledby="calculator-cta-heading"
    >
      <h2 id="calculator-cta-heading" className="text-xl font-bold text-slate-900 mb-2">
        {t.heading}
      </h2>
      <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-5 max-w-2xl">{t.body}</p>
      <Link
        href={href}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-violet-700 transition-colors"
      >
        <Calculator size={18} aria-hidden />
        {t.button}
      </Link>
    </section>
  );
}
