import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Derivio — Calculadora de Derivadas Paso a Paso | Gratis y Online",
  description:
    "Resuelve derivadas paso a paso con nuestra calculadora online gratuita. Soporta funciones trigonométricas, exponenciales, logarítmicas y compuestas. Ideal para ejercicios de cálculo diferencial.",
  keywords:
    "calculadora de derivadas, derivadas paso a paso, calcular derivadas online, derivada de x, derivada de sin x, derivada de ln x, regla de la cadena, regla del producto, derivadas con procedimiento, derivar funciones gratis",
  manifest: "/manifest.json",
  openGraph: {
    title: "Derivio — Calculadora de Derivadas Online con Procedimiento",
    description: "Calcula derivadas paso a paso gratis. El motor matemático más preciso para tus ejercicios de cálculo.",
    type: "website",
    locale: "es_ES",
  },
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${dmSerif.variable} h-full scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300 antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
