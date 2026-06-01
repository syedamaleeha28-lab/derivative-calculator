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

export function PartialDerivativeExamplesContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Partial derivative examples in multivariable calculus</h2>
        <p>
          A partial derivative measures how a function of several variables changes when one variable moves and
          the others are held fixed. Notation ∂f/∂x emphasizes which variable is active. This page collects
          partial derivative examples from basic polynomials through trig and exponentials in two or three
          variables, with notation tips and links to the{" "}
          <Link href={EN_ROUTES.partialDerivativeCalculator} className="text-violet-600 font-semibold hover:underline">
            partial derivative calculator
          </Link>
          . For single-variable rules, see{" "}
          <Link href={EN_ROUTES.derivativeRules} className="text-violet-600 font-semibold hover:underline">
            derivative rules
          </Link>
          ; for ordinary dy/dx when y is defined implicitly, see{" "}
          <Link href={EN_ROUTES.implicitDifferentiationExamples} className="text-violet-600 font-semibold hover:underline">
            implicit differentiation examples
          </Link>
          .
        </p>
        <p>
          Think of ∂f/∂x as the derivative of f(x, y) with respect to x while treating y as a constant. That
          mindset turns multivariable problems into familiar single-variable steps.
        </p>
      </section>

      <section>
        <h2 id="notation">Notation and meaning</h2>
        <FormulaCard title="Partial derivative definition (two variables)">
          {renderMath(
            "\\dfrac{\\partial f}{\\partial x}(a,b) = \\lim_{h\\to 0} \\dfrac{f(a+h,b) - f(a,b)}{h}",
            true
          )}
        </FormulaCard>
        <p>
          Alternative notations: f_x, D_x f, or subscripts on the function name. For ∂f/∂y, hold x fixed and
          differentiate with respect to y. The gradient vector ∇f = ⟨f_x, f_y⟩ points in the direction of
          steepest increase on a surface z = f(x, y).
        </p>
        <TipCard>
          When computing ∂/∂x, treat y (and z in three variables) as constants—even if they are letters that
          usually vary.
        </TipCard>
      </section>

      <section>
        <h2 id="polynomial-examples">Polynomial examples</h2>
        <ExampleCard
          title="Example 1: f(x, y) = x²y + 3y³"
          steps={[
            "∂f/∂x: differentiate x²y as 2xy (y constant); 3y³ gives 0.",
            "∂f/∂x = 2xy.",
            "∂f/∂y: x²y → x²; 3y³ → 9y².",
            "∂f/∂y = x² + 9y².",
          ]}
        />
        <ExampleCard
          title="Example 2: f(x, y) = x³ − 2xy² + 5x"
          steps={[
            "∂f/∂x = 3x² − 2y² + 5.",
            "∂f/∂y = −4xy.",
          ]}
        />
        <p>
          These are the multivariable analogue of term-by-term differentiation. Constants with respect to the
          active variable disappear.
        </p>
      </section>

      <section>
        <h2 id="trig-exp">Trig and exponential examples</h2>
        <ExampleCard
          title="Example 3: f(x, y) = sin(xy)"
          steps={[
            "∂f/∂x: cos(xy)·y (chain rule; y constant factor).",
            "∂f/∂y: cos(xy)·x.",
          ]}
        >
          {renderMath("\\dfrac{\\partial}{\\partial x}\\sin(xy) = y\\cos(xy)", true)}
        </ExampleCard>
        <ExampleCard
          title="Example 4: f(x, y) = e^(x+y)"
          steps={[
            "∂f/∂x = e^(x+y).",
            "∂f/∂y = e^(x+y).",
            "Symmetric because x and y enter the exponent equally.",
          ]}
        />
        <ExampleCard
          title="Example 5: f(x, y) = ln(x² + y²)"
          steps={[
            "∂f/∂x = (2x)/(x² + y²).",
            "∂f/∂y = (2y)/(x² + y²).",
          ]}
        />
        <p>
          Chain rule structure is identical to one variable; only the “constant” variables stay fixed. Review{" "}
          <Link href={EN_ROUTES.derivativeOfLnX} className="text-violet-600 font-semibold hover:underline">
            ln(x)
          </Link>{" "}
          and{" "}
          <Link href={EN_ROUTES.derivativeOfSinX} className="text-violet-600 font-semibold hover:underline">
            sin(x)
          </Link>{" "}
          if inner derivatives feel rusty.
        </p>
      </section>

      <section>
        <h2 id="three-variables">Three-variable example</h2>
        <ExampleCard
          title="Example 6: f(x, y, z) = x²yz + z³"
          steps={[
            "∂f/∂x = 2xyz.",
            "∂f/∂y = x²z.",
            "∂f/∂z = x²y + 3z².",
          ]}
        />
        <p>
          Each partial holds the other two variables constant. Physics and engineering models often use three or
          more independent variables (temperature, pressure, time).
        </p>
      </section>

      <section>
        <h2 id="second-partials">Second partial derivatives</h2>
        <p>
          Mixed partials f_xy and f_yx measure cross-rates of change. Clairaut’s theorem: if f_xy and f_yx are
          continuous, they are equal. For f(x,y) = x²y, f_xx = 2y, f_yy = 0, f_xy = 2x.
        </p>
        <FormulaCard title="Second partials of x²y">
          {renderMath("f_{xx} = 2y, \\quad f_{yy} = 0, \\quad f_{xy} = f_{yx} = 2x", true)}
        </FormulaCard>
      </section>

      <section>
        <h2 id="applications">Applications: tangent planes and optimization</h2>
        <p>
          The tangent plane to z = f(x, y) at (a, b) uses f_x(a,b) and f_y(a,b) as directional slopes. In
          optimization, setting partials to zero locates critical points for functions of several variables
          (subject to constraints in advanced courses).
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x, y)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">∂f/∂x</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">∂f/∂y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">x² + y²</td>
                <td className="border border-slate-200 px-4 py-3">2x</td>
                <td className="border border-slate-200 px-4 py-3">2y</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">xy</td>
                <td className="border border-slate-200 px-4 py-3">y</td>
                <td className="border border-slate-200 px-4 py-3">x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">e^(x+y)</td>
                <td className="border border-slate-200 px-4 py-3">e^(x+y)</td>
                <td className="border border-slate-200 px-4 py-3">e^(x+y)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="mistakes">Common mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Forgetting to treat the other variable as constant.</li>
          <li>Applying ∂/∂x to a term like y³ and getting something nonzero (should be 0).</li>
          <li>Confusing ∂f/∂x with df/dx when f depends on y—df/dx includes total derivative if y depends on x.</li>
        </ul>
        <WarningCard>
          Total derivative (chain rule for composed paths) is a separate topic from partial derivatives with
          variables held fixed.
        </WarningCard>
      </section>

      <section>
        <h2 id="chain-multivariable">Chain rule in several variables (preview)</h2>
        <p>
          If z = f(x, y) and x, y depend on t, the total derivative dz/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)
          combines partials with chain rule for paths. That formula generalizes single-variable chain rule and
          appears in related rates with multiple variables. Computing partials first, then plugging time
          derivatives, mirrors the strategy of implicit differentiation: handle each variable’s contribution
          separately, then assemble.
        </p>
        <p>
          Level curves of f(x, y) are sets where f is constant. The gradient is perpendicular to level curves and
          points toward higher values. Partial derivatives are components of that vector. Visualizing a hill with
          contour lines makes ∂f/∂x the slope if you walk east holding north fixed—a concrete image for abstract
          symbols.
        </p>
      </section>

      <section>
        <h2 id="practice">Practice suggestions</h2>
        <p>
          Compute ∂/∂x and ∂/∂y for f(x,y) = x²y³, cos(x² − y), and (x + y)/(x − y). Check on the partial
          calculator. Review single-variable{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>{" "}
          if basic algebra slows you down.
        </p>
      </section>

      <CalcCTA label="Compute partial derivatives with steps" />
      <RelatedCalculatorsBlock />
      <RulesLinksBlock />
      <InternalLinksBlock
        links={[
          {
            href: EN_ROUTES.partialDerivativeCalculator,
            label: "Partial derivative calculator",
            desc: "∂/∂x and ∂/∂y symbolically",
          },
          {
            href: EN_ROUTES.implicitDifferentiationExamples,
            label: "Implicit differentiation",
            desc: "dy/dx without solving for y",
          },
        ]}
      />
    </ArticleWrap>
  );
}
