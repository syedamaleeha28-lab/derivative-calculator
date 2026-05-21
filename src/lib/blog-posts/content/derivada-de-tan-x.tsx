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

export function DerivadaDeTanXContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Derivada de tan(x): definición y contexto</h2>
        <p>
          La derivada de tan x se obtiene a partir de sin x y cos x, porque tan(x)=sin(x)/cos(x). El
          resultado clásico es sec²(x), equivalente a 1/cos²(x). Este artículo cubre la demostración
          práctica, composiciones y ejercicios para estudiantes de cálculo diferencial.
        </p>
        <p>
          Si ya conoces la{" "}
          <Link href="/blog/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            derivada de sin(x)
          </Link>{" "}
          y la{" "}
          <Link href="/blog/derivada-de-cos-x" className="text-violet-600 font-semibold hover:underline">
            derivada de cos(x)
          </Link>
          , tan(x) será un paso natural dentro de las derivadas trigonométricas.
        </p>
      </section>

      <section>
        <h2 id="formula">Fórmulas equivalentes</h2>
        <FormulaCard title="Derivada de tangente">
          {renderMath("\\dfrac{d}{dx}\\tan(x) = \\sec^2(x) = \\dfrac{1}{\\cos^2(x)}", true)}
        </FormulaCard>
        <p>
          También puedes escribir sec²(x) como 1+tan²(x) en identidades. Estas formas son útiles al
          simplificar expresiones largas en derivadas resueltas.
        </p>
      </section>

      <section>
        <h2 id="demostracion">Demostración con cociente</h2>
        <p>
          Aplica la regla del cociente a sin(x)/cos(x): el numerador deriva a cos(x), el denominador a
          −sin(x), y tras simplificar obtienes sec²(x). Este razonamiento refuerza por qué las reglas de
          derivación deben elegirse según la estructura.
        </p>
        <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
          Ver reglas de derivación completas →
        </Link>
      </section>

      <section>
        <h2 id="cadena">Derivada de tan(g(x))</h2>
        <FormulaCard title="Regla de la cadena">
          {renderMath("\\dfrac{d}{dx}\\tan(g(x)) = \\sec^2(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
        <ExampleCard title="Ejemplo: tan(5x)">
          {renderMath("\\dfrac{d}{dx}\\tan(5x) = 5\\sec^2(5x)", true)}
        </ExampleCard>
        <p>
          Más práctica en{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena: ejercicios resueltos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="ln-tan">Relación con logaritmos</h2>
        <p>
          A veces aparece ln|tan x| en integrales; al derivar, recuperas expresiones con sec² o tangente.
          Mantén coherencia con identidades trigonométricas al estudiar cálculo avanzado.
        </p>
        <p>
          Si derivas ln|tan x| en un intervalo donde tan x &gt; 0, obtienes cot(x) usando la cadena y tan′=sec².
          Ese ejercicio conecta derivadas trigonométricas con logaritmos naturales y aparece en listas de
          repaso antes de integrales. Hazlo a mano una vez y comprueba con la calculadora del sitio para ver
          el mismo factor sec²/cot en la salida intermedia.
        </p>
      </section>

      <section>
        <h2 id="cot-sec">Cotangente y secante como vecinas de tan</h2>
        <p>
          Aunque el foco es tan(x), en exámenes aparecen cot(x)=cos/sin y sec(x)=1/cos. Sus derivadas son
          −csc²(x) y sec(x)tan(x). Si partes de tan=sin/cos, puedes recuperar esas fórmulas con el mismo
          método de cociente, reforzando que no hace falta memorizar seis resultados aislados sin conexión.
        </p>
        <p>
          Cuando simplifiques sec²(3x)·3, no conviertas todo a tan salvo que el siguiente paso del problema
          lo exija. Mantener sec² suele ser más directo en composiciones de tangente.
        </p>
      </section>

      <section>
        <h2 id="resolver-online">Resolver derivadas online</h2>
        <p>
          Teclea tan(x), tan(2*x) o sin(x)/cos(x) en la calculadora de derivadas con pasos. Compara el
          resultado con tu desarrollo manual para afianzar derivadas fáciles y avanzadas.
        </p>
        <CalcCTA />
      </section>

      <section>
        <h2 id="errores">Errores a evitar</h2>
        <WarningCard>
          No confundas (tan x)′ con tan(x²). En tan(x²) necesitas sec²(x²)·2x.
        </WarningCard>
        <p className="mt-4">
          Revisa{" "}
          <Link href="/blog/errores-comunes-al-derivar" className="text-violet-600 font-semibold hover:underline">
            errores comunes al derivar
          </Link>{" "}
          antes de un parcial.
        </p>
      </section>

      <section>
        <h2 id="demostracion-detallada">Demostración paso a paso con la regla del cociente</h2>
        <p>
          Partimos de tan(x)=sin(x)/cos(x). Sea u=sin(x) y v=cos(x). La regla del cociente dice
          (u/v)′=(u′v−uv′)/v². Sustituimos las derivadas conocidas del seno y el coseno.
        </p>
        <ExampleCard
          title="Cociente sin/cos → sec²(x)"
          steps={[
            "u=sin(x), u′=cos(x); v=cos(x), v′=−sin(x).",
            "Numerador de la regla: u′v − uv′ = cos(x)·cos(x) − sin(x)·(−sin(x)).",
            "Expandir: cos²x + sin²x = 1.",
            "Denominador: v² = cos²x. Resultado: 1/cos²x = sec²(x).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\tan x = \\dfrac{1}{\\cos^2 x} = \\sec^2 x", true)}
        </ExampleCard>
        <p>
          Este desarrollo es el que más conviene reproducir en un examen si te piden «demostrar» la
          derivada de tan x. Refuerza que las{" "}
          <Link href="/reglas" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          se eligen según cómo está escrita la función, no según su nombre.
        </p>
      </section>

      <section>
        <h2 id="identidades">Identidades entre sec, tan y cos</h2>
        <p>
          La forma sec²(x) es la más compacta para derivar composiciones tan(g(x)). En simplificaciones
          largas suele aparecer 1+tan²(x), porque es la identidad pitagórica 1+tan²θ=sec²θ.
        </p>
        <FormulaCard title="Identidades útiles al derivar">
          {renderMath("1 + \\tan^2 x = \\sec^2 x = \\dfrac{1}{\\cos^2 x}", true)}
        </FormulaCard>
        <p>
          Si obtienes un resultado equivalente a −sin(x)/cos²(x) tras un cociente, no dudes: es la misma
          expresión que sec²(x) multiplicada por factores según el contexto. Al integrar o derivar cadenas
          más largas, elegir entre tan y sec depende de qué forma simplifique mejor el siguiente paso.
        </p>
        <TipCard>
          Escribe sec(x) como 1/cos(x) solo si te ayuda a ver un factor común; en derivadas directas de
          tan(g(x)), mantén sec²(g(x))·g′(x).
        </TipCard>
      </section>

      <section>
        <h2 id="ejemplos-cadena">Ejemplos: tan(x²) y sin(x)/cos(x)</h2>
        <h3 id="tan-x2">Derivada de tan(x²)</h3>
        <p>
          El argumento de la tangente no es x sino x². La capa externa es tan, la interna es g(x)=x² con
          g′(x)=2x.
        </p>
        <ExampleCard
          title="tan(x²) con regla de la cadena"
          steps={[
            "f(u)=tan(u), f′(u)=sec²(u).",
            "u=x², u′=2x.",
            "Producto: sec²(x²)·2x.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\tan(x^2) = 2x\\,\\sec^2(x^2)", true)}
        </ExampleCard>
        <h3 id="sin-sobre-cos">Derivar sin(x)/cos(x) otra vez</h3>
        <p>
          Aunque sin/cos es la definición de tan(x), derivar el cociente explícitamente es un buen
          entrenamiento. Coincide con sec²(x); si tu resultado difiere, revisa el signo en u′v−uv′.
        </p>
        <ExampleCard title="sin(x)/cos(x)">
          {renderMath("\\dfrac{d}{dx}\\dfrac{\\sin x}{\\cos x} = \\sec^2 x", true)}
        </ExampleCard>
        <p>
          Para práctica adicional de composiciones, visita{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            regla de la cadena: ejercicios resueltos
          </Link>{" "}
          y la galería en{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="dominio">Dominio y discontinuidades</h2>
        <p>
          La derivada sec²(x) existe donde tan(x) es derivable: es decir, donde cos(x)≠0. En la práctica,
          hay asíntotas verticales en x=π/2+kπ (k entero). La derivada «explota» cerca de esos puntos
          porque la pendiente de tan(x) se vuelve arbitrariamente grande.
        </p>
        <WarningCard>
          No evalúes sec²(x) en puntos donde cos(x)=0: la tangente no es diferenciable ahí aunque la
          fórmula simbólica parezca definida.
        </WarningCard>
        <p className="mt-4">
          En tan(5x) el periodo se comprime; las discontinuidades aparecen más seguidas. Al graficar,
          marca primero dónde cos(5x)=0 y solo después sustituye en sec²(5x)·5.
        </p>
      </section>

      <section>
        <h2 id="comparacion-trig">Comparación con sin y cos</h2>
        <p>
          Mientras sin y cos permanecen acotadas entre −1 y 1, la derivada de tan x puede crecer sin límite
          cerca de las asíntotas. Por eso tan es útil para modelar pendientes muy pronunciadas en tramos
          cortos, pero exige cuidado al interpretar resultados numéricos.
        </p>
        <p>
          Si ya dominas d/dx sin(x)=cos(x) y d/dx cos(x)=−sin(x), la demostración de tan′ como cociente es
          repaso activo: refuerza identidades pitagóricas y simplificación algebraica. Repite el cociente sin
          mirar la tabla al menos una vez antes del examen.
        </p>
        <ExampleCard title="tan(x³) — cadena con potencia">
          {renderMath("\\dfrac{d}{dx}\\tan(x^3) = 3x^2\\sec^2(x^3)", true)}
        </ExampleCard>
        <p>
          En problemas tipo «velocidad angular» a veces aparece tan(ωt): la derivada respecto a t es
          ω·sec²(ωt). Identifica siempre la variable respecto a la cual derivas antes de aplicar la cadena.
        </p>
      </section>

      <section>
        <h2 id="aplicaciones">Aplicaciones y modelado</h2>
        <p>
          En problemas de razón relacionada a veces aparece tan(θ) cuando θ es un ángulo que cambia con el
          tiempo. Derivar respecto a t implica sec²(θ)·θ′(t). Identificar la variable independiente (tiempo
          frente a x) evita mezclar notaciones en el mismo desarrollo.
        </p>
        <p>
          En integración futura, reconocer sec² como derivada de tan facilita antiderivadas. Estudiar tan y
          sec juntas en la misma sesión crea un bloque coherente dentro de las derivadas trigonométricas.
        </p>
      </section>

      <section>
        <h2 id="plan-estudio">Plan de estudio de una semana</h2>
        <p>
          <strong>Día 1:</strong> repasa sin y cos, luego demuestra tan′=sec² con cociente.{" "}
          <strong>Día 2:</strong> memoriza tan(g(x))→sec²(g)·g′ y resuelve tan(3x), tan(√x).{" "}
          <strong>Día 3:</strong> identidades 1+tan²=sec² y simplificación de resultados equivalentes.
        </p>
        <p>
          <strong>Día 4:</strong> ejercicios mixtos en{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos resueltos
          </Link>
          ; incluye al menos dos con argumento cuadrático. <strong>Día 5:</strong> simulacro y
          verificación en la{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora diferencial
          </Link>
          . Si vienes de cero, enlaza con{" "}
          <Link href="/blog/derivadas-para-principiantes" className="text-violet-600 font-semibold hover:underline">
            derivadas para principiantes
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="faq">Preguntas frecuentes sobre tan(x)</h2>
        <h3>¿sec²(x) es lo mismo que 1+tan²(x)?</h3>
        <p>
          Sí, por la identidad pitagórica. En derivaciones largas puedes reescribir el resultado en la forma
          que simplifique el siguiente paso. No es obligatorio convertir todo a tan si sec² ya está factorizado.
        </p>
        <h3>¿Puedo derivar tan x como (sin x)′/(cos x) sin cociente?</h3>
        <p>
          No directamente: necesitas la regla del cociente o reconocer tan′ memorizada. Intentar «derivar
          arriba y abajo por separado» sin la fórmula correcta lleva a expresiones falsas.
        </p>
        <h3>¿Qué pasa con tan(1/x)?</h3>
        <p>
          g(x)=1/x, g′(x)=−1/x². Resultado: sec²(1/x)·(−1/x²). Practica este tipo en{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            ejercicios de cadena
          </Link>{" "}
          antes del parcial.
        </p>
        <h3>¿Cómo estudiar con la calculadora?</h3>
        <p>
          Introduce tan(x), sin(x)/cos(x) y tan(x^2) por separado y compara. Si los tres coinciden en la
          herramienta, tu álgebra de simplificación es consistente. Repite el procedimiento con la calculadora
          apagada y solo al final contrasta pasos.
        </p>
      </section>

      <section>
        <h2 id="repaso-final">Repaso final antes del examen</h2>
        <p>
          Cierra la sesión escribiendo de memoria: definición de tan, derivada sec², fórmula de cadena para
          tan(g(x)), y un ejemplo de cociente sin/cos. Añade un ejercicio con discontinuidad (cerca de π/2)
          para recordar el dominio. Ese bloque de quince minutos suele rendir más que leer pasivamente otra
          vez la tabla completa.
        </p>
        <p>
          Como lista mínima para dominar el tema: (1) demuestra sec² con cociente; (2) deriva tan(2x) y
          tan(x²); (3) reescribe un resultado en forma 1+tan² si simplifica; (4) explica en una frase por qué
          tan no es derivable en x=π/2. Completa la lista con la calculadora y con al menos cinco ítems de{" "}
          <Link href="/ejemplos" className="text-violet-600 font-semibold hover:underline">
            ejemplos resueltos
          </Link>
          .
        </p>
        <p>
          Si tu curso incluye derivadas de funciones inversas más adelante, recordar tan′ ahora te ahorra
          tiempo con arctan. Por ahora basta con reconocer que muchos límites y aproximaciones en cálculo
          usan tangente cerca de cero, donde tan x ≈ x y la derivada ≈ 1; lejos de cero debes usar sec² tal
          cual en la expresión final del ejercicio.
        </p>
        <p>
          Resumen en una línea: tan=sin/cos, su derivada es sec², y cada composición tan(g(x)) aporta el
          factor g′(x) que no debes olvidar bajo ningún concepto en el parcial escrito.
        </p>
        <p>
          Guarda este artículo junto a sin y cos: las tres derivadas trig básicas se estudian mejor en bloque.
        </p>
      </section>

      <InternalLinksBlock
        links={[
          { href: "/blog/derivada-de-cos-x", label: "Derivada de cos(x)", desc: "Base del cociente sin/cos" },
          { href: "/blog/entendiendo-regla-de-la-cadena", label: "Regla de la cadena", desc: "tan(g(x)) y composiciones" },
          { href: "/reglas", label: "Reglas de derivación", desc: "Tabla trig y algebraicas" },
          { href: "/#calculator", label: "Calculadora de derivadas", desc: "Pasos detallados en español" },
        ]}
      />
    </ArticleWrap>
  );
}
