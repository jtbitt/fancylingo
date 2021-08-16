import { useState, useEffect } from "react";

import { Lesson } from "../interfaces/lesson.interface";

export const useLessons = (data: any) => {
  const [lessons, setLessons] = useState<any[]>();

  useEffect(() => {
    if (data) {
      const lessonArray: any = Object.values(data)[0];
      const lessonList = lessonArray.map((lesson: any) => {
        let lessonObj = {...lesson.lesson};
        lessonObj['status'] = lesson.status;
        return lessonObj;
      });
      setLessons(lessonList);
    }
  }, [data]);

  return { lessons };

};