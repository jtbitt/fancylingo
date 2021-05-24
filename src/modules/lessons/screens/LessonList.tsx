import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import {
  ActivityIndicator,
  Colors,
  BottomNavigation,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

import { GET_LESSONS } from "../../../api/graphql";
import { DefaultLesson } from "../components/DefaultLesson";
import { LessonAlert } from "../components/LessonAlert";
import { LessonOption } from "../components/LessonOption";

// lessons -> 0...1000
// user_lessons -> free lessons / premium lesson - user_id lesson_id score
// user_decks -> user_id 1 deck_id 1 is_unlocked
// user_decks -> user_id 1 deck_id 2

export const LessonList = ({ navigation }: any) => {
  // const [ user] = useAuth
  // const { loading, error, data } = useQuery(GET_LESSONS, {variables: {uid: user.uid}});
  const { loading, error, data } = useQuery(GET_LESSONS);
  const Stack = createStackNavigator();

  if (error) {
    return <Text>Error: {JSON.stringify(error)}</Text>;
  }

  if (loading) {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View>
          <DefaultLesson lesson={data.lessons[0]} />
          <LessonAlert message="-50% discount - Premium lessons!" />
          {data.lessons.map((lesson: any, i: number) =>
            i > 0 ? (
              <LessonOption
                lesson={lesson}
                key={i}
                onPress={() => navigation.navigate("Lesson")}
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