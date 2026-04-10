import type { ContactInfo } from '../types/content';
import { SectionShell } from './SectionShell';

type ContactSectionProps = {
  contactInfo: ContactInfo;
};

export function ContactSection({ contactInfo }: ContactSectionProps) {
  return (
    <SectionShell
      id="contacto"
      eyebrow="Ubicación y contacto"
      title="Información clara para resolver dudas y facilitar el primer acercamiento al centro."
      intro="Esta primera versión prioriza una vía de contacto directa, una ubicación referencial y un acceso simple al agendamiento."
      aside={
        <a className="button button--ghost" href={contactInfo.mapsUrl} target="_blank" rel="noreferrer">
          Ver ubicación en Maps
        </a>
      }
    >
      <div className="contact-layout">
        <article className="contact-panel contact-panel--location">
          <p className="contact-panel__label">Dirección</p>
          <h3>{contactInfo.address}</h3>
          <p>
            La dirección mostrada es referencial y puede ajustarse cuando el centro defina su punto
            definitivo de atención.
          </p>
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
            <li>
              <span>Agendamiento</span>
              <a href={contactInfo.bookingUrl} target="_blank" rel="noreferrer">
                Solicitar orientación inicial
              </a>
            </li>
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}
