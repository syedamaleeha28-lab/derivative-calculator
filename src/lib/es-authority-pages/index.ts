import type { EsAuthorityEntry } from "./types";
import { ES_AUTHORITY_ROUTES } from "../es-authority-routes";
import { EN_ROUTES } from "../en-routes";
import { esAuthorityBreadcrumbs } from "./helpers";
import { esHubBreadcrumbs } from "../common-derivative-functions/helpers";
import { ReglasDeDerivacionContent } from "./content/reglas-de-derivacion";
import { DerivadaPorDefinicionContent } from "./content/derivada-por-definicion";
import { AplicacionesDeLaDerivadaContent } from "./content/aplicaciones-de-la-derivada";
import { ReglaDeLHopitalContent } from "./content/regla-de-l-hopital";
import { FormulasDeDerivadasContent } from "./content/formulas-de-derivadas";
import { EjemplosDeDerivadasContent } from "./content/ejemplos-de-derivadas";
import { EjerciciosDeDerivadasContent } from "./content/ejercicios-de-derivadas";
import { TablaDeDerivadasContent } from "./content/tabla-de-derivadas";
import { CommonFunctionsHubContentEs } from "../common-derivative-functions/content-es";

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
  [ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes]: EN_ROUTES.commonDerivativeFunctions,
} as const;

const AUTHOR = {
  name: "Equipo Calculadora Derivadas",
  role: "Educación en cálculo diferencial",
} as const;

function entry(
  meta: Omit<EsAuthorityEntry, "breadcrumbs" | "Content"> & {
    breadcrumbLabel: string;
    Content: EsAuthorityEntry["Content"];
    breadcrumbs?: EsAuthorityEntry["breadcrumbs"];
  }
): EsAuthorityEntry {
  const { breadcrumbLabel, Content, breadcrumbs, ...rest } = meta;
  return {
    ...rest,
    breadcrumbs: breadcrumbs ?? esAuthorityBreadcrumbs(rest.route, breadcrumbLabel),
    Content,
  };
}

export const ES_AUTHORITY_ENTRIES: EsAuthorityEntry[] = [
  entry({
    route: ES_AUTHORITY_ROUTES.reglasDeDerivacion,
    title: "Reglas de Derivación: Potencia, Producto y Cadena",
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
      {
        question: "¿Qué es la derivación logarítmica y cuándo se usa?",
        answer:
          "Consiste en tomar ln de ambos lados antes de derivar. Sirve con productos, cocientes y exponentes variables, como y = x^x. Ver la sección dedicada en esta página.",
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
    route: ES_AUTHORITY_ROUTES.derivadaPorDefinicion,
    title: "Derivada por Definición: Límite del Cociente Incremental",
    description:
      "Derivada por definición explicada paso a paso: primeros principios, cociente incremental, límite h→0, método en 4 pasos y ejemplos resueltos con x², 1/x y √x.",
    date: "9 de julio de 2026",
    dateIso: "2026-07-09",
    readTime: "15 min",
    category: "Referencia",
    tags: [
      "derivada por definición",
      "primeros principios",
      "cociente incremental",
      "definición de derivada",
      "derivada por límites",
    ],
    author: AUTHOR,
    heroImageAlt: "Recta secante aproximándose a la tangente cuando h tiende a cero",
    englishAlternate: EN_ROUTES.home,
    faqs: [
      {
        question: "¿Qué es la derivada por definición?",
        answer:
          "Es calcular f′(x) directamente con el límite del cociente incremental: f′(x) = lim h→0 [f(x+h) − f(x)] / h, sin usar reglas memorizadas.",
      },
      {
        question: "¿Cuáles son los pasos para derivar por definición?",
        answer:
          "Cuatro: plantear f(x+h), restar f(x) y expandir, dividir entre h simplificando, y tomar el límite cuando h → 0.",
      },
      {
        question: "¿Por qué no puedo sustituir h = 0 directamente?",
        answer:
          "Porque el cociente daría 0/0, una indeterminación. Primero simplifica algebraicamente hasta cancelar la h del denominador y luego evalúa el límite.",
      },
      {
        question: "¿Qué hago si la función tiene una raíz cuadrada?",
        answer:
          "Multiplica numerador y denominador por el conjugado. Por ejemplo, con √x se obtiene f′(x) = 1/(2√x).",
      },
      {
        question: "¿Toda función es derivable por definición?",
        answer:
          "No. Si los límites laterales del cociente incremental no coinciden (como |x| en 0) o son infinitos, la derivada no existe en ese punto.",
      },
      {
        question: "¿Cuándo uso la definición y cuándo las reglas de derivación?",
        answer:
          "La definición se usa para entender el concepto, demostrar fórmulas y en ejercicios que la piden explícitamente; para derivar rápido se usan las reglas, que son atajos del mismo límite.",
      },
    ],
    relatedPosts: [
      { title: "Reglas de derivación", href: ES_AUTHORITY_ROUTES.reglasDeDerivacion },
      { title: "Tabla de derivadas", href: ES_AUTHORITY_ROUTES.tablaDeDerivadas },
      { title: "Derivadas de funciones comunes", href: ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes },
    ],
    breadcrumbLabel: "Derivada por definición",
    Content: DerivadaPorDefinicionContent,
  }),
  entry({
    route: ES_AUTHORITY_ROUTES.formulasDeDerivadas,
    title: "Fórmulas de Derivadas: Referencia por Función",
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
      {
        question: "¿Qué es un diferencial y en qué se distingue de una derivada?",
        answer:
          "dy/dx es la razón de cambio; dy = f′(x) dx es el cambio aproximado en y para un pequeño dx. La derivada es una función; el diferencial depende también del incremento elegido.",
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
    title: "Ejemplos de Derivadas Resueltos Paso a Paso",
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
    route: ES_AUTHORITY_ROUTES.aplicacionesDeLaDerivada,
    title: "Aplicaciones de la Derivada: Tangente, Extremos y Optimización",
    description:
      "Aplicaciones de la derivada explicadas: recta tangente, puntos críticos, máximos y mínimos, concavidad, optimización y movimiento. Con calculadoras paso a paso.",
    date: "9 de julio de 2026",
    dateIso: "2026-07-09",
    readTime: "16 min",
    category: "Referencia",
    tags: [
      "aplicaciones de la derivada",
      "máximos y mínimos",
      "optimización",
      "recta tangente",
      "concavidad",
    ],
    author: AUTHOR,
    heroImageAlt: "Curva con recta tangente, extremos y puntos de inflexión señalados",
    englishAlternate: EN_ROUTES.home,
    faqs: [
      {
        question: "¿Cuáles son las aplicaciones principales de la derivada?",
        answer:
          "Recta tangente y aproximación lineal, máximos y mínimos (optimización), monotonía, concavidad y puntos de inflexión, y análisis del movimiento (velocidad y aceleración).",
      },
      {
        question: "¿Cómo encuentro los máximos y mínimos de una función?",
        answer:
          "Resuelve f′(x) = 0 para hallar los puntos críticos y clasifícalos con el criterio de la primera derivada (cambio de signo de f′) o el de la segunda (signo de f″).",
      },
      {
        question: "¿Qué indica la segunda derivada?",
        answer:
          "La concavidad: f″ > 0 significa cóncava hacia arriba y f″ < 0 hacia abajo. Donde f″ cambia de signo hay un punto de inflexión. También clasifica puntos críticos.",
      },
      {
        question: "¿Cómo se calcula la recta tangente en un punto?",
        answer:
          "Con y = f(a) + f′(a)(x − a): evalúa la función en a para el punto de tangencia y la derivada en a para la pendiente.",
      },
      {
        question: "¿Qué relación hay entre derivada y velocidad?",
        answer:
          "Si s(t) es la posición, v(t) = s′(t) es la velocidad instantánea y a(t) = s″(t) la aceleración. La derivada es exactamente la tasa de cambio instantánea.",
      },
      {
        question: "¿Cómo resuelvo un problema de optimización paso a paso?",
        answer:
          "Expresa la magnitud a optimizar como función de una variable usando la restricción, deriva, resuelve f′ = 0, clasifica el punto crítico y responde en las unidades del problema.",
      },
    ],
    relatedPosts: [
      { title: "Calculadora de recta tangente", href: "/calculadora-recta-tangente" },
      { title: "Calculadora de puntos críticos", href: "/calculadora-puntos-criticos" },
      { title: "Calculadora de segunda derivada", href: "/calculadora-segunda-derivada" },
    ],
    breadcrumbLabel: "Aplicaciones de la derivada",
    Content: AplicacionesDeLaDerivadaContent,
  }),
  entry({
    route: ES_AUTHORITY_ROUTES.reglaDeLHopital,
    title: "Regla de L'Hôpital: Límites 0/0 e ∞/∞ Paso a Paso",
    description:
      "Regla de L'Hôpital explicada: cuándo aplicarla, formas indeterminadas 0/0 e ∞/∞, ejemplos resueltos paso a paso, relación con la derivada y errores comunes.",
    date: "9 de julio de 2026",
    dateIso: "2026-07-09",
    readTime: "14 min",
    category: "Referencia",
    tags: [
      "regla de l'hôpital",
      "regla de lhopital",
      "límites indeterminados",
      "límites 0/0",
      "límites infinito entre infinito",
    ],
    author: AUTHOR,
    heroImageAlt: "Límite indeterminado 0/0 resuelto con la regla de L'Hôpital",
    englishAlternate: EN_ROUTES.home,
    faqs: [
      {
        question: "¿Qué es la regla de L'Hôpital?",
        answer:
          "Un método para resolver límites con forma indeterminada 0/0 o ∞/∞: el límite de f(x)/g(x) es igual al límite de f′(x)/g′(x) cuando este último existe.",
      },
      {
        question: "¿Cuándo se puede aplicar la regla de L'Hôpital?",
        answer:
          "Solo si la sustitución directa da 0/0 o ∞/∞, f y g son derivables cerca del punto con g′ ≠ 0, y el límite de f′/g′ existe o es infinito.",
      },
      {
        question: "¿Se deriva con la regla del cociente?",
        answer:
          "No. Se derivan numerador y denominador por separado: f′(x)/g′(x), nunca la derivada del cociente (f/g)′.",
      },
      {
        question: "¿Se puede aplicar L'Hôpital varias veces?",
        answer:
          "Sí, mientras cada nueva evaluación siga dando 0/0 o ∞/∞. Por ejemplo, (1 − cos x)/x² requiere dos aplicaciones y da 1/2.",
      },
      {
        question: "¿Sirve para las formas 0·∞, ∞ − ∞ o 1^∞?",
        answer:
          "Sí, pero primero hay que reescribirlas como cociente 0/0 o ∞/∞, por ejemplo x·ln x = ln x / (1/x); en las exponenciales se toma logaritmo antes.",
      },
      {
        question: "¿Qué pasa si el límite de f′/g′ no existe?",
        answer:
          "La regla no concluye nada: el límite original puede existir igualmente y hay que resolverlo por otra vía, como en (x + sin x)/x, que tiende a 1.",
      },
    ],
    relatedPosts: [
      { title: "Derivada por definición", href: ES_AUTHORITY_ROUTES.derivadaPorDefinicion },
      { title: "Reglas de derivación", href: ES_AUTHORITY_ROUTES.reglasDeDerivacion },
      { title: "Aplicaciones de la derivada", href: ES_AUTHORITY_ROUTES.aplicacionesDeLaDerivada },
    ],
    breadcrumbLabel: "Regla de L'Hôpital",
    Content: ReglaDeLHopitalContent,
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
      {
        question: "¿Cuál es la derivada de e^x?",
        answer: "e^x. Consulta la subsección #derivada-de-ex en esta página o la guía dedicada.",
      },
      {
        question: "¿Cuál es la derivada de x²?",
        answer: "2x. Ver la ancla #derivada-de-x2 y la guía paso a paso enlazada desde la tabla.",
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
  entry({
    route: ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes,
    title: "Derivadas de Funciones Comunes: Tabla y Guías",
    description:
      "Consulta derivadas de x, e^x, ln x, sin x y más con tabla y guías paso a paso. Aprende cada fórmula y verifica tu procedimiento en la calculadora gratis.",
    date: "18 de junio de 2026",
    dateIso: "2026-06-18",
    readTime: "20 min",
    category: "Referencia",
    tags: [
      "derivadas de funciones comunes",
      "tabla de derivadas",
      "fórmulas de derivadas",
      "funciones comunes",
    ],
    author: AUTHOR,
    heroImageAlt: "Tabla completa de derivadas de funciones comunes",
    englishAlternate: EN_ROUTES.commonDerivativeFunctions,
    faqs: [
      {
        question: "¿Cuáles son las derivadas más comunes en cálculo?",
        answer: "x, x², √x, e^x, ln x, sin x, cos x y tan x aparecen en casi todos los cursos.",
      },
      {
        question: "¿Dónde encuentro la tabla completa?",
        answer: "En esta página: algebraicas, trigonométricas, logarítmicas, exponenciales e inversas.",
      },
      {
        question: "¿Cómo practico después de consultar la tabla?",
        answer: "Abre la guía de cada función para ver un ejemplo resuelto y verifica en la calculadora.",
      },
      {
        question: "¿Incluye funciones trigonométricas inversas?",
        answer: "Sí: arcsin, arccos, arctan, arccot, arcsec y arccsc con sus fórmulas estándar.",
      },
    ],
    relatedPosts: [
      { title: "Derivada de x", href: "/derivada-de-x" },
      { title: "Derivada de sin(x)", href: "/derivada-de-sin-x" },
      { title: "Reglas de derivación", href: ES_AUTHORITY_ROUTES.reglasDeDerivacion },
    ],
    breadcrumbLabel: "Derivadas de funciones comunes",
    breadcrumbs: esHubBreadcrumbs(),
    Content: CommonFunctionsHubContentEs,
  }),
];

export function getEsAuthorityByRoute(route: string): EsAuthorityEntry | undefined {
  return ES_AUTHORITY_ENTRIES.find((e) => e.route === route);
}

export function getAllEsAuthorityRoutes(): string[] {
  return ES_AUTHORITY_ENTRIES.map((e) => e.route);
}
