import type { Testimonial } from '../types/content';
import { SectionShell } from './SectionShell';

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <SectionShell
      id="testimonios"
      eyebrow="Confianza"
      title="Una referencia breve de cómo podría sentirse la experiencia."
      intro="Testimonios de demostración para representar esta futura sección con un tono más editorial y liviano."
    >
      <div className="testimonials-list testimonials-list--featured">
        {featuredTestimonials.map((testimonial) => (
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
