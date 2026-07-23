/**
 * Construit les photos web du site à partir des dossiers /slides.
 *
 *   bun scripts/build-photos.mjs
 *
 * - Parcourt les dossiers slides/slideNN_… (originaux HEIC/JPG/PNG intacts).
 * - Convertit chaque photo unique en JPEG web (max 1600 px, qualité 78)
 *   dans public/slides/<nom>.jpg — une seule fois même si la photo
 *   apparaît dans plusieurs slides (même nom de fichier = même photo).
 * - Génère src/data/photos.ts : la liste des photos de chaque slide.
 */
import { readdir, mkdir, writeFile, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import decodeHeic from 'heic-decode'

const ROOT = path.resolve(import.meta.dirname, '..')
const SLIDES_DIR = path.join(ROOT, 'slides')
const OUT_DIR = path.join(ROOT, 'public', 'slides')
const DATA_FILE = path.join(ROOT, 'src', 'data', 'photos.ts')

const MAX_EDGE = 1600
const QUALITY = 78

const isHeic = (f) => /\.heic$/i.test(f)
const isImage = (f) => /\.(heic|jpe?g|png)$/i.test(f)

/** Nom de sortie web : basename en minuscules, extension .jpg. */
const webName = (file) => file.replace(/\.[^.]+$/, '').toLowerCase() + '.jpg'

async function toSharp(filePath) {
  if (!isHeic(filePath)) return sharp(filePath).rotate() // .rotate() = respecte l'EXIF
  const buffer = await readFile(filePath)
  const { width, height, data } = await decodeHeic({ buffer })
  return sharp(Buffer.from(data), { raw: { width, height, channels: 4 } })
}

async function convert(srcPath, outPath) {
  const img = await toSharp(srcPath)
  await img
    .resize(MAX_EDGE, MAX_EDGE, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(outPath)
}

const folders = (await readdir(SLIDES_DIR, { withFileTypes: true }))
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()

await mkdir(OUT_DIR, { recursive: true })

/** @type {Record<string, string[]>} dossier de slide → URLs web */
const manifest = {}
const converted = new Set()

for (const folder of folders) {
  const files = (await readdir(path.join(SLIDES_DIR, folder))).filter(isImage).sort()
  manifest[folder] = files.map((f) => `/slides/${webName(f)}`)
  for (const file of files) {
    const out = webName(file)
    if (converted.has(out)) continue
    converted.add(out)
    const outPath = path.join(OUT_DIR, out)
    if (existsSync(outPath)) continue
    await convert(path.join(SLIDES_DIR, folder, file), outPath)
    console.log(`✓ ${folder}/${file} → public/slides/${out}`)
  }
}

const ts = `/**
 * ⚠️ Fichier généré par \`bun scripts/build-photos.mjs\` — ne pas éditer à la main.
 * Source de vérité : les dossiers /slides/slideNN_… du dépôt.
 */

/** Photos web de chaque slide, dans l'ordre alphabétique du dossier. */
export const slidePhotos = ${JSON.stringify(manifest, null, 2)} as const

export type SlideFolder = keyof typeof slidePhotos

/** Les photos d'un dossier de slide (tableau vide si le dossier est absent ou vide). */
export function photosOf(folder: SlideFolder): string[] {
  return [...(slidePhotos[folder] ?? [])]
}
`
await writeFile(DATA_FILE, ts)
console.log(`\n${converted.size} photos web dans public/slides/, manifeste → src/data/photos.ts`)
