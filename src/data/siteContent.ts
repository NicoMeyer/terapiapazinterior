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
  eyebrow: 'Acompañamiento para familias',
  title: 'Terapia Paz Interior',
  subtitle:
    'Atención para niñas, niños y sus familias, con orientación clara desde el primer contacto.',
  description:
    'Terapia Ocupacional y Nutrición en un espacio amable para acompañar, ordenar dudas y empezar con calma.',
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
    alt: 'Escena referencial de una atención infantil cálida en un espacio terapéutico claro y acogedor.',
  },
  imageCaption: {
    eyebrow: 'Espacio referencial',
    title: 'Juego, escucha y acompañamiento para cada familia',
  },
  featuredNotes: [
    'Orientación clara para familias desde el primer contacto',
    'Un espacio amable para jugar, aprender y avanzar con confianza',
  ],
};

export const supportContent = {
  eyebrow: 'Cómo acompañamos',
  title: 'Un proceso simple para que cada familia sepa por dónde empezar.',
  description:
    'Queremos que el camino se sienta claro, cercano y fácil de seguir desde la primera conversación.',
  image: {
    src: '/placeholders/support-family.svg',
    alt: 'Escena referencial de una profesional acompañando a una familia en un ambiente luminoso y cercano.',
  },
  steps: [
    {
      number: '01',
      title: 'Nos cuentan su inquietud',
      description: 'Escuchamos con calma lo que hoy les preocupa y orientamos el mejor punto de partida.',
    },
    {
      number: '02',
      title: 'Definimos el camino inicial',
      description: 'Revisamos qué especialidad puede ayudar más y cómo se verían los primeros pasos.',
    },
    {
      number: '03',
      title: 'Acompañamos con claridad',
      description: 'Cada familia recibe una guía concreta, simple de entender y fácil de llevar a la vida diaria.',
    },
  ],
};

export const specialties: Specialty[] = [
  {
    id: 'ocupacional',
    name: 'Terapia Ocupacional',
    summary:
      'Apoyo para que niñas y niños participen con más seguridad en su juego, rutinas y vida diaria.',
    highlights: [
      'Juego, autonomía y participación cotidiana',
      'Orientación práctica para familias y entorno',
    ],
    image: '/placeholders/specialty-ocupacional.svg',
    imageAlt:
      'Escena referencial de terapia ocupacional infantil con juego guiado, materiales sensoriales y acompañamiento cercano.',
  },
  {
    id: 'nutricion',
    name: 'Nutrición',
    summary:
      'Acompañamiento nutricional amable para construir hábitos posibles y bienestar en familia.',
    highlights: [
      'Orientación simple y sin juicios',
      'Cambios cotidianos que sí se pueden sostener',
    ],
    image: '/placeholders/specialty-nutricion.svg',
    imageAlt:
      'Escena referencial de nutrición con alimentos frescos, conversación cercana y un ambiente claro.',
  },
  {
    id: 'psicologia-infantil',
    name: 'Psicología Infantil',
    summary:
      'Placeholder de una futura área para acompañar emociones, vínculo y bienestar en la vida cotidiana.',
    highlights: [
      'Espacio futuro para juego, escucha y regulación emocional',
      'Acompañamiento orientado a niñas, niños y sus cuidadores',
    ],
    image: '/placeholders/specialty-psicologia.svg',
    imageAlt:
      'Escena referencial de una futura especialidad de psicología infantil con materiales de juego y un ambiente contenedor.',
    statusLabel: 'Próximamente',
  },
  {
    id: 'fonoaudiologia',
    name: 'Fonoaudiología',
    summary:
      'Placeholder de una futura área para apoyar comunicación, lenguaje y participación con orientación clara para familias.',
    highlights: [
      'Trabajo futuro en comunicación, lenguaje y juego compartido',
      'Estrategias simples para acompañar también fuera de la consulta',
    ],
    image: '/placeholders/specialty-fonoaudiologia.svg',
    imageAlt:
      'Escena referencial de una futura especialidad de fonoaudiología infantil con recursos visuales y acompañamiento cercano.',
    statusLabel: 'Próximamente',
  },
];

export const professionals: Professional[] = [
  {
    id: 'camila-reyes',
    name: 'Ayline Quijada Saldía',
    specialtyId: 'ocupacional',
    role: 'Terapeuta Ocupacional',
    bioShort:
      'Acompaña juego, autonomía y rutinas con una mirada cercana, práctica y muy conectada con cada familia.',
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
    name: 'Anais Serraz',
    specialtyId: 'nutricion',
    role: 'Nutricionista',
    bioShort:
      'Entrega orientación nutricional amable y realista para ordenar la alimentación sin presiones ni culpas.',
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
  {
    id: 'sofia-morales',
    name: 'Sofía Morales',
    specialtyId: 'psicologia-infantil',
    role: 'Psicóloga Infantil',
    bioShort:
      'Placeholder de una futura profesional enfocada en juego, regulación emocional y acompañamiento cercano a familias.',
    bioFull:
      'Sofía representa un futuro perfil profesional orientado a acompañar a niñas, niños y sus cuidadores en procesos emocionales, vinculares y de bienestar cotidiano. Su enfoque se imagina cercano, claro y muy apoyado en el juego y la escucha respetuosa.',
    credentials: [
      'Perfil placeholder para futura incorporación al equipo',
      'Enfoque proyectado en psicología infantil y acompañamiento familiar',
      'Referencia visual provisional para etapa de desarrollo',
    ],
    focusAreas: [
      'Juego y expresión emocional',
      'Orientación a familias y cuidadores',
      'Acompañamiento en regulación y vínculo',
    ],
    photo: '/placeholders/professional-sofia.svg',
    photoAlt: 'Placeholder visual para el perfil profesional de Sofía Morales.',
    contactCtaLabel: 'Consultar por Psicología Infantil',
  },
  {
    id: 'martina-rojas',
    name: 'Martina Rojas',
    specialtyId: 'fonoaudiologia',
    role: 'Fonoaudióloga',
    bioShort:
      'Placeholder de una futura profesional para apoyar lenguaje, comunicación y participación con herramientas claras para casa.',
    bioFull:
      'Martina representa un futuro perfil profesional dedicado a procesos de comunicación, lenguaje y participación cotidiana. La propuesta es una mirada amable y práctica, con estrategias simples para acompañar también fuera de la consulta.',
    credentials: [
      'Perfil placeholder para futura incorporación al equipo',
      'Enfoque proyectado en lenguaje, comunicación y trabajo con familias',
      'Referencia visual provisional para etapa de desarrollo',
    ],
    focusAreas: [
      'Lenguaje y comunicación funcional',
      'Apoyo a familias en estrategias cotidianas',
      'Participación y juego compartido',
    ],
    photo: '/placeholders/professional-martina.svg',
    photoAlt: 'Placeholder visual para el perfil profesional de Martina Rojas.',
    contactCtaLabel: 'Consultar por Fonoaudiología',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonio-1',
    quote:
      'Desde la primera conversación sentimos que había un espacio amable para nuestra familia y una guía clara para empezar.',
    author: 'María P.',
    relation: 'Apoderada',
    isDemo: true,
  },
  {
    id: 'testimonio-2',
    quote:
      'Nos ayudó mucho que explicaran todo con palabras simples y con ideas que de verdad podíamos llevar a la casa.',
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
    'Terapia Paz Interior propone una experiencia cálida, clara y profesional para niñas, niños y sus familias.',
  legal: 'Contenido provisional para etapa inicial de desarrollo.',
};
