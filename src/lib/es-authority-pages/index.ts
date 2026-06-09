import type { EsAuthorityEntry } from "./types";
import { ES_AUTHORITY_ROUTES } from "../es-authority-routes";
import { EN_ROUTES } from "../en-routes";
import { esAuthorityBreadcrumbs } from "./helpers";
import { ReglasDeDerivacionContent } from "./content/reglas-de-derivacion";
import { FormulasDeDerivadasContent } from "./content/formulas-de-derivadas";
import { EjemplosDeDerivadasContent } from "./content/ejemplos-de-derivadas";
import { EjerciciosDeDerivadasContent } from "./content/ejercicios-de-derivadas";
import { TablaDeDerivadasContent } from "./content/tabla-de-derivadas";

/**
 * Hreflang pairs (parent agent will update locale.ts):
 * - reglas-de-derivacion ↔ /en/derivative-rules
 * - formulas-de-derivadas ↔ /en/derivative-formulas
 * - ejemplos-de-derivadas ↔ /en/derivative-examples
 * - ejercicios-de-derivadas ↔ /en/derivative-practice-problems
 * - tabla-de-derivadas ↔ /en/derivative-cheat-sheet
 */
export const ES_AUTHORITY_HREFLANG_PAIRS = {
  [ES_AUTHORITY_ROUTES.reglasDeDerivacion]: EN_ROUTES.derivativeRules,
  [ES_AUTHORITY_ROUTES.formulasDeDerivadas]: EN_ROUTES.derivativeFormulas,
  [ES_AUTHORITY_ROUTES.ejemplosDeDerivadas]: EN_ROUTES.derivativeExamples,
  [ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas]: EN_ROUTES.derivativePracticeProblems,
  [ES_AUTHORITY_ROUTES.tablaDeDerivadas]: EN_ROUTES.derivativeCheatSheet,
} as const;

const AUTHOR = {
  name: "Equipo Calculadora Derivadas",
  role: "Educación en cálculo diferencial",
} as const;

function entry(
  meta: Omit<EsAuthorityEntry, "breadcrumbs" | "Content"> & {
    breadcrumbLabel: string;
    Content: EsAuthorityEntry["Content"];
  }
): EsAuthorityEntry {
  const { breadcrumbLabel, Content, ...rest } = meta;
  return {
    ...rest,
    breadcrumbs: esAuthorityBreadcrumbs(rest.route, breadcrumbLabel),
    Content,
  };
}

export const ES_AUTHORITY_ENTRIES: EsAuthorityEntry[] = [
  entry({
    route: ES_AUTHORITY_ROUTES.reglasDeDerivacion,
    title: "Reglas de Derivación: Guía Completa con Tabla de Referencia",
    description:
      "Reglas de derivación explicadas en español: potencia, producto, cociente, cadena, trigonométricas, logaritmos y exponenciales. Tablas, ejemplos y enlaces a calculadoras con pasos.",
    date: "9 de junio de 2026",
    dateIso: "2026-06-09",
    readTime: "18 min",
    category: "Referencia",
    tags: [
      "reglas de derivación",
      "reglas de derivadas",
      "cómo derivar",
      "cálculo diferencial",
      "guía de derivadas",
    ],
    author: AUTHOR,
    heroImageAlt: "Tabla resumen de reglas de derivación para estudiantes de cálculo",
    englishAlternate: EN_ROUTES.derivativeRules,
    faqs: [
      {
        question: "¿Cuáles son las reglas básicas de derivación?",
        answer:
          "Linealidad, regla de la potencia, regla del producto, regla del cociente y regla de la cadena cubren la mayoría de funciones elementales.",
      },
      {
        question: "¿Cuándo uso la regla de la cadena?",
        answer:
          "Cuando derivas una composición f(g(x)): una función exterior aplicada a una interior, como sin(3x) o e^(x²).",
      },
      {
        question: "¿Cuál es la derivada de una constante?",
        answer: "Cero. Las constantes no dependen de x.",
      },
      {
        question: "¿Qué regla aplico a un cociente u/v?",
        answer: "La regla del cociente: (u′v − uv′)/v², salvo que puedas simplificar la fracción antes.",
      },
      {
        question: "¿Dónde practico después de leer las reglas?",
        answer:
          "En nuestra calculadora con pasos y en las guías de ejemplos y ejercicios de derivadas del mismo clúster.",
      },
    ],
    relatedPosts: [
      { title: "Fórmulas de derivadas", href: ES_AUTHORITY_ROUTES.formulasDeDerivadas },
      { title: "Ejemplos de derivadas", href: ES_AUTHORITY_ROUTES.ejemplosDeDerivadas },
      { title: "Tabla de derivadas", href: ES_AUTHORITY_ROUTES.tablaDeDerivadas },
    ],
    breadcrumbLabel: "Reglas de derivación",
    Content: ReglasDeDerivacionContent,
  }),
  entry({
    route: ES_AUTHORITY_ROUTES.formulasDeDerivadas,
    title: "Fórmulas de Derivadas: Referencia por Tipo de Función",
    description:
      "Fórmulas de derivadas organizadas: algebraicas, trigonométricas, exponenciales, logarítmicas, inversas y reglas de combinación. Consulta rápida con ejemplos en español.",
    date: "9 de junio de 2026",
    dateIso: "2026-06-09",
    readTime: "16 min",
    category: "Referencia",
    tags: [
      "fórmulas de derivadas",
      "fórmulas derivadas",
      "tabla fórmulas derivadas",
      "derivadas fórmulas",
    ],
    author: AUTHOR,
    heroImageAlt: "Colección de fórmulas de derivadas para consulta académica",
    englishAlternate: EN_ROUTES.derivativeFormulas,
    faqs: [
      {
        question: "¿Cuál es la fórmula de la regla de la potencia?",
        answer: "d/dx [x^n] = n·x^(n−1), con las restricciones de dominio habituales.",
      },
      {
        question: "¿Cuál es la derivada de sin(x) y cos(x)?",
        answer: "(sin x)′ = cos x y (cos x)′ = −sin x, con x en radianes.",
      },
      {
        question: "¿Cómo derivo e^x y ln x?",
        answer: "La derivada de e^x es e^x. La de ln x es 1/x para x > 0.",
      },
      {
        question: "¿Qué fórmula uso para un producto de dos funciones?",
        answer: "(uv)′ = u′v + uv′.",
      },
      {
        question: "¿Dónde encuentro una tabla más compacta?",
        answer: "En nuestra guía de tabla de derivadas del mismo clúster temático.",
      },
    ],
    relatedPosts: [
      { title: "Reglas de derivación", href: ES_AUTHORITY_ROUTES.reglasDeDerivacion },
      { title: "Tabla de derivadas", href: ES_AUTHORITY_ROUTES.tablaDeDerivadas },
      { title: "Ejercicios de derivadas", href: ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas },
    ],
    breadcrumbLabel: "Fórmulas de derivadas",
    Content: FormulasDeDerivadasContent,
  }),
  entry({
    route: ES_AUTHORITY_ROUTES.ejemplosDeDerivadas,
    title: "Ejemplos de Derivadas Resueltos: De Básico a Avanzado",
    description:
      "Ejemplos de derivadas resueltos paso a paso en español: polinomios, producto, cociente, cadena, implícitas y parciales. Práctica con pistas y calculadora de verificación.",
    date: "9 de junio de 2026",
    dateIso: "2026-06-09",
    readTime: "17 min",
    category: "Práctica",
    tags: [
      "ejemplos de derivadas",
      "derivadas resueltas",
      "ejemplos derivadas paso a paso",
      "práctica derivadas",
    ],
    author: AUTHOR,
    heroImageAlt: "Ejemplos de derivadas resueltos para estudiantes de cálculo",
    englishAlternate: EN_ROUTES.derivativeExamples,
    faqs: [
      {
        question: "¿Cómo practico derivadas de forma efectiva?",
        answer:
          "Mezcla identificación de reglas con problemas completos y verifica cada paso con una calculadora simbólica.",
      },
      {
        question: "¿Qué debe aprender primero un principiante?",
        answer: "Regla de la potencia y linealidad antes de producto, cociente y cadena.",
      },
      {
        question: "¿Tienen ejemplos de regla de la cadena?",
        answer: "Sí, en los niveles intermedio y avanzado, con enlaces a la calculadora de cadena.",
      },
      {
        question: "¿Hay ejemplos de derivadas implícitas?",
        answer: "Sí, incluimos casos como círculos x² + y² = c con despeje de dy/dx.",
      },
      {
        question: "¿Dónde hay más ejercicios para practicar?",
        answer: "En la guía de ejercicios de derivadas y en el blog del sitio.",
      },
    ],
    relatedPosts: [
      { title: "Reglas de derivación", href: ES_AUTHORITY_ROUTES.reglasDeDerivacion },
      { title: "Ejercicios de derivadas", href: ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas },
      { title: "Fórmulas de derivadas", href: ES_AUTHORITY_ROUTES.formulasDeDerivadas },
    ],
    breadcrumbLabel: "Ejemplos de derivadas",
    Content: EjemplosDeDerivadasContent,
  }),
  entry({
    route: ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas,
    title: "Ejercicios de Derivadas: Práctica por Niveles con Soluciones",
    description:
      "Ejercicios de derivadas organizados por dificultad: potencia, trigonometría, producto, cociente, cadena, implícitas y parciales. Plan de estudio de 30 días y autoevaluación.",
    date: "9 de junio de 2026",
    dateIso: "2026-06-09",
    readTime: "19 min",
    category: "Práctica",
    tags: [
      "ejercicios de derivadas",
      "ejercicios derivadas resueltos",
      "práctica derivadas",
      "problemas de derivadas",
    ],
    author: AUTHOR,
    heroImageAlt: "Hoja de ejercicios de derivadas para preparación de exámenes",
    englishAlternate: EN_ROUTES.derivativePracticeProblems,
    faqs: [
      {
        question: "¿Cuántos ejercicios debo hacer al día?",
        answer: "Entre tres y cinco problemas variados suelen bastar si los corriges con atención al método.",
      },
      {
        question: "¿Puedo usar la calculadora mientras practico?",
        answer: "Sí, pero solo después de intentar el ejercicio; así refuerzas el reconocimiento de reglas.",
      },
      {
        question: "¿Incluyen derivadas implícitas y parciales?",
        answer: "Sí, hay secciones dedicadas si tu curso las cubre.",
      },
      {
        question: "¿Hay un plan de estudio sugerido?",
        answer: "Sí, un plan de 30 días progresivo de potencia hasta mezcla tipo examen.",
      },
      {
        question: "¿Dónde veo ejemplos resueltos completos?",
        answer: "En la guía de ejemplos de derivadas del mismo clúster.",
      },
    ],
    relatedPosts: [
      { title: "Ejemplos de derivadas", href: ES_AUTHORITY_ROUTES.ejemplosDeDerivadas },
      { title: "Tabla de derivadas", href: ES_AUTHORITY_ROUTES.tablaDeDerivadas },
      { title: "Reglas de derivación", href: ES_AUTHORITY_ROUTES.reglasDeDerivacion },
    ],
    breadcrumbLabel: "Ejercicios de derivadas",
    Content: EjerciciosDeDerivadasContent,
  }),
  entry({
    route: ES_AUTHORITY_ROUTES.tablaDeDerivadas,
    title: "Tabla de Derivadas: Hoja de Consulta Rápida",
    description:
      "Tabla de derivadas completa en español: reglas fundamentales, trigonométricas, inversas, exponenciales, logaritmos y ejemplos de cadena. Ideal para repasar antes del examen.",
    date: "9 de junio de 2026",
    dateIso: "2026-06-09",
    readTime: "14 min",
    category: "Referencia",
    tags: [
      "tabla de derivadas",
      "tabla derivadas",
      "chuleta derivadas",
      "fórmulas derivadas rápidas",
    ],
    author: AUTHOR,
    heroImageAlt: "Tabla de derivadas compacta para consulta rápida",
    englishAlternate: EN_ROUTES.derivativeCheatSheet,
    faqs: [
      {
        question: "¿Para qué sirve una tabla de derivadas?",
        answer: "Para repasar fórmulas rápidamente y localizar qué regla necesitas en cada tipo de función.",
      },
      {
        question: "¿La tabla sustituye entender las reglas?",
        answer: "No. Indica qué fórmula usar, pero debes saber cuándo aplica cada una.",
      },
      {
        question: "¿Incluye regla de la cadena?",
        answer: "Sí, en la sección de reglas fundamentales y con ejemplos instantáneos.",
      },
      {
        question: "¿Están las derivadas trigonométricas inversas?",
        answer: "Sí: arcsin, arccos y arctan con sus dominios habituales.",
      },
      {
        question: "¿Cómo verifico una fila de la tabla?",
        answer: "Introduce la función en nuestra calculadora de derivadas con pasos.",
      },
    ],
    relatedPosts: [
      { title: "Fórmulas de derivadas", href: ES_AUTHORITY_ROUTES.formulasDeDerivadas },
      { title: "Reglas de derivación", href: ES_AUTHORITY_ROUTES.reglasDeDerivacion },
      { title: "Ejercicios de derivadas", href: ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas },
    ],
    breadcrumbLabel: "Tabla de derivadas",
    Content: TablaDeDerivadasContent,
  }),
];

export function getEsAuthorityByRoute(route: string): EsAuthorityEntry | undefined {
  return ES_AUTHORITY_ENTRIES.find((e) => e.route === route);
}

export function getAllEsAuthorityRoutes(): string[] {
  return ES_AUTHORITY_ENTRIES.map((e) => e.route);
}
