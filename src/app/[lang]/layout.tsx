import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { I18nProvider } from "@/contexts/I18nContext";
import { SITE_NAME, SITE_URL, normalizeLang } from "@/lib/seo";
import "../globals.css";

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  const locale = normalizeLang(lang);
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${dmSerif.variable} h-full scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-slate-900">
        <I18nProvider lang={locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
