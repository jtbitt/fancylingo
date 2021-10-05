import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { useFirebase } from "../../../hooks";
import { useAuth } from "../../../contexts";
import { GetLessons } from "../graphql/lessonQueries.graphql";
import { cleanupLessons } from "../utils/cleanupLessons";
import { ILessonData, ILesson } from "../interfaces/lesson.interface";

interface LessonVars {
  uid: string;
}

export const useLessons = () => {
  const { uid } = useAuth();
  const { error, data } = useQuery<ILessonData, LessonVars>(GetLessons, {
    variables: { uid: uid },
  });
  const { getMedia, imageUrls } = useFirebase();
  const [lessons, setLessons] = useState<ILesson[]>();

  if (error) {
    console.log(error);
    throw new Error('Failed fetching lessons from the API');
  }

  useEffect(() => {
    if (data) {
      getMedia("lesson_images", "image");
    }
  }, [data]);

  useEffect(() => {
    if (data && imageUrls) {
      const lessonList: ILesson[] = cleanupLessons(data.user_lessons, imageUrls);
      setLessons(lessonList);
    }
  }, [imageUrls]);

  return { lessons };

};