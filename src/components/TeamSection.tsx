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
  const specialtyNames = new Map(specialties.map((specialty) => [specialty.id, specialty.name]));

  return (
    <SectionShell
      id="equipo"
      eyebrow="Equipo"
      title="Un equipo pequeño, cercano y fácil de conocer."
      intro="Cada perfil se presenta de forma breve y el detalle queda disponible solo para quien quiera profundizar."
    >
      <div className="team-grid">
        {professionals.map((professional) => (
          <article key={professional.id} className="professional-card professional-card--visual">
            <div className="professional-card__portrait">
              {professional.photo ? (
                <img src={professional.photo} alt={professional.photoAlt} loading="lazy" />
              ) : (
                <span>{professional.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
              )}
            </div>
            <div className="professional-card__body">
              <p className="professional-card__role">{specialtyNames.get(professional.specialtyId)}</p>
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
    </SectionShell>
  );
}
