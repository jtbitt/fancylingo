export interface Lesson {
  lesson_id: number;
  name: string;
  description: string;
  sales_description: string;
  price: string;
  image: string;
  status: number;
}

export interface Card {
  id: number;
  word: string;
  ipa: string;
  image_url: string;
  audio_url: string;
}
