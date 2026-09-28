import { ArticleWrap, ExampleCard, Link, renderMath } from "../helpers";

const linkClass = "text-violet-600 font-semibold hover:underline";

export function ComprobarDerivadaConCalculadoraCientificaContent() {
  return (
    <ArticleWrap>
      <section>
        <p>
          Terminas un ejercicio de derivadas y no sabes si el resultado es correcto. Muchas calculadoras
          científicas tienen una tecla de derivada, pero funciona distinto de lo que se espera:{" "}
          <strong>no devuelve una expresión, devuelve un número</strong>. Por eso sirve para{" "}
          <em>comprobar</em> tu resultado, no para obtenerlo. Esta guía explica cómo usarla bien.
        </p>
      </section>

      <section>
        <h2 id="que-hace-la-tecla">Qué hace la tecla de derivada (y qué no)</h2>
        <p>
          La función suele mostrarse como d/dx. Calcula el valor de la derivada de f en{" "}
          <strong>un punto</strong> concreto x = a. Por ejemplo, para f(x) = x², pedirle la derivada en x = 3
          da 6, pero no te muestra la expresión 2x.
        </p>
        <p>Esto tiene dos consecuencias:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            No puedes escribir la función, presionar igual y obtener una fórmula. Ninguna calculadora
            científica común da procedimientos ni resultados algebraicos.
          </li>
          <li>
            Para comparar, tienes que evaluar <strong>tu</strong> derivada en el mismo punto y ver si los
            números coinciden.
          </li>
        </ul>
        <p>
          En muchas calculadoras Casio se accede con SHIFT y la tecla de la integral, y luego se escribe la
          función, una coma y el valor de x. En otros modelos el nombre y la secuencia cambian, así que
          consulta el manual de tu modelo.
        </p>
      </section>

      <section>
        <h2 id="metodo-cuatro-pasos">El método en cuatro pasos</h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed">
          <li>
            <strong>Deriva a mano</strong> la función. Anota tu resultado f′(x).
          </li>
          <li>
            <strong>Elige uno o dos valores de x</strong> sencillos donde la función esté definida (por
            ejemplo x = 2 y x = −1).
          </li>
          <li>
            <strong>Calcula con la tecla d/dx</strong> de la calculadora: escribe la función, una coma y el
            valor de x, y presiona igual.
          </li>
          <li>
            <strong>Evalúa tu derivada</strong> en esos mismos valores. Si coinciden, tu derivada es muy
            probablemente correcta.
          </li>
        </ol>
        <p>Usa más de un valor de x. Un solo punto puede coincidir por casualidad aunque la fórmula esté mal.</p>
      </section>

      <section>
        <h2 id="ejemplo-resuelto">Ejemplo resuelto</h2>
        <p>
          Sea f(x) = {renderMath("2x^3 - 5x^2 + 3x - 1")}.
        </p>
        <p>
          <strong>Paso 1.</strong> Derivando término a término con la regla de la potencia: f′(x) ={" "}
          {renderMath("6x^2 - 10x + 3")}.
        </p>
        <p>
          <strong>Paso 2.</strong> Elegimos x = 2 y x = −1.
        </p>
        <p>
          <strong>Paso 3.</strong> En la calculadora, la derivada de f en x = 2 da 7 (o un valor muy cercano).
          En x = −1 da 19.
        </p>
        <ExampleCard
          title="Paso 4. Evaluamos nuestra fórmula"
          steps={[
            "f′(2) = 6·4 − 10·2 + 3 = 24 − 20 + 3 = 7.",
            "f′(−1) = 6·1 + 10 + 3 = 19.",
          ]}
        />
        <p>
          Coinciden en ambos puntos, así que la derivada está bien. Si hubiéramos escrito por error 6x² − 10x
          (olvidando el 3), en x = 2 habríamos obtenido 4, y la diferencia con 7 delata el error.
        </p>
      </section>

      <section>
        <h2 id="cuando-puede-enganarte">Cuándo la calculadora puede engañarte</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Es una aproximación.</strong> La calculadora deriva de forma numérica, por eso a veces
            muestra un valor muy cercano y no exactamente el entero esperado.
          </li>
          <li>
            <strong>Funciones trigonométricas: usa radianes.</strong> Si la función tiene sin, cos o tan,
            configura la calculadora en modo radianes. En grados, el resultado no coincidirá con la fórmula
            habitual.
          </li>
          <li>
            <strong>Puntos donde la derivada no existe.</strong> En una esquina, como |x| en x = 0, o en una
            discontinuidad, la calculadora puede devolver un número aunque la derivada no exista. Antes de
            fiarte, piensa si la función es derivable en ese punto.
          </li>
          <li>
            <strong>Paréntesis.</strong> Una fracción como 3/2x no es lo mismo que 3/(2x). Escribe siempre los
            paréntesis del denominador.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="comprueba-tambien">Comprueba también con esta calculadora</h2>
        <p>
          Si no tienes calculadora científica a mano, la{" "}
          <Link href="/" className={linkClass}>
            calculadora de derivadas
          </Link>{" "}
          de este sitio hace algo más útil: muestra la expresión de la derivada paso a paso. Y en la opción
          &quot;Evaluar en un punto&quot; puedes obtener directamente f′(a) para comparar con tu resultado.
        </p>
        <p>
          Para practicar más, repasa la{" "}
          <Link href="/tabla-de-derivadas" className={linkClass}>
            tabla de derivadas
          </Link>
          , las{" "}
          <Link href="/reglas-de-derivacion" className={linkClass}>
            reglas de derivación
          </Link>{" "}
          y los{" "}
          <Link href="/blog/errores-comunes-al-derivar" className={linkClass}>
            errores comunes al derivar
          </Link>
          . Son la mejor preparación antes de un parcial o un final.
        </p>
      </section>
    </ArticleWrap>
  );
}
