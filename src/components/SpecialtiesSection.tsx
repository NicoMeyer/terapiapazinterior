import type { Specialty } from '../types/content';
import { SectionShell } from './SectionShell';

type SpecialtiesSectionProps = {
  specialties: Specialty[];
};

export function SpecialtiesSection({ specialties }: SpecialtiesSectionProps) {
  return (
    <SectionShell
      id="especialidades"
      eyebrow="Especialidades"
      title="Dos especialidades para acompañar con claridad y cercanía."
      intro="Una propuesta simple de entender, con foco en intervención práctica y apoyo real para cada familia."
    >
      <div className="specialties-list">
        {specialties.map((specialty) => (
          <article key={specialty.id} className="specialty-panel">
            <div className="specialty-panel__media">
              <img src={specialty.image} alt={specialty.imageAlt} loading="lazy" />
            </div>
            <div className="specialty-panel__heading">
              <p>{specialty.id === 'ocupacional' ? '01' : '02'}</p>
              <h3>{specialty.name}</h3>
            </div>
            <p className="specialty-panel__summary">{specialty.summary}</p>
            <ul>
              {specialty.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
