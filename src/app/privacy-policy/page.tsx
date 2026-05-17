import type { Metadata } from "next";
import LegalTrustPage from "@/components/LegalTrustPage";
import { generateLegalMetadata } from "@/lib/generate-legal-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const lang = "es";
  return generateLegalMetadata("privacy");
}

export default async function PrivacyPolicyPage() {
  const lang = "es";
  return <LegalTrustPage pageId="privacy" />;
}
