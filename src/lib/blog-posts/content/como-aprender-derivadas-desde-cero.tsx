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

export function ComoAprenderDerivadasDesdeCeroContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Introducción al cálculo diferencial</h2>
        <p>
          Aprender derivadas desde cero exige paciencia: primero el concepto de límite y tasa de cambio,
          después las reglas operativas. Esta guía te orienta en español y enlaza con nuestra{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas con pasos
          </Link>{" "}
          para practicar derivadas online.
        </p>
        <p>
          Si buscas derivadas para principiantes sin saltos bruscos, sigue el orden de estudio de la
          sección siguiente antes de abordar derivadas avanzadas.
        </p>
      </section>

      <section>
        <h2 id="definicion">Definición formal de derivada</h2>
        <FormulaCard title="Límite del cociente incremental">
          {renderMath("f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h)-f(x)}{h}", true)}
        </FormulaCard>
        <p>
          La derivada mide el cambio instantáneo. Geometricamente es la pendiente de la tangente. Conecta
          esta idea con la práctica en{" "}
          <Link href="/como-funciona" className="text-violet-600 font-semibold hover:underline">
            cómo funciona la calculadora
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="ruta">Ruta de estudio recomendada</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Derivadas de potencias y constantes.</li>
          <li>
            <Link href="/derivada-de-sin-x" className="text-violet-600 font-semibold hover:underline">
              Derivadas trigonométricas
            </Link>
            .
          </li>
          <li>
            <Link href="/reglas-de-derivacion" className="text-violet-600 font-semibold hover:underline">
              Reglas de derivación
            </Link>
            : producto, cociente, cadena.
          </li>
          <li>
            <Link href="/ejemplos-de-derivadas" className="text-violet-600 font-semibold hover:underline">
              Ejemplos resueltos
            </Link>
            .
          </li>
        </ol>
        <TipCard>
          Dedica al menos tres sesiones semanales de 40 minutos: teoría breve, ejercicios manuales,
          verificación con calculadora.
        </TipCard>
      </section>

      <section>
        <h2 id="practica">Práctica con herramientas online</h2>
        <p>
          Resolver derivadas online no sustituye el estudio manual, pero acelera la corrección. Revisa
          siempre el desglose paso a paso y anota en qué regla te equivocaste.
        </p>
        <CalcCTA />
      </section>

      <section>
        <h2 id="materiales">Materiales que debes tener a mano</h2>
        <p>
          Un cuaderno solo para derivadas, la tabla de{" "}
          <Link href="/reglas-de-derivacion" className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>
          , y acceso a la calculadora de derivadas online. Evita dispersarte en videos sin practicar:
          cada concepto necesita al menos cinco ejercicios manuales antes de pasar al siguiente.
        </p>
        <h3 id="libros">Libros y apuntes</h3>
        <p>
          Cualquier libro estándar de cálculo diferencial en español cubre el mismo núcleo. Prioriza
          entender definiciones y no solo memorizar fórmulas. Subraya cuándo el autor invoca la regla de
          la cadena: es el puente entre derivadas fáciles y derivadas universitarias.
        </p>
      </section>

      <section>
        <h2 id="primeros-ejercicios">Tus primeros cinco ejercicios</h2>
        <ExampleCard
          title="Secuencia sugerida"
          steps={[
            "Deriva f(x)=5 (constante → 0).",
            "Deriva f(x)=x³ (regla de la potencia).",
            "Deriva f(x)=3x²+2x (linealidad).",
            "Deriva f(x)=sin(x) (trigonométrica).",
            "Deriva f(x)=(2x+1)⁴ (regla de la cadena).",
          ]}
        >
          <p>
            Tras cada uno, verifica en la calculadora. Si el resultado coincide pero tus pasos no, revisa
            la lógica antes de continuar.
          </p>
        </ExampleCard>
      </section>

      <section>
        <h2 id="errores-inicio">Errores al empezar desde cero</h2>
        <WarningCard>
          Saltar límites y memorizar tablas sin practicar lleva a fallar en composiciones y en
          derivadas implícitas más adelante.
        </WarningCard>
        <p>
          Otro error es usar solo la calculadora diferencial sin escribir el procedimiento. El objetivo
          es entender las derivadas explicadas paso a paso, no obtener un número para entregar.
        </p>
      </section>

      <section>
        <h2 id="semanas">Plan de cuatro semanas</h2>
        <p>
          Semana 1: límites y definición. Semana 2: potencias y polinomios. Semana 3: trigonométricas y
          regla de la cadena. Semana 4: producto, cociente y repaso con{" "}
          <Link href="/ejemplos-de-derivadas" className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas resueltas
          </Link>
          . Ajusta el ritmo si tu curso avanza más rápido, pero no omitas la cadena.
        </p>
      </section>

      <section>
        <h2 id="siguiente">Siguiente paso</h2>
        <p>
          Continúa con{" "}
          <Link href="/blog/derivadas-para-principiantes" className="text-violet-600 font-semibold hover:underline">
            derivadas para principiantes
          </Link>
          , la{" "}
          <Link href="/blog/entendiendo-regla-de-la-cadena" className="text-violet-600 font-semibold hover:underline">
            guía de regla de la cadena
          </Link>{" "}
          o los{" "}
          <Link href="/blog/regla-de-la-cadena-ejercicios" className="text-violet-600 font-semibold hover:underline">
            ejercicios de la cadena
          </Link>
          .
        </p>
      </section>

      <InternalLinksBlock
        links={[
          { href: "/blog/derivadas-para-principiantes", label: "Derivadas para principiantes", desc: "Ruta ampliada" },
          { href: "/derivada-de-sin-x", label: "Derivada de sin(x)", desc: "Trigonometría básica" },
          { href: "/ejemplos-de-derivadas", label: "Ejemplos del sitio", desc: "Práctica guiada" },
          { href: "/#calculator", label: "Calculadora con pasos", desc: "Resolver derivadas online" },
        ]}
      />
    </ArticleWrap>
  );
}
