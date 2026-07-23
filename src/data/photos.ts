/**
 * ⚠️ Fichier généré par `bun scripts/build-photos.mjs` — ne pas éditer à la main.
 * Source de vérité : les dossiers /slides/slideNN_… du dépôt.
 */

/** Photos web de chaque slide, dans l'ordre alphabétique du dossier. */
export const slidePhotos = {
  "slide01_cover": [
    "/slides/cover.jpg"
  ],
  "slide02_21_ans": [
    "/slides/img_1551.jpg",
    "/slides/img_3912.jpg",
    "/slides/img_4991.jpg",
    "/slides/img_9435.jpg",
    "/slides/img_9787.jpg"
  ],
  "slide03_aime_les_gens": [
    "/slides/919a3a51-ef64-4eb6-b45e-e377e7aa615a.jpg",
    "/slides/img_1680.jpg",
    "/slides/img_2219.jpg",
    "/slides/img_4718.jpg",
    "/slides/img_9435.jpg",
    "/slides/cover.jpg"
  ],
  "slide04_rabougrie": [
    "/slides/img_1555.jpg",
    "/slides/img_1719.jpg",
    "/slides/img_2016.jpg",
    "/slides/img_4991.jpg",
    "/slides/img_9787.jpg"
  ],
  "slide05_notre_histoire": [
    "/slides/img_4401.jpg",
    "/slides/img_4535.jpg",
    "/slides/img_4718.jpg",
    "/slides/img_5395.jpg",
    "/slides/img_9868.jpg",
    "/slides/cover.jpg"
  ],
  "slide06_nos_souvenirs": [
    "/slides/137f0741-fbf2-4718-af1f-dc6df1439206.jpg",
    "/slides/1ecbd3a7-c707-4a6c-bbee-7935ba699ea1.jpg",
    "/slides/img_1719.jpg",
    "/slides/img_1878.jpg",
    "/slides/img_2219.jpg",
    "/slides/img_2278.jpg",
    "/slides/img_4228.jpg",
    "/slides/img_5191.jpg",
    "/slides/img_9435.jpg",
    "/slides/img_9492.jpg",
    "/slides/img_9982.jpg"
  ],
  "slide07_tu_merites": [
    "/slides/img_9878.jpg",
    "/slides/cover.jpg"
  ],
  "slide08_jojo_travaille": [
    "/slides/img_5873.jpg"
  ],
  "slide09_jojo_copines": [
    "/slides/img_1680.jpg"
  ],
  "slide10_jojo_bresil": [
    "/slides/img_3874.jpg",
    "/slides/img_3912.jpg",
    "/slides/img_4228.jpg",
    "/slides/img_4342.jpg",
    "/slides/img_4401.jpg",
    "/slides/img_4439.jpg",
    "/slides/img_4472.jpg",
    "/slides/img_4479.jpg",
    "/slides/img_4482.jpg",
    "/slides/img_4535.jpg",
    "/slides/img_4575.jpg",
    "/slides/img_4718.jpg",
    "/slides/img_4881.jpg",
    "/slides/img_4988.jpg",
    "/slides/img_4991.jpg",
    "/slides/img_5191.jpg",
    "/slides/img_5395.jpg",
    "/slides/img_9492.jpg",
    "/slides/img_9982.jpg"
  ],
  "slide13_jojo_rigole": [
    "/slides/img_2079.jpg",
    "/slides/img_3912.jpg",
    "/slides/img_4991.jpg",
    "/slides/img_9787.jpg"
  ],
  "slide16_jojo_vacances": [
    "/slides/img_2278.jpg",
    "/slides/img_3874.jpg",
    "/slides/img_4401.jpg",
    "/slides/img_4535.jpg",
    "/slides/img_4718.jpg",
    "/slides/img_5312.jpg",
    "/slides/img_9878.jpg"
  ],
  "slide17_jojo_soleil": [
    "/slides/img_4439.jpg",
    "/slides/img_4472.jpg",
    "/slides/img_4479.jpg",
    "/slides/img_4575.jpg",
    "/slides/img_9868.jpg",
    "/slides/img_9878.jpg"
  ],
  "slide20_jojo_fashion": [
    "/slides/137f0741-fbf2-4718-af1f-dc6df1439206.jpg",
    "/slides/img_1547.jpg",
    "/slides/img_9707.jpg",
    "/slides/img_9868.jpg",
    "/slides/cover.jpg"
  ],
  "slide21_jojo_aventure": [
    "/slides/img_3874.jpg",
    "/slides/img_3912.jpg",
    "/slides/img_4342.jpg",
    "/slides/img_4881.jpg",
    "/slides/img_4991.jpg"
  ],
  "slide22_jojo_gourmande": [
    "/slides/0fd30d4a-a89c-4e73-872c-888c86d9555e.jpg",
    "/slides/img_1680.jpg",
    "/slides/img_2092.jpg",
    "/slides/img_5191.jpg",
    "/slides/img_9225.jpg",
    "/slides/img_9492.jpg"
  ],
  "slide23_jojo_partout": [
    "/slides/919a3a51-ef64-4eb6-b45e-e377e7aa615a.jpg",
    "/slides/img_1547.jpg",
    "/slides/img_1551.jpg",
    "/slides/img_2079.jpg",
    "/slides/img_3874.jpg",
    "/slides/img_4342.jpg",
    "/slides/img_4401.jpg",
    "/slides/img_4479.jpg",
    "/slides/img_4718.jpg",
    "/slides/img_4991.jpg",
    "/slides/img_5312.jpg",
    "/slides/img_5395.jpg",
    "/slides/img_9435.jpg",
    "/slides/img_9707.jpg",
    "/slides/img_9787.jpg",
    "/slides/img_9868.jpg",
    "/slides/img_9878.jpg",
    "/slides/img_9982.jpg",
    "/slides/cover.jpg"
  ],
  "slide24_parapente": [
    "/slides/parapente.jpg"
  ]
} as const

export type SlideFolder = keyof typeof slidePhotos

/** Les photos d'un dossier de slide (tableau vide si le dossier est absent ou vide). */
export function photosOf(folder: SlideFolder): string[] {
  return [...(slidePhotos[folder] ?? [])]
}
