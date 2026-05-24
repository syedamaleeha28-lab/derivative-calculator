import type { Locale } from "../locale";

export const CALCULATOR_PAGE_UI: Record<
  Locale,
  {
    examplesHeading: string;
    relatedHeading: string;
    faqHeading: string;
    resourcesHeading: string;
    openLink: string;
    resultLabel: string;
    calcNow: string;
  }
> = {
  es: {
    examplesHeading: "Ejemplos resueltos paso a paso",
    relatedHeading: "Calculadoras relacionadas",
    faqHeading: "Preguntas frecuentes",
    resourcesHeading: "Explora más recursos",
    openLink: "Ver",
    resultLabel: "Resultado",
    calcNow: "Calcular ahora",
  },
  en: {
    examplesHeading: "Step-by-step examples",
    relatedHeading: "Related calculators",
    faqHeading: "Frequently asked questions",
    resourcesHeading: "Explore more resources",
    openLink: "Open",
    resultLabel: "Result",
    calcNow: "Calculate Now",
  },
};
