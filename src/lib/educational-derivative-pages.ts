import type { Lang } from "./dictionary-types";

export type EducationalDerivativePage = {
  slug: string;
  expression: string;
  latexFormula: string;
  latexExample: string;
  calculatorInput: string;
  tags: string[];
  copy: Record<
    Lang,
    {
      title: string;
      description: string;
      intro: string;
      formulaTitle: string;
      examplesTitle: string;
      exampleTitle: string;
      category: string;
    }
  >;
};

export const EDUCATIONAL_DERIVATIVE_PAGES: EducationalDerivativePage[] = [
  {
    slug: "sin-x",
    expression: "sin(x)",
    latexFormula: "\\dfrac{d}{dx}[\\sin(x)] = \\cos(x)",
    latexExample: "f(x)=\\sin(x) \\implies f'(x)=\\cos(x)",
    calculatorInput: "sin(x)",
    tags: ["Trigonometry", "sin(x)"],
    copy: {
      es: {
        title: "Derivada de sin(x)",
        description: "Aprende a derivar sen(x) con la regla básica y ejemplos resueltos.",
        intro: "La derivada del seno es uno de los resultados fundamentales del cálculo diferencial.",
        formulaTitle: "Fórmula",
        examplesTitle: "Ejemplo resuelto",
        exampleTitle: "Derivada de sin(x)",
        category: "Trigonometría",
      },
      en: {
        title: "Derivative of sin(x)",
        description: "Learn how to differentiate sin(x) with the basic rule and solved examples.",
        intro: "The derivative of sine is one of the fundamental results in differential calculus.",
        formulaTitle: "Formula",
        examplesTitle: "Solved example",
        exampleTitle: "Derivative of sin(x)",
        category: "Trigonometry",
      },
      pt: {
        title: "Derivada de sin(x)",
        description: "Aprenda a derivar sen(x) com a regra básica e exemplos resolvidos.",
        intro: "A derivada do seno é um dos resultados fundamentais do cálculo diferencial.",
        formulaTitle: "Fórmula",
        examplesTitle: "Exemplo resolvido",
        exampleTitle: "Derivada de sin(x)",
        category: "Trigonometria",
      },
    },
  },
  {
    slug: "cos-x",
    expression: "cos(x)",
    latexFormula: "\\dfrac{d}{dx}[\\cos(x)] = -\\sin(x)",
    latexExample: "f(x)=\\cos(x) \\implies f'(x)=-\\sin(x)",
    calculatorInput: "cos(x)",
    tags: ["Trigonometry", "cos(x)"],
    copy: {
      es: {
        title: "Derivada de cos(x)",
        description: "Guía de la derivada del coseno con fórmula, pasos y ejemplos.",
        intro: "La derivada de cos(x) es -sin(x). Es esencial en funciones trigonométricas compuestas.",
        formulaTitle: "Fórmula",
        examplesTitle: "Ejemplo resuelto",
        exampleTitle: "Derivada de cos(x)",
        category: "Trigonometría",
      },
      en: {
        title: "Derivative of cos(x)",
        description: "Guide to the cosine derivative with formula, steps, and examples.",
        intro: "The derivative of cos(x) is -sin(x). It is essential in composite trigonometric functions.",
        formulaTitle: "Formula",
        examplesTitle: "Solved example",
        exampleTitle: "Derivative of cos(x)",
        category: "Trigonometry",
      },
      pt: {
        title: "Derivada de cos(x)",
        description: "Guia da derivada do cosseno com fórmula, passos e exemplos.",
        intro: "A derivada de cos(x) é -sin(x). É essencial em funções trigonométricas compostas.",
        formulaTitle: "Fórmula",
        examplesTitle: "Exemplo resolvido",
        exampleTitle: "Derivada de cos(x)",
        category: "Trigonometria",
      },
    },
  },
  {
    slug: "tan-x",
    expression: "tan(x)",
    latexFormula: "\\dfrac{d}{dx}[\\tan(x)] = \\sec^2(x)",
    latexExample: "f(x)=\\tan(x) \\implies f'(x)=\\sec^2(x)",
    calculatorInput: "tan(x)",
    tags: ["Trigonometry", "tan(x)"],
    copy: {
      es: {
        title: "Derivada de tan(x)",
        description: "Derivada de la tangente explicada con fórmula sec²(x) y ejemplos.",
        intro: "La tangente se deriva usando el cociente de seno y coseno, o la regla directa.",
        formulaTitle: "Fórmula",
        examplesTitle: "Ejemplo resuelto",
        exampleTitle: "Derivada de tan(x)",
        category: "Trigonometría",
      },
      en: {
        title: "Derivative of tan(x)",
        description: "Tangent derivative explained with the sec²(x) formula and examples.",
        intro: "Tangent can be differentiated using the quotient of sine and cosine, or the direct rule.",
        formulaTitle: "Formula",
        examplesTitle: "Solved example",
        exampleTitle: "Derivative of tan(x)",
        category: "Trigonometry",
      },
      pt: {
        title: "Derivada de tan(x)",
        description: "Derivada da tangente com a fórmula sec²(x) e exemplos.",
        intro: "A tangente pode ser derivada pelo quociente de seno e cosseno, ou pela regra direta.",
        formulaTitle: "Fórmula",
        examplesTitle: "Exemplo resolvido",
        exampleTitle: "Derivada de tan(x)",
        category: "Trigonometria",
      },
    },
  },
  {
    slug: "ln-x",
    expression: "ln(x)",
    latexFormula: "\\dfrac{d}{dx}[\\ln(x)] = \\dfrac{1}{x}",
    latexExample: "f(x)=\\ln(x) \\implies f'(x)=\\dfrac{1}{x}",
    calculatorInput: "ln(x)",
    tags: ["Logarithms", "ln(x)"],
    copy: {
      es: {
        title: "Derivada de ln(x)",
        description: "Regla del logaritmo natural: derivada de ln(x) es 1/x con ejemplos.",
        intro: "El logaritmo natural aparece en crecimiento exponencial y en integración.",
        formulaTitle: "Fórmula",
        examplesTitle: "Ejemplo resuelto",
        exampleTitle: "Derivada de ln(x)",
        category: "Logaritmos",
      },
      en: {
        title: "Derivative of ln(x)",
        description: "Natural logarithm rule: the derivative of ln(x) is 1/x with examples.",
        intro: "The natural logarithm appears in exponential growth and integration.",
        formulaTitle: "Formula",
        examplesTitle: "Solved example",
        exampleTitle: "Derivative of ln(x)",
        category: "Logarithms",
      },
      pt: {
        title: "Derivada de ln(x)",
        description: "Regra do logaritmo natural: a derivada de ln(x) é 1/x com exemplos.",
        intro: "O logaritmo natural aparece em crescimento exponencial e integração.",
        formulaTitle: "Fórmula",
        examplesTitle: "Exemplo resolvido",
        exampleTitle: "Derivada de ln(x)",
        category: "Logaritmos",
      },
    },
  },
  {
    slug: "e-x",
    expression: "e^x",
    latexFormula: "\\dfrac{d}{dx}[e^x] = e^x",
    latexExample: "f(x)=e^x \\implies f'(x)=e^x",
    calculatorInput: "e^x",
    tags: ["Exponentials", "e^x"],
    copy: {
      es: {
        title: "Derivada de e^x",
        description: "La exponencial natural es su propia derivada. Guía con ejemplos.",
        intro: "La función e^x es única: su tasa de cambio instantánea coincide con su valor.",
        formulaTitle: "Fórmula",
        examplesTitle: "Ejemplo resuelto",
        exampleTitle: "Derivada de e^x",
        category: "Exponenciales",
      },
      en: {
        title: "Derivative of e^x",
        description: "The natural exponential is its own derivative. Guide with examples.",
        intro: "The function e^x is unique: its instantaneous rate of change equals its value.",
        formulaTitle: "Formula",
        examplesTitle: "Solved example",
        exampleTitle: "Derivative of e^x",
        category: "Exponentials",
      },
      pt: {
        title: "Derivada de e^x",
        description: "A exponencial natural é sua própria derivada. Guia com exemplos.",
        intro: "A função e^x é única: sua taxa de variação instantânea coincide com seu valor.",
        formulaTitle: "Fórmula",
        examplesTitle: "Exemplo resolvido",
        exampleTitle: "Derivada de e^x",
        category: "Exponenciais",
      },
    },
  },
  {
    slug: "x-squared",
    expression: "x^2",
    latexFormula: "\\dfrac{d}{dx}[x^2] = 2x",
    latexExample: "f(x)=x^2 \\implies f'(x)=2x",
    calculatorInput: "x^2",
    tags: ["Power rule", "x^2"],
    copy: {
      es: {
        title: "Derivada de x²",
        description: "Regla de la potencia aplicada a x². Resultado 2x con procedimiento.",
        intro: "x² es el ejemplo clásico de la regla de la potencia en cálculo introductorio.",
        formulaTitle: "Fórmula",
        examplesTitle: "Ejemplo resuelto",
        exampleTitle: "Derivada de x²",
        category: "Potencias",
      },
      en: {
        title: "Derivative of x²",
        description: "Power rule applied to x². Result 2x with step-by-step work.",
        intro: "x² is the classic example of the power rule in introductory calculus.",
        formulaTitle: "Formula",
        examplesTitle: "Solved example",
        exampleTitle: "Derivative of x²",
        category: "Powers",
      },
      pt: {
        title: "Derivada de x²",
        description: "Regra da potência aplicada a x². Resultado 2x com procedimento.",
        intro: "x² é o exemplo clássico da regra da potência no cálculo introdutório.",
        formulaTitle: "Fórmula",
        examplesTitle: "Exemplo resolvido",
        exampleTitle: "Derivada de x²",
        category: "Potências",
      },
    },
  },
];

export function getEducationalPage(slug: string): EducationalDerivativePage | undefined {
  return EDUCATIONAL_DERIVATIVE_PAGES.find((p) => p.slug === slug);
}

export function educationalPagePath(slug: string): string {
  return `/derivative-of-${slug}`;
}
