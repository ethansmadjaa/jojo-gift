# Joyeux anniversaire ❤️

Un mini film interactif : un album cinématographique, puis le livre de Jojo,
puis la révélation — **Jojo en parapente 🪂**.

## Lancer

```bash
npm install
npm run dev
```

(ou `bun install` / `bun dev`)

## Personnaliser

Tout le contenu vit dans **`src/data/slides.ts`** : textes, ordre des slides,
chemins des photos. Chaque slide y est commentée avec la photo attendue.

### Photos — `/public/photos/`

Nommer les fichiers `001.jpg` → `028.jpg` (le commentaire au-dessus de chaque
slide dans `slides.ts` décrit la photo attendue) :

| Fichier | Photo |
| --- | --- |
| 001 | La plus belle photo d'elle (ouverture) |
| 002 | Elle qui sourit |
| 003 | Avec sa famille / ses amis |
| 004 | Une photo drôle |
| 005 | Vous deux |
| 006–010 | Cinq souvenirs (montage) |
| 011 | Une photo calme |
| 012 | Jojo travaille |
| 013 | Jojo avec ses copines |
| 014 | Jojo au Brésil |
| 015 | Jojo en Amérique du Sud |
| 016 | Jojo avec sa maman |
| 017 | Jojo qui rigole |
| 018 | Jojo à la ferme |
| 019 | Jojo à l'Élysée |
| 020 | Jojo en vacances |
| 021 | Jojo au soleil |
| 022 | Jojo sous la pluie |
| 023 | Jojo partout |
| 024 | Un paysage de France |
| 025 | Annecy |
| 026 | La montagne |
| 027 | Parapente (floutée automatiquement) |
| 028 | Votre plus belle photo à deux (finale) |

> ⚠️ Utiliser du **.jpg / .png / .webp** — les fichiers **.HEIC ne s'affichent
> pas** dans Chrome et Android. Sur Mac : `sips -s format jpeg photo.HEIC --out 001.jpg`.

Tant qu'une photo manque, un dégradé élégant s'affiche à la place — rien ne casse.

### Musique — `/public/music/`

- `part-1.mp3` — partie album (douce, émotionnelle)
- `part-2.mp3` — partie livre de Jojo (joyeuse)

La musique se lance avec le bouton en haut à droite, continue entre les slides,
passe en fondu enchaîné d'une partie à l'autre, et baisse pendant les slides noires.
Si `part-2.mp3` manque, la première piste continue simplement.

## Navigation

- **Clic / tap** : slide suivante
- **← →**, **espace**, **entrée** : navigation clavier
- **Balayage** gauche/droite sur mobile
- Bouton **‹** en bas à gauche : revenir en arrière
