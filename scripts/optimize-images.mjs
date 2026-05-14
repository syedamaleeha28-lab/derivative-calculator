/**
 * Rasteriza SVGs de public/images a WebP 800x500 (relación 8:5) para artículos.
 * Ajusta calidad para mantener cada archivo bajo ~100 KB cuando es posible.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

const W = 800;
const H = 500;
const MAX_BYTES = 100 * 1024;

const files = fs.readdirSync(imagesDir).filter((n) => n.endsWith(".svg"));

for (const name of files) {
  const base = name.slice(0, -".svg".length);
  const inputPath = path.join(imagesDir, name);
  const outputPath = path.join(imagesDir, `${base}.webp`);

  let quality = 88;
  let buffer;

  for (let i = 0; i < 16; i++) {
    buffer = await sharp(inputPath, { density: 144 })
      .resize(W, H, { fit: "cover", position: "centre" })
      .webp({ quality, effort: 6, smartSubsample: true })
      .toBuffer();

    if (buffer.length <= MAX_BYTES) break;
    quality -= 4;
    if (quality < 55) break;
  }

  if (buffer.length > MAX_BYTES) {
    buffer = await sharp(inputPath, { density: 120 })
      .resize(Math.round(W * 0.9), Math.round(H * 0.9), { fit: "cover", position: "centre" })
      .resize(W, H, { fit: "cover", position: "centre" })
      .webp({ quality: 72, effort: 6, smartSubsample: true })
      .toBuffer();
  }

  fs.writeFileSync(outputPath, buffer);
  console.log(`${base}.webp\t${(buffer.length / 1024).toFixed(1)} KB`);
}
