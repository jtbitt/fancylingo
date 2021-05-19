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
  image_url: string;
  audio_url: string;
}
