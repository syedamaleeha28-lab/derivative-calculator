import Script from "next/script";
import {
  buildSoftwareApplicationJsonLd,
  type SoftwareApplicationSchemaInput,
} from "@/lib/software-application-schema";

type Props = SoftwareApplicationSchemaInput & {
  id?: string;
};

/** Reusable JSON-LD block for SoftwareApplication rich results. */
export default function SoftwareApplicationSchema({ id, ...input }: Props) {
  const jsonLd = JSON.stringify(buildSoftwareApplicationJsonLd(input)).replace(/</g, "\\u003c");

  return (
    <Script
      id={id ?? "software-application-jsonld"}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
