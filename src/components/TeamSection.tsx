import type { Professional, Specialty } from '../types/content';
import { SectionShell } from './SectionShell';

type TeamSectionProps = {
  professionals: Professional[];
  specialties: Specialty[];
  onSelectProfessional: (professional: Professional) => void;
};

export function TeamSection({
  professionals,
  specialties,
  onSelectProfessional,
}: TeamSectionProps) {
  return (
    <SectionShell
      id="equipo"
      eyebrow="Equipo de trabajo"
      title="Profesionales que buscan combinar criterio terapéutico, escucha activa y orientación fácil de entender."
      intro="Cada perfil puede revisarse con más detalle sin salir de la página para mantener una navegación simple y directa."
    >
      <div className="team-groups">
        {specialties.map((specialty) => {
          const groupedProfessionals = professionals.filter(
            (professional) => professional.specialtyId === specialty.id,
          );

          return (
            <section key={specialty.id} className="team-group" aria-labelledby={`team-group-${specialty.id}`}>
              <div className="team-group__intro">
                <p>{specialty.name}</p>
                <h3 id={`team-group-${specialty.id}`}>{specialty.summary}</h3>
              </div>

              <div className="team-group__list">
                {groupedProfessionals.map((professional) => (
                  <article key={professional.id} className="professional-card">
                    <div className="professional-card__portrait" aria-label={professional.photoAlt}>
                      <span>{professional.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
                    </div>
                    <div className="professional-card__body">
                      <p className="professional-card__role">{professional.role}</p>
                      <h4>{professional.name}</h4>
                      <p>{professional.bioShort}</p>
                      <button
                        type="button"
                        className="button button--text"
                        onClick={() => onSelectProfessional(professional)}
                      >
                        Ver perfil completo
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </SectionShell>
  );
}
