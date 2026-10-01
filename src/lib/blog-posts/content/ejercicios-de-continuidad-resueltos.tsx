import { ArticleWrap, Link } from "../helpers";

const linkClass = "text-violet-600 font-semibold hover:underline";

export function EjerciciosDeContinuidadResueltosContent() {
  return (
    <ArticleWrap>
      <section>
        <p>
          Saber la definición de continuidad es solo el primer paso. El verdadero dominio del tema
          viene de reconocer qué <em>tipo</em> de discontinuidad tiene una función con solo mirarla, y
          de resolver el caso menos obvio: cuando un parámetro desconocido tiene que ajustarse para
          que la función sea continua. Estos cinco ejercicios van de lo más simple a ese caso avanzado.
        </p>
        <p>
          Antes de empezar, el criterio que vamos a aplicar en todos:{" "}
          <strong>
            f es continua en x = a si el límite de f cuando x tiende a a existe, y ese límite es igual
            a f(a)
          </strong>
          . Si cualquiera de las dos condiciones falla, hay una discontinuidad.
        </p>
      </section>

      <section>
        <h2 id="ejercicio-1-funcion-continua">Ejercicio 1: Función continua (caso base)</h2>
        <p>
          <strong>¿Es continua f(x) = x³ − 4x en x = −1?</strong>
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed">
          <li>Evaluamos directamente: f(−1) = (−1)³ − 4(−1) = −1 + 4 = 3.</li>
          <li>
            Como f es un polinomio, el límite cuando x → −1 se calcula por sustitución directa:
            también da 3.
          </li>
          <li>El límite (3) coincide con f(−1) (3).</li>
        </ol>
        <p>
          <strong>Resultado: f es continua en x = −1.</strong>
        </p>
        <p>
          Todo polinomio es continuo en cada punto de su dominio, que es todo ℝ. Este caso rara vez
          aparece solo en un examen, pero confirma el criterio antes de ver los casos donde falla.
        </p>
      </section>

      <section>
        <h2 id="ejercicio-2-discontinuidad-removable">Ejercicio 2: Discontinuidad removable</h2>
        <p>
          <strong>¿Es continua f(x) = (x² − 9)/(x − 3) en x = 3?</strong>
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed">
          <li>
            Sustituir directamente da 0/0, una forma indeterminada — no podemos concluir nada todavía.
          </li>
          <li>Factorizamos el numerador: x² − 9 = (x − 3)(x + 3).</li>
          <li>Simplificamos: f(x) = (x − 3)(x + 3)/(x − 3) = x + 3, válido para todo x ≠ 3.</li>
          <li>El límite cuando x → 3 de x + 3 es 6. El límite existe.</li>
          <li>Pero f(3) no está definida — la función original tiene una división por cero ahí.</li>
        </ol>
        <p>
          <strong>
            Resultado: f no es continua en x = 3 (discontinuidad removable, un &quot;hueco&quot; en el
            punto (3, 6)).
          </strong>
        </p>
        <p>
          El límite existe pero la función no está definida ahí. Es la discontinuidad
          &quot;removable&quot; porque, si se redefiniera f(3) = 6, la función sería continua.
        </p>
      </section>

      <section>
        <h2 id="ejercicio-3-discontinuidad-de-salto">Ejercicio 3: Discontinuidad de salto</h2>
        <p>
          <strong>¿Es continua f(x) = x² si x &lt; 2, y f(x) = 2x + 1 si x ≥ 2, en x = 2?</strong>
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed">
          <li>
            Límite por la izquierda: usamos la primera rama (x²) porque se acerca a 2 desde valores
            menores. lim(x→2⁻) x² = 4.
          </li>
          <li>Límite por la derecha: usamos la segunda rama (2x + 1). lim(x→2⁺) (2x + 1) = 5.</li>
          <li>Los límites laterales existen, pero son distintos: 4 ≠ 5.</li>
          <li>Como no coinciden, el límite bilateral en x = 2 no existe.</li>
        </ol>
        <p>
          <strong>Resultado: f no es continua en x = 2 (discontinuidad de salto).</strong>
        </p>
        <p>
          A diferencia del caso removable, aquí no hay forma de &quot;arreglar&quot; la función con un
          solo valor: la función realmente salta de un valor a otro.
        </p>
      </section>

      <section>
        <h2 id="ejercicio-4-dos-discontinuidades">
          Ejercicio 4: Dos discontinuidades en la misma función
        </h2>
        <p>
          <strong>¿Dónde es discontinua f(x) = (x + 1)/(x² − 1)?</strong>
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed">
          <li>
            Factorizamos el denominador: x² − 1 = (x − 1)(x + 1). Entonces f(x) = (x + 1)/[(x − 1)(x +
            1)].
          </li>
          <li>
            Simplificando (para x ≠ −1): f(x) = 1/(x − 1). Esto ya nos dice que hay dos puntos
            sospechosos: x = 1 y x = −1.
          </li>
          <li>
            <strong>En x = −1:</strong> la forma simplificada da 1/(−1−1) = −1/2, así que el límite
            existe y es finito. Pero f(−1) en la función original es 0/0, indefinida. Es una{" "}
            <strong>discontinuidad removable</strong> en (−1, −1/2).
          </li>
          <li>
            <strong>En x = 1:</strong> la forma simplificada 1/(x − 1) diverge cuando x → 1 (tiende a
            −∞ por la izquierda y a +∞ por la derecha). El límite no es un número finito. Es una{" "}
            <strong>discontinuidad infinita</strong> (asíntota vertical) en x = 1.
          </li>
        </ol>
        <p>
          <strong>
            Resultado: discontinuidad removable en x = −1, discontinuidad infinita en x = 1.
          </strong>
        </p>
        <p>
          Este ejercicio junta los dos tipos de discontinuidad que vimos por separado en los ejercicios
          2 y 3, en una sola función. Es el tipo de pregunta que aparece cuando un examen pide
          &quot;analiza todas las discontinuidades&quot; en vez de preguntar por un solo punto.
        </p>
      </section>

      <section>
        <h2 id="ejercicio-5-parametro">
          Ejercicio 5: Hallar un parámetro para que la función sea continua
        </h2>
        <p>
          <strong>
            ¿Para qué valor de k es continua f(x) = x² + k si x ≤ 1, y f(x) = 3x si x &gt; 1, en x =
            1?
          </strong>
        </p>
        <p>
          Este tipo de ejercicio invierte el problema: en vez de verificar si una función dada es
          continua, hay que encontrar el valor que <em>la hace</em> continua.
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed">
          <li>
            Calculamos f(1) usando la primera rama, porque x ≤ 1 incluye a x = 1: f(1) = 1² + k = 1 +
            k.
          </li>
          <li>
            Límite por la izquierda: también usa la primera rama (un polinomio, continuo en todo su
            dominio), así que lim(x→1⁻) (x² + k) = 1 + k — automáticamente igual a f(1).
          </li>
          <li>Límite por la derecha: usamos la segunda rama. lim(x→1⁺) 3x = 3.</li>
          <li>
            Para que la función sea continua, los tres valores deben coincidir: f(1) = límite
            izquierdo = límite derecho. Como f(1) y el límite izquierdo ya son iguales (1 + k), solo
            falta igualar con el límite derecho: 1 + k = 3.
          </li>
          <li>Despejando: k = 2.</li>
        </ol>
        <p>
          <strong>Resultado: k = 2.</strong>
        </p>
        <p>
          Con k = 2, la función queda f(x) = x² + 2 para x ≤ 1, lo que da f(1) = 3, exactamente igual
          al límite por la derecha.
        </p>
      </section>

      <section>
        <h2 id="como-reconocer-cada-tipo">Cómo reconocer cada tipo de discontinuidad</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">
                  Tipo
                </th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">
                  Qué pasa con el límite
                </th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">
                  Qué pasa con f(a)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Removable</td>
                <td className="border border-slate-200 px-4 py-3">Existe y es finito</td>
                <td className="border border-slate-200 px-4 py-3">
                  No está definida, o tiene un valor distinto al límite
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">De salto</td>
                <td className="border border-slate-200 px-4 py-3">
                  Los límites laterales existen pero no coinciden
                </td>
                <td className="border border-slate-200 px-4 py-3">—</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Infinita</td>
                <td className="border border-slate-200 px-4 py-3">
                  No es un número finito (diverge)
                </td>
                <td className="border border-slate-200 px-4 py-3">Generalmente no está definida</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="verifica-tus-ejercicios">Verifica tus propios ejercicios</h2>
        <p>
          Cada uno de estos casos se puede comprobar con la{" "}
          <Link href="/continuidad-de-una-funcion" className={linkClass}>
            calculadora de continuidad
          </Link>
          , que evalúa el límite y el valor de la función por separado y te dice exactamente dónde
          difieren. Si necesitas repasar cómo se calcula un límite antes de analizar la continuidad,
          empieza por la{" "}
          <Link href="/calculadora-de-limites" className={linkClass}>
            calculadora de límites
          </Link>
          .
        </p>
        <p>
          Para profundizar en los casos donde el límite no es obvio a simple vista, la{" "}
          <Link href="/regla-de-l-hopital" className={linkClass}>
            regla de L&apos;Hôpital
          </Link>{" "}
          es la herramienta siguiente una vez que domines estos cinco ejercicios.
        </p>
      </section>
    </ArticleWrap>
  );
}
