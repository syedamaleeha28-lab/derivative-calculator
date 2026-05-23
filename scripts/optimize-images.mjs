/**
 * Optimiza assets en public/images:
 * - SVG → WebP 800×500 (artículos)
 * - PNG/JPG → WebP comprimido (mantiene originales)
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

const ARTICLE_W = 800;
const ARTICLE_H = 500;
const MAX_ARTICLE_BYTES = 100 * 1024;

/** Tarjetas educativas (~128px en pantalla → 384px para retina). */
const CARD_MAX = 384;

async function writeWebp(outputPath, buffer) {
  fs.writeFileSync(outputPath, buffer);
  console.log(`${path.basename(outputPath)}\t${(buffer.length / 1024).toFixed(1)} KB`);
}

for (const name of fs.readdirSync(imagesDir).filter((n) => n.endsWith(".svg"))) {
  const base = name.slice(0, -".svg".length);
  const inputPath = path.join(imagesDir, name);
  const outputPath = path.join(imagesDir, `${base}.webp`);

  let quality = 88;
  let buffer;

  for (let i = 0; i < 16; i++) {
    buffer = await sharp(inputPath, { density: 144 })
      .resize(ARTICLE_W, ARTICLE_H, { fit: "cover", position: "centre" })
      .webp({ quality, effort: 6, smartSubsample: true })
      .toBuffer();

    if (buffer.length <= MAX_ARTICLE_BYTES) break;
    quality -= 4;
    if (quality < 55) break;
  }

  if (buffer.length > MAX_ARTICLE_BYTES) {
    buffer = await sharp(inputPath, { density: 120 })
      .resize(Math.round(ARTICLE_W * 0.9), Math.round(ARTICLE_H * 0.9), { fit: "cover", position: "centre" })
      .resize(ARTICLE_W, ARTICLE_H, { fit: "cover", position: "centre" })
      .webp({ quality: 72, effort: 6, smartSubsample: true })
      .toBuffer();
  }

  await writeWebp(outputPath, buffer);
}

const rasterExt = new Set([".png", ".jpg", ".jpeg"]);

for (const name of fs.readdirSync(imagesDir)) {
  const ext = path.extname(name).toLowerCase();
  if (!rasterExt.has(ext)) continue;

  const base = name.slice(0, -ext.length);
  const inputPath = path.join(imagesDir, name);
  const outputPath = path.join(imagesDir, `${base}.webp`);
  const meta = await sharp(inputPath).metadata();
  const isSmallCard =
    meta.width && meta.height && Math.max(meta.width, meta.height) <= 1200;

  let pipeline = sharp(inputPath);
  if (isSmallCard) {
    pipeline = pipeline.resize(CARD_MAX, CARD_MAX, {
      fit: "inside",
      withoutEnlargement: true,
    });
  } else {
    pipeline = pipeline.resize(ARTICLE_W, ARTICLE_H, {
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const buffer = await pipeline
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toBuffer();

  await writeWebp(outputPath, buffer);
}

const iconPath = path.join(__dirname, "..", "public", "icon.png");
if (fs.existsSync(iconPath)) {
  const buffer = await sharp(iconPath)
    .resize(512, 512, { fit: "inside", withoutEnlargement: true })
    .png({ quality: 85, compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(iconPath, buffer);
  console.log(`icon.png\t${(buffer.length / 1024).toFixed(1)} KB (compressed)`);
}
