/**
 * Point focal par photo, pour les cadres qui rognent l'image (ex. le polaroïd
 * en ratio 4/3 des slides "chapter"). Valeur CSS `object-position`
 * (ex. "50% 15%" pour recadrer plus haut, "50% 60%" pour recadrer plus bas).
 *
 * Clé = nom de fichier tel qu'il apparaît dans src/data/photos.ts
 * (ex. "/slides/img_9878.jpg" → "img_9878.jpg").
 * Pas couvert ici = valeur par défaut du CSS (50% 28%, recadré vers le haut).
 */
export const photoFocus: Record<string, string> = {
  // --- slides 01-04 (cinema plein écran très large, ~16:9) ---
  'cover.jpg': '38% 18%', // diplôme, visages dans le tiers haut
  'img_1551.jpg': '50% 15%', // gros plan coquillages, visage tout en haut
  'img_3912.jpg': '55% 15%', // portrait profil casquette, visage en haut à droite
  'img_4991.jpg': '45% 12%', // gros plan visage caipirinha, tout en haut
  'img_9435.jpg': '55% 15%', // portrait apéro, visage en haut
  'img_9787.jpg': '50% 20%', // portrait qui rit, tenue rouge, visage haut
  '919a3a51-ef64-4eb6-b45e-e377e7aa615a.jpg': '50% 30%', // duo joue contre joue, visages assez haut
  'img_1680.jpg': '50% 25%', // duo copines, visages en haut
  'img_2219.jpg': '50% 35%', // câlin couple, visages assez haut
  'img_4718.jpg': '55% 40%', // bisou dunes, couple debout, visages au 1/3-haut
  'img_1555.jpg': '50% 20%', // gros plan visage supermarché, tout en haut
  'img_1719.jpg': '50% 30%', // selfie duo à la maison, visages hauts
  'img_2016.jpg': '50% 25%', // gros plan visage bouquet, visage haut

  // --- jojo en vacances ---
  'img_2278.jpg': '50% 60%', // couple debout pleine longueur, bonnets de Noël
  'img_3874.jpg': '45% 45%', // bras levés, visage vers le centre
  'img_4401.jpg': '50% 45%', // baiser debout, silhouette entière
  'img_4535.jpg': '55% 50%', // couple debout dunes, visages au centre
  'img_9878.jpg': '35% 35%', // profil golden hour, déjà haut, léger ajustement horizontal

  // --- jojo au soleil ---
  'img_4439.jpg': '50% 40%', // portrait debout bikini, visage assez haut
  'img_4472.jpg': '40% 25%', // duo plage, visages en haut du cadre
  'img_4575.jpg': '50% 35%', // portrait profil bikini, sourire haut
  'img_9868.jpg': '35% 65%', // câlin peau contre peau, visages bas et à gauche

  // --- jojo fashion ---
  '137f0741-fbf2-4718-af1f-dc6df1439206.jpg': '65% 55%', // duo bar de nuit, visages centrés à droite
  'img_1547.jpg': '65% 25%', // portrait bouquet, visage en haut à droite
  'img_9707.jpg': '50% 40%', // robe à pois, visage assez haut

  // --- jojo s'endort partout ---
  'img_9959.jpg': '55% 40%', // duo au lit, visage de Joe au centre-haut
  'img_1067.jpg': '75% 45%', // duo au lit, visage de Joe à droite au centre
  'img_1782.jpg': '55% 55%', // gros plan visage qui dort, bien centré
  'img_4964.jpg': '50% 45%', // hamac, visage au centre-haut
  'img_8145.jpg': '45% 55%', // gros plan visage réveil, centré

  // --- jojo qui rigole ---
  'img_6677.jpg': '55% 40%', // grimace en voiture, visage haut-droite
  'img_6930.jpg': '30% 45%', // duo cri de joie plage, visages au centre à gauche
  'img_5644.jpg': '50% 30%', // rire au resto, visage haut
  'img_8015.jpg': '50% 35%', // sourire avec nounours, visage haut
  'img_5743.jpg': '50% 30%', // grimace langue tirée musée, visage haut
  'img_9232.jpg': '65% 45%', // duo rire au jardin, visages au centre-droite
  'ce63fa1b-aadf-4e76-95f4-32d89ca175e6.jpg': '35% 35%', // duo rire selfie rue, visages en haut à gauche

  // --- jojo travaille / ferme / élysée / pluie ---
  'image.jpg': '65% 30%', // bureau L'Oréal, visage en haut à droite
  'slide14_jojo_ferme-image.jpg': '45% 25%', // ferme avec veau et chèvre, visage haut
  'slide15_jojo_elysee-image.jpg': '75% 30%', // duo avec le président, visage de Joe à droite en haut
  'slide18_jojo_pluie-image.jpg': '65% 30%', // portrait sous la pluie, visage en haut à droite
}

/** Point focal pour une URL de photo (ex. "/slides/img_9878.jpg"), ou undefined si pas de réglage custom. */
export function focusFor(src: string): string | undefined {
  const name = src.split('/').pop()
  return name ? photoFocus[name] : undefined
}
