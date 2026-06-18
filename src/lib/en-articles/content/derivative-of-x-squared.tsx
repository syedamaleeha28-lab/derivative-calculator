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
  ExamplesLinksBlock,
  renderMath,
  Link,
  EN_MAIN_CALCULATOR_HREF,
  EN_ROUTES,
} from "../helpers";
import { HubBackLink } from "@/lib/common-derivative-functions/helpers";

export function DerivativeOfXSquaredContent() {
  return (
    <ArticleWrap>
      <HubBackLink locale="en" />
      <section>
        <h2 id="intro">Introduction: derivative of x² and the power rule</h2>
        <p>
          The derivative of x squared is 2x. It is the first power-rule example most students learn after the
          limit definition of the derivative. Understanding x² thoroughly prepares you for x^n, polynomials, and
          every application of the power rule in the{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          guide. Use our{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            derivative calculator
          </Link>{" "}
          to compare limit-based reasoning with fast symbolic rules.
        </p>
        <p>
          The graph of f(x) = x² is a parabola opening upward. Its tangent slope at each point is 2x: negative
          on the left arm, zero at the vertex, positive on the right. That linear slope function is exactly what
          differentiation predicts.
        </p>
      </section>

      <section>
        <h2 id="formula">Formula using the power rule</h2>
        <FormulaCard title="Power rule for x²">
          {renderMath("\\dfrac{d}{dx} x^2 = 2x", true)}
        </FormulaCard>
        <FormulaCard title="General power rule">
          {renderMath("\\dfrac{d}{dx} x^n = n\\,x^{n-1}", true)}
        </FormulaCard>
        <p>
          Here n = 2: bring the exponent down as a coefficient and reduce the exponent by one to get 2x^(1) = 2x.
          The rule also works for negative and fractional exponents on the appropriate domain—for example, d/dx
          x^(−1) = −x^(−2) = −1/x² for x ≠ 0.
        </p>
        <TipCard>
          Constants multiply through: d/dx[5x²] = 10x. The derivative of a constant alone is zero.
        </TipCard>
      </section>

      <section>
        <h2 id="limit-proof">Limit definition worked example</h2>
        <p>
          You can recover 2x without the power rule by expanding (x+h)² and simplifying the difference quotient.
        </p>
        <ExampleCard
          title="Limit definition for x²"
          steps={[
            "f(x+h) − f(x) = (x+h)² − x² = 2xh + h².",
            "Divide by h: 2x + h.",
            "Let h → 0: limit is 2x.",
          ]}
        >
          {renderMath(
            "\\lim_{h\\to 0} \\dfrac{(x+h)^2 - x^2}{h} = \\lim_{h\\to 0} (2x + h) = 2x",
            true
          )}
        </ExampleCard>
        <p>
          Seeing both methods—limit and power rule—builds trust in the shortcut. On timed exams, the power rule
          is appropriate once your instructor has established it.
        </p>
      </section>

      <section>
        <h2 id="polynomials">From x² to full polynomials</h2>
        <ExampleCard
          title="Example: 3x² − 5x + 7"
          steps={[
            "Differentiate term by term (linearity).",
            "3·2x = 6x from x² term.",
            "−5 from x term; 0 from constant.",
            "Result: 6x − 5.",
          ]}
        />
        <p>
          Polynomials are finite sums of power terms. After x², practice cubics like x³ → 3x² and quartics. The
          pattern scales to engineering formulas where position, velocity, and acceleration are related by
          differentiation.
        </p>
        <WarningCard>
          For (x² + 1)², expand or use the chain rule—do not apply the power rule to the whole binomial as if it
          were x² alone.
        </WarningCard>
      </section>

      <section>
        <h2 id="compositions">Compositions: (g(x))² and chain rule</h2>
        <FormulaCard title="Chain rule for squares">
          {renderMath("\\dfrac{d}{dx}[g(x)]^2 = 2g(x)\\cdot g'(x)", true)}
        </FormulaCard>
        <ExampleCard title="Example: (3x + 1)²">
          <p>{renderMath("\\dfrac{d}{dx}(3x+1)^2 = 2(3x+1)\\cdot 3 = 6(3x+1)", true)}</p>
        </ExampleCard>
        <ExampleCard title="Example: (x² + 1)²">
          <p>{renderMath("\\dfrac{d}{dx}(x^2+1)^2 = 2(x^2+1)\\cdot 2x = 4x(x^2+1)", true)}</p>
        </ExampleCard>
        <p>
          Use the{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule calculator
          </Link>{" "}
          when the inner function is more complex than a linear expression.
        </p>
      </section>

      <section>
        <h2 id="applications">Tangent lines and motion</h2>
        <p>
          The tangent line to y = x² at x = 3 has slope f′(3) = 6. Point-slope form gives y − 9 = 6(x − 3). In
          motion, if position s(t) = t² (units consistent), velocity is s′(t) = 2t—constant acceleration
          motion’s discrete cousin in introductory problems.
        </p>
        <p>
          Our{" "}
          <Link href={EN_ROUTES.tangentLineCalculator} className="text-violet-600 font-semibold hover:underline">
            tangent line calculator
          </Link>{" "}
          builds the equation from f and f′ at a chosen point.
        </p>
      </section>

      <section>
        <h2 id="deeper-dive">Deeper dive: from parabolas to optimization</h2>
        <p>
          The family x^n for integer n ≥ 2 all share the same qualitative shape near zero: flat at the origin with
          increasing steepness as |x| grows. The exponent controls how “sharp” the vertex feels. Compare x² with x⁴:
          both have derivative zero at 0, but x⁴ is flatter near the vertex because the power is higher. That
          distinction matters in Taylor approximations: matching value and first derivative at a point is first-order
          accuracy; higher powers capture curvature.
        </p>
        <p>
          Optimization on a closed interval for quadratics ax² + bx + c reduces to finding the vertex at x = −b/(2a)
          when a &gt; 0 (minimum) or a &lt; 0 (maximum). The derivative 2ax + b set to zero gives the same x. Thus the
          power rule connects local calculus to global parabola geometry. In multivariable calculus later, Hessian
          matrices generalize second derivatives for surfaces; for one variable, f″(x) = 2a tells you concavity in
          one glance.
        </p>
        <p>
          Negative powers like x^(−2) model inverse-square laws in physics. The derivative −2x^(−3) blows up near x =
          0, reflecting sensitivity. Fractional powers such as √x appear in scaling laws; differentiate with the
          power rule on x^(1/2) but remember domain x ≥ 0 for the real square root. Each variant reinforces that
          the power rule is not only for positive integer exponents on x alone—it is the template for any real
          exponent where the function is defined and differentiable.
        </p>
      </section>

      <section>
        <h2 id="table">Power rule reference</h2>
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
                <td className="border border-slate-200 px-4 py-3">x</td>
                <td className="border border-slate-200 px-4 py-3">1</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">x²</td>
                <td className="border border-slate-200 px-4 py-3">2x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">x³</td>
                <td className="border border-slate-200 px-4 py-3">3x²</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">x^n</td>
                <td className="border border-slate-200 px-4 py-3">n·x^(n−1)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Continue with{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>{" "}
          for mixed polynomials and rationals.
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <ExamplesLinksBlock />
    </ArticleWrap>
  );
}

