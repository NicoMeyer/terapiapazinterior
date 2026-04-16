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
  const setCardRef = (node: HTMLElement | null) => {
    ref.current = node;
  };
  const cardClassName = `professional-card professional-card--visual professional-card--interactive reveal${
    isVisible ? ' is-visible' : ''
  }`;
  const cardStyle = { transitionDelay: `${index * 90}ms` };
  const cardContent = (
    <>
      <div className="professional-card__portrait">
        {professional.photo ? (
          <img src={professional.photo} alt={professional.photoAlt} loading="lazy" />
        ) : (
          <span>{professional.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
        )}
      </div>
      <div className="professional-card__body">
        <p className="professional-card__role">{specialtyName}</p>
        {professional.statusLabel ? (
          <div className="professional-card__future-state">
            <h4>{professional.statusLabel}</h4>
          </div>
        ) : (
          <>
            <div className="professional-card__title-group">
              <h4>{professional.name}</h4>
            </div>
            <p>{professional.bioShort}</p>
          </>
        )}
      </div>
    </>
  );

  if (professional.statusLabel) {
    return (
      <article ref={ref} className={cardClassName} style={cardStyle}>
        {cardContent}
      </article>
    );
  }

  return (
    <button
      ref={setCardRef}
      type="button"
      className={`${cardClassName} professional-card--button`}
      style={cardStyle}
      onClick={() => onSelectProfessional(professional)}
      aria-label={`Ver perfil completo de ${professional.name}`}
    >
      {cardContent}
    </button>
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
