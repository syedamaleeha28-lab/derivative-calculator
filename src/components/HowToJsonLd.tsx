import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/seo";

type Step = { title: string; desc: string };

export default function HowToJsonLd({
  name,
  description,
  path,
  steps,
}: {
  name: string;
  description: string;
  path: string;
  steps: readonly Step[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    inLanguage: "es",
    url: absoluteUrl(path),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
  };

  return <JsonLd data={data} />;
}
