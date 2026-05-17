import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Calculadora de Derivadas Paso a Paso`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Calculadora de derivadas online gratuita con procedimiento paso a paso. Funciones trigonométricas, exponenciales, logarítmicas y compuestas.",
  verification: { google: "wVep9l8xugGHDiilZfNgfEmpDNQp9IKMlQAuO3w4xe0" },
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${dmSerif.variable} h-full scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-slate-900">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
