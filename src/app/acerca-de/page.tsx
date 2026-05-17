import type { Metadata } from "next";
import LegalTrustPage from "@/components/LegalTrustPage";
import { generateLegalMetadata } from "@/lib/generate-legal-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateLegalMetadata("about");
}

export default function AcercaDePage() {
  return <LegalTrustPage pageId="about" />;
}
