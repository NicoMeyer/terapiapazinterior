import { SectionShell } from './SectionShell';

type MissionSectionProps = {
  title: string;
  paragraphs: string[];
  principles: Array<{
    title: string;
    description: string;
  }>;
};

export function MissionSection({ title, paragraphs, principles }: MissionSectionProps) {
  return (
    <SectionShell
      id="enfoque"
      eyebrow="Nuestro enfoque"
      title={title}
      intro="Buscamos que la experiencia del centro se sienta ordenada, comprensible y acogedora para quienes consultan por primera vez."
    >
      <div className="mission-grid">
        <div className="mission-grid__text">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mission-grid__principles">
          {principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
