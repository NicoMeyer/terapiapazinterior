import type { Professional, Specialty } from '../types/content';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { SectionShell } from './SectionShell';

type TeamSectionProps = {
  professionals: Professional[];
  specialties: Specialty[];
  onSelectProfessional: (professional: Professional) => void;
};

type ProfessionalCardProps = {
  professional: Professional;
  specialtyName?: string;
  index: number;
  onSelectProfessional: (professional: Professional) => void;
};

function ProfessionalCard({
  professional,
  specialtyName,
  index,
  onSelectProfessional,
}: ProfessionalCardProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`professional-card professional-card--visual professional-card--interactive reveal${
        isVisible ? ' is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="professional-card__portrait">
        {professional.photo ? (
          <img src={professional.photo} alt={professional.photoAlt} loading="lazy" />
        ) : (
          <span>{professional.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
        )}
      </div>
      <div className="professional-card__body">
        <p className="professional-card__role">{specialtyName}</p>
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
  );
}

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
      title="Cuatro miradas profesionales para acompañar a cada familia con calidez y claridad."
      intro="El equipo combina áreas actuales y futuras para que la experiencia siga creciendo sin perder cercanía, orientación simple y un trato humano."
    >
      <div className="team-grid">
        {professionals.map((professional, index) => (
          <ProfessionalCard
            key={professional.id}
            professional={professional}
            specialtyName={specialtyNames.get(professional.specialtyId)}
            index={index}
            onSelectProfessional={onSelectProfessional}
          />
        ))}
      </div>
    </SectionShell>
  );
}
