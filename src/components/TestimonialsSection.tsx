import type { Testimonial } from '../types/content';
import { SectionShell } from './SectionShell';

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <SectionShell
      id="testimonios"
      eyebrow="Recomendaciones"
      title="Una sección pensada para transmitir confianza sin perder transparencia en esta primera versión."
      intro="Los siguientes testimonios son de demostración y están incluidos para representar cómo se verá esta área al contar con opiniones reales."
    >
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial-card">
            {testimonial.isDemo ? <span className="tag">Testimonio de demostración</span> : null}
            <blockquote>{testimonial.quote}</blockquote>
            <p>
              {testimonial.author} · {testimonial.relation}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
