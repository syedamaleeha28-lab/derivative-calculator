import {
  ArticleWrap,
  AuthorityClusterBlock,
  CalcCTA,
  ExampleCard,
  FormulaCard,
  TipCard,
  WarningCard,
  RelatedCalculatorsBlock,
  InternalLinksBlock,
  renderMath,
  Link,
  ES_MAIN_CALCULATOR_HREF,
  ES_CALCULATOR_ROUTES,
  ES_AUTHORITY_ROUTES,
} from "../helpers";
import { ES_COMMON_FUNCTION_ROUTES } from "@/lib/common-derivative-functions/routes";

const TRIG_GUIDE_LINKS = [
  {
    href: ES_COMMON_FUNCTION_ROUTES.derivadaDeSinX,
    label: "Derivada de sin(x)",
    desc: "Fórmula cos(x) con demostración y ejemplos de cadena.",
  },
  {
    href: ES_COMMON_FUNCTION_ROUTES.derivadaDeCosX,
    label: "Derivada de cos(x)",
    desc: "Por qué aparece el signo menos: −sin(x).",
  },
  {
    href: ES_COMMON_FUNCTION_ROUTES.derivadaDeTanX,
    label: "Derivada de tan(x)",
    desc: "sec²(x) demostrada con la regla del cociente.",
  },
] as const;

const cell = "border border-slate-200 px-4 py-3";
const headCell = "border border-slate-200 px-4 py-3 text-left font-bold text-slate-900";

function TrigTable({
  caption,
  rows,
}: {
  caption: string;
  rows: readonly [string, string][];
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-slate-50">
            <th className={headCell}>Función f(x)</th>
            <th className={headCell}>Derivada f′(x)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([f, d]) => (
            <tr key={f}>
              <td className={`${cell} font-mono text-slate-800`}>{f}</td>
              <td className={`${cell} font-mono text-slate-800`}>{d}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-slate-500 mt-2">{caption}</p>
    </div>
  );
}

export function DerivadasDeFuncionesTrigonometricasContent() {
  return (
    <ArticleWrap>
      <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 px-5 py-4 md:px-6 md:py-5">
        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-violet-600 mb-2">TL;DR</p>
        <p className="text-slate-700 leading-relaxed text-[0.98rem]">
          Las <strong>derivadas de las funciones trigonométricas</strong> (con x en radianes) son: (sin x)′ = cos x,
          (cos x)′ = −sin x, (tan x)′ = sec² x, (cot x)′ = −csc² x, (sec x)′ = sec x · tan x y
          (csc x)′ = −csc x · cot x. Las tres primeras tienen guía propia paso a paso; las tres recíprocas se
          demuestran con la regla del cociente. Verifica cualquier caso en la{" "}
          <Link href={ES_MAIN_CALCULATOR_HREF} className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas con pasos
          </Link>
          .
        </p>
      </div>

      <section>
        <h2 id="tabla-trigonometricas">Tabla de derivadas trigonométricas</h2>
        <p>
          Las seis fórmulas esenciales en una sola tabla. Observa el patrón: las funciones que empiezan por
          «co» (coseno, cotangente, cosecante) llevan signo negativo en su derivada.
        </p>
        <TrigTable
          caption="Válidas con x en radianes, en los puntos donde cada función está definida."
          rows={[
            ["sin x", "cos x"],
            ["cos x", "−sin x"],
            ["tan x", "sec² x = 1/cos² x"],
            ["cot x", "−csc² x = −1/sin² x"],
            ["sec x", "sec x · tan x"],
            ["csc x", "−csc x · cot x"],
          ]}
        />
        <InternalLinksBlock links={TRIG_GUIDE_LINKS} heading="Guías paso a paso por función" />
      </section>

      <section>
        <h2 id="derivada-de-sin">Derivada de sin(x)</h2>
        <FormulaCard title="Seno">{renderMath("\\dfrac{d}{dx}\\,\\sin(x) = \\cos(x)", true)}</FormulaCard>
        <p>
          La identidad más usada del cálculo trigonométrico. Se demuestra con la definición por límites y el límite
          notable lim h→0 de sin(h)/h = 1, que exige medir ángulos en radianes. Lee la demostración completa y los
          ejemplos con regla de la cadena en la{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeSinX} className="text-violet-600 font-semibold hover:underline">
            guía de la derivada de sin(x)
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="derivada-de-cos">Derivada de cos(x)</h2>
        <FormulaCard title="Coseno">{renderMath("\\dfrac{d}{dx}\\,\\cos(x) = -\\sin(x)", true)}</FormulaCard>
        <p>
          El signo negativo refleja que el coseno decrece justo donde el seno es positivo. Memoriza el par
          sin → cos, cos → −sin: el ciclo completo de derivar cuatro veces devuelve la función original. Detalles y
          errores típicos en la{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeCosX} className="text-violet-600 font-semibold hover:underline">
            guía de la derivada de cos(x)
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="derivada-de-tan">Derivada de tan(x)</h2>
        <FormulaCard title="Tangente">
          {renderMath("\\dfrac{d}{dx}\\,\\tan(x) = \\sec^2(x) = \\dfrac{1}{\\cos^2(x)}", true)}
        </FormulaCard>
        <p>
          Como tan = sin/cos, la regla del cociente da (cos² + sin²)/cos² = 1/cos² = sec². No es derivable donde
          cos(x) = 0, es decir en x = π/2 + kπ. Demostración paso a paso en la{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeTanX} className="text-violet-600 font-semibold hover:underline">
            guía de la derivada de tan(x)
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="sec-csc-cot">Derivadas de sec(x), csc(x) y cot(x)</h2>
        <p>
          Las tres funciones recíprocas se derivan igual que la tangente: escríbelas como cocientes y aplica la
          regla del cociente (o la cadena sobre 1/u). Practica el procedimiento con la{" "}
          <Link href={ES_CALCULATOR_ROUTES.quotientRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla del cociente
          </Link>
          .
        </p>
        <ExampleCard
          title="Demostración: derivada de sec(x) = 1/cos(x)"
          steps={[
            "Escribe sec x = 1/cos x = (cos x)^(−1).",
            "Regla de la cadena: −(cos x)^(−2) · (−sin x) = sin x / cos² x.",
            "Reagrupa: (1/cos x)·(sin x/cos x) = sec x · tan x.",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\,\\sec(x) = \\sec(x)\\tan(x)", true)}
        </ExampleCard>
        <p>
          El mismo método da (csc x)′ = −csc x · cot x y (cot x)′ = −csc² x. Cada una hereda las restricciones de
          dominio de su recíproca: sec y tan fallan donde cos = 0; csc y cot, donde sin = 0.
        </p>
      </section>

      <section>
        <h2 id="regla-de-la-cadena">Composiciones: trigonométricas con regla de la cadena</h2>
        <p>
          En la práctica casi nunca derivas sin(x) a secas, sino sin(3x), cos(x²) o tan²(x). El patrón es siempre
          derivada exterior evaluada en el interior, por derivada interior.
        </p>
        <ExampleCard
          title="Ejemplo: derivada de cos(x²)"
          steps={[
            "Exterior cos(u) con interior u = x².",
            "Derivada exterior: −sin(u); derivada interior: 2x.",
            "Resultado: −2x · sin(x²).",
          ]}
        >
          {renderMath("\\dfrac{d}{dx}\\cos(x^2) = -2x\\,\\sin(x^2)", true)}
        </ExampleCard>
        <p>
          Repasa el método general en la{" "}
          <Link href={ES_CALCULATOR_ROUTES.chainRule} className="text-violet-600 font-semibold hover:underline">
            calculadora de regla de la cadena
          </Link>{" "}
          y el resto de técnicas en las{" "}
          <Link href={ES_AUTHORITY_ROUTES.reglasDeDerivacion} className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>
          .
        </p>
        <WarningCard>
          Las fórmulas solo valen en radianes. Si trabajas en grados, aparece un factor π/180:
          (sin x°)′ = (π/180)·cos x°. Es el error más común en exámenes con calculadora en modo grados.
        </WarningCard>
      </section>

      <section>
        <h2 id="trigonometricas-inversas">Resumen: derivadas de las trigonométricas inversas</h2>
        <p>
          Las funciones arco se derivan con el teorema de la función inversa y no contienen funciones
          trigonométricas en el resultado: aparecen raíces y cocientes algebraicos.
        </p>
        <TrigTable
          caption="arcsin y arccos requieren |x| < 1; arcsec y arccsc, |x| > 1."
          rows={[
            ["arcsin x", "1/√(1−x²)"],
            ["arccos x", "−1/√(1−x²)"],
            ["arctan x", "1/(1+x²)"],
            ["arccot x", "−1/(1+x²)"],
            ["arcsec x", "1/(|x|√(x²−1))"],
            ["arccsc x", "−1/(|x|√(x²−1))"],
          ]}
        />
        <TipCard>
          Cada pareja función/cofunción difiere solo en el signo: arcsin/arccos, arctan/arccot y arcsec/arccsc.
          Basta memorizar tres fórmulas y los tres signos. La tabla completa del sitio está en la{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>
          .
        </TipCard>
      </section>

      <section>
        <h2 id="siguientes-pasos">Siguientes pasos</h2>
        <p>
          Consolida con las guías individuales de{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeSinX} className="text-violet-600 font-semibold hover:underline">
            sin(x)
          </Link>
          ,{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeCosX} className="text-violet-600 font-semibold hover:underline">
            cos(x)
          </Link>{" "}
          y{" "}
          <Link href={ES_COMMON_FUNCTION_ROUTES.derivadaDeTanX} className="text-violet-600 font-semibold hover:underline">
            tan(x)
          </Link>
          , amplía con el resto de{" "}
          <Link
            href={ES_AUTHORITY_ROUTES.derivadasDeFuncionesComunes}
            className="text-violet-600 font-semibold hover:underline"
          >
            derivadas de funciones comunes
          </Link>{" "}
          y practica con los{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejerciciosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejercicios de derivadas
          </Link>
          .
        </p>
      </section>

      <CalcCTA />
      <AuthorityClusterBlock exclude={ES_AUTHORITY_ROUTES.derivadasDeFuncionesTrigonometricas} />
      <RelatedCalculatorsBlock />
    </ArticleWrap>
  );
}
