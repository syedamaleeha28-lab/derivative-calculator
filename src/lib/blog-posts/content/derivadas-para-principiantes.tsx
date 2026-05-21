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

export function DerivadasParaPrincipiantesContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="bienvenida">Derivadas para principiantes: por dónde empezar</h2>
        <p>
          Si estás empezando cálculo diferencial, la palabra «derivada» puede sonar abstracta. En esencia,
          mide cómo de rápido cambia una cantidad cuando modificas otra: pendiente de una curva, velocidad
          instantánea, sensibilidad de un modelo. Esta guía es una ruta de estudio en español: qué
          prerequisitos repasar, qué reglas aprender primero, cómo practicar sin abrumarte y qué artículos
          leer después en nuestro{" "}
          <Link href="/blog" className="text-violet-600 font-semibold hover:underline">
            blog de derivadas
          </Link>
          .
        </p>
        <p>
          No necesitas memorizar decenas de fórmulas el primer día. Necesitas entender el concepto de
          límite, la interpretación geométrica de la pendiente tangente y las tres reglas que cubren la
          mayoría de polinomios y potencias simples. A partir de ahí, la{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena
          </Link>
          , el cociente y las{" "}
          <Link href="/blog/derivadas-implicitas-paso-a-paso" className="text-violet-600 font-semibold hover:underline">
            derivadas implícitas
          </Link>{" "}
          llegan en orden lógico. Usa la{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas con pasos
          </Link>{" "}
          como tutor, no como atajo permanente.
        </p>
      </section>

      <section>
        <h2 id="prerequisitos">Prerrequisitos que conviene dominar</h2>
        <h3 id="algebra">Álgebra</h3>
        <p>
          Debes manejar exponentes, factorización, fracciones algebraicas y despeje de ecuaciones. Si
          (x² − 1)/(x − 1) te cuesta simplificar, dedica una sesión solo a álgebra antes de derivar;
          muchos «errores de derivada» son en realidad errores de álgebra previa.
        </p>
        <h3 id="limites">Límites</h3>
        <p>
          La definición formal de derivada usa un límite. No hace falta dominar todas las técnicas de
          límites infinitos al inicio, pero sí la idea de acercarse a un valor. La definición por
          límites conecta la pendiente con el cálculo:
        </p>
        <FormulaCard title="Definición de derivada">
          {renderMath("f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}", true)}
        </FormulaCard>
        <p>
          En la práctica universitaria usarás reglas directas la mayor parte del tiempo, pero entender
          el límite evita que la derivada parezca magia.
        </p>
        <h3 id="funciones">Funciones y gráficas</h3>
        <p>
          Reconocer líneas, parábolas, seno y coseno ayuda a interpretar resultados. Cuando derives
          sin(x) o cos(x), consulta{" "}
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
        <h2 id="interpretacion">Qué significa la derivada</h2>
        <p>
          Geometricamente, f′(a) es la pendiente de la recta tangente a la gráfica de f en x = a. Si
          f representa posición respecto al tiempo, f′ es velocidad. Si f es coste, f′ indica margen
          marginal aproximado. Esa flexibilidad explica por qué el cálculo diferencial es transversal en
          ingeniería, economía y ciencias naturales.
        </p>
        <p>
          Empezar por gráficas sencillas —f(x) = x², f(x) = x³— y estimar pendientes a mano antes de
          aplicar fórmulas ancla la intuición. Luego contrasta con la tabla en{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="reglas-basicas">Las reglas que debes aprender primero</h2>
        <FormulaCard title="Paquete inicial">
          {renderMath(
            "\\dfrac{d}{dx}x^n = n x^{n-1} \\quad (cf)' = c f' \\quad (f+g)' = f' + g'",
            true
          )}
        </FormulaCard>
        <ExampleCard
          title="Ejemplo: derivar 3x⁴ − 2x + 7"
          steps={[
            "Derivada término a término.",
            "12x³ − 2; la constante 7 desaparece.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}(3x^4 - 2x + 7) = 12x^3 - 2", true)}
        </ExampleCard>
        <p>
          Después incorpora regla del producto, del cociente y de la cadena. Para fracciones, lee{" "}
          <Link href="/blog/como-derivar-fracciones" className="text-violet-600 font-semibold hover:underline">
            cómo derivar fracciones
          </Link>
          . Para composiciones, la guía de{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena con ejercicios
          </Link>{" "}
          es el siguiente paso natural.
        </p>
        <TipCard>
          Aprende una regla nueva solo cuando la anterior ya la apliques sin dudar en ejercicios de
          dificultad media. La sobrecarga de fórmulas paralelas confunde más que ayuda.
        </TipCard>
      </section>

      <section>
        <h2 id="ruta">Ruta de estudio sugerida (4–6 semanas)</h2>
        <h3 id="semana1">Semana 1: concepto y polinomios</h3>
        <p>
          Límites intuitivos, definición de derivada, pendiente tangente. Practica polinomios y potencias
          enteras. Cinco ejercicios diarios de dificultad creciente.
        </p>
        <h3 id="semana2">Semana 2: producto y cociente</h3>
        <p>
          Productos simples x·sin x y cocientes x/(x+1). Verifica en{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos resueltos
          </Link>
          .
        </p>
        <h3 id="semana3">Semana 3: cadena y trigonométricas</h3>
        <p>
          sin(2x), cos(x²), e^(3x). Artículos de sin, cos y{" "}
          <Link href="/blog/derivada-de-tan-x" className="text-violet-600 font-semibold hover:underline">
            tan(x)
          </Link>
          .
        </p>
        <h3 id="semana4">Semana 4: implícitas y repaso</h3>
        <p>
          Ecuaciones x² + y² = r² y problemas de tangente. Guía de{" "}
          <Link href="/blog/derivadas-implicitas-paso-a-paso" className="text-violet-600 font-semibold hover:underline">
            derivadas implícitas
          </Link>
          .
        </p>
        <WarningCard>
          No saltes a integrales o aplicaciones avanzadas sin dominar derivadas algebraicas básicas: la
          integración asume manipulación fluida de f′.
        </WarningCard>
      </section>

      <section>
        <h2 id="notacion">Notación y convenciones</h2>
        <p>
          Verás f′(x), dy/dx, Df(x) y ẋ en contextos de física. Son equivalentes en el nivel
          introductorio. La calculadora suele usar la notación de Lagrange f′ o Leibniz según el paso.
          Mantén coherencia en tus apuntes para no confundirte al comparar con el desglose online.
        </p>
        <p>
          En trigonometría, confirma que trabajas en radianes: sin(π/2) y sin(90°) no son lo mismo
          para el motor simbólico. Los artículos de{" "}
          <Link href="/blog/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            sin(x)
          </Link>{" "}
          insisten en este punto porque es la fuente de discrepancias numéricas al verificar.
        </p>
      </section>

      <section>
        <h2 id="herramientas">Cómo usar la calculadora sin dependencia</h2>
        <p>
          Introduce el ejercicio solo después de intentarlo en papel. Compara resultado y pasos: cada
          línea debe nombrar una regla que tú reconozcas. Lee el tutorial en{" "}
          <Link href="/como-funciona" className="text-violet-600 font-semibold hover:underline">
            cómo funciona
          </Link>{" "}
          para entender notación (paréntesis, sin vs sin⁻¹, radianes).
        </p>
        <p>
          Si el motor muestra un paso que no entiendes, vuelve al artículo correspondiente del blog en
          lugar de copiar el final. El objetivo es automatizar el razonamiento, no el número.
        </p>
      </section>

      <section>
        <h2 id="faq">Preguntas de quien empieza</h2>
        <h3 id="faq-dificil">¿Por qué me parece difícil?</h3>
        <p>
          Es normal: combina álgebra, límites y nuevas reglas. La dificultad baja cuando separas
          «identificar estructura» de «aplicar fórmula». Pregúntate siempre: ¿es potencia, producto,
          cociente o composición?
        </p>
        <h3 id="faq-memoria">¿Debo memorizar todo?</h3>
        <p>
          Memoriza el núcleo (potencias, sin, cos, e^x, ln x) y deriva el resto con reglas. La tabla en
          /reglas es tu referencia, no un examen de memoria pura.
        </p>
        <h3 id="faq-tiempo">¿Cuánto tiempo practicar?</h3>
        <p>
          Treinta a cuarenta minutos diarios, cuatro días por semana, suelen bastar si son sesiones
          enfocadas. La constancia supera a las maratones esporádicas antes del parcial.
        </p>
      </section>

      <section>
        <h2 id="motivacion">Motivación: por qué vale la pena el esfuerzo</h2>
        <p>
          Las derivadas son la base del análisis de funciones: máximos, mínimos, concavidad, puntos de
          inflexión y aproximaciones lineales. Sin f′, no hay criterios de la primera derivada ni
          interpretación correcta de gráficas en física. Invertir unas semanas en fundamentos sólidos
          reduce el estrés de exámenes parciales y de cursos que asumen cálculo diferencial (economía,
          biología cuantitativa, machine learning básico).
        </p>
        <p>
          No se trata de «ser bueno en matemáticas» sino de construir un procedimiento repetible:
          leer la estructura, elegir regla, ejecutar con cuidado, verificar. Ese procedimiento es lo que
          separa a quien memoriza fórmulas de quien resuelve problemas nuevos.
        </p>
      </section>

      <section>
        <h2 id="siguiente">Tu siguiente lectura</h2>
        <p>
          Lleva un cuaderno de «errores propios»: cada vez que la calculadora marque diferencia con tu
          resultado, anota si fue signo, cadena, cociente o álgebra previa. En pocas semanas verás un
          patrón personal que orienta qué artículo del blog repasar. Esa metacognición acelera más que
          resolver diez ejercicios idénticos sin reflexión.
        </p>
        <p>
          Si estudias en español pero tu libro está en inglés, alinea vocabulario (quotient rule, chain
          rule) con nuestras páginas en español para no mezclar términos en exámenes escritos en tu
          idioma. La sección de reglas y los ejemplos de la web están pensados como referencia rápida
          bilingüe en la práctica, aunque el contenido principal sea español.
        </p>
        <p>
          Cuando domines polinomios y las reglas básicas, avanza en este orden sugerido: regla de la
          cadena → fracciones y cociente → trigonométricas (sin, cos, tan) → implícitas. Todo está
          interconectado en el{" "}
          <Link href="/blog" className="text-violet-600 font-semibold hover:underline">
            blog
          </Link>
          . Vuelve a esta página cuando necesites reorientar tu estudio.
        </p>
        <CalcCTA />
      </section>
    </ArticleWrap>
  );
}
