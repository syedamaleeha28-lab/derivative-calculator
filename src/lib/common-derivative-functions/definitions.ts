import type { CommonFunctionPageDef } from "./types";
import {
  EN_COMMON_FUNCTION_SLUGS,
  ES_COMMON_FUNCTION_ROUTES,
} from "./routes";

const AUTHOR_ES = {
  name: "Calculadora Derivadas Team",
  role: "Educación en cálculo diferencial",
} as const;

const AUTHOR_EN = {
  name: "Derivative Calculator Team",
  role: "Calculus education in English",
} as const;

export const COMMON_FUNCTION_AUTHOR_ES = AUTHOR_ES;
export const COMMON_FUNCTION_AUTHOR_EN = AUTHOR_EN;

export const COMMON_FUNCTION_PAGE_DEFS: CommonFunctionPageDef[] = [
  {
    id: "x",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfX,
    relatedIds: ["x-cuadrado", "x-cubo", "raiz"],
    es: {
      title: "Derivada de x: Fórmula, Ejemplo Paso a Paso y Explicación",
      description:
        "Aprende la derivada de x paso a paso. Fórmula (x)′ = 1, ejemplo resuelto con la definición por límites, interpretación geométrica y preguntas frecuentes.",
      breadcrumbLabel: "Derivada de x",
      category: "Funciones algebraicas",
      tags: ["derivada de x", "derivada lineal", "cálculo diferencial"],
      heroImageAlt: "Recta y = x con pendiente constante 1",
      intro:
        "La derivada de x respecto a x es 1. Es el caso más simple de la regla de la potencia y la base para entender por qué las rectas y = mx tienen pendiente constante m.",
      formulaTitle: "Fórmula principal",
      formulaLatex: "\\dfrac{d}{dx}\\,x = 1",
      formulaExplanation:
        "La función f(x) = x es lineal con pendiente 1. Al medir la tasa de cambio instantánea en cualquier punto, siempre obtienes 1: la gráfica sube una unidad vertical por cada unidad horizontal.",
      exampleTitle: "Ejemplo: definición por límites",
      exampleSteps: [
        "Escribe f(x) = x y f(x+h) = x + h.",
        "Forma el cociente incremental: [f(x+h) − f(x)] / h = h/h = 1.",
        "Toma el límite cuando h → 0: el cociente ya es 1, así que f′(x) = 1.",
      ],
      exampleLatex: "f'(x)=\\lim_{h\\to 0}\\dfrac{(x+h)-x}{h}=1",
      faqs: [
        { question: "¿Cuál es la derivada de x?", answer: "La derivada de x es 1 en todo el dominio ℝ." },
        { question: "¿Por qué la derivada de x es 1?", answer: "Porque la pendiente de la recta y = x es 1 en todos los puntos." },
        { question: "¿Cómo derivo 5x?", answer: "Usa la linealidad: (5x)′ = 5·(x)′ = 5." },
      ],
    },
    en: {
      title: "Derivative of x: Formula, Step-by-Step Example, and Explanation",
      description:
        "Learn the derivative of x step by step. Formula d/dx(x) = 1, limit-definition example, geometric meaning, and FAQ.",
      breadcrumbLabel: "Derivative of x",
      category: "Algebraic functions",
      tags: ["derivative of x", "linear derivative", "calculus"],
      heroImageAlt: "Line y = x with constant slope 1",
      intro:
        "The derivative of x with respect to x is 1. It is the simplest power-rule case and shows why lines y = mx have constant slope m.",
      formulaTitle: "Core formula",
      formulaLatex: "\\dfrac{d}{dx}\\,x = 1",
      formulaExplanation:
        "f(x) = x is linear with slope 1. The instantaneous rate of change is 1 everywhere: the graph rises one unit vertically per unit horizontally.",
      exampleTitle: "Worked example: limit definition",
      exampleSteps: [
        "Let f(x) = x, so f(x+h) = x + h.",
        "Difference quotient: [f(x+h) − f(x)] / h = h/h = 1.",
        "Limit as h → 0: the quotient is already 1, so f′(x) = 1.",
      ],
      exampleLatex: "f'(x)=\\lim_{h\\to 0}\\dfrac{(x+h)-x}{h}=1",
      faqs: [
        { question: "What is the derivative of x?", answer: "d/dx(x) = 1 for all real x." },
        { question: "Why is the derivative of x equal to 1?", answer: "Because the slope of y = x is 1 at every point." },
        { question: "How do I differentiate 5x?", answer: "Use linearity: (5x)′ = 5·(x)′ = 5." },
      ],
    },
  },
  {
    id: "x-cuadrado",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeXCuadrado,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfXSquared,
    relatedIds: ["x", "x-cubo", "raiz"],
    es: {
      title: "Derivada de x²: Regla de la Potencia con Ejemplo Resuelto",
      description:
        "Derivada de x al cuadrado paso a paso: fórmula (x²)′ = 2x, demostración con límites, interpretación de la parábola y FAQ.",
      breadcrumbLabel: "Derivada de x²",
      category: "Funciones algebraicas",
      tags: ["derivada de x cuadrado", "regla de la potencia", "derivada de x²"],
      heroImageAlt: "Parábola x² y su pendiente 2x",
      intro:
        "La derivada de x² es 2x. Es el ejemplo canónico de la regla de la potencia y conecta la geometría de la parábola con una función lineal de pendiente.",
      formulaTitle: "Regla de la potencia",
      formulaLatex: "\\dfrac{d}{dx}\\,x^2 = 2x",
      formulaExplanation:
        "Con n = 2 en d/dx x^n = n x^(n−1), bajas el exponente como coeficiente (2) y reduces el exponente en uno: 2x^(2−1) = 2x.",
      exampleTitle: "Ejemplo: cociente incremental",
      exampleSteps: [
        "Calcula f(x+h) − f(x) = (x+h)² − x² = 2xh + h².",
        "Divide entre h: 2x + h.",
        "Haz h → 0 para obtener f′(x) = 2x.",
      ],
      exampleLatex: "\\lim_{h\\to 0}\\dfrac{(x+h)^2-x^2}{h}=2x",
      faqs: [
        { question: "¿Cuál es la derivada de x²?", answer: "(x²)′ = 2x." },
        { question: "¿Cómo se usa la regla de la potencia?", answer: "Para x^n, multiplica por n y resta 1 al exponente: n·x^(n−1)." },
        { question: "¿Cuál es la derivada de 3x²?", answer: "(3x²)′ = 6x por linealidad." },
      ],
    },
    en: {
      title: "Derivative of x²: Power Rule with Step-by-Step Example",
      description:
        "Derivative of x squared explained: (x²)′ = 2x, limit proof, parabola interpretation, and FAQ.",
      breadcrumbLabel: "Derivative of x²",
      category: "Algebraic functions",
      tags: ["derivative of x squared", "power rule", "derivative of x^2"],
      heroImageAlt: "Parabola x² and slope function 2x",
      intro:
        "The derivative of x² is 2x—the classic power-rule example linking parabola geometry to a linear slope function.",
      formulaTitle: "Power rule",
      formulaLatex: "\\dfrac{d}{dx}\\,x^2 = 2x",
      formulaExplanation:
        "With n = 2 in d/dx x^n = n x^(n−1), bring down 2 as the coefficient and reduce the exponent: 2x^(2−1) = 2x.",
      exampleTitle: "Worked example: difference quotient",
      exampleSteps: [
        "Compute f(x+h) − f(x) = (x+h)² − x² = 2xh + h².",
        "Divide by h: 2x + h.",
        "Let h → 0 to get f′(x) = 2x.",
      ],
      exampleLatex: "\\lim_{h\\to 0}\\dfrac{(x+h)^2-x^2}{h}=2x",
      faqs: [
        { question: "What is the derivative of x²?", answer: "d/dx(x²) = 2x." },
        { question: "How does the power rule work?", answer: "For x^n, multiply by n and subtract 1 from the exponent." },
        { question: "What is the derivative of 3x²?", answer: "(3x²)′ = 6x by linearity." },
      ],
    },
  },
  {
    id: "x-cubo",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeXCubo,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfXCubed,
    relatedIds: ["x-cuadrado", "x", "raiz"],
    es: {
      title: "Derivada de x³: Fórmula 3x² con Ejemplo Paso a Paso",
      description:
        "Derivada de x al cubo explicada: (x³)′ = 3x², ejemplo con regla de la potencia, aplicación en polinomios y preguntas frecuentes.",
      breadcrumbLabel: "Derivada de x³",
      category: "Funciones algebraicas",
      tags: ["derivada de x cubo", "derivada de x³", "regla de la potencia"],
      heroImageAlt: "Curva cúbica y pendiente 3x²",
      intro:
        "La derivada de x³ es 3x². Aplicar la regla de la potencia con n = 3 es directo y prepara el terreno para derivar polinomios término a término.",
      formulaTitle: "Regla de la potencia (n = 3)",
      formulaLatex: "\\dfrac{d}{dx}\\,x^3 = 3x^2",
      formulaExplanation:
        "El exponente 3 baja como factor y el nuevo exponente es 3 − 1 = 2. El dominio es ℝ y la fórmula coincide con la definición por límites.",
      exampleTitle: "Ejemplo: expandir (x+h)³",
      exampleSteps: [
        "f(x+h) − f(x) = (x+h)³ − x³ = 3x²h + 3xh² + h³.",
        "Divide entre h: 3x² + 3xh + h².",
        "Límite h → 0: f′(x) = 3x².",
      ],
      exampleLatex: "\\dfrac{d}{dx}x^3 = 3x^2",
      faqs: [
        { question: "¿Cuál es la derivada de x³?", answer: "(x³)′ = 3x²." },
        { question: "¿Cómo derivo x⁴?", answer: "(x⁴)′ = 4x³ con la misma regla." },
        { question: "¿Cuál es la derivada de x³ + 2x?", answer: "3x² + 2 por linealidad." },
      ],
    },
    en: {
      title: "Derivative of x³: Formula 3x² with Step-by-Step Example",
      description:
        "Derivative of x cubed: (x³)′ = 3x², power-rule walkthrough, polynomial applications, and FAQ.",
      breadcrumbLabel: "Derivative of x³",
      category: "Algebraic functions",
      tags: ["derivative of x cubed", "derivative of x^3", "power rule"],
      heroImageAlt: "Cubic curve and slope 3x²",
      intro:
        "The derivative of x³ is 3x². Applying the power rule with n = 3 is straightforward and extends to any polynomial term.",
      formulaTitle: "Power rule (n = 3)",
      formulaLatex: "\\dfrac{d}{dx}\\,x^3 = 3x^2",
      formulaExplanation:
        "Bring down 3 as the coefficient; the new exponent is 3 − 1 = 2. Valid on ℝ and matches the limit definition.",
      exampleTitle: "Worked example: expand (x+h)³",
      exampleSteps: [
        "f(x+h) − f(x) = (x+h)³ − x³ = 3x²h + 3xh² + h³.",
        "Divide by h: 3x² + 3xh + h².",
        "Limit h → 0: f′(x) = 3x².",
      ],
      exampleLatex: "\\dfrac{d}{dx}x^3 = 3x^2",
      faqs: [
        { question: "What is the derivative of x³?", answer: "d/dx(x³) = 3x²." },
        { question: "How do I differentiate x⁴?", answer: "d/dx(x⁴) = 4x³ using the same rule." },
        { question: "What is the derivative of x³ + 2x?", answer: "3x² + 2 by linearity." },
      ],
    },
  },
  {
    id: "raiz",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeRaizCuadradaDeX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfSquareRootX,
    relatedIds: ["x-cuadrado", "x-cubo", "ln"],
    es: {
      title: "Derivada de √x: Fórmula 1/(2√x) Explicada con Ejemplo",
      description:
        "Derivada de la raíz cuadrada de x paso a paso: (√x)′ = 1/(2√x), dominio x > 0, regla de la potencia con exponente 1/2 y FAQ.",
      breadcrumbLabel: "Derivada de √x",
      category: "Funciones algebraicas",
      tags: ["derivada de raíz cuadrada", "derivada de √x", "exponente fraccionario"],
      heroImageAlt: "Gráfica de √x y pendiente decreciente",
      intro:
        "La derivada de √x es 1/(2√x) para x > 0. Escribe √x = x^(1/2) y aplica la regla de la potencia con exponente fraccionario.",
      formulaTitle: "Forma con exponente 1/2",
      formulaLatex: "\\dfrac{d}{dx}\\,\\sqrt{x} = \\dfrac{1}{2\\sqrt{x}}, \\quad x > 0",
      formulaExplanation:
        "d/dx x^(1/2) = (1/2) x^(−1/2) = 1/(2√x). El dominio excluye x = 0 porque la raíz no es diferenciable en el origen desde la derecha con la definición estándar en ℝ⁺.",
      exampleTitle: "Ejemplo: regla de la potencia",
      exampleSteps: [
        "Reescribe f(x) = √x como x^(1/2).",
        "Aplica d/dx x^n = n x^(n−1) con n = 1/2.",
        "Obtén (1/2) x^(−1/2) = 1/(2√x).",
      ],
      exampleLatex: "\\dfrac{d}{dx}x^{1/2}=\\tfrac{1}{2}x^{-1/2}",
      faqs: [
        { question: "¿Cuál es la derivada de √x?", answer: "1/(2√x) para x > 0." },
        { question: "¿Por qué x debe ser positivo?", answer: "√x en cálculo elemental se define en x ≥ 0; la derivada clásica usa x > 0." },
        { question: "¿Cómo derivo √(3x+1)?", answer: "Regla de la cadena: (3x+1)^(−1/2) · 3/2." },
      ],
    },
    en: {
      title: "Derivative of √x: Formula 1/(2√x) with Step-by-Step Example",
      description:
        "Derivative of square root of x: (√x)′ = 1/(2√x), domain x > 0, fractional power rule, and FAQ.",
      breadcrumbLabel: "Derivative of √x",
      category: "Algebraic functions",
      tags: ["derivative of square root x", "derivative of sqrt x", "fractional exponent"],
      heroImageAlt: "Square root graph with decreasing slope",
      intro:
        "The derivative of √x is 1/(2√x) for x > 0. Write √x = x^(1/2) and apply the power rule with a fractional exponent.",
      formulaTitle: "Exponent 1/2 form",
      formulaLatex: "\\dfrac{d}{dx}\\,\\sqrt{x} = \\dfrac{1}{2\\sqrt{x}}, \\quad x > 0",
      formulaExplanation:
        "d/dx x^(1/2) = (1/2) x^(−1/2) = 1/(2√x). The domain excludes x = 0 where the square root is not differentiable in the standard ℝ⁺ setup.",
      exampleTitle: "Worked example: power rule",
      exampleSteps: [
        "Rewrite f(x) = √x as x^(1/2).",
        "Apply d/dx x^n = n x^(n−1) with n = 1/2.",
        "Get (1/2) x^(−1/2) = 1/(2√x).",
      ],
      exampleLatex: "\\dfrac{d}{dx}x^{1/2}=\\tfrac{1}{2}x^{-1/2}",
      faqs: [
        { question: "What is the derivative of √x?", answer: "d/dx(√x) = 1/(2√x) for x > 0." },
        { question: "Why must x be positive?", answer: "Elementary √x is defined for x ≥ 0; the classical derivative uses x > 0." },
        { question: "How do I differentiate √(3x+1)?", answer: "Chain rule: (3/2)(3x+1)^(−1/2)." },
      ],
    },
  },
  {
    id: "e-x",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeEElevadoAX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfEToTheX,
    relatedIds: ["ln", "x", "sin"],
    es: {
      title: "Derivada de e^x: Por Qué es Igual a e^x (Ejemplo Resuelto)",
      description:
        "Derivada de e elevado a x paso a paso: (e^x)′ = e^x, interpretación de crecimiento exponencial, regla de la cadena y FAQ.",
      breadcrumbLabel: "Derivada de e^x",
      category: "Funciones exponenciales",
      tags: ["derivada de e^x", "exponencial natural", "número e"],
      heroImageAlt: "Curva exponencial e^x y su pendiente",
      intro:
        "La derivada de e^x es ella misma: e^x. Esa propiedad define al número e y hace que las exponenciales naturales sean centrales en ecuaciones diferenciales y modelos de crecimiento.",
      formulaTitle: "Exponencial natural",
      formulaLatex: "\\dfrac{d}{dx}\\,e^x = e^x",
      formulaExplanation:
        "El número e se elige para que la pendiente de e^x en x = 0 sea 1. Por eso la tasa de cambio de e^x coincide con su valor en cada punto.",
      exampleTitle: "Ejemplo: regla de la cadena con e^(3x)",
      exampleSteps: [
        "Sea g(x) = e^(3x). Identifica exterior e^u con u = 3x.",
        "La derivada exterior es e^u; la interior es u′ = 3.",
        "Resultado: g′(x) = e^(3x) · 3 = 3e^(3x).",
      ],
      exampleLatex: "\\dfrac{d}{dx}e^{3x}=3e^{3x}",
      faqs: [
        { question: "¿Cuál es la derivada de e^x?", answer: "(e^x)′ = e^x para todo x real." },
        { question: "¿Cómo derivo e^(2x)?", answer: "2e^(2x) por la regla de la cadena." },
        { question: "¿Cuál es la derivada de a^x?", answer: "a^x ln(a); solo e^x tiene la misma base y exponente en la derivada." },
      ],
    },
    en: {
      title: "Derivative of e^x: Why It Equals Itself (Step-by-Step Example)",
      description:
        "Derivative of e to the x: (e^x)′ = e^x, exponential growth meaning, chain rule example, and FAQ.",
      breadcrumbLabel: "Derivative of e^x",
      category: "Exponential functions",
      tags: ["derivative of e^x", "natural exponential", "Euler's number"],
      heroImageAlt: "Exponential curve e^x and its slope",
      intro:
        "The derivative of e^x is itself: e^x. That property defines Euler's number and makes natural exponentials central in differential equations.",
      formulaTitle: "Natural exponential",
      formulaLatex: "\\dfrac{d}{dx}\\,e^x = e^x",
      formulaExplanation:
        "e is chosen so the slope of e^x at x = 0 is 1. The rate of change of e^x equals its value at every point.",
      exampleTitle: "Worked example: chain rule for e^(3x)",
      exampleSteps: [
        "Let g(x) = e^(3x). Outer function e^u with u = 3x.",
        "Outer derivative e^u; inner derivative u′ = 3.",
        "Result: g′(x) = 3e^(3x).",
      ],
      exampleLatex: "\\dfrac{d}{dx}e^{3x}=3e^{3x}",
      faqs: [
        { question: "What is the derivative of e^x?", answer: "d/dx(e^x) = e^x for all real x." },
        { question: "How do I differentiate e^(2x)?", answer: "2e^(2x) by the chain rule." },
        { question: "What is the derivative of a^x?", answer: "a^x ln(a); only e^x reproduces itself." },
      ],
    },
  },
  {
    id: "ln",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeLnX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfLnX,
    relatedIds: ["e-x", "log", "raiz"],
    es: {
      title: "Derivada de ln(x): Fórmula 1/x con Ejemplo Paso a Paso",
      description:
        "Derivada del logaritmo natural ln x: (ln x)′ = 1/x, dominio x > 0, derivación implícita inversa de e^x y preguntas frecuentes.",
      breadcrumbLabel: "Derivada de ln(x)",
      category: "Funciones logarítmicas",
      tags: ["derivada de ln x", "logaritmo natural", "derivada logarítmica"],
      heroImageAlt: "Curva ln x y pendiente 1/x",
      intro:
        "La derivada de ln(x) es 1/x para x > 0. Es el par inverso de e^x y aparece en casi todos los problemas con regla de la cadena y diferenciación logarítmica.",
      formulaTitle: "Logaritmo natural",
      formulaLatex: "\\dfrac{d}{dx}\\,\\ln(x) = \\dfrac{1}{x}, \\quad x > 0",
      formulaExplanation:
        "Si y = ln(x), entonces e^y = x. Derivando implícitamente: e^y · y′ = 1, luego y′ = 1/x.",
      exampleTitle: "Ejemplo: ln(2x)",
      exampleSteps: [
        "Escribe f(x) = ln(2x) = ln(2) + ln(x) para x > 0.",
        "La constante ln(2) desaparece al derivar.",
        "f′(x) = 1/x. (También: cadena con u = 2x → (2)/(2x) = 1/x.)",
      ],
      exampleLatex: "\\dfrac{d}{dx}\\ln(2x)=\\dfrac{1}{x}",
      faqs: [
        { question: "¿Cuál es la derivada de ln(x)?", answer: "1/x para x > 0." },
        { question: "¿Cómo derivo ln(x²)?", answer: "2/x usando la cadena o propiedades del logaritmo." },
        { question: "¿Cuál es la derivada de ln|x|?", answer: "1/x para x ≠ 0 en cursos que usan valor absoluto." },
      ],
    },
    en: {
      title: "Derivative of ln(x): Formula 1/x with Step-by-Step Example",
      description:
        "Derivative of natural log ln x: (ln x)′ = 1/x, domain x > 0, inverse of e^x, chain-rule example, and FAQ.",
      breadcrumbLabel: "Derivative of ln(x)",
      category: "Logarithmic functions",
      tags: ["derivative of ln x", "natural logarithm", "logarithmic derivative"],
      heroImageAlt: "Natural log curve and slope 1/x",
      intro:
        "The derivative of ln(x) is 1/x for x > 0. It pairs with e^x and appears in chain-rule and logarithmic differentiation problems.",
      formulaTitle: "Natural logarithm",
      formulaLatex: "\\dfrac{d}{dx}\\,\\ln(x) = \\dfrac{1}{x}, \\quad x > 0",
      formulaExplanation:
        "If y = ln(x), then e^y = x. Implicit differentiation gives e^y · y′ = 1, so y′ = 1/x.",
      exampleTitle: "Worked example: ln(2x)",
      exampleSteps: [
        "Write f(x) = ln(2x) = ln(2) + ln(x) for x > 0.",
        "The constant ln(2) vanishes when differentiating.",
        "f′(x) = 1/x. (Chain rule: u = 2x gives 2/(2x) = 1/x.)",
      ],
      exampleLatex: "\\dfrac{d}{dx}\\ln(2x)=\\dfrac{1}{x}",
      faqs: [
        { question: "What is the derivative of ln(x)?", answer: "1/x for x > 0." },
        { question: "How do I differentiate ln(x²)?", answer: "2/x by the chain rule or log properties." },
        { question: "What is the derivative of ln|x|?", answer: "1/x for x ≠ 0 when |x| is used." },
      ],
    },
  },
  {
    id: "log",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeLogX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfLogX,
    relatedIds: ["ln", "e-x", "raiz"],
    es: {
      title: "Derivada de log(x): Logaritmo Base 10 y Base a Explicados",
      description:
        "Derivada de log x paso a paso: (log₁₀ x)′ = 1/(x ln 10), fórmula general log_a x, cambio de base y ejemplo resuelto.",
      breadcrumbLabel: "Derivada de log(x)",
      category: "Funciones logarítmicas",
      tags: ["derivada de log x", "logaritmo base 10", "logaritmo general"],
      heroImageAlt: "Logaritmo base 10 y su derivada",
      intro:
        "La derivada de log₁₀(x) es 1/(x ln 10). En general, log_a(x) deriva a 1/(x ln a). Conecta logaritmos en cualquier base con el logaritmo natural.",
      formulaTitle: "Logaritmo base a",
      formulaLatex: "\\dfrac{d}{dx}\\,\\log_a(x) = \\dfrac{1}{x\\ln a}, \\quad x > 0",
      formulaExplanation:
        "Escribe log_a(x) = ln(x)/ln(a). Al derivar, ln(a) es constante y queda 1/(x ln a). Para base 10: 1/(x ln 10).",
      exampleTitle: "Ejemplo: log₁₀(5x)",
      exampleSteps: [
        "f(x) = log₁₀(5x) = log₁₀(5) + log₁₀(x).",
        "Derivando: f′(x) = 1/(x ln 10).",
        "Con cadena directa: (1/(5x ln 10))·5 = 1/(x ln 10).",
      ],
      exampleLatex: "\\dfrac{d}{dx}\\log_{10}(x)=\\dfrac{1}{x\\ln 10}",
      faqs: [
        { question: "¿Cuál es la derivada de log₁₀(x)?", answer: "1/(x ln 10) para x > 0." },
        { question: "¿En qué se diferencia de ln(x)?", answer: "ln(x) deriva a 1/x; otros logs incluyen el factor 1/ln(a)." },
        { question: "¿Cómo derivo log(x²)?", answer: "2/(x ln a) aplicando la cadena o propiedades." },
      ],
    },
    en: {
      title: "Derivative of log(x): Base 10 and General Base a Explained",
      description:
        "Derivative of log x step by step: (log₁₀ x)′ = 1/(x ln 10), general log_a formula, change of base, and worked example.",
      breadcrumbLabel: "Derivative of log(x)",
      category: "Logarithmic functions",
      tags: ["derivative of log x", "base 10 logarithm", "general logarithm"],
      heroImageAlt: "Base-10 logarithm and its derivative",
      intro:
        "The derivative of log₁₀(x) is 1/(x ln 10). In general, d/dx log_a(x) = 1/(x ln a), linking any base to the natural log.",
      formulaTitle: "Logarithm base a",
      formulaLatex: "\\dfrac{d}{dx}\\,\\log_a(x) = \\dfrac{1}{x\\ln a}, \\quad x > 0",
      formulaExplanation:
        "Write log_a(x) = ln(x)/ln(a). Since ln(a) is constant, the derivative is 1/(x ln a). For base 10: 1/(x ln 10).",
      exampleTitle: "Worked example: log₁₀(5x)",
      exampleSteps: [
        "f(x) = log₁₀(5x) = log₁₀(5) + log₁₀(x).",
        "Differentiate: f′(x) = 1/(x ln 10).",
        "Chain rule directly: 5/(5x ln 10) = 1/(x ln 10).",
      ],
      exampleLatex: "\\dfrac{d}{dx}\\log_{10}(x)=\\dfrac{1}{x\\ln 10}",
      faqs: [
        { question: "What is the derivative of log₁₀(x)?", answer: "1/(x ln 10) for x > 0." },
        { question: "How is it different from ln(x)?", answer: "ln(x) gives 1/x; other bases add the 1/ln(a) factor." },
        { question: "How do I differentiate log(x²)?", answer: "2/(x ln a) by the chain rule or log properties." },
      ],
    },
  },
  {
    id: "sin",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeSinX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfSinX,
    relatedIds: ["cos", "tan", "x"],
    es: {
      title: "Derivada de sin(x): Fórmula cos(x) con Ejemplo Paso a Paso",
      description:
        "Derivada de seno paso a paso: (sin x)′ = cos x en radianes, regla de la cadena, ejemplo numérico y preguntas frecuentes.",
      breadcrumbLabel: "Derivada de sin(x)",
      category: "Funciones trigonométricas",
      tags: ["derivada de sin x", "derivadas trigonométricas", "seno"],
      heroImageAlt: "Seno y coseno como derivada",
      intro:
        "La derivada de sin(x) es cos(x) cuando el ángulo está en radianes. Es la identidad trigonométrica más usada en cálculo y física.",
      formulaTitle: "Seno en radianes",
      formulaLatex: "\\dfrac{d}{dx}\\,\\sin(x) = \\cos(x)",
      formulaExplanation:
        "Geométricamente, la pendiente de sin(x) en x es cos(x). La demostración estándar usa límites trigonométricos o la fórmula de ángulo suma.",
      exampleTitle: "Ejemplo: sin(2x)",
      exampleSteps: [
        "Identifica f(x) = sin(2x) como sin(u) con u = 2x.",
        "Aplica la cadena: cos(u) · u′.",
        "Resultado: cos(2x) · 2 = 2cos(2x).",
      ],
      exampleLatex: "\\dfrac{d}{dx}\\sin(2x)=2\\cos(2x)",
      faqs: [
        { question: "¿Cuál es la derivada de sin(x)?", answer: "cos(x) en radianes." },
        { question: "¿Por qué importan los radianes?", answer: "La identidad (sin x)′ = cos x se demuestra con medida en radianes." },
        { question: "¿Cuál es la derivada de x·sin(x)?", answer: "sin(x) + x·cos(x) por la regla del producto." },
      ],
    },
    en: {
      title: "Derivative of sin(x): cos(x) Formula with Step-by-Step Example",
      description:
        "Derivative of sine: (sin x)′ = cos x in radians, chain rule, worked example, and FAQ.",
      breadcrumbLabel: "Derivative of sin(x)",
      category: "Trigonometric functions",
      tags: ["derivative of sin x", "trigonometric derivatives", "sine"],
      heroImageAlt: "Sine and cosine as derivative pair",
      intro:
        "The derivative of sin(x) is cos(x) when angles are in radians—the most used trigonometric identity in calculus.",
      formulaTitle: "Sine in radians",
      formulaLatex: "\\dfrac{d}{dx}\\,\\sin(x) = \\cos(x)",
      formulaExplanation:
        "Geometrically, the slope of sin(x) at x is cos(x). Standard proofs use trigonometric limits or angle-sum identities.",
      exampleTitle: "Worked example: sin(2x)",
      exampleSteps: [
        "Identify f(x) = sin(2x) as sin(u) with u = 2x.",
        "Chain rule: cos(u) · u′.",
        "Result: 2cos(2x).",
      ],
      exampleLatex: "\\dfrac{d}{dx}\\sin(2x)=2\\cos(2x)",
      faqs: [
        { question: "What is the derivative of sin(x)?", answer: "cos(x) in radians." },
        { question: "Why do radians matter?", answer: "(sin x)′ = cos x is proved assuming radian measure." },
        { question: "What is the derivative of x·sin(x)?", answer: "sin(x) + x·cos(x) by the product rule." },
      ],
    },
  },
  {
    id: "cos",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeCosX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfCosX,
    relatedIds: ["sin", "tan", "x"],
    es: {
      title: "Derivada de cos(x): Fórmula −sin(x) Explicada Paso a Paso",
      description:
        "Derivada de coseno: (cos x)′ = −sin x, por qué aparece el signo menos, regla de la cadena y ejemplo resuelto con FAQ.",
      breadcrumbLabel: "Derivada de cos(x)",
      category: "Funciones trigonométricas",
      tags: ["derivada de cos x", "derivadas trigonométricas", "coseno"],
      heroImageAlt: "Coseno y su derivada negativa del seno",
      intro:
        "La derivada de cos(x) es −sin(x). El signo negativo refleja que el coseno decrece donde el seno creante positivo en la misma fase.",
      formulaTitle: "Coseno en radianes",
      formulaLatex: "\\dfrac{d}{dx}\\,\\cos(x) = -\\sin(x)",
      formulaExplanation:
        "Puedes derivar cos(x) como sin(π/2 − x) o usar límites. Memoriza el par: sin → cos, cos → −sin.",
      exampleTitle: "Ejemplo: cos(3x)",
      exampleSteps: [
        "f(x) = cos(3x); exterior cos(u), interior u = 3x.",
        "Derivada exterior: −sin(u); interior: u′ = 3.",
        "f′(x) = −sin(3x) · 3 = −3sin(3x).",
      ],
      exampleLatex: "\\dfrac{d}{dx}\\cos(3x)=-3\\sin(3x)",
      faqs: [
        { question: "¿Cuál es la derivada de cos(x)?", answer: "−sin(x) en radianes." },
        { question: "¿Por qué hay un signo menos?", answer: "La tasa de cambio del coseno es opuesta al seno en la misma fase." },
        { question: "¿Cómo derivo cos²(x)?", answer: "2cos(x)·(−sin(x)) = −sin(2x) por la cadena." },
      ],
    },
    en: {
      title: "Derivative of cos(x): −sin(x) Formula Step by Step",
      description:
        "Derivative of cosine: (cos x)′ = −sin x, why the minus sign appears, chain rule example, and FAQ.",
      breadcrumbLabel: "Derivative of cos(x)",
      category: "Trigonometric functions",
      tags: ["derivative of cos x", "trigonometric derivatives", "cosine"],
      heroImageAlt: "Cosine and negative sine derivative",
      intro:
        "The derivative of cos(x) is −sin(x). The minus sign reflects cosine decreasing where sine increases in the same phase.",
      formulaTitle: "Cosine in radians",
      formulaLatex: "\\dfrac{d}{dx}\\,\\cos(x) = -\\sin(x)",
      formulaExplanation:
        "Derive cos(x) via sin(π/2 − x) or limits. Memorize: sin → cos, cos → −sin.",
      exampleTitle: "Worked example: cos(3x)",
      exampleSteps: [
        "f(x) = cos(3x); outer cos(u), inner u = 3x.",
        "Outer derivative −sin(u); inner u′ = 3.",
        "f′(x) = −3sin(3x).",
      ],
      exampleLatex: "\\dfrac{d}{dx}\\cos(3x)=-3\\sin(3x)",
      faqs: [
        { question: "What is the derivative of cos(x)?", answer: "−sin(x) in radians." },
        { question: "Why is there a minus sign?", answer: "Cosine's rate of change opposes sine in the same phase." },
        { question: "How do I differentiate cos²(x)?", answer: "−sin(2x) via the chain rule." },
      ],
    },
  },
  {
    id: "tan",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeTanX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfTanX,
    relatedIds: ["sin", "cos", "x"],
    es: {
      title: "Derivada de tan(x): Fórmula sec²(x) con Ejemplo Resuelto",
      description:
        "Derivada de tangente paso a paso: (tan x)′ = sec² x, demostración con cociente sin/cos, regla de la cadena y FAQ.",
      breadcrumbLabel: "Derivada de tan(x)",
      category: "Funciones trigonométricas",
      tags: ["derivada de tan x", "secante al cuadrado", "tangente"],
      heroImageAlt: "Tangente y secante cuadrada como derivada",
      intro:
        "La derivada de tan(x) es sec²(x), equivalente a 1/cos²(x). Se obtiene naturalmente aplicando la regla del cociente a sin(x)/cos(x).",
      formulaTitle: "Tangente",
      formulaLatex: "\\dfrac{d}{dx}\\,\\tan(x) = \\sec^2(x) = \\dfrac{1}{\\cos^2(x)}",
      formulaExplanation:
        "Con tan = sin/cos, la regla del cociente da (cos·cos − sin·(−sin))/cos² = (cos²+sin²)/cos² = 1/cos².",
      exampleTitle: "Ejemplo: tan(x²)",
      exampleSteps: [
        "f(x) = tan(x²); exterior tan(u), u = x².",
        "Derivada: sec²(u) · u′.",
        "f′(x) = sec²(x²) · 2x = 2x sec²(x²).",
      ],
      exampleLatex: "\\dfrac{d}{dx}\\tan(x^2)=2x\\sec^2(x^2)",
      faqs: [
        { question: "¿Cuál es la derivada de tan(x)?", answer: "sec²(x) o 1/cos²(x) donde está definida." },
        { question: "¿Dónde no es derivable tan(x)?", answer: "En x = π/2 + kπ donde cos(x) = 0." },
        { question: "¿Cómo se relaciona con sin y cos?", answer: "tan = sin/cos; su derivada sale del cociente." },
      ],
    },
    en: {
      title: "Derivative of tan(x): sec²(x) Formula with Worked Example",
      description:
        "Derivative of tangent step by step: (tan x)′ = sec² x, quotient-rule proof from sin/cos, chain rule, and FAQ.",
      breadcrumbLabel: "Derivative of tan(x)",
      category: "Trigonometric functions",
      tags: ["derivative of tan x", "secant squared", "tangent"],
      heroImageAlt: "Tangent and secant squared derivative",
      intro:
        "The derivative of tan(x) is sec²(x), or 1/cos²(x). It follows from the quotient rule on sin(x)/cos(x).",
      formulaTitle: "Tangent",
      formulaLatex: "\\dfrac{d}{dx}\\,\\tan(x) = \\sec^2(x) = \\dfrac{1}{\\cos^2(x)}",
      formulaExplanation:
        "With tan = sin/cos, the quotient rule gives (cos²+sin²)/cos² = 1/cos².",
      exampleTitle: "Worked example: tan(x²)",
      exampleSteps: [
        "f(x) = tan(x²); outer tan(u), u = x².",
        "Derivative: sec²(u) · u′.",
        "f′(x) = 2x sec²(x²).",
      ],
      exampleLatex: "\\dfrac{d}{dx}\\tan(x^2)=2x\\sec^2(x^2)",
      faqs: [
        { question: "What is the derivative of tan(x)?", answer: "sec²(x) where defined." },
        { question: "Where is tan(x) not differentiable?", answer: "At x = π/2 + kπ where cos(x) = 0." },
        { question: "How does it relate to sin and cos?", answer: "tan = sin/cos; differentiate via the quotient rule." },
      ],
    },
  },
];

export function getCommonFunctionDefByEsRoute(route: string): CommonFunctionPageDef | undefined {
  return COMMON_FUNCTION_PAGE_DEFS.find((d) => d.esRoute === route);
}

export function getCommonFunctionDefByEnSlug(slug: string): CommonFunctionPageDef | undefined {
  return COMMON_FUNCTION_PAGE_DEFS.find((d) => d.enSlug === slug);
}

export function getCommonFunctionDefById(id: string): CommonFunctionPageDef | undefined {
  return COMMON_FUNCTION_PAGE_DEFS.find((d) => d.id === id);
}

export { AUTHOR_ES, AUTHOR_EN };
