export type GymData = {
  name: string;
  headline: string;
  subheadline: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  benefits: Array<{
    icon: "award" | "coaching" | "equipment" | "schedule";
    title: string;
    description: string;
  }>;
  activities: Array<{
    name: string;
    focus: string;
    level: string;
    description: string;
  }>;
  testimonials: Array<{
    name: string;
    quote: string;
  }>;
  address: string;
  hours: string;
  instagramUrl: string;
  whatsappUrl: string;
  trustBadges: string[];
};

export const gymData: GymData = {
  name: "Gimnasio Tres Cruces",
  headline: "Entrená fuerte. Viví mejor.",
  subheadline:
    "Una experiencia premium de entrenamiento funcional, musculación y comunidad en Montevideo.",
  primaryCtaLabel: "Reservar clase de prueba",
  primaryCtaHref: "#contacto",
  secondaryCtaLabel: "Ver planes",
  benefits: [
    {
      icon: "award",
      title: "10+ años de resultados comprobados",
      description: "Miles de alumnos sostienen su progreso con un método que prioriza técnica y constancia.",
    },
    {
      icon: "coaching",
      title: "Seguimiento real de coaches certificados",
      description: "Cada clase corrige ejecución y carga para que avances sin entrenar a ciegas.",
    },
    {
      icon: "equipment",
      title: "Equipamiento completo y bien mantenido",
      description: "Zona de fuerza, funcional y cardio lista para entrenar en serio, sin esperas eternas.",
    },
    {
      icon: "schedule",
      title: "Horarios amplios para rutina estable",
      description: "Abrimos de 6:00 a 22:00 para que puedas entrenar incluso con agenda exigente.",
    },
  ],
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
      description: "Sesiones cortas e intensas para elevar tu capacidad cardiovascular y quemar calorías.",
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
  testimonials: [
    {
      name: "Lucía M.",
      quote: "En 3 meses mejoré mi energía y constancia como nunca antes.",
    },
    {
      name: "Martín R.",
      quote: "Gran equipo y clima humano. Venir a entrenar ya es parte de mi rutina.",
    },
  ],
  address: "Bulevar Artigas 1820, Tres Cruces, Montevideo",
  hours: "Lunes a viernes 06:00 a 22:00 · Sábados 08:00 a 14:00",
  instagramUrl: "https://instagram.com/gimnasiotrescruces",
  whatsappUrl: "https://wa.me/59800000000",
  trustBadges: ["+10 años", "+2.500 alumnos", "4.9★ reseñas"],
};
