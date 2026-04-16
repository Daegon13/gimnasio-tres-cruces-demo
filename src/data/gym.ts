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
  activities: string[];
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
  activities: ["Musculación", "Funcional", "HIIT", "Indoor Cycling", "Movilidad"],
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
