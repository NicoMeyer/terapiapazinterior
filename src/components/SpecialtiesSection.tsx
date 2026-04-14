import type { Specialty } from '../types/content';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { SectionShell } from './SectionShell';

type SpecialtiesSectionProps = {
  specialties: Specialty[];
};

type SpecialtyCardProps = {
  specialty: Specialty;
  index: number;
};

function SpecialtyCard({ specialty, index }: SpecialtyCardProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();
  const number = String(index + 1).padStart(2, '0');

  return (
    <article
      ref={ref}
      className={`specialty-panel specialty-panel--interactive reveal${isVisible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
      tabIndex={0}
    >
      <div className="specialty-panel__media">
        <img src={specialty.image} alt={specialty.imageAlt} loading="lazy" />
      </div>
      <div className="specialty-panel__heading">
        <p>{number}</p>
        <div className="specialty-panel__title-group">
          <h3>{specialty.name}</h3>
          {specialty.statusLabel ? <span className="tag">{specialty.statusLabel}</span> : null}
        </div>
      </div>
      <p className="specialty-panel__summary">{specialty.summary}</p>
      <ul>
        {specialty.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

export function SpecialtiesSection({ specialties }: SpecialtiesSectionProps) {
  return (
    <SectionShell
      id="especialidades"
      eyebrow="Especialidades"
      title="Cuatro áreas para acompañar juego, hábitos, comunicación y bienestar en familia."
      intro="Una propuesta clara y cercana, pensada para crecer junto a nuevas especialidades sin perder una experiencia simple de recorrer."
    >
      <div className="specialties-list">
        {specialties.map((specialty, index) => (
          <SpecialtyCard key={specialty.id} specialty={specialty} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
