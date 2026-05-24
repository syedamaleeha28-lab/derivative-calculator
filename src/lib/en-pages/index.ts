import { EN_ROUTES } from "../en-routes";

export type EnWorkedExample = {
  title: string;
  problem: string;
  steps: string[];
  result: string;
};

export type EnFaqItem = { q: string; a: string };

export type EnRelatedCalculator = {
  label: string;
  href: string;
  description: string;
};

export type EnCalculatorPageConfig = {
  slug: string;
  path: string;
  h1: string;
  intro: string[];
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  defaultExamples: string[];
  defaultVariable?: string;
  examples: EnWorkedExample[];
  faqs: EnFaqItem[];
  relatedCalculators: EnRelatedCalculator[];
  internalLinks: { label: string; href: string }[];
  educationalSections: { h2: string; paragraphs: string[] }[];
};

const SHARED_INTERNAL_LINKS = [
  { label: "View derivative examples (Spanish)", href: "/ejemplos" },
  { label: "Learn derivation rules (Spanish)", href: "/reglas" },
  { label: "Read our calculus blog (Spanish)", href: "/blog" },
  { label: "Spanish homepage", href: "/" },
];

export const EN_HOME_FAQS: EnFaqItem[] = [
  {
    q: "What is a derivative calculator used for?",
    a: "A derivative calculator finds the rate of change of a function automatically. Students use it to check homework, prepare for exams, and learn the procedure through step-by-step explanations.",
  },
  {
    q: "Is this derivative calculator free?",
    a: "Yes. The tool is completely free for educational use and runs in your browser without installing software.",
  },
  {
    q: "Can I compute partial and implicit derivatives?",
    a: "Yes. Choose your variable for multivariable expressions, and enter implicit-style equations to see symbolic differentiation with intermediate steps.",
  },
  {
    q: "Does the calculator show step-by-step work?",
    a: "Every result includes a detailed breakdown naming the differentiation rule applied at each stage—power, product, quotient, or chain rule.",
  },
  {
    q: "Is there a Spanish version of the site?",
    a: "Yes. The primary site at calculadora-derivadas.org is in Spanish, with guides, examples, and a full blog. Use the language switcher anytime.",
  },
];

export const EN_CALCULATOR_PAGES: Record<string, EnCalculatorPageConfig> = {
  derivativeCalculator: {
    slug: "derivative-calculator",
    path: EN_ROUTES.derivativeCalculator,
    h1: "Derivative Calculator — Step-by-Step Online Tool",
    intro: [
      "This derivative calculator computes exact symbolic derivatives and walks you through each algebraic step. Whether you are reviewing for a calculus exam or exploring a new function type, the tool handles polynomials, rationals, trigonometric expressions, exponentials, and logarithms.",
      "Enter any expression using standard math notation, pick your variable, and press Calculate. The engine applies the correct differentiation rules and presents a simplified final answer you can compare with your handwritten work.",
    ],
    meta: {
      title: "Derivative Calculator with Steps — Free Online Tool",
      description:
        "Free derivative calculator with step-by-step solutions. Differentiate polynomials, trig, exponential, and composite functions online. Built for calculus students.",
      keywords:
        "derivative calculator, derivative calculator with steps, online derivative calculator, free derivative calculator, calculus derivative tool",
    },
    defaultExamples: ["x^3 - 2*x", "sin(x)*cos(x)", "ln(x^2+1)", "e^(3*x)"],
    examples: [
      {
        title: "Power rule on a polynomial",
        problem: "Find d/dx [4x³ − 7x + 2]",
        steps: [
          "Apply the power rule to each term: d/dx[xⁿ] = n·xⁿ⁻¹.",
          "For 4x³: 4 · 3x² = 12x².",
          "For −7x: the derivative is −7.",
          "The constant 2 differentiates to 0.",
        ],
        result: "12x² − 7",
      },
      {
        title: "Product of sine and cosine",
        problem: "Differentiate f(x) = sin(x)·cos(x)",
        steps: [
          "Identify a product: u = sin(x), v = cos(x).",
          "Product rule: u′v + uv′ = cos(x)·cos(x) + sin(x)·(−sin(x)).",
          "Combine: cos²(x) − sin²(x), which equals cos(2x).",
        ],
        result: "cos(2x)",
      },
      {
        title: "Chain rule with a nested exponential",
        problem: "Find the derivative of e^(x²)",
        steps: [
          "Outer function: e^u where u = x².",
          "Chain rule: e^(x²) · d/dx[x²].",
          "Inner derivative: 2x.",
        ],
        result: "2x·e^(x²)",
      },
    ],
    faqs: [
      {
        q: "What types of functions can this derivative calculator handle?",
        a: "Polynomials, rational functions, roots, exponentials, natural logarithms, and all standard trigonometric functions—including compositions that require the chain rule.",
      },
      {
        q: "How accurate are the step-by-step results?",
        a: "The engine uses symbolic algebra (not numerical approximation), so results are exact for expressions within its supported syntax.",
      },
      {
        q: "Can I use this derivative calculator on mobile?",
        a: "Yes. The interface is responsive and includes a built-in math keypad for phones and tablets.",
      },
      {
        q: "What notation should I use when typing expressions?",
        a: "Use sin(x), cos(x), ln(x), e^(x), and ^ for powers. Wrap complex arguments in parentheses, e.g. sin(2*x+1).",
      },
    ],
    relatedCalculators: [
      {
        label: "Partial derivative calculator",
        href: EN_ROUTES.partialDerivativeCalculator,
        description: "Differentiate multivariable functions with respect to x, y, or other variables.",
      },
      {
        label: "Chain rule derivative calculator",
        href: EN_ROUTES.chainRuleDerivativeCalculator,
        description: "Practice nested functions where the chain rule is essential.",
      },
      {
        label: "Second derivative calculator",
        href: EN_ROUTES.secondDerivativeCalculator,
        description: "Compute f″(x) to analyze concavity and acceleration.",
      },
    ],
    internalLinks: [
      { label: "Try our implicit derivative calculator", href: EN_ROUTES.implicitDerivativeCalculator },
      { label: "Learn chain rule differentiation", href: EN_ROUTES.chainRuleDerivativeCalculator },
      { label: "View derivative examples", href: "/ejemplos" },
      ...SHARED_INTERNAL_LINKS,
    ],
    educationalSections: [
      {
        h2: "Understanding derivatives in calculus",
        paragraphs: [
          "A derivative measures how a function changes at a specific point. Geometrically, it is the slope of the tangent line; physically, it often represents velocity or marginal rate.",
          "Before relying on any calculator, make sure you know which rule applies: power, product, quotient, or chain. The step-by-step output here names each rule so you can connect the result to your textbook.",
        ],
      },
      {
        h2: "When to use an online derivative calculator",
        paragraphs: [
          "Use the tool after attempting a problem by hand. Compare your intermediate steps to the automated breakdown to spot sign errors or missing chain-rule factors.",
          "For exam preparation, cycle through varied examples—polynomials first, then trig compositions, then rational expressions—to build pattern recognition.",
        ],
      },
    ],
  },

  partialDerivativeCalculator: {
    slug: "partial-derivative-calculator",
    path: EN_ROUTES.partialDerivativeCalculator,
    h1: "Partial Derivative Calculator for Multivariable Functions",
    intro: [
      "Partial derivatives describe how a function of several variables changes when you vary one variable while holding the others fixed. This partial derivative calculator helps you compute ∂f/∂x, ∂f/∂y, and similar results with clear symbolic steps.",
      "Multivariable calculus appears in physics, economics, machine learning, and engineering. Use the variable selector to specify which variable you are differentiating with respect to.",
    ],
    meta: {
      title: "Partial Derivative Calculator — Multivariable Step-by-Step",
      description:
        "Free partial derivative calculator with steps. Compute ∂f/∂x and ∂f/∂y for multivariable functions. Ideal for calculus II and engineering students.",
      keywords:
        "partial derivative calculator, multivariable derivative calculator, partial derivatives online, ∂f/∂x calculator, calculus partial derivative tool",
    },
    defaultExamples: ["x^2*y + y^3", "sin(x*y)", "x*exp(y)", "x^2 + y^2 + z^2"],
    defaultVariable: "x",
    examples: [
      {
        title: "Basic polynomial in two variables",
        problem: "Find ∂/∂x [x²y + y³]",
        steps: [
          "Treat y and y³ as constants when differentiating with respect to x.",
          "∂/∂x[x²y] = 2x·y (power rule, y is a constant factor).",
          "∂/∂x[y³] = 0 because y³ does not depend on x.",
        ],
        result: "2xy",
      },
      {
        title: "Trigonometric product",
        problem: "Compute ∂/∂y [sin(xy)]",
        steps: [
          "Use the chain rule: outer derivative cos(xy), inner derivative with respect to y.",
          "Inner: ∂/∂y[xy] = x (treat x as constant).",
          "Combine: cos(xy) · x.",
        ],
        result: "x·cos(xy)",
      },
      {
        title: "Exponential in y only",
        problem: "Find ∂/∂x [x·e^y]",
        steps: [
          "e^y is constant with respect to x.",
          "Product: e^y · ∂/∂x[x] = e^y · 1.",
        ],
        result: "e^y",
      },
    ],
    faqs: [
      {
        q: "What is the difference between a partial and ordinary derivative?",
        a: "An ordinary derivative d/dx applies when the function depends on one variable. A partial derivative ∂/∂x treats all other variables as constants.",
      },
      {
        q: "How do I choose the variable in this calculator?",
        a: "Open Advanced Options and set the variable to x, y, t, or another symbol present in your expression.",
      },
      {
        q: "Can I compute second-order partial derivatives?",
        a: "Differentiate the first result again with respect to the same or a different variable. See our second derivative calculator for curvature-style problems in one variable.",
      },
      {
        q: "Where are partial derivatives used in real applications?",
        a: "Gradient descent in machine learning, thermodynamics, marginal utility in economics, and any model with multiple independent inputs.",
      },
    ],
    relatedCalculators: [
      {
        label: "Derivative calculator",
        href: EN_ROUTES.derivativeCalculator,
        description: "Single-variable differentiation with full step breakdown.",
      },
      {
        label: "Second derivative calculator",
        href: EN_ROUTES.secondDerivativeCalculator,
        description: "Analyze concavity and second-order behavior.",
      },
      {
        label: "Implicit derivative calculator",
        href: EN_ROUTES.implicitDerivativeCalculator,
        description: "Handle equations where y is not isolated.",
      },
    ],
    internalLinks: [
      { label: "Multivariable examples (Spanish)", href: "/blog/derivadas-parciales-ejemplos" },
      { label: "Derivation rules reference", href: "/reglas" },
      { label: "Try our main derivative calculator", href: EN_ROUTES.derivativeCalculator },
      ...SHARED_INTERNAL_LINKS,
    ],
    educationalSections: [
      {
        h2: "Notation for partial derivatives",
        paragraphs: [
          "Common notations include ∂f/∂x, f_x, and D_x f. All mean the same thing: differentiate with respect to x while holding other variables fixed.",
          "In a function like f(x,y) = x² + xy, ∂f/∂x = 2x + y and ∂f/∂y = x. Notice how each partial focuses on one direction of change.",
        ],
      },
      {
        h2: "Studying multivariable calculus effectively",
        paragraphs: [
          "Start with simple polynomials before moving to trig and exponential mixes. Always ask: which letters are constants for this partial?",
          "Verify results by taking the partial with respect to the other variable and checking symmetry in conservative fields when applicable.",
        ],
      },
    ],
  },

  implicitDerivativeCalculator: {
    slug: "implicit-derivative-calculator",
    path: EN_ROUTES.implicitDerivativeCalculator,
    h1: "Implicit Derivative Calculator with Step-by-Step Solutions",
    intro: [
      "Implicit differentiation finds dy/dx when y is not written explicitly as a function of x—think circles, ellipses, or equations like x² + y² = 25. This implicit derivative calculator applies the chain rule to every term containing y.",
      "Instead of solving for y first, differentiate both sides with respect to x, treat y as y(x), and solve for dy/dx. Our tool automates the symbolic work and shows the reasoning.",
    ],
    meta: {
      title: "Implicit Derivative Calculator — dy/dx Step-by-Step",
      description:
        "Free implicit derivative calculator online. Differentiate equations like x²+y²=r² and find dy/dx with clear steps. Perfect for calculus I and II.",
      keywords:
        "implicit derivative calculator, implicit differentiation calculator, dy/dx implicit, implicit derivatives online, calculus implicit differentiation",
    },
    defaultExamples: ["x^2 + y^2", "x*y + x", "sin(x*y)", "x^3 + y^3 - 3*x*y"],
    examples: [
      {
        title: "Circle equation",
        problem: "Given x² + y² = 25, find dy/dx",
        steps: [
          "Differentiate both sides with respect to x.",
          "d/dx[x²] = 2x. For y² use chain rule: 2y · dy/dx.",
          "Set 2x + 2y·dy/dx = 0 and solve: dy/dx = −x/y.",
        ],
        result: "−x/y",
      },
      {
        title: "Product with implicit y",
        problem: "Find dy/dx for x·y + x = 1",
        steps: [
          "Differentiate: product rule on x·y gives y + x·dy/dx.",
          "Derivative of x is 1; derivative of constant 1 is 0.",
          "Solve y + x·dy/dx + 1 = 0 → dy/dx = −(y+1)/x.",
        ],
        result: "−(y+1)/x",
      },
      {
        title: "Trigonometric implicit relation",
        problem: "Differentiate sin(xy) = x implicitly",
        steps: [
          "Chain rule on sin(xy): cos(xy)·d/dx[xy].",
          "Product inside: y + x·dy/dx.",
          "Set cos(xy)(y + x·dy/dx) = 1 and isolate dy/dx.",
        ],
        result: "(1 − y·cos(xy)) / (x·cos(xy))",
      },
    ],
    faqs: [
      {
        q: "When do I need implicit differentiation?",
        a: "Whenever y cannot be isolated easily—or when the equation mixes x and y in a way that makes explicit form awkward, such as conic sections.",
      },
      {
        q: "Why do we multiply by dy/dx when differentiating y?",
        a: "Because y is a function of x. The chain rule adds a factor of dy/dx every time you differentiate a term containing y.",
      },
      {
        q: "Can this calculator handle implicit trig equations?",
        a: "Yes. Enter expressions involving sin(y), cos(xy), or similar. Use parentheses for clarity.",
      },
      {
        q: "Where can I read a full implicit differentiation guide?",
        a: "See our Spanish step-by-step article on implicit derivatives in the blog, linked below.",
      },
    ],
    relatedCalculators: [
      {
        label: "Chain rule derivative calculator",
        href: EN_ROUTES.chainRuleDerivativeCalculator,
        description: "Master the chain rule—the core technique behind implicit differentiation.",
      },
      {
        label: "Derivative calculator",
        href: EN_ROUTES.derivativeCalculator,
        description: "Explicit functions and standard differentiation rules.",
      },
      {
        label: "Second derivative calculator",
        href: EN_ROUTES.secondDerivativeCalculator,
        description: "Analyze curvature after finding the first derivative.",
      },
    ],
    internalLinks: [
      { label: "Implicit derivatives guide (Spanish)", href: "/blog/derivadas-implicitas-paso-a-paso" },
      { label: "Learn chain rule differentiation", href: EN_ROUTES.chainRuleDerivativeCalculator },
      { label: "View derivative examples", href: "/ejemplos" },
      ...SHARED_INTERNAL_LINKS,
    ],
    educationalSections: [
      {
        h2: "The implicit differentiation procedure",
        paragraphs: [
          "Step 1: Differentiate every term with respect to x. Step 2: Apply the chain rule to any term with y, introducing dy/dx. Step 3: Collect dy/dx terms on one side and factor. Step 4: Divide to isolate dy/dx.",
          "This method avoids messy algebra from solving for y first and works even when explicit form does not exist globally.",
        ],
      },
      {
        h2: "Common mistakes to avoid",
        paragraphs: [
          "Forgetting the dy/dx factor when differentiating y^n is the most frequent error. Another is treating y as a constant—remember it depends on x.",
          "Always substitute a specific point after finding dy/dx if the problem asks for the slope at (x₀, y₀).",
        ],
      },
    ],
  },

  secondDerivativeCalculator: {
    slug: "second-derivative-calculator",
    path: EN_ROUTES.secondDerivativeCalculator,
    h1: "Second Derivative Calculator — Find f″(x) Online",
    intro: [
      "The second derivative f″(x) tells you how the slope itself is changing—essential for concavity, inflection points, and acceleration in physics. This second derivative calculator differentiates twice and shows each stage.",
      "To use it, enter your function and calculate the first derivative mentally or with the tool, then run the result again—or enter f(x) and differentiate twice in sequence using the same engine.",
    ],
    meta: {
      title: "Second Derivative Calculator — f″(x) with Steps Online",
      description:
        "Free second derivative calculator with step-by-step work. Find f″(x), analyze concavity, and check calculus homework online.",
      keywords:
        "second derivative calculator, f double prime calculator, second derivative with steps, concavity calculator, calculus second derivative",
    },
    defaultExamples: ["x^4 - 3*x^2", "sin(x)", "x*exp(x)", "ln(x)"],
    examples: [
      {
        title: "Polynomial concavity",
        problem: "Find f″(x) for f(x) = x⁴ − 3x²",
        steps: [
          "First derivative: f′(x) = 4x³ − 6x.",
          "Second derivative: f″(x) = 12x² − 6.",
          "Set f″(x) = 0 to find possible inflection: x = ±√(1/2).",
        ],
        result: "12x² − 6",
      },
      {
        title: "Trigonometric second derivative",
        problem: "Compute the second derivative of sin(x)",
        steps: [
          "f′(x) = cos(x).",
          "f″(x) = −sin(x).",
          "The pattern cycles every four derivatives for sine.",
        ],
        result: "−sin(x)",
      },
      {
        title: "Product requiring product rule twice",
        problem: "Find f″(x) for f(x) = x·e^x",
        steps: [
          "First: product rule → e^x + x·e^x = e^x(1+x).",
          "Second: differentiate e^x(1+x) using product rule again.",
          "Result simplifies to e^x(2+x).",
        ],
        result: "e^x(2+x)",
      },
    ],
    faqs: [
      {
        q: "What does the second derivative tell me about a graph?",
        a: "If f″(x) > 0, the graph is concave up (like a cup). If f″(x) < 0, it is concave down. Zeros of f″ may indicate inflection points.",
      },
      {
        q: "How do I compute a second derivative with this tool?",
        a: "Calculate the first derivative of your function, copy the result, paste it back, and differentiate again—or work through two passes manually using the steps shown.",
      },
      {
        q: "Is the second derivative the same as acceleration?",
        a: "In kinematics, if s(t) is position, then s″(t) is acceleration. The mathematical concept is the same: rate of change of the rate of change.",
      },
      {
        q: "Can I find higher-order derivatives?",
        a: "Repeat the process for third and fourth derivatives. Many patterns (especially with e^x and sin x) cycle predictably.",
      },
    ],
    relatedCalculators: [
      {
        label: "Derivative calculator",
        href: EN_ROUTES.derivativeCalculator,
        description: "First derivatives with complete step-by-step solutions.",
      },
      {
        label: "Partial derivative calculator",
        href: EN_ROUTES.partialDerivativeCalculator,
        description: "Second partials for multivariable functions.",
      },
      {
        label: "Chain rule calculator",
        href: EN_ROUTES.chainRuleDerivativeCalculator,
        description: "Needed when the first derivative itself is composite.",
      },
    ],
    internalLinks: [
      { label: "Derivation rules reference (Spanish)", href: "/reglas" },
      { label: "View derivative examples", href: "/ejemplos" },
      { label: "Try our main derivative calculator", href: EN_ROUTES.derivativeCalculator },
      ...SHARED_INTERNAL_LINKS,
    ],
    educationalSections: [
      {
        h2: "Concavity and the second derivative test",
        paragraphs: [
          "When f′(c) = 0, the second derivative test can classify critical points: f″(c) > 0 suggests a local minimum; f″(c) < 0 suggests a local maximum; f″(c) = 0 is inconclusive.",
          "Always combine sign charts and first-derivative behavior for a complete picture—graphs can inflect without simple test outcomes.",
        ],
      },
      {
        h2: "Practice strategy for second derivatives",
        paragraphs: [
          "Pick three function families: pure polynomials, exponentials, and trig. Compute f″ for one example from each without looking, then verify here.",
          "Pay attention to when the product rule fires twice—that is a common exam trap.",
        ],
      },
    ],
  },

  chainRuleDerivativeCalculator: {
    slug: "chain-rule-derivative-calculator",
    path: EN_ROUTES.chainRuleDerivativeCalculator,
    h1: "Chain Rule Derivative Calculator — Composite Functions",
    intro: [
      "The chain rule handles composite functions: an outer function applied to an inner function. If h(x) = f(g(x)), then h′(x) = f′(g(x))·g′(x). This chain rule derivative calculator identifies nested structure and applies the rule automatically.",
      "From sin(3x) to ln(x²+1) and (2x+1)⁵, most ‘hard’ first-semester problems involve the chain rule at least once. Practice recognizing the inner and outer layers before you differentiate.",
    ],
    meta: {
      title: "Chain Rule Derivative Calculator — Composite Functions Online",
      description:
        "Free chain rule derivative calculator with steps. Differentiate sin(2x), ln(x²+1), and nested functions. Learn composite differentiation online.",
      keywords:
        "chain rule derivative calculator, chain rule calculator, composite function derivative, differentiate nested functions, chain rule steps",
    },
    defaultExamples: ["sin(2*x)", "ln(x^2+1)", "(3*x+1)^5", "e^(sin(x))"],
    examples: [
      {
        title: "Sine of a linear inner function",
        problem: "Differentiate sin(3x)",
        steps: [
          "Outer: sin(u), inner: u = 3x.",
          "Outer derivative: cos(u) = cos(3x).",
          "Inner derivative: 3. Multiply: 3cos(3x).",
        ],
        result: "3cos(3x)",
      },
      {
        title: "Logarithm of a polynomial",
        problem: "Find d/dx [ln(x² + 1)]",
        steps: [
          "Outer: ln(u), inner: u = x² + 1.",
          "Outer derivative: 1/u = 1/(x²+1).",
          "Inner derivative: 2x. Product: 2x/(x²+1).",
        ],
        result: "2x/(x²+1)",
      },
      {
        title: "Power of a binomial",
        problem: "Differentiate (2x − 5)⁴",
        steps: [
          "Outer: u⁴, inner: u = 2x − 5.",
          "Outer derivative: 4u³ = 4(2x−5)³.",
          "Inner derivative: 2. Final: 8(2x−5)³.",
        ],
        result: "8(2x−5)³",
      },
    ],
    faqs: [
      {
        q: "How do I know when to use the chain rule?",
        a: "If you can say ‘something inside something else’—sin(…), ln(…), (…)^n, e^(…) — the chain rule applies.",
      },
      {
        q: "What is the most common chain rule mistake?",
        a: "Forgetting to multiply by the derivative of the inner function. Always finish by differentiating the inside.",
      },
      {
        q: "Can the chain rule combine with the product rule?",
        a: "Yes. Many exam problems require both. Differentiate products first, applying the chain rule inside each factor as needed.",
      },
      {
        q: "Where can I practice more chain rule exercises?",
        a: "Try our Spanish blog article on chain rule exercises, or use the related calculators linked on this page.",
      },
    ],
    relatedCalculators: [
      {
        label: "Derivative calculator",
        href: EN_ROUTES.derivativeCalculator,
        description: "General-purpose differentiation for all function types.",
      },
      {
        label: "Implicit derivative calculator",
        href: EN_ROUTES.implicitDerivativeCalculator,
        description: "Implicit differentiation relies heavily on the chain rule.",
      },
      {
        label: "Second derivative calculator",
        href: EN_ROUTES.secondDerivativeCalculator,
        description: "Chain rule often appears again on the first derivative.",
      },
    ],
    internalLinks: [
      { label: "Chain rule exercises (Spanish)", href: "/blog/regla-de-la-cadena-ejercicios" },
      { label: "Understanding the chain rule (Spanish)", href: "/blog/entendiendo-regla-de-la-cadena" },
      { label: "Try our implicit derivative calculator", href: EN_ROUTES.implicitDerivativeCalculator },
      { label: "View derivative examples", href: "/ejemplos" },
      ...SHARED_INTERNAL_LINKS,
    ],
    educationalSections: [
      {
        h2: "Identifying outer and inner functions",
        paragraphs: [
          "Write your function as f(g(x)). For cos(x²), f = cos and g = x². For √(1+x³), f = √ and g = 1+x³. Naming the layers before differentiating prevents skipped factors.",
          "When multiple rules apply, work from the outside in: differentiate the outer shell, keep the inner intact, then multiply by the inner derivative.",
        ],
      },
      {
        h2: "Building speed with composite functions",
        paragraphs: [
          "Drill quick patterns: d/dx[sin(ax)] = a·cos(ax), d/dx[e^(kx)] = k·e^(kx), d/dx[ln(g(x))] = g′(x)/g(x).",
          "Use this chain rule derivative calculator to confirm your mental shortcuts during review sessions.",
        ],
      },
    ],
  },
};

export const EN_PAGE_LIST = Object.values(EN_CALCULATOR_PAGES);

export function getEnPageByPath(path: string): EnCalculatorPageConfig | undefined {
  return EN_PAGE_LIST.find((p) => p.path === path);
}
