import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { useLessons } from "../hooks";
import { LessonLoading } from "../components/LessonLoading";
import { DefaultLesson } from "../components/DefaultLesson";
import { LessonAlert } from "../components/LessonAlert";
import { LessonOption } from "../components/LessonOption";
import { ILesson } from "../interfaces/lesson.interface";
import { LessonListProps } from "../routes/LessonStack";

export const LessonListScreen = ({ navigation }: LessonListProps) => {
  const { lessons } = useLessons();

  if (!lessons || !lessons.length) {
    return <LessonLoading></LessonLoading>;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View>
          <DefaultLesson
            lesson={lessons[0]}
            status={lessons[0].status}
            onPress={() =>
              navigation.navigate("Lesson", {
                lessonId: lessons[0].lesson_id,
                lessonName: lessons[0].name,
              })
            }
          />
          <LessonAlert
            message="-50% discount - Premium lessons!"
            onPress={() => navigation.navigate("Store")}
          />
          {lessons.map((lesson: ILesson, i: number) =>
            i > 0 ? (
              <LessonOption
                lesson={lesson}
                status={lesson.status}
                key={i}
                onPress={() =>
                  navigation.navigate("Lesson", {
                    lessonId: lesson.lesson_id,
                    lessonName: lesson.name,
                  })
                }
              />
            ) : null
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: "2.5%",
  },
});
