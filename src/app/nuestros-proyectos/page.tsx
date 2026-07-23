import type { Metadata } from "next";
import NuestrosProyectosPage from "@/components/NuestrosProyectosPage";
import {
  NUESTROS_PROYECTOS_METADATA,
  NUESTROS_PROYECTOS_PATH,
} from "@/lib/nuestros-proyectos";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: NUESTROS_PROYECTOS_PATH,
    title: NUESTROS_PROYECTOS_METADATA.title,
    description: NUESTROS_PROYECTOS_METADATA.description,
    hreflang: false,
  });
}

export default function Page() {
  return <NuestrosProyectosPage />;
}
