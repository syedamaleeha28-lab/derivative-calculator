import type { CommonFunctionPageDef } from "./types";
import { ES_AUTHORITY_ROUTES } from "../es-authority-routes";
import { EN_ROUTES } from "../en-routes";
import {
  EN_COMMON_FUNCTION_SLUGS,
  ES_COMMON_FUNCTION_ROUTES,
} from "./routes";

const AUTHOR_ES = {
  name: "Iftikhar Ud Din",
  role: "Profesor de Cálculo Diferencial",
} as const;

const AUTHOR_EN = {
  name: "Iftikhar Ud Din",
  role: "Calculus Instructor",
} as const;

export const COMMON_FUNCTION_AUTHOR_ES = AUTHOR_ES;
export const COMMON_FUNCTION_AUTHOR_EN = AUTHOR_EN;

export const COMMON_FUNCTION_PAGE_DEFS: CommonFunctionPageDef[] = [
  {
    id: "constante",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeUnaConstante,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfAConstant,
    relatedIds: ["x", "x-cuadrado", "1-x"],
    es: {
      title: "Derivada de una Constante: La Regla Más Fácil de Cálculo (Explicada)",
      description:
        "Derivada de una constante explicada paso a paso: (c)′ = 0, demostración por límites, diferencia con el múltiplo constante (5x), ejemplos con π y e, y FAQ.",
      breadcrumbLabel: "Derivada de una constante",
      category: "Funciones algebraicas",
      tags: ["derivada de una constante", "derivada de un número", "regla de la constante"],
      heroImageAlt: "Recta horizontal y = c con pendiente cero",
      intro:
        "La derivada de una constante es siempre 0. La gráfica de f(x) = c es una recta horizontal: no sube ni baja, así que su pendiente —la tasa de cambio— es cero en todos los puntos. Vale para cualquier número: 5, −3, π o e.",
      formulaTitle: "Regla de la constante",
      formulaLatex: "\\dfrac{d}{dx}\\,c = 0",
      formulaExplanation:
        "Una constante no depende de x: al variar x, el valor de f(x) = c no cambia. Por eso su tasa de cambio instantánea es 0 en todo ℝ. Es también el caso n = 0 de la regla de la potencia: c = c·x⁰ deriva a c·0·x⁻¹ = 0.",
      exampleTitle: "Ejemplo: definición por límites",
      exampleSteps: [
        "Escribe f(x) = c, de modo que f(x+h) = c.",
        "Forma el cociente incremental: [f(x+h) − f(x)] / h = (c − c)/h = 0.",
        "Toma el límite cuando h → 0: f′(x) = 0.",
      ],
      exampleLatex: "f'(x)=\\lim_{h\\to 0}\\dfrac{c-c}{h}=0",
      extraSectionTitle: "Ejemplos rápidos: 5, π y 7 en un polinomio",
      extraSectionBody:
        "La derivada de 5 es 0; la de π es 0 (π ≈ 3,1416 es un número fijo, no una variable); y en f(x) = 3x² + 7, el término constante 7 aporta 0, así que f′(x) = 6x. No confundas la constante aislada con el múltiplo constante: la derivada de 5x es 5, porque ahí la constante multiplica a x y se conserva por linealidad: (c·f)′ = c·f′.",
      mistakesTitle: "Errores comunes con la regla de la constante",
      mistakes: [
        "Confundir constante aislada con múltiplo constante: (5)′ = 0, pero (5x)′ = 5.",
        "Tratar π o e como variables: son números fijos, así que (π)′ = 0 y (e²)′ = 0.",
        "Olvidar que el término constante de un polinomio desaparece: (x² + 7)′ = 2x, no 2x + 7.",
        "Anular expresiones que sí dependen de x: e^x no es constante y su derivada es e^x, no 0.",
      ],
      guideLinksTitle: "Guías relacionadas",
      guideLinks: [
        { label: "Tabla de derivadas", href: ES_AUTHORITY_ROUTES.tablaDeDerivadas },
        { label: "Reglas de derivación", href: ES_AUTHORITY_ROUTES.reglasDeDerivacion },
      ],
      faqs: [
        { question: "¿Cuál es la derivada de una constante?", answer: "Siempre 0: si f(x) = c, entonces f′(x) = 0 en todo ℝ." },
        { question: "¿Cuál es la derivada de 5?", answer: "0, porque 5 es una constante que no depende de x." },
        { question: "¿La derivada de 5x también es 0?", answer: "No: (5x)′ = 5. La constante que multiplica a x se conserva; solo la constante aislada deriva a 0." },
        { question: "¿Cuál es la derivada de π?", answer: "0. π es un número fijo (≈ 3,1416), no una variable, igual que e o cualquier otra constante." },
      ],
    },
    en: {
      title: "Derivative of a Constant: The Easiest Rule in Calculus (Explained)",
      description:
        "Derivative of a constant explained step by step: (c)′ = 0, limit-definition proof, constant vs. constant multiple (5x), examples with π and e, and FAQ.",
      breadcrumbLabel: "Derivative of a constant",
      category: "Algebraic functions",
      tags: ["derivative of a constant", "derivative of a number", "constant rule"],
      heroImageAlt: "Horizontal line y = c with zero slope",
      intro:
        "The derivative of a constant is always 0. The graph of f(x) = c is a horizontal line: it never rises or falls, so its slope — the rate of change — is zero at every point. This holds for any number: 5, −3, π, or e.",
      formulaTitle: "Constant rule",
      formulaLatex: "\\dfrac{d}{dx}\\,c = 0",
      formulaExplanation:
        "A constant does not depend on x: as x changes, f(x) = c stays the same, so its instantaneous rate of change is 0 on all of ℝ. It is also the n = 0 case of the power rule: c = c·x⁰ differentiates to c·0·x⁻¹ = 0.",
      exampleTitle: "Worked example: limit definition",
      exampleSteps: [
        "Let f(x) = c, so f(x+h) = c.",
        "Difference quotient: [f(x+h) − f(x)] / h = (c − c)/h = 0.",
        "Limit as h → 0: f′(x) = 0.",
      ],
      exampleLatex: "f'(x)=\\lim_{h\\to 0}\\dfrac{c-c}{h}=0",
      extraSectionTitle: "Quick examples: 5, π, and 7 inside a polynomial",
      extraSectionBody:
        "The derivative of 5 is 0; the derivative of π is 0 (π ≈ 3.1416 is a fixed number, not a variable); and in f(x) = 3x² + 7, the constant term 7 contributes 0, so f′(x) = 6x. Don't confuse a lone constant with a constant multiple: the derivative of 5x is 5, because there the constant multiplies x and is kept by linearity: (c·f)′ = c·f′.",
      mistakesTitle: "Common mistakes with the constant rule",
      mistakes: [
        "Confusing a lone constant with a constant multiple: (5)′ = 0, but (5x)′ = 5.",
        "Treating π or e as variables: they are fixed numbers, so (π)′ = 0 and (e²)′ = 0.",
        "Forgetting the constant term of a polynomial vanishes: (x² + 7)′ = 2x, not 2x + 7.",
        "Zeroing out expressions that do depend on x: e^x is not constant and its derivative is e^x, not 0.",
      ],
      guideLinksTitle: "Related guides",
      guideLinks: [
        { label: "Derivative cheat sheet", href: EN_ROUTES.derivativeCheatSheet },
        { label: "Derivative rules", href: EN_ROUTES.derivativeRules },
      ],
      faqs: [
        { question: "What is the derivative of a constant?", answer: "Always 0: if f(x) = c, then f′(x) = 0 on all of ℝ." },
        { question: "What is the derivative of 5?", answer: "0, because 5 is a constant that does not depend on x." },
        { question: "Is the derivative of 5x also 0?", answer: "No: (5x)′ = 5. A constant multiplying x is kept; only a lone constant differentiates to 0." },
        { question: "What is the derivative of π?", answer: "0. π is a fixed number (≈ 3.1416), not a variable — the same goes for e or any other constant." },
      ],
    },
  },
  {
    id: "x",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfX,
    relatedIds: ["x-cuadrado", "x-cubo", "raiz"],
    es: {
      title: "Derivada de x: Fórmula, Ejemplo Paso a Paso y Explicación",
      description:
        "Aprende a derivar x paso a paso con la definición por límites, interpretación geométrica y preguntas frecuentes resueltas.",
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
        "Learn to differentiate x step by step with the limit definition, geometric meaning, and answered FAQs.",
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
        "Deriva x al cuadrado paso a paso con demostración por límites, interpretación de la parábola y FAQ resueltas.",
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
        "Differentiate x squared step by step with a limit proof, parabola interpretation, and answered FAQ.",
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
      title: "Derivada de x³: Cómo Aplicar la Regla de la Potencia (Ejemplo)",
      description:
        "Deriva x al cubo con la regla de la potencia explicada paso a paso, aplicación en polinomios y preguntas frecuentes.",
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
      title: "Derivative of x³: Applying the Power Rule (Worked Example)",
      description:
        "Differentiate x cubed with a full power-rule walkthrough, polynomial applications, and FAQ.",
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
      title: "Derivada de √x: Guía Paso a Paso con la Regla de la Potencia",
      description:
        "Deriva la raíz cuadrada de x paso a paso con la regla de la potencia y exponente fraccionario, dominio explicado y FAQ.",
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
      title: "Derivative of √x: Step-by-Step Guide Using the Power Rule",
      description:
        "Differentiate the square root of x step by step using the fractional power rule, domain explained, and FAQ.",
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
    id: "1-x",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDe1EntreX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOf1OverX,
    relatedIds: ["ln", "x-cuadrado", "raiz"],
    es: {
      title: "Derivada de 1/x: Cómo Derivarla Paso a Paso (Ejemplo)",
      description:
        "Derivada de 1/x explicada paso a paso: fórmula (1/x)′ = −1/x², regla de la potencia con exponente −1, dominio x ≠ 0, errores comunes y FAQ.",
      breadcrumbLabel: "Derivada de 1/x",
      category: "Funciones algebraicas",
      tags: ["derivada de 1/x", "derivada de 1 entre x", "regla de la potencia"],
      heroImageAlt: "Hipérbola 1/x y su pendiente −1/x²",
      intro:
        "La derivada de 1/x es −1/x² para x ≠ 0. Escribe 1/x como x^(−1) y aplica la regla de la potencia: el resultado siempre es negativo porque la hipérbola y = 1/x decrece en todo su dominio.",
      formulaTitle: "Regla de la potencia (n = −1)",
      formulaLatex: "\\dfrac{d}{dx}\\,\\dfrac{1}{x} = -\\dfrac{1}{x^2}, \\quad x \\neq 0",
      formulaExplanation:
        "Con 1/x = x^(−1), aplica d/dx x^n = n x^(n−1): baja −1 como coeficiente y el nuevo exponente es −1 − 1 = −2. Queda −x^(−2) = −1/x². El dominio excluye x = 0, donde ni la función ni su derivada están definidas.",
      exampleTitle: "Ejemplo: definición por límites",
      exampleSteps: [
        "Escribe el cociente incremental: [1/(x+h) − 1/x] / h.",
        "Combina las fracciones: (x − (x+h)) / (x(x+h)h) = −1/(x(x+h)).",
        "Toma el límite h → 0: f′(x) = −1/x².",
      ],
      exampleLatex: "f'(x)=\\lim_{h\\to 0}\\dfrac{\\frac{1}{x+h}-\\frac{1}{x}}{h}=-\\dfrac{1}{x^2}",
      extraSectionTitle: "Ejemplo adicional: derivada de 1/(2x+1)",
      extraSectionBody:
        "Para derivar 1/(2x+1), escribe (2x+1)^(−1) y aplica la regla de la cadena: −(2x+1)^(−2) · 2 = −2/(2x+1)². El mismo patrón sirve para cualquier cociente 1/u(x): su derivada es −u′(x)/u(x)². Compruébalo también con la regla del cociente y verifica el resultado en la calculadora.",
      mistakesTitle: "Errores comunes al derivar 1/x",
      mistakes: [
        "Olvidar el signo negativo: la derivada es −1/x², no 1/x².",
        "Confundirla con la derivada de ln x: (ln x)′ = 1/x, mientras que (1/x)′ = −1/x².",
        "Aplicar mal la regla de la potencia: con n = −1 el nuevo exponente es −2, no 0.",
        "Ignorar el dominio: ni 1/x ni su derivada están definidas en x = 0.",
      ],
      guideLinksTitle: "Guías relacionadas",
      guideLinks: [
        { label: "Tabla de derivadas", href: ES_AUTHORITY_ROUTES.tablaDeDerivadas },
        { label: "Reglas de derivación", href: ES_AUTHORITY_ROUTES.reglasDeDerivacion },
      ],
      faqs: [
        { question: "¿Cuál es la derivada de 1/x?", answer: "(1/x)′ = −1/x² para x ≠ 0." },
        { question: "¿Cómo derivo 1/x²?", answer: "Escribe x^(−2) y aplica la potencia: −2x^(−3) = −2/x³." },
        {
          question: "¿Por qué la derivada de 1/x es negativa?",
          answer: "Porque 1/x decrece tanto en (−∞, 0) como en (0, ∞); la pendiente negativa refleja ese decrecimiento.",
        },
      ],
    },
    en: {
      title: "Derivative of 1/x: How to Differentiate It Step by Step (Example)",
      description:
        "Derivative of 1/x explained step by step: (1/x)′ = −1/x², power rule with exponent −1, domain x ≠ 0, common mistakes, and FAQ.",
      breadcrumbLabel: "Derivative of 1/x",
      category: "Algebraic functions",
      tags: ["derivative of 1/x", "derivative of 1 over x", "power rule"],
      heroImageAlt: "Hyperbola 1/x and its slope −1/x²",
      intro:
        "The derivative of 1/x is −1/x² for x ≠ 0. Write 1/x as x^(−1) and apply the power rule: the result is always negative because the hyperbola y = 1/x decreases on its whole domain.",
      formulaTitle: "Power rule (n = −1)",
      formulaLatex: "\\dfrac{d}{dx}\\,\\dfrac{1}{x} = -\\dfrac{1}{x^2}, \\quad x \\neq 0",
      formulaExplanation:
        "With 1/x = x^(−1), apply d/dx x^n = n x^(n−1): bring down −1 as the coefficient and the new exponent is −1 − 1 = −2. That gives −x^(−2) = −1/x². The domain excludes x = 0, where neither the function nor its derivative is defined.",
      exampleTitle: "Worked example: limit definition",
      exampleSteps: [
        "Write the difference quotient: [1/(x+h) − 1/x] / h.",
        "Combine the fractions: (x − (x+h)) / (x(x+h)h) = −1/(x(x+h)).",
        "Take the limit h → 0: f′(x) = −1/x².",
      ],
      exampleLatex: "f'(x)=\\lim_{h\\to 0}\\dfrac{\\frac{1}{x+h}-\\frac{1}{x}}{h}=-\\dfrac{1}{x^2}",
      extraSectionTitle: "Extra example: derivative of 1/(2x+1)",
      extraSectionBody:
        "To differentiate 1/(2x+1), write (2x+1)^(−1) and apply the chain rule: −(2x+1)^(−2) · 2 = −2/(2x+1)². The same pattern works for any quotient 1/u(x): its derivative is −u′(x)/u(x)². You can confirm it with the quotient rule and verify the result in the calculator.",
      mistakesTitle: "Common mistakes when differentiating 1/x",
      mistakes: [
        "Dropping the negative sign: the derivative is −1/x², not 1/x².",
        "Mixing it up with the derivative of ln x: (ln x)′ = 1/x, while (1/x)′ = −1/x².",
        "Misusing the power rule: with n = −1 the new exponent is −2, not 0.",
        "Ignoring the domain: neither 1/x nor its derivative is defined at x = 0.",
      ],
      guideLinksTitle: "Related guides",
      guideLinks: [
        { label: "Derivative cheat sheet", href: EN_ROUTES.derivativeCheatSheet },
        { label: "Derivative rules", href: EN_ROUTES.derivativeRules },
      ],
      faqs: [
        { question: "What is the derivative of 1/x?", answer: "d/dx(1/x) = −1/x² for x ≠ 0." },
        { question: "How do I differentiate 1/x²?", answer: "Write x^(−2) and apply the power rule: −2x^(−3) = −2/x³." },
        {
          question: "Why is the derivative of 1/x negative?",
          answer: "Because 1/x decreases on both (−∞, 0) and (0, ∞); the negative slope reflects that decrease.",
        },
      ],
    },
  },
  {
    id: "e-x",
    esRoute: ES_COMMON_FUNCTION_ROUTES.derivadaDeEElevadoAX,
    enSlug: EN_COMMON_FUNCTION_SLUGS.derivativeOfEToTheX,
    relatedIds: ["ln", "x", "sin"],
    es: {
      title: "Derivada de e^x: La Propiedad Única de la Exponencial (Ejemplo)",
      description:
        "Descubre la propiedad única de la derivada de e^x, con interpretación de crecimiento exponencial, regla de la cadena y FAQ.",
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
      title: "Derivative of e^x: The Exponential's Unique Property (Example)",
      description:
        "Discover the unique property behind the derivative of e^x, with exponential growth meaning, a chain rule example, and FAQ.",
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
      title: "Derivada de ln(x): Cómo Derivar el Logaritmo Natural (Guía)",
      description:
        "Deriva el logaritmo natural ln(x) paso a paso: dominio, relación inversa con e^x y preguntas frecuentes resueltas.",
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
      title: "Derivative of ln(x): How to Differentiate the Natural Log",
      description:
        "Differentiate the natural log ln(x) step by step: domain, inverse relationship with e^x, and answered FAQ.",
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
        "Deriva log(x) en base 10 y en base a paso a paso, con cambio de base explicado y ejemplo resuelto.",
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
        "Differentiate log(x) in base 10 and general base a step by step, with change of base explained and a worked example.",
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
      title: "Derivada de sin(x): Guía Paso a Paso con Demostración",
      description:
        "Aprende a derivar sin(x) paso a paso con demostración y ejemplos de regla de la cadena. Verifica tus resultados en la calculadora gratis.",
      breadcrumbLabel: "Derivada de sin(x)",
      category: "Funciones trigonométricas",
      tags: ["derivada de sin x", "derivadas trigonométricas", "seno"],
      heroImageAlt: "Seno y coseno como derivada",
      image: "/images/circulo-trigonometria-derivadas-seno-coseno.svg",
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
        { question: "¿Cuál es la derivada de sin(x)?", answer: "Sigue el patrón de las funciones trigonométricas; consulta la demostración completa arriba." },
        { question: "¿Por qué importan los radianes?", answer: "La identidad (sin x)′ = cos x se demuestra con medida en radianes." },
        { question: "¿Cuál es la derivada de x·sin(x)?", answer: "sin(x) + x·cos(x) por la regla del producto." },
      ],
    },
    en: {
      title: "Derivative of sin(x): Step-by-Step Guide with Proof",
      description:
        "Learn how to differentiate sin(x) step by step with a proof and chain rule example.",
      breadcrumbLabel: "Derivative of sin(x)",
      category: "Trigonometric functions",
      tags: ["derivative of sin x", "trigonometric derivatives", "sine"],
      heroImageAlt: "Sine and cosine as derivative pair",
      image: "/images/circulo-trigonometria-derivadas-seno-coseno.svg",
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
        { question: "What is the derivative of sin(x)?", answer: "It follows the trigonometric derivative pattern — see the full proof above." },
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
      title: "Derivada de cos(x): Guía Paso a Paso con Demostración",
      description:
        "Aprende a derivar cos(x) paso a paso: por qué aparece un signo menos, demostración y ejemplos con la regla de la cadena.",
      breadcrumbLabel: "Derivada de cos(x)",
      category: "Funciones trigonométricas",
      tags: ["derivada de cos x", "derivadas trigonométricas", "coseno"],
      heroImageAlt: "Coseno y su derivada negativa del seno",
      image: "/images/circulo-trigonometria-derivadas-seno-coseno.svg",
      intro:
        "La derivada de cos(x) es −sin(x). El signo negativo refleja que el coseno decrece donde el seno crece en la misma fase.",
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
        { question: "¿Cuál es la derivada de cos(x)?", answer: "Sigue el patrón de las funciones trigonométricas; consulta la demostración completa arriba." },
        { question: "¿Por qué hay un signo menos?", answer: "La tasa de cambio del coseno es opuesta al seno en la misma fase." },
        { question: "¿Cómo derivo cos²(x)?", answer: "2cos(x)·(−sin(x)) = −sin(2x) por la cadena." },
      ],
    },
    en: {
      title: "Derivative of cos(x): Step-by-Step Guide with Proof",
      description:
        "Learn how to differentiate cos(x) step by step: why the minus sign appears, with proof and a chain rule example.",
      breadcrumbLabel: "Derivative of cos(x)",
      category: "Trigonometric functions",
      tags: ["derivative of cos x", "trigonometric derivatives", "cosine"],
      heroImageAlt: "Cosine and negative sine derivative",
      image: "/images/circulo-trigonometria-derivadas-seno-coseno.svg",
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
        { question: "What is the derivative of cos(x)?", answer: "It follows the trigonometric derivative pattern — see the full proof above." },
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
      title: "Derivada de tan(x): Cómo Derivarla Paso a Paso (Ejemplo)",
      description:
        "Deriva tan(x) paso a paso partiendo de sin(x)/cos(x), con demostración por la regla del cociente y ejemplo de cadena.",
      breadcrumbLabel: "Derivada de tan(x)",
      category: "Funciones trigonométricas",
      tags: ["derivada de tan x", "secante al cuadrado", "tangente"],
      heroImageAlt: "Tangente y secante cuadrada como derivada",
      image: "/images/circulo-trigonometria-derivadas-seno-coseno.svg",
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
      title: "Derivative of tan(x): How to Differentiate Tangent Step by Step",
      description:
        "Differentiate tan(x) step by step starting from sin(x)/cos(x), with a quotient-rule proof and chain rule example.",
      breadcrumbLabel: "Derivative of tan(x)",
      category: "Trigonometric functions",
      tags: ["derivative of tan x", "secant squared", "tangent"],
      heroImageAlt: "Tangent and secant squared derivative",
      image: "/images/circulo-trigonometria-derivadas-seno-coseno.svg",
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
