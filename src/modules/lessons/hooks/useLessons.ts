import { useState, useEffect } from "react";

import { useFirebase } from "../../../hooks";

export const useLessons = (data: any, imagePath: string) => {
  const [lessons, setLessons] = useState<any[]>();
  const { getImages, images } = useFirebase();

  useEffect(() => {
    if (data) {
      getImages(imagePath);
    }
  }, [data]);

  useEffect(() => {
    if (images) {
      const lessonList = [...data].map((lesson: any) => {
        let lessonObj = {...lesson.lesson};
        const imageUrl = images.find(({ name }) => name === lessonObj.image_url).url;
        lessonObj['status'] = lesson.status;
        lessonObj['image_url'] = imageUrl;
        return lessonObj;
      });

      setLessons(lessonList);
    }
  }, [images]);

  return { lessons };

};