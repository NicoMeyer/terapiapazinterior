import { useEffect, useRef } from 'react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import type { Professional } from '../types/content';

type ProfessionalModalProps = {
  professional: Professional;
  specialtyName: string;
  onClose: () => void;
  bookingUrl: string;
};

export function ProfessionalModal({
  professional,
  specialtyName,
  onClose,
  bookingUrl,
}: ProfessionalModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  useBodyScrollLock(true);

  useEffect(() => {
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        );

        const focusable = Array.from(focusableElements);

        if (focusable.length === 0) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElementRef.current?.focus({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <div
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="professional-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Cerrar perfil profesional"
        >
          Cerrar
        </button>

        <div className="modal__media">
          {professional.photo ? (
            <img src={professional.photo} alt={professional.photoAlt} loading="lazy" />
          ) : (
            <span>{professional.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
          )}
        </div>

        <div className="modal__content">
          <p className="modal__eyebrow">{specialtyName}</p>
          <h2 id="professional-modal-title">{professional.name}</h2>
          <p className="modal__summary">{professional.bioFull}</p>

          <div className="modal__grid">
            <section>
              <h3>Credenciales y formación</h3>
              <ul>
                {professional.credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Áreas de enfoque</h3>
              <ul>
                {professional.focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </section>
          </div>

          <a className="button button--solid" href={bookingUrl} target="_blank" rel="noreferrer">
            {professional.contactCtaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
