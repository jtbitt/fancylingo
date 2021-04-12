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
