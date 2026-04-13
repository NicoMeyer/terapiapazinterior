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
      eyebrow="Familias"
      title="Una experiencia que busca sentirse clara, amable y acompañada."
      intro="Testimonios de demostración para representar cómo podría verse esta sección cuando el centro cuente con opiniones reales."
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
