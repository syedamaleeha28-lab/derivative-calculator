import type { Locale } from "@/lib/locale";
import type { SpecializedCalculatorKind } from "./themes";

type HeroCopy = {
  cta: string;
  trust1: string;
  trust2: string;
  trust3: string;
};

const ES: Record<SpecializedCalculatorKind, HeroCopy> = {
  "product-rule": {
    cta: "Derivar u(x)·v(x) ahora",
    trust1: "Entradas separadas para u y v",
    trust2: "Fórmula (uv)′ visible en cada paso",
    trust3: "Ideal para productos trigonométricos",
  },
  "quotient-rule": {
    cta: "Derivar fracción u/v",
    trust1: "Interfaz tipo fracción",
    trust2: "Numerador y denominador independientes",
    trust3: "Pasos con regla del cociente",
  },
  "critical-points": {
    cta: "Detectar puntos críticos",
    trust1: "Resuelve f′(x) = 0 automáticamente",
    trust2: "Clasifica máximos y mínimos",
    trust3: "Gráfica con marcadores de extremos",
  },
  "tangent-line": {
    cta: "Calcular recta tangente",
    trust1: "Elige el punto x = a",
    trust2: "Ecuación y pendiente al instante",
    trust3: "Gráfica con tangente superpuesta",
  },
  "partial-derivatives": {
    cta: "Derivar respecto a x, y o z",
    trust1: "Selector ∂/∂x, ∂/∂y, ∂/∂z",
    trust2: "Ejemplos multivariable incluidos",
    trust3: "Mantiene las demás variables fijas",
  },
  "higher-order": {
    cta: "Calcular derivada de orden n",
    trust1: "Selector de orden del 1 al 5",
    trust2: "Cadena visual f, f′, f″…",
    trust3: "Modo oscuro para sesiones largas",
  },
  "second-derivative": {
    cta: "Analizar f″ y concavidad",
    trust1: "Selector 1.ª, 2.ª, 3.ª o n",
    trust2: "Concavidad e inflexión automáticas",
    trust3: "Cadena interactiva de derivadas",
  },
  "chain-rule": {
    cta: "Descomponer f(g(x))",
    trust1: "Entradas exterior f(u) e interior g(x)",
    trust2: "Constructor visual anidado",
    trust3: "f′, g′ y producto final",
  },
  "implicit-differentiation": {
    cta: "Resolver dy/dx implícita",
    trust1: "Modo ecuación L = R",
    trust2: "Variables x e y",
    trust3: "Pasos algebraicos completos",
  },
};

const EN: Record<SpecializedCalculatorKind, HeroCopy> = {
  "product-rule": {
    cta: "Differentiate u(x)·v(x)",
    trust1: "Separate inputs for u and v",
    trust2: "Product rule formula in every step",
    trust3: "Built for trig and exponential products",
  },
  "quotient-rule": {
    cta: "Differentiate the fraction u/v",
    trust1: "Fraction-style layout",
    trust2: "Independent numerator & denominator",
    trust3: "Quotient rule workflow with steps",
  },
  "critical-points": {
    cta: "Find critical points now",
    trust1: "Solves f′(x) = 0 automatically",
    trust2: "Classifies maxima and minima",
    trust3: "Graph with extrema markers",
  },
  "tangent-line": {
    cta: "Build the tangent line",
    trust1: "Pick any point x = a",
    trust2: "Instant slope and equation",
    trust3: "Graph with tangent overlay",
  },
  "partial-derivatives": {
    cta: "Partial derivative with respect to x, y, or z",
    trust1: "∂/∂x, ∂/∂y, ∂/∂z selector",
    trust2: "Multivariable presets included",
    trust3: "Holds other variables constant",
  },
  "higher-order": {
    cta: "Compute the nth derivative",
    trust1: "Order slider from 1 through 5",
    trust2: "Visual chain f, f′, f″…",
    trust3: "Dark theme for long study sessions",
  },
  "second-derivative": {
    cta: "Analyze f″ and concavity",
    trust1: "1st, 2nd, 3rd, or nth order",
    trust2: "Automatic concavity & inflection",
    trust3: "Interactive derivative chain",
  },
  "chain-rule": {
    cta: "Decompose f(g(x))",
    trust1: "Outer f(u) and inner g(x) inputs",
    trust2: "Nested visual builder",
    trust3: "f′, g′, and final product",
  },
  "implicit-differentiation": {
    cta: "Solve implicit dy/dx",
    trust1: "Equation mode L = R",
    trust2: "Supports x and y variables",
    trust3: "Full algebraic step trace",
  },
};

export function heroLabels(locale: Locale, kind: SpecializedCalculatorKind): HeroCopy {
  return locale === "es" ? ES[kind] : EN[kind];
}
