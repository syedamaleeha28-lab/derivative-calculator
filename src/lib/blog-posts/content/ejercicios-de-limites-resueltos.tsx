import {
  ArticleWrap,
  ExampleCard,
  FormulaCard,
  Link,
  TipCard,
  renderMath,
} from "../helpers";

const linkClass = "text-violet-600 font-semibold hover:underline";

export function EjerciciosDeLimitesResueltosContent() {
  return (
    <ArticleWrap>
      <section>
        <p>
          Leer la teoría de límites es una cosa. Resolver un ejercicio bajo presión de examen, sin
          saber de antemano qué método usar, es otra completamente distinta. Esta guía reúne cuatro
          ejercicios ordenados de menor a mayor dificultad, cada uno eligiendo un método distinto —
          para que practiques no solo el cálculo, sino la parte que realmente se evalúa en un examen:
          reconocer qué herramienta usar en cada caso.
        </p>
      </section>

      <section>
        <h2 id="ejercicio-1-sustitucion-directa">Ejercicio 1: sustitución directa</h2>
        <p>
          <strong>Encuentra:</strong> el límite de (x + 3)/(x − 1) cuando x tiende a 2.
        </p>
        <p>Antes de complicarte, siempre prueba lo más simple primero: sustituir directamente.</p>
        <FormulaCard title="Sustitución directa">
          {renderMath(
            "\\lim_{x \\to 2} \\dfrac{x+3}{x-1} = \\dfrac{2+3}{2-1} = \\dfrac{5}{1} = 5",
            true
          )}
        </FormulaCard>
        <p>
          El denominador no se hace cero en x = 2, así que no hay ninguna forma indeterminada — el
          resultado es simplemente 5. Este es el paso que muchos estudiantes se saltan por costumbre, y
          es exactamente el primer paso del diagnóstico que vale la pena hacer siempre: ¿de verdad
          necesito un método especial, o la sustitución directa ya resuelve esto?
        </p>
      </section>

      <section>
        <h2 id="ejercicio-2-factorizar">Ejercicio 2: factorizar para eliminar 0/0</h2>
        <p>
          <strong>Encuentra:</strong> el límite de (x³ − 1)/(x − 1) cuando x tiende a 1.
        </p>
        <p>
          Sustituir directamente da 0/0 — una forma indeterminada. Antes de recurrir a un método más
          avanzado, prueba factorizar. El numerador es una diferencia de cubos:
        </p>
        <FormulaCard title="Diferencia de cubos">
          {renderMath("x^3 - 1 = (x-1)(x^2+x+1)", true)}
        </FormulaCard>
        <p>Sustituyendo esa factorización:</p>
        <ExampleCard
          title="Cancelar el factor común"
          steps={[
            "Sustituir da 0/0: forma indeterminada.",
            "Factoriza x³ − 1 como (x − 1)(x² + x + 1).",
            "Cancela (x − 1) y evalúa el polinomio restante en x = 1.",
          ]}
        >
          {renderMath(
            "\\lim_{x \\to 1} \\dfrac{(x-1)(x^2+x+1)}{x-1} = \\lim_{x \\to 1} (x^2+x+1) = 1+1+1 = 3",
            true
          )}
        </ExampleCard>
        <p>
          El término (x − 1) se cancela, y lo que queda ya no tiene ninguna indeterminación. Este es el
          mismo patrón que viste en el ejercicio de la diferencia de cuadrados en la guía de derivada
          por definición — factorizar sigue siendo, en la mayoría de los casos, el primer método que
          deberías probar antes de pasar a algo más complejo.
        </p>
      </section>

      <section>
        <h2 id="ejercicio-3-trigonometrico">Ejercicio 3: un límite trigonométrico</h2>
        <p>
          <strong>Encuentra:</strong> el límite de tan(x)/x cuando x tiende a 0.
        </p>
        <p>
          Sustituir da 0/0 otra vez, y esta vez factorizar no ayuda — no hay nada que cancelar en una
          expresión trigonométrica de esta forma. Aquí es donde vale la pena reconocer que estás frente
          a un candidato perfecto para la regla de L&apos;Hôpital: deriva numerador y denominador por
          separado.
        </p>
        <FormulaCard title="Derivadas del numerador y del denominador">
          {renderMath(
            "\\dfrac{d}{dx}[\\tan x] = \\sec^2 x \\qquad \\dfrac{d}{dx}[x] = 1",
            true
          )}
        </FormulaCard>
        <ExampleCard
          title="tan(x)/x con L'Hôpital"
          steps={[
            "Sustituir da 0/0; no hay un factor común que cancelar.",
            "Deriva tan x → sec² x y el denominador x → 1.",
            "Evalúa sec²(0) = 1.",
          ]}
        >
          {renderMath(
            "\\lim_{x \\to 0} \\dfrac{\\tan x}{x} = \\lim_{x \\to 0} \\dfrac{\\sec^2 x}{1} = \\sec^2(0) = 1",
            true
          )}
        </ExampleCard>
        <p>
          Si quieres verificar este procedimiento paso a paso, o practicar con tu propia función, la{" "}
          <Link href="/calculadora-de-limites" className={linkClass}>
            calculadora de límites
          </Link>{" "}
          resuelve exactamente este tipo de caso y te muestra cada paso, no solo el resultado final.
        </p>
      </section>

      <section>
        <h2 id="ejercicio-4-lhopital">Ejercicio 4: cuando factorizar no es una opción</h2>
        <p>
          <strong>Encuentra:</strong> el límite de ln(1 + x)/x cuando x tiende a 0.
        </p>
        <p>
          Sustituir da 0/0 — ln(1) es 0, y el denominador también es 0. No hay forma de factorizar un
          logaritmo de esta manera, así que factorizar queda descartado de entrada. Este es exactamente
          el tipo de caso donde la regla de L&apos;Hôpital no es solo una opción más — es la herramienta
          correcta desde el principio.
        </p>
        <FormulaCard title="Derivadas del numerador y del denominador">
          {renderMath(
            "\\dfrac{d}{dx}[\\ln(1+x)] = \\dfrac{1}{1+x} \\qquad \\dfrac{d}{dx}[x] = 1",
            true
          )}
        </FormulaCard>
        <ExampleCard
          title="ln(1 + x)/x con L'Hôpital"
          steps={[
            "Sustituir da 0/0 y no hay factorización útil.",
            "Deriva ln(1 + x) → 1/(1 + x) y el denominador x → 1.",
            "Evalúa 1/(1 + 0) = 1.",
          ]}
        >
          {renderMath(
            "\\lim_{x \\to 0} \\dfrac{\\ln(1+x)}{x} = \\lim_{x \\to 0} \\dfrac{\\frac{1}{1+x}}{1} = \\dfrac{1}{1+0} = 1",
            true
          )}
        </ExampleCard>
        <p>
          Si quieres ver el procedimiento completo de cuándo aplicar esta regla, incluyendo los
          errores más comunes al usarla, la guía de la{" "}
          <Link href="/regla-de-l-hopital" className={linkClass}>
            regla de L&apos;Hôpital
          </Link>{" "}
          desarrolla el método completo con su propia calculadora integrada.
        </p>
      </section>

      <section>
        <h2 id="patron">El patrón detrás de los cuatro ejercicios</h2>
        <p>
          Fíjate en el orden en que resolviste esto: primero preguntaste si hacía falta algún método
          especial, después probaste factorizar, y solo cuando factorizar no era viable recurriste a
          L&apos;Hôpital. Ese orden — sustitución, factorización, L&apos;Hôpital — es exactamente la
          secuencia de decisiones que un examen espera que sigas, no una lista de fórmulas sueltas
          para memorizar por separado.
        </p>
        <TipCard>
          Diagnóstico en tres pasos: ¿la sustitución directa funciona? Si da 0/0, ¿puedo factorizar?
          Solo entonces aplica L&apos;Hôpital.
        </TipCard>
      </section>

      <section>
        <h2 id="como-seguir-practicando">Cómo seguir practicando</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Resuelve cada uno de estos cuatro ejercicios de nuevo, sin mirar la solución, y
            cronométrate — la velocidad para identificar el método correcto es lo que realmente se
            evalúa en un examen.
          </li>
          <li>
            Verifica tu procedimiento completo en la{" "}
            <Link href="/calculadora-de-limites" className={linkClass}>
              calculadora de límites
            </Link>
            , no solo el resultado final.
          </li>
          <li>
            Si te trabas específicamente decidiendo cuándo usar L&apos;Hôpital, la guía completa explica
            las condiciones exactas antes de aplicarla.
          </li>
          <li>
            Busca un quinto ejercicio por tu cuenta y clasifícalo antes de resolverlo: ¿sustitución
            directa, factorización, o L&apos;Hôpital?
          </li>
        </ol>
        <p className="mt-6">
          ¿Quieres verificar tus propios ejercicios? Prueba la{" "}
          <Link href="/calculadora-de-limites" className={linkClass}>
            calculadora de límites
          </Link>{" "}
          paso a paso, o repasa cuándo aplicar la{" "}
          <Link href="/regla-de-l-hopital" className={linkClass}>
            regla de L&apos;Hôpital
          </Link>{" "}
          con su calculadora integrada.
        </p>
      </section>
    </ArticleWrap>
  );
}
