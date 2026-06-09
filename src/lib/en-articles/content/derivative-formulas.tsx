import {
  ArticleWrap,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  TipCard,
  WarningCard,
  InternalLinksBlock,
  RelatedCalculatorsBlock,
  RulesLinksBlock,
  renderMath,
  Link,
  EN_MAIN_CALCULATOR_HREF,
  EN_ROUTES,
} from "../helpers";

export function DerivativeFormulasContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="overview">Derivative formulas: your complete reference</h2>
        <p>
          Derivative formulas are the vocabulary of calculus. Whether you are preparing for an exam, refreshing
          before multivariable calculus, or checking a homework answer, you need a single place that lists every
          standard formula—power, product, quotient, chain, trigonometric, logarithmic, exponential, and
          inverse—together with when to apply each one. This guide is that reference. It complements the rule-by-rule
          explanations in our{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          article and the worked problems in{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>
          . Keep the{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            derivative calculator with steps
          </Link>{" "}
          open so you can verify each formula application symbolically.
        </p>
        <p>
          A formula alone does not tell you which one to use. The skill is recognition: look at the top-level
          structure of the expression. Is it a sum? Apply linearity term by term. A product of two non-constant
          factors? Product rule. A quotient u/v? Quotient rule. A nested function f(g(x))? Chain rule—possibly
          combined with product or quotient inside u or v. The tables below organize formulas by category; the
          strategy section at the end walks through decision-making.
        </p>
      </section>

      <section>
        <h2 id="linearity">Linearity and constant formulas</h2>
        <FormulaCard title="Sum, difference, and constant multiple">
          {renderMath("(f + g)' = f' + g', \\quad (f - g)' = f' - g', \\quad (cf)' = c f'", true)}
        </FormulaCard>
        <p>
          The derivative of a sum is the sum of derivatives. Constants factor out; the derivative of any
          standalone constant is zero. These formulas let you split polynomials and mixed expressions before
          touching heavier rules. They are also the foundation of partial derivatives: when you compute ∂f/∂x, you
          treat other variables as constants—exactly the constant-multiple rule in disguise. Use the{" "}
          <Link href={EN_ROUTES.partialDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            partial derivative calculator
          </Link>{" "}
          to see how linearity applies variable by variable.
        </p>
        <ExampleCard
          title="Example: 7x⁴ − 2x² + 11"
          steps={[
            "Differentiate term by term using the power rule.",
            "28x³ − 4x; the constant 11 contributes 0.",
          ]}
        />
      </section>

      <section>
        <h2 id="power-rule">Power rule and root formulas</h2>
        <FormulaCard title="Power rule">
          {renderMath("\\dfrac{d}{dx} x^n = n x^{n-1}", true)}
        </FormulaCard>
        <p>
          For any real exponent n (with domain restrictions for some n), multiply by n and subtract one from the
          exponent. Special cases: n = 0 gives a constant (derivative 0); n = 1 gives 1; fractional exponents
          cover roots: √x = x^(1/2) differentiates to 1/(2√x). Negative exponents cover reciprocals: 1/x³ =
          x^(−3) differentiates to −3/x⁴. See the{" "}
          <Link href={EN_ROUTES.derivativeOfXSquared} className="text-violet-600 font-semibold hover:underline">
            derivative of x²
          </Link>{" "}
          guide for intuition from the limit definition.
        </p>
        <TipCard>
          Before applying the quotient rule to a rational function, check whether long division or factoring
          rewrites it as a sum of power-rule terms—that is often faster and less error-prone.
        </TipCard>
      </section>

      <section>
        <h2 id="product-quotient">Product and quotient formulas</h2>
        <FormulaCard title="Product rule">
          {renderMath("(uv)' = u'v + uv'", true)}
        </FormulaCard>
        <FormulaCard title="Quotient rule">
          {renderMath("\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}", true)}
        </FormulaCard>
        <p>
          Use the product formula when two non-constant factors are multiplied: x·sin x, e^x·ln x, (x+1)(x−1) if
          you choose not to expand. Mnemonic: “first times derivative of second plus second times derivative of
          first.” Use the quotient formula for true fractions u/v where simplification does not reduce the
          problem to a sum. Mnemonic: “low d-high minus high d-low, over low squared.”
        </p>
        <p>
          Dedicated tools break down u, v, u′, and v′ explicitly: the{" "}
          <Link href={EN_ROUTES.productRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            product rule calculator
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.quotientRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            quotient rule calculator
          </Link>
          . For extended fraction walkthroughs, see{" "}
          <Link href={EN_ROUTES.howToDifferentiateAFraction} className="text-violet-600 font-semibold hover:underline">
            how to differentiate a fraction
          </Link>
          .
        </p>
        <WarningCard>
          (fg)′ is not f′g′. (f/g)′ is not f′/g′. Each structure has its own formula—misidentifying the structure
          is the most common source of exam errors.
        </WarningCard>
      </section>

      <section>
        <h2 id="chain-rule">Chain rule formula</h2>
        <FormulaCard title="Chain rule">
          {renderMath("\\dfrac{d}{dx} f(g(x)) = f'(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <p>
          The chain rule handles compositions: sin(3x), (x²+1)^5, e^(x³), ln(cos x), √(x²+4). Identify the outer
          function f and inner function g; differentiate the outer at the inner argument, then multiply by the
          derivative of the inner. When compositions nest deeply—tan(e^(x²))—apply the chain rule repeatedly from
          the outside in. The{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule calculator
          </Link>{" "}
          labels each layer so you can match your handwritten work.
        </p>
        <ExampleCard
          title="Example: cos(x³)"
          steps={[
            "Outer f = cos, f′ = −sin.",
            "Inner g = x³, g′ = 3x².",
            "Result: −3x² sin(x³).",
          ]}
        />
      </section>

      <section>
        <h2 id="trig-formulas">Trigonometric derivative formulas</h2>
        <p>
          The six basic trigonometric derivatives form the backbone of periodic modeling—springs, waves, and
          rotations. Inverse trig functions appear in geometry and integration; their formulas follow from implicit
          differentiation and the chain rule.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">sin x</td>
                <td className="border border-slate-200 px-4 py-3">cos x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">cos x</td>
                <td className="border border-slate-200 px-4 py-3">−sin x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">tan x</td>
                <td className="border border-slate-200 px-4 py-3">sec² x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">cot x</td>
                <td className="border border-slate-200 px-4 py-3">−csc² x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">sec x</td>
                <td className="border border-slate-200 px-4 py-3">sec x tan x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">csc x</td>
                <td className="border border-slate-200 px-4 py-3">−csc x cot x</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">arcsin x</td>
                <td className="border border-slate-200 px-4 py-3">1/√(1−x²)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">arccos x</td>
                <td className="border border-slate-200 px-4 py-3">−1/√(1−x²)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">arctan x</td>
                <td className="border border-slate-200 px-4 py-3">1/(1+x²)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <InternalLinksBlock
          heading="Trigonometric deep dives"
          links={[
            { href: EN_ROUTES.derivativeOfSinX, label: "Derivative of sin(x)", desc: "Formula and chain rule" },
            { href: EN_ROUTES.derivativeOfCosX, label: "Derivative of cos(x)", desc: "Minus sign explained" },
            { href: EN_ROUTES.derivativeOfTanX, label: "Derivative of tan(x)", desc: "sec² derivation" },
          ]}
        />
      </section>

      <section>
        <h2 id="log-exp-formulas">Logarithmic and exponential formulas</h2>
        <FormulaCard title="Natural log, general log, and exponentials">
          {renderMath(
            "\\dfrac{d}{dx}\\ln x = \\dfrac{1}{x}, \\quad \\dfrac{d}{dx}\\log_a x = \\dfrac{1}{x\\ln a}, \\quad \\dfrac{d}{dx} e^x = e^x, \\quad \\dfrac{d}{dx} a^x = a^x \\ln a",
            true
          )}
        </FormulaCard>
        <p>
          Natural log and base-e exponential are inverses; their derivatives reflect that symmetry. For ln(g(x)),
          the chain rule gives g′(x)/g(x). For e^(g(x)), the result is e^(g(x))·g′(x). Logarithmic differentiation
         —take ln of both sides when products, quotients, and variable exponents mix—uses these formulas after
          expansion. Read the{" "}
          <Link href={EN_ROUTES.derivativeOfLnX} className="text-violet-600 font-semibold hover:underline">
            derivative of ln(x)
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.derivativeOfEX} className="text-violet-600 font-semibold hover:underline">
            derivative of e^x
          </Link>{" "}
          guides for full derivations.
        </p>
      </section>

      <section>
        <h2 id="implicit-formulas">Implicit and related-rates formulas</h2>
        <p>
          When y is defined implicitly by F(x, y) = 0, differentiate both sides with respect to x. Every y-term
          picks up a factor dy/dx from the chain rule. Solve for dy/dx at the end. This is not a separate magic
          formula—it is the chain rule organized for unknown y. Circles x² + y² = r², ellipses, and constraint
          equations in related-rates problems all use this pattern. Our{" "}
          <Link href={EN_ROUTES.implicitDifferentiationExamples} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation examples
          </Link>{" "}
          walk through full algebra, and the{" "}
          <Link href={EN_ROUTES.implicitDifferentiationCalculator} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation calculator
          </Link>{" "}
          solves for dy/dx symbolically.
        </p>
        <FormulaCard title="Related rates template">
          {renderMath("\\dfrac{d}{dt}[F(x,y)] = 0 \\implies F_x \\dfrac{dx}{dt} + F_y \\dfrac{dy}{dt} = 0", true)}
        </FormulaCard>
      </section>

      <section>
        <h2 id="higher-order">Higher-order derivative formulas</h2>
        <p>
          The second derivative f″ is the derivative of f′; it describes concavity and acceleration. The nth
          derivative repeats the process. Patterns emerge: (sin x)″ = −sin x, (cos x)″ = −cos x, (e^x)⁽ⁿ⁾ = e^x.
          For polynomials of degree n, the (n+1)th derivative is zero. Use the{" "}
          <Link href={EN_ROUTES.secondDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            second derivative calculator
          </Link>{" "}
          for concavity checks and the{" "}
          <Link href={EN_ROUTES.higherOrderDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            higher-order derivative calculator
          </Link>{" "}
          when Taylor series or ODE coursework requires f⁽ⁿ⁾.
        </p>
      </section>

      <section>
        <h2 id="applications">Application formulas: tangent lines and critical points</h2>
        <p>
          Derivatives power two core applications in single-variable calculus. The tangent line at x = a has slope
          f′(a) and equation y − f(a) = f′(a)(x − a). Critical points occur where f′(x) = 0 or f′ is undefined;
          the first derivative test and second derivative test classify maxima and minima. The{" "}
          <Link href={EN_ROUTES.tangentLineCalculator} className="text-violet-600 font-semibold hover:underline">
            tangent line calculator
          </Link>{" "}
          computes slope and equation from your function, and the{" "}
          <Link href={EN_ROUTES.criticalPointsCalculator} className="text-violet-600 font-semibold hover:underline">
            critical points calculator
          </Link>{" "}
          finds stationary points and helps sketch graphs.
        </p>
        <FormulaCard title="Tangent line at x = a">
          {renderMath("y = f(a) + f'(a)(x - a)", true)}
        </FormulaCard>
      </section>

      <section>
        <h2 id="master-table">Master formula table</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Category</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Formula</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Linearity</td>
                <td className="border border-slate-200 px-4 py-3">(f ± g)′ = f′ ± g′</td>
                <td className="border border-slate-200 px-4 py-3">Sums and differences</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Power</td>
                <td className="border border-slate-200 px-4 py-3">n·x^(n−1)</td>
                <td className="border border-slate-200 px-4 py-3">x^n terms</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Product</td>
                <td className="border border-slate-200 px-4 py-3">u′v + uv′</td>
                <td className="border border-slate-200 px-4 py-3">Two factors multiplied</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Quotient</td>
                <td className="border border-slate-200 px-4 py-3">(u′v − uv′)/v²</td>
                <td className="border border-slate-200 px-4 py-3">Fractions u/v</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Chain</td>
                <td className="border border-slate-200 px-4 py-3">f′(g(x))·g′(x)</td>
                <td className="border border-slate-200 px-4 py-3">Compositions f(g(x))</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">sin, cos, tan</td>
                <td className="border border-slate-200 px-4 py-3">cos, −sin, sec²</td>
                <td className="border border-slate-200 px-4 py-3">Trig factors (radians)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">ln, e^x</td>
                <td className="border border-slate-200 px-4 py-3">1/x, e^x</td>
                <td className="border border-slate-200 px-4 py-3">Log and natural exp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="strategy">Choosing the right formula</h2>
        <p>
          Start at the outermost operation. Sums split immediately. Products need u and v. Quotients need u and v
          with the fraction structure intact. Compositions need outer f and inner g. Often multiple rules combine:
          e^(x²)·sin x needs product rule with chain rule inside u′; (sin x)/(1+cos x) needs quotient rule with
          trig derivatives for u′ and v′. The{" "}
          <Link href={EN_ROUTES.derivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            derivative calculator
          </Link>{" "}
          names each step so you can train that recognition loop: classify, apply, simplify, verify.
        </p>
        <p>
          For multivariable functions, partial derivative formulas reuse every single-variable rule with other
          variables held fixed. See{" "}
          <Link href={EN_ROUTES.partialDerivativeExamples} className="text-violet-600 font-semibold hover:underline">
            partial derivative examples
          </Link>{" "}
          for notation and practice. Cross-reference this page with{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          for narrative explanations and{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>{" "}
          for tiered worked problems.
        </p>
        <TipCard>
          Print or bookmark this page alongside the cheat sheet. Formulas answer “what”; the rules guide answers
          “why” and “when.” Together they cover exam prep end to end.
        </TipCard>
      </section>

      <section>
        <h2 id="study-habits">Building formula fluency</h2>
        <p>
          Memorization without classification practice fails on exam day. Drill in pairs: given f(x), state the
          formula before computing. Start with single-rule problems (power only, chain only), then mix. Time
          yourself: ten seconds to name the rule, two minutes to finish algebra. When you miss, log the
          misclassification—product mistaken for chain, quotient skipped in favor of wrong simplification—and
          revisit the matching section here.
        </p>
        <p>
          Calculators are verification tools, not substitutes for naming rules. Enter the same problem in the{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            main derivative calculator
          </Link>
          , read the first step label, and compare to your handwritten first step. The first divergence line
          reveals the formula you should have used. Over a week of deliberate practice, that gap closes.
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <InternalLinksBlock
        heading="All calculator tools"
        links={[
          { href: EN_MAIN_CALCULATOR_HREF, label: "Derivative calculator", desc: "General step-by-step tool" },
          { href: EN_ROUTES.derivativeCalculator, label: "Derivative calculator page", desc: "Dedicated landing" },
          { href: EN_ROUTES.partialDerivativeCalculator, label: "Partial derivative", desc: "∂/∂x and ∂/∂y" },
          { href: EN_ROUTES.chainRuleCalculator, label: "Chain rule", desc: "Nested compositions" },
          { href: EN_ROUTES.implicitDifferentiationCalculator, label: "Implicit differentiation", desc: "dy/dx from equations" },
          { href: EN_ROUTES.secondDerivativeCalculator, label: "Second derivative", desc: "Concavity and f″" },
          { href: EN_ROUTES.productRuleCalculator, label: "Product rule", desc: "uv breakdown" },
          { href: EN_ROUTES.quotientRuleCalculator, label: "Quotient rule", desc: "u/v fractions" },
          { href: EN_ROUTES.higherOrderDerivativeCalculator, label: "Higher-order", desc: "nth derivatives" },
          { href: EN_ROUTES.tangentLineCalculator, label: "Tangent line", desc: "Slope and equation" },
          { href: EN_ROUTES.criticalPointsCalculator, label: "Critical points", desc: "Maxima and minima" },
        ]}
      />
    </ArticleWrap>
  );
}
