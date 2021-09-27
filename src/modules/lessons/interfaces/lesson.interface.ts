import { Audio } from "expo-av";

export interface ILessonData {
  __typename: string;
  lesson: {
    __typename: string;
    description: string;
    image_url: string;
    lesson_id: number;
    name: string;
    price: string,
    sales_description: string,
  },
  status: number,
}

export interface ILesson {
  __typename: string;
  description: string;
  image_url: string;
  lesson_id: string;
  name: string;
  price: string;
  sales_description: string;
  status: number;
}

export interface ICard {
  __typename: string;
  audio: Audio.Sound;
  image_url: string;
  ipa: string;
  word: string;
  card_id: number;
}
