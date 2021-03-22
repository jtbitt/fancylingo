export interface Lesson {
  id: number;
  name: string;
  status: string;
  image: string;
}

export interface Card {
  id: number;
  word: string;
  ipa: string;
  image: string;
  audio: string;
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

export const cards = [
  {
    id: 0,
    word: "Avión",
    ipa: "[***IPA***]",
    image: "Avion",
    audio: "",
  },
  {
    id: 1,
    word: "Pasarela",
    ipa: "[***IPA***]",
    image: "Pasarela",
    audio: "",
  },
  {
    id: 2,
    word: "Pasajero",
    ipa: "[***IPA***]",
    image: "Pasajero",
    audio: "",
  },
  {
    id: 3,
    word: "Ala",
    ipa: "[***IPA***]",
    image: "Ala",
    audio: "",
  },
  {
    id: 4,
    word: "Escaleras",
    ipa: "[***IPA***]",
    image: "Escaleras",
    audio: "",
  },
];
