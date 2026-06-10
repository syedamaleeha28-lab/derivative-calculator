import { ES_CALCULATOR_ROUTES } from "../es-routes";
import { EN_ROUTES } from "../en-routes";
import { ROUTES } from "../routes";
import type { CalculatorPageConfig } from "../calculator-pages/types";
import {
  productRulePage,
  quotientRulePage,
  secondDerivativePage,
  higherOrderDerivativePage,
  tangentLinePage,
  criticalPointsPage,
} from "./expansion-calculators";

const BREADCRUMB_HOME = { label: "Inicio", path: ROUTES.home };

const SHARED_LINKS = [
  { label: "Reglas de derivación", href: ROUTES.reglas },
  { label: "Ejemplos de derivadas resueltas", href: ROUTES.ejemplos },
  { label: "Blog de cálculo diferencial", href: ROUTES.blog },
  { label: "English version", href: EN_ROUTES.home },
];

export const ES_CALCULATOR_PAGES: Record<string, CalculatorPageConfig> = {
  partialDerivatives: {
    slug: "calculadora-de-derivadas-parciales",
    path: ES_CALCULATOR_ROUTES.partialDerivatives,
    h1: "Calculadora de Derivadas Parciales con Pasos Online",
    tag: "Herramienta Académica Gratuita",
    intro: [
      "Esta calculadora de derivadas parciales te permite calcular ∂f/∂x, ∂f/∂y y otras derivadas respecto a una variable, manteniendo las demás constantes. Es ideal para cálculo multivariable, ingeniería y modelos con más de una incógnita.",
      "Introduce tu función, elige la variable de derivación en opciones avanzadas y obtén el resultado simbólico con el desglose paso a paso. Comprueba tus ejercicios de clase antes del examen.",
    ],
    meta: {
      title: "Calculadora Derivadas Parciales con Pasos Online Gratis",
      description:
        "Calculadora de derivadas parciales gratis con pasos. Resuelve ∂f/∂x y ∂f/∂y en funciones multivariable. Ideal para cálculo e ingeniería.",
      keywords:
        "calculadora de derivadas parciales, derivadas parciales calculadora, calculadora derivadas parciales online, ∂f/∂x calculadora, cálculo multivariable online",
    },
    defaultExamples: ["x^2*y + y^3", "sin(x*y)", "x*exp(y)", "x^2 + y^2"],
    defaultVariable: "x",
    examples: [
      {
        title: "Polinomio en: x²y + y³",
        problem: "Calcular ∂/∂x [x²y + y³]",
        steps: [
          "Al derivar respecto a x, tratamos y e y³ como constantes.",
          "∂/∂x[x²y] = 2x·y aplicando la regla de la potencia.",
          "∂/∂x[y³] = 0 porque no depende de x.",
        ],
        result: "2xy",
      },
      {
        title: "Producto trigonométrico",
        problem: "Hallar ∂/∂y [sin(xy)]",
        steps: [
          "Regla de la cadena: derivada exterior cos(xy).",
          "Derivada interior respecto a y: ∂/∂y[xy] = x.",
          "Resultado: x·cos(xy).",
        ],
        result: "x·cos(xy)",
      },
      {
        title: "Exponencial en y",
        problem: "Calcular ∂/∂x [x·e^y]",
        steps: [
          "e^y es constante respecto a x.",
          "∂/∂x[x] = 1, entonces queda e^y.",
        ],
        result: "e^y",
      },
    ],
    faqs: [
      {
        q: "¿Qué es una derivada parcial?",
        a: "Es la derivada de una función de varias variables respecto a una sola variable, manteniendo fijas las demás. Se nota ∂f/∂x o f_x.",
      },
      {
        q: "¿Cómo elijo la variable en la calculadora?",
        a: "Abre Opciones Avanzadas y escribe x, y, t u otra letra presente en tu expresión.",
      },
      {
        q: "¿Sirve para cálculo de ingeniería?",
        a: "Sí. Las derivadas parciales aparecen en gradientes, optimización, termodinámica y modelos multivariable de ingeniería.",
      },
      {
        q: "¿Puedo calcular segundas derivadas parciales?",
        a: "Deriva el resultado obtenido respecto a la misma u otra variable. Repite el proceso con la expresión simplificada.",
      },
    ],
    relatedCalculators: [
      {
        label: "Calculadora de derivadas",
        href: ROUTES.home,
        description: "Derivadas ordinarias con pasos detallados.",
      },
      {
        label: "Calculadora regla de la cadena",
        href: ES_CALCULATOR_ROUTES.chainRule,
        description: "Funciones compuestas y composiciones anidadas.",
      },
      {
        label: "Calculadora derivadas implícitas",
        href: ES_CALCULATOR_ROUTES.implicitDerivatives,
        description: "Ecuaciones donde y no está despejada.",
      },
    ],
    internalLinks: [
      { label: "Ejemplos de derivadas parciales", href: "/blog/derivadas-parciales-ejemplos" },
      { label: "Reglas de derivación", href: ROUTES.reglas },
      { label: "Partial derivative calculator (English)", href: EN_ROUTES.partialDerivativeCalculator },
      ...SHARED_LINKS,
    ],
    educationalSections: [
      {
        h2: "Notación de derivadas parciales en cálculo multivariable",
        paragraphs: [
          "Las derivadas parciales miden la tasa de cambio en una dirección del espacio de variables. Si f(x,y) = x² + xy, entonces ∂f/∂x = 2x + y y ∂f/∂y = x.",
          "En física e ingeniería, el gradiente ∇f agrupa todas las derivadas parciales y apunta hacia la mayor tasa de crecimiento de la función.",
        ],
      },
      {
        h2: "Cómo practicar derivadas parciales con esta herramienta",
        paragraphs: [
          "Empieza con polinomios en dos variables antes de mezclar trigonométricas o exponenciales. Pregúntate siempre: ¿qué letras trato como constantes en esta derivada?",
          "Contrasta tu resultado manual con los pasos automáticos para detectar errores de signo o de regla de la cadena incompleta.",
        ],
      },
    ],
    breadcrumbHome: BREADCRUMB_HOME,
  },

  chainRule: {
    slug: "calculadora-regla-de-la-cadena",
    path: ES_CALCULATOR_ROUTES.chainRule,
    h1: "Calculadora Regla de la Cadena con Pasos Online",
    tag: "Herramienta Académica Gratuita",
    intro: [
      "La regla de la cadena es esencial para derivar funciones compuestas: aquellas formadas por una función exterior aplicada a una interior. Esta calculadora regla de la cadena identifica la estructura anidada y aplica el procedimiento automáticamente.",
      "Desde sin(3x) hasta ln(x²+1) o (2x+1)⁵, la mayoría de ejercicios avanzados de primer curso requieren reconocer capas externa e interna antes de derivar.",
    ],
    meta: {
      title: "Calculadora Regla de la Cadena con Pasos Online Gratis",
      description:
        "Calculadora regla de la cadena gratis con pasos. Deriva sin(2x), ln(x²+1) y funciones compuestas online. Prueba ejemplos y verifica resultados.",
      keywords:
        "calculadora regla de la cadena, regla de la cadena calculadora, derivar funciones compuestas online, regla de la cadena paso a paso, cálculo diferencial online",
    },
    defaultExamples: ["sin(2*x)", "ln(x^2+1)", "(3*x+1)^5", "e^(sin(x))"],
    examples: [
      {
        title: "Seno con argumento lineal",
        problem: "Derivar f(x) = sin(3x)",
        steps: [
          "Función exterior: sin(u), interior: u = 3x.",
          "Derivada exterior: cos(3x).",
          "Derivada interior: 3. Producto final: 3cos(3x).",
        ],
        result: "3cos(3x)",
      },
      {
        title: "Logaritmo de un polinomio",
        problem: "Calcular d/dx [ln(x² + 1)]",
        steps: [
          "Exterior ln(u), interior u = x² + 1.",
          "Derivada: (1/u)·2x = 2x/(x²+1).",
        ],
        result: "2x/(x²+1)",
      },
      {
        title: "Potencia de binomio",
        problem: "Derivar (2x − 5)⁴",
        steps: [
          "Exterior u⁴, interior u = 2x − 5.",
          "4(2x−5)³ · 2 = 8(2x−5)³.",
        ],
        result: "8(2x−5)³",
      },
    ],
    faqs: [
      {
        q: "¿Cuándo debo usar la regla de la cadena?",
        a: "Siempre que puedas describir la función como «algo dentro de algo»: sin(…), ln(…), e^(…), (…)^n.",
      },
      {
        q: "¿Cuál es el error más común con la regla de la cadena?",
        a: "Olvidar multiplicar por la derivada de la función interior. Completa siempre ese paso.",
      },
      {
        q: "¿Se combina con la regla del producto?",
        a: "Sí. En productos de funciones compuestas aplica primero el producto e inserta la cadena en cada factor.",
      },
      {
        q: "¿Dónde practico más ejercicios?",
        a: "Visita nuestro artículo sobre regla de la cadena y la sección de ejemplos resueltos.",
      },
    ],
    relatedCalculators: [
      {
        label: "Calculadora de derivadas",
        href: ROUTES.home,
        description: "Herramienta general para todo tipo de funciones.",
      },
      {
        label: "Derivadas implícitas",
        href: ES_CALCULATOR_ROUTES.implicitDerivatives,
        description: "La derivación implícita depende de la cadena.",
      },
      {
        label: "Derivadas parciales",
        href: ES_CALCULATOR_ROUTES.partialDerivatives,
        description: "Cálculo multivariable con pasos.",
      },
    ],
    internalLinks: [
      { label: "Entendiendo la regla de la cadena", href: "/blog/entendiendo-regla-de-la-cadena" },
      { label: "Ejercicios de regla de la cadena", href: "/blog/regla-de-la-cadena-ejercicios" },
      { label: "Chain rule calculator (English)", href: EN_ROUTES.chainRuleCalculator },
      ...SHARED_LINKS,
    ],
    educationalSections: [
      {
        h2: "Identificar función exterior e interior",
        paragraphs: [
          "Escribe h(x) = f(g(x)). En cos(x²), f = cos y g = x². Nombrar las capas antes de derivar evita omitir factores.",
          "Trabaja de fuera hacia dentro: deriva la capa externa, conserva la interna intacta y multiplica por g′(x).",
        ],
      },
      {
        h2: "Patrones frecuentes en exámenes universitarios",
        paragraphs: [
          "Memoriza atajos: (sin(ax))′ = a·cos(ax), (e^(kx))′ = k·e^(kx), (ln(g(x)))′ = g′(x)/g(x).",
          "Usa esta calculadora para verificar cada patrón durante tus sesiones de repaso.",
        ],
      },
    ],
    breadcrumbHome: BREADCRUMB_HOME,
  },

  implicitDerivatives: {
    slug: "calculadora-de-derivadas-implicitas",
    path: ES_CALCULATOR_ROUTES.implicitDerivatives,
    h1: "Calculadora de Derivadas Implícitas con Pasos Online",
    tag: "Herramienta Académica Gratuita",
    intro: [
      "La derivación implícita permite hallar dy/dx cuando y no está despejada explícitamente, como en círculos x² + y² = r² o relaciones trigonométricas mixtas. Esta calculadora de derivadas implícitas aplica la regla de la cadena en cada término con y.",
      "En lugar de despejar y primero, deriva ambos lados respecto a x, trata y como y(x) y despeja dy/dx. La herramienta automatiza el álgebra simbólico y muestra el razonamiento.",
    ],
    meta: {
      title: "Calculadora Derivadas Implícitas con Pasos Online Gratis",
      description:
        "Calculadora de derivadas implícitas gratis con pasos. Deriva x²+y²=r² y encuentra dy/dx con procedimiento completo. Empieza a calcular ahora.",
      keywords:
        "calculadora de derivadas implícitas, derivadas implícitas calculadora, dy/dx implícita, derivación implícita online, calculadora derivadas implícitas paso a paso",
    },
    defaultExamples: ["x^2 + y^2", "x*y + x", "sin(x*y)", "x^3 + y^3 - 3*x*y"],
    examples: [
      {
        title: "Circunferencia",
        problem: "Dada x² + y² = 25, hallar dy/dx",
        steps: [
          "Derivamos ambos lados respecto a x.",
          "2x + 2y·dy/dx = 0.",
          "Despejamos: dy/dx = −x/y.",
        ],
        result: "−x/y",
      },
      {
        title: "Producto con y implícita",
        problem: "Encontrar dy/dx si x·y + x = 1",
        steps: [
          "Regla del producto en x·y: y + x·dy/dx.",
          "Sumamos la derivada de x (+1) e igualamos a 0.",
          "dy/dx = −(y+1)/x.",
        ],
        result: "−(y+1)/x",
      },
      {
        title: "Relación trigonométrica",
        problem: "Derivar implícitamente sin(xy) = x",
        steps: [
          "Cadena en sin(xy): cos(xy)·d/dx[xy].",
          "Interior: y + x·dy/dx.",
          "Igualar a 1 y despejar dy/dx.",
        ],
        result: "(1 − y·cos(xy)) / (x·cos(xy))",
      },
    ],
    faqs: [
      {
        q: "¿Cuándo necesito derivación implícita?",
        a: "Cuando y no se puede aislar fácilmente o la ecuación mezcla x e y de forma natural, como en cónicas y curvas de nivel.",
      },
      {
        q: "¿Por qué aparece dy/dx al derivar y?",
        a: "Porque y depende de x. Cada término con y requiere la regla de la cadena y aporta un factor dy/dx.",
      },
      {
        q: "¿Funciona con ecuaciones trigonométricas?",
        a: "Sí. Introduce sin(y), cos(xy) u otras composiciones usando paréntesis claros.",
      },
      {
        q: "¿Hay una guía completa en el blog?",
        a: "Sí, consulta nuestro artículo de derivadas implícitas paso a paso enlazado abajo.",
      },
    ],
    relatedCalculators: [
      {
        label: "Regla de la cadena",
        href: ES_CALCULATOR_ROUTES.chainRule,
        description: "Técnica base de la derivación implícita.",
      },
      {
        label: "Calculadora de derivadas",
        href: ROUTES.home,
        description: "Funciones explícitas y reglas estándar.",
      },
      {
        label: "Derivadas parciales",
        href: ES_CALCULATOR_ROUTES.partialDerivatives,
        description: "Funciones de varias variables.",
      },
    ],
    internalLinks: [
      { label: "Derivadas implícitas paso a paso", href: "/blog/derivadas-implicitas-paso-a-paso" },
      { label: "Calculadora regla de la cadena", href: ES_CALCULATOR_ROUTES.chainRule },
      { label: "Implicit differentiation calculator (English)", href: EN_ROUTES.implicitDifferentiationCalculator },
      ...SHARED_LINKS,
    ],
    educationalSections: [
      {
        h2: "Procedimiento de derivación implícita",
        paragraphs: [
          "Paso 1: Deriva cada término respecto a x. Paso 2: Aplica la cadena en términos con y. Paso 3: Agrupa los términos con dy/dx. Paso 4: Despeja dy/dx.",
          "Este método evita álgebra pesada al despejar y y funciona aunque no exista forma explícita global.",
        ],
      },
      {
        h2: "Errores típicos al derivar implícitamente",
        paragraphs: [
          "Olvidar el factor dy/dx al derivar y^n es el fallo más frecuente. Otro es tratar y como constante.",
          "Si el enunciado pide la pendiente en un punto, sustituye (x₀, y₀) después de obtener dy/dx.",
        ],
      },
    ],
    breadcrumbHome: BREADCRUMB_HOME,
  },

  productRule: productRulePage,
  quotientRule: quotientRulePage,
  secondDerivative: secondDerivativePage,
  higherOrderDerivative: higherOrderDerivativePage,
  tangentLine: tangentLinePage,
  criticalPoints: criticalPointsPage,
};

export const ES_PAGE_LIST = Object.values(ES_CALCULATOR_PAGES);

export function getEsPageByPath(path: string): CalculatorPageConfig | undefined {
  return ES_PAGE_LIST.find((p) => p.path === path);
}
