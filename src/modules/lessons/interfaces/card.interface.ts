import { Audio } from "expo-av";

export interface ICardDataObject {
  __typename: string;
  card: {
    __typename: string,
    audio_url: string,
    image_url: string,
    ipa: string,
    word: string,
  }
}

export interface ICardData {
  lesson_cards?: ICardDataObject[];
  user_cards?: ICardDataObject[];
}

export interface ICard {
  __typename: string;
  audio: Audio.Sound;
  image_url: string;
  ipa: string;
  word: string;
  card_id: number;
}