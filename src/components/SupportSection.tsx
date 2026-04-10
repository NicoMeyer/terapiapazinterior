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
    points: string[];
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

        <div className="support-story__points" aria-label="Principios de acompañamiento">
          {content.points.map((point) => (
            <article key={point} className="support-point">
              <span className="support-point__dot" aria-hidden="true" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
