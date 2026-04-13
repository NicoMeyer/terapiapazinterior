type FinalCtaSectionProps = {
  bookingUrl: string;
};

export function FinalCtaSection({ bookingUrl }: FinalCtaSectionProps) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <p className="final-cta__eyebrow">Primer paso</p>
      <h2 id="final-cta-title">Si hoy tienen dudas, podemos empezar con una conversación clara y cercana.</h2>
      <p>La idea no es tener todas las respuestas de inmediato, sino abrir un camino amable para saber cómo seguir.</p>
      <a className="button button--solid" href={bookingUrl} target="_blank" rel="noreferrer">
        Agendar orientación
      </a>
    </section>
  );
}
