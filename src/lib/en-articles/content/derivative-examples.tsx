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

export function DerivativeExamplesContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Derivative examples from beginner to advanced</h2>
        <p>
          Reading rules is not enough—you need worked derivative examples at increasing difficulty. This gallery
          organizes problems into beginner, intermediate, and advanced tiers, explains which rule each problem
          stresses, and ends with practice questions you can attempt before revealing the solution strategy. Use
          the{" "}
          <Link href={EN_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            derivative calculator with steps
          </Link>{" "}
          to verify algebra, and keep the{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>{" "}
          table open for reference.
        </p>
        <p>
          Effective practice means naming the rule aloud before you write: “this is a product,” “this needs the
          chain rule twice,” “this is a quotient after simplification fails.” That habit transfers directly to
          timed exams.
        </p>
      </section>

      <section>
        <h2 id="beginner">Beginner examples: power rule and basics</h2>
        <p>
          Start with polynomials and simple roots. No product, quotient, or chain rule yet—only linearity and the
          power rule.
        </p>
        <ExampleCard
          title="Beginner 1: f(x) = 5x⁴ − 3x + 2"
          steps={[
            "Differentiate term by term.",
            "5·4x³ = 20x³; derivative of −3x is −3; constant 2 gives 0.",
            "f′(x) = 20x³ − 3.",
          ]}
        />
        <ExampleCard
          title="Beginner 2: f(x) = √x = x^(1/2)"
          steps={[
            "Power rule with n = 1/2.",
            "f′(x) = (1/2)x^(−1/2) = 1/(2√x) for x > 0.",
          ]}
        />
        <ExampleCard
          title="Beginner 3: f(x) = 1/x² = x^(−2)"
          steps={["n = −2: f′(x) = −2x^(−3) = −2/x³.", "Domain x ≠ 0."]}
        />
        <p>
          Once these feel automatic, add basic trig: see{" "}
          <Link href={EN_ROUTES.derivativeOfSinX} className="text-violet-600 font-semibold hover:underline">
            derivative of sin(x)
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.derivativeOfXSquared} className="text-violet-600 font-semibold hover:underline">
            derivative of x²
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="intermediate">Intermediate examples: product, quotient, chain</h2>
        <ExampleCard
          title="Intermediate 1: x²·e^x"
          steps={[
            "Product rule: u = x², v = e^x.",
            "u′ = 2x, v′ = e^x.",
            "f′ = 2x·e^x + x²·e^x = e^x(2x + x²).",
          ]}
        />
        <ExampleCard
          title="Intermediate 2: (x² + 1)/(x − 1)"
          steps={[
            "Quotient rule with u = x²+1, v = x−1.",
            "u′ = 2x, v′ = 1.",
            "Numerator: 2x(x−1) − (x²+1)·1 = x² − 2x − 1.",
            "f′ = (x² − 2x − 1)/(x − 1)².",
          ]}
        />
        <ExampleCard
          title="Intermediate 3: sin(2x + 1)"
          steps={["Chain rule: cos(2x+1)·2.", "f′(x) = 2cos(2x + 1)."]}
        />
        <ExampleCard
          title="Intermediate 4: ln(x² + 4)"
          steps={["Chain: (2x)/(x² + 4)."]}
        />
        <p>
          Fraction-heavy problems are collected in{" "}
          <Link href={EN_ROUTES.howToDifferentiateAFraction} className="text-violet-600 font-semibold hover:underline">
            how to differentiate a fraction
          </Link>
          . Use the{" "}
          <Link href={EN_ROUTES.productRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            product
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.quotientRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            quotient
          </Link>{" "}
          calculators when learning the layout.
        </p>
      </section>

      <section>
        <h2 id="advanced">Advanced examples: nested rules</h2>
        <ExampleCard
          title="Advanced 1: e^(x²)·sin(x)"
          steps={[
            "Product: u = e^(x²), v = sin x.",
            "u′ = 2x·e^(x²) by chain rule.",
            "v′ = cos x.",
            "f′ = 2x·e^(x²)·sin x + e^(x²)·cos x.",
          ]}
        />
        <ExampleCard
          title="Advanced 2: tan(x² + 1)"
          steps={["Chain on tan: sec²(x²+1)·2x."]}
        />
        <ExampleCard
          title="Advanced 3: (sin x)/(1 + cos x)"
          steps={[
            "Quotient or trig identity; quotient gives:",
            "f′ = [cos x(1+cos x) − sin x(−sin x)]/(1+cos x)².",
            "Simplify numerator using sin²+cos²=1 when possible.",
          ]}
        />
        <ExampleCard
          title="Advanced 4: ln|3x − 1|"
          steps={["Chain: 3/(3x − 1) for 3x − 1 ≠ 0."]}
        />
        <p>
          For curves defined by equations in x and y, switch to{" "}
          <Link href={EN_ROUTES.implicitDifferentiationExamples} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation examples
          </Link>
          . For f(x,y), see{" "}
          <Link href={EN_ROUTES.partialDerivativeExamples} className="text-violet-600 font-semibold hover:underline">
            partial derivative examples
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="difficulty-table">Difficulty and rule mapping</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Level</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Typical rules</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Sample type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Beginner</td>
                <td className="border border-slate-200 px-4 py-3">Power, linearity</td>
                <td className="border border-slate-200 px-4 py-3">Polynomials, √x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Intermediate</td>
                <td className="border border-slate-200 px-4 py-3">Product, quotient, chain (once)</td>
                <td className="border border-slate-200 px-4 py-3">x·e^x, sin(2x), rational</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Advanced</td>
                <td className="border border-slate-200 px-4 py-3">Multiple rules combined</td>
                <td className="border border-slate-200 px-4 py-3">e^(x²)·sin x, nested tan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="practice">Practice questions (try first, then check)</h2>
        <h3 id="practice-1">Question 1</h3>
        <p>Find the derivative of f(x) = (x³ − 1)(x² + 2).</p>
        <TipCard>
          Hint: expand to a polynomial or use the product rule. Expanded form avoids quotient structure entirely.
        </TipCard>
        <h3 id="practice-2">Question 2</h3>
        <p>Find the derivative of g(x) = e^(5x) cos(x).</p>
        <p>
          Solution outline: product rule with u′ = 5e^(5x) and v′ = −sin x; combine terms or factor e^(5x) at the end.
        </p>
        <h3 id="practice-3">Question 3</h3>
        <p>Find the derivative of h(x) = (2x + 1)⁴.</p>
        <p>Solution outline: chain rule with outer power 4 and inner 2x+1; result 4(2x+1)³·2 = 8(2x+1)³.</p>
        <h3 id="practice-4">Question 4</h3>
        <p>Find the derivative of k(x) = x/(x² + 1).</p>
        <p>Solution outline: quotient rule; simplified numerator often factors nicely.</p>
        <WarningCard>
          On practice sets, work without a calculator first, then run the same input through the step-by-step tool
          to catch sign errors.
        </WarningCard>
      </section>

      <section>
        <h2 id="exam-tips">Exam-style tips and timing</h2>
        <p>
          On timed tests, allocate pass one for rule identification only—underline the outer structure, mark u and
          v if needed, circle the inner function g. Pass two executes algebra. Pass three checks domain and
          simplification (factor common terms, cancel only where valid). Most partial-credit loss comes from
          correct rule with algebra slip; factoring e^x or ln terms at the end often reveals a clean form graders
          expect.
        </p>
        <p>
          Word problems usually hide a derivative request inside rate-of-change language. “How fast is height
          changing” means find dh/dt; if h depends on time through a chain, apply the chain rule with respect to t.
          Related rates problems are implicit differentiation in story clothing. When a ladder slides, the
          equation relating x and y is geometric; differentiate with respect to time t, not x alone.
        </p>
        <p>
          Mixed review beats single-rule drills before midterms. Randomly select one beginner, one intermediate, and
          one advanced problem from this page under a twenty-minute timer. Score yourself on rule name, final answer,
          and whether you could explain one step aloud. Explanation catches conceptual gaps that repeating similar
          problems masks.
        </p>
      </section>

      <section>
        <h2 id="study-plan">Weekly study plan using this page</h2>
        <p>
          Day 1–2: all beginner problems without notes. Day 3–4: intermediate, timed. Day 5: two advanced problems
          plus one from each specialized guide (fraction, implicit, partial). Day 6: mixed quiz from this page’s
          practice section. Day 7: review mistakes and re-derive any problem you missed from memory.
        </p>
        <FormulaCard title="Reminder: product vs chain">
          {renderMath("\\text{Product: } (uv)' \\quad \\text{Chain: } f(g(x))'", true)}
        </FormulaCard>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <InternalLinksBlock
        links={[
          {
            href: EN_ROUTES.howToDifferentiateAFraction,
            label: "Differentiate a fraction",
            desc: "Quotient rule focus",
          },
          {
            href: EN_ROUTES.chainRuleCalculator,
            label: "Chain rule calculator",
            desc: "Nested functions",
          },
        ]}
      />
    </ArticleWrap>
  );
}

