import { useState } from 'react';
import {
  contactInfo,
  footerContent,
  heroContent,
  missionContent,
  navItems,
  professionals,
  specialties,
  testimonials,
} from './data/siteContent';
import { ContactSection } from './components/ContactSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MissionSection } from './components/MissionSection';
import { ProfessionalModal } from './components/ProfessionalModal';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import type { Professional } from './types/content';

function App() {
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);

  const selectedSpecialty = specialties.find(
    (specialty) => specialty.id === selectedProfessional?.specialtyId,
  );

  return (
    <div className="page-shell">
      <div className="page-shell__ambient page-shell__ambient--one" aria-hidden="true" />
      <div className="page-shell__ambient page-shell__ambient--two" aria-hidden="true" />

      <Header navItems={navItems} bookingUrl={contactInfo.bookingUrl} />

      <main>
        <HeroSection {...heroContent} />
        <MissionSection {...missionContent} />
        <SpecialtiesSection specialties={specialties} />
        <TeamSection
          professionals={professionals}
          specialties={specialties}
          onSelectProfessional={setSelectedProfessional}
        />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection contactInfo={contactInfo} />
        <FinalCtaSection bookingUrl={contactInfo.bookingUrl} />
      </main>

      <Footer statement={footerContent.statement} legal={footerContent.legal} />

      {selectedProfessional && selectedSpecialty ? (
        <ProfessionalModal
          professional={selectedProfessional}
          specialtyName={selectedSpecialty.name}
          bookingUrl={contactInfo.bookingUrl}
          onClose={() => setSelectedProfessional(null)}
        />
      ) : null}
    </div>
  );
}

export default App;
