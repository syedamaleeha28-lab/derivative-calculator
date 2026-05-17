const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Remove Language Switcher (Desktop)
content = content.replace(/\/\* ─── Language Switcher \(Desktop\) ─── \*\/(?:.|\n)*?<\/AnimatePresence>\s*<\/div>/, '');

// Remove Mobile Language toggle button
content = content.replace(/<button\s*onClick=\{\(\) => setLangOpen\(!langOpen\)\}\s*className="p-2 text-slate-500 flex items-center gap-1"\s*>(?:.|\n)*?<\/button>/, '');

// Remove Language Switcher (Mobile Menu)
content = content.replace(/\/\* ─── Language Switcher \(Mobile Menu\) ─── \*\/(?:.|\n)*?<\/AnimatePresence>/, '');

// Remove langOpen state
content = content.replace(/const \[langOpen, setLangOpen\] = useState\(false\);\n/, '');

// Remove unused imports
content = content.replace(/import \{ LocaleSwitcher \} from "\.\/LocaleSwitcher";\n/, '');
content = content.replace(/import \{ LANG_BADGE \} from "@\/lib\/locale";\n/, '');
content = content.replace(/Globe,?\s*/, ''); // from lucide-react

fs.writeFileSync('src/components/Navbar.tsx', content);
console.log("Navbar fixed");
