import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { useQuery } from "@apollo/client";

import { useAuth } from "../../../contexts/Auth";
import { GetLessons } from "../graphql/lessonQueries.graphql";

import { DefaultLesson } from "../components/DefaultLesson";
import { LessonAlert } from "../components/LessonAlert";
import { LessonOption } from "../components/LessonOption";

// lessons -> 0...1000
// user_lessons -> free lessons / premium lesson - user_id lesson_id score
// user_decks -> user_id 1 deck_id 1 is_unlocked
// user_decks -> user_id 1 deck_id 2

export const LessonList = ({ navigation }: any) => {
  const { uid } = useAuth();
  // Create abstraction on top of these queries
  // 1: useQueryWithErrorBoundary(useQuery) -> if error -> throw error -> make sure you have error boundary
  // 2: just hide UI? (if less important query, e.g. not rendering UI elements)
  // 3: QueryHandler component useQueryHandler(useQuery(), {loadingComponent: ..., errorComponent: ...})
  // 4. You can abstract passing user id / always attach it?
  const { loading, error, data } = useQuery(GetLessons, {
    variables: { uid: uid },
  });

  if (error) {
    return <Text>Error: {JSON.stringify(error)}</Text>;
  }

  if (loading) {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  }

  // a good practice is to create some transformator functions / utils / helpers / keep them on the module
  // could be hook also

  // const transformedLessonsData = transfomrLessonsData(data)
  // const { ... } = useLessons(data)

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View>
          <DefaultLesson
            lesson={data.user_lessons[0].lesson}
            status={data.user_lessons[0].status}
            onPress={() =>
              navigation.navigate("Lesson", {
                lessonId: data.user_lessons[0].lesson.lesson_id,
              })
            }
          />
          <LessonAlert
            message="-50% discount - Premium lessons!"
            onPress={() => navigation.navigate("Store")}
          />
          {data.user_lessons.map((lesson: any, i: number) =>
            i > 0 ? (
              <LessonOption
                lesson={lesson.lesson}
                status={lesson.status}
                key={i}
                onPress={() =>
                  navigation.navigate("Lesson", {
                    lessonId: lesson.lesson.lesson_id,
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
