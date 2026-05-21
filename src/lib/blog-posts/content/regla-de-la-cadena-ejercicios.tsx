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

export function ReglaDeLaCadenaEjerciciosContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="que-es">¿Qué es la regla de la cadena y cuándo usarla?</h2>
        <p>
          La regla de la cadena es la herramienta central para derivar funciones compuestas: aquellas
          en las que una función «envuelve» a otra. Si puedes escribir f(x) = h(g(x)), no basta con
          derivar cada pieza por separado; debes multiplicar la derivada de la capa externa evaluada
          en la interna por la derivada de la capa interna. En cursos de cálculo diferencial aparece
          en casi todos los temas posteriores: trigonometría, exponenciales, logaritmos, raíces e
          incluso en la base de las{" "}
          <Link href="/blog/derivadas-implicitas-paso-a-paso" className="text-violet-600 font-semibold hover:underline">
            derivadas implícitas
          </Link>
          .
        </p>
        <p>
          Muchos estudiantes buscan «regla de la cadena ejercicios» porque entienden la fórmula en
          abstracto pero fallan al identificar g(x) en expresiones reales. Esta guía prioriza esa
          habilidad: reconocer capas, derivar con orden y verificar con una{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas con pasos
          </Link>
          . Antes de avanzar, repasa las reglas elementales en{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          y contrasta con la galería de{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos resueltos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="formula">Fórmula de la regla de la cadena</h2>
        <FormulaCard title="Composición h(g(x))">
          {renderMath("\\dfrac{d}{dx}\\,h(g(x)) = h'(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <p>
          En notación de Leibniz, si y = u(x) y z = f(u), entonces dz/dx = (dz/du)·(du/dx). Esa
          cadena de tasas de cambio es la misma idea expresada de otro modo. Lo importante no es
          memorizar letras, sino decidir qué función es «externa» y cuál es «interna» sin ambigüedad.
        </p>
        <TipCard>
          Nombra en voz alta: «externa» y «interna». Si no puedes nombrarlas, aún no has descompuesto
          bien la expresión. Consulta también{" "}
          <Link href="/como-funciona" className="font-semibold text-violet-600 hover:underline">
            cómo funciona nuestra calculadora
          </Link>{" "}
          para ver cómo el motor simbólico etiqueta cada paso.
        </TipCard>
      </section>

      <section>
        <h2 id="estrategia">Estrategia en cuatro pasos</h2>
        <h3 id="paso1">Paso 1: descomponer</h3>
        <p>
          Escribe g(x) de forma que la expresión quede como h(g(x)). Ejemplo: (x² + 1)⁵ es h(u)=u⁵ con
          u = x² + 1. Ejemplo trigonométrico: sin(3x) es sin(u) con u = 3x. Si la estructura mezcla
          producto, cociente y composición, aplica primero producto o cociente y deja la cadena para
          cada factor; en fracciones racionales conviene leer{" "}
          <Link href="/blog/como-derivar-fracciones" className="text-violet-600 font-semibold hover:underline">
            cómo derivar fracciones
          </Link>
          .
        </p>
        <h3 id="paso2">Paso 2: derivar la capa externa</h3>
        <p>
          Calcula h′ pero sustituye el argumento: no derives «en x» la externa, sino en g(x). Así,
          la derivada de u⁵ es 5u⁴ evaluado en u = x² + 1, es decir 5(x² + 1)⁴.
        </p>
        <h3 id="paso3">Paso 3: derivar la capa interna</h3>
        <p>
          Obtén g′(x). En el mismo ejemplo, g(x)=x²+1 implica g′(x)=2x.
        </p>
        <h3 id="paso4">Paso 4: multiplicar y simplificar</h3>
        <p>
          El resultado es el producto de ambas derivadas. Simplifica factores comunes solo al final;
          durante el examen conviene mostrar el producto explícito antes de compactar.
        </p>
      </section>

      <section>
        <h2 id="ejemplos">Ejercicios resueltos paso a paso</h2>
        <p>
          Los siguientes seis ejemplos cubren potencias, exponenciales, logaritmos, trigonometría y
          composiciones anidadas. Intenta resolver cada uno en papel antes de leer la solución.
        </p>

        <ExampleCard
          title="Ejemplo 1: (3x − 2)⁷"
          steps={[
            "g(x) = 3x − 2, h(u) = u⁷.",
            "h′(g) = 7(3x − 2)⁶.",
            "g′(x) = 3.",
            "f′(x) = 21(3x − 2)⁶.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}(3x-2)^7 = 7(3x-2)^6 \\cdot 3 = 21(3x-2)^6", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 2: e^(x²)"
          steps={[
            "g(x) = x², h(u) = e^u.",
            "h′(g) = e^(x²).",
            "g′(x) = 2x.",
            "f′(x) = 2x e^(x²).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}e^{x^2} = e^{x^2}\\cdot 2x = 2x\\,e^{x^2}", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 3: ln(5x + 1)"
          steps={[
            "g(x) = 5x + 1, h(u) = ln u.",
            "h′(g) = 1/(5x + 1).",
            "g′(x) = 5.",
            "f′(x) = 5/(5x + 1).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\ln(5x+1) = \\dfrac{1}{5x+1}\\cdot 5 = \\dfrac{5}{5x+1}", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 4: sin(x³)"
          steps={[
            "Relacionado con la derivada de sin(x); ver artículo dedicado.",
            "g(x) = x³, h(u) = sin u.",
            "h′(g) = cos(x³).",
            "g′(x) = 3x².",
            "f′(x) = 3x² cos(x³).",
          ]}
        >
          <p className="mb-3">
            Repasa el caso base en{" "}
            <Link href="/blog/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
              derivada de sin(x)
            </Link>
            .
          </p>
          {renderMath("\\dfrac{d}{dx}\\sin(x^3) = \\cos(x^3)\\cdot 3x^2", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 5: √(1 + x²)"
          steps={[
            "Escribe √(1+x²) = (1+x²)^(1/2).",
            "h(u) = u^(1/2), g(x) = 1 + x².",
            "h′(g) = (1/2)(1+x²)^(-1/2).",
            "g′(x) = 2x.",
            "f′(x) = x / √(1+x²).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\sqrt{1+x^2} = \\dfrac{1}{2\\sqrt{1+x^2}}\\cdot 2x = \\dfrac{x}{\\sqrt{1+x^2}}", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 6: cos(e^x)"
          steps={[
            "Capas: exponencial dentro de coseno.",
            "h′(g) = −sin(e^x).",
            "g′(x) = e^x.",
            "f′(x) = −e^x sin(e^x).",
          ]}
        >
          <p className="mb-3">
            Complementa con{" "}
            <Link href="/blog/derivada-de-cos-x" className="text-violet-600 font-semibold hover:underline">
              derivada de cos(x)
            </Link>{" "}
            y{" "}
            <Link href="/blog/derivada-de-tan-x" className="text-violet-600 font-semibold hover:underline">
              derivada de tan(x)
            </Link>
            .
          </p>
          {renderMath("\\dfrac{d}{dx}\\cos(e^x) = -\\sin(e^x)\\cdot e^x", true)}
        </ExampleCard>

        <WarningCard>
          Error clásico: derivar sin(3x) como cos(3x) sin multiplicar por 3. Otro error: confundir
          (sin x)² con sin(x²); son composiciones distintas.
        </WarningCard>
      </section>

      <section>
        <h2 id="intuicion">Intuición: velocidad de cambio encadenada</h2>
        <p>
          Imagina que la temperatura T depende de la altura h en una montaña, y la altura a su vez
          depende del tiempo t al subir en teleférico: T(h(t)). El cambio de T respecto a t se
          descompone en «cuánto cambia T cuando cambia h» multiplicado por «cuánto cambia h cuando
          cambia t». Esa es la razón multiplicativa de h′(g(x))·g′(x). Cuando practiques regla de la
          cadena ejercicios de libro, dibuja mentalmente esas dos capas antes de escribir símbolos.
        </p>
        <p>
          En notación de física, a veces se escribe dT/dt = (dT/dh)(dh/dt). La correspondencia con
          h(g(x)) y g(x) es directa. Los estudiantes que internalizan esta imagen cometen menos errores
          de «factor olvidado» que quienes solo memorizan la fórmula sin contexto.
        </p>
        <h3 id="tabla-casos">Tabla mental de composiciones frecuentes</h3>
        <p>
          Vale la pena tener referencias rápidas: (g(x))ⁿ → n(g(x))^(n−1)·g′(x); e^(g(x)) → e^(g(x))·g′(x);
          ln(g(x)) → g′(x)/g(x); sin(g(x)) → cos(g(x))·g′(x). No sustituyen la tabla oficial de{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            reglas
          </Link>
          , pero aceleran el reconocimiento en exámenes cronometrados.
        </p>
      </section>

      <section>
        <h2 id="combinaciones">Cadena + producto o cociente</h2>
        <p>
          En expresiones como x²·sin(2x) o e^x/(x+1), la regla de la cadena no sustituye a las demás:
          primero clasifica. Para un producto, (uv)′ = u′v + uv′; en cada summando puede aparecer
          cadena. Para un cociente, usa la regla del cociente y aplica cadena en numerador y
          denominador por separado.
        </p>
        <FormulaCard title="Recordatorio producto y cociente">
          {renderMath("(uv)' = u'v + uv' \\qquad \\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}", true)}
        </FormulaCard>
        <p>
          Un ejercicio típico de examen: derivar x·ln(x²+1). Aquí u=x, v=ln(x²+1); en v′ entra la
          cadena con g(x)=x²+1. Practica variaciones en la sección de{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas
          </Link>{" "}
          y valida el procedimiento en la calculadora.
        </p>
      </section>

      <section>
        <h2 id="faq">Preguntas frecuentes sobre la regla de la cadena</h2>
        <h3 id="faq-cuantas-capas">¿Cuántas capas puedo tener?</h3>
        <p>
          Tantas como necesites: aplica la regla de forma encadenada. Para sin(ln(x²)), primero
          derivas el seno respecto a ln(x²), luego el logaritmo respecto a x², luego la potencia.
          Cada nivel es una multiplicación más en la derivada final.
        </p>
        <h3 id="faq-constante">¿Qué pasa si hay una constante dentro?</h3>
        <p>
          En sin(5x), la constante 5 forma parte de g(x)=5x y su derivada aporta el factor 5. En
          sin(5+x), la interna es x+5 y g′ sigue siendo 1. La constante aditiva no genera factor
          extra; la multiplicativa sí.
        </p>
        <h3 id="faq-misma-regla">¿Es lo mismo que la regla de la potencia?</h3>
        <p>
          La regla de la potencia (nx^(n−1)) es un caso particular cuando g(x)=x. Para (2x+1)³
          necesitas cadena: no es la misma mecánica que x³.
        </p>
        <h3 id="faq-principiantes">¿Por dónde empiezo si soy nuevo?</h3>
        <p>
          Si aún te cuesta la notación, lee primero{" "}
          <Link href="/blog/derivadas-para-principiantes" className="text-violet-600 font-semibold hover:underline">
            derivadas para principiantes
          </Link>
          : límites, interpretación de la derivada y reglas básicas antes de composiciones.
        </p>
      </section>

      <section>
        <h2 id="ejercicios-propuestos">Ejercicios para practicar por tu cuenta</h2>
        <p>
          Intenta derivar antes de mirar la solución: (x⁴ − 2x)¹⁰, ln(cos x), √(sin x), e^(sin(2x)),
          (1 + tan x)⁵. En todos hay composición; algunos mezclan varias reglas. Si te bloqueas,
          escribe g(x) explícitamente en un margen y continúa. Después compara con la calculadora y
          con los artículos de{" "}
          <Link href="/blog/derivada-de-cos-x" className="text-violet-600 font-semibold hover:underline">
            cos(x)
          </Link>{" "}
          y{" "}
          <Link href="/blog/derivada-de-tan-x" className="text-violet-600 font-semibold hover:underline">
            tan(x)
          </Link>
          .
        </p>
        <p>
          En evaluaciones universitarias, el corrector suele otorgar puntos parciales por identificar
          correctamente las capas aunque falle un signo. Acostúmbrate a mostrar h(g(x)), g(x), h′(g) y
          g′ en líneas separadas; ese hábito también facilita detectar errores al revisar.
        </p>
      </section>

      <section>
        <h2 id="practica">Cómo practicar y verificar</h2>
        <p>
          Resuelve tres ejercicios diarios eligiendo una función compuesta distinta. Escribe siempre
          g(x) y h(u) antes de derivar. Compara con la calculadora: si el resultado coincide pero tus
          pasos no, revisa el orden de las reglas aplicadas.
        </p>
        <p>
          Si enseñas o tutorizas, propón a tus estudiantes el ritual «capa externa / capa interna» en
          voz alta durante cinco minutos al inicio de cada sesión de repaso. Ese ritual reduce en
          práctica el porcentaje de factores olvidados más que repasar la fórmula en silencio. Cuando
          prepares un parcial, mezcla ejercicios de composición pura con uno de producto y uno de cociente
          por tema: la diversidad evita que el cerebro asuma siempre la misma plantilla.
        </p>
        <p>
          Recuerda que la regla de la cadena también aparece al derivar funciones inversas y en la
          demostración de reglas como la del cociente; no es un capítulo aislado sino el tejido conectivo
          del cálculo diferencial. Por eso merece una guía dedicada con ejercicios resueltos y enlaces a
          trigonométricas, implícitas y fracciones: son caras del mismo problema — reconocer dependencias
          anidadas y traducirlas en productos de tasas de cambio.
        </p>
        <p>
          Explora más artículos del{" "}
          <Link href="/blog" className="text-violet-600 font-semibold hover:underline">
            blog de derivadas
          </Link>
          , vuelve a la tabla de{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            reglas
          </Link>{" "}
          y usa el tutorial en{" "}
          <Link href="/como-funciona" className="text-violet-600 font-semibold hover:underline">
            cómo funciona
          </Link>{" "}
          para sacar el máximo partido a las herramientas online.
        </p>
        <CalcCTA />
      </section>
    </ArticleWrap>
  );
}
