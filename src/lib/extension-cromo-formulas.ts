import { CHROME_EXTENSION_URL } from "./chrome-extension-url";
import { ES_CALCULATOR_ROUTES } from "./es-routes";
import { ROUTES } from "./routes";
import { absoluteUrl } from "./seo";

export const EXTENSION_CROMO_FORMULAS_PATH = "/extension-cromo-formulas-matematicas" as const;

export const EXTENSION_CROMO_FORMULAS_METADATA = {
  title: "Math Formula Helper: Extensión de Chrome para Fórmulas Matemáticas",
  description:
    "Math Formula Helper es una extensión gratuita de Chrome para copiar símbolos matemáticos, guardar fórmulas, convertir expresiones LaTeX y acceder rápidamente a recursos de cálculo y derivadas.",
  keywords:
    "math formula helper, extensión chrome matemáticas, extensión fórmulas matemáticas, símbolos matemáticos chrome, conversor latex, calculadora derivadas extensión, recursos cálculo diferencial",
} as const;

export const EXTENSION_CROMO_FORMULAS_INTRO = {
  h1: "Math Formula Helper: Extensión de Chrome para Matemáticas",
  subtitle:
    "Herramienta gratuita para estudiantes, profesores, ingenieros y cualquier persona que trabaje con fórmulas matemáticas.",
  whatIsTitle: "¿Qué es Math Formula Helper?",
  whatIsParagraphs: [
    "Math Formula Helper es una extensión de Chrome diseñada para agilizar el trabajo con matemáticas en el navegador. Permite copiar símbolos matemáticos con un clic, guardar fórmulas en un bloc de notas personal, convertir expresiones a LaTeX y acceder rápidamente a recursos de cálculo diferencial en calculadora-derivadas.org.",
    "Si estudias cálculo, preparas exámenes o documentas modelos técnicos, esta extensión concentra en la barra de herramientas lo que normalmente requiere varias pestañas: notación, fórmulas guardadas y enlaces a calculadoras de derivadas con pasos.",
  ],
  whatIsBullets: [
    "Copiar símbolos matemáticos (∫, ∂, ∑, π, raíces, operadores y más)",
    "Guardar fórmulas y notas para repasar antes de un parcial",
    "Convertir expresiones a LaTeX listas para pegar en documentos",
    "Acceder rápidamente a recursos de cálculo y derivadas online",
  ],
} as const;

export const EXTENSION_CROMO_FORMULAS_FEATURES = [
  {
    title: "Biblioteca de Símbolos Matemáticos",
    description:
      "Inserta integrales, letras griegas, operadores y notación habitual sin memorizar atajos de teclado.",
  },
  {
    title: "Bloc de Notas para Fórmulas",
    description:
      "Organiza identidades, reglas de derivación y apuntes de clase en un espacio local dentro del navegador.",
  },
  {
    title: "Conversor LaTeX",
    description:
      "Transforma expresiones matemáticas a formato LaTeX para informes, presentaciones y foros académicos.",
  },
  {
    title: "Plantillas de Reglas de Derivación",
    description:
      "Consulta de un vistazo las reglas de potencia, producto, cociente y cadena mientras resuelves ejercicios.",
  },
  {
    title: "Recursos de Cálculo",
    description:
      "Abre calculadoras de derivadas, guías y artículos del blog sin salir de tu flujo de trabajo.",
  },
] as const;

export const EXTENSION_CROMO_FORMULAS_BENEFITS = [
  {
    title: "Para estudiantes",
    description:
      "Repasa fórmulas, copia símbolos en tareas y enlaza con la calculadora de derivadas para verificar resultados paso a paso.",
  },
  {
    title: "Para profesores",
    description:
      "Mantén notación coherente al redactar enunciados y comparte recursos de cálculo con enlaces directos desde el navegador.",
  },
  {
    title: "Para ingenieros",
    description:
      "Referencia derivadas estándar y convierte expresiones a LaTeX mientras documentas modelos y análisis técnicos.",
  },
  {
    title: "Para profesionales STEM",
    description:
      "Centraliza fórmulas recurrentes y accede a herramientas de cálculo diferencial cuando necesites comprobaciones simbólicas.",
  },
] as const;

export const EXTENSION_CROMO_FORMULAS_STEPS = [
  {
    step: 1,
    title: "Instalar la extensión",
    description:
      "Añade Math Formula Helper desde Chrome Web Store con un clic. Es gratuita y ocupa poco espacio.",
  },
  {
    step: 2,
    title: "Abrir el panel",
    description:
      "Haz clic en el icono de la extensión en la barra de herramientas de Chrome para abrir el panel principal.",
  },
  {
    step: 3,
    title: "Copiar símbolos o guardar fórmulas",
    description:
      "Explora la biblioteca de símbolos, guarda notas en el bloc de fórmulas o convierte expresiones con el conversor LaTeX.",
  },
  {
    step: 4,
    title: "Acceder a recursos matemáticos",
    description:
      "Usa las plantillas de derivación y los enlaces rápidos a calculadoras y guías de calculadora-derivadas.org.",
  },
] as const;

export const EXTENSION_CROMO_FORMULAS_FAQS = [
  {
    q: "¿La extensión es gratuita?",
    a: "Sí. Math Formula Helper es completamente gratuita: símbolos, bloc de notas, conversor LaTeX y accesos a recursos de cálculo están disponibles sin suscripción.",
  },
  {
    q: "¿Funciona sin conexión?",
    a: "La biblioteca de símbolos, las fórmulas guardadas y las plantillas de derivación funcionan sin conexión una vez instalada. Los enlaces a calculadoras online requieren internet.",
  },
  {
    q: "¿Recopila datos personales?",
    a: "La extensión está pensada para productividad local. Las fórmulas guardadas permanecen en tu perfil de Chrome y no se venden datos personales ni se exige cuenta.",
  },
  {
    q: "¿Puedo guardar fórmulas localmente?",
    a: "Sí. El bloc de notas permite almacenar entradas personalizadas, apuntes de clase e identidades favoritas de forma local en el navegador.",
  },
  {
    q: "¿Es útil para aprender derivadas?",
    a: "Incluye plantillas de reglas de derivación y acceso directo a la calculadora de derivadas con pasos de este sitio. Para diferenciación simbólica completa, usa las calculadoras enlazadas desde la extensión.",
  },
] as const;

export const EXTENSION_CROMO_FORMULAS_INTERNAL_LINKS = [
  { label: "Calculadora de Derivadas", href: "/#calculator" },
  { label: "Derivadas Parciales", href: ES_CALCULATOR_ROUTES.partialDerivatives },
  { label: "Regla de la Cadena", href: ES_CALCULATOR_ROUTES.chainRule },
  { label: "Derivación Implícita", href: ES_CALCULATOR_ROUTES.implicitDerivatives },
  { label: "Blog de Cálculo Diferencial", href: ROUTES.blog },
] as const;

export const EXTENSION_CROMO_FORMULAS_BREADCRUMBS = [
  { label: "Inicio", href: ROUTES.home },
  { label: "Recursos", href: ROUTES.blog },
  { label: "Extensión Chrome Matemáticas", href: EXTENSION_CROMO_FORMULAS_PATH },
] as const;

export function buildExtensionCromoFormulasSchemaGraph() {
  const pageUrl = absoluteUrl(EXTENSION_CROMO_FORMULAS_PATH);

  const softwareApplication = {
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#software`,
    name: "Math Formula Helper",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    inLanguage: "es",
    description:
      "Extensión gratuita de Chrome para copiar símbolos matemáticos, guardar fórmulas y acceder a recursos de cálculo.",
    url: pageUrl,
    downloadUrl: CHROME_EXTENSION_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: EXTENSION_CROMO_FORMULAS_BREADCRUMBS.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: EXTENSION_CROMO_FORMULAS_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [softwareApplication, breadcrumb, faq],
  };
}
