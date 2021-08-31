import { useState, useEffect } from "react";

import { useQueryHandler, useFirebase } from "../../../hooks";
import { GetLessons } from "../graphql/lessonQueries.graphql";

export const useLessons = () => {
  const { queryData } = useQueryHandler(GetLessons);
  const [lessons, setLessons] = useState<any[]>();
  const { getMedia, images } = useFirebase();

  useEffect(() => {
    if (queryData) {
      getMedia("lesson_images", "image");
    }
  }, [queryData]);

  useEffect(() => {
    if (images && queryData) {
      const lessonList = [...queryData].map((lesson: any) => {
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