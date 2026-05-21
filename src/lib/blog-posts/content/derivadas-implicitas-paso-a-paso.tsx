import {
  ArticleWrap,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  Link,
  TipCard,
  WarningCard,
  renderMath,
} from "../helpers";

export function DerivadasImplicitasContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="introduccion">Derivación implícita: qué problema resuelve</h2>
        <p>
          En muchos modelos matemáticos la variable dependiente no aparece despejada. Una circunferencia
          x² + y² = 25 relaciona x e y sin que y sea una función explícita sencilla en todo el dominio.
          La derivación implícita permite obtener dy/dx (o y′) derivando ambos lados de la ecuación
          respecto a x, tratando y como función de x. Es una técnica estándar en cálculo diferencial
          universitario y aparece junto a curvas definidas por ecuaciones, tangentes y tasas relacionadas.
        </p>
        <p>
          Si buscas «derivadas implícitas paso a paso», probablemente ya dominas reglas básicas y la{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena
          </Link>
          , porque cada término que contiene y exige multiplicar por y′ al derivar respecto a x. Esta
          guía ordena el método, muestra ejemplos progresivos y enlaza con la{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas
          </Link>{" "}
          para comprobar resultados. Repasa antes la tabla en{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          y la galería de{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos resueltos
          </Link>
          .
        </p>
        <p>
          La diferencia clave frente a la derivación explícita (y = f(x)) es de notación y de hábito:
          no despejas y primero; trabajas con la ecuación tal cual y despejas y′ al final. Eso ahorra
          álgebra pesada en ecuaciones donde despejar sería incómodo o impracticable.
        </p>
      </section>

      <section>
        <h2 id="metodo">Método paso a paso</h2>
        <h3 id="paso-1">Paso 1: derivar ambos lados respecto a x</h3>
        <p>
          Escribe la ecuación y aplica d/dx a cada miembro. Las constantes desaparecen; las potencias
          de x siguen la regla habitual; cualquier expresión en y se deriva como función compuesta:
          aparece el factor y′.
        </p>
        <h3 id="paso-2">Paso 2: aplicar cadena en términos con y</h3>
        <FormulaCard title="Ejemplos de derivadas parciales en y">
          {renderMath(
            "\\dfrac{d}{dx}[y^n] = n y^{n-1} y' \\qquad \\dfrac{d}{dx}[\\sin y] = \\cos y \\cdot y'",
            true
          )}
        </FormulaCard>
        <p>
          La regla de la cadena es el motor interno: la «capa externa» se deriva respecto a y y se
          multiplica por dy/dx. Sin ese factor, la derivación implícita falla sistemáticamente.
        </p>
        <h3 id="paso-3">Paso 3: agrupar términos con y′</h3>
        <p>
          Reúne todos los summandos que contienen y′ en un lado y el resto en el otro. Factoriza y′
          cuando sea posible.
        </p>
        <h3 id="paso-4">Paso 4: despejar y′</h3>
        <p>
          Divide o despeja algebraicamente. El resultado puede incluir x e y; no es necesario sustituir
          y por una expresión explícita para que la derivada sea válida en el punto considerado.
        </p>
        <TipCard>
          Usa dy/dx o y′ de forma consistente en todo el ejercicio. En exámenes, indicar «derivamos
          implícitamente respecto a x» comunica el método al corrector.
        </TipCard>
      </section>

      <section>
        <h2 id="ejemplo-circulo">Ejemplo 1: circunferencia x² + y² = 25</h2>
        <ExampleCard
          title="Tangente a la circunferencia"
          steps={[
            "Derivar: 2x + 2y y′ = 0.",
            "Despejar: y′ = −x/y (cuando y ≠ 0).",
            "En (3, 4): y′ = −3/4.",
          ]}
        >
          {renderMath("x^2 + y^2 = 25 \\Rightarrow 2x + 2y\\,y' = 0 \\Rightarrow y' = -\\dfrac{x}{y}", true)}
          <p className="mt-4">
            La pendiente de la tangente en (3, 4) es −3/4. Geometricamente, es perpendicular a la
            recta que une el origen con el punto, coherente con la intuición del radio normal.
          </p>
        </ExampleCard>
      </section>

      <section>
        <h2 id="ejemplo-xy">Ejemplo 2: producto implícito xy = 6</h2>
        <p>
          Aquí conviene la regla del producto al derivar el lado izquierdo: (xy)′ = x′y + x y′ = y + x y′.
          El lado derecho es constante y su derivada es 0.
        </p>
        <ExampleCard
          title="xy = 6"
          steps={[
            "y + x y′ = 0.",
            "y′ = −y/x.",
            "Sustituyendo y = 6/x: y′ = −6/x².",
          ]}
        >
          {renderMath("xy = 6 \\Rightarrow y + xy' = 0 \\Rightarrow y' = -\\dfrac{y}{x} = -\\dfrac{6}{x^2}", true)}
        </ExampleCard>
        <p>
          Comprueba con derivación explícita: y = 6/x, y′ = −6/x². Coincidir con el método implícito
          refuerza la confianza. Si te cuesta el cociente explícito, revisa{" "}
          <Link href="/blog/como-derivar-fracciones" className="text-violet-600 font-semibold hover:underline">
            cómo derivar fracciones
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="ejemplo-elevado">Ejemplo 3: y³ + x²y − 4 = 0</h2>
        <ExampleCard
          title="Polinomio mixto en x e y"
          steps={[
            "3y² y′ + 2xy + x² y′ = 0.",
            "Agrupar y′: y′(3y² + x²) = −2xy.",
            "y′ = −2xy / (3y² + x²).",
          ]}
        >
          {renderMath("y^3 + x^2 y - 4 = 0 \\Rightarrow 3y^2 y' + 2xy + x^2 y' = 0", true)}
        </ExampleCard>
        <WarningCard>
          No olvides el factor y′ en cada término que contiene y. Derivar y³ como 3y² sin y′ es el error
          más repetido en derivadas implícitas.
        </WarningCard>
      </section>

      <section>
        <h2 id="ejemplo-trig">Ejemplo 4: sin(xy) = x + y</h2>
        <p>
          Composición trigonométrica con producto en el argumento: se necesitan cadena y producto a la
          vez. Repasa{" "}
          <Link href="/blog/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            derivada de sin(x)
          </Link>{" "}
          antes de intentarlo.
        </p>
        <ExampleCard
          title="sin(xy) = x + y"
          steps={[
            "Derivar LHS: cos(xy)·(y + x y′).",
            "Derivar RHS: 1 + y′.",
            "Despejar y′ tras expandir y agrupar.",
          ]}
        >
          {renderMath(
            "\\cos(xy)(y + xy') = 1 + y' \\Rightarrow y' = \\dfrac{1 - y\\cos(xy)}{x\\cos(xy) - 1}",
            true
          )}
        </ExampleCard>
      </section>

      <section>
        <h2 id="ejemplo-elipse">Ejemplo 5: elipse 9x² + 4y² = 36</h2>
        <p>
          Normaliza mentalmente: es una elipse centrada en el origen. La derivación implícita entrega la
          pendiente local sin despejar y = ±√(9 − 9x²/4).
        </p>
        <ExampleCard
          title="Elipse"
          steps={[
            "18x + 8y y′ = 0.",
            "y′ = −18x/(8y) = −9x/(4y).",
          ]}
        >
          {renderMath("9x^2 + 4y^2 = 36 \\Rightarrow 18x + 8y\\,y' = 0 \\Rightarrow y' = -\\dfrac{9x}{4y}", true)}
        </ExampleCard>
      </section>

      <section>
        <h2 id="por-que-no-despejar">¿Por qué no despejar y primero?</h2>
        <p>
          En x² + y² = 25, despejar y = ±√(25 − x²) obliga a elegir rama (+ o −), derivar con cadena
          la raíz y manejar el dominio |x| ≤ 5 con cuidado. La derivación implícita produce y′ = −x/y
          en una línea, válida en cada rama donde y ≠ 0. Esa economía es la razón práctica del método.
        </p>
        <p>
          En ecuaciones de grado superior en y, despejar puede introducir raíces extranas o
          expresiones enormes. El método implícito mantiene la ecuación original como referencia,
          lo que reduce errores algebraicos en problemas de tangente y normal.
        </p>
        <ExampleCard
          title="Comparación: x²y + y = 10"
          steps={[
            "Implícita: 2xy y′ + y² y′ + y′ = 0 → y′(2xy + y² + 1) = 0.",
            "Explícita posible pero laboriosa; el método implícito es más directo.",
          ]}
        >
          <p>
            Practica ambos caminos en un ejercicio sencillo para verificar que obtienes la misma
            pendiente en un punto concreto.
          </p>
        </ExampleCard>
      </section>

      <section>
        <h2 id="segunda-orden">Nota sobre derivadas de orden superior</h2>
        <p>
          Para y″ implícita, sustituye la expresión de y′ obtenida y vuelve a derivar respecto a x,
          aplicando de nuevo cadena en los términos con y. El álgebra crece rápido; en la práctica
          académica suele bastar la primera derivada para tangentes y tasas relacionadas. Si el curso
          exige segunda derivada, trabaja en un punto concreto (x₀, y₀) para reducir símbolos.
        </p>
      </section>

      <section>
        <h2 id="tasas-relacionadas">Conexión con tasas relacionadas</h2>
        <p>
          En problemas de física o geometría («un globo se infla…», «una escalera se desliza…») las
          variables dependen del tiempo. Se deriva respecto a t y aparecen dx/dt, dy/dt. Es la misma
          lógica de cadena, con otra variable independiente. La derivación implícita unifica ambos
          enfoques cuando la relación entre variables está dada por una ecuación.
        </p>
        <p>
          Si vienes de un curso básico, enlaza con{" "}
          <Link href="/blog/derivadas-para-principiantes" className="text-violet-600 font-semibold hover:underline">
            derivadas para principiantes
          </Link>{" "}
          para repasar límites y la interpretación de y′ como pendiente antes de abordar curvas
          implícitas en profundidad.
        </p>
      </section>

      <section>
        <h2 id="faq">Preguntas frecuentes</h2>
        <h3 id="faq-cuando">¿Cuándo debo usar derivación implícita?</h3>
        <p>
          Cuando la ecuación define y en función de x de forma incómoda o múltiple (círculos, elipses,
          folium, etc.) o cuando ni siquiera pides y explícita, solo la pendiente dy/dx en un punto.
        </p>
        <h3 id="faq-verificar">¿Cómo verifico mi resultado?</h3>
        <p>
          Despeja y si es razonable, deriva explícitamente y compara. O introduce la ecuación en la
          calculadora y revisa el desglose en{" "}
          <Link href="/como-funciona" className="text-violet-600 font-semibold hover:underline">
            cómo funciona
          </Link>
          . También evalúa y′ en un punto (x₀, y₀) que cumpla la ecuación original.
        </p>
        <h3 id="faq-punto">¿Qué ocurre si y = 0 al despejar y′?</h3>
        <p>
          En x² + y² = 25, y′ = −x/y no está definida en los puntos (±5, 0): la tangente es vertical y
          la pendiente en forma y′ no aplica; se describe con x = constante. Interpreta el contexto
          geométrico.
        </p>
      </section>

      <section>
        <h2 id="errores">Errores típicos en derivadas implícitas</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Omitir y′ al derivar términos en y.</li>
          <li>Derivar xy como x′y′ en lugar de usar producto: y + x y′.</li>
          <li>Confundir sin(xy) con sin x · cos y sin aplicar cadena al argumento.</li>
          <li>Despejar y′ dividiendo por un factor que puede ser cero en el punto pedido.</li>
          <li>Olvidar que (x₀, y₀) debe satisfacer la ecuación original.</li>
        </ul>
        <p className="mt-4">
          Repasa la cadena en{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena con ejercicios
          </Link>{" "}
          si los términos con y′ te generan dudas sistemáticas.
        </p>
      </section>

      <section>
        <h2 id="practica">Práctica recomendada</h2>
        <p>
          La derivación implícita también aparece en modelos económicos y en curvas de nivel donde la
          relación entre variables se mantiene por una restricción (por ejemplo, una curva de
          indiferencia). En esos contextos, dy/dx indica la tasa a la que debes cambiar una variable
          para mantenerte en la curva al moverte infinitesimalmente en la otra. Esa lectura ayuda a
          quien viene de ciencias sociales a no ver el método solo como un truco algebraico.
        </p>
        <p>
          Al corregir tus propios ejercicios, sustituye un punto (x₀, y₀) que cumpla la ecuación en tu
          y′ final y comprueba que la ecuación de la tangente tiene sentido geométrico. Si la pendiente
          es muy grande, espera una tangente casi vertical; si es cercana a cero, la curva es casi
          horizontal en ese punto. Esa verificación cualitativa detecta errores de signo que la igualdad
          simbólica sola no revela.
        </p>
        <p>
          Resuelve tres ecuaciones mixtas por semana: una cónica, una con xy y una trigonométrica.
          Escribe siempre y′ explícitamente en cada término al derivar. Contrasta con más material del{" "}
          <Link href="/blog" className="text-violet-600 font-semibold hover:underline">
            blog
          </Link>{" "}
          y con ejercicios guiados en la página de inicio.
        </p>
        <CalcCTA />
      </section>
    </ArticleWrap>
  );
}
