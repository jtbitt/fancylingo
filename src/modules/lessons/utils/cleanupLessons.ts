import { IMediaObject } from "../interfaces/media.interface";
import { ILessonDataObject } from "../interfaces/lesson.interface";

export const cleanupLessons = (lessons: ILessonDataObject[], images: IMediaObject[]) => {
  return [...lessons].map((lesson: ILessonDataObject) => {
    let lessonObj = {...lesson.lesson};
    lessonObj['image_url'] = images.find(({ name }) => name === lessonObj.image_url).url;
    lessonObj['status'] = lesson.status;
    return lessonObj;
  });
};
