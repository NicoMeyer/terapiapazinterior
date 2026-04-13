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
  image: {
    src: string;
    alt: string;
  };
  imageCaption: {
    eyebrow: string;
    title: string;
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
  image,
  imageCaption,
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
          <img className="hero__image" src={image.src} alt={image.alt} />
          <div className="hero__visual-copy">
            <span>{imageCaption.eyebrow}</span>
            <strong>{imageCaption.title}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
