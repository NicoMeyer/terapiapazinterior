import { SectionShell } from './SectionShell';

type SupportSectionProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
};

export function SupportSection({ content }: SupportSectionProps) {
  return (
    <SectionShell
      id="acompanamiento"
      eyebrow={content.eyebrow}
      title={content.title}
      intro={content.description}
      className="section-shell--support"
    >
      <div className="support-story">
        <div className="support-story__media">
          <img src={content.image.src} alt={content.image.alt} loading="lazy" />
        </div>

        <div className="support-story__points" aria-label="Pasos del acompañamiento inicial">
          {content.steps.map((step) => (
            <article key={step.number} className="support-point">
              <span className="support-point__number" aria-hidden="true">
                {step.number}
              </span>
              <div className="support-point__body">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
