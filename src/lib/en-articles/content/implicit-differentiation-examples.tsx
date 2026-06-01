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
  EN_ROUTES,
} from "../helpers";

export function ImplicitDifferentiationExamplesContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Implicit differentiation examples step by step</h2>
        <p>
          Sometimes y is not given as an explicit function of x. A circle x² + y² = 25, a curve like x³ + y³ =
          3xy, or an equation with sin(xy) still defines a relationship between x and y. Implicit differentiation
          means differentiate both sides with respect to x, treat y as a function of x, and apply the chain rule
          whenever you differentiate a term involving y—producing a factor dy/dx. Then solve for dy/dx. This page
          walks through classic implicit differentiation examples and links to the{" "}
          <Link
            href={EN_ROUTES.implicitDifferentiationCalculator}
            className="text-violet-600 font-semibold hover:underline"
          >
            implicit differentiation calculator
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>
          .
        </p>
        <p>
          Implicit methods also underpin related rates word problems and some differential equation setups. If you
          can differentiate x² explicitly but struggle when y is tied inside y² or xy, this technique is the bridge.
        </p>
      </section>

      <section>
        <h2 id="procedure">Procedure checklist</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Differentiate both sides with respect to x.</li>
          <li>Apply d/dx to terms in x using ordinary rules.</li>
          <li>Apply the chain rule to terms in y: d/dx[y^n] = n·y^(n−1)·dy/dx.</li>
          <li>Collect all dy/dx terms on one side and factor dy/dx out.</li>
          <li>Solve for dy/dx and simplify if possible.</li>
        </ol>
        <FormulaCard title="Chain rule for y terms">
          {renderMath("\\dfrac{d}{dx}[f(y)] = f'(y)\\cdot \\dfrac{dy}{dx}", true)}
        </FormulaCard>
      </section>

      <section>
        <h2 id="circle">Example 1: circle x² + y² = 25</h2>
        <ExampleCard
          title="Circle implicit derivative"
          steps={[
            "Differentiate: 2x + 2y·dy/dx = 0.",
            "Solve: dy/dx = −x/y (for y ≠ 0).",
            "At (3, 4), slope is −3/4.",
          ]}
        >
          {renderMath("\\dfrac{dy}{dx} = -\\dfrac{x}{y}", true)}
        </ExampleCard>
        <p>
          The slope is negative on the right semicircle where x and y are positive—consistent with the circle
          falling as you move right along the upper arc. Vertical tangent when y = 0 and x = ±5.
        </p>
      </section>

      <section>
        <h2 id="folium">Example 2: folium x³ + y³ = 3xy</h2>
        <ExampleCard
          title="Folium of Descartes"
          steps={[
            "Differentiate: 3x² + 3y²·dy/dx = 3y + 3x·dy/dx.",
            "Collect dy/dx: (3y² − 3x)·dy/dx = 3y − 3x².",
            "dy/dx = (y − x²)/(y² − x).",
          ]}
        />
        <p>
          This curve has a diagonal asymptote and a loop; implicit differentiation handles points where solving
          for y explicitly would require awkward branches.
        </p>
      </section>

      <section>
        <h2 id="trig-implicit">Example 3: sin(xy) = x + y</h2>
        <ExampleCard
          title="Trig implicit equation"
          steps={[
            "Left side: cos(xy)·(y + x·dy/dx) by chain and product rules inside.",
            "Right side: 1 + dy/dx.",
            "Expand, collect dy/dx terms, solve algebraically.",
          ]}
        />
        <p>
          Trig inside implicit equations is common on exams. Review{" "}
          <Link href={EN_ROUTES.derivativeOfSinX} className="text-violet-600 font-semibold hover:underline">
            derivative of sin(x)
          </Link>{" "}
          and the{" "}
          <Link href={EN_ROUTES.chainRuleCalculator} className="text-violet-600 font-semibold hover:underline">
            chain rule calculator
          </Link>{" "}
          if the inner product xy causes hesitation.
        </p>
      </section>

      <section>
        <h2 id="ellipse">Example 4: ellipse x²/9 + y²/4 = 1</h2>
        <ExampleCard
          title="Ellipse"
          steps={[
            "Differentiate: (2x)/9 + (2y/4)·dy/dx = 0.",
            "dy/dx = −(4x)/(9y).",
          ]}
        />
        <p>
          Ellipses generalize circles; the same implicit pattern applies with different constants in the denominators.
        </p>
      </section>

      <section>
        <h2 id="exp-ln">Example 5: e^y = x + y</h2>
        <ExampleCard
          title="Exponential in y"
          steps={[
            "Differentiate: e^y·dy/dx = 1 + dy/dx.",
            "Factor: dy/dx(e^y − 1) = 1.",
            "dy/dx = 1/(e^y − 1).",
          ]}
        />
        <p>
          You may leave the answer in terms of y or substitute from the original equation. See{" "}
          <Link href={EN_ROUTES.derivativeOfEX} className="text-violet-600 font-semibold hover:underline">
            derivative of e^x
          </Link>{" "}
          for the exponential chain step.
        </p>
      </section>

      <section>
        <h2 id="second-derivative">Second derivative implicitly (sketch)</h2>
        <p>
          To find d²y/dx², differentiate dy/dx again—often using the quotient rule if dy/dx is a fraction in x
          and y—and substitute the first derivative back when simplifying. Our{" "}
          <Link href={EN_ROUTES.secondDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            second derivative calculator
          </Link>{" "}
          helps check numeric special cases after you have a formula for dy/dx.
        </p>
        <WarningCard>
          Do not forget dy/dx when differentiating y. The term d/dx[y²] is 2y·dy/dx, not 2y alone.
        </WarningCard>
      </section>

      <section>
        <h2 id="comparison">Implicit vs explicit vs partial</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Method</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">When</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Explicit y = f(x)</td>
                <td className="border border-slate-200 px-4 py-3">y isolated</td>
                <td className="border border-slate-200 px-4 py-3">dy/dx = f′(x)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Implicit</td>
                <td className="border border-slate-200 px-4 py-3">F(x,y) = 0</td>
                <td className="border border-slate-200 px-4 py-3">dy/dx after algebra</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Partial ∂f/∂x</td>
                <td className="border border-slate-200 px-4 py-3">f(x,y) given directly</td>
                <td className="border border-slate-200 px-4 py-3">∂f/∂x, other vars fixed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Multivariable partials are covered in{" "}
          <Link href={EN_ROUTES.partialDerivativeExamples} className="text-violet-600 font-semibold hover:underline">
            partial derivative examples
          </Link>
          . Fractions in explicit form use{" "}
          <Link href={EN_ROUTES.howToDifferentiateAFraction} className="text-violet-600 font-semibold hover:underline">
            how to differentiate a fraction
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="related-rates">Related rates connection</h2>
        <p>
          Related rates problems supply a geometric or physical constraint and ask how fast one quantity changes
          given another rate. Differentiate the constraint with respect to time t. Every variable that depends on
          time contributes a factor like dx/dt or dy/dt. The algebra mirrors implicit differentiation because the
          variables are linked by an equation that is not solved for one variable alone. Label units on final answers;
          related rates questions often penalize missing units even when the derivative is correct.
        </p>
        <p>
          Classic setups—ladder sliding, inflating balloon, conical tank draining—reuse the same workflow: draw a
          diagram, write an equation relating lengths or volumes, differentiate with respect to t, substitute known
          rates and values, solve for the unknown rate. The hardest step is choosing the equation; the calculus is
          implicit differentiation in disguise.
        </p>
      </section>

      <section>
        <h2 id="practice">Practice problems</h2>
        <p>
          Find dy/dx for: x²y + y³ = 1; xy² + x²y = 2; cos(y) = x; ln(y) = x². Verify difficult algebra on the
          implicit calculator. Mixed review:{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>
          .
        </p>
        <TipCard>
          After finding dy/dx, plug in a point (x₀, y₀) on the curve to get a numeric slope for the tangent line.
        </TipCard>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <ExamplesLinksBlock />
    </ArticleWrap>
  );
}

