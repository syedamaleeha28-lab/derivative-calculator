import { EN_MAIN_CALCULATOR_HREF, EN_ROUTES } from "../en-routes";
import { enStandardInternalLinks } from "../calculator-pages/standard-links";
import type { CalculatorPageConfig } from "../calculator-pages/types";
import { ROUTES } from "../routes";

type EducationalSection = { h2: string; paragraphs: string[] };

export function productRuleExpandedSections(): EducationalSection[] {
  return [
    {
      h2: "What the product rule means in calculus",
      paragraphs: [
        "The product rule answers a question that appears on nearly every first-semester exam: how do you differentiate two functions multiplied together? If f(x) and g(x) are differentiable, their product h(x) = f(x)·g(x) is also differentiable, but you cannot simply multiply the individual derivatives. The rate at which a product changes depends on how each factor grows while the other is held at its current value.",
        "Geometrically, think of area A = width × height. If both dimensions change, the total change comes from stretching the width (with the old height) plus stretching the height (with the old width). That intuition is exactly what (fg)′ = f′g + fg′ encodes. A product rule calculator automates the algebra so you can focus on identifying u and v correctly.",
        "Students searching for how to differentiate x times sin(x), e^x cos(x), or polynomial-trigonometric products are really asking for the product rule. Once you recognize a product structure, the rest is systematic substitution into the standard formula.",
      ],
    },
    {
      h2: "Product rule formula and Leibniz notation",
      paragraphs: [
        "The canonical product rule formula is (uv)′ = u′v + uv′, where u and v are factors of the product. Prime notation writes f′g + fg′; Leibniz notation writes d/dx(uv) = (du/dx)·v + u·(dv/dx). Both are equivalent and appear interchangeably in textbooks and on standardized exams.",
        "Some instructors teach an alternative form using differentials: d(uv) = v·du + u·dv. That version is especially helpful in multivariable calculus and physics, where several variables change at once. For single-variable calculus, stick with the prime or Leibniz fraction form until the structure becomes automatic.",
        "When three or more factors appear, such as f·g·h, apply the product rule repeatedly or group factors strategically. For example, treat gh as a single factor first, then differentiate the grouped term with the product rule again. A product rule derivative calculator handles nested products by applying the rule at each layer.",
      ],
    },
    {
      h2: "When to use the product rule (and when not to)",
      paragraphs: [
        "Use the product rule whenever an expression is written as a product of two nontrivial differentiable factors and expanding would be tedious or obscures structure. Classic triggers include x·sin(x), e^x·ln(x), (x+1)·cos(x), and any polynomial multiplied by a transcendental function.",
        "You do not need the product rule if multiplication can be removed cheaply. Constants times functions reduce to scalar multiplication: d/dx[5·sin(x)] = 5·cos(x). If two binomials are multiplied and degree stays low, expanding then using the power rule may be faster than labeling u and v.",
        "Google searches like differentiate product of two functions, uv rule derivative, or product rule vs chain rule usually mean the student has not yet classified the expression. Ask: is this a product, a quotient, a composition, or a sum? Sums split term by term; products demand u′v + uv′; quotients need the quotient rule; nested functions need the chain rule—often combined with the product rule inside each factor.",
      ],
    },
    {
      h2: "Step-by-step procedure for product rule problems",
      paragraphs: [
        "Step 1: Identify the two factors u and v. Draw a light bracket or underline each factor so you do not accidentally differentiate across a multiplication sign. Step 2: Compute u′ and v′ separately, applying the chain rule inside either factor if needed. Step 3: Substitute into u′v + uv′ without simplifying early—keeping terms separate reduces sign errors.",
        "Step 4: Combine like terms and factor common expressions. Exponential and trigonometric products often share a factor like e^x or sin(x) that can be pulled out. Step 5: Verify with a quick sanity check: evaluate u, v, u′, v′ at a simple point such as x = 0 if the domain allows it, and confirm the combined derivative matches a numerical estimate.",
        "On timed exams, write u and v in the margin before any differentiation. This single habit prevents the most common product rule failure mode: treating a product as if it were a single function and applying only the chain or power rule.",
      ],
    },
    {
      h2: "Real-world applications of the product rule",
      paragraphs: [
        "In physics, the product rule models coupled rates. Power P = F·v in basic mechanics differentiates to P′ = F′v + Fv′ when force and velocity both vary with time. Electrical power P = I·V in circuits behaves similarly when current and voltage are time-dependent. Any observable defined as a product of two changing quantities inherits product-rule structure.",
        "Economists use the product rule when revenue R = p·q depends on both price p and quantity q as functions of time or another parameter. Marginal revenue expressions mix partial-rate effects, and the product rule keeps those contributions separate before interpretation. Engineering formulas for stress, heat flux, and signal amplitude frequently multiply spatial and temporal factors.",
        "Machine learning students encounter product-rule patterns in backpropagation: derivatives of weighted sums and activations propagate through products and sums. You do not need neural-network machinery to appreciate the point—the product rule is how coupled systems share sensitivity among their factors.",
      ],
    },
    {
      h2: "Common product rule mistakes to avoid",
      paragraphs: [
        "The gravest error is multiplying derivatives: (fg)′ ≠ f′g′. A quick counterexample: (x·x)′ = (x²)′ = 2x, but x′·x′ = 1·1 = 1. If you remember the area analogy—width change times height plus height change times width—you will not make this mistake.",
        "Second, students forget the chain rule inside u′ or v′. For e^(2x)·sin(x), the derivative of the exponential factor is 2e^(2x), not e^(2x). Third, sign errors appear when v′ is negative, as with cos(x) → −sin(x). Write v′ explicitly before substituting into u′v + uv′.",
        "Finally, premature over-simplification hides missing terms. Keep u′v and uv′ as two summands until both are fully computed. A product rule calculator with steps is useful precisely because it preserves those intermediate summands for comparison with your handwritten work.",
      ],
    },
    {
      h2: "How the product rule connects to other derivative tools",
      paragraphs: [
        "The product rule rarely works alone. Composite factors require the chain rule inside u′ or v′. Rational expressions are often quotients, not products—rewrite carefully before choosing a rule. Our quotient rule calculator handles u/v forms; this product rule calculator focuses on u·v.",
        "The general derivative calculator on the English homepage applies product, quotient, chain, and power rules automatically. Use it after attempting the classification yourself. For implicit relations, y may appear as a factor; implicit differentiation still relies on product-rule structure when terms like x·y are present.",
        "Second derivatives of products create longer expressions because you differentiate a sum of two product terms, each needing the product rule again. If your first derivative is already a product, expect the second derivative to combine product and chain rules—our second derivative calculator shows that expansion clearly.",
      ],
    },
    {
      h2: "Exam preparation tips for product rule questions",
      paragraphs: [
        "Build a three-problem daily drill: one polynomial-trig product, one exponential-trig product, and one product requiring the chain rule inside a factor. Time yourself for five minutes per problem, then verify with the online product rule calculator.",
        "Instructors love mixed-rule problems such as d/dx[x²·sin(3x)] because they test classification and execution. Practice naming the rule aloud before writing: product rule first, chain rule on sin(3x). That verbal label keeps you from drifting into the wrong template under pressure.",
        "On the AP Calculus AB/BC exam and typical college midterms, product-rule items appear as short answer and multiple choice. Multiple-choice distractors often show f′g′ or u′v − uv′ (quotient pattern). Recognize those traps and eliminate them before computing.",
      ],
    },
    {
      h2: "Long-tail questions about the product rule answered",
      paragraphs: [
        "Is the product rule commutative? The order of factors does not change the derivative: (fg)′ = (gf)′ because multiplication commutes. The order of terms in u′v + uv′ may swap, but the sum is the same.",
        "How do you differentiate a constant times a function? Constants factor out: (c·f)′ = c·f′. That is not a product rule case unless the constant is actually a function of x.",
        "What is the derivative of sin(x)cos(x) without memorizing identities? Apply the product rule to get cos²(x) − sin²(x), which simplifies to cos(2x) if you know the double-angle identity. Both forms are correct; simplification is optional unless the problem requests it.",
        "Can a product rule calculator show which rule was used? Yes—our tool labels the product rule in the step trace so you can map each line to your lecture notes and build confidence before high-stakes tests.",
      ],
    },
  ];
}

export function quotientRuleExpandedSections(): EducationalSection[] {
  return [
    {
      h2: "Understanding the quotient rule for derivatives",
      paragraphs: [
        "The quotient rule governs derivatives of ratios: functions written as one expression divided by another. If h(x) = u(x)/v(x) and v(x) ≠ 0, the derivative is not u′/v′—just as products do not differentiate by multiplying derivatives. Ratios appear everywhere in calculus, from tan(x) = sin(x)/cos(x) to rational functions and marginal averages in economics.",
        "Students often meet the quotient rule after the product rule because dividing is multiplying by a reciprocal. That connection is not just theoretical: you can derive the quotient formula by rewriting u/v as u·v⁻¹ and applying the product and chain rules. Many learners remember the quotient rule better once they see that equivalence.",
        "A quotient rule calculator is valuable when the numerator and denominator are messy—e^x over x, ln(x)/x², or rational functions with quadratic factors. The tool applies (u′v − uv′)/v² systematically and helps you spot sign and denominator errors.",
      ],
    },
    {
      h2: "Quotient rule formula and notation",
      paragraphs: [
        "The standard quotient rule formula is h′ = (u′v − uv′) / v². The minus sign in the numerator is essential; swapping to u′v + uv′ would be the product rule pattern and is wrong for quotients. Leibniz notation writes dy/dx = (v·du/dx − u·dv/dx) / v² when y = u/v.",
        "Memory devices vary: some students use the phrase low d-high minus high d-low, square the bottom and let it go low referring to v in the denominator. Others prefer the reciprocal derivation so they only memorize the product rule. Use whichever method produces the correct minus sign every time.",
        "For nested fractions, simplify algebraically before differentiating when possible. If the expression is (x+1)/(x−1), the quotient rule is appropriate; if it is 1/x², rewriting as x⁻² may be faster with the power rule. Classification saves time on exams.",
      ],
    },
    {
      h2: "When should you use the quotient rule?",
      paragraphs: [
        "Reach for the quotient rule when a function is genuinely a ratio of two differentiable expressions and rewriting as a product feels awkward. Triggers include sin(x)/x, e^x/(x²+1), (x²+1)/(x−1), and tan(x) expressed as sin/cos.",
        "Skip the quotient rule if the denominator is constant: f(x)/5 differentiates to f′(x)/5. Also skip it when the expression is not a true quotient—(x+1)/2 is a linear function, not a ratio of two nontrivial functions of x.",
        "Search queries such as how to differentiate a fraction, derivative of u over v, or quotient rule vs product rule signal classification trouble. If you see a fraction bar between two expressions that both depend on x, the quotient rule is the default unless an algebraic rewrite is obviously simpler.",
      ],
    },
    {
      h2: "Step-by-step quotient rule workflow",
      paragraphs: [
        "Step 1: Identify u (top) and v (bottom). Step 2: Compute u′ and v′, using the chain rule where needed. Step 3: Form the numerator u′v − uv′ exactly in that order—write the minus sign before you substitute to avoid flipping signs later.",
        "Step 4: Compute v² and place it as the denominator. Students often write v instead of v²; checking with 1/x → −1/x² catches that instantly. Step 5: Expand and simplify the numerator if factoring reveals common terms. Do not cancel factors with the denominator until the full fraction is written—illegal cancellation across a sum is a common exam mistake.",
        "Step 6: Verify domain restrictions. Points where v = 0 are not in the domain of h and may be discontinuities; the derivative formula is valid only where v ≠ 0. Document excluded values when your instructor expects complete answers.",
      ],
    },
    {
      h2: "Quotient rule applications in science and economics",
      paragraphs: [
        "Average cost AC = C(q)/q in economics differentiates with the quotient rule when analyzing marginal behavior relative to output. Growth rates of ratios—such as efficiency metrics defined as output per input—also inherit quotient structure when both numerator and denominator trend with time.",
        "In physics, tangent functions, rational potentials, and rational approximations in engineering all appear as quotients. Control systems and signal processing use transfer functions H(s) = N(s)/D(s); sensitivity analysis with respect to parameters often passes through quotient-rule algebra.",
        "Chemistry rate laws and dimensionless groups in fluid mechanics sometimes appear as ratios of measured quantities. Even when symbols change, the mathematical pattern u/v demands (u′v − uv′)/v² whenever both u and v vary.",
      ],
    },
    {
      h2: "Typical quotient rule errors students make",
      paragraphs: [
        "Sign errors dominate: using u′v + uv′ instead of u′v − uv′. Re-derive once with u·v⁻¹ if you need to internalize why the minus appears. Denominator errors rank second—forgetting to square v or squaring only the leading term of a binomial denominator.",
        "Another mistake is differentiating the fraction term-by-term as if addition were involved: d/dx[u/v] ≠ u′/v + u/v′. Only one rule applies to the whole ratio. Illegal cancellation—canceling a factor in u′v − uv′ with a factor in v² before combining—is algebraically invalid and produces wrong limits.",
        "Finally, students sometimes apply the quotient rule when the expression is already a product times a negative power. Both paths can work, but mixing half-quotient and half-power reasoning mid-problem causes inconsistent results. Commit to one strategy per problem.",
      ],
    },
    {
      h2: "Linking the quotient rule to related calculators",
      paragraphs: [
        "Our product rule calculator handles u·v; this quotient rule page handles u/v. The general derivative calculator chooses automatically and shows which rule fired at each step. If your expression is tan(x), you may differentiate via quotient rule on sin/cos or recall the memorized sec²(x) result—both reinforce the same structure.",
        "The how to differentiate a fraction guide walks through additional worked examples and links back here for automated verification. Chain rule factors often sit inside u or v; our chain rule calculator is a good companion when inner functions are composite.",
        "Second derivatives of quotients expand significantly because you differentiate a fraction whose numerator is already u′v − uv′. Expect to use the quotient rule twice or combine quotient and product rules in the expanded numerator.",
      ],
    },
    {
      h2: "Study strategies for quotient rule mastery",
      paragraphs: [
        "Memorize two benchmark results: d/dx[1/x] = −1/x² and d/dx[e^x/x] = e^x(x−1)/x². These appear often and double as self-checks for your algebra. Drill five rational functions daily for a week, increasing complexity from linear over linear to quadratic over quadratic.",
        "When reviewing for finals, pair each quotient exercise with a classification note: quotient only, quotient plus chain, quotient after simplification. Keep a running list of which inner functions required the chain rule—exam writers reuse those compositions.",
        "Use this quotient rule calculator after manual attempts, not before. The learning happens when you compare your numerator u′v − uv′ term by term with the automated trace and locate the first line where your work diverged.",
      ],
    },
    {
      h2: "Frequently searched quotient rule questions",
      paragraphs: [
        "Why is there a minus sign in the quotient rule? It comes from differentiating v⁻¹ with the chain rule: the derivative of u·v⁻¹ introduces −u·v⁻²·v′, which becomes −uv′/v² after combining with u′/v.",
        "Can you use the product rule instead of the quotient rule? Yes—rewrite u/v as u·v⁻¹. Some students prefer that route exclusively; others find the dedicated quotient formula faster for true rational forms.",
        "What is the derivative of sin(x)/x? By quotient rule: (x·cos(x) − sin(x))/x². This classic example appears in introductory analysis and is a standard homework item.",
        "How do you differentiate a complex fraction? Simplify to a single fraction in u/v form first, or differentiate term by term if the structure is a sum of quotients. A quotient rule derivative calculator accepts standard single-fraction input in computer algebra notation.",
      ],
    },
  ];
}

export function secondDerivativeExpandedSections(): EducationalSection[] {
  return [
    {
      h2: "What the second derivative tells you about a function",
      paragraphs: [
        "The second derivative f″(x) measures how the first derivative f′(x) changes—the rate of change of the slope itself. In graph language, that means concavity: whether the curve bends upward like a cup (concave up) or downward like a cap (concave down). On many syllabi, the second derivative is the bridge between differentiation mechanics and curve sketching.",
        "Physically, if s(t) is position, then s′(t) is velocity and s″(t) is acceleration. The same mathematical object therefore appears in kinematics and in optimization. Students searching for a second derivative calculator usually want either f″ symbolically or help interpreting what f″ means on a graph.",
        "The second derivative also powers the second derivative test for local extrema when f′(c) = 0. That test is not perfect—f″(c) = 0 is inconclusive—but it is fast and appears constantly on exams alongside first-derivative sign charts.",
      ],
    },
    {
      h2: "Second derivative notation and formulas",
      paragraphs: [
        "Common notations include f″(x), d²y/dx², and D²f(x). For the second derivative of y with respect to x, read d²y/dx² as differentiate y twice with respect to x, not as a fraction to cancel—though the symbol echoes Leibniz's limit definition historically.",
        "Computationally, f″(x) = (f′(x))′. There is no separate magic formula—you apply power, product, quotient, and chain rules to f′(x) exactly as you did to f(x). The complexity jump on products and quotients is real: differentiating f′ often re-triggers the product rule.",
        "For parametric curves x(t), y(t), the second derivative dy/dx involves a chain correction: d²y/dx² = (d/dt(dy/dx)) / (dx/dt). That advanced form appears in calculus II; for standard y = f(x) work, f″(x) = (f′(x))′ suffices.",
      ],
    },
    {
      h2: "When to compute a second derivative",
      paragraphs: [
        "Compute f″ when the problem mentions concavity, inflection points, acceleration, the second derivative test, or curvature. Triggers include find where f is concave up, classify the critical point, and determine if the graph inflects at x = a.",
        "You typically do not need f″ for simple tangent-line problems—only f′ at a point. But if the tangent's behavior near the point matters (is the curve opening upward there?), f″ gives that finer description.",
        "Search phrases like f double prime calculator, how to find second derivative of sin(x), and concavity from second derivative map directly to this page. If the assigned function is already f′ from a prior part of a multi-part problem, differentiate once more rather than restarting from f.",
      ],
    },
    {
      h2: "Step-by-step method for finding f″(x)",
      paragraphs: [
        "Step 1: Find f′(x) completely, simplifying only enough to differentiate again. Step 2: Differentiate f′(x) term by term, reapplying product, quotient, or chain rules where they appear in f′. Step 3: Simplify f″(x) and factor when it helps sign analysis.",
        "Step 4: For curve sketching, solve f″(x) = 0 to locate possible inflection points. Confirm inflection by checking concavity change across each candidate—not every zero of f″ is an inflection point. Step 5: Combine with f′ sign information: critical points from f′ = 0, intervals of increase/decrease, then concavity intervals from f″.",
        "Using a second derivative calculator with steps helps when f′ is already messy. Run the first pass manually, compare f′, then use the tool on f′ to obtain f″ and study which rules fired twice.",
      ],
    },
    {
      h2: "Second derivatives in physics, economics, and engineering",
      paragraphs: [
        "Acceleration is the flagship physics application: a(t) = s″(t). Jerk, the third derivative of position, matters in comfort engineering for vehicles and elevators, but the second derivative remains the standard classroom link between calculus and motion.",
        "In economics, if C′(q) is marginal cost, then C″(q) describes how marginal cost itself is changing—whether economies of scale are leveling off, for instance. Optimization problems with profit or cost objectives sometimes test whether a critical point is a maximum via f″.",
        "Engineering curvature and beam deflection models use second-order behavior of functions describing shape. While full curvature formulas involve more than f″ alone, the intuition that second-order information measures bending parallels concavity on a graph.",
      ],
    },
    {
      h2: "Common mistakes with second derivatives",
      paragraphs: [
        "Stopping at f′ when the problem explicitly asks for f″ is the simplest error—read the prompt twice. Another is treating f″ as (f′)²; squaring the first derivative is never the second derivative unless you are in a very different context.",
        "Algebra slips multiply on products: if f′ = uv′ + u′v, then f″ differentiates each summand with the product rule again, producing four terms before simplification. Skipping one term is easy under time pressure—write both summands on separate lines before continuing.",
        "Misapplying the second derivative test without checking f′(c) = 0 first invalidates the conclusion. Also remember f″(c) = 0 is inconclusive: use first-derivative test or higher-order information when the second derivative vanishes at a critical point.",
      ],
    },
    {
      h2: "Connecting second derivatives to other tools on this site",
      paragraphs: [
        "Start with the main derivative calculator for f′, then return here or use the higher order derivative calculator for third and fourth derivatives. Critical point analysis combines f′ and f″; our critical points calculator page explains that workflow end to end.",
        "Partial derivatives have second-order analogs ∂²f/∂x² and mixed partials ∂²f/∂x∂y; the partial derivative calculator handles the first pass in several variables. Implicit differentiation can produce dy/dx whose derivative again requires implicit methods for d²y/dx²—an advanced topic linked from the implicit calculator page.",
        "Tangent line problems use f′, not f″, but comparing f″ near the tangency point explains whether the curve crosses above or below its tangent locally—useful in inequality and approximation questions.",
      ],
    },
    {
      h2: "Exam tips for second derivative and concavity problems",
      paragraphs: [
        "Build a concavity sign chart template: intervals separated by critical points of f′ and zeros of f″. Practice one polynomial example completely by hand each night—polynomials have clean f″ and make good exam prototypes.",
        "Memorize quick patterns: for sin(x), derivatives cycle every four orders; for e^x, every derivative is e^x; for ln(x), derivatives alternate sign and descend in power structure on related forms. These shortcuts save minutes on multiple-choice sections.",
        "When a problem says show that x = c is an inflection point, you must demonstrate concavity change, not merely f″(c) = 0. Quote values of f″ slightly left and right of c to prove the sign flip.",
      ],
    },
    {
      h2: "Long-tail second derivative questions explained",
      paragraphs: [
        "What is the second derivative of x³? f′(x) = 3x², f″(x) = 6x. What about sin(x)? f″(x) = −sin(x). These baseline results anchor more complex compositions.",
        "How is the second derivative test used? If f′(c) = 0 and f″(c) > 0, f has a local minimum at c; if f″(c) < 0, a local maximum; if f″(c) = 0, the test fails and you need another method.",
        "Can a function have a second derivative everywhere but not a third? Yes—piecewise definitions can hide subtle behavior—but standard classroom functions are smooth enough for several orders. Polynomials eventually hit zero derivatives once order exceeds degree.",
        "Does this second derivative calculator show steps for f″ only? Enter f(x), obtain f′ from the trace, then differentiate the result again—or work through two calculator passes while comparing each stage to your notes.",
      ],
    },
  ];
}

export function higherOrderDerivativeExpandedSections(): EducationalSection[] {
  return [
    {
      h2: "Higher-order derivatives beyond the second",
      paragraphs: [
        "A higher-order derivative is what you get when you differentiate repeatedly: f‴(x) is the third derivative, f⁽⁴⁾(x) the fourth, and f⁽ⁿ⁾(x) the nth. Each order describes a finer level of change. The second derivative captures concavity; the third captures how concavity itself is changing—a concept called jerk when the variable is time.",
        "Students look for a higher order derivative calculator when homework moves past f″ into Taylor series, differential equations, or motion problems mentioning jerk. The mechanics do not change: each new order applies the same differentiation rules to the previous result.",
        "Polynomials illustrate the hierarchy clearly: each differentiation lowers degree until the function becomes constant, then zero. Transcendental functions often cycle or reproduce—sin and cos rotate every four orders; e^x returns itself. Recognizing these patterns saves enormous algebra time.",
      ],
    },
    {
      h2: "Notation for third, fourth, and nth derivatives",
      paragraphs: [
        "Prime notation runs f′, f″, f‴, then f⁽⁴⁾ because repeated primes become unreadable. Leibniz notation writes d³y/dx³ for the third derivative and dⁿy/dxⁿ for the nth. Physics sometimes uses dots over variables for time derivatives: ẋ, ẍ, x⃛ for velocity, acceleration, jerk.",
        "In Taylor's theorem, f⁽ⁿ⁾(a) appears as the coefficient driver for the (x − a)ⁿ term divided by n!. That connection makes higher-order derivatives essential for approximation—not just academic notation.",
        "For multivariable functions, mixed partials such as ∂³f/∂x²∂y extend the idea to several variables. This page focuses on ordinary derivatives in one variable, but the counting logic—each order peels another layer of rate of change—is the same.",
      ],
    },
    {
      h2: "When do you need third or fourth derivatives?",
      paragraphs: [
        "Taylor polynomial problems explicitly require derivatives up to order n at a point. Differential equations may ask whether a solution satisfies a relation involving f‴ or f⁽⁴⁾. Kinematics uses the third derivative of position for jerk when smoothness of acceleration matters.",
        "Optimization rarely needs beyond f″ for standard classroom tests, but power series and convergence arguments in calculus II often need higher orders. If a problem states find the Taylor polynomial of degree 4, you need derivatives through order 4.",
        "Queries like third derivative calculator, how to find f triple prime, and successive differentiation formula point here. If you already have f″, the next step is simply one more differentiation—do not restart from f unless earlier work was wrong.",
      ],
    },
    {
      h2: "Procedure for successive differentiation",
      paragraphs: [
        "Step 1: Organize a table with columns for order, expression, and notes on which rule you used. Step 2: Differentiate once to get f′; repeat until you reach the target order. Step 3: Simplify at the end of each order only if it makes the next differentiation easier—over-simplifying midstream can obscure structure.",
        "Step 4: Watch for cyclic patterns in trig and exponential functions; stop early when you recognize the cycle instead of expanding blindly. Step 5: For polynomials of degree n, note that f⁽ⁿ⁾ is constant and f⁽ⁿ⁺¹⁾ is zero—a fast correctness check.",
        "A higher order derivative calculator automates the repetition but you should still perform at least one full manual cycle per function family to internalize how order accumulates.",
      ],
    },
    {
      h2: "Applications of higher-order derivatives",
      paragraphs: [
        "Taylor series and numerical approximations use derivatives up to order n to match a function near a point. Error bounds in Taylor's theorem depend on the (n+1)st derivative on an interval—without higher orders, you cannot quantify remainder size rigorously.",
        "In physics and engineering, jerk (third derivative of position) influences passenger comfort and mechanical stress when acceleration changes abruptly. Fourth derivatives appear in specialized control and smoothing criteria, though introductory courses rarely emphasize them.",
        "Economics and biology occasionally model acceleration of growth rates—second or third derivatives of population or output over time—when inflection and sustained acceleration matter for policy interpretation.",
      ],
    },
    {
      h2: "Mistakes in higher-order derivative problems",
      paragraphs: [
        "Losing track of order is common: confusing f‴ with f″ or stopping one differentiation short. Label each line with the order number in the margin.",
        "On products like x·e^x, each order adds terms via repeated product rule; students sometimes collapse terms too early and drop one summand. Write every term before combining.",
        "Assuming all functions are smooth forever is incorrect—|x| has issues at zero—but classroom examples are usually chosen to be smooth for many orders. When a problem gives a piecewise function, check differentiability at breakpoints before computing high orders.",
      ],
    },
    {
      h2: "Related calculators for multi-stage differentiation",
      paragraphs: [
        "The second derivative calculator page emphasizes concavity and the second derivative test; this page extends the same engine to third, fourth, and general orders. The main derivative calculator is the entry point for the first pass on any expression.",
        "Critical points and inflection analysis typically stop at f″, but Taylor problems continue upward. Our tangent line calculator uses only f′, while series work links naturally here.",
        "Partial derivative calculator handles first orders in multiple variables; mixed partials of higher order appear in advanced multivariable units. Keep ordinary and partial tracks separate to avoid notation confusion.",
      ],
    },
    {
      h2: "Preparing for exams involving higher derivatives",
      paragraphs: [
        "Memorize the cycle for sin(x): sin → cos → −sin → −cos → sin. Drill e^x and ln(x) behavior: e^x repeats; ln(x) derivatives become negative integer powers of x with factorial coefficients in the numerator pattern.",
        "For Taylor problems, practice building the polynomial term by term: f(a), f′(a), f″(a)/2!, f‴(a)/3!, etc. Keep a factorial table through 6! = 720 for speed.",
        "Verify one nth derivative result per study session with the higher order derivative calculator, focusing on problems where you applied the product rule twice or more—those are exam favorites.",
      ],
    },
    {
      h2: "Answers to common higher-order derivative searches",
      paragraphs: [
        "What is the third derivative of x⁴? 24x. Of sin(x)? −cos(x). Of e^x? e^x. These anchor values appear in textbook appendices and deserve flashcard status.",
        "Is there a general formula for the nth derivative of x^m? For positive integers m ≥ n, f⁽ⁿ⁾(x) = m!/(m−n)! · x^(m−n); when n > m, the derivative is zero for polynomials.",
        "How many times can you differentiate e^x? Infinitely many, always yielding e^x. That property defines exponential functions analytically and appears in differential equations.",
        "Can this tool compute the fourth derivative online? Yes—enter the function, differentiate successively, and read f⁽⁴⁾ from the trace or repeat passes using simplified output between stages.",
      ],
    },
  ];
}

export function tangentLineExpandedSections(): EducationalSection[] {
  return [
    {
      h2: "Tangent lines and the derivative at a point",
      paragraphs: [
        "A tangent line to the graph of y = f(x) at x = a is the line that best approximates the curve locally—same point, same instantaneous direction. Its slope equals f′(a), the derivative evaluated at a. That identity is one of the central ideas of differential calculus: derivative as slope of tangent.",
        "Students searching for a tangent line calculator or equation of tangent line typically need two ingredients: the slope m = f′(a) and the point (a, f(a)) on the curve. With those, point-slope form y − f(a) = f′(a)(x − a) yields the equation.",
        "This page connects tangent-line homework to our derivative engine: find f′(x) symbolically, substitute x = a, then assemble the line. Graphing the result in Desmos or another tool confirms the visual match at the point of tangency.",
      ],
    },
    {
      h2: "Formulas for tangent line equations",
      paragraphs: [
        "Point-slope form: y − y₀ = m(x − x₀) with m = f′(a) and (x₀, y₀) = (a, f(a)). Slope-intercept form y = mx + b follows by solving for y when convenient. For curves defined implicitly, dy/dx from implicit differentiation supplies the slope at the chosen point.",
        "Linearization L(x) = f(a) + f′(a)(x − a) is the tangent line viewed as a function— the first-order Taylor polynomial. Approximation problems ask how close f(x) is to L(x) near a, which previews error analysis in later courses.",
        "Parametric curves use dy/dx = (dy/dt)/(dx/dt) at the parameter value corresponding to the point. Polar curves have their own slope formula, but introductory calculus usually stays with y = f(x) or simple implicit forms.",
      ],
    },
    {
      h2: "When to find a tangent line (typical problem types)",
      paragraphs: [
        "Find the tangent to f at x = a, write the equation of the tangent line, and determine the line that touches the curve at exactly one point locally are standard prompts. Related variants ask for the normal line (perpendicular to the tangent) or for all points where the tangent is horizontal (solve f′(x) = 0).",
        "Optimization word problems sometimes embed tangent ideas when a constraint curve is involved. Geometric problems with circles and parabolas may use implicit differentiation to get dy/dx at a point on the intersection.",
        "Search variations include slope of tangent to x squared at x equals 2, tangent line to sin x at 0, and how to find tangent line calculus. Each reduces to f′(a) and f(a) after differentiation.",
      ],
    },
    {
      h2: "Step-by-step tangent line construction",
      paragraphs: [
        "Step 1: Verify a is in the domain of f and that f is differentiable at a (no corner, vertical tangent, or discontinuity). Step 2: Compute f(a) for the y-coordinate of the point. Step 3: Find f′(x) and evaluate f′(a) for slope m.",
        "Step 4: Write y − f(a) = m(x − a). Step 5: Optionally convert to slope-intercept or standard form if the assignment requires it. Step 6: For implicit curves, substitute the point into dy/dx after implicit differentiation to get m, then use the same point-slope template.",
        "If f′(a) is undefined but the tangent is vertical, the line is x = a. Recognize vertical tangents on graphs like x^(1/3) at the origin in appropriate contexts.",
      ],
    },
    {
      h2: "Tangent lines in physics, economics, and engineering",
      paragraphs: [
        "In physics, instantaneous velocity at time t₀ is the slope of the tangent to position s(t) versus time—hence s′(t₀). Linear approximations of motion over short intervals use the tangent line to position as a local model.",
        "In economics, tangent lines to cost or revenue curves represent marginal behavior at a specific operating level. Marginal cost MC is derivative of total cost C(q); the tangent to C at q₀ has slope MC(q₀) and approximates incremental cost near q₀.",
        "Engineering linearization stabilizes nonlinear models around an operating point: replace a smooth nonlinear function with its tangent over a small input range. That technique appears in control theory and sensitivity analysis when full nonlinear simulation is unnecessary locally.",
      ],
    },
    {
      h2: "Common tangent line mistakes",
      paragraphs: [
        "Using f(a) as the slope instead of f′(a) swaps point and rate roles—always differentiate first, then evaluate. Another error is plugging x = a into f before finding f′, then differentiating the constant; the order is find f′(x), then substitute a.",
        "Forgetting to use the correct point (a, f(a)) when writing point-slope form produces a line with the right slope through the wrong point. Arithmetic slips in f(a) are common with radicals and trig—recalculate f(a) separately.",
        "On implicit problems, failing to substitute both x and y into dy/dx after solving for the derivative leaves parameters unresolved. Always evaluate at the specific point on the curve given in the prompt.",
      ],
    },
    {
      h2: "How tangent lines relate to other derivative calculators",
      paragraphs: [
        "The derivative calculator supplies f′(x); this tangent line page explains how to turn that into a line equation. The derivative of x² guide walks through a classic tangent example at a specific point step by step.",
        "Implicit differentiation calculator handles slopes on curves not solved for y. Second derivative information describes whether the curve lies above or below its tangent near the point—useful in inequality proofs.",
        "Critical points calculator links tangents with horizontal slope when f′(a) = 0 at local extrema. Normal line problems reuse f′(a) to get perpendicular slope −1/m when m ≠ 0.",
      ],
    },
    {
      h2: "Exam preparation for tangent and normal lines",
      paragraphs: [
        "Practice a template problem nightly: pick f, pick a, compute f(a) and f′(a), write the line, convert forms. Include one trig example and one radical example per week.",
        "Many exams pair tangent lines with optimization: find a such that the tangent passes through a given external point. That variant requires solving for a using both f(a) and f′(a) in the point-slope equation—extra algebra beyond the basic template.",
        "Keep normal line formulas ready: slope −1/f′(a) when f′(a) ≠ 0. State undefined normal when the tangent is horizontal and f′(a) = 0.",
      ],
    },
    {
      h2: "Long-tail tangent line questions answered",
      paragraphs: [
        "What is the tangent line to f(x) = x² at x = 2? f(2) = 4, f′(x) = 2x so f′(2) = 4, equation y − 4 = 4(x − 2) or y = 4x − 4.",
        "What is the tangent to sin(x) at x = 0? sin(0) = 0, cos(0) = 1, so y = x. This linear approximation is sin x ≈ x near zero.",
        "How do you find where a tangent is horizontal? Solve f′(x) = 0; those x-values give tangent lines with slope zero at the corresponding points on the graph.",
        "Can a tangent line cross the curve? Yes—tangency describes local first-order contact, not global side constraints. The tangent to sin(x) at x = π crosses the curve nearby even though it touches at the point of tangency.",
      ],
    },
  ];
}

export function criticalPointsExpandedSections(): EducationalSection[] {
  return [
    {
      h2: "What critical points are and why they matter",
      paragraphs: [
        "A critical point of f occurs where f′(x) = 0 or f′(x) is undefined—provided x is in the domain of f. These points are candidates for local maxima, local minima, and sometimes inflection-related behavior. Critical point analysis is the standard bridge between differentiation and curve sketching or optimization.",
        "Students searching for a critical points calculator want help finding where the derivative vanishes, classifying those points, and connecting results to graphs. Symbolically, you solve f′(x) = 0 (and note domain restrictions) then apply the first or second derivative test.",
        "On applied problems, critical points translate to production levels where marginal cost crosses zero behaviorally, times when velocity momentarily vanishes, or parameter values that optimize a objective function. The vocabulary changes; the mathematics is the same.",
      ],
    },
    {
      h2: "Critical point notation and classification tests",
      paragraphs: [
        "We write critical numbers or critical values for the x-coordinates where f′ is zero or undefined. The corresponding points on the graph are (c, f(c)). Local (relative) maximum means f(c) ≥ f(x) nearby; local minimum means f(c) ≤ f(x) nearby.",
        "First derivative test: sign change of f′ across c classifies extrema—positive to negative implies local max; negative to positive implies local min; no sign change implies no local extremum at c despite f′(c) = 0.",
        "Second derivative test: if f′(c) = 0 and f″(c) > 0, local min; if f″(c) < 0, local max; if f″(c) = 0, inconclusive. Combine tests with a sketch for complete arguments on exams.",
      ],
    },
    {
      h2: "When to find critical points (problem triggers)",
      paragraphs: [
        "Find and classify critical points, determine intervals of increase and decrease, and sketch the graph are classic multi-part prompts. Optimization word problems hide critical points inside domain restrictions—you maximize area or profit by finding where the derivative of the objective is zero within feasible x.",
        "Search queries include how to find critical points calculus, critical points of a polynomial, and where does derivative equal zero. If a problem mentions relative extrema without giving a graph, plan on solving f′(x) = 0 first.",
        "Remember endpoints on closed intervals compete with interior critical points for absolute extrema. The Extreme Value Theorem guarantees absolute max/min on [a,b] for continuous f, but you must compare critical points and endpoints—critical alone is not enough.",
      ],
    },
    {
      h2: "Step-by-step critical point analysis",
      paragraphs: [
        "Step 1: Find f′(x) using appropriate rules. Step 2: Solve f′(x) = 0 and identify x where f′ is undefined but f is defined—these x are critical numbers. Step 3: Mark each critical number on a number line and test f′ sign on intervals between markers.",
        "Step 4: Classify each critical point using the first derivative test or compute f″(c) for the second derivative test when convenient. Step 5: Evaluate f(c) at extrema candidates if the problem asks for max/min values, not just locations.",
        "Step 6: Report results with correct vocabulary: local vs absolute, and include domain caveats. A critical points calculator that shows f′ and its zeros accelerates Step 2 verification after you solve manually.",
      ],
    },
    {
      h2: "Critical points in physics, economics, and engineering",
      paragraphs: [
        "In motion along a line, velocity v(t) = s′(t) zero at critical times of position—momentary rest before direction change. Whether those times are maxima or minima of position depends on further analysis; the critical point of s comes from v = 0.",
        "Profit maximization sets marginal revenue equal to marginal cost—often rearranged to where the derivative of profit is zero. Cost minimization similarly targets critical points of cost functions subject to constraints, a setup for Lagrange multipliers later.",
        "Engineering design optimizes dimensions, angles, or material usage by finding critical points of objective functions modeling weight, stress, or efficiency. Always validate that the critical point lies in the physically feasible domain.",
      ],
    },
    {
      h2: "Common critical point mistakes",
      paragraphs: [
        "Declaring every solution of f′(x) = 0 a maximum or minimum without testing is wrong—f′(x) = x³ has a horizontal tangent at 0 but no extremum there because f′ does not change sign.",
        "Forgetting domain restrictions: ln(x) derivatives involve 1/x, never zero; critical points must respect the domain of the original f. Rational functions may have f′ undefined where denominators vanish—check whether those x lie in the domain of f.",
        "Confusing critical points of f with zeros of f is frequent: solving f(x) = 0 finds x-intercepts, not extrema. Read the prompt carefully for f versus f′.",
      ],
    },
    {
      h2: "Linking critical points to related calculators",
      paragraphs: [
        "Use the derivative calculator to obtain f′(x), the second derivative calculator for f″ when applying the second derivative test, and this critical points page to organize the full workflow. Tangent horizontal lines at extrema occur where f′(c) = 0.",
        "Higher order derivatives rarely classify basic extrema but matter when f″(c) = 0 forces the first derivative test. Product and quotient rules often appear inside f′—link to those calculators when f′ expansion is the hard part.",
        "For multivariable optimization, critical points become gradient zeros—a later topic. Single-variable fluency here is prerequisite for that generalization.",
      ],
    },
    {
      h2: "Exam strategies for critical point problems",
      paragraphs: [
        "Template full curve analysis: domain → f′ → critical numbers → sign chart → classify → f″ inflection if requested → sketch. Practice one polynomial and one rational function per study session.",
        "Show work for classification explicitly: cite sign change or state f″(c) with its sign. Partial credit rewards correct critical numbers even if classification slips, but complete arguments need tests.",
        "On optimization word problems, define variables, write constraint equations, substitute to get a single-variable objective, then find critical points of that objective on the feasible interval.",
      ],
    },
    {
      h2: "Long-tail critical point questions answered",
      paragraphs: [
        "How do you find critical points of f(x) = x³ − 3x? f′(x) = 3x² − 3 = 3(x² − 1); critical points at x = −1 and x = 1. Sign chart shows max at −1 and min at 1.",
        "Can a critical point occur where f′ is undefined? Yes—cusp points like |x| at 0 have undefined derivative but are critical; classify using one-sided behavior or first derivative test carefully.",
        "What is the difference between critical points and inflection points? Inflection points concern concavity change, typically tied to f″ zeros with sign change—not every critical point inflects, and not every inflection is a critical point of f.",
        "Does a critical points calculator replace the first derivative test? It finds candidates quickly; you still justify max/min on exams unless the problem only asks for critical numbers.",
      ],
    },
  ];
}

const BREADCRUMB_HOME = { label: "Home", path: EN_ROUTES.home };

export const criticalPointsCalculatorConfig: CalculatorPageConfig = {
  slug: "critical-points-calculator",
  path: EN_ROUTES.criticalPointsCalculator,
  embedCalculator: true,
  breadcrumbHome: BREADCRUMB_HOME,
  h1: "Critical Points Calculator — Find and Classify Extrema",
  intro: [
    "Critical points occur where the derivative is zero or undefined—locations where a function can change from increasing to decreasing or reach a horizontal tangent. This critical points calculator page walks you through finding f′(x), solving f′(x) = 0, and interpreting results with the first and second derivative tests.",
    "Enter your function in the linked derivative calculator to obtain f′ symbolically with full steps. Use that output to identify critical numbers, then evaluate f″ at each candidate when you need quick classification. The worked examples below model the complete workflow from differentiation through extrema analysis.",
    "Whether you are sketching curves, solving optimization problems, or preparing for a calculus exam, systematic critical point analysis is essential. Combine the tools and guides here with your instructor's sign-chart method for rigorous justifications.",
  ],
  meta: {
    title: "Critical Points Calculator — Find f′(x) = 0 with Steps",
    description:
      "Free critical points calculator guide with step-by-step derivatives. Find critical numbers, classify max and min, and practice curve sketching for calculus.",
    keywords:
      "critical points calculator, find critical points, critical numbers calculus, relative max min calculator, f prime equals zero, critical point analysis",
  },
  defaultExamples: ["x^3 - 3*x", "x^4 - 4*x^2", "x*exp(-x)", "sin(x) + cos(x)"],
  examples: [
    {
      title: "Cubic with two critical points",
      problem: "Find critical points of f(x) = x³ − 3x and classify them",
      steps: [
        "f′(x) = 3x² − 3 = 3(x² − 1).",
        "Set f′(x) = 0 → x = −1 or x = 1.",
        "First derivative test: f′ changes + to − at −1 (local max); − to + at 1 (local min).",
        "f(−1) = 2, f(1) = −2.",
      ],
      result: "Local max at (−1, 2); local min at (1, −2)",
    },
    {
      title: "Quartic with three critical points",
      problem: "Critical points of f(x) = x⁴ − 4x²",
      steps: [
        "f′(x) = 4x³ − 8x = 4x(x² − 2).",
        "Zeros: x = 0, x = √2, x = −√2.",
        "Sign chart shows local max at x = 0, local minima at x = ±√2.",
      ],
      result: "Max at (0, 0); min at (±√2, −4)",
    },
    {
      title: "Exponential decay factor",
      problem: "Find and classify critical points of f(x) = x·e^(−x)",
      steps: [
        "Product rule: f′(x) = e^(−x) − x·e^(−x) = e^(−x)(1 − x).",
        "e^(−x) ≠ 0 always, so critical point when 1 − x = 0 → x = 1.",
        "f″(x) at x = 1 is negative → local maximum by second derivative test.",
      ],
      result: "Local max at (1, 1/e)",
    },
  ],
  faqs: [
    {
      q: "What is a critical point in calculus?",
      a: "A critical point of f at x = c occurs when f′(c) = 0 or f′(c) is undefined, with c in the domain of f. Critical points are candidates for local extrema.",
    },
    {
      q: "How do I find critical points with this tool?",
      a: "Differentiate your function using the main derivative calculator, solve f′(x) = 0, and note where f′ is undefined. The examples on this page show the full classification workflow.",
    },
    {
      q: "What is the difference between critical points and inflection points?",
      a: "Critical points come from f′. Inflection points relate to concavity change and typically involve f″. A point can be one, both, or neither depending on the function.",
    },
    {
      q: "When does the second derivative test fail?",
      a: "When f′(c) = 0 and f″(c) = 0, the test is inconclusive. Use the first derivative test or higher-order information instead.",
    },
    {
      q: "Can critical points occur at endpoints?",
      a: "Endpoints are not interior critical points in the usual definition, but they must be included when finding absolute maxima and minima on a closed interval [a, b].",
    },
    {
      q: "How do critical points relate to optimization?",
      a: "Many optimization problems reduce to finding where the derivative of an objective function is zero within a feasible domain, then comparing values at those critical points and boundaries.",
    },
    {
      q: "What if f′ has no real zeros?",
      a: "Then f has no interior critical points where f′ is zero. The function may still have extrema at domain endpoints or if f′ is undefined at interior points.",
    },
    {
      q: "Is there a Spanish version of this calculator?",
      a: "Yes. Visit the Spanish site homepage or the dedicated Spanish critical points route linked in the internal links section below.",
    },
  ],
  relatedCalculators: [
    {
      label: "Derivative calculator",
      href: EN_MAIN_CALCULATOR_HREF,
      description: "Find f′(x) with complete step-by-step work—the first step in critical point analysis.",
    },
    {
      label: "Second derivative calculator",
      href: EN_ROUTES.secondDerivativeCalculator,
      description: "Apply the second derivative test after locating critical numbers.",
    },
    {
      label: "Tangent line calculator",
      href: EN_ROUTES.tangentLineCalculator,
      description: "Horizontal tangents at extrema where f′(c) = 0.",
    },
    {
      label: "Higher order derivative calculator",
      href: EN_ROUTES.higherOrderDerivativeCalculator,
      description: "When f″ test is inconclusive, higher-order information may help.",
    },
  ],
  internalLinks: [
    { label: "Derivative rules guide", href: EN_ROUTES.derivativeRules },
    { label: "Derivative examples", href: EN_ROUTES.derivativeExamples },
    { label: "Try our main derivative calculator", href: EN_MAIN_CALCULATOR_HREF },
    { label: "Spanish homepage", href: ROUTES.home },
    ...enStandardInternalLinks(),
  ],
  educationalSections: criticalPointsExpandedSections(),
};
