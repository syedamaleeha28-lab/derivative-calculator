import { EN_MAIN_CALCULATOR_HREF, EN_ROUTES } from "../en-routes";
import type { CalculatorPageConfig, FaqItem } from "../calculator-pages/types";
import { enStandardInternalLinks } from "../calculator-pages/standard-links";
import {
  productRuleExpandedSections,
  quotientRuleExpandedSections,
  secondDerivativeExpandedSections,
  higherOrderDerivativeExpandedSections,
  tangentLineExpandedSections,
  criticalPointsCalculatorConfig,
} from "./expansion-sections";

export type EnFaqItem = FaqItem;
export type EnCalculatorPageConfig = CalculatorPageConfig;

const BREADCRUMB_HOME = { label: "Home", path: EN_ROUTES.home };

const SHARED_INTERNAL_LINKS = [
  ...enStandardInternalLinks(),
  { label: "Derivative rules (English guide)", href: EN_ROUTES.derivativeRules },
  { label: "Derivative formulas reference", href: EN_ROUTES.derivativeFormulas },
  { label: "Derivative examples", href: EN_ROUTES.derivativeExamples },
  { label: "Derivative practice problems", href: EN_ROUTES.derivativePracticeProblems },
  { label: "Derivative cheat sheet", href: EN_ROUTES.derivativeCheatSheet },
  { label: "Derivative of sin(x)", href: EN_ROUTES.derivativeOfSinX },
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
    breadcrumbHome: BREADCRUMB_HOME,
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
        label: "Product rule calculator",
        href: EN_ROUTES.productRuleCalculator,
        description: "Differentiate products f·g with step-by-step product rule work.",
      },
      {
        label: "Quotient rule calculator",
        href: EN_ROUTES.quotientRuleCalculator,
        description: "Handle fractions and rational expressions online.",
      },
      {
        label: "Chain rule derivative calculator",
        href: EN_ROUTES.chainRuleCalculator,
        description: "Practice nested functions where the chain rule is essential.",
      },
      {
        label: "Second derivative calculator",
        href: EN_ROUTES.secondDerivativeCalculator,
        description: "Compute f″(x) to analyze concavity and acceleration.",
      },
    ],
    internalLinks: [
      { label: "Product rule calculator", href: EN_ROUTES.productRuleCalculator },
      { label: "Quotient rule calculator", href: EN_ROUTES.quotientRuleCalculator },
      { label: "Derivative rules guide", href: EN_ROUTES.derivativeRules },
      { label: "Derivative examples", href: EN_ROUTES.derivativeExamples },
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
    embedCalculator: true,
    breadcrumbHome: BREADCRUMB_HOME,
    h1: "Partial Derivative Calculator for Multivariable Functions",
    intro: [
      "Partial derivatives describe how a function of several variables changes when you vary one variable while holding the others fixed. This partial derivative calculator helps you compute ∂f/∂x, ∂f/∂y, and similar results with clear symbolic steps.",
      "Multivariable calculus appears in physics, economics, machine learning, and engineering. Use the variable selector to specify which variable you are differentiating with respect to.",
    ],
    meta: {
      title: "Partial Derivative Calculator with Steps Online Free",
      description:
        "Free partial derivative calculator with steps. Compute ∂f/∂x and ∂f/∂y for multivariable functions. Built for calculus II—try it now.",
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
        href: EN_MAIN_CALCULATOR_HREF,
        description: "Single-variable differentiation with full step breakdown.",
      },
      {
        label: "Second derivative calculator",
        href: EN_ROUTES.secondDerivativeCalculator,
        description: "Analyze concavity and second-order behavior.",
      },
      {
        label: "Implicit derivative calculator",
        href: EN_ROUTES.implicitDifferentiationCalculator,
        description: "Handle equations where y is not isolated.",
      },
    ],
    internalLinks: [
      { label: "Partial derivative examples", href: EN_ROUTES.partialDerivativeExamples },
      { label: "Derivative rules guide", href: EN_ROUTES.derivativeRules },
      { label: "Try our main derivative calculator", href: EN_MAIN_CALCULATOR_HREF },
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

  implicitDifferentiationCalculator: {
    slug: "implicit-differentiation-calculator",
    path: EN_ROUTES.implicitDifferentiationCalculator,
    embedCalculator: true,
    breadcrumbHome: BREADCRUMB_HOME,
    h1: "Implicit Differentiation Calculator with Step-by-Step Solutions",
    intro: [
      "Implicit differentiation finds dy/dx when y is not written explicitly as a function of x—think circles, ellipses, or equations like x² + y² = 25. This implicit derivative calculator applies the chain rule to every term containing y.",
      "Instead of solving for y first, differentiate both sides with respect to x, treat y as y(x), and solve for dy/dx. Our tool automates the symbolic work and shows the reasoning.",
    ],
    meta: {
      title: "Implicit Differentiation Calculator with Steps Free",
      description:
        "Free implicit differentiation calculator with steps. Find dy/dx for equations like x²+y²=r² with full algebraic work. Calculate online now.",
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
        href: EN_ROUTES.chainRuleCalculator,
        description: "Master the chain rule—the core technique behind implicit differentiation.",
      },
      {
        label: "Derivative calculator",
        href: EN_MAIN_CALCULATOR_HREF,
        description: "Explicit functions and standard differentiation rules.",
      },
      {
        label: "Second derivative calculator",
        href: EN_ROUTES.secondDerivativeCalculator,
        description: "Analyze curvature after finding the first derivative.",
      },
    ],
    internalLinks: [
      { label: "Implicit differentiation examples", href: EN_ROUTES.implicitDifferentiationExamples },
      { label: "Learn chain rule differentiation", href: EN_ROUTES.chainRuleCalculator },
      { label: "Derivative examples", href: EN_ROUTES.derivativeExamples },
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
    embedCalculator: true,
    breadcrumbHome: BREADCRUMB_HOME,
    h1: "Second Derivative Calculator — Find f″(x) Online",
    intro: [
      "The second derivative f″(x) tells you how the slope itself is changing—essential for concavity, inflection points, and acceleration in physics. This second derivative calculator differentiates twice and shows each stage.",
      "To use it, enter your function and calculate the first derivative mentally or with the tool, then run the result again—or enter f(x) and differentiate twice in sequence using the same engine.",
    ],
    meta: {
      title: "Second Derivative Calculator with Steps Online Free",
      description:
        "Free second derivative calculator with steps. Find f″(x), analyze concavity and inflection, and check homework online. Try the tool free now.",
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
        href: EN_MAIN_CALCULATOR_HREF,
        description: "First derivatives with complete step-by-step solutions.",
      },
      {
        label: "Partial derivative calculator",
        href: EN_ROUTES.partialDerivativeCalculator,
        description: "Second partials for multivariable functions.",
      },
      {
        label: "Chain rule calculator",
        href: EN_ROUTES.chainRuleCalculator,
        description: "Needed when the first derivative itself is composite.",
      },
    ],
    internalLinks: [
      { label: "Higher order derivatives", href: EN_ROUTES.higherOrderDerivativeCalculator },
      { label: "Derivative examples", href: EN_ROUTES.derivativeExamples },
      { label: "Try our main derivative calculator", href: EN_MAIN_CALCULATOR_HREF },
      ...SHARED_INTERNAL_LINKS,
    ],
    educationalSections: secondDerivativeExpandedSections(),
  },

  chainRuleCalculator: {
    slug: "chain-rule-calculator",
    path: EN_ROUTES.chainRuleCalculator,
    embedCalculator: true,
    breadcrumbHome: BREADCRUMB_HOME,
    h1: "Chain Rule Calculator — Composite Function Derivatives",
    intro: [
      "The chain rule handles composite functions: an outer function applied to an inner function. If h(x) = f(g(x)), then h′(x) = f′(g(x))·g′(x). This chain rule derivative calculator identifies nested structure and applies the rule automatically.",
      "From sin(3x) to ln(x²+1) and (2x+1)⁵, most ‘hard’ first-semester problems involve the chain rule at least once. Practice recognizing the inner and outer layers before you differentiate.",
    ],
    meta: {
      title: "Chain Rule Calculator with Steps Online Free",
      description:
        "Free chain rule calculator with steps. Differentiate sin(2x), ln(x²+1), and nested composite functions online. Practice with examples now.",
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
        href: EN_MAIN_CALCULATOR_HREF,
        description: "General-purpose differentiation for all function types.",
      },
      {
        label: "Implicit derivative calculator",
        href: EN_ROUTES.implicitDifferentiationCalculator,
        description: "Implicit differentiation relies heavily on the chain rule.",
      },
      {
        label: "Second derivative calculator",
        href: EN_ROUTES.secondDerivativeCalculator,
        description: "Chain rule often appears again on the first derivative.",
      },
    ],
    internalLinks: [
      { label: "Derivative of sin(x)", href: EN_ROUTES.derivativeOfSinX },
      { label: "Derivative rules guide", href: EN_ROUTES.derivativeRules },
      { label: "Try our implicit derivative calculator", href: EN_ROUTES.implicitDifferentiationCalculator },
      { label: "Derivative examples", href: EN_ROUTES.derivativeExamples },
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

  productRuleCalculator: {
    slug: "product-rule-calculator",
    path: EN_ROUTES.productRuleCalculator,
    embedCalculator: true,
    breadcrumbHome: BREADCRUMB_HOME,
    h1: "Product Rule Calculator — Differentiate Products Step by Step",
    intro: [
      "The product rule states that if h(x) = u(x)·v(x), then h′(x) = u′v + uv′. This product rule calculator applies that formula symbolically and shows each intermediate step—ideal when you are learning calculus or checking homework on expressions like x·sin(x) or e^x·ln(x).",
      "Enter any product of two factors using standard notation. The engine recognizes polynomials, trigonometric functions, exponentials, and logarithms, then names the product rule explicitly in the solution trace.",
    ],
    meta: {
      title: "Product Rule Calculator with Steps Online Free",
      description:
        "Free product rule calculator with steps. Differentiate x·sin(x), e^x·cos(x), and function products online. Built for calculus—calculate now.",
      keywords:
        "product rule calculator, product rule derivative, differentiate product of functions, uv rule calculator, calculus product rule online",
    },
    defaultExamples: ["x*sin(x)", "e^x*cos(x)", "x^2*ln(x)", "(x+1)*(x-2)"],
    examples: [
      {
        title: "Polynomial times sine",
        problem: "Find d/dx [x·sin(x)]",
        steps: [
          "Let u = x, v = sin(x). Then u′ = 1, v′ = cos(x).",
          "Product rule: u′v + uv′ = 1·sin(x) + x·cos(x).",
          "Result: sin(x) + x·cos(x).",
        ],
        result: "sin(x) + x·cos(x)",
      },
      {
        title: "Exponential times cosine",
        problem: "Differentiate e^x·cos(x)",
        steps: [
          "u = e^x, v = cos(x); u′ = e^x, v′ = −sin(x).",
          "u′v + uv′ = e^x·cos(x) − e^x·sin(x).",
          "Factor: e^x(cos x − sin x).",
        ],
        result: "e^x(cos(x) − sin(x))",
      },
      {
        title: "Two linear factors",
        problem: "Find the derivative of (x+1)(x−2)",
        steps: [
          "Expand mentally or apply product rule with u = x+1, v = x−2.",
          "u′ = 1, v′ = 1 → (x−2) + (x+1) = 2x − 1.",
          "Matches expanding to x² − x − 2 and using the power rule.",
        ],
        result: "2x − 1",
      },
    ],
    faqs: [
      {
        q: "What is the product rule formula?",
        a: "(uv)′ = u′v + uv′. You differentiate the first factor, leave the second, then add the first times the derivative of the second.",
      },
      {
        q: "When should I use the product rule instead of expanding?",
        a: "Use the product rule when expanding would be messy—e^x·sin(x), x·ln(x), or mixed transcendental products are classic cases.",
      },
      {
        q: "Can the product rule combine with the chain rule?",
        a: "Yes. Each factor may itself be composite; apply the chain rule inside u′ or v′ as needed.",
      },
      {
        q: "Where can I read a full product rule lesson?",
        a: "See our derivative rules guide and derivative examples pages linked below.",
      },
    ],
    relatedCalculators: [
      {
        label: "Quotient rule calculator",
        href: EN_ROUTES.quotientRuleCalculator,
        description: "For fractions and rational expressions.",
      },
      {
        label: "Derivative calculator",
        href: EN_MAIN_CALCULATOR_HREF,
        description: "General differentiation for any expression.",
      },
      {
        label: "Chain rule calculator",
        href: EN_ROUTES.chainRuleCalculator,
        description: "When factors contain nested functions.",
      },
    ],
    internalLinks: [
      { label: "Derivative rules (full guide)", href: EN_ROUTES.derivativeRules },
      { label: "Derivative of sin(x)", href: EN_ROUTES.derivativeOfSinX },
      { label: "Derivative examples", href: EN_ROUTES.derivativeExamples },
      ...SHARED_INTERNAL_LINKS,
    ],
    educationalSections: productRuleExpandedSections(),
  },

  quotientRuleCalculator: {
    slug: "quotient-rule-calculator",
    path: EN_ROUTES.quotientRuleCalculator,
    embedCalculator: true,
    breadcrumbHome: BREADCRUMB_HOME,
    h1: "Quotient Rule Calculator — Differentiate Fractions Online",
    intro: [
      "The quotient rule handles derivatives of ratios u(x)/v(x). This quotient rule calculator computes the symbolic result and documents each algebraic step—perfect for rational functions, tangent-like ratios, and exam review.",
      "Type the numerator and denominator as a single fraction or division expression. The tool applies (u′v − uv′)/v² and simplifies when possible.",
    ],
    meta: {
      title: "Quotient Rule Calculator with Steps Online Free",
      description:
        "Free quotient rule calculator with steps. Differentiate u/v fractions and rational functions with full symbolic work. Try it online free now.",
      keywords:
        "quotient rule calculator, quotient rule derivative, differentiate a fraction, u/v derivative calculator, rational function derivative",
    },
    defaultExamples: ["sin(x)/x", "e^x/x", "(x^2+1)/(x-1)", "ln(x)/x"],
    examples: [
      {
        title: "Sine over x",
        problem: "Find d/dx [sin(x)/x]",
        steps: [
          "u = sin(x), v = x; u′ = cos(x), v′ = 1.",
          "Quotient rule: (cos(x)·x − sin(x)·1) / x².",
          "Result: (x·cos(x) − sin(x)) / x².",
        ],
        result: "(x·cos(x) − sin(x)) / x²",
      },
      {
        title: "Exponential over linear",
        problem: "Differentiate e^x / x",
        steps: [
          "u′v − uv′ = e^x·x − e^x·1 = e^x(x − 1).",
          "Divide by v² = x².",
        ],
        result: "e^x(x − 1) / x²",
      },
      {
        title: "Rational polynomial",
        problem: "Find d/dx [(x²+1)/(x−1)]",
        steps: [
          "u′ = 2x, v′ = 1.",
          "Numerator: 2x(x−1) − (x²+1)·1 = 2x² − 2x − x² − 1 = x² − 2x − 1.",
          "Denominator: (x−1)².",
        ],
        result: "(x² − 2x − 1) / (x−1)²",
      },
    ],
    faqs: [
      {
        q: "What is the quotient rule formula?",
        a: "For h = u/v, h′ = (u′v − uv′) / v². Remember the minus sign in the numerator.",
      },
      {
        q: "How is the quotient rule related to the product rule?",
        a: "Writing u/v as u·v⁻¹ and using the product and chain rules yields the same formula as the quotient rule.",
      },
      {
        q: "Can I differentiate a fraction without the quotient rule?",
        a: "Sometimes rewriting as u·v⁻¹ works, but the quotient rule is usually faster for true rational forms.",
      },
      {
        q: "Where can I practice fraction derivatives?",
        a: "Read our guide on how to differentiate a fraction and try the examples gallery.",
      },
    ],
    relatedCalculators: [
      {
        label: "Product rule calculator",
        href: EN_ROUTES.productRuleCalculator,
        description: "For products instead of quotients.",
      },
      {
        label: "Derivative calculator",
        href: EN_MAIN_CALCULATOR_HREF,
        description: "All rules in one tool.",
      },
      {
        label: "How to differentiate a fraction (guide)",
        href: EN_ROUTES.howToDifferentiateAFraction,
        description: "Worked examples and common mistakes.",
      },
    ],
    internalLinks: [
      { label: "How to differentiate a fraction", href: EN_ROUTES.howToDifferentiateAFraction },
      { label: "Derivative rules guide", href: EN_ROUTES.derivativeRules },
      { label: "Derivative examples", href: EN_ROUTES.derivativeExamples },
      ...SHARED_INTERNAL_LINKS,
    ],
    educationalSections: quotientRuleExpandedSections(),
  },

  higherOrderDerivativeCalculator: {
    slug: "higher-order-derivative-calculator",
    path: EN_ROUTES.higherOrderDerivativeCalculator,
    embedCalculator: true,
    breadcrumbHome: BREADCRUMB_HOME,
    h1: "Higher Order Derivative Calculator — Third and Fourth Derivatives",
    intro: [
      "Higher-order derivatives repeat differentiation: f″(x) is the second derivative, f‴(x) the third, and so on. This higher order derivative calculator helps you compute successive derivatives with clear symbolic steps—useful for Taylor series, physics jerk, and advanced curve analysis.",
      "Enter a function and differentiate repeatedly. Each pass applies the same rules (power, product, chain) to the previous result. Compare your manual work to the automated trace after each order.",
    ],
    meta: {
      title: "Higher Order Derivative Calculator with Steps Free",
      description:
        "Free higher order derivative calculator with steps. Find second, third, and fourth derivatives with symbolic work for calculus and engineering.",
      keywords:
        "higher order derivative calculator, third derivative calculator, fourth derivative, successive derivatives, f triple prime calculator",
    },
    defaultExamples: ["x^5", "sin(x)", "e^x", "x*exp(x)"],
    examples: [
      {
        title: "Polynomial: derivatives collapse",
        problem: "Find the first four derivatives of f(x) = x⁵",
        steps: [
          "f′(x) = 5x⁴, f″(x) = 20x³, f‴(x) = 60x².",
          "Fourth derivative: f⁽⁴⁾(x) = 120x.",
          "Fifth derivative is constant 120; sixth is 0.",
        ],
        result: "f⁽⁴⁾(x) = 120x",
      },
      {
        title: "Sine cycles every four orders",
        problem: "List f″ and f‴ for f(x) = sin(x)",
        steps: [
          "f′ = cos x, f″ = −sin x, f‴ = −cos x.",
          "f⁽⁴⁾ = sin x, returning to the start.",
        ],
        result: "f‴(x) = −cos(x)",
      },
      {
        title: "Exponential unchanged",
        problem: "Any order derivative of e^x",
        steps: [
          "Every derivative of e^x equals e^x.",
          "This property defines the exponential function in differential equations.",
        ],
        result: "f⁽ⁿ⁾(x) = e^x for all n",
      },
    ],
    faqs: [
      {
        q: "What is a higher-order derivative?",
        a: "It is the derivative of a derivative. The second order measures concavity; the third can describe jerk in motion problems.",
      },
      {
        q: "How do I compute a third derivative with this tool?",
        a: "Differentiate three times in sequence, using each output as the input for the next pass, or re-enter simplified forms.",
      },
      {
        q: "Is the second derivative calculator different?",
        a: "Our second derivative page focuses on f″ and concavity; this page covers third, fourth, and general higher orders.",
      },
      {
        q: "Do all functions have derivatives of every order?",
        a: "Not always. Some functions are smooth for many orders but not all; piecewise definitions can break smoothness.",
      },
    ],
    relatedCalculators: [
      {
        label: "Second derivative calculator",
        href: EN_ROUTES.secondDerivativeCalculator,
        description: "Concavity and the second derivative test.",
      },
      {
        label: "Derivative calculator",
        href: EN_MAIN_CALCULATOR_HREF,
        description: "First derivatives with full steps.",
      },
      {
        label: "Partial derivative calculator",
        href: EN_ROUTES.partialDerivativeCalculator,
        description: "Mixed partials in several variables.",
      },
    ],
    internalLinks: [
      { label: "Second derivative calculator", href: EN_ROUTES.secondDerivativeCalculator },
      { label: "Derivative examples", href: EN_ROUTES.derivativeExamples },
      { label: "Derivative rules", href: EN_ROUTES.derivativeRules },
      ...SHARED_INTERNAL_LINKS,
    ],
    educationalSections: higherOrderDerivativeExpandedSections(),
  },

  tangentLineCalculator: {
    slug: "tangent-line-calculator",
    path: EN_ROUTES.tangentLineCalculator,
    embedCalculator: true,
    breadcrumbHome: BREADCRUMB_HOME,
    h1: "Tangent Line Calculator — Slope from the Derivative",
    intro: [
      "The tangent line to y = f(x) at x = a has slope f′(a) and passes through (a, f(a)). This tangent line calculator page shows how to obtain the slope from the derivative, build the point-slope equation, and verify results with our step-by-step derivative engine.",
      "While a dedicated tangent plotter is not required for learning, computing f′(x) symbolically is the essential step. Enter your function here, evaluate the derivative at your chosen point, and assemble the tangent equation.",
    ],
    meta: {
      title: "Tangent Line Calculator with Steps Online Free",
      description:
        "Free tangent line calculator with steps. Find slope f′(a), point-slope equation, and tangent overlays with worked examples. Calculate online now.",
      keywords:
        "tangent line calculator, equation of tangent line, slope of tangent, derivative at a point, tangent line calculus",
    },
    defaultExamples: ["x^2", "sin(x)", "ln(x)", "x^3 - 3*x"],
    examples: [
      {
        title: "Parabola at x = 2",
        problem: "Tangent to f(x) = x² at x = 2",
        steps: [
          "f′(x) = 2x, so slope m = f′(2) = 4.",
          "Point on curve: (2, f(2)) = (2, 4).",
          "Point-slope: y − 4 = 4(x − 2) → y = 4x − 4.",
        ],
        result: "y = 4x − 4",
      },
      {
        title: "Sine at the origin",
        problem: "Tangent to sin(x) at x = 0",
        steps: [
          "f′(x) = cos(x), m = cos(0) = 1.",
          "Point (0, 0). Tangent: y = x.",
        ],
        result: "y = x",
      },
      {
        title: "Logarithm at x = 1",
        problem: "Tangent to ln(x) at x = 1",
        steps: [
          "f′(x) = 1/x, m = f′(1) = 1.",
          "Point (1, 0). Equation: y = x − 1.",
        ],
        result: "y = x − 1",
      },
    ],
    faqs: [
      {
        q: "How do you find the equation of a tangent line?",
        a: "Compute f′(a) for the slope, evaluate f(a) for the point, then use y − f(a) = f′(a)(x − a).",
      },
      {
        q: "Is the derivative the same as the tangent slope?",
        a: "Yes. f′(a) equals the instantaneous rate of change and the slope of the tangent line at x = a.",
      },
      {
        q: "What if f′(a) is undefined?",
        a: "The tangent may be vertical (infinite slope) or the function may not be differentiable at a.",
      },
      {
        q: "Can this tool graph the tangent?",
        a: "The calculator focuses on symbolic derivatives and steps; use the derivative result to plot the tangent in your graphing tool.",
      },
    ],
    relatedCalculators: [
      {
        label: "Derivative calculator",
        href: EN_MAIN_CALCULATOR_HREF,
        description: "Find f′(x) before evaluating at a point.",
      },
      {
        label: "Implicit differentiation calculator",
        href: EN_ROUTES.implicitDifferentiationCalculator,
        description: "Tangent slopes on curves not written as y = f(x).",
      },
      {
        label: "Second derivative calculator",
        href: EN_ROUTES.secondDerivativeCalculator,
        description: "Concavity near the point of tangency.",
      },
    ],
    internalLinks: [
      { label: "Derivative of x² guide", href: EN_ROUTES.derivativeOfXSquared },
      { label: "Derivative rules", href: EN_ROUTES.derivativeRules },
      { label: "Derivative examples", href: EN_ROUTES.derivativeExamples },
      ...SHARED_INTERNAL_LINKS,
    ],
    educationalSections: tangentLineExpandedSections(),
  },

  criticalPointsCalculator: criticalPointsCalculatorConfig,
};

export const EN_PAGE_LIST = Object.values(EN_CALCULATOR_PAGES);

export const EN_INDEXABLE_CALCULATOR_PAGES = EN_PAGE_LIST.filter(
  (page) => page.path !== EN_ROUTES.derivativeCalculator
);

export function getEnPageByPath(path: string): EnCalculatorPageConfig | undefined {
  return EN_PAGE_LIST.find((p) => p.path === path);
}
