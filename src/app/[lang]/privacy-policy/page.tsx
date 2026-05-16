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
  const t = dictionaries[currentLang].privacy;
  const localizedPaths = {
    es: "/politica-de-privacidad",
    en: "/privacy-policy",
    pt: "/politica-de-privacidad",
  };
  return buildPageMetadata({
    lang: currentLang,
    path: localizedPaths[currentLang],
    title: t.title,
    description: t.subtitle,
    localizedPaths,
  });
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <SimpleLegalPage lang={lang} pageKey="privacy" />;
}
