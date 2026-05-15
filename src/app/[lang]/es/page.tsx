import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Calculadora de Derivadas Paso a Paso | Resuelve Online Gratis",
  description: "Usa nuestra calculadora de derivadas online para obtener el resultado con procedimiento detallado. Resuelve derivadas con pasos de funciones trigonométricas, logarítmicas y parciales gratis.",
  keywords: "calculadora de derivadas, calculadora de derivadas con pasos, calculadora de derivadas online, calculadora de derivadas paso a paso, resolver derivadas online",
  openGraph: {
    title: "Calculadora de Derivadas Online con Procedimiento",
    description: "Resuelve derivadas paso a paso gratis. El motor matemático más preciso para tus ejercicios de cálculo diferencial.",
    url: "https://derivio.app/es",
    siteName: "Calculadora de Derivadas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Derivadas Paso a Paso",
    description: "Resuelve derivadas online con pasos detallados y explicaciones claras.",
  },
};

export default function SpanishHome() {
  return <Home lang="es" />;
}
