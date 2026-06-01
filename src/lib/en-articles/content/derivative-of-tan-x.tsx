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

export function DerivativeOfTanXContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Introduction: derivative of tan(x) and sec²(x)</h2>
        <p>
          The derivative of tan x is sec²(x). You may also write it as 1/cos²(x) or, using the identity
          1 + tan²(x) = sec²(x), as 1 + tan²(x). Tangent is defined as sin(x)/cos(x), so its derivative
          follows from the quotient rule applied to sine and cosine. This guide shows that derivation, domain
          restrictions where cos(x) = 0, chain-rule examples, and connections to the other basic trig rules in
          our{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          hub.
        </p>
        <p>
          Because tangent has vertical asymptotes at odd multiples of π/2, its derivative blows up there as
          well—consistent with sec² being unbounded when cos approaches zero.
        </p>
      </section>

      <section>
        <h2 id="formula">Main formula</h2>
        <FormulaCard title="Derivative of tangent">
          {renderMath("\\dfrac{d}{dx}\\tan(x) = \\sec^2(x) = \\dfrac{1}{\\cos^2(x)}", true)}
        </FormulaCard>
        <p>
          Equivalent forms matter on exams. Some textbooks emphasize sec²; others prefer 1 + tan²(x). All are
          correct on the domain where tan is differentiable.
        </p>
        <TipCard>
          Domain: tan and its derivative are valid where cos(x) ≠ 0, i.e. x ≠ π/2 + kπ for integers k.
        </TipCard>
      </section>

      <section>
        <h2 id="sec2-derivation">sec² derivation from the quotient rule</h2>
        <p>
          Write tan(x) = sin(x)/cos(x). Let u = sin(x), v = cos(x). Then u′ = cos(x) and v′ = −sin(x). The
          quotient rule gives a compact path to sec².
        </p>
        <ExampleCard
          title="Quotient rule on sin/cos"
          steps={[
            "Apply (u/v)′ = (u′v − uv′)/v².",
            "Numerator: cos(x)·cos(x) − sin(x)·(−sin(x)) = cos²x + sin²x = 1.",
            "Denominator: cos²(x).",
            "Result: 1/cos²(x) = sec²(x).",
          ]}
        >
          {renderMath(
            "\\dfrac{d}{dx}\\tan(x) = \\dfrac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\dfrac{1}{\\cos^2 x} = \\sec^2 x",
            true
          )}
        </ExampleCard>
        <p>
          The Pythagorean identity collapses the numerator to 1—that step is the heart of the proof. If you
          already know the derivatives of sin and cos from our guides on{" "}
          <Link href={EN_ROUTES.derivativeOfSinX} className="text-violet-600 font-semibold hover:underline">
            sin(x)
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.derivativeOfCosX} className="text-violet-600 font-semibold hover:underline">
            cos(x)
          </Link>
          , you only need the quotient rule here.
        </p>
      </section>

      <section>
        <h2 id="identities">Equivalent forms using trig identities</h2>
        <FormulaCard title="Pythagorean form">
          {renderMath("\\sec^2(x) = 1 + \\tan^2(x)", true)}
        </FormulaCard>
        <p>
          If an answer is written as 1 + tan²(x) and the key says sec²(x), they match wherever both sides are
          defined. Choose the form that simplifies the next step in a longer problem—integrals, for instance,
          may favor one form over another.
        </p>
      </section>

      <section>
        <h2 id="chain-rule">Chain rule: tan(g(x))</h2>
        <FormulaCard title="Composition">
          {renderMath("\\dfrac{d}{dx}\\tan(g(x)) = \\sec^2(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <ExampleCard
          title="Example: tan(3x)"
          steps={["g(x) = 3x, g′ = 3.", "sec²(3x)·3 = 3sec²(3x)."]}
        >
          <p>{renderMath("\\dfrac{d}{dx}\\tan(3x) = 3\\sec^2(3x)", true)}</p>
        </ExampleCard>
        <ExampleCard title="Example: tan(x²)">
          <p>{renderMath("\\dfrac{d}{dx}\\tan(x^2) = \\sec^2(x^2)\\cdot 2x", true)}</p>
        </ExampleCard>
        <WarningCard>
          Do not confuse tan⁻¹(x) (arctangent) with tan(x). The derivative of arctan(x) is 1/(1+x²), not sec².
        </WarningCard>
      </section>

      <section>
        <h2 id="examples">More worked examples</h2>
        <ExampleCard
          title="Example: x·tan(x)"
          steps={[
            "Product rule: u = x, v = tan(x).",
            "u′ = 1, v′ = sec²(x).",
            "Result: tan(x) + x·sec²(x).",
          ]}
        />
        <ExampleCard
          title="Example: tan(x)/x (quotient)"
          steps={[
            "Use quotient or rewrite; for x ≠ 0, apply (u/v)′ carefully.",
            "Good practice for mixing tan with rational structure—see fraction guide.",
          ]}
        />
        <p>
          Rational trig expressions often appear in{" "}
          <Link href={EN_ROUTES.howToDifferentiateAFraction} className="text-violet-600 font-semibold hover:underline">
            how to differentiate a fraction
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="table">Extended trig derivatives</h2>
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
                <td className="border border-slate-200 px-4 py-3">tan(x)</td>
                <td className="border border-slate-200 px-4 py-3">sec²(x)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">cot(x)</td>
                <td className="border border-slate-200 px-4 py-3">−csc²(x)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">sec(x)</td>
                <td className="border border-slate-200 px-4 py-3">sec(x)tan(x)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">csc(x)</td>
                <td className="border border-slate-200 px-4 py-3">−csc(x)cot(x)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Cot, sec, and csc derivatives follow from reciprocals and the quotient rule—worth memorizing after
          sin, cos, and tan.
        </p>
      </section>

      <section>
        <h2 id="deeper-dive">Deeper dive: asymptotes, reciprocals, and secant</h2>
        <p>
          Near x = π/2, cos x approaches zero and tan x blows up. The derivative sec² x grows without bound as
          well, reflecting that a small change in x produces a huge change in tan when you are close to a vertical
          asymptote. That behavior distinguishes tangent from bounded functions like sin and cos, whose derivatives
          never exceed 1 in absolute value. Graphing sec² alongside tan on a window like (−1.2, 1.2) shows peaks
          aligned with tan’s steep regions. Because sec x = 1/cos x, sec² is also 1 + tan²; some instructors prefer
          one form in identities and the other in integrals—know both.
        </p>
        <p>
          Deriving cot x, sec x, and csc x from sin and cos quotients reinforces the quotient rule more than
          memorizing six separate lines. Once tan is secure, cot is the negative reciprocal pattern with similar
          asymptote structure. Sec and csc introduce products of sec·tan and csc·cot in their derivatives; those
          product-looking results come from quotient simplification, not from a new ad hoc rule. Keeping the logic
          unified reduces what you must store in long-term memory.
        </p>
        <p>
          In optimization problems, tan x can appear inside a composite objective. The chain rule stacks with
          sec². If f(x) = tan(x³), then f′(x) = sec²(x³)·3x². Nested layers demand patience: identify the outer tan,
          then the inner power, and multiply factors in order. Our chain rule calculator shows each layer labeled;
          mimic that labeling on paper during study so exam work stays organized when problems combine tan with
          exponentials or logs in products.
        </p>
      </section>

      <section>
        <h2 id="applications">Where sec² appears in applications</h2>
        <p>
          In physics, the rate of change of tangent of an angle sometimes models angular rates in optics or
          surveying. In calculus itself, sec² is the integrand that gives tan when you antidifferentiate—so
          recognizing sec² as the derivative of tan makes u-substitution natural later in the course.
        </p>
        <p>
          Build fluency by differentiating tan on a grid of x-values near asymptotes and observing large
          derivative magnitudes as cos(x) → 0.
        </p>
      </section>

      <CalcCTA label="Differentiate tan(x) with guided steps" />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <InternalLinksBlock
        links={[
          { href: EN_ROUTES.quotientRuleCalculator, label: "Quotient rule calculator", desc: "For rational trig forms" },
          { href: EN_ROUTES.derivativeExamples, label: "Derivative examples", desc: "Mixed practice problems" },
        ]}
      />
    </ArticleWrap>
  );
}
