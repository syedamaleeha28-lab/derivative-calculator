import type { Metadata } from "next";
import SimpleLegalPage from "@/components/SimpleLegalPage";
import { buildPageMetadata, normalizeLang } from "@/lib/seo";
import { dictionaries } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = normalizeLang(lang);
  const t = dictionaries[currentLang].terms;
  const localizedPaths = {
    es: "/terminos-de-servicio",
    en: "/terms",
    pt: "/terminos-de-servicio",
  };
  return buildPageMetadata({
    lang: currentLang,
    path: localizedPaths[currentLang],
    title: t.title,
    description: t.subtitle,
    localizedPaths,
  });
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <SimpleLegalPage lang={lang} pageKey="terms" />;
}
