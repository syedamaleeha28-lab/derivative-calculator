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

export function EntendiendoReglaDeLaCadenaContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">El corazón de la diferenciación compuesta</h2>
        <p>
          La regla de la cadena permite derivar funciones dentro de funciones: sin(3x), ln(x²+1),
          e^(cos x). Sin dominarla, las derivadas trigonométricas y las implícitas se vuelven
          inabordables. Este artículo ofrece intuición y enlaces a ejercicios resueltos.
        </p>
      </section>

      <section>
        <h2 id="formula">Fórmula de la regla de la cadena</h2>
        <FormulaCard title="Composición f(g(x))">
          {renderMath("\\dfrac{d}{dx}f(g(x)) = f'(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <p>
          Piensa en dos capas: primero derivas la función externa evaluada en la interna; luego
          multiplicas por la derivada de la interna.
        </p>
      </section>

      <section>
        <h2 id="historia-intuitiva">Historia intuitiva en un minuto</h2>
        <p>
          Si f representa una transformación «externa» y g la «interna», el cambio total en x se descompone:
          primero mides cómo reacciona f ante un pequeño cambio en g, luego cuánto cambia g ante un pequeño
          cambio en x. Multiplicar ambas razones es natural: un efecto encadenado. Esa imagen evita tratar la
          cadena como una fórmula mágica sin sentido.
        </p>
        <p>
          En notación de Lagrange, (f∘g)′(x)=f′(g(x))g′(x) dice lo mismo que Leibniz con dy/dx. Elige la que
          use tu profesor, pero entiende que son equivalentes.
        </p>
        <p>
          Un error de principiante es derivar «el exterior» evaluando en x en lugar de en g(x). Por eso
          escribimos cos(3x), no 3cos(x), cuando derivamos sin(3x): la evaluación va en la capa correcta.
        </p>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos rápidos</h2>
        <p>
          Para una colección amplia visita{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena: ejercicios
          </Link>
          . Allí encontrarás seis desarrollos completos con estrategia de examen.
        </p>
        <TipCard>
          Antes de derivar, pregunta: «¿hay una función dentro de otra?». Si la respuesta es sí, prepara
          la regla de la cadena.
        </TipCard>
      </section>

      <section>
        <h2 id="practica">Practicar con la calculadora</h2>
        <p>
          Introduce composiciones en la{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas online
          </Link>{" "}
          y contrasta cada paso con tus apuntes. Combina con{" "}
          <Link href="/reglas-de-derivacion" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          y{" "}
          <Link href="/blog/errores-comunes-al-derivar" className="text-violet-600 font-semibold hover:underline">
            errores comunes
          </Link>
          .
        </p>
        <CalcCTA />
      </section>

      <section>
        <h2 id="intuicion-capas">Intuición por capas: función externa e interna</h2>
        <p>
          Imagina una máquina de dos etapas. La primera transforma x en g(x); la segunda aplica f a ese
          valor. Al derivar, preguntas: «¿cuánto cambia f si muevo ligeramente g?» y «¿cuánto cambia g si
          muevo x?». La respuesta total es el producto de ambas sensibilidades: f′(g(x))·g′(x).
        </p>
        <p>
          En sin(3x), la capa externa es sin y la interna es 3x. En e^(x²+1), la externa es exponencial y
          la interna es el polinomio. Nombrar las capas en papel —«f=…, g=…»— reduce errores en exámenes
          de cálculo diferencial.
        </p>
        <TipCard>
          Si puedes escribir la función como f(g(x)) con una sola «caja interna» clara, la cadena es la
          herramienta principal. Si hay producto de dos cajas independientes, la cadena sola no basta.
        </TipCard>
      </section>

      <section>
        <h2 id="leibniz">Notación de Leibniz</h2>
        <p>
          Si y=f(u) y u=g(x), la cadena se escribe dy/dx=(dy/du)·(du/dx). Leer «dy du sobre du dx» ayuda a
          recordar el orden: deriva respecto a la variable intermedia y multiplica por la derivada de esa
          variable respecto a x.
        </p>
        <FormulaCard title="Cadena en Leibniz">
          {renderMath("\\dfrac{dy}{dx} = \\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}", true)}
        </FormulaCard>
        <p>
          Ejemplo: y=sin(u), u=3x. Entonces dy/du=cos(u) y du/dx=3, luego dy/dx=3cos(3x). La notación
          encaja con la fórmula f′(g(x))·g′(x) y es la que verás en libros de derivadas universitarias.
        </p>
      </section>

      <section>
        <h2 id="cuatro-ejemplos">Cuatro ejemplos resueltos paso a paso</h2>
        <ExampleCard
          title="1) sin(3x)"
          steps={[
            "g(x)=3x, g′(x)=3.",
            "Derivada de sin: cos(3x).",
            "Resultado: 3cos(3x).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\sin(3x) = 3\\cos(3x)", true)}
        </ExampleCard>
        <ExampleCard
          title="2) (x²+1)⁵"
          steps={[
            "Externa: u⁵, derivada 5u⁴ con u=x²+1.",
            "Interna: u′=2x.",
            "5(x²+1)⁴·2x = 10x(x²+1)⁴.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}(x^2+1)^5 = 10x(x^2+1)^4", true)}
        </ExampleCard>
        <ExampleCard
          title="3) e^(cos x)"
          steps={[
            "Externa e^u, u=cos x, du/dx=−sin x.",
            "e^(cos x)·(−sin x) = −e^{\\cos x}\\sin x.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}e^{\\cos x} = -e^{\\cos x}\\sin x", true)}
        </ExampleCard>
        <ExampleCard
          title="4) ln(x²+1)"
          steps={[
            "Externa ln(u), u=x²+1, u′=2x.",
            "1/(x²+1)·2x = 2x/(x²+1).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\ln(x^2+1) = \\dfrac{2x}{x^2+1}", true)}
        </ExampleCard>
        <p>
          Más problemas numerados en{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena: ejercicios
          </Link>{" "}
          y en{" "}
          <Link href="/ejemplos-de-derivadas" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas resueltas
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="cuando-no">Cuándo no usar solo la regla de la cadena</h2>
        <p>
          La cadena aplica a composiciones f(g(x)). No sustituye otras reglas cuando la estructura es otra:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Producto:</strong> x²·sin(x) necesita (uv)′; cada factor se deriva por separado.
          </li>
          <li>
            <strong>Cociente:</strong> sin(x)/cos(x) usa (u/v)′ aunque luego reconozcas tan(x).
          </li>
          <li>
            <strong>Suma:</strong> sin(x)+cos(x) deriva término a término sin cadena.
          </li>
          <li>
            <strong>Constante por función:</strong> 5sin(3x) es 5 veces la cadena en sin(3x), no una cadena
            «doble» inventada.
          </li>
        </ul>
        <WarningCard>
          Error típico: aplicar cadena a x·e^x como si fuera e^(algo). La estructura es producto: e^x + x·e^x.
        </WarningCard>
      </section>

      <section>
        <h2 id="producto-cociente">Relación con producto y cociente</h2>
        <p>
          Muchos ejercicios mezclan reglas. Orden sugerido: (1) simplifica si es posible; (2) identifica
          suma, producto, cociente o composición; (3) aplica la regla correspondiente; (4) usa cadena dentro
          de cada factor si hace falta.
        </p>
        <p>
          Ejemplo: x·cos(x²). Producto con u=x, v=cos(x²). Se necesita u′=1 y cadena en v: −sin(x²)·2x.
          Resultado: cos(x²)−2x²sin(x²). Sin descomponer, es fácil olvidar el factor 2x.
        </p>
        <p>
          Repasa la tabla en{" "}
          <Link href="/reglas-de-derivacion" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          y practica trigonométricas en{" "}
          <Link href="/blog/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            derivada de sin(x)
          </Link>{" "}
          y{" "}
          <Link href="/blog/derivada-de-cos-x" className="text-violet-600 font-semibold hover:underline">
            derivada de cos(x)
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="errores">Errores frecuentes con la cadena</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Olvidar multiplicar por g′(x) tras derivar la capa externa.</li>
          <li>Derivar la capa interna antes de evaluar la externa (orden conceptual confuso).</li>
          <li>Confundir cos(2x) con 2cos(x): la cadena da −2sin(2x), no 2(−sin x).</li>
          <li>Aplicar cadena cuando el ejercicio pide producto o cociente.</li>
        </ul>
        <p className="mt-4">
          Lista ampliada en{" "}
          <Link href="/blog/errores-comunes-al-derivar" className="text-violet-600 font-semibold hover:underline">
            errores comunes al derivar
          </Link>
          . Verifica siempre en la{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora con pasos
          </Link>{" "}
          tras resolver en papel.
        </p>
      </section>

      <section>
        <h2 id="estrategia-examen">Estrategia en examen</h2>
        <p>
          Antes de derivar, escribe en el margen: «¿composición, producto, cociente o suma?». Si es
          composición, nombra g(x) con un subrayado o un color distinto en el borrador. Luego calcula g′(x)
          en una línea separada; muchos errores vienen de mezclar ese paso con la derivada de f.
        </p>
        <p>
          En problemas largos, no simplifiques demasiado pronto: mantener f′(g(x)) y g′(x) visibles permite
          revisar signos. Solo al final factoriza o usa identidades si el enunciado pide forma compacta.
        </p>
        <ExampleCard title="√(sin x) — cadena con raíz">
          {renderMath("\\dfrac{d}{dx}\\sqrt{\\sin x} = \\dfrac{\\cos x}{2\\sqrt{\\sin x}}", true)}
        </ExampleCard>
        <p>
          Aquí f(u)=√u y u=sin x. La derivada externa es 1/(2√u); la interna aporta cos x. El dominio exige
          sin x &gt; 0 en la raíz real, un detalle que a veces se pregunta aparte de la derivada.
        </p>
      </section>

      <section>
        <h2 id="cadena-multiple">Cadenas anidadas (tres capas)</h2>
        <p>
          En sin(e^(x²)) hay tres niveles: seno, exponencial, polinomio. Se aplica la cadena dos veces o se
          encadena la notación de Leibniz: dy/dx = cos(e^(x²))·e^(x²)·2x. Contar capas con los dedos es
          válido: cada capa aporta un factor multiplicativo.
        </p>
        <p>
          Si te pierdes, deriva capa por capa de afuera hacia adentro y no pases al siguiente factor hasta
          haber escrito el anterior. La{" "}
          <Link href="/blog/derivadas-implicitas-paso-a-paso" className="text-violet-600 font-semibold hover:underline">
            guía de derivadas implícitas
          </Link>{" "}
          reutiliza la misma disciplina de capas con otra notación.
        </p>
      </section>

      <section>
        <h2 id="plan-estudio">Plan de estudio</h2>
        <p>
          <strong>Semana 1:</strong> reconoce f(g(x)) en diez expresiones sin derivar. <strong>Semana 2:</strong>{" "}
          resuelve veinte derivadas con cadena pura (trig, exponencial, logaritmo). <strong>Semana 3:</strong>{" "}
          mezcla producto y cociente con al menos una composición por ejercicio.
        </p>
        <p>
          Si empiezas desde cero, lee{" "}
          <Link href="/blog/como-aprender-derivadas-desde-cero" className="text-violet-600 font-semibold hover:underline">
            cómo aprender derivadas desde cero
          </Link>{" "}
          y luego enlaza con derivadas implícitas cuando el curso avance.
        </p>
      </section>

      <section>
        <h2 id="tabla-resumen">Tabla resumen: qué regla usar</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>f(g(x)) con una composición clara → cadena.</li>
          <li>u(x)·v(x) → producto (cadena dentro de cada factor si aplica).</li>
          <li>u(x)/v(x) → cociente.</li>
          <li>f(x)+g(x) → linealidad, derivar cada sumando.</li>
          <li>Constante·h(x) → constante por h′(x).</li>
        </ul>
        <p className="mt-4">
          En listas de examen, marca cada ejercicio con una letra: C, P, Q o S. Eso te obliga a detenerte
          antes de calcular y evita aplicar cadena por reflejo en un producto como x·ln x.
        </p>
        <p>
          Con práctica, clasificar tarda menos de diez segundos y ahorra minutos de álgebra incorrecta en cada
          prueba. Ese hábito vale más que memorizar una lista larga de fórmulas sin contexto.
        </p>
      </section>

      <section>
        <h2 id="faq">Preguntas frecuentes</h2>
        <h3>¿La cadena es lo mismo que «derivar dos veces»?</h3>
        <p>
          No. Derivar dos veces es la segunda derivada. La cadena es un solo paso de diferenciación en una
          composición, aunque a veces la repitas en funciones con tres capas.
        </p>
        <h3>¿Puedo omitir paréntesis en sin 3x?</h3>
        <p>
          En notación de examen, escribe sin(3x) para dejar claro que el argumento es 3x. La derivada es
          3cos(3x), no cos(3x) sin factor.
        </p>
        <h3>¿Qué ejercicios hacer primero?</h3>
        <p>
          Empieza por composiciones puras (sin(2x), (x+1)⁴, e^(3x)), luego mezcla con{" "}
          <Link href="/blog/como-derivar-fracciones" className="text-violet-600 font-semibold hover:underline">
            cómo derivar fracciones
          </Link>{" "}
          y productos. La calculadora con pasos en{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            la página principal
          </Link>{" "}
          sirve como corrector, no como sustituto del borrador.
        </p>
      </section>

      <section>
        <h2 id="cierre">Cierre: por qué dominar la cadena</h2>
        <p>
          Casi todo cálculo intermedio —tasas relacionadas, optimización con composiciones, derivadas de
          logaritmos y trigonométricas— descansa en este teorema fundamental. Invertir tiempo aquí reduce errores en
          capítulos posteriores. Cuando la cadena sea automática, las derivadas «difíciles» se reducen a
          identificar capas y ejecutar álgebra con cuidado.
        </p>
        <p>
          Repaso express de hoy: deriva sin(4x), (3x−1)⁶, √(x²+4) y ln(cos x) —este último mezcla logaritmo,
          coseno y cadena doble en un solo problema. Comprueba en la calculadora y anota en qué paso sueles
          perder el factor g′(x). Repetir ese punto tres veces con ejercicios distintos suele corregir el
          error más rápido que releer la teoría completa.
        </p>
        <ExampleCard title="Bonus: (sin x)³">
          {renderMath("\\dfrac{d}{dx}(\\sin x)^3 = 3(\\sin x)^2\\cos x", true)}
        </ExampleCard>
        <p>
          Guarda este artículo como referencia de método, no solo de fórmulas: la cadena es una pregunta de
          estructura («¿qué está dentro de qué?»). Vuelve a leer la sección «cuándo no usar cadena» antes de
          cada práctica semanal; es la que más puntos evita perder en evaluaciones tipo test o desarrollo corto.
        </p>
      </section>

      <InternalLinksBlock
        links={[
          { href: "/blog/regla-de-la-cadena-ejercicios", label: "Cadena: ejercicios resueltos", desc: "Seis problemas guiados" },
          { href: "/blog/derivada-de-cos-x", label: "Derivada de cos(x)", desc: "Composiciones trig" },
          { href: "/reglas-de-derivacion", label: "Reglas de derivación", desc: "Referencia completa" },
          { href: "/#calculator", label: "Calculadora de derivadas", desc: "Comprueba cada paso" },
        ]}
      />
    </ArticleWrap>
  );
}
