import type { Metadata } from "next";
import LegalTrustPage from "@/components/LegalTrustPage";
import { generateLegalMetadata } from "@/lib/generate-legal-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generateLegalMetadata(lang, "terms");
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <LegalTrustPage lang={lang} pageId="terms" />;
}
