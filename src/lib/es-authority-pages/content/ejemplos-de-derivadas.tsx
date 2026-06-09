import {
  ArticleWrap,
  AuthorityClusterBlock,
  CalcCTA,
  ExampleCard,
  TipCard,
  WarningCard,
  RelatedCalculatorsBlock,
  renderMath,
  Link,
  ES_MAIN_CALCULATOR_HREF,
  ES_CALCULATOR_ROUTES,
  ES_AUTHORITY_ROUTES,
  ROUTES,
  EN_ROUTES,
} from "../helpers";

export function EjemplosDeDerivadasContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Ejemplos de derivadas de principiante a avanzado</h2>
        <p>
          Leer reglas no basta: necesitas ejemplos de derivadas resueltos con dificultad creciente. Esta galería
          organiza problemas en niveles básico, intermedio y avanzado, explica qué regla destaca cada ejercicio y
          termina con preguntas de práctica que puedes intentar antes de revelar la estrategia. Usa la{" "}
          <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas con pasos
          </Link>{" "}
          para verificar el álgebra y ten abierta la guía de{" "}
          <Link href={ES_AUTHORITY_ROUTES.reglasDeDerivacion} className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          como referencia. Versión en inglés:{" "}
          <Link href={EN_ROUTES.derivativeExamples} className="text-violet-600 font-semibold hover:underline">
            derivative examples
          </Link>
          .
        </p>
        <p>
          La práctica efectiva consiste en nombrar la regla en voz alta antes de escribir: «esto es un producto»,
          «aquí hace falta la cadena dos veces», «cociente tras simplificar». Ese hábito se transfiere directamente a
          exámenes con tiempo limitado.
        </p>
      </section>

      <section>
        <h2 id="basico">Ejemplos básicos: potencia y linealidad</h2>
        <p>
          Empieza con polinomios y raíces simples. Aún no intervienen producto, cociente ni cadena: solo linealidad y
          regla de la potencia.
        </p>
        <ExampleCard
          title="Básico 1: f(x) = 5x⁴ − 3x + 2"
          steps={[
            "Deriva término a término.",
            "5·4x³ = 20x³; derivada de −3x es −3; la constante 2 da 0.",
            "f′(x) = 20x³ − 3.",
          ]}
        />
        <ExampleCard
          title="Básico 2: f(x) = √x = x^(1/2)"
          steps={[
            "Regla de la potencia con n = 1/2.",
            "f′(x) = (1/2)x^(−1/2) = 1/(2√x) para x > 0.",
          ]}
        />
        <ExampleCard
          title="Básico 3: f(x) = 1/x² = x^(−2)"
          steps={["n = −2: f′(x) = −2x^(−3) = −2/x³.", "Dominio x ≠ 0."]}
        />
        <p>
          Cuando estos salgan automáticos, añade trigonométricas básicas desde el blog:{" "}
          <Link href="/blog/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
            derivada de sin x
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="intermedio">Ejemplos intermedios: producto, cociente y cadena</h2>
        <ExampleCard
          title="Intermedio 1: x²·e^x"
          steps={[
            "Regla del producto: u = x², v = e^x.",
            "u′ = 2x, v′ = e^x.",
            "f′ = 2x·e^x + x²·e^x = e^x(2x + x²).",
          ]}
        />
        <ExampleCard
          title="Intermedio 2: (x² + 1)/(x − 1)"
          steps={[
            "Cociente con u = x²+1, v = x−1.",
            "u′ = 2x, v′ = 1.",
            "Numerador: 2x(x−1) − (x²+1)·1 = x² − 2x − 1.",
            "f′ = (x² − 2x − 1)/(x − 1)².",
          ]}
        />
        <ExampleCard
          title="Intermedio 3: sin(x²)"
          steps={[
            "Cadena: exterior cos(·), interior x².",
            "f′(x) = cos(x²)·2x = 2x cos(x²).",
          ]}
        />
        <p>
          Compara con la{" "}
          <Link href={ES_CALCULATOR_ROUTES.chainRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla de la cadena
          </Link>{" "}
          si el factor 2x te genera dudas.
        </p>
      </section>

      <section>
        <h2 id="combinadas">Reglas combinadas en un solo problema</h2>
        <ExampleCard
          title="Avanzado 1: x·sin(2x)"
          steps={[
            "Producto: u = x, v = sin(2x).",
            "u′ = 1; v′ = cos(2x)·2 por cadena.",
            "f′ = sin(2x) + 2x cos(2x).",
          ]}
        />
        <ExampleCard
          title="Avanzado 2: e^(x²)·ln(x)"
          steps={[
            "Producto con u = e^(x²), v = ln x.",
            "u′ = 2x e^(x²); v′ = 1/x.",
            "f′ = 2x e^(x²) ln x + e^(x²)/x.",
          ]}
        />
        <WarningCard>
          En productos con cadena dentro, deriva cada factor por separado antes de sumar. Mezclar pasos suele
          producir términos faltantes o signos incorrectos.
        </WarningCard>
      </section>

      <section>
        <h2 id="racionales">Funciones racionales y simplificación</h2>
        <p>
          Antes del cociente, intenta dividir o factorizar. f(x) = (x³ − 1)/(x − 1) para x ≠ 1 simplifica a x² + x +
          1, cuya derivada es 2x + 1. El cociente daría el mismo resultado con más álgebra.
        </p>
        <ExampleCard
          title="Cociente tras factorizar"
          steps={[
            "x³ − 1 = (x−1)(x²+x+1).",
            "Cancelar (x−1) en dominio adecuado.",
            "Derivar 2x + 1 directamente.",
          ]}
        />
        <p>
          Más técnicas en{" "}
          <Link href="/blog/como-derivar-fracciones" className="text-violet-600 font-semibold hover:underline">
            cómo derivar fracciones
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="implicitos">Ejemplos con derivación implícita</h2>
        <ExampleCard
          title="Círculo x² + y² = 25"
          steps={[
            "Derivar ambos lados respecto a x.",
            "2x + 2y·dy/dx = 0.",
            "Despejar: dy/dx = −x/y.",
          ]}
        />
        <p>
          La{" "}
          <Link href={ES_CALCULATOR_ROUTES.implicitDerivatives} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas implícitas
          </Link>{" "}
          y la guía{" "}
          <Link href="/blog/derivadas-implicitas-paso-a-paso" className="text-violet-600 font-semibold hover:underline">
            derivadas implícitas paso a paso
          </Link>{" "}
          amplían esta técnica.
        </p>
      </section>

      <section>
        <h2 id="parciales">Ejemplo de derivada parcial</h2>
        <ExampleCard
          title="f(x,y) = x²y + sin(y)"
          steps={[
            "∂f/∂x: y es constante respecto a x → 2xy.",
            "∂f/∂y: x² + cos(y).",
          ]}
        />
        <p>
          Usa la{" "}
          <Link href={ES_CALCULATOR_ROUTES.partialDerivatives} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas parciales
          </Link>{" "}
          para verificar ∂/∂x y ∂/∂y.
        </p>
      </section>

      <section>
        <h2 id="practica-guiada">Preguntas para practicar (con pistas)</h2>
        <p>
          Intenta cada problema antes de mirar la pista. Luego comprueba en la calculadora.
        </p>
        <ol className="list-decimal pl-6 space-y-4 my-6">
          <li>
            <strong>ln(x³ + 1)</strong> — Pista: cadena con interior cúbico. Solución: 3x²/(x³+1).
          </li>
          <li>
            <strong>tan(x)·cos(x)</strong> — Pista: producto; o simplifica a sin x primero.
          </li>
          <li>
            <strong>(2x+1)^5</strong> — Pista: cadena con potencia; resultado 10(2x+1)^4.
          </li>
          <li>
            <strong>x² ln x</strong> — Pista: producto clásico.
          </li>
          <li>
            <strong>1/(x²+1)</strong> — Pista: reescribe como (x²+1)^(−1) o usa cociente.
          </li>
        </ol>
        <TipCard>
          Reserva quince minutos diarios para tres problemas de niveles distintos. La constancia supera sesiones
          maratónicas esporádicas.
        </TipCard>
      </section>

      <section>
        <h2 id="errores">Errores que aparecen en estos ejemplos</h2>
        <p>
          Olvidar el factor interno en cadena, perder el signo menos en (cos x)′, y aplicar potencia a un producto
          son los tres fallos más vistos. El artículo{" "}
          <Link href="/blog/errores-comunes-al-derivar" className="text-violet-600 font-semibold hover:underline">
            errores comunes al derivar
          </Link>{" "}
          los analiza con más detalle.
        </p>
        <p>
          Cuando tu resultado difiere de la calculadora, localiza la primera línea de desacuerdo: ahí está la regla
          mal identificada. Corrige el método, no solo el número final.
        </p>
      </section>

      <section>
        <h2 id="ruta-estudio">Ruta de estudio recomendada</h2>
        <p>
          Semana 1: solo potencia y linealidad (sección básica). Semana 2: producto y cociente con dos ejemplos al
          día. Semana 3: cadena en composiciones puras. Semana 4: mezcla aleatoria y repaso con la{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>
          . Cierra cada semana con problemas de{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejercicios de derivadas
          </Link>{" "}
          sin mirar la solución hasta intentarlo.
        </p>
        <p>
          La página clásica{" "}
          <Link href={ROUTES.ejemplos} className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas
          </Link>{" "}
          y el blog{" "}
          <Link href="/blog/ejemplos-de-derivadas-resueltas" className="text-violet-600 font-semibold hover:underline">
            ejemplos resueltos ampliados
          </Link>{" "}
          complementan esta guía con más variedad.
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <AuthorityClusterBlock exclude={ES_AUTHORITY_ROUTES.ejemplosDeDerivadas} />
    </ArticleWrap>
  );
}
