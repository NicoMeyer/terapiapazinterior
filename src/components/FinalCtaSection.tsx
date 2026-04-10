type FinalCtaSectionProps = {
  bookingUrl: string;
};

export function FinalCtaSection({ bookingUrl }: FinalCtaSectionProps) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <p className="final-cta__eyebrow">Siguiente paso</p>
      <h2 id="final-cta-title">Conozcamos tu caso y orientemos el mejor punto de partida.</h2>
      <p>Una conversación inicial puede ayudar a ordenar dudas y abrir un camino más claro.</p>
      <a className="button button--solid" href={bookingUrl} target="_blank" rel="noreferrer">
        Agendar orientación
      </a>
    </section>
  );
}
