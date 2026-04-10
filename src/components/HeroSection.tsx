import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  featuredNotes: string[];
};

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  featuredNotes,
}: HeroSectionProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      id="inicio"
      ref={ref}
      className={`hero reveal${isVisible ? ' is-visible' : ''}`}
      aria-labelledby="hero-title"
    >
      <div className="hero__content">
        <p className="hero__eyebrow">{eyebrow}</p>
        <h1 id="hero-title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <p className="hero__description">{description}</p>

        <div className="hero__actions">
          <a className="button button--solid" href={primaryCta.href} target="_blank" rel="noreferrer">
            {primaryCta.label}
          </a>
          <a className="button button--ghost" href={secondaryCta.href}>
            {secondaryCta.label}
          </a>
        </div>

        <ul className="hero__notes" aria-label="Aspectos destacados">
          {featuredNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__visual-frame">
          <div className="hero__visual-copy">
            <span>Espacio visual reservado</span>
            <strong>Fotografía del centro o momento de atención</strong>
            <p>Ideal para transmitir cercanía, calma y profesionalismo desde la primera impresión.</p>
          </div>
        </div>
        <div className="hero__badge hero__badge--top">Acompañamiento humano</div>
        <div className="hero__badge hero__badge--bottom">Orientación clara desde el inicio</div>
      </div>
    </section>
  );
}
