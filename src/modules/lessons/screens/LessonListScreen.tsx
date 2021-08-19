import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { useQueryHandler } from "../../.,/../../hooks";
import { useLessons } from "../hooks";
import { GetLessons } from "../graphql/lessonQueries.graphql";

import { DefaultLesson } from "../components/DefaultLesson";
import { LessonAlert } from "../components/LessonAlert";
import { LessonOption } from "../components/LessonOption";

export const LessonListScreen = ({ navigation }: any) => {
  const { queryData } = useQueryHandler(GetLessons);
  const { lessons } = useLessons(queryData, "lesson_images");

  if (!lessons) {
    return <></>;
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
              })
            }
          />
          <LessonAlert
            message="-50% discount - Premium lessons!"
            onPress={() => navigation.navigate("Store")}
          />
          {lessons.map((lesson: any, i: number) =>
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
