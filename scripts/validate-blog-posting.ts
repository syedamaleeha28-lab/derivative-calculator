import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  buildBlogPostingJsonLd,
  validateBlogPostingJsonLd,
} from "../src/lib/blog-posting-schema";

const source = readFileSync(
  resolve(process.cwd(), "src/lib/blog-posts/index.ts"),
  "utf8"
);

const slugs = [...source.matchAll(/entry\(\{\s*slug: "([^"]+)"/g)].map((m) => m[1]);

if (slugs.length === 0) {
  console.error("No blog article slugs found in blog-posts registry.");
  process.exit(1);
}

const failures: string[] = [];

for (const slug of slugs) {
  const titleMatch = source.match(
    new RegExp(`entry\\(\\{[\\s\\S]*?slug: "${slug}"[\\s\\S]*?title: "([^"]+)"`)
  );
  const descriptionMatch = source.match(
    new RegExp(`entry\\(\\{[\\s\\S]*?slug: "${slug}"[\\s\\S]*?description:\\s*"([^"]+)"`)
  );
  const dateIsoMatch = source.match(
    new RegExp(`entry\\(\\{[\\s\\S]*?slug: "${slug}"[\\s\\S]*?dateIso: "([^"]+)"`)
  );

  if (!titleMatch || !descriptionMatch || !dateIsoMatch) {
    failures.push(`${slug}: could not parse registry metadata`);
    continue;
  }

  const jsonLd = buildBlogPostingJsonLd({
    path: `/blog/${slug}`,
    headline: titleMatch[1],
    description: descriptionMatch[1],
    datePublished: dateIsoMatch[1],
  });

  const errors = validateBlogPostingJsonLd(jsonLd);
  if (errors.length > 0) {
    failures.push(`${slug}: ${errors.join(", ")}`);
  }
}

if (failures.length > 0) {
  console.error("BlogPosting validation failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log(`BlogPosting JSON-LD validated for ${slugs.length} blog articles.`);
