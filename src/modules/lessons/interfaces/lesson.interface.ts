export interface ILessonDataObject {
  __typename: string;
  lesson: ILesson;
  status: number;
}

export interface ILessonData {
  user_lessons: ILessonDataObject[];
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
