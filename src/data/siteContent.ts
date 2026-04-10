import type {
  ContactInfo,
  NavItem,
  Professional,
  Specialty,
  Testimonial,
} from '../types/content';

export const navItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'enfoque', label: 'Enfoque' },
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'testimonios', label: 'Recomendaciones' },
  { id: 'contacto', label: 'Contacto' },
];

export const heroContent = {
  eyebrow: 'Centro terapéutico integral',
  title: 'Terapia Paz Interior',
  subtitle:
    'Acompañamos a personas y familias con una atención cercana, clara y profesional en Terapia Ocupacional y Nutrición.',
  description:
    'Esta primera versión reúne de forma simple lo esencial para conocer nuestro enfoque, revisar a cada profesional y dar el siguiente paso con confianza.',
  primaryCta: {
    label: 'Agendar orientación',
    href: 'https://www.google.cl',
  },
  secondaryCta: {
    label: 'Ver especialidades',
    href: '#especialidades',
  },
  featuredNotes: [
    'Atención con enfoque humano y acompañamiento activo',
    'Especialidades pensadas para trabajar en red con familias',
    'Información clara para resolver dudas desde el primer contacto',
  ],
};

export const missionContent = {
  title: 'Un lugar que busca bajar la incertidumbre y abrir espacio a procesos con sentido.',
  paragraphs: [
    'En Terapia Paz Interior queremos que cada persona llegue sintiendo que será escuchada con respeto, orientación concreta y una mirada profesional que considere su contexto cotidiano.',
    'Nuestro enfoque integra trabajo terapéutico, comunicación clara y seguimiento cercano para que las familias sepan qué esperar, cómo participar y hacia dónde avanzar.',
  ],
  principles: [
    {
      title: 'Cercanía profesional',
      description:
        'Explicamos cada proceso con un lenguaje claro, amable y honesto, sin perder rigurosidad clínica.',
    },
    {
      title: 'Trabajo personalizado',
      description:
        'Cada plan se piensa desde las necesidades reales de la persona, su rutina y su red de apoyo.',
    },
    {
      title: 'Confianza desde el inicio',
      description:
        'Priorizamos una experiencia ordenada y cálida para que el primer contacto ya entregue tranquilidad.',
    },
  ],
};

export const specialties: Specialty[] = [
  {
    id: 'ocupacional',
    name: 'Terapia Ocupacional',
    summary:
      'Apoyo terapéutico enfocado en participación diaria, autonomía y adaptación de rutinas para distintas etapas del desarrollo.',
    highlights: [
      'Evaluación funcional y acompañamiento en actividades de la vida diaria',
      'Orientación para familias y tutores en hábitos, juego y entornos',
      'Planes de intervención con foco en metas concretas y aplicables',
    ],
  },
  {
    id: 'nutricion',
    name: 'Nutrición',
    summary:
      'Acompañamiento nutricional cercano para construir hábitos sostenibles, mejorar bienestar y entregar orientación práctica a cada familia.',
    highlights: [
      'Planes alimentarios adaptados a objetivos y contextos cotidianos',
      'Educación nutricional simple, clara y realista',
      'Seguimiento respetuoso para cambios progresivos y sostenibles',
    ],
  },
];

export const professionals: Professional[] = [
  {
    id: 'camila-reyes',
    name: 'Camila Reyes',
    specialtyId: 'ocupacional',
    role: 'Terapeuta Ocupacional',
    bioShort:
      'Acompaña procesos de autonomía, participación y adaptación de rutinas con una mirada práctica y familiar.',
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
    photo: null,
    photoAlt: 'Espacio reservado para fotografía profesional de Camila Reyes',
    contactCtaLabel: 'Consultar por Terapia Ocupacional',
  },
  {
    id: 'valentina-herrera',
    name: 'Valentina Herrera',
    specialtyId: 'nutricion',
    role: 'Nutricionista',
    bioShort:
      'Entrega acompañamiento nutricional amable y realista, enfocado en hábitos sostenibles y educación práctica.',
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
    photo: null,
    photoAlt: 'Espacio reservado para fotografía profesional de Valentina Herrera',
    contactCtaLabel: 'Consultar por Nutrición',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonio-1',
    quote:
      'Desde la primera orientación sentimos que había un plan claro y un equipo que realmente quería acompañarnos. Todo fue explicado con mucha calidez.',
    author: 'María P.',
    relation: 'Apoderada',
    isDemo: true,
  },
  {
    id: 'testimonio-2',
    quote:
      'Agradecimos mucho la forma cercana de trabajar. Pudimos entender mejor el proceso y llevar recomendaciones concretas a casa.',
    author: 'Javiera R.',
    relation: 'Madre y tutora',
    isDemo: true,
  },
  {
    id: 'testimonio-3',
    quote:
      'La orientación fue profesional, amable y muy aterrizada a nuestra realidad. Nos dio tranquilidad para seguir avanzando.',
    author: 'Felipe C.',
    relation: 'Usuario adulto',
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
    'Terapia Paz Interior es una propuesta de atención cercana, respetuosa y profesional para acompañar procesos terapéuticos con mayor claridad.',
  legal: 'Contenido provisional para etapa inicial de desarrollo.',
};
