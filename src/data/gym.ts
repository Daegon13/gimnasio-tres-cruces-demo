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
  howItWorksSteps: [string, string, string];
  address: string;
  hours: string;
  instagramUrl: string;
  whatsappUrl: string;
  trustBadges: string[];
};

export const gymData: GymData = {
  name: "Gimnasio Tres Cruces",
  headline: "Resultados visibles con un plan que sí podés sostener.",
  subheadline:
    "Entrenamiento guiado, seguimiento personalizado y comunidad real para mejorar fuerza, energía y salud en Montevideo.",
  primaryCtaLabel: "Agendá tu clase de prueba",
  primaryCtaHref: "#contacto",
  secondaryCtaLabel: "Ver actividades",
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
  howItWorksSteps: ["Escribinos por WhatsApp", "Definimos tu plan inicial", "Empezá esta semana"],
  address: "Bulevar Artigas 1820, Tres Cruces, Montevideo",
  hours: "Lunes a viernes 06:00 a 22:00 · Sábados 08:00 a 14:00",
  instagramUrl: "https://instagram.com/gimnasiotrescruces",
  whatsappUrl:
    "https://wa.me/59891234567?text=Hola%20Gimnasio%20Tres%20Cruces%2C%20quiero%20agendar%20mi%20clase%20de%20prueba.",
  trustBadges: ["+10 años", "+2.500 alumnos", "4.9★ reseñas"],
};
