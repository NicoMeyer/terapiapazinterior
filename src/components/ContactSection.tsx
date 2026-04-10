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
      title="Un cierre simple para dar el siguiente paso."
      intro="Dirección referencial, vías de contacto directas y un acceso claro al agendamiento."
      aside={
        <a className="button button--ghost" href={contactInfo.mapsUrl} target="_blank" rel="noreferrer">
          Ver ubicación en Maps
        </a>
      }
    >
      <div className="contact-layout contact-layout--compact">
        <article className="contact-panel contact-panel--location">
          <p className="contact-panel__label">Dirección</p>
          <h3>{contactInfo.address}</h3>
          <p>Ubicación referencial para esta primera versión visual del centro.</p>
        </article>

        <article className="contact-panel">
          <p className="contact-panel__label">Contacto directo</p>
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
            Solicitar orientación inicial
          </a>
        </article>
      </div>
    </SectionShell>
  );
}
