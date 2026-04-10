type FinalCtaSectionProps = {
  bookingUrl: string;
};

export function FinalCtaSection({ bookingUrl }: FinalCtaSectionProps) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <p className="final-cta__eyebrow">Primer paso</p>
      <h2 id="final-cta-title">
        Un espacio terapéutico puede sentirse profesional y, al mismo tiempo, profundamente humano.
      </h2>
      <p>
        Si hoy buscas orientación para ti o para alguien a tu cuidado, esta SPA ya deja preparada una
        base clara para conocer el centro y dar el siguiente paso con confianza.
      </p>
      <a className="button button--solid" href={bookingUrl} target="_blank" rel="noreferrer">
        Ir a agendamiento
      </a>
    </section>
  );
}
