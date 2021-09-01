import { IMediaObject } from "../interfaces/media.interface";

export const cleanupLessons = (lessons: any, images: IMediaObject[]) => {
  return [...lessons].map((lesson: any) => {
    let lessonObj = {...lesson.lesson};
    const imageUrl = images.find(({ name }) => name === lessonObj.image_url).url;
    lessonObj['status'] = lesson.status;
    lessonObj['image_url'] = imageUrl;
    return lessonObj;
  });
};
