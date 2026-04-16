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
      aside={
        <a className="button button--ghost" href={contactInfo.mapsUrl} target="_blank" rel="noreferrer">
          Ver ubicación en Maps
        </a>
      }
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
          <a className="button button--solid contact-panel__cta" href={contactInfo.bookingUrl} target="_blank" rel="noreferrer">
            Agendar una primera orientación
          </a>
        </article>
      </div>
    </SectionShell>
  );
}
