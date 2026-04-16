export type GymData = {
  name: string;
  metadataTitle: string;
  metadataDescription: string;
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
  address: string;
  hours: string;
  instagramUrl: string;
  whatsappUrl: string;
  trustBadges: string[];
};

export const gymData: GymData = {
  name: "Gimnasio Tres Cruces",
  metadataTitle: "Gimnasio Tres Cruces | Entrenamiento personalizado en Montevideo",
  metadataDescription:
    "Entrenamiento guiado con coaches presentes, planes personalizados y comunidad real para sostener resultados.",
  headline: "Resultados visibles con un plan que sí podés sostener.",
  subheadline:
    "Entrenamiento guiado, seguimiento personalizado y comunidad real para mejorar fuerza, energía y salud en Montevideo.",
  navItems: [
    { label: "Actividades", href: "#actividades" },
    { label: "Cómo empezar", href: "#como-empezar" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
    eyebrow: "Rendimiento real · Coaches expertos · Comunidad que empuja",
    primaryCtaLabel: "Quiero mi clase de prueba",
    primaryCtaHref: "https://wa.me/59891234567?text=Hola%20Gimnasio%20Tres%20Cruces%2C%20quiero%20agendar%20mi%20clase%20de%20prueba.",
    secondaryCtaLabel: "Ver actividades",
    secondaryCtaHref: "#actividades",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Personas entrenando en una sala de gimnasio moderna.",
    highlightEyebrow: "Método Tres Cruces",
    highlightText: "Entrená con foco, progresá con datos, mantenete con hábitos sólidos.",
  },
  benefitsSection: {
    eyebrow: "Por qué elegir Tres Cruces",
    title: "Beneficios concretos para entrenar con confianza y mantener resultados.",
  },
  benefits: [
    {
      icon: "award",
      title: "Más de 10 años de resultados medibles",
      description:
        "Un método probado en miles de alumnos que combina técnica, progresión y adherencia a largo plazo.",
    },
    {
      icon: "coaching",
      title: "Coaches presentes en cada sesión",
      description:
        "Corregimos ejecución y ajuste de cargas en tiempo real para que avances con seguridad y foco.",
    },
    {
      icon: "equipment",
      title: "Equipamiento completo y bien mantenido",
      description: "Zona de fuerza, funcional y cardio lista para entrenar en serio, sin esperas eternas.",
    },
    {
      icon: "schedule",
      title: "Horarios amplios para sostener el hábito",
      description:
        "Abrimos de 6:00 a 22:00 para que puedas entrenar incluso con trabajo, estudio o agenda exigente.",
    },
  ],
  activitiesSection: {
    eyebrow: "Oferta de entrenamientos",
    title: "Actividades para objetivos reales y niveles distintos.",
    description:
      "Elegí tu modalidad según tu ritmo: desde base técnica y fuerza hasta sesiones de alta intensidad para mejorar rendimiento y resistencia.",
    levelLabel: "Nivel",
  },
  activities: [
    {
      name: "Musculación",
      focus: "Fuerza y composición corporal",
      level: "Inicial a avanzado",
      description: "Planificá cargas y técnica con acompañamiento para ganar masa muscular de forma segura.",
    },
    {
      name: "Funcional",
      focus: "Movimientos integrales",
      level: "Todos los niveles",
      description: "Mejorá coordinación, estabilidad y condición física general con circuitos dinámicos.",
    },
    {
      name: "HIIT",
      focus: "Alta intensidad",
      level: "Intermedio a avanzado",
      description: "Sesiones breves y exigentes para mejorar capacidad cardiovascular y acelerar el gasto calórico.",
    },
    {
      name: "Indoor Cycling",
      focus: "Resistencia y cardio",
      level: "Inicial a intermedio",
      description: "Entrená ritmo y resistencia con clases guiadas de ciclismo indoor llenas de energía.",
    },
    {
      name: "Movilidad",
      focus: "Flexibilidad y prevención",
      level: "Todos los niveles",
      description: "Recuperá rango de movimiento, mejorá postura y prevení molestias en tu día a día.",
    },
  ],
  socialProofSection: {
    badgeLabel: "Validado por la comunidad",
    title: "La confianza se gana con acompañamiento constante y progreso real.",
  },
  testimonials: [
    {
      name: "Lucía M.",
      quote: "En tres meses recuperé energía y constancia. Hoy entrenar es parte fija de mi semana.",
    },
    {
      name: "Martín R.",
      quote: "Se nota el nivel del equipo y el acompañamiento. Mejoré fuerza sin lesionarme.",
    },
    {
      name: "Sofía P.",
      quote: "Llegué con cero experiencia y me sentí acompañada desde la primera clase.",
    },
  ],
  howItWorksSection: {
    eyebrow: "Cómo empezar",
    title: "Tres pasos simples para empezar a entrenar con dirección.",
    description:
      "Te acompañamos desde el primer mensaje para que sepas exactamente qué hacer y cuándo empezar, sin vueltas.",
    stepLabel: "Paso",
  },
  howItWorksSteps: ["Escribinos por WhatsApp", "Definimos tu plan inicial", "Empezá esta semana"],
  contactSection: {
    eyebrow: "Último paso",
    title: "Tu próxima rutina empieza con un mensaje hoy.",
    description:
      "Escribinos por WhatsApp y coordinamos tu clase de prueba según objetivo, nivel y horarios. Respuesta rápida y sin compromiso.",
    ctaLabel: "Quiero empezar esta semana",
    addressLabel: "Dirección",
    hoursLabel: "Horarios",
    instagramLabel: "Instagram",
  },
  address: "Bulevar Artigas 1820, Tres Cruces, Montevideo",
  hours: "Lunes a viernes 06:00 a 22:00 · Sábados 08:00 a 14:00",
  instagramUrl: "https://instagram.com/gimnasiotrescruces",
  whatsappUrl: "https://wa.me/59891234567",
  trustBadges: ["+10 años", "+2.500 alumnos", "4.9★ reseñas"],
};
