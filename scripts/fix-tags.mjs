import fs from "fs";

const path = "src/components/HomeLongFormSeo.tsx";
let s = fs.readFileSync(path, "utf8");

const wrongClose = "</" + "motion.div>";
const rightClose = "</" + "div>";
const wrongOpen = "<" + "motion.div";
const rightOpen = "<" + "div";

s = s.split(wrongClose).join(rightClose);
s = s.split(wrongOpen).join(rightOpen);

fs.writeFileSync(path, s);
console.log("fixed", path, "motion left:", s.includes("motion"));
