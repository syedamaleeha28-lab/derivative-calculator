import type { Metadata } from "next";
import { ES_AUTHORITY_ROUTES } from "@/lib/es-authority-routes";
import {
  generateEsAuthorityMetadata,
  renderEsAuthorityPage,
} from "@/lib/es-authority-pages/render-page";

const ROUTE = ES_AUTHORITY_ROUTES.reglasDeDerivacion;

export async function generateMetadata(): Promise<Metadata> {
  return generateEsAuthorityMetadata(ROUTE);
}

export default function ReglasDeDerivacionPage() {
  return renderEsAuthorityPage(ROUTE);
}
