import type { Locale } from "@/lib/locale";

export function calcLabels(locale: Locale) {
  const es = locale === "es";
  return {
    calculate: es ? "Calcular" : "Calculate",
    clear: es ? "Limpiar" : "Clear",
    result: es ? "Resultado" : "Result",
    steps: es ? "Pasos detallados" : "Step-by-step workflow",
    error: es ? "Expresión no válida. Revisa la sintaxis." : "Invalid expression. Check syntax.",
    examples: es ? "Ejemplos" : "Examples",
    graph: es ? "Visualización" : "Graph",
    function: es ? "Función f(x)" : "Function f(x)",
    fx: es ? "f(x)" : "f(x)",
    gx: es ? "g(x)" : "g(x)",
    numerator: es ? "Numerador u(x)" : "Numerator u(x)",
    denominator: es ? "Denominador v(x)" : "Denominator v(x)",
    point: es ? "Punto x = a" : "Point x = a",
    variable: es ? "Variable" : "Variable",
    order: es ? "Orden de derivada" : "Derivative order",
    criticalPoints: es ? "Puntos críticos detectados" : "Critical points found",
    tangentEq: es ? "Ecuación de la tangente" : "Tangent equation",
    slope: es ? "Pendiente" : "Slope",
    formula: es ? "Fórmula aplicada" : "Formula applied",
    productFormula: "(uv)' = u'v + uv'",
    quotientFormula: "(u/v)' = (u'v − uv') / v²",
    partialFormula: "∂f/∂x — derivada parcial",
    chainTitle: es ? "Cadena de derivadas" : "Derivative chain",
    chainFormula: "(f ∘ g)′ = f′(g(x)) · g′(x)",
    implicitFormula: "dy/dx = −F_x / F_y",
    noCritical: es ? "No se encontraron puntos críticos reales." : "No real critical points found.",
    classify: es ? "Clasificación" : "Classification",
    at: es ? "en" : "at",
  };
}
