import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import * as firebase from "firebase";
import "firebase/firestore";

import { DefaultLesson } from "../components/DefaultLesson";
import { LessonAlert } from "../components/LessonAlert";
import { LessonOption } from "../components/LessonOption";
import { defaultLesson, lessons } from "../interfaces/lesson.interface";
import { Checkbox } from "react-native-paper";

export const Home = () => {
  const [lessons, loading, error] = useCollectionDataOnce(
    firebase.firestore().collection("decks").orderBy("id")
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {error && <Text>Error: {JSON.stringify(error)}</Text>}
        {loading && <Text>Collection: Loading...</Text>}
        {lessons && (
          <View>
            <DefaultLesson lesson={lessons[0]} />
            <LessonAlert message="-50% discount - Premium lessons!" />
            {lessons.map((lesson, i) =>
              i > 0 ? <LessonOption lesson={lesson} key={i} /> : null
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: "5%",
  },
});
