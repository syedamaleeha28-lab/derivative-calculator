import {
  ArticleWrap,
  AuthorityClusterBlock,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  TipCard,
  WarningCard,
  RelatedCalculatorsBlock,
  renderMath,
  Link,
  ES_MAIN_CALCULATOR_HREF,
  ES_AUTHORITY_ROUTES,
  ES_CALCULATOR_ROUTES,
  ROUTES,
} from "../helpers";
import { ES_COMMON_FUNCTION_ROUTES } from "../../common-derivative-functions/routes";

export function DerivadaPorDefinicionContent() {
  return (
    <ArticleWrap>
      <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 px-5 py-4 md:px-6 md:py-5">
        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-violet-600 mb-2">TL;DR</p>
        <p className="text-slate-700 leading-relaxed text-[0.98rem]">
          La <strong>derivada por definición</strong> (o por primeros principios) se calcula con el límite del{" "}
          <strong>cociente incremental</strong>: f′(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h. El método tiene
          cuatro pasos: plantear f(x+h), restar f(x), dividir entre h y simplificar antes de tomar el límite. Todas
          las{" "}
          <Link href={ES_AUTHORITY_ROUTES.reglasDeDerivacion} className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          son atajos de este mismo límite, y puedes verificar cada resultado en la{" "}
          <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas con pasos
          </Link>
          .
        </p>
      </div>

      <section>
        <h2 id="primeros-principios">Qué significa derivar por primeros principios</h2>
        <p>
          Derivar «por definición» significa calcular la derivada directamente desde su origen conceptual, sin usar
          fórmulas memorizadas. La idea geométrica: la pendiente de la recta secante que une los puntos (x, f(x)) y
          (x+h, f(x+h)) se aproxima a la pendiente de la recta tangente cuando el incremento h se hace pequeño. El
          valor exacto de esa pendiente límite es la derivada.
        </p>
        <p>
          Por eso la derivada mide la <strong>tasa de cambio instantánea</strong>: en física es la velocidad en un
          instante, en economía la variación marginal. Cada fila de la{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>{" "}
          se demostró alguna vez con este límite; las guías de{" "}
          <Link
            href={ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes}
            className="text-violet-600 font-semibold hover:underline"
          >
            derivadas de funciones comunes
          </Link>{" "}
          incluyen esa demostración para cada función.
        </p>
      </section>

      <section>
        <h2 id="cociente-incremental">El cociente incremental</h2>
        <FormulaCard title="Cociente incremental (pendiente de la secante)">
          {renderMath("\\dfrac{\\Delta y}{\\Delta x} = \\dfrac{f(x+h) - f(x)}{h}", true)}
        </FormulaCard>
        <p>
          El numerador f(x+h) − f(x) es el cambio vertical Δy; el denominador h es el cambio horizontal Δx. El
          cociente es la pendiente media de f entre x y x+h. Mientras h ≠ 0, es un cálculo algebraico ordinario:
          expandir, restar y dividir. La derivada aparece cuando preguntas qué pasa con esa pendiente media al
          encoger h hacia cero.
        </p>
      </section>

      <section>
        <h2 id="limite">El límite h → 0 y la definición formal</h2>
        <FormulaCard title="Definición de derivada">
          {renderMath("f'(x) = \\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h}", true)}
        </FormulaCard>
        <p>
          No puedes sustituir h = 0 directamente: obtendrías 0/0. La estrategia siempre es{" "}
          <strong>simplificar primero</strong> hasta cancelar la h del denominador y recién entonces evaluar el
          límite. Si el límite existe y es finito, f es derivable en x; si los límites laterales difieren o el
          cociente se dispara a infinito, la derivada no existe en ese punto. Repasa los conceptos de{" "}
          <Link href="/como-funciona#continuidad" className="text-violet-600 font-semibold hover:underline">
            continuidad
          </Link>{" "}
          y{" "}
          <Link href="/como-funciona#diferenciabilidad" className="text-violet-600 font-semibold hover:underline">
            diferenciabilidad
          </Link>{" "}
          en el glosario de la guía de uso.
        </p>
        <p>
          Para la derivada en un punto concreto x = a también se usa la forma equivalente
          f′(a) = lim<sub>x→a</sub> [f(x) − f(a)] / (x − a), útil cuando el enunciado pide la pendiente en un punto
          específico en lugar de la función derivada completa.
        </p>
      </section>

      <section>
        <h2 id="limites-y-derivadas">Límites y derivadas: la misma idea</h2>
        <p>
          El cociente incremental es un límite como cualquier otro: a menudo aparece como forma indeterminada 0/0
          hasta que simplificas. Si quieres practicar exactamente esa idea —resolver límites en un punto, incluyendo
          casos 0/0— usa la{" "}
          <Link
            href={ES_CALCULATOR_ROUTES.limits}
            className="text-violet-600 font-semibold hover:underline"
          >
            calculadora de límites
          </Link>
          . Dominar el límite del cociente incremental es el mismo músculo que usas al calcular f′(x) por definición.
        </p>
      </section>

      <section>
        <h2 id="metodo">Método paso a paso</h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed">
          <li>
            <strong>Plantea f(x+h):</strong> sustituye x por (x+h) en toda la función, con paréntesis explícitos.
          </li>
          <li>
            <strong>Resta f(x) y expande:</strong> desarrolla el numerador f(x+h) − f(x) hasta que los términos sin h
            se cancelen.
          </li>
          <li>
            <strong>Divide entre h:</strong> factoriza h en el numerador y simplifícala con el denominador.
          </li>
          <li>
            <strong>Toma el límite h → 0:</strong> con la h cancelada, evalúa el límite sustituyendo h = 0.
          </li>
        </ol>
        <TipCard>
          Si al dividir entre h no se cancela nada, revisa el paso 2: casi siempre falta expandir un producto notable
          o racionalizar con el conjugado (caso de raíces).
        </TipCard>
      </section>

      <section>
        <h2 id="ejemplos">Ejemplos resueltos por definición</h2>

        <ExampleCard
          title="Ejemplo 1: f(x) = x²"
          steps={[
            "f(x+h) = (x+h)² = x² + 2xh + h².",
            "Numerador: f(x+h) − f(x) = 2xh + h².",
            "Divide entre h: 2x + h.",
            "Límite h → 0: f′(x) = 2x.",
          ]}
        >
          {renderMath("\\lim_{h\\to 0}\\dfrac{(x+h)^2-x^2}{h}=2x", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 2: f(x) = 1/x (fracción)"
          steps={[
            "Numerador: 1/(x+h) − 1/x = [x − (x+h)] / [x(x+h)] = −h / [x(x+h)].",
            "Divide entre h: −1 / [x(x+h)].",
            "Límite h → 0: f′(x) = −1/x².",
          ]}
        >
          {renderMath("\\lim_{h\\to 0}\\dfrac{\\frac{1}{x+h}-\\frac{1}{x}}{h}=-\\dfrac{1}{x^2}", true)}
        </ExampleCard>
        <p>
          Este resultado coincide con la guía dedicada a la{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDe1EntreX} className="text-violet-600 font-semibold hover:underline">
            derivada de 1/x
          </Link>
          .
        </p>

        <ExampleCard
          title="Ejemplo 3: f(x) = √x (conjugado)"
          steps={[
            "Numerador: √(x+h) − √x. Multiplica y divide por el conjugado √(x+h) + √x.",
            "Queda [x + h − x] / [√(x+h) + √x] = h / [√(x+h) + √x].",
            "Divide entre h: 1 / [√(x+h) + √x].",
            "Límite h → 0: f′(x) = 1/(2√x).",
          ]}
        >
          {renderMath("\\lim_{h\\to 0}\\dfrac{\\sqrt{x+h}-\\sqrt{x}}{h}=\\dfrac{1}{2\\sqrt{x}}", true)}
        </ExampleCard>

        <ExampleCard
          title="Ejemplo 4: f(x) = c y f(x) = mx + b"
          steps={[
            "Constante: (c − c)/h = 0 para todo h ≠ 0, así que (c)′ = 0.",
            "Lineal: [m(x+h) + b − (mx + b)] / h = mh/h = m.",
            "Límite h → 0: la pendiente de una recta es su propio coeficiente m.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\,c = 0, \\qquad \\dfrac{d}{dx}\\,(mx+b) = m", true)}
        </ExampleCard>
        <p>
          El primer caso es la regla de la constante; tiene su propia guía:{" "}
          <Link
            href={ES_COMMON_FUNCTION_ROUTES.derivadaDeUnaConstante}
            className="text-violet-600 font-semibold hover:underline"
          >
            derivada de una constante
          </Link>
          .
        </p>

        <WarningCard>
          No toda función es derivable: para f(x) = |x| en x = 0, el cociente incremental vale 1 por la derecha y −1
          por la izquierda. Los límites laterales no coinciden, así que |x| no tiene derivada en el origen aunque sí
          es continua allí.
        </WarningCard>
      </section>

      <section>
        <h2 id="de-la-definicion-a-las-reglas">De la definición a las reglas de derivación</h2>
        <p>
          En la práctica nadie deriva cada función desde el límite: los resultados generales se demuestran una vez y
          se convierten en las reglas de potencia, producto, cociente y cadena. Cuando domines el método por
          definición, pasa a las{" "}
          <Link href={ES_AUTHORITY_ROUTES.reglasDeDerivacion} className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          para derivar rápido, usa la{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>{" "}
          como referencia y practica con los{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejercicios de derivadas
          </Link>
          . La guía{" "}
          <Link href={ROUTES.comoFunciona} className="text-violet-600 font-semibold hover:underline">
            cómo funciona la calculadora
          </Link>{" "}
          explica la notación aceptada por la herramienta.
        </p>
      </section>

      <CalcCTA />
      <AuthorityClusterBlock exclude={ES_AUTHORITY_ROUTES.derivadaPorDefinicion} />
      <RelatedCalculatorsBlock />
    </ArticleWrap>
  );
}
