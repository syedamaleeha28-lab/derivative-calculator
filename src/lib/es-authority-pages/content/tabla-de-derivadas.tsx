import {
  ArticleWrap,
  AuthorityClusterBlock,
  CalcCTA,
  FormulaCard,
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
import { ES_COMMON_FUNCTION_ROUTES } from "@/lib/common-derivative-functions/routes";

export function TablaDeDerivadasContent() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="intro">Tabla de derivadas: consulta rápida</h2>
        <p>
          Esta tabla de derivadas reúne las fórmulas más usadas en bachillerato y cálculo introductorio. Úsala para
          repasar antes de un examen, como chuleta de estudio (mejor si la reconstruyes de memoria) o como índice
          hacia guías más profundas del sitio. Cada fila enlaza conceptualmente con las{" "}
          <Link href={ES_AUTHORITY_ROUTES.reglasDeDerivacion} className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>{" "}
          y las{" "}
          <Link href={ES_AUTHORITY_ROUTES.formulasDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            fórmulas comentadas
          </Link>
          .
        </p>
        <p>
          Comprueba cualquier fila con la{" "}
          <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas
          </Link>
          . Versión en inglés:{" "}
          <Link href={EN_ROUTES.derivativeCheatSheet} className="text-violet-600 font-semibold hover:underline">
            derivative cheat sheet
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="reglas-fundamentales">Reglas fundamentales</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Regla</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">Fórmula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Constante</td>
                <td className="border border-slate-200 px-4 py-3">(c)′ = 0</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Potencia</td>
                <td className="border border-slate-200 px-4 py-3">(x^n)′ = n x^(n−1)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Suma</td>
                <td className="border border-slate-200 px-4 py-3">(f ± g)′ = f′ ± g′</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Producto</td>
                <td className="border border-slate-200 px-4 py-3">(uv)′ = u′v + uv′</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Cociente</td>
                <td className="border border-slate-200 px-4 py-3">(u/v)′ = (u′v − uv′)/v²</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">Cadena</td>
                <td className="border border-slate-200 px-4 py-3">(f∘g)′ = (f′∘g)·g′</td>
              </tr>
            </tbody>
          </table>
        </div>
        <FormulaCard title="Resumen visual">
          {renderMath("\\frac{d}{dx}f(g(x)) = f'(g(x))\\cdot g'(x)", true)}
        </FormulaCard>
      </section>

      <section>
        <h2 id="trigonometricas-tabla">Trigonométricas</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["sin x", "cos x"],
                ["cos x", "−sin x"],
                ["tan x", "sec² x"],
                ["cot x", "−csc² x"],
                ["sec x", "sec x tan x"],
                ["csc x", "−csc x cot x"],
              ].map(([f, fp]) => (
                <tr key={f}>
                  <td className="border border-slate-200 px-4 py-3">{f}</td>
                  <td className="border border-slate-200 px-4 py-3">{fp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          x en radianes. Más contexto en{" "}
          <Link href="/blog/derivada-de-tan-x" className="text-violet-600 font-semibold hover:underline">
            derivada de tan x
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="inversas-tabla">Trigonométricas inversas</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">arcsin x</td>
                <td className="border border-slate-200 px-4 py-3">1/√(1−x²)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">arccos x</td>
                <td className="border border-slate-200 px-4 py-3">−1/√(1−x²)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">arctan x</td>
                <td className="border border-slate-200 px-4 py-3">1/(1+x²)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="exp-log-tabla">Exponenciales y logaritmos</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">e^x</td>
                <td className="border border-slate-200 px-4 py-3">e^x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">a^x</td>
                <td className="border border-slate-200 px-4 py-3">a^x ln a</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">ln x</td>
                <td className="border border-slate-200 px-4 py-3">1/x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">log_a x</td>
                <td className="border border-slate-200 px-4 py-3">1/(x ln a)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="funciones-comunes">Derivadas de funciones comunes</h2>
        <p>
          Las consultas más frecuentes en cálculo introductorio reunidas con anclas rápidas. Cada subsección enlaza a
          una guía paso a paso y a la calculadora para verificar.
        </p>

        <h3 id="derivada-de-ex" className="text-xl font-bold text-slate-900 mt-8 mb-2">Derivada de e^x</h3>
        <p className="mb-6">
          (e^x)′ = e^x. Es la única exponencial (salvo escalar) que coincide con su derivada.{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeEElevadoAX} className="text-violet-600 font-semibold hover:underline">
            Guía completa: derivada de e^x
          </Link>
          .
        </p>

        <h3 id="derivada-de-1-x" className="text-xl font-bold text-slate-900 mb-2">Derivada de 1/x</h3>
        <p className="mb-6">
          Escribe 1/x = x^(−1): la derivada es −1/x² para x ≠ 0. Relacionada con ln x, cuya derivada es 1/x.{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeLnX} className="text-violet-600 font-semibold hover:underline">
            Derivada de ln x
          </Link>
          .
        </p>

        <h3 id="derivada-de-x2" className="text-xl font-bold text-slate-900 mb-2">Derivada de x²</h3>
        <p className="mb-6">
          Regla de la potencia con n = 2: (x²)′ = 2x.{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeXCuadrado} className="text-violet-600 font-semibold hover:underline">
            Ver derivada de x² paso a paso
          </Link>
          .
        </p>

        <h3 id="derivada-de-x3" className="text-xl font-bold text-slate-900 mb-2">Derivada de x³</h3>
        <p className="mb-6">
          (x³)′ = 3x². Patrón general: (x^n)′ = n·x^(n−1).{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeXCubo} className="text-violet-600 font-semibold hover:underline">
            Guía: derivada de x³
          </Link>
          .
        </p>

        <h3 id="derivada-de-raiz-x" className="text-xl font-bold text-slate-900 mb-2">Derivada de √x</h3>
        <p>
          √x = x^(1/2), así ( √x )′ = 1/(2√x) para x &gt; 0.{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeRaizCuadradaDeX} className="text-violet-600 font-semibold hover:underline">
            Derivada de la raíz cuadrada de x
          </Link>
          . Más funciones en{" "}
          <Link href={ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes} className="text-violet-600 font-semibold hover:underline">
            derivadas de funciones comunes
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="cadena-rapida">Cadena: ejemplos instantáneos</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f′(x)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">sin(2x)</td>
                <td className="border border-slate-200 px-4 py-3">2 cos(2x)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">e^(3x)</td>
                <td className="border border-slate-200 px-4 py-3">3e^(3x)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">ln(x²+1)</td>
                <td className="border border-slate-200 px-4 py-3">2x/(x²+1)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">(x²+1)^5</td>
                <td className="border border-slate-200 px-4 py-3">10x(x²+1)^4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Practica variaciones en la{" "}
          <Link href={ES_CALCULATOR_ROUTES.chainRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla de la cadena
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="orden-superior-tabla">Derivadas de orden superior (selección)</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f(x)</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-900">f″(x)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-4 py-3">sin x</td>
                <td className="border border-slate-200 px-4 py-3">−sin x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">cos x</td>
                <td className="border border-slate-200 px-4 py-3">−cos x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">e^x</td>
                <td className="border border-slate-200 px-4 py-3">e^x</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-3">x⁴</td>
                <td className="border border-slate-200 px-4 py-3">12x²</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Automatiza con la{" "}
          <Link href={ES_CALCULATOR_ROUTES.secondDerivative} className="text-violet-600 font-semibold hover:underline">
            calculadora de segunda derivada
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="como-usar">Cómo usar esta tabla sin depender de ella</h2>
        <p>
          Imprime la tabla o guárdala como marcador, pero cada semana intenta reescribirla de memoria en blanco.
          Marca en rojo las filas que olvidaste y estudia solo esas con un ejemplo en{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejemplosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejemplos de derivadas
          </Link>
          . En examen, la tabla mental completa es más rápida que buscar en papel si la practicaste así.
        </p>
        <WarningCard>
          La tabla no indica cuándo usar cada regla. Para eso necesitas las guías de reglas y práctica en{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejercicios de derivadas
          </Link>
          .
        </WarningCard>
        <TipCard>
          Agrupa visualmente: sin/cos juntas, exp/log juntas, producto/cociente/cadena como «combinación».
        </TipCard>
      </section>

      <section>
        <h2 id="calculadoras-tabla">Calculadoras enlazadas a esta tabla</h2>
        <p>
          Además de la calculadora principal, el clúster incluye herramientas especializadas que corresponden a filas
          de la tabla:{" "}
          <Link href={ES_CALCULATOR_ROUTES.partialDerivatives} className="text-violet-600 font-semibold hover:underline">
            derivadas parciales
          </Link>
          ,{" "}
          <Link href={ES_CALCULATOR_ROUTES.implicitDerivatives} className="text-violet-600 font-semibold hover:underline">
            derivadas implícitas
          </Link>
          ,{" "}
          <Link href={ES_CALCULATOR_ROUTES.productRule} className="text-violet-600 font-semibold hover:underline">
            regla del producto
          </Link>{" "}
          y{" "}
          <Link href={ES_CALCULATOR_ROUTES.quotientRule} className="text-violet-600 font-semibold hover:underline">
            regla del cociente
          </Link>
          . Úsalas para validar una fila concreta después de un ejercicio manual.
        </p>
        <p>
          La página histórica{" "}
          <Link href={ROUTES.reglas} className="text-violet-600 font-semibold hover:underline">
            reglas
          </Link>{" "}
          y el{" "}
          <Link href={ROUTES.blog} className="text-violet-600 font-semibold hover:underline">
            blog
          </Link>{" "}
          ofrecen artículos temáticos que amplían filas individuales de esta tabla.
        </p>
      </section>

      <section>
        <h2 id="imprimir">Versión imprimible mental</h2>
        <p>
          Para una «versión imprimible mental», recorre la tabla en este orden: constante y potencia, las seis
          trigonométricas, e^x y ln x, producto/cociente/cadena, tres inversas. Si completas el recorrido en menos de
          cinco minutos sin errores, estás listo para un repaso ligero; si no, enfoca el bloque fallido al día
          siguiente.
        </p>
        <p>
          Los{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejercicios de derivadas
          </Link>{" "}
          cierran el ciclo: tabla para recordar fórmulas, ejercicios para recordar cuándo aplicarlas.
        </p>
      </section>

      <CalcCTA />
      <RelatedCalculatorsBlock />
      <AuthorityClusterBlock exclude={ES_AUTHORITY_ROUTES.tablaDeDerivadas} />
    </ArticleWrap>
  );
}
