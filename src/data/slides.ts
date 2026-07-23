import type { Slide } from '../types'

/**
 * ─────────────────────────────────────────────────────────────
 *  C'EST ICI QUE TOUT SE PERSONNALISE.
 *
 *  Dépose tes photos dans  /public/photos/  avec les noms
 *  ci-dessous (ou change les chemins ici, comme tu préfères).
 *  Le commentaire au-dessus de chaque slide décrit la photo attendue.
 *
 *  Tant qu'une photo manque, le site affiche un dégradé élégant
 *  à la place — rien ne casse.
 * ─────────────────────────────────────────────────────────────
 */

export const slides: Slide[] = [
  // ───────────────────────── PARTIE 1 — L'album ─────────────────────────

  // 001 — la plus belle photo d'elle (portrait ou paysage, peu importe)
  {
    kind: 'cinema',
    id: 'ouverture',
    image: '/photos/001.jpg',
    title: 'Joyeux anniversaire mon amour ❤️',
    lines: ['*21 ans* aujourd’hui.'],
  },

  // 002 — une photo d'elle qui sourit
  {
    kind: 'cinema',
    id: 'sourire',
    image: '/photos/002.jpg',
    lines: [
      '*21 ans* que tu souris.',
      '*21 ans* que tu es belle.',
      '*21 ans* que tu illumines tous les endroits où tu passes.',
    ],
  },

  // 003 — une photo avec sa famille ou ses amis
  {
    kind: 'cinema',
    id: 'les-gens',
    image: '/photos/003.jpg',
    lines: [
      '*21 ans* que tu aimes les gens plus fort que presque n’importe qui.',
      'Ta famille.',
      'Tes amis.',
      'Moi.',
    ],
  },

  // 004 — une photo drôle d'elle
  {
    kind: 'cinema',
    id: 'rabougrie',
    image: '/photos/004.jpg',
    lines: [
      '*21 ans* que tu es un peu rabougrie.',
      '(Il fallait bien trouver quelque chose.)',
    ],
  },

  // 005 — une belle photo de vous deux
  {
    kind: 'cinema',
    id: 'nous',
    image: '/photos/005.jpg',
    lines: [
      'Moi, ça fait seulement *un an et demi*.',
      '*Un an et demi* que je t’admire.',
      '*Un an et demi* que je tombe un peu plus amoureux chaque jour.',
      'Et surtout…',
      '*Un an et demi* où j’ai une chance incroyable :',
      'être ton copain.',
    ],
  },

  // 006 → 010 — cinq photos de souvenirs (voyages, soirées, fous rires…)
  {
    kind: 'montage',
    id: 'souvenirs',
    images: [
      '/photos/006.jpg',
      '/photos/007.jpg',
      '/photos/008.jpg',
      '/photos/009.jpg',
      '/photos/010.jpg',
    ],
    lines: [
      'Merci pour tous nos souvenirs.',
      'Les voyages. Les fous rires. Les soirées. Les embrouilles.',
      'Je ne changerais *rien*.',
    ],
  },

  // 011 — une photo calme, douce
  {
    kind: 'cinema',
    id: 'bonheur',
    image: '/photos/011.jpg',
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

  // 012 — Jojo en train de travailler
  {
    kind: 'chapter',
    id: 'jojo-travaille',
    title: 'Jojo travaille',
    caption: 'Jojo travaille beaucoup.',
    note: '(Beaucoup trop.)',
    image: '/photos/012.jpg',
    palette: 'creme',
  },

  // 013 — Jojo avec ses copines
  {
    kind: 'chapter',
    id: 'jojo-copines',
    title: 'Jojo avec ses copines',
    caption: 'Jojo adore retrouver les gens qu’elle aime.',
    image: '/photos/013.jpg',
    palette: 'rose',
  },

  // 014 — Jojo au Brésil
  {
    kind: 'chapter',
    id: 'jojo-bresil',
    title: 'Jojo au Brésil',
    image: '/photos/014.jpg',
    palette: 'soleil',
  },

  // 015 — Jojo en Amérique du Sud
  {
    kind: 'chapter',
    id: 'jojo-amerique-du-sud',
    title: 'Jojo en Amérique du Sud',
    image: '/photos/015.jpg',
    palette: 'menthe',
  },

  // 016 — Jojo avec sa maman
  {
    kind: 'chapter',
    id: 'jojo-maman',
    title: 'Jojo avec sa maman',
    image: '/photos/016.jpg',
    palette: 'peche',
  },

  // 017 — Jojo qui rigole
  {
    kind: 'chapter',
    id: 'jojo-rigole',
    title: 'Jojo qui rigole',
    image: '/photos/017.jpg',
    palette: 'ciel',
  },

  // 018 — Jojo à la ferme
  {
    kind: 'chapter',
    id: 'jojo-ferme',
    title: 'Jojo à la ferme',
    image: '/photos/018.jpg',
    palette: 'menthe',
  },

  // 019 — Jojo à l'Élysée
  {
    kind: 'chapter',
    id: 'jojo-elysee',
    title: 'Jojo à l’Élysée',
    image: '/photos/019.jpg',
    palette: 'lilas',
  },

  // 020 — Jojo en vacances
  {
    kind: 'chapter',
    id: 'jojo-vacances',
    title: 'Jojo en vacances',
    image: '/photos/020.jpg',
    palette: 'corail',
  },

  // 021 — Jojo au soleil
  {
    kind: 'chapter',
    id: 'jojo-soleil',
    title: 'Jojo au soleil',
    image: '/photos/021.jpg',
    palette: 'soleil',
  },

  // 022 — Jojo sous la pluie
  {
    kind: 'chapter',
    id: 'jojo-pluie',
    title: 'Jojo sous la pluie',
    image: '/photos/022.jpg',
    palette: 'ciel',
  },

  // 023 — n'importe quelle photo de Jojo, n'importe où
  {
    kind: 'chapter',
    id: 'jojo-partout',
    title: 'Jojo partout',
    caption: 'On peut mettre Jojo partout.',
    image: '/photos/023.jpg',
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

  // 024 — un beau paysage de France (ou n'importe quelle photo d'elle en France)
  {
    kind: 'chapter',
    id: 'jojo-france',
    title: 'Jojo en France 🇫🇷',
    image: '/photos/024.jpg',
    palette: 'ciel',
  },

  // 025 — une très belle photo d'Annecy
  {
    kind: 'chapter',
    id: 'jojo-annecy',
    title: 'Jojo à Annecy',
    image: '/photos/025.jpg',
    palette: 'menthe',
  },

  // 026 — une photo de montagne
  {
    kind: 'chapter',
    id: 'jojo-montagne',
    title: 'Jojo à la montagne',
    caption: 'Ça commence à devenir intéressant…',
    image: '/photos/026.jpg',
    palette: 'creme',
  },

  // 027 — une photo de parapente (elle sera automatiquement floutée)
  {
    kind: 'tease',
    id: 'dans-les-airs',
    title: 'Jojo… dans les airs ??',
    image: '/photos/027.jpg',
  },

  // La grande slide — confettis + carte d'embarquement (pas de photo nécessaire)
  {
    kind: 'reveal',
    id: 'parapente',
  },

  // 028 — votre plus belle photo à deux
  {
    kind: 'finale',
    id: 'finale',
    image: '/photos/028.jpg',
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

/** Toutes les images du site, dans l'ordre d'apparition (pour le préchargement). */
export const allImages: string[] = slides.flatMap((s) => {
  if (s.kind === 'montage') return s.images
  return 'image' in s && s.image ? [s.image] : []
})
