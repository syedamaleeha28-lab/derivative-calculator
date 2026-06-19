import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public", "favicon.svg");
const icoPath = path.join(root, "public", "favicon.ico");
const appIcoPath = path.join(root, "src", "app", "favicon.ico");

const sizes = [16, 32, 48];
const svg = fs.readFileSync(svgPath);

/** Build a multi-size ICO containing PNG-compressed frames (Windows Vista+). */
function buildIco(pngBySize) {
  const count = pngBySize.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * count;
  let offset = headerSize + dirSize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  const images = [];

  for (const { size, png } of pngBySize) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    images.push(png);
    offset += png.length;
  }

  return Buffer.concat([header, ...entries, ...images]);
}

const pngBySize = [];
for (const size of sizes) {
  const png = await sharp(svg)
    .resize(size, size, { fit: "contain", background: "#0f172a" })
    .png({ compressionLevel: 9, palette: true, colors: 16 })
    .toBuffer();
  pngBySize.push({ size, png });
}

const ico = buildIco(pngBySize);
fs.writeFileSync(icoPath, ico);
fs.writeFileSync(appIcoPath, ico);

for (const { size, png } of pngBySize) {
  console.log(`favicon ${size}x${size}\t${(png.length / 1024).toFixed(2)} KB PNG frame`);
}
console.log(`favicon.ico\t${(ico.length / 1024).toFixed(2)} KB (${sizes.join(", ")}px)`);
