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
  EN_ROUTES,
} from "../helpers";

export function DerivativeOfSinXContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="introduction">Introduction: why the derivative of sin(x) matters</h2>
        <p>
          The question “what is the derivative of sin x?” appears in nearly every first-semester calculus
          course. It is not an isolated fact to memorize: it opens the door to modeling oscillations, waves,
          alternating current, and any phenomenon that repeats in time or space. In this guide you will see
          the definition of the derivative applied to sine, the main formula, a step-by-step derivation
          sketch, chain-rule extensions, worked examples, and answers to frequently asked questions. You can
          verify every line with our{" "}
          <Link href={EN_ROUTES.derivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            derivative calculator with steps
          </Link>
          .
        </p>
        <p>
          If you are building a library of trigonometric derivatives, starting with sin(x) is the right move.
          Once you understand why the slope of sine is cosine, the formulas for cos(x) and tan(x) fit into the
          same mental picture. For a full reference table, see our{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules guide
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="definition">Definition: derivative as instantaneous rate of change</h2>
        <p>
          For any function f, the derivative at a point x₀ is the limit of the difference quotient as the
          increment h approaches zero. Intuitively, it measures how fast f(x) changes when x changes slightly.
          For f(x) = sin(x), that limit can be evaluated using the angle-addition identity for sine and the
          standard limits lim(h→0) sin(h)/h = 1 and lim(h→0) (cos(h)−1)/h = 0. The result is cos(x₀). You do
          not need to reproduce the full epsilon-delta proof on every exam, but knowing that the formula comes
          from a limit—not from a magic table—helps you trust the algebra when compositions get harder.
        </p>
        <FormulaCard title="Limit definition">
          {renderMath("f'(x) = \\lim_{h\\to 0} \\dfrac{\\sin(x+h) - \\sin(x)}{h} = \\cos(x)", true)}
        </FormulaCard>
        <p>
          Geometrically, f′(x) is the slope of the tangent line to the graph of sin(x) at x. Where the sine
          curve reaches a peak or a trough, the tangent is horizontal and the derivative is zero—consistent
          with cos(x) being zero at those points.
        </p>
      </section>

      <section>
        <h2 id="formula">Formula: derivative of sin(x) equals cos(x)</h2>
        <FormulaCard title="Fundamental trigonometric derivative">
          {renderMath("\\dfrac{d}{dx}\\sin(x) = \\cos(x)", true)}
        </FormulaCard>
        <p>
          The derivative of sin(x) is cos(x) when x is measured in radians. That condition is essential: if your
          calculator or graphing tool is set to degrees, numerical slopes will not match the symbolic results
          used in university calculus. Before you practice, confirm radian mode on every device you use.
        </p>
        <TipCard>
          Memorize the pair sin → cos and cos → −sin. Review tan → sec² in our{" "}
          <Link href={EN_ROUTES.derivativeOfTanX} className="font-semibold text-violet-600 hover:underline">
            derivative of tan(x)
          </Link>{" "}
          article so all three basic trig derivatives stay linked in memory.
        </TipCard>
        <h3 id="radians">Why radians are required</h3>
        <p>
          The identity (sin x)′ = cos x is true in radians because the derivative of sin(x) at 0 equals 1 only
          when x is radian measure. In degrees, the graph of sin is stretched horizontally and the rate of
          change scales by a constant factor involving π/180. Calculus textbooks, AP exams, and symbolic engines
          all assume radians unless stated otherwise.
        </p>
      </section>

      <section>
        <h2 id="derivation">Step-by-step derivation sketch</h2>
        <p>
          Here is a standard proof outline you might see in lecture. Expand sin(x+h) using the sum formula,
          split the limit into two terms, and apply the known limits involving sin(h) and cos(h).
        </p>
        <ExampleCard
          title="Derivation outline for (sin x)′"
          steps={[
            "Write the difference quotient: [sin(x+h) − sin(x)] / h.",
            "Expand sin(x+h) = sin(x)cos(h) + cos(x)sin(h).",
            "Subtract sin(x) and divide by h; group terms with sin(x) and cos(x).",
            "Use lim sin(h)/h = 1 and lim (cos(h)−1)/h = 0.",
            "Conclude the limit equals cos(x).",
          ]}
        >
          <p className="mb-4">
            {renderMath(
              "\\dfrac{\\sin(x+h)-\\sin(x)}{h} = \\cos(x)\\dfrac{\\sin h}{h} + \\sin(x)\\dfrac{\\cos h - 1}{h} \\to \\cos(x)",
              true
            )}
          </p>
        </ExampleCard>
        <p>
          Each step relies on limit laws that are justified separately in a real analysis course. For
          differentiation practice, the takeaway is simple: differentiate sin to get cos, in radians.
        </p>
      </section>

      <section>
        <h2 id="chain-rule">Derivative of sin(g(x)): the chain rule</h2>
        <p>
          In applications you rarely differentiate plain sin(x). You see sin(3x), sin(x²), or sin(ln x). The
          outer function is sine; the inner function is g(x). The{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule
          </Link>{" "}
          multiplies the derivative of the outer layer by the derivative of the inner layer.
        </p>
        <FormulaCard title="Chain rule for sine">
          {renderMath("\\dfrac{d}{dx}\\sin(g(x)) = \\cos(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <ExampleCard
          title="Example: differentiate sin(3x)"
          steps={[
            "Identify g(x) = 3x, so g′(x) = 3.",
            "Derivative of outer sin: cos(3x).",
            "Multiply: 3cos(3x).",
          ]}
        >
          <p>{renderMath("\\dfrac{d}{dx}\\sin(3x) = 3\\cos(3x)", true)}</p>
        </ExampleCard>
        <ExampleCard title="Example: differentiate sin(x²)">
          <p>{renderMath("\\dfrac{d}{dx}\\sin(x^2) = \\cos(x^2)\\cdot 2x = 2x\\cos(x^2)", true)}</p>
        </ExampleCard>
        <WarningCard>
          Do not forget the factor g′(x). Writing only cos(3x) without the 3 is one of the most common exam
          errors when differentiating sin(g(x)).
        </WarningCard>
      </section>

      <section>
        <h2 id="product-quotient">Products and quotients involving sine</h2>
        <p>
          When sin(x) is multiplied by another factor, such as x·sin(x), use the product rule. The derivative
          of a product is not the product of the derivatives. When sine appears in a fraction, use the quotient
          rule or simplify first if possible.
        </p>
        <FormulaCard title="Product rule">
          {renderMath("(uv)' = u'v + uv'", true)}
        </FormulaCard>
        <ExampleCard
          title="Example: derivative of x·sin(x)"
          steps={[
            "Let u = x, v = sin(x).",
            "u′ = 1, v′ = cos(x).",
            "Apply (uv)′ = u′v + uv′ = sin(x) + x·cos(x).",
          ]}
        >
          <p>{renderMath("\\dfrac{d}{dx}[x\\sin(x)] = \\sin(x) + x\\cos(x)", true)}</p>
        </ExampleCard>
        <p>
          For sin(x)·cos(x), you may also rewrite using a double-angle identity before differentiating—but the
          product rule always works if you prefer a single method.
        </p>
      </section>

      <section>
        <h2 id="table">Quick reference table: sin, cos, tan</h2>
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
                <td className="border border-slate-200 px-4 py-3">sin(x)</td>
                <td className="border border-slate-200 px-4 py-3">cos(x)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">cos(x)</td>
                <td className="border border-slate-200 px-4 py-3">−sin(x)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">tan(x)</td>
                <td className="border border-slate-200 px-4 py-3">sec²(x)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Continue with{" "}
          <Link href={EN_ROUTES.derivativeOfCosX} className="text-violet-600 font-semibold hover:underline">
            derivative of cos(x)
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.derivativeOfTanX} className="text-violet-600 font-semibold hover:underline">
            derivative of tan(x)
          </Link>
          . More worked problems live in{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="advanced">Advanced compositions</h2>
        <h3 id="sin-exp">sin(e^x) and sin(ln x)</h3>
        <p>
          For sin(e^x), the inner derivative is e^x, giving cos(e^x)·e^x. For sin(ln x) with x &gt; 0, the inner
          derivative is 1/x. These problems mix exponential or logarithmic rules with trigonometry and appear
          often on worksheets after the chapter on the chain rule.
        </p>
        <ExampleCard title="Example: sin(ln x)">
          {renderMath("\\dfrac{d}{dx}\\sin(\\ln x) = \\dfrac{\\cos(\\ln x)}{x}", true)}
        </ExampleCard>
        <h3 id="linearity">Sums and constant multiples</h3>
        <p>
          The derivative of sin(x) + cos(x) is cos(x) − sin(x) by linearity. The derivative of 3sin(2x) is
          3·2cos(2x) = 6cos(2x). Pull constants out early and identify the inner function before you differentiate.
        </p>
      </section>

      <section>
        <h2 id="mistakes">Common mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confusing sin(x) with sin⁻¹(x) (arcsin); they are different functions with different derivatives.</li>
          <li>Omitting g′(x) in sin(g(x)).</li>
          <li>Using degree mode on a calculator while doing symbolic work in radians.</li>
          <li>Differentiating sin(x)·cos(x) as if it were a single basic trig function without the product rule.</li>
        </ul>
        <p className="mt-4">
          For fraction forms like sin(x)/x, see{" "}
          <Link href={EN_ROUTES.howToDifferentiateAFraction} className="text-violet-600 font-semibold hover:underline">
            how to differentiate a fraction
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="deeper-dive">Deeper dive: connecting sine to the unit circle</h2>
        <p>
          On the unit circle, the angle x (in radians) determines a point (cos x, sin x). The y-coordinate is
          sin x, and as x increases slightly, sin x changes at a rate governed by the x-coordinate cos x. That
          geometric fact is exactly the derivative rule. Students who memorize cos without this picture often
          forget the chain factor later; students who see sine as vertical motion on a circle tend to keep both
          straight. When you sketch sin and cos on the same axes, notice that cos leads sin by π/2: wherever sin
          is increasing fastest, cos is at its maximum positive value, and wherever sin is flat at a peak, cos
          crosses zero. Those observations are derivative facts in graphical language.
        </p>
        <p>
          In applied settings, angular frequency ω appears inside sin(ωt). The chain rule introduces a factor ω
          on the derivative: d/dt sin(ωt) = ω cos(ωt). Physical units matter: if t is seconds and ω is radians per
          second, the derivative has units of “sine per second,” consistent with velocity when sine models
          displacement. If you accidentally use degrees inside the sine while the symbolic engine assumes radians,
          every numerical check will disagree with your hand work even when the symbolic steps look correct.
        </p>
        <p>
          For exam preparation, rotate through three problem types each session: bare sin(x), sin(ax+b) with
          linear inner functions, and products like e^x·sin x or x·sin x. After ten sessions, the pattern
          recognition becomes automatic and you spend cognitive effort only on algebra, not on rule selection.
          Link each type to a page in our English guides—cosine for paired practice, tangent when quotients of
          sin and cos appear, logarithms when sin(ln x) shows up in mixed problem sets.
        </p>
      </section>

      <section>
        <h2 id="faq-section">FAQ-style review</h2>
        <h3 id="faq-plain">What is the derivative of sin(x)?</h3>
        <p>cos(x), in radians.</p>
        <h3 id="faq-3x">What is the derivative of sin(3x)?</h3>
        <p>3cos(3x).</p>
        <h3 id="faq-second">What about the second derivative?</h3>
        <p>
          Differentiate cos(x) to get −sin(x). Higher-order derivatives cycle through sin and cos with sign
          changes. Use our{" "}
          <Link href={EN_ROUTES.secondDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            second derivative calculator
          </Link>{" "}
          to check patterns quickly.
        </p>
        <h3 id="faq-practice">How should I practice?</h3>
        <p>
          Work ten chain-rule problems, five product-rule problems with sin, and verify with step-by-step tools.
          Mix in problems from{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>{" "}
          each study session.
        </p>
      </section>

      <CalcCTA label="Check your derivative of sin(x) problems" />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <InternalLinksBlock
        links={[
          {
            href: EN_ROUTES.derivativeOfCosX,
            label: "Derivative of cos(x)",
            desc: "The minus sign and chain rule for cosine",
          },
          {
            href: EN_ROUTES.implicitDifferentiationExamples,
            label: "Implicit differentiation examples",
            desc: "When y is not solved explicitly",
          },
        ]}
      />
    </ArticleWrap>
  );
}
