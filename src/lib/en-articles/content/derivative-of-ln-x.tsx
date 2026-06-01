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

export function DerivativeOfLnXContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Introduction: natural logarithm and 1/x</h2>
        <p>
          The derivative of ln x is 1/x for x &gt; 0. That simple reciprocal rule is one of the most used facts
          in calculus—appearing inside chain-rule problems, logarithmic differentiation, and differential
          equations. This article explains why the slope of ln(x) is 1/x, how the chain rule extends to ln(g(x)),
          and how ln relates to{" "}
          <Link href={EN_ROUTES.derivativeOfEX} className="text-violet-600 font-semibold hover:underline">
            e^x
          </Link>
          , whose derivative is itself. Cross-check every step with our{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            derivative calculator
          </Link>{" "}
          and the broader{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          guide.
        </p>
        <p>
          The natural logarithm is the inverse of the exponential function base e. Inverse-function
          differentiation is one way to derive (ln x)′ = 1/x: if y = ln x then e^y = x, and implicit
          differentiation gives dy/dx = 1/x.
        </p>
      </section>

      <section>
        <h2 id="formula">Core formula and domain</h2>
        <FormulaCard title="Derivative of ln(x)">
          {renderMath("\\dfrac{d}{dx}\\ln(x) = \\dfrac{1}{x}, \\quad x > 0", true)}
        </FormulaCard>
        <p>
          The domain restriction x &gt; 0 matches the standard definition of ln as the logarithm base e on
          positive reals. In some courses, ln|x| is used for x ≠ 0 with derivative 1/x on each side of zero.
        </p>
        <TipCard>
          ln(1) = 0 and (ln x)′ at x = 1 is 1. The graph of ln is steep near zero and flattens as x grows.
        </TipCard>
      </section>

      <section>
        <h2 id="inverse">Derivation via inverse functions</h2>
        <ExampleCard
          title="Implicit differentiation on e^y = x"
          steps={[
            "Let y = ln(x), so e^y = x.",
            "Differentiate both sides: e^y · dy/dx = 1.",
            "Solve: dy/dx = 1/e^y = 1/x.",
          ]}
        />
        <p>
          This argument uses (e^u)′ = e^u · u′. Understanding that link makes exponential and logarithmic
          derivatives feel like one story instead of two unrelated formulas.
        </p>
      </section>

      <section>
        <h2 id="chain-rule">Chain rule: ln(g(x))</h2>
        <FormulaCard title="Logarithmic composition">
          {renderMath("\\dfrac{d}{dx}\\ln(g(x)) = \\dfrac{g'(x)}{g(x)}", true)}
        </FormulaCard>
        <ExampleCard
          title="Example: ln(3x)"
          steps={[
            "Either g(x) = 3x with g′/g = 3/(3x) = 1/x.",
            "Or use ln(3x) = ln 3 + ln x; derivative of constant plus ln x is 1/x.",
          ]}
        >
          <p>{renderMath("\\dfrac{d}{dx}\\ln(3x) = \\dfrac{1}{x}", true)}</p>
        </ExampleCard>
        <ExampleCard title="Example: ln(x² + 1)">
          <p>{renderMath("\\dfrac{d}{dx}\\ln(x^2+1) = \\dfrac{2x}{x^2+1}", true)}</p>
        </ExampleCard>
        <ExampleCard title="Example: ln(sin x) for sin x &gt; 0">
          <p>{renderMath("\\dfrac{d}{dx}\\ln(\\sin x) = \\dfrac{\\cos x}{\\sin x} = \\cot x", true)}</p>
        </ExampleCard>
        <WarningCard>
          The denominator in g′/g is g(x), not g′(x). A common slip is placing the derivative in the wrong place.
        </WarningCard>
      </section>

      <section>
        <h2 id="log-diff">Preview: logarithmic differentiation</h2>
        <p>
          When a function is a product or power of many factors—x^x, (sin x)^x, complicated products—take ln of
          both sides, expand using log laws, then differentiate implicitly. You get expressions involving 1/f ·
          f′(x), which is why mastering (ln u)′ = u′/u pays off later.
        </p>
        <p>
          For products of several functions, the product rule is direct but messy; logarithmic differentiation
          can organize the algebra. Our{" "}
          <Link href={EN_ROUTES.productRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            product rule calculator
          </Link>{" "}
          is an alternative when you prefer not to take logs.
        </p>
      </section>

      <section>
        <h2 id="other-bases">Other logarithm bases</h2>
        <FormulaCard title="Change of base">
          {renderMath("\\dfrac{d}{dx}\\log_a(x) = \\dfrac{1}{x\\ln a}", true)}
        </FormulaCard>
        <p>
          Since log_a(x) = ln(x)/ln(a), the constant 1/ln(a) factors out and the derivative is 1/(x ln a). For
          base 10, ln(10) ≈ 2.3026 appears in the denominator.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Function</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Derivative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">ln(x)</td>
                <td className="border border-slate-200 px-4 py-3">1/x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">log_a(x)</td>
                <td className="border border-slate-200 px-4 py-3">1/(x ln a)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">e^x</td>
                <td className="border border-slate-200 px-4 py-3">e^x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">a^x</td>
                <td className="border border-slate-200 px-4 py-3">a^x ln(a)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="deeper-dive">Deeper dive: growth rates and logarithmic scales</h2>
        <p>
          The graph of ln x rises quickly near zero and slowly for large x. Its derivative 1/x mirrors that: steep
          slopes near the y-axis, gentle slopes far to the right. That inverse relationship explains why logarithms
          compress large ranges in science: multiplying the input has an additive effect inside ln, and differentiating
          reverses the compression locally. In chemistry and finance, ln appears when relative change matters more
          than absolute change; the derivative 1/x weights small x more heavily, matching sensitivity near zero.
        </p>
        <p>
          Logarithmic differentiation is worth previewing even in a chapter focused on ln x alone. Given y =
          x^x, taking ln of both sides yields ln y = x ln x, then (1/y)y′ = ln x + 1 after the product rule on the
          right. Solving gives y′ = y(ln x + 1). Without logs, differentiating x^x requires recognizing it as
          e^(x ln x) and using exponentials—both paths work. The ln route organizes messy products of many factors
          into sums that differentiate term by term.
        </p>
        <p>
          When arguments are complicated, write g(x) explicitly before applying g′/g. For ln(sin x), confirm sin x
          &gt; 0 on the interval you care about; the derivative cos x / sin x is cot x on that interval. Domain
          restrictions propagate: ln|x| extends to negative x with derivative 1/x for x ≠ 0, but ln x alone excludes
          negatives entirely. Exam questions sometimes test whether you notice the domain before simplifying.
        </p>
      </section>

      <section>
        <h2 id="practice">Practice problems and links</h2>
        <p>
          Differentiate ln(x³), ln(cos x) on intervals where cos x &gt; 0, and ln(x/e^x). Combine with trig from{" "}
          <Link href={EN_ROUTES.derivativeOfSinX} className="text-violet-600 font-semibold hover:underline">
            sin(x)
          </Link>{" "}
          guides. More mixed exercises:{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>
          .
        </p>
        <p>
          Use the{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule calculator
          </Link>{" "}
          when the argument of ln is a nested polynomial or exponential.
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <InternalLinksBlock
        links={[
          { href: EN_ROUTES.derivativeOfEX, label: "Derivative of e^x", desc: "Inverse pair to natural log" },
          { href: EN_ROUTES.howToDifferentiateAFraction, label: "Differentiate a fraction", desc: "When ln appears in quotients" },
        ]}
      />
    </ArticleWrap>
  );
}

