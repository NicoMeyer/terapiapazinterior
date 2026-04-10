import type {
  ContactInfo,
  NavItem,
  Professional,
  Specialty,
  Testimonial,
} from '../types/content';

export const navItems: NavItem[] = [
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'contacto', label: 'Contacto' },
];

export const heroContent = {
  eyebrow: 'Centro terapéutico integral',
  title: 'Terapia Paz Interior',
  subtitle:
    'Terapia Ocupacional y Nutrición con una atención cercana, clara y profesional.',
  description:
    'Un espacio pensado para orientar, acompañar y dar tranquilidad desde el primer contacto.',
  primaryCta: {
    label: 'Agendar orientación',
    href: 'https://www.google.cl',
  },
  secondaryCta: {
    label: 'Ver especialidades',
    href: '#especialidades',
  },
  image: {
    src: '/placeholders/hero-care.svg',
    alt: 'Placeholder visual de una atención terapéutica cálida y profesional en un espacio luminoso.',
  },
  featuredNotes: [
    'Acompañamiento humano desde el inicio',
    'Especialidades pensadas para personas y familias',
  ],
};

export const supportContent = {
  eyebrow: 'Acompañamiento claro',
  title: 'Menos incertidumbre, más orientación y un proceso que se entiende desde el principio.',
  description:
    'Pensamos la experiencia del centro para que cada familia pueda avanzar con calma, confianza y una guía concreta.',
  image: {
    src: '/placeholders/support-family.svg',
    alt: 'Placeholder visual de una familia siendo acompañada por una profesional en una sesión cálida.',
  },
  points: ['Escucha cercana', 'Pasos concretos', 'Comunicación simple'],
};

export const specialties: Specialty[] = [
  {
    id: 'ocupacional',
    name: 'Terapia Ocupacional',
    summary:
      'Apoyo para fortalecer autonomía, participación y rutinas cotidianas.',
    highlights: [
      'Participación diaria y juego',
      'Orientación para familia y entorno',
    ],
    image: '/placeholders/specialty-ocupacional.svg',
    imageAlt:
      'Placeholder visual de terapia ocupacional con materiales de juego, acompañamiento y trabajo funcional.',
  },
  {
    id: 'nutricion',
    name: 'Nutrición',
    summary:
      'Acompañamiento nutricional práctico para hábitos sostenibles y bienestar.',
    highlights: [
      'Educación alimentaria clara',
      'Cambios posibles de sostener',
    ],
    image: '/placeholders/specialty-nutricion.svg',
    imageAlt:
      'Placeholder visual de nutrición con alimentos frescos y una consulta amable en un ambiente claro.',
  },
];

export const professionals: Professional[] = [
  {
    id: 'camila-reyes',
    name: 'Camila Reyes',
    specialtyId: 'ocupacional',
    role: 'Terapeuta Ocupacional',
    bioShort:
      'Acompaña autonomía, participación y rutinas con una mirada práctica y familiar.',
    bioFull:
      'Camila trabaja con niñas, niños y familias en procesos donde la organización diaria, la regulación y la participación ocupacional necesitan apoyo concreto. Su estilo combina observación clínica, escucha activa y estrategias que puedan trasladarse con naturalidad a la vida cotidiana.',
    credentials: [
      'Licenciada en Ciencias de la Ocupación Humana',
      'Formación en integración sensorial y acompañamiento familiar',
      'Experiencia en atención clínica infantojuvenil',
    ],
    focusAreas: [
      'Autonomía en actividades de la vida diaria',
      'Rutinas, juego y participación escolar',
      'Orientación a familias y adaptación de entornos',
    ],
    photo: '/placeholders/professional-camila.svg',
    photoAlt: 'Placeholder visual para el perfil profesional de Camila Reyes.',
    contactCtaLabel: 'Consultar por Terapia Ocupacional',
  },
  {
    id: 'valentina-herrera',
    name: 'Valentina Herrera',
    specialtyId: 'nutricion',
    role: 'Nutricionista',
    bioShort:
      'Entrega acompañamiento nutricional amable, claro y realista para cada familia.',
    bioFull:
      'Valentina acompaña a personas y familias que buscan ordenar su alimentación sin juicios ni fórmulas rígidas. Su trabajo se centra en construir cambios posibles de sostener, considerando objetivos de salud, historia alimentaria y la dinámica real del hogar.',
    credentials: [
      'Nutricionista clínica titulada',
      'Formación en educación alimentaria y cambio de hábitos',
      'Experiencia en acompañamiento nutricional familiar',
    ],
    focusAreas: [
      'Hábitos sostenibles y planificación alimentaria',
      'Educación nutricional para familias',
      'Orientación práctica para bienestar integral',
    ],
    photo: '/placeholders/professional-valentina.svg',
    photoAlt: 'Placeholder visual para el perfil profesional de Valentina Herrera.',
    contactCtaLabel: 'Consultar por Nutrición',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonio-1',
    quote:
      'Desde la primera orientación sentimos calma, claridad y un equipo realmente dispuesto a acompañarnos.',
    author: 'María P.',
    relation: 'Apoderada',
    isDemo: true,
  },
  {
    id: 'testimonio-2',
    quote:
      'La forma de explicar el proceso fue muy cercana y nos ayudó a llevar recomendaciones concretas a casa.',
    author: 'Javiera R.',
    relation: 'Madre y tutora',
    isDemo: true,
  },
];

export const contactInfo: ContactInfo = {
  address: 'Av. Providencia 1234, Oficina 508, Providencia, Santiago (dirección referencial)',
  mapsUrl: 'https://maps.google.com/?q=Providencia+Santiago',
  phone: '+56 9 1234 5678',
  email: 'contacto@terapiapazinterior.cl',
  bookingUrl: 'https://www.google.cl',
};

export const footerContent = {
  statement:
    'Terapia Paz Interior propone una experiencia cercana, clara y profesional para personas y familias.',
  legal: 'Contenido provisional para etapa inicial de desarrollo.',
};
