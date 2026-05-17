import Script from "next/script";
import { buildHomePageSchemaGraph } from "@/lib/home-schema";

/** Homepage-only JSON-LD in document head (beforeInteractive). */
export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = JSON.stringify(buildHomePageSchemaGraph()).replace(
    /</g,
    "\\u003c"
  );

  return (
    <>
      <Script
        id="homepage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      {children}
    </>
  );
}
