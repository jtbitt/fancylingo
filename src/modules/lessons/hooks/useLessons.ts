import { useState, useEffect } from "react";

export const useLessons = (data: any) => {
  const [lessons, setLessons] = useState<any[]>();

  useEffect(() => {
    if (data) {
      const lessonList = [...data].map((lesson: any) => {
        let lessonObj = {...lesson.lesson};
        lessonObj['status'] = lesson.status;
        return lessonObj;
      });
      setLessons(lessonList);
    }
  }, [data]);

  return { lessons };

};