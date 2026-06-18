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

export function EjemplosDeDerivadasResueltasContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="introduccion">Introducción: por qué una galería de ejemplos resueltos</h2>
        <p>
          Buscar «ejemplos de derivadas resueltas» en internet devuelve miles de capturas sueltas, pero poco
          contexto sobre cómo elegir la regla correcta en cada ejercicio de derivadas. Esta guía no sustituye
          la práctica en papel: te orienta para recorrer la galería del sitio, clasificar problemas por tipo y
          contrastar cada procedimiento con una{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas con pasos
          </Link>{" "}
          que muestra derivadas paso a paso en español.
        </p>
        <p>
          Si vienes de un curso de cálculo diferencial o preparas un parcial, el método más eficiente es
          alternar tres fases: leer un ejemplo resuelto, reproducirlo sin mirar la solución y verificar con la
          herramienta online. Así conviertes la galería en un sistema de estudio, no en una lista para copiar.
        </p>
        <p>
          A lo largo del artículo enlazamos la{" "}
          <Link href="/ejemplos-de-derivadas" className="text-violet-600 font-semibold hover:underline">
            galería de ejemplos de derivadas
          </Link>
          , las{" "}
          <Link href="/reglas-de-derivacion" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          y artículos del blog que profundizan en técnicas concretas. El objetivo es que sepas qué bloque abrir
          según el tipo de función que te planteen en clase o en un examen.
        </p>
      </section>

      <section>
        <h2 id="como-usar-galeria">Cómo usar la galería en /ejemplos</h2>
        <p>
          La página{" "}
          <Link href="/ejemplos-de-derivadas" className="text-violet-600 font-semibold hover:underline">
            /ejemplos
          </Link>{" "}
          está organizada en secciones con anclas: fundamentos, básicos y avanzados. Cada tarjeta muestra la
          función, el resultado y una frase que nombra la regla aplicada. Antes de saltar a ejercicios difíciles,
          recorre la sección de básicos hasta que identifiques la estructura sin leer la solución.
        </p>
        <TipCard>
          Abre{" "}
          <Link href="/ejemplos#basicos" className="font-semibold text-violet-600 hover:underline">
            ejemplos básicos
          </Link>{" "}
          y{" "}
          <Link href="/ejemplos#avanzados" className="font-semibold text-violet-600 hover:underline">
            ejemplos avanzados
          </Link>{" "}
          en pestañas distintas. En una, estudia el procedimiento; en la otra, escribe tú mismo los pasos y solo
          entonces despliega la respuesta.
        </TipCard>
        <p>
          Para resolver derivadas online de forma útil, introduce la misma expresión en la calculadora (con
          paréntesis explícitos) y compara línea a línea. Si tu resultado difiere, el desajuste suele estar en la
          regla de la cadena, en el producto o en un signo; revisa{" "}
          <Link href="/blog/errores-comunes-al-derivar" className="text-violet-600 font-semibold hover:underline">
            errores comunes al derivar
          </Link>{" "}
          antes de asumir que la máquina «se equivoca».
        </p>
        <p>
          El tutorial{" "}
          <Link href="/como-funciona" className="text-violet-600 font-semibold hover:underline">
            cómo funciona la calculadora
          </Link>{" "}
          explica notación (^ para potencias, sin/cos estándar, variable x). Dominar esa sintaxis evita
          frustraciones al pasar de la galería a la herramienta interactiva.
        </p>
      </section>

      <section>
        <h2 id="mapa-galeria">Mapa de la galería: qué estudiar en cada bloque</h2>
        <p>
          Piensa la galería como un museo de ejercicios de derivadas: cada sala corresponde a una familia de
          funciones. Debajo resumimos las salas principales y qué debes dominar antes de pasar a la siguiente.
        </p>

        <h3 id="constantes-potencias">Constantes y potencias</h3>
        <p>
          La derivada de una constante es cero; la de {renderMath("x^n")} es {renderMath("nx^{n-1}")}. Parece
          trivial, pero en polinomios largos el error está en olvidar un término o en derivar un exponente que no
          es constante (por ejemplo {renderMath("2^x")}, que no es potencia en x). En la galería verás polinomios
          como {renderMath("x^3 + 2x^2 - 5")}; practica descomponerlos término a término y simplificar al final.
        </p>
        <ExampleCard
          title="Polinomio típico de la galería"
          steps={[
            "Identifica cada sumando como potencia de x o constante.",
            "Aplica la regla de la potencia: (x³)′ = 3x², (2x²)′ = 4x, (−5)′ = 0.",
            "Suma: f′(x) = 3x² + 4x.",
            "Verifica en la calculadora escribiendo x^3+2*x^2-5.",
          ]}
        >
          {renderMath("f(x)=x^3+2x^2-5 \\quad\\Rightarrow\\quad f'(x)=3x^2+4x", true)}
        </ExampleCard>

        <h3 id="trigonometricas">Trigonométricas y constantes multiplicativas</h3>
        <p>
          En la galería aparece {renderMath("4\\sin(x)")} porque separa dos ideas: la derivada de sin es cos, y
          la constante 4 «sobrevive». Enlaza con{" "}
          <Link href="/blog/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            derivada de sin(x)
          </Link>
          ,{" "}
          <Link href="/blog/derivada-de-cos-x" className="text-violet-600 font-semibold hover:underline">
            derivada de cos(x)
          </Link>{" "}
          y{" "}
          <Link href="/blog/derivada-de-tan-x" className="text-violet-600 font-semibold hover:underline">
            derivada de tan(x)
          </Link>{" "}
          para repasar la tabla antes de composiciones.
        </p>

        <h3 id="cadena-producto">Regla de la cadena y del producto</h3>
        <p>
          Los bloques avanzados de{" "}
          <Link href="/ejemplos#avanzados" className="text-violet-600 font-semibold hover:underline">
            /ejemplos#avanzados
          </Link>{" "}
          mezclan potencias compuestas y productos. Un clásico es {renderMath("(2x+1)^5")}: aquí la capa
          externa es la potencia y la interna es el binomio. Otro es {renderMath("x^2\\ln(x)")}, donde debes
          usar la regla del producto, no derivar cada factor por separado.
        </p>
        <FormulaCard title="Recordatorio rápido">
          {renderMath("(uv)' = u'v + uv' \\qquad \\dfrac{d}{dx}f(g(x)) = f'(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <p>
          Profundiza en{" "}
          <Link href="/blog/entendiendo-regla-de-la-cadena" className="text-violet-600 font-semibold hover:underline">
            entendiendo la regla de la cadena
          </Link>{" "}
          y en ejercicios extra de{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena: ejercicios resueltos
          </Link>
          .
        </p>

        <h3 id="exponenciales-logaritmos">Exponenciales y logaritmos</h3>
        <p>
          Aunque la galería principal enfatiza polinomios y trigonométricas, en exámenes aparecen {renderMath("e^x")}
          , {renderMath("\\ln(x)")} y composiciones. La derivada de {renderMath("e^x")} es ella misma; la de{" "}
          {renderMath("\\ln(x)")} es {renderMath("1/x")}. Si ves {renderMath("\\ln(3x)")}, entra la cadena:
          {renderMath("1/(3x)\\cdot 3 = 1/x")}. Añade estos casos a tu cuaderno y resuélvelos con la calculadora.
        </p>

        <h3 id="cocientes-implícitas">Cocientes e implícitas (extensión de la galería)</h3>
        <p>
          Cuando la función es un cociente, la regla del cociente evita fracciones innecesarias. Para ecuaciones
          donde y no está despejada, la derivación implícita es obligatoria. Si la galería no muestra aún tu
          tipo de problema, usa la calculadora y documenta los pasos como si fueras otro «ejemplo resuelto» del
          sitio.
        </p>
      </section>

      <section>
        <h2 id="rutina-estudio">Rutina de estudio con ejercicios de derivadas</h2>
        <p>
          Una rutina de 45 minutos puede estructurarse así: diez minutos de repaso de reglas en{" "}
          <Link href="/reglas-de-derivacion" className="text-violet-600 font-semibold hover:underline">
            /reglas
          </Link>
          , veinte minutos de ejercicios de derivadas tomados de la galería (sin mirar la solución), diez
          minutos de verificación con derivadas paso a paso en la calculadora y cinco minutos de anotar el error
          más frecuente del día.
        </p>
        <p>
          Si empiezas desde cero, lee primero{" "}
          <Link href="/blog/como-aprender-derivadas-desde-cero" className="text-violet-600 font-semibold hover:underline">
            cómo aprender derivadas desde cero
          </Link>
          . Si ya dominas lo básico, alterna la galería con problemas «inventados»: cambia coeficientes o
          exponentes y comprueba que el patrón de reglas se mantiene.
        </p>
        <WarningCard>
          Copiar la solución final sin escribir los pasos intermedios no prepara para un examen escrito. La
          galería es material de estudio; la calificación depende de tu procedimiento.
        </WarningCard>
      </section>

      <section>
        <h2 id="ejemplos-paso-a-paso">Tres ejemplos guiados (estilo galería ampliada)</h2>

        <h3 id="ejemplo-cadena">Ejemplo 1: potencia compuesta</h3>
        <ExampleCard
          title="(2x + 1)⁵"
          steps={[
            "Capa externa: u⁵ con u = 2x + 1 → derivada 5u⁴.",
            "Capa interna: u′ = 2.",
            "Multiplica: f′(x) = 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴.",
            "Comprueba en /ejemplos#avanzados y en la calculadora.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}(2x+1)^5 = 10(2x+1)^4", true)}
        </ExampleCard>

        <h3 id="ejemplo-producto">Ejemplo 2: producto con logaritmo</h3>
        <ExampleCard
          title="x² · ln(x)"
          steps={[
            "u = x², v = ln(x); u′ = 2x, v′ = 1/x.",
            "(uv)′ = u′v + uv′ = 2x·ln(x) + x²·(1/x).",
            "Simplifica x²/x = x.",
            "Resultado: 2x ln(x) + x.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\bigl(x^2\\ln x\\bigr) = 2x\\ln x + x", true)}
        </ExampleCard>

        <h3 id="ejemplo-trig">Ejemplo 3: seno con constante</h3>
        <ExampleCard
          title="4 sin(x)"
          steps={[
            "La constante 4 permanece.",
            "Derivada de sin(x) es cos(x).",
            "f′(x) = 4 cos(x).",
            "Relaciona con la tarjeta trigonométrica de la galería.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\bigl(4\\sin x\\bigr) = 4\\cos x", true)}
        </ExampleCard>
      </section>

      <section>
        <h2 id="palabras-clave">Palabras clave y búsquedas que debes conocer</h2>
        <p>
          Estudiantes buscan «derivadas paso a paso», «calculadora de derivadas online gratis», «ejercicios de
          derivadas resueltos» o «cómo resolver derivadas online». Todos apuntan al mismo flujo: entender la
          regla, ejecutar el álgebra y validar. Esta guía y la galería están alineadas con esas búsquedas en
          español, sin sustituir el razonamiento matemático.
        </p>
        <p>
          Si tu profesor pide notación {renderMath("D_x f")} o {renderMath("f'")}, el significado es idéntico;
          la calculadora y los ejemplos usan prima de Lagrange por claridad visual.
        </p>
      </section>

      <section>
        <h2 id="multivariable">¿Y las derivadas parciales?</h2>
        <p>
          La galería principal se centra en funciones de una variable. Para cálculo multivariable, consulta{" "}
          <Link href="/blog/derivadas-parciales-ejemplos" className="text-violet-600 font-semibold hover:underline">
            derivadas parciales: ejemplos resueltos
          </Link>
          . Allí verás cómo fijar las demás variables al derivar respecto a x o y.
        </p>
      </section>

      <section>
        <h2 id="practica-final">Práctica final y verificación</h2>
        <p>
          Cierra cada sesión con tres problemas elegidos al azar de distintas secciones de{" "}
          <Link href="/ejemplos-de-derivadas" className="text-violet-600 font-semibold hover:underline">
            /ejemplos
          </Link>
          . Cronometra el primer intento; en el segundo intento, al día siguiente, deberías necesitar menos pasos
          y menos consultas a la tabla de reglas.
        </p>
        <p>
          Los ejemplos de derivadas resueltos del sitio crecen con el blog: trigonométricas, cadena, errores
          típicos y más. Suscríbete mentalmente a un «circuito» semanal: galería → blog → calculadora → cuaderno.
        </p>
        <CalcCTA />
      </section>

      <section>
        <h2 id="examen">Preparar un examen con la galería y el blog</h2>
        <p>
          Una semana antes del parcial, lista los tipos de problema que tu syllabus menciona (polinomios,
          trigonométricas, cadena, producto, cociente, implícitas). Asigna a cada tipo al menos un ejemplo de la
          galería y un artículo del blog. El día anterior, resuelve solo los tipos donde fallaste en la
          autocorrección; usa la calculadora de derivadas únicamente como juez final, no como primer paso.
        </p>
        <p>
          Muchos profesores valoran la notación: escribe {renderMath("f'(x)")} o {renderMath("\\dfrac{dy}{dx}")}{" "}
          según convenga, pero sé consistente. Si el enunciado pide «derivadas paso a paso», deja huecos en el
          papel para cada regla nombrada; eso suele sumar puntos aunque el resultado numérico sea correcto.
        </p>
      </section>

      <section>
        <h2 id="preguntas-frecuentes">Preguntas frecuentes sobre la galería</h2>
        <h3 id="faq-copiar">¿Puedo usar la galería en un trabajo evaluable?</h3>
        <p>
          Úsala para estudiar y citar ideas, pero entrega procedimiento propio. En trabajos formales, indica si
          verificaste con software y sigue las normas de tu institución sobre herramientas digitales.
        </p>
        <h3 id="faq-diferencia-blog">¿En qué se diferencia del blog?</h3>
        <p>
          La galería en /ejemplos es concisa y visual; los artículos del blog (como este) explican estrategia,
          errores y contexto. Combina ambos: el blog te enseña a navegar, la galería te da volumen de práctica.
        </p>
        <h3 id="faq-sin-pasos">¿Qué hago si la calculadora no muestra el detalle que espero?</h3>
        <p>
          Revisa paréntesis y sintaxis en{" "}
          <Link href="/como-funciona" className="text-violet-600 font-semibold hover:underline">
            cómo funciona
          </Link>
          . Simplifica la expresión o descompón en pasos manuales antes de introducirla.
        </p>
      </section>
    </ArticleWrap>
  );
}
