import type { Metadata } from "next";
import SimpleLegalPage from "@/components/SimpleLegalPage";
import { generateMetadataForPath } from "@/lib/generate-page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generateMetadataForPath(lang, "/disclaimer");
}

export default async function DisclaimerPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <SimpleLegalPage lang={lang} pageKey="disclaimerPage" />;
}
