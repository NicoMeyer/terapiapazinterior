import type { PropsWithChildren, ReactNode } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

type SectionShellProps = PropsWithChildren<{
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  aside?: ReactNode;
}>;

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  className = '',
  aside,
  children,
}: SectionShellProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`section-shell reveal${isVisible ? ' is-visible' : ''} ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <div className="section-shell__heading">
        <div>
          {eyebrow ? <p className="section-shell__eyebrow">{eyebrow}</p> : null}
          <h2 id={`${id}-title`} className="section-shell__title">
            {title}
          </h2>
          {intro ? <p className="section-shell__intro">{intro}</p> : null}
        </div>
        {aside ? <div className="section-shell__aside">{aside}</div> : null}
      </div>
      {children}
    </section>
  );
}
