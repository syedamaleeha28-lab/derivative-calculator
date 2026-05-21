import {
  ArticleWrap,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  InternalLinksBlock,
  Link,
  TipCard,
  WarningCard,
  renderMath,
} from "../helpers";

export function DerivadaDeCosXContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Derivada de cos(x): concepto clave</h2>
        <p>
          La derivada de cos x es −sin(x) en radianes. Este signo negativo sorprende a muchos
          estudiantes, pero encaja con la idea de que el coseno alcanza su máximo cuando el seno
          deja de crecer. Dominar la derivada de cos x es imprescindible en cálculo diferencial y en
          cualquier curso que combine{" "}
          <Link href="/blog/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            derivada de sin(x)
          </Link>{" "}
          con otras reglas.
        </p>
        <p>
          En esta guía encontrarás la fórmula, composiciones con la regla de la cadena, ejemplos
          resueltos y enlaces a nuestra calculadora de derivadas online para ver derivadas paso a paso.
        </p>
      </section>

      <section>
        <h2 id="formula">Fórmula y tabla</h2>
        <FormulaCard title="Derivada de coseno">
          {renderMath("\\dfrac{d}{dx}\\cos(x) = -\\sin(x)", true)}
        </FormulaCard>
        <p>
          Junto con sin′(x)=cos(x), forma el núcleo de las derivadas trigonométricas. Repasa la tabla
          en{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          antes de exámenes.
        </p>
      </section>

      <section>
        <h2 id="cadena">Derivada de cos(g(x))</h2>
        <FormulaCard title="Composición">
          {renderMath("\\dfrac{d}{dx}\\cos(g(x)) = -\\sin(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <ExampleCard
          title="Ejemplo: cos(2x)"
          steps={[
            "g(x)=2x, g'(x)=2.",
            "Derivada externa: −sin(2x).",
            "Producto: −2sin(2x).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\cos(2x) = -2\\sin(2x)", true)}
        </ExampleCard>
        <ExampleCard title="Ejemplo: cos(x³)">
          {renderMath("\\dfrac{d}{dx}\\cos(x^3) = -\\sin(x^3)\\cdot 3x^2 = -3x^2\\sin(x^3)", true)}
        </ExampleCard>
        <p>
          Aprende más ejercicios en{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena con ejercicios
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="combinaciones">Combinaciones con producto y cociente</h2>
        <p>
          Expresiones como eˣ·cos(x) o cos(x)/x requieren regla del producto o del cociente. No
          basta con memorizar −sin(x): identifica la estructura algebraica primero.
        </p>
        <p>
          Para eˣ·cos(x), el resultado es eˣ(cos x − sin x). Desarrolla en papel y verifica con la{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora diferencial
          </Link>
          .
        </p>
        <TipCard>
          Si el argumento del coseno no es x, siempre aplica la regla de la cadena antes de simplificar.
        </TipCard>
      </section>

      <section>
        <h2 id="constante-factor">Constantes y factor escalar</h2>
        <p>
          La derivada de 7cos(x) es −7sin(x). La derivada de cos(7x) es −7sin(7x) por la cadena. No confundas
          el 7 que multiplica la función con el 7 dentro del argumento: son reglas distintas (linealidad frente
          a composición). En exámenes suelen aparecer juntos en la misma expresión, por ejemplo 3cos(2x)+sin x.
        </p>
      </section>

      <section>
        <h2 id="practica-online">Practicar derivadas online</h2>
        <p>
          Introduce cos(3*x), cos(x^2+1) o x*cos(x) en la herramienta. Las derivadas explicadas paso
          a paso ayudan a detectar si olvidaste el signo negativo o el factor g′(x).
        </p>
        <p>
          Sigue con{" "}
          <Link href="/blog/derivada-de-tan-x" className="text-violet-600 font-semibold hover:underline">
            derivada de tan(x)
          </Link>{" "}
          y los{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejercicios de derivadas
          </Link>{" "}
          del sitio.
        </p>
        <CalcCTA />
      </section>

      <section>
        <h2 id="errores">Errores frecuentes</h2>
        <WarningCard>
          Escribir +sin(x) en lugar de −sin(x) al derivar cos(x) es el fallo más común. Revisa el signo
          en cada paso.
        </WarningCard>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Derivar cos(x) como sin(x) por analogía incorrecta.</li>
          <li>No multiplicar por g′(x) en cos(g(x)).</li>
          <li>Mezclar grados y radianes en la calculadora.</li>
        </ul>
      </section>

      <section>
        <h2 id="limite-signo">Límite y el signo negativo explicado</h2>
        <p>
          La derivada de cos(x) no es un «truco de memoria»: sale del límite de la diferencia cociente
          cuando el ángulo se mide en radianes. Usando la identidad cos(a+h)−cos(a)=−2sin((a+h)/2)sin(h/2)
          y el hecho de que sin(h/2)/h → 1/2 cuando h→0, se obtiene que la pendiente instantánea en a es
          −sin(a).           El signo menos no es arbitrario: refleja que el coseno decrece justo donde el seno
          crece con más fuerza en el intervalo inicial estándar del curso.
        </p>
        <p>
          Geométricamente, cos(x) alcanza su máximo en x=0 (y en múltiplos de 2π). En esos puntos la
          tangente es horizontal y la derivada vale cero. A la derecha de x=0, el coseno baja: la pendiente
          es negativa, y −sin(x) es negativa en (0, π). En x=π/2 el coseno cruza cero con pendiente −1,
          coherente con sin(π/2)=1.
        </p>
        <p>
          Comparar con sin(x) ayuda: sin crece al inicio con derivada cos(0)=1 positiva; cos decrece con
          derivada −sin(0)=0 y luego negativa. Ese contraste explica por qué muchos estudiantes escriben
          +sin(x) por inercia al memorizar el par trigonométrico.
        </p>
      </section>

      <section>
        <h2 id="tabla-trig">Tabla de derivadas trigonométricas</h2>
        <p>
          La derivada de cos x encaja en un bloque que conviene tener a mano junto con seno y tangente.
          Repásala antes de parciales y combínala con la página de{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>
          .
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>d/dx sin(x) = cos(x)</li>
          <li>d/dx cos(x) = −sin(x)</li>
          <li>d/dx tan(x) = sec²(x) = 1/cos²(x)</li>
          <li>d/dx cot(x) = −csc²(x)</li>
          <li>d/dx sec(x) = sec(x)tan(x)</li>
          <li>d/dx csc(x) = −csc(x)cot(x)</li>
        </ul>
        <p className="mt-4">
          Las tres primeras filas bastan para la mayoría de cursos de cálculo diferencial. Las demás se
          obtienen por cociente o por regla de la cadena a partir de sin y cos. Si dudas en un ejercicio,
          vuelve siempre a sin y cos como base.
        </p>
      </section>

      <section>
        <h2 id="ejemplos-producto">Ejemplos: eˣ·cos(x) y cociente cos/sin</h2>
        <h3 id="ex-exp-cos">Producto eˣ·cos(x)</h3>
        <p>
          Aquí no basta con la fórmula básica: hay dos factores que dependen de x. Aplica la regla del
          producto (uv)′ = u′v + uv′ con u=eˣ y v=cos(x).
        </p>
        <ExampleCard
          title="Derivada de eˣ·cos(x)"
          steps={[
            "u=eˣ, u′=eˣ; v=cos(x), v′=−sin(x).",
            "(eˣ·cos x)′ = eˣ·cos(x) + eˣ·(−sin(x)).",
            "Factor común eˣ: eˣ(cos x − sin x).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\bigl(e^x\\cos x\\bigr) = e^x(\\cos x - \\sin x)", true)}
        </ExampleCard>
        <p>
          Comprueba el resultado en la{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas
          </Link>{" "}
          introduciendo <code className="text-sm bg-slate-100 px-1 rounded">exp(x)*cos(x)</code>. Si el
          argumento fuera e^(2x)·cos(x), necesitarías cadena en la exponencial además del producto.
        </p>
        <h3 id="ex-cociente">Cociente cos(x)/sin(x)</h3>
        <p>
          La expresión cos(x)/sin(x) es cot(x). Puedes derivarla con la regla del cociente o recordar que
          (cot x)′ = −csc²(x). Desarrollar el cociente refuerza el método:
        </p>
        <ExampleCard
          title="Derivada de cos(x)/sin(x) con cociente"
          steps={[
            "Numerador: cos(x), su derivada −sin(x).",
            "Denominador: sin(x), su derivada cos(x).",
            "Fórmula (u/v)′ = (u′v − uv′)/v².",
            "Simplificar: (−sin²x − cos²x)/sin²x = −1/sin²x = −csc²(x).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\dfrac{\\cos x}{\\sin x} = -\\csc^2 x", true)}
        </ExampleCard>
        <p>
          Otro cociente frecuente es cos(x)/x, donde el denominador no es trigonométrico: el resultado es
          (−x sin x − cos x)/x². Identifica siempre la estructura antes de elegir la regla.
        </p>
      </section>

      <section>
        <h2 id="grafica-pendiente">Gráfica, pendiente y puntos críticos</h2>
        <p>
          Si graficas y=cos(x) y su derivada y=−sin(x) en el mismo intervalo [0, 2π], verás cómo se
          relacionan máximos y ceros de pendiente. Donde cos alcanza 1, la tangente es horizontal; donde
          cos cruza cero con pendiente negativa, −sin es negativo. Ese ejercicio visual fija el signo menos
          mejor que cualquier mnemotecnia.
        </p>
        <p>
          Los puntos críticos de cos(x) (donde f′(x)=0) ocurren cuando sin(x)=0, es decir en múltiplos de
          π. Los máximos locales coinciden con x=2kπ y los mínimos con x=π+2kπ. En un problema de
          optimización con modelos periódicos, esos valores son los candidatos a revisar con el criterio de
          la primera derivada.
        </p>
        <p>
          Cuando el argumento es cos(ωt) en física (ω frecuencia, t tiempo), la derivada es −ω sin(ωt): el
          factor ω aparece por la cadena y amplifica la razón de cambio. Ese detalle aparece en vibraciones
          y circuitos alternos.
        </p>
      </section>

      <section>
        <h2 id="mas-composiciones">Más composiciones frecuentes en exámenes</h2>
        <ExampleCard title="cos(ln x) para x &gt; 0">
          {renderMath("\\dfrac{d}{dx}\\cos(\\ln x) = -\\dfrac{\\sin(\\ln x)}{x}", true)}
        </ExampleCard>
        <ExampleCard title="cos(e^x)">
          {renderMath("\\dfrac{d}{dx}\\cos(e^x) = -e^x\\sin(e^x)", true)}
        </ExampleCard>
        <p>
          En ambos casos la estructura es la misma: derivada trigonométrica evaluada en g(x), multiplicada
          por g′(x), con el signo menos del coseno. Si el profesor mezcla raíces o polinomios dentro del
          coseno, descompón g antes de derivar.
        </p>
        <p>
          Para x·cos(x) aplica producto: cos(x) − x sin(x). Para cos²(x) usa identidad cos²x=(1+cos 2x)/2
          o cadena en (cos x)²: −2cos(x)sin(x). Elegir la vía más corta depende del ejercicio siguiente en
          la lista.
        </p>
      </section>

      <section>
        <h2 id="plan-estudio">Plan de estudio recomendado</h2>
        <p>
          <strong>Día 1:</strong> memoriza d/dx cos(x)=−sin(x) y contrasta con sin→cos. Dibuja ambas
          funciones y marca dónde la derivada es positiva, negativa o cero.
        </p>
        <p>
          <strong>Día 2:</strong> regla de la cadena con cos(2x), cos(x²) y cos(ln x). Consulta{" "}
          <Link href="/blog/entendiendo-regla-de-la-cadena" className="text-violet-600 font-semibold hover:underline">
            entendiendo la regla de la cadena
          </Link>{" "}
          si la composición te genera dudas.
        </p>
        <p>
          <strong>Día 3:</strong> producto y cociente (eˣ·cos x, cos/sin, x·cos x). <strong>Día 4:</strong>{" "}
          diez ejercicios variados en{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas
          </Link>
          . <strong>Día 5:</strong> simulacro sin calculadora y verificación con pasos en la herramienta
          del sitio.
        </p>
        <TipCard>
          Al repasar, di en voz alta: «derivada externa del coseno, evaluada en la interna, con signo
          menos, por derivada de la interna». Ese ritual evita olvidar el − y el factor g′(x).
        </TipCard>
      </section>

      <section>
        <h2 id="faq">Preguntas frecuentes</h2>
        <h3>¿Por qué radianes y no grados?</h3>
        <p>
          Las fórmulas d/dx sin(x)=cos(x) y d/dx cos(x)=−sin(x) se demuestran con x en radianes. En grados,
          las tasas de cambio se escalan y ya no coinciden con las identidades estándar del curso. Configura
          la calculadora en radianes al verificar numéricamente un punto, por ejemplo x=π/4.
        </p>
        <h3>¿La derivada de cos(2x) es −sin(2x)?</h3>
        <p>
          No: falta el factor 2 de la cadena. La respuesta correcta es −2sin(2x). Confundir cos(2x) con
          2cos(x) es el error gemelo del signo menos.
        </p>
        <h3>¿Cómo encaja con integrales?</h3>
        <p>
          Más adelante verás que ∫sin(x)dx=−cos(x)+C. La pareja derivada–integral ayuda a comprobar
          resultados: si derivas tu antiderivada debes recuperar el integrando. Ese hábito de verificación
          también funciona con la calculadora del sitio.
        </p>
        <h3>¿Qué ejercicios hacer hoy mismo?</h3>
        <p>
          Deriva cos(5x), eˣ·cos x, cos(x)/sin x y x²·cos(x) sin mirar soluciones. Luego abre{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas
          </Link>{" "}
          y elige tres problemas que mezclen cadena y producto. Si aciertas la estructura en los cuatro
          iniciales, el signo menos y los factores g′(x) llegarán con la práctica repetida.
        </p>
        <p>
          Para llegar a dominio automático, repite el par sin/cos durante una semana: cada día cinco minutos de
          flashcards y un problema largo. La derivada de cos x deja de ser un dato suelto y pasa a ser parte
          de un sistema trigonométrico coherente con el resto del curso de cálculo diferencial.
        </p>
        <p>
          Cuando veas −sin(x) como resultado, pregúntate si venías de cos(x) o de cos(g(x)); esa verificación
          de dos segundos evita la mayoría de los signos incorrectos en la entrega del examen.
        </p>
        <p>
          Cierra con un repaso escrito: fórmula base, cadena, producto eˣ·cos x y cociente cos/sin. Si los
          cuatro salen bien, el tema está listo para pasar a tangente y regla de la cadena avanzada.
        </p>
      </section>

      <InternalLinksBlock
        links={[
          { href: "/blog/derivada-de-sin-x", label: "Derivada de sin(x)", desc: "El par natural con coseno" },
          { href: "/blog/entendiendo-regla-de-la-cadena", label: "Regla de la cadena", desc: "Composiciones cos(g(x))" },
          { href: "/reglas", label: "Reglas de derivación", desc: "Tabla completa y referencia" },
          { href: "/#calculator", label: "Calculadora de derivadas", desc: "Verificación paso a paso" },
        ]}
      />
    </ArticleWrap>
  );
}
