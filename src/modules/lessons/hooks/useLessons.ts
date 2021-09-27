import { useState, useEffect } from "react";

import { useQueryHandler, useFirebase } from "../../../hooks";
import { GetLessons } from "../graphql/lessonQueries.graphql";
import { cleanupLessons } from "../utils/cleanupLessons";
import { ILesson } from "../interfaces/lesson.interface";

export const useLessons = () => {
  const { queryData } = useQueryHandler(GetLessons);
  const [lessons, setLessons] = useState<ILesson[]>();
  const { getMedia, imageUrls } = useFirebase();

  useEffect(() => {
    if (queryData) {
      getMedia("lesson_images", "image");
    }
  }, [queryData]);

  useEffect(() => {
    if (imageUrls) {
      const lessonList: ILesson[] = cleanupLessons(queryData, imageUrls);
      setLessons(lessonList);
    }
  }, [imageUrls]);

  return { lessons };

};