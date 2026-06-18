import { ArticleWrap, CalcCTA } from "@/lib/es-authority-pages/helpers";
import { ES_AUTHORITY_ROUTES } from "@/lib/es-authority-routes";
import Link from "next/link";
import {
  COMMON_FUNCTION_PAGE_DEFS,
  getCommonFunctionDefByEsRoute,
} from "./definitions";
import {
  DerivativeTable,
  FunctionPageBody,
  HubBackLink,
} from "./helpers";
import { ES_COMMON_FUNCTIONS_HUB } from "./routes";
import type { CommonFunctionPageDef } from "./types";

export function createEsFunctionContent(def: CommonFunctionPageDef) {
  return function EsFunctionContent() {
    return (
      <ArticleWrap>
        <FunctionPageBody content={def.es} def={def} locale="es" />
        <CalcCTA />
      </ArticleWrap>
    );
  };
}

export function CommonFunctionsHubContentEs() {
  return (
    <ArticleWrap>
      <section>
        <h2 id="vision">Hub de derivadas de funciones comunes</h2>
        <p>
          Esta guía central reúne las derivadas más consultadas en cálculo: potencias de x, raíces,
          exponenciales, logaritmos y trigonometría. Cada función tiene su página dedicada con fórmula,
          ejemplo paso a paso y enlaces a nuestra{" "}
          <Link href="/#calculator" className="text-violet-600 font-semibold hover:underline">
            calculadora de derivadas
          </Link>
          .
        </p>
        <p>
          Complementa el clúster con{" "}
          <Link href={ES_AUTHORITY_ROUTES.reglasDeDerivacion} className="text-violet-600 font-semibold hover:underline">
            reglas de derivación
          </Link>
          ,{" "}
          <Link href={ES_AUTHORITY_ROUTES.tablaDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            tabla de derivadas
          </Link>{" "}
          y{" "}
          <Link href={ES_AUTHORITY_ROUTES.ejemplosDeDerivadas} className="text-violet-600 font-semibold hover:underline">
            ejemplos resueltos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="indice">Guías por función</h2>
        <ul className="grid gap-3 sm:grid-cols-2 my-6">
          {COMMON_FUNCTION_PAGE_DEFS.map((d) => (
            <li key={d.id}>
              <Link
                href={d.esRoute}
                className="block rounded-xl border border-slate-200 bg-white px-4 py-3 hover:border-violet-300 hover:shadow-sm transition-all"
              >
                <span className="font-semibold text-violet-600">{d.es.breadcrumbLabel}</span>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{d.es.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <DerivativeTable locale="es" />
      <CalcCTA />
    </ArticleWrap>
  );
}

export function getEsFunctionContentForRoute(route: string) {
  const def = getCommonFunctionDefByEsRoute(route);
  if (!def) return null;
  return createEsFunctionContent(def);
}

export { ES_COMMON_FUNCTIONS_HUB };
