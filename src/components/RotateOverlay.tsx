/**
 * Sur téléphone en mode portrait, on invite à tourner l'écran :
 * l'expérience est conçue pour le paysage.
 * L'affichage est géré en pur CSS (orientation + pointer coarse).
 */
export function RotateOverlay() {
  return (
    <div className="rotate-overlay" role="status">
      <div className="rotate-phone" aria-hidden>
        <div className="rotate-phone-notch" />
      </div>
      <p className="rotate-text">Tourne ton téléphone</p>
      <p className="rotate-sub">l’histoire se regarde en paysage&nbsp;❤️</p>
    </div>
  )
}
