import type { Metadata } from "next";
import { ES_COMMON_FUNCTION_ROUTES } from "@/lib/common-derivative-functions/routes";
import {
  buildEsCommonFunctionMetadata,
  renderEsCommonFunctionPage,
} from "@/lib/common-derivative-functions/render-es-page";

const ROUTE = ES_COMMON_FUNCTION_ROUTES.derivadaDeX;

export async function generateMetadata(): Promise<Metadata> {
  return buildEsCommonFunctionMetadata(ROUTE);
}

export default function Page() {
  return renderEsCommonFunctionPage(ROUTE);
}
