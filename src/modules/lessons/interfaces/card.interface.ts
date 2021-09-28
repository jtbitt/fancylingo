import { Audio } from "expo-av";

export interface ICardDataObject {
  __typename: string;
  card: ICard;
}

export interface ILessonCardData {
  lesson_cards: ICardDataObject[];
}

export interface IUserCardData {
  user_cards: ICardDataObject[];
}

export interface ICard {
  __typename: string;
  audio: Audio.Sound;
  audio_url: string;
  image_url: string;
  ipa: string;
  word: string;
  card_id: number;
}