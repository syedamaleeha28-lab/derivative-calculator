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

export function DerivadasParcialesEjemplosContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="introduccion">Introducción a las derivadas parciales</h2>
        <p>
          Cuando una función depende de más de una variable —por ejemplo temperatura en función de posición y
          tiempo— la derivada «total» deja de ser una sola. Las derivadas parciales miden el cambio de la
          función al variar una variable mientras las demás permanecen fijas. Este artículo reúne ejemplos
          resueltos, notación estándar y consejos para contrastar resultados con una{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas
          </Link>{" "}
          en los casos donde la expresión se puede tratar variable a variable.
        </p>
        <p>
          Si dominas derivadas en una variable, el salto conceptual es pequeño: las mismas reglas de potencia,
          producto y cadena aplican, pero con la etiqueta «respecto a x» o «respecto a y». Los ejercicios de
          derivadas parciales aparecen en cálculo multivariable, economía (funciones de producción) y física
          (campos escalares).
        </p>
        <p>
          Antes de avanzar, repasa reglas básicas en{" "}
          <Link href="/reglas-de-derivacion" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          y la galería de{" "}
          <Link href="/ejemplos-de-derivadas" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas resueltas
          </Link>{" "}
          para una variable; luego vuelve aquí con la notación parcial.
        </p>
      </section>

      <section>
        <h2 id="notacion">Notación y regla mental</h2>
        <FormulaCard title="Símbolos habituales">
          {renderMath(
            "\\dfrac{\\partial f}{\\partial x},\\quad f_x,\\quad D_x f \\qquad\\text{(las otras variables constantes)}",
            true
          )}
        </FormulaCard>
        <p>
          Al calcular {renderMath("\\partial f/\\partial x")}, trata {renderMath("y")}, {renderMath("z")} y
          cualquier otra letra (salvo x) como constantes numéricas. Eso significa que {renderMath("3xy")} deriva
          en x como {renderMath("3y")} (porque y es constante respecto a x), mientras que al derivar respecto a y
          obtienes {renderMath("3x")}.
        </p>
        <TipCard>
          Escribe en el margen «¿qué variable se mueve?» antes de derivar. Confundir x e y es el error número
          uno en derivadas parciales, incluso con calculadora de derivadas si eliges la variable incorrecta.
        </TipCard>
      </section>

      <section>
        <h2 id="polinomios">Ejemplos 1–2: polinomios en dos variables</h2>

        <h3 id="ejemplo-pol-1">Polinomio mixto</h3>
        <ExampleCard
          title="f(x,y) = x²y + 3y² − 4x"
          steps={[
            "∂f/∂x: deriva x²y como 2xy (y constante), 3y² desaparece, −4x da −4.",
            "∂f/∂x = 2xy − 4.",
            "∂f/∂y: x²y da x², 3y² da 6y, −4x desaparece.",
            "∂f/∂y = x² + 6y.",
          ]}
        >
          {renderMath(
            "f(x,y)=x^2y+3y^2-4x \\;\\Rightarrow\\; \\dfrac{\\partial f}{\\partial x}=2xy-4,\\; \\dfrac{\\partial f}{\\partial y}=x^2+6y",
            true
          )}
        </ExampleCard>
        <p>
          Observa cómo cada término «pregunta» si depende de la variable activa. Los ejercicios de derivadas en
          una variable preparan exactamente esta discriminación; aquí solo añades la etiqueta parcial.
        </p>

        <h3 id="ejemplo-pol-2">Potencia pura en cada variable</h3>
        <ExampleCard
          title="g(x,y) = x³ + y³ − 6xy"
          steps={[
            "∂g/∂x: 3x² de x³, 0 de y³, −6y de −6xy (y constante).",
            "∂g/∂x = 3x² − 6y.",
            "∂g/∂y: 0, 3y², −6x.",
            "∂g/∂y = 3y² − 6x.",
          ]}
        >
          {renderMath(
            "g(x,y)=x^3+y^3-6xy \\;\\Rightarrow\\; g_x=3x^2-6y,\\; g_y=3y^2-6x",
            true
          )}
        </ExampleCard>
      </section>

      <section>
        <h2 id="trigonometricas">Ejemplos 3–4: trigonometría y exponenciales</h2>

        <h3 id="ejemplo-trig">Seno de combinación lineal</h3>
        <p>
          Sea {renderMath("h(x,y)=\\sin(xy)")}. Aquí la cadena actúa dentro de la variable interna {renderMath("xy")}
          . Al derivar respecto a x, y es constante, así que la derivada interna de {renderMath("xy")} es y.
        </p>
        <ExampleCard
          title="h(x,y) = sin(xy)"
          steps={[
            "∂h/∂x: cos(xy) · ∂(xy)/∂x = cos(xy) · y.",
            "∂h/∂y: cos(xy) · x.",
            "Verifica que al fijar y=1 recuperas algo coherente con regla de la cadena univariable.",
          ]}
        >
          {renderMath(
            "\\dfrac{\\partial}{\\partial x}\\sin(xy)=y\\cos(xy),\\quad \\dfrac{\\partial}{\\partial y}\\sin(xy)=x\\cos(xy)",
            true
          )}
        </ExampleCard>
        <p>
          Enlaza con{" "}
          <Link href="/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            derivada de sin(x)
          </Link>{" "}
          y{" "}
          <Link href="/blog/entendiendo-regla-de-la-cadena" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena
          </Link>{" "}
          si la composición te resulta opaca.
        </p>

        <h3 id="ejemplo-exp">Exponencial separable</h3>
        <ExampleCard
          title="f(x,y) = e^{x} · e^{2y}"
          steps={[
            "Reescribe e^x · e^{2y} = e^{x+2y} si te ayuda la visión global.",
            "∂f/∂x: e^x permanece respecto a x, factor e^{2y} constante → e^x · e^{2y}.",
            "∂f/∂y: e^{2y} deriva a 2e^{2y}, multiplicado por e^x.",
            "∂f/∂y = 2 e^{x+2y}.",
          ]}
        >
          {renderMath(
            "f(x,y)=e^x e^{2y} \\;\\Rightarrow\\; f_x=e^x e^{2y},\\; f_y=2e^x e^{2y}",
            true
          )}
        </ExampleCard>
      </section>

      <section>
        <h2 id="cocientes">Ejemplo 5: cociente racional</h2>
        <p>
          Para {renderMath("f(x,y)=\\dfrac{x}{x+y}")}, muchos aplican la regla del cociente. Respecto a x, tanto
          numerador como denominador dependen de x; respecto a y, el numerador es constante.
        </p>
        <ExampleCard
          title="f(x,y) = x / (x + y)"
          steps={[
            "∂f/∂x con cociente: (1·(x+y) − x·1) / (x+y)² = y/(x+y)².",
            "∂f/∂y: numerador constante → −x/(x+y)².",
            "Comprueba signos sustituyendo valores simples.",
          ]}
        >
          {renderMath(
            "\\dfrac{\\partial f}{\\partial x}=\\dfrac{y}{(x+y)^2},\\quad \\dfrac{\\partial f}{\\partial y}=-\\dfrac{x}{(x+y)^2}",
            true
          )}
        </ExampleCard>
        <WarningCard>
          No uses la regla del cociente univariable «a ciegas» mezclando variables: pregunta siempre qué letra
          se deriva antes de elegir u y v.
        </WarningCard>
      </section>

      <section>
        <h2 id="segundas-parciales">Derivadas parciales de segundo orden</h2>
        <p>
          Derivar dos veces —primero respecto a x y luego otra vez respecto a x, o respecto a y— construye
          notaciones como {renderMath("f_{xx}")}, {renderMath("f_{xy}")}. En funciones suaves, el teorema de
          Schwarz garantiza que el orden no importa en cruces mixtas ({renderMath("f_{xy}=f_{yx}")} bajo
          hipótesis de continuidad).
        </p>
        <h3 id="ejemplo-segunda">Segunda parcial mixta</h3>
        <p>Con {renderMath("f(x,y)=x^2y + \\ln y")} (dominio y &gt; 0):</p>
        <ExampleCard
          title="f_xx y f_xy"
          steps={[
            "f_x = 2xy.",
            "f_xx = 2y.",
            "f_xy: deriva 2xy respecto a y → 2x.",
            "f_y = x² + 1/y; f_yy = −1/y² (para comparar).",
          ]}
        >
          {renderMath("f_{xx}=2y,\\quad f_{xy}=2x", true)}
        </ExampleCard>
      </section>

      <section>
        <h2 id="interpretacion">Interpretación: gradiente y pendientes</h2>
        <p>
          El vector {renderMath("\\nabla f = (f_x, f_y)")} apunta en la dirección de máximo crecimiento local.
          En optimización sin restricciones, los candidatos a extremos libres suelen satisfacer {renderMath("f_x=0")}
          y {renderMath("f_y=0")} simultáneamente. Resolver ese sistema es algebra, no magia: iguala cada parcial
          a cero y despeja.
        </p>
        <p>
          Geométricamente, {renderMath("f_x")} mide la pendiente de la superfre z = f(x,y) en la dirección del
          eje x, con y congelado. Visualizar «cortar» la superficie con un plano y = constante ayuda a conectar
          con derivadas paso a paso que ya conoces en una variable.
        </p>
      </section>

      <section>
        <h2 id="calculadora">Usar la calculadora de derivadas en problemas parciales</h2>
        <p>
          Muchas herramientas univariadas derivan respecto a x si escribes la expresión tratando otras letras
          como parámetros. Introduce {renderMath("x^2*y+3*y^2-4*x")} y confirma que coincide con{" "}
          {renderMath("2xy-4")}. Para y, cambia mentalmente los roles o usa la variable que la interfaz permita.
          La guía{" "}
          <Link href="/como-funciona" className="text-violet-600 font-semibold hover:underline">
            cómo funciona la calculadora
          </Link>{" "}
          detalla la sintaxis.
        </p>
        <p>
          La calculadora no reemplaza la decisión «¿respecto a quién derivo?», pero acelera la verificación
          algebraica después de que tú apliques la regla correcta.
        </p>
        <CalcCTA />
      </section>

      <section>
        <h2 id="errores-parciales">Errores típicos en derivadas parciales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Derivar respecto a x sin fijar y (tratar y como variable activa).</li>
          <li>Olvidar la cadena en sin(xy) o ln(xy).</li>
          <li>Aplicar regla del producto cuando el término es solo constante×variable.</li>
          <li>Confundir notación ∂ con derivada total d cuando hay dependencias entre variables.</li>
        </ul>
        <p className="mt-4">
          Errores generales de derivación en una variable:{" "}
          <Link href="/blog/errores-comunes-al-derivar" className="text-violet-600 font-semibold hover:underline">
            errores comunes al derivar
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="tres-variables">Ejemplo 6: tres variables (extensión natural)</h2>
        <p>
          En {renderMath("f(x,y,z)=xyz")}, la idea no cambia: al derivar respecto a x, tratas y y z como
          constantes. Obtienes {renderMath("f_x = yz")}. Respecto a y: {renderMath("f_y = xz")}. Respecto a z:{" "}
          {renderMath("f_z = xy")}. Los libros de cálculo multivariable suelen pedir también parciales de
          segundo orden; el procedimiento es iterar la misma disciplina de «¿qué letra se mueve ahora?».
        </p>
        <ExampleCard
          title="f(x,y,z) = xyz"
          steps={[
            "∂f/∂x: yz (y y z constantes).",
            "∂f/∂y: xz.",
            "∂f/∂z: xy.",
            "∇f = (yz, xz, xy) para repaso de gradiente en 3D.",
          ]}
        >
          {renderMath("f_x=yz,\\; f_y=xz,\\; f_z=xy", true)}
        </ExampleCard>
        <p>
          Si tu curso incluye restricciones (por ejemplo, y definido implícitamente en función de x), entonces
          entra la derivada total; no confundas ese capítulo con las parciales «puras» de este artículo.
        </p>
      </section>

      <section>
        <h2 id="practica">Plan de práctica recomendado</h2>
        <p>
          Resuelve cada día dos funciones nuevas: una polinómica y una con trigonometría o exponencial. Calcula
          ambas parciales primero a mano, luego valida. Alterna con la galería univariable en{" "}
          <Link href="/ejemplos-de-derivadas" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas resueltas: guía de práctica
          </Link>{" "}
          para no perder fluidez en reglas básicas.
        </p>
        <p>
          En exámenes tipo test, a veces comparan {renderMath("f_x(1,2)")} con opciones numéricas: sustituye
          siempre los valores después de derivar simbólicamente, no antes. Ese orden (derivar → sustituir) evita
          errores de álgebra apresurada.
        </p>
        <p>
          Palabras clave que suelen traer estudiantes aquí: «derivadas parciales ejemplos», «ejercicios de
          derivadas parciales resueltos», «cálculo multivariable derivadas» y «derivadas paso a paso». Este
          artículo cubre el núcleo; amplía con problemas de tu libro o apuntes de clase.
        </p>
        <h3 id="faq-parciales">Pregunta frecuente: ¿son «derivadas fáciles»?</h3>
        <p>
          Parecen fáciles porque reutilizan reglas de una variable, pero la dificultad está en la
          notación y en mantener constantes las variables correctas. Trátalas con el mismo rigor que los
          ejercicios de derivadas de la galería principal: procedimiento escrito, simplificación final y
          verificación con calculadora.
        </p>
      </section>
    </ArticleWrap>
  );
}
