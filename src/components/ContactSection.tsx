import type { ContactInfo } from '../types/content';
import { SectionShell } from './SectionShell';

type ContactSectionProps = {
  contactInfo: ContactInfo;
};

export function ContactSection({ contactInfo }: ContactSectionProps) {
  return (
    <SectionShell
      id="contacto"
      eyebrow="Contacto"
      title="Conversemos y veamos cuál puede ser un buen primer paso."
      intro="Puedes escribirnos, llamar o revisar la ubicación referencial del centro para imaginar mejor el próximo contacto."
    >
      <div className="contact-layout contact-layout--compact">
        <article className="contact-panel contact-panel--location">
          <p className="contact-panel__label">Dirección</p>
          <div className="contact-panel__location-image">
            <img
              src="/location.png"
              alt="Vista referencial de la ubicación y entorno del centro Terapia Paz Interior."
              loading="lazy"
            />
          </div>
          <p className="contact-panel__address">{contactInfo.address}</p>
        </article>

        <article className="contact-panel">
          <p className="contact-panel__label">Hablemos</p>
          <ul className="contact-details">
            <li>
              <span>Teléfono</span>
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
            </li>
            <li>
              <span>Correo</span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
          </ul>
          <p className="contact-panel__note contact-panel__note--right">
            Nota: el centro comparte dirección con el centro de estética Piel Bella.
          </p>
          <a
            className="contact-panel__maps-link"
            href={contactInfo.mapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Ver ubicación referencial en Google Maps"
          >
            <span className="contact-panel__maps-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M12 2.75c-3.38 0-6.12 2.74-6.12 6.12 0 4.72 6.12 12.38 6.12 12.38s6.12-7.66 6.12-12.38c0-3.38-2.74-6.12-6.12-6.12Zm0 8.62a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
              </svg>
            </span>
            <span>
              Ver ubicación en Maps
              <small>Abre la referencia en Google Maps</small>
            </span>
          </a>
          <a className="button button--solid contact-panel__cta" href={contactInfo.bookingUrl} target="_blank" rel="noreferrer">
            Agendar una primera orientación
          </a>
        </article>
      </div>
    </SectionShell>
  );
}
