import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/seo";
import type { Lang } from "@/lib/dictionary-types";

type Step = { title: string; desc: string };

export default function HowToJsonLd({
  lang,
  name,
  description,
  path,
  steps,
}: {
  lang: Lang;
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
    inLanguage: lang === "es" ? "es" : lang === "pt" ? "pt-BR" : "en",
    url: absoluteUrl(lang, path),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
  };

  return <JsonLd data={data} />;
}
