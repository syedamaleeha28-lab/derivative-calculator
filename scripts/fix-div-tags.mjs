import fs from "fs";
import path from "path";

const badClose = "</" + "motion.div>";
const goodClose = "</div>";

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.tsx$/.test(ent.name)) files.push(p);
  }
  return files;
}

for (const file of walk(path.join(process.cwd(), "src"))) {
  let s = fs.readFileSync(file, "utf8");
  if (!s.includes(badClose)) continue;
  const usesMotion = /from ["']framer-motion["']/.test(s);
  if (usesMotion) continue;
  const fixed = s.split(badClose).join(goodClose);
  if (fixed !== s) {
    fs.writeFileSync(file, fixed);
    console.log("fixed", path.relative(process.cwd(), file));
  }
}
