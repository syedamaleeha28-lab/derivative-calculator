import type { Lang } from "./dictionary-types";

export type PageSeoEntry = {
  title: string;
  description: string;
  keywords?: string;
};

type LocalizedPageSeo = Record<Lang, PageSeoEntry>;

/** SEO copy for routes not fully covered by dictionaries or static exports. */
export const PAGE_SEO: Record<string, LocalizedPageSeo> = {
  "/derivadas-de-funciones": {
    es: {
      title: "Derivadas de Funciones: Guía Completa de Cálculo Diferencial",
      description:
        "Aprende a derivar funciones polinómicas, racionales y compuestas. Ejemplos resueltos, reglas clave y enlaces a nuestra calculadora de derivadas paso a paso.",
      keywords: "derivada de una función, derivadas de funciones, calcular derivada, cálculo diferencial",
    },
    en: {
      title: "Derivatives of Functions: Complete Differential Calculus Guide",
      description:
        "Learn to differentiate polynomial, rational, and composite functions with solved examples, key rules, and our step-by-step derivative calculator.",
      keywords: "derivative of a function, function derivatives, calculate derivative, differential calculus",
    },
    pt: {
      title: "Derivadas de Funções: Guia Completo de Cálculo Diferencial",
      description:
        "Aprenda a derivar funções polinomiais, racionais e compostas com exemplos resolvidos, regras essenciais e nossa calculadora de derivadas passo a passo.",
      keywords: "derivada de função, derivadas de funções, calcular derivada, cálculo diferencial",
    },
  },
  "/derivadas-de-varias-variables": {
    es: {
      title: "Derivadas de Varias Variables: Guía Multivariable",
      description:
        "Introducción a derivadas parciales y funciones de varias variables con notación, ejemplos y recursos para practicar online.",
    },
    en: {
      title: "Derivatives of Several Variables: Multivariable Guide",
      description:
        "Introduction to partial derivatives and multivariable functions with notation, examples, and free online practice resources.",
    },
    pt: {
      title: "Derivadas de Várias Variáveis: Guia Multivariável",
      description:
        "Introdução a derivadas parciais e funções de várias variáveis com notação, exemplos e recursos para praticar online.",
    },
  },
  "/derivadas-exponenciales": {
    es: {
      title: "Derivadas Exponenciales: e^x y Más | Guía con Ejemplos",
      description:
        "Domina la derivada de funciones exponenciales y e^x. Fórmulas, ejemplos paso a paso y calculadora simbólica gratuita.",
    },
    en: {
      title: "Exponential Derivatives: e^x and More | Examples Guide",
      description:
        "Master derivatives of exponential functions and e^x with formulas, step-by-step examples, and a free symbolic calculator.",
    },
    pt: {
      title: "Derivadas Exponenciais: e^x e Mais | Guia com Exemplos",
      description:
        "Domine a derivada de funções exponenciais e e^x com fórmulas, exemplos passo a passo e calculadora simbólica gratuita.",
    },
  },
  "/derivadas-logaritmicas": {
    es: {
      title: "Derivadas Logarítmicas: ln(x) y log(x) Explicadas",
      description:
        "Guía de derivadas logarítmicas con reglas, ejemplos resueltos y procedimiento detallado usando nuestra calculadora online.",
    },
    en: {
      title: "Logarithmic Derivatives: ln(x) and log(x) Explained",
      description:
        "Logarithmic differentiation rules with solved examples and detailed steps using our online derivative calculator.",
    },
    pt: {
      title: "Derivadas Logarítmicas: ln(x) e log(x) Explicadas",
      description:
        "Guia de derivadas logarítmicas com regras, exemplos resolvidos e passos detalhados com nossa calculadora online.",
    },
  },
  "/derivadas-por-definicion": {
    es: {
      title: "Derivada por Definición: Límite y Ejemplos Resueltos",
      description:
        "Entiende la derivada por definición del límite, interpretación geométrica y ejercicios resueltos paso a paso.",
    },
    en: {
      title: "Derivative by Definition: Limit and Solved Examples",
      description:
        "Understand the limit definition of the derivative, geometric meaning, and step-by-step solved exercises.",
    },
    pt: {
      title: "Derivada por Definição: Limite e Exemplos Resolvidos",
      description:
        "Entenda a derivada pela definição de limite, interpretação geométrica e exercícios resolvidos passo a passo.",
    },
  },
  "/calculadora-de-segundas-derivadas": {
    es: {
      title: "Calculadora de Segundas Derivadas Online Gratis",
      description:
        "Calcula la segunda derivada f''(x) con procedimiento paso a paso. Ideal para concavidad, puntos de inflexión y optimización.",
    },
    en: {
      title: "Free Online Second Derivative Calculator",
      description:
        "Compute the second derivative f''(x) with step-by-step work. Perfect for concavity, inflection points, and optimization.",
    },
    pt: {
      title: "Calculadora de Segunda Derivada Online Grátis",
      description:
        "Calcule a segunda derivada f''(x) com passos detalhados. Ideal para concavidade, pontos de inflexão e otimização.",
    },
  },
  "/calculadora-de-derivadas-implicitas": {
    es: {
      title: "Derivación Implícita: Calculadora y Guía Paso a Paso",
      description:
        "Resuelve derivadas implícitas online con explicación detallada. Ejemplos de circunferencias, elipses y curvas definidas implícitamente.",
    },
    en: {
      title: "Implicit Differentiation: Calculator and Step-by-Step Guide",
      description:
        "Solve implicit derivatives online with detailed explanations. Examples with circles, ellipses, and implicit curves.",
    },
    pt: {
      title: "Derivação Implícita: Calculadora e Guia Passo a Passo",
      description:
        "Resolva derivadas implícitas online com explicação detalhada. Exemplos com circunferências, elipses e curvas implícitas.",
    },
  },
  "/calculadora-de-derivadas-trigonometricas": {
    es: {
      title: "Derivadas Trigonométricas: sin, cos, tan y Más",
      description:
        "Tabla y ejemplos de derivadas trigonométricas. Usa la calculadora para obtener resultados exactos con pasos.",
    },
    en: {
      title: "Trigonometric Derivatives: sin, cos, tan and More",
      description:
        "Table and examples of trigonometric derivatives. Use the calculator for exact results with steps.",
    },
    pt: {
      title: "Derivadas Trigonométricas: sin, cos, tan e Mais",
      description:
        "Tabela e exemplos de derivadas trigonométricas. Use a calculadora para resultados exatos com passos.",
    },
  },
  "/rules/regla-de-la-potencia": {
    es: {
      title: "Regla de la Potencia: Fórmula, Ejemplos y Guía Completa",
      description:
        "Aprende a derivar potencias con pasos detallados. Domina la regla de la potencia con ejemplos resueltos y errores comunes.",
    },
    en: {
      title: "Power Rule: Formula, Examples and Complete Guide",
      description:
        "Learn to differentiate powers with detailed steps. Master the power rule with solved examples and common mistakes.",
    },
    pt: {
      title: "Regra da Potência: Fórmula, Exemplos e Guia Completo",
      description:
        "Aprenda a derivar potências com passos detalhados. Domine a regra da potência com exemplos resolvidos.",
    },
  },
  "/rules/regla-de-la-cadena": {
    es: {
      title: "Regla de la Cadena: Derivadas Compuestas Paso a Paso",
      description:
        "Guía completa de la regla de la cadena con fórmula, ejemplos resueltos y estrategias para funciones anidadas.",
    },
    en: {
      title: "Chain Rule: Composite Derivatives Step by Step",
      description:
        "Complete chain rule guide with formula, solved examples, and strategies for nested functions.",
    },
    pt: {
      title: "Regra da Cadeia: Derivadas Compostas Passo a Passo",
      description:
        "Guia completa da regra da cadeia com fórmula, exemplos resolvidos e estratégias para funções aninhadas.",
    },
  },
  "/rules/regla-del-producto": {
    es: {
      title: "Regla del Producto: Fórmula (uv)' y Ejemplos",
      description:
        "Aprende a derivar productos de funciones con la regla del producto. Ejemplos detallados y enlaces a la calculadora.",
    },
    en: {
      title: "Product Rule: (uv)' Formula and Examples",
      description:
        "Learn to differentiate products of functions with the product rule. Detailed examples and calculator links.",
    },
    pt: {
      title: "Regra do Produto: Fórmula (uv)' e Exemplos",
      description:
        "Aprenda a derivar produtos de funções com a regra do produto. Exemplos detalhados e links para a calculadora.",
    },
  },
  "/rules/regla-del-cociente": {
    es: {
      title: "Regla del Cociente: Derivadas de Fracciones",
      description:
        "Domina la regla del cociente para derivar fracciones y cocientes. Fórmula, ejemplos y procedimiento paso a paso.",
    },
    en: {
      title: "Quotient Rule: Derivatives of Fractions",
      description:
        "Master the quotient rule for differentiating fractions. Formula, examples, and step-by-step procedure.",
    },
    pt: {
      title: "Regra do Quociente: Derivadas de Frações",
      description:
        "Domine a regra do quociente para derivar frações. Fórmula, exemplos e procedimento passo a passo.",
    },
  },
  "/rules/derivadas-trigonometricas": {
    es: {
      title: "Derivadas Trigonométricas: Tabla y Reglas",
      description:
        "Consulta derivadas de seno, coseno, tangente y funciones trigonométricas inversas con ejemplos prácticos.",
    },
    en: {
      title: "Trigonometric Derivatives: Table and Rules",
      description:
        "Reference derivatives of sine, cosine, tangent, and inverse trig functions with practical examples.",
    },
    pt: {
      title: "Derivadas Trigonométricas: Tabela e Regras",
      description:
        "Consulte derivadas de seno, cosseno, tangente e funções trigonométricas inversas com exemplos práticos.",
    },
  },
  "/about": {
    es: {
      title: "Acerca de Calculadora Derivadas",
      description: "Conoce nuestra misión: calculadora de derivadas gratuita con pasos para estudiantes y docentes.",
    },
    en: {
      title: "About Derivative Calculator",
      description: "Learn about our mission: free step-by-step derivative calculator for students and teachers.",
    },
    pt: {
      title: "Sobre a Calculadora Derivadas",
      description: "Conheça nossa missão: calculadora de derivadas gratuita com passos para estudantes e professores.",
    },
  },
  "/contact": {
    es: {
      title: "Contacto | Calculadora Derivadas",
      description: "Ponte en contacto con el equipo de Calculadora Derivadas. Dudas, sugerencias y colaboraciones.",
    },
    en: {
      title: "Contact | Derivative Calculator",
      description: "Contact the Derivative Calculator team. Questions, suggestions, and collaborations.",
    },
    pt: {
      title: "Contato | Calculadora Derivadas",
      description: "Entre em contato com a equipe da Calculadora Derivadas. Dúvidas, sugestões e colaborações.",
    },
  },
  "/disclaimer": {
    es: {
      title: "Aviso Legal | Calculadora Derivadas",
      description: "Aviso legal y descargo de responsabilidad sobre el uso educativo de la calculadora.",
    },
    en: {
      title: "Disclaimer | Derivative Calculator",
      description: "Legal notice and disclaimer regarding educational use of the calculator.",
    },
    pt: {
      title: "Aviso Legal | Calculadora Derivadas",
      description: "Aviso legal e isenção de responsabilidade sobre o uso educativo da calculadora.",
    },
  },
  "/privacy-policy": {
    es: {
      title: "Privacy Policy",
      description: "Privacy policy for Derivative Calculator — data handling and compliance.",
    },
    en: {
      title: "Privacy Policy | Derivative Calculator",
      description: "Privacy policy describing how we handle data when you use our calculator and resources.",
    },
    pt: {
      title: "Política de Privacidade",
      description: "Política de privacidade da Calculadora Derivadas — tratamento de dados e conformidade.",
    },
  },
  "/terms": {
    es: {
      title: "Terms of Service",
      description: "Terms of service for using the derivative calculator.",
    },
    en: {
      title: "Terms of Service | Derivative Calculator",
      description: "Terms and conditions for using the online derivative calculator.",
    },
    pt: {
      title: "Termos de Serviço",
      description: "Termos de serviço para uso da calculadora de derivadas online.",
    },
  },
};

/** Map canonical internal paths to PAGE_SEO registry keys. */
export const PAGE_SEO_PATH_ALIASES: Record<string, string> = {
  "/derivatives-of-functions": "/derivadas-de-funciones",
  "/multivariable-derivatives": "/derivadas-de-varias-variables",
  "/exponential-derivatives": "/derivadas-exponenciales",
  "/logarithmic-derivatives": "/derivadas-logaritmicas",
  "/derivative-by-definition": "/derivadas-por-definicion",
  "/second-derivative-calculator": "/calculadora-de-segundas-derivadas",
  "/implicit-derivative-calculator": "/calculadora-de-derivadas-implicitas",
  "/trigonometric-derivative-calculator": "/calculadora-de-derivadas-trigonometricas",
};

export function getPageSeo(path: string, lang: Lang): PageSeoEntry | undefined {
  const key = PAGE_SEO_PATH_ALIASES[path] ?? path;
  return PAGE_SEO[key]?.[lang];
}

