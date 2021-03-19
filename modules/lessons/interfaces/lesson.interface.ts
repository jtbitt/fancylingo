export interface Lesson {
  id: number;
  name: string;
  status: string;
  image: string;
}

export const defaultLesson = {
  id: 0,
  name: "Saludos",
  status: "Completado",
  image: "Greetings",
};

export const lessons = [
  {
    id: 1,
    name: "En el aeropuerto",
    status: "Completado",
    image: "Airport",
  },
  {
    id: 2,
    name: "Direcciones",
    status: "En progreso",
    image: "Directions",
  },
  {
    id: 3,
    name: "Mexican Slang",
    status: "Premium",
    image: "MexicanSlang",
  },
  {
    id: 4,
    name: "Restaurant",
    status: "Empezar",
    image: "Restaurant",
  },
  {
    id: 5,
    name: "En la casa",
    status: "Completado",
    image: "Home",
  },
  {
    id: 6,
    name: "Colombian Slang",
    status: "Premium",
    image: "ColombianSlang",
  },
  {
    id: 7,
    name: "Spanish Slang",
    status: "Premium",
    image: "SpanishSlang",
  },
];
