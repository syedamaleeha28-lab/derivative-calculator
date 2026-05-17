import fs from "fs";

const path = "src/components/HomeLongFormSeo.tsx";
let s = fs.readFileSync(path, "utf8");
s = s.replaceAll("motion.div", "div");
fs.writeFileSync(path, s, "utf8");
console.log("fixed");
