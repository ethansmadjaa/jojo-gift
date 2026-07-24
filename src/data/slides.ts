import type { Slide } from '../types'
import { photosOf } from './photos'

/**
 * ─────────────────────────────────────────────────────────────
 *  C'EST ICI QUE TOUT SE PERSONNALISE.
 *
 *  Les photos viennent des dossiers /slides/slideNN_… du dépôt :
 *  dépose/retire des photos dans un dossier, relance
 *  `bun scripts/build-photos.mjs`, et la slide suit.
 *
 *  Une slide "chapter" sans photo affiche un grand emoji
 *  dans le polaroïd — rien ne casse.
 * ─────────────────────────────────────────────────────────────
 */

export const slides: Slide[] = [
  // ───────────────────────── PARTIE 1 — L'album ─────────────────────────

  // La plus belle photo d'elle.
  {
    kind: 'cinema',
    id: 'ouverture',
    images: photosOf('slide01_cover'),
    title: 'Joyeux anniversaire mon amour ❤️',
    lines: ['*21 ans* aujourd’hui.'],
  },

  // Elle qui sourit — les photos défilent en fondu enchaîné.
  {
    kind: 'cinema',
    id: 'sourire',
    images: photosOf('slide02_21_ans'),
    lines: [
      '*21 ans* que tu souris.',
      '*21 ans* que tu es belle.',
      '*21 ans* que tu illumines tous les endroits où tu passes.',
    ],
  },

  // Elle avec sa famille, ses amis.
  {
    kind: 'cinema',
    id: 'les-gens',
    images: photosOf('slide03_aime_les_gens'),
    lines: [
      '*21 ans* que tu ammenes la joie partout où tu passes.',
      'avec ta famille.',
      'avec tes amis.',
      'avec moi.',
    ],
  },

  // Les photos drôles.
  {
    kind: 'cinema',
    id: 'rabougrie',
    images: photosOf('slide04_rabougrie'),
    lines: [
      '*21 ans* que tu es un peu rabougrie.',
      '(Il fallait bien trouver quelque chose.)',
    ],
  },

  // Nous deux.
  {
    kind: 'cinema',
    id: 'nous',
    images: photosOf('slide05_notre_histoire'),
    lines: [
      'Moi, ça fait seulement *un an et demi*.',
      '*Un an et demi* que je t’admire.',
      '*Un an et demi* que je tombe un peu plus amoureux chaque jour.',
      'Et surtout…',
      '*Un an et demi* où j’ai une chance incroyable :',
      'être ton copain.',
    ],
  },

  // La mosaïque de souvenirs (les cases tournent s'il y a plus de 5 photos).
  {
    kind: 'montage',
    id: 'souvenirs',
    images: photosOf('slide06_nos_souvenirs'),
    lines: [
      'Merci pour tous nos souvenirs.',
      'Les voyages. Les fous rires. Les soirées. Les embrouilles.',
      'Je ne changerais *rien*.',
    ],
  },

  // Une photo calme, douce.
  {
    kind: 'cinema',
    id: 'bonheur',
    images: photosOf('slide07_tu_merites'),
    lines: [
      'Tu mérites tout le bonheur du monde.',
      'Vraiment.',
      'Parce que tu es une personne exceptionnelle.',
      'Et j’aimerais que tout le monde puisse te connaître comme moi j’ai la chance de te connaître.',
    ],
  },

  // ───────────────────── Transition — fond noir ─────────────────────
  {
    kind: 'noir',
    id: 'whats-next',
    silence: true,
    lines: [
      'Mais aujourd’hui…',
      'ce n’est pas seulement ton anniversaire.',
      'Aujourd’hui…',
      'il faut décider…',
    ],
    final: 'What’s next ?',
  },

  // ──────────────── PARTIE 2 — Le livre de Jojo ────────────────

  {
    kind: 'chapter',
    id: 'jojo-travaille',
    title: 'Jojo travaille',
    caption: 'Jojo travaille beaucoup.',
    note: '(Beaucoup trop.)',
    images: photosOf('slide08_jojo_travaille'),
    palette: 'creme',
  },

  {
    kind: 'chapter',
    id: 'jojo-copines',
    title: 'Jojo avec ses copines',
    caption: 'Jojo adore retrouver les gens qu’elle aime.',
    images: photosOf('slide09_jojo_copines'),
    palette: 'rose',
  },

  {
    kind: 'chapter',
    id: 'jojo-bresil',
    title: 'Jojo au Brésil',
    images: photosOf('slide10_jojo_bresil'),
    palette: 'soleil',
  },

  {
    kind: 'chapter',
    id: 'jojo-amerique-du-sud',
    title: 'Jojo en Amérique du Sud',
    images: photosOf('slide11_jojo_amerique_sud'),
    palette: 'menthe',
  },

  {
    kind: 'chapter',
    id: 'jojo-maman',
    title: 'Jojo avec sa maman',
    images: photosOf('slide12_jojo_maman'),
    palette: 'peche',
  },

  {
    kind: 'chapter',
    id: 'jojo-rigole',
    title: 'Jojo qui rigole',
    images: photosOf('slide13_jojo_rigole'),
    palette: 'ciel',
  },

  {
    kind: 'chapter',
    id: 'jojo-ferme',
    title: 'Jojo à la ferme',
    images: photosOf('slide14_jojo_ferme'),
    palette: 'menthe',
  },

  {
    kind: 'chapter',
    id: 'jojo-elysee',
    title: 'Jojo à l’Élysée',
    images: photosOf('slide15_jojo_elysee'),
    palette: 'lilas',
  },

  {
    kind: 'chapter',
    id: 'jojo-vacances',
    title: 'Jojo en vacances',
    images: photosOf('slide16_jojo_vacances'),
    palette: 'corail',
  },

  {
    kind: 'chapter',
    id: 'jojo-soleil',
    title: 'Jojo au soleil',
    images: photosOf('slide17_jojo_soleil'),
    palette: 'soleil',
  },

  {
    kind: 'chapter',
    id: 'jojo-pluie',
    title: 'Jojo sous la pluie',
    images: [],
    emoji: '☔',
    palette: 'ciel',
  },

  {
    kind: 'chapter',
    id: 'jojo-sport',
    title: 'Jojo fait du sport',
    note: '(Si, si, ça arrive.)',
    images: photosOf('slide19_jojo_sport'),
    palette: 'corail',
  },

  {
    kind: 'chapter',
    id: 'jojo-fashion',
    title: 'Jojo fashion',
    images: photosOf('slide20_jojo_fashion'),
    palette: 'rose',
  },

  {
    kind: 'chapter',
    id: 'jojo-aventure',
    title: 'Jojo l’aventurière',
    images: photosOf('slide21_jojo_aventure'),
    palette: 'menthe',
  },

  {
    kind: 'chapter',
    id: 'jojo-gourmande',
    title: 'Jojo gourmande',
    images: photosOf('slide22_jojo_gourmande'),
    palette: 'peche',
  },

  {
    kind: 'chapter',
    id: 'jojo-partout',
    title: 'Jojo partout',
    caption: 'On peut mettre Jojo partout.',
    images: photosOf('slide23_jojo_partout'),
    palette: 'lilas',
  },

  // ───────────────────── Suspense — fond noir ─────────────────────
  {
    kind: 'noir',
    id: 'ou-va-jojo',
    silence: true,
    lines: ['Mais…'],
    final: 'où va aller Jojo ensuite ?',
  },

  // ───────────────────── La révélation ─────────────────────

  {
    kind: 'chapter',
    id: 'jojo-france',
    title: 'Jojo en France 🇫🇷',
    images: [],
    emoji: '🇫🇷',
    palette: 'ciel',
  },

  {
    kind: 'chapter',
    id: 'jojo-annecy',
    title: 'Jojo à Annecy',
    images: [],
    emoji: '⛵',
    palette: 'menthe',
  },

  {
    kind: 'chapter',
    id: 'jojo-montagne',
    title: 'Jojo à la montagne',
    caption: 'Ça commence à devenir intéressant…',
    images: [],
    emoji: '🏔️',
    palette: 'creme',
  },

  // La photo de parapente, floutée pour le suspense…
  {
    kind: 'tease',
    id: 'dans-les-airs',
    title: 'Jojo… dans les airs ??',
    image: photosOf('slide24_parapente')[0],
  },

  // …puis nette derrière les confettis et la carte d'embarquement.
  {
    kind: 'reveal',
    id: 'parapente',
    image: photosOf('slide24_parapente')[0],
  },

  // Votre plus belle photo à deux (changer le chemin ici si besoin).
  {
    kind: 'finale',
    id: 'finale',
    image: '/slides/img_4718.jpg',
    lines: [
      'Joyeux anniversaire mon amour.',
      'Merci de rendre ma vie plus belle chaque jour.',
      'Je t’aime plus que tout.',
      '❤️',
    ],
  },

  // Fondu au noir
  { kind: 'blackout', id: 'fin' },
]

/** Index de la première slide de la partie 2 (changement de musique). */
export const PART_TWO_START = slides.findIndex((s) => s.id === 'jojo-travaille')

/** Toutes les images du site, dédupliquées, dans l'ordre d'apparition (préchargement). */
export const allImages: string[] = [
  ...new Set(
    slides.flatMap((s) => {
      if ('images' in s) return s.images
      return 'image' in s && s.image ? [s.image] : []
    }),
  ),
]
