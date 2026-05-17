import fs from "fs";
import path from "path";

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx?|jsx?)$/.test(ent.name)) files.push(p);
  }
  return files;
}

const replacements = [
  [/from "@\/components\/LanguageLink"/g, 'from "next/link"'],
  [/import Link from "@\/components\/LanguageLink"/g, 'import Link from "next/link"'],
  [/import LanguageLink from "@\/components\/LanguageLink"/g, 'import Link from "next/link"'],
  [/import \{ dictionaries, Lang \} from "@\/lib\/dictionaries"/g, 'import { dict } from "@/lib/dictionaries"'],
  [/import \{ dictionaries \} from "@\/lib\/dictionaries"/g, 'import { dict } from "@/lib/dictionaries"'],
  [/import \{ dictionaries, type Lang \} from "@\/lib\/dictionaries"/g, 'import { dict } from "@/lib/dictionaries"'],
  [/dictionaries\[currentLang\]/g, "dict"],
  [/dictionaries\.es/g, "dict"],
  [/dictionaries\[lang\]/g, "dict"],
  [/const currentLang = \(lang === "en" \|\| lang === "pt" \? lang : "es"\) as Lang;\n/g, ""],
  [/const currentLang = normalizeLang\(lang\);\n/g, ""],
  [/const lang = "es";\n/g, ""],
  [/normalizeLang\(lang\)/g, '"es"'],
  [/metadataFromEntry\(currentLang,/g, "metadataFromEntry("],
  [/buildPageMetadata\(\{\s*lang:\s*currentLang,/g, "buildPageMetadata({"],
  [/buildPageMetadata\(\{\s*lang,\s*/g, "buildPageMetadata({"],
  [/generateLegalMetadata\(lang, /g, "generateLegalMetadata("],
  [/generateLegalMetadata\(langParam, /g, "generateLegalMetadata("],
  [/from "@\/lib\/seo";\nimport \{ normalizeLang \}/g, 'from "@/lib/seo"'],
  [/,\s*normalizeLang/g, ""],
  [/import \{ buildPageMetadata, normalizeLang \}/g, 'import { buildPageMetadata }'],
  [/import \{ metadataFromEntry, normalizeLang \}/g, 'import { metadataFromEntry }'],
  [/import \{ absoluteUrl, normalizeLang,/g, 'import { absoluteUrl,'],
  [/getLegalPageContent\(currentLang,/g, "getLegalPageContent("],
  [/getLegalPageContent\(lang,/g, "getLegalPageContent("],
  [/getLegalPath\((\w+), currentLang\)/g, "getLegalPath($1)"],
  [/getLegalPath\((\w+), lang\)/g, "getLegalPath($1)"],
  [/absoluteUrl\(currentLang,/g, "absoluteUrl("],
  [/absoluteUrl\(lang,/g, "absoluteUrl("],
  [/import \{ LOCALIZED_ROUTES \} from "@\/lib\/routes";\n\n?/g, ""],
  [/,\s*\{\s*localizedPaths: LOCALIZED_ROUTES\[[^\]]+\]\s*\}/g, ""],
  [/lang=\{currentLang\}/g, ""],
  [/lang=\{lang\}/g, ""],
  [/lang: Lang/g, ""],
  [/import type \{ Lang \} from "@\/lib\/dictionary-types";\n/g, ""],
  [/import \{ useLang \} from "@\/contexts\/I18nContext";\n/g, 'import { dict } from "@/lib/dictionaries";\n'],
  [/const \{ lang: currentLang, dict \} = useLang\(\);\n\s*const t = dict\./g, "const t = dict."],
  [/const \{ lang, dict \} = useLang\(\);\n/g, ""],
  [/const \{ dict \} = useLang\(\);\n/g, ""],
];

const root = path.join(process.cwd(), "src");
for (const file of walk(root)) {
  if (file.includes("LocaleSwitcher") || file.includes("LanguageLink") || file.includes("I18nContext")) continue;
  let s = fs.readFileSync(file, "utf8");
  const orig = s;
  for (const [re, rep] of replacements) s = s.replace(re, rep);
  if (s !== orig) {
    fs.writeFileSync(file, s);
    console.log("updated", path.relative(process.cwd(), file));
  }
}
