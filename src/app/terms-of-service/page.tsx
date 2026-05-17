import type { Metadata } from "next";
import LegalTrustPage from "@/components/LegalTrustPage";
import { generateLegalMetadata } from "@/lib/generate-legal-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const lang = "es";
  return generateLegalMetadata("terms");
}

export default async function TermsPage() {
  const lang = "es";
  return <LegalTrustPage pageId="terms" />;
}
