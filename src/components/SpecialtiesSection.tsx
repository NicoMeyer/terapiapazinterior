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
      title="Dos áreas para acompañar procesos con atención clara, cercana y aplicada a la vida cotidiana."
      intro="La propuesta inicial del centro combina intervención terapéutica y acompañamiento nutricional desde un lenguaje accesible y profesional."
    >
      <div className="specialties-list">
        {specialties.map((specialty) => (
          <article key={specialty.id} className="specialty-panel">
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
