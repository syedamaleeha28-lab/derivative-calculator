import fs from "fs";

let s = fs.readFileSync("src/components/Hero.tsx", "utf8");

const staticOpen = [
  '<motion.div className="absolute top-0 right-0',
  '<motion.div className="max-w-6xl mx-auto',
  '<motion.div className="grid grid-cols-1',
  '<motion.div className="inline-flex items-center gap-2 px-2.5',
  '<motion.div className="flex flex-wrap items-center gap-2.5"',
  '<motion.div className="flex flex-col gap-1.5 pt-2',
];

for (const open of staticOpen) {
  s = s.replace(open, open.replace("<motion.div", "<motion.div".replace("motion.div", "motion.div")).replace("<motion.div", "<motion.div"));
}

// explicit replacements
s = s.replace('<motion.div className="absolute top-0 right-0', '<div className="absolute top-0 right-0');
s = s.replace('<motion.div className="max-w-6xl mx-auto', '<div className="max-w-6xl mx-auto');
s = s.replace('<motion.div className="grid grid-cols-1', '<motion.div className="grid grid-cols-1');
s = s.replace('<motion.div className="grid grid-cols-1', '<div className="grid grid-cols-1');
s = s.replace(
  '<motion.div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full',
  '<div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full'
);
s = s.replace(
  '<motion.div className="flex flex-wrap items-center gap-2.5">',
  '<div className="flex flex-wrap items-center gap-2.5">'
);
s = s.replace(
  '<motion.div className="flex flex-col gap-1.5 pt-2 border-t border-slate-100">',
  '<div className="flex flex-col gap-1.5 pt-2 border-t border-slate-100">'
);

const bad = "</" + "motion.div>";
const good = "</div>";

// Replace closes for static blocks in order
const closers = [
  `{t.tag}\n            ${bad}`,
  `{t.howBtn}\n              </MotionLink>\n            ${bad}`,
  `{t.trust3} />\n            ${bad}`,
  `</motion.div>\n        ${bad}\n      ${bad}\n    </section>`,
];

s = s.replace(`{t.tag}\n            ${bad}`, `{t.tag}\n            ${good}`);
s = s.replace(
  `{t.howBtn}\n              </MotionLink>\n            ${bad}`,
  `{t.howBtn}\n              </MotionLink>\n            ${good}`
);
s = s.replace(`{t.trust3} />\n            ${bad}`, `{t.trust3} />\n            ${good}`);
s = s.replace(
  `          </motion.div>\n        ${bad}\n      ${bad}\n    </section>`,
  `          </motion.div>\n        ${good}\n      ${good}\n    </section>`
);

fs.writeFileSync("src/components/Hero.tsx", s);
console.log("hero fixed");
