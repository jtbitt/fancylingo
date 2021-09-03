import { useState, useEffect } from "react";

import { useQueryHandler, useFirebase } from "../../../hooks";
import { GetLessons } from "../graphql/lessonQueries.graphql";
import { cleanupLessons } from "../utils/cleanupLessons";

export const useLessons = () => {
  const { queryData } = useQueryHandler(GetLessons);
  const [lessons, setLessons] = useState<any[]>();
  const { getMedia, imageUrls } = useFirebase();

  useEffect(() => {
    if (queryData) {
      getMedia("lesson_images", "image");
    }
  }, [queryData]);

  useEffect(() => {
    if (imageUrls) {
      const lessonList = cleanupLessons(queryData, imageUrls);
      setLessons(lessonList);
    }
  }, [imageUrls]);

  return { lessons };

};