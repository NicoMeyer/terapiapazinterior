export type Specialty = {
  id: string;
  name: string;
  summary: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  statusLabel?: string;
};

export type Professional = {
  id: string;
  name: string;
  specialtyId: Specialty['id'];
  role: string;
  bioShort: string;
  bioFull: string;
  credentials: string[];
  focusAreas: string[];
  photo: string | null;
  photoAlt: string;
  contactCtaLabel: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  relation: string;
  isDemo: boolean;
};

export type ContactInfo = {
  address: string;
  mapsUrl: string;
  phone: string;
  email: string;
  bookingUrl: string;
};

export type NavItem = {
  id: string;
  label: string;
};
