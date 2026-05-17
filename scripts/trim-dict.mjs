import fs from "fs";

const src = fs.readFileSync("src/lib/dictionaries.ts", "utf8");
const start = src.indexOf("  es: {");
const endMatch = src.match(/\r?\n  en: \{/);
const end = endMatch ? endMatch.index : -1;
if (start === -1 || end === -1) {
  console.error("markers not found", start, end);
  process.exit(1);
}
const esBody = src.slice(start + 6, end + 1);
const out = `import type { DeepStringify } from "./dictionary-types";

const dictionaryData = ${esBody};

export type TranslationDictionary = DeepStringify<typeof dictionaryData>;
export const dict: TranslationDictionary = dictionaryData;
`;
fs.writeFileSync("src/lib/dictionaries.ts", out);
console.log("trimmed", out.length);
