"use client";

import { usePathname } from "next/navigation";
import { dictionaries, Lang } from "@/lib/dictionaries";

export default function Schema() {
  const pathname = usePathname() || "";
  const currentLang = (pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es") as Lang;
  const dict = dictionaries[currentLang];

  // 1. FAQ Schema
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (dict as any).faqsPage?.list.map((item: { q: string; a: string }) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    })) || []
  };

  // 2. Breadcrumb Schema
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": dict.breadcrumbs.home,
        "item": `https://calculadoraderivadas.app/${currentLang === 'es' ? '' : currentLang}`
      },
      ...segments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        "item": `https://calculadoraderivadas.app/${segments.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
}
