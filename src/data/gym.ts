export type GymData = {
  name: string;
  metadataTitle: string;
  metadataDescription: string;
  visualTokens: {
    primary: string;
    dark: string;
    light: string;
    accent: string;
  };
  businessInfo: {
    address: string;
    hours: string;
    instagramUrl: string;
    whatsappUrl: string;
  };
  headline: string;
  subheadline: string;
  navItems: Array<{
    label: string;
    href: string;
  }>;
  hero: {
    eyebrow: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    imageUrl: string;
    imageAlt: string;
    highlightEyebrow: string;
    highlightText: string;
    chips: string[];
  };
  benefitsSection: {
    eyebrow: string;
    title: string;
  };
  benefits: Array<{
    icon: "award" | "coaching" | "equipment" | "schedule";
    title: string;
    description: string;
  }>;
  activitiesSection: {
    eyebrow: string;
    title: string;
    description: string;
    levelLabel: string;
  };
  activities: Array<{
    name: string;
    focus: string;
    level: string;
    description: string;
  }>;
  socialProofSection: {
    badgeLabel: string;
    title: string;
  };
  testimonials: Array<{
    name: string;
    quote: string;
  }>;
  howItWorksSection: {
    eyebrow: string;
    title: string;
    description: string;
    stepLabel: string;
  };
  howItWorksSteps: [string, string, string];
  contactSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    addressLabel: string;
    hoursLabel: string;
    instagramLabel: string;
  };
  trustBadges: string[];
};

export const gymData: GymData = {
  name: "Gimnasio Tres Cruces",
  metadataTitle: "Gimnasio Tres Cruces | Entrenamiento guiado en Montevideo",
  metadataDescription:
    "Entrenamientos dirigidos, actividades para todos los niveles y acompañamiento real para empezar esta semana.",
  visualTokens: {
    primary: "#B6FF2A",
    dark: "#111212",
    light: "#F8FAF8",
    accent: "#2A2F2A",
  },
  businessInfo: {
    address: "Bulevar Artigas 1820, Tres Cruces, Montevideo",
    hours: "Lunes a viernes 06:00 a 22:00 · Sábados 08:00 a 14:00",
    instagramUrl: "https://instagram.com/gimnasiotrescruces",
    whatsappUrl: "https://wa.me/59891234567",
  },
  headline: "Entrená con energía real y un equipo que te acompaña de verdad.",
  subheadline:
    "Musculación, funcional, cycling y más actividades para todas las edades y objetivos. Arrancá esta semana en Tres Cruces.",
  navItems: [
    { label: "Actividades", href: "#actividades" },
    { label: "Cómo empezar", href: "#como-empezar" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
    eyebrow: "Entrenamientos dirigidos · Todos los niveles · Comunidad activa",
    primaryCtaLabel: "Reservar por WhatsApp",
    primaryCtaHref:
      "https://wa.me/59891234567?text=Hola%20Gimnasio%20Tres%20Cruces%2C%20quiero%20coordinar%20mi%20clase%20de%20prueba.",
    secondaryCtaLabel: "Ver actividades",
    secondaryCtaHref: "#actividades",
    imageUrl:
      "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Personas entrenando fuerza y cardio en un gimnasio con mucha energía.",
    highlightEyebrow: "Gimnasio Tres Cruces",
    highlightText: "Clases, sala y seguimiento personalizado para que no entrenes solo.",
    chips: ["Musculación", "Funcional", "Cycling", "Acompañamiento real"],
  },
  benefitsSection: {
    eyebrow: "Entrená con respaldo",
    title: "Un gimnasio de barrio con propuesta completa y foco en resultados reales.",
  },
  benefits: [
    {
      icon: "award",
      title: "Plan adaptado a tu objetivo",
      description:
        "Subir masa, bajar grasa, recuperar estado físico o mejorar rendimiento: te guiamos paso a paso.",
    },
    {
      icon: "coaching",
      title: "Profes atentos en sala y clases",
      description:
        "No entrenás a ciegas: hay acompañamiento para técnica, carga y constancia desde el día uno.",
    },
    {
      icon: "equipment",
      title: "Sala completa para entrenar en serio",
      description:
        "Máquinas, peso libre y zonas funcionales para trabajar todo el cuerpo sin vueltas.",
    },
    {
      icon: "schedule",
      title: "Horarios amplios y ritmo flexible",
      description: "Podés entrenar temprano, al mediodía o después del trabajo, según tu rutina.",
    },
  ],
  activitiesSection: {
    eyebrow: "Actividades",
    title: "Elegí cómo entrenar: variedad real para no abandonar.",
    description:
      "Combiná clases y sala según tu nivel. Tenemos opciones para empezar de cero o potenciar tu entrenamiento actual.",
    levelLabel: "Nivel",
  },
  activities: [
    {
      name: "Musculación",
      focus: "Fuerza y recomposición",
      level: "Inicial a avanzado",
      description: "Rutinas guiadas para ganar fuerza, tono y masa muscular con buena técnica.",
    },
    {
      name: "Funcional",
      focus: "Movimiento integral",
      level: "Todos los niveles",
      description: "Circuitos dinámicos para mejorar agilidad, resistencia y coordinación general.",
    },
    {
      name: "HIIT",
      focus: "Intensidad alta",
      level: "Intermedio a avanzado",
      description: "Bloques cortos y potentes para activar cardio y acelerar resultados.",
    },
    {
      name: "Indoor Cycling",
      focus: "Cardio con ritmo",
      level: "Inicial a intermedio",
      description: "Clases con música y energía para trabajar resistencia y quema calórica.",
    },
    {
      name: "Movilidad",
      focus: "Recuperación y postura",
      level: "Todos los niveles",
      description: "Mejorá amplitud de movimiento y prevení molestias en entrenamientos y vida diaria.",
    },
  ],
  socialProofSection: {
    badgeLabel: "Comunidad Tres Cruces",
    title: "La mejor prueba es ver gente real entrenando, mejorando y volviendo cada semana.",
  },
  testimonials: [
    {
      name: "Lucía M.",
      quote: "Volví a entrenar después de años y me sentí cómoda desde el primer día.",
    },
    {
      name: "Martín R.",
      quote: "Buen ambiente, profes arriba y clases con energía. Se nota el cambio rápido.",
    },
    {
      name: "Sofía P.",
      quote: "Me ordenaron la rutina y hoy entreno constante sin lesiones ni excusas.",
    },
  ],
  howItWorksSection: {
    eyebrow: "Empezá fácil",
    title: "Te sumás en tres pasos simples.",
    description: "Nos escribís, coordinamos tu objetivo y arrancás con una propuesta clara para vos.",
    stepLabel: "Paso",
  },
  howItWorksSteps: ["Escribinos por WhatsApp", "Coordinamos horario y plan", "Empezá a entrenar esta semana"],
  contactSection: {
    eyebrow: "Último paso",
    title: "Tu lugar para entrenar está acá, en Tres Cruces.",
    description:
      "Mandanos un WhatsApp y te ayudamos a elegir actividad, horarios y plan según tu nivel. Respuesta rápida.",
    ctaLabel: "Quiero coordinar mi clase",
    addressLabel: "Dirección",
    hoursLabel: "Horarios",
    instagramLabel: "Instagram",
  },
  trustBadges: ["Variedad de actividades", "Todos los niveles", "Acompañamiento constante", "Comunidad activa"],
};
