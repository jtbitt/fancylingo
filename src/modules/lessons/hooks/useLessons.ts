import { useState, useEffect } from "react";

import { useQueryHandler, useFirebase } from "../../../hooks";
import { GetLessons } from "../graphql/lessonQueries.graphql";
import { cleanupLessons } from "../utils/cleanupLessons";

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
    if (images) {
      const lessonList = cleanupLessons(queryData, images);
      setLessons(lessonList);
    }
  }, [images]);

  return { lessons };

};