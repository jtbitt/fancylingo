import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useQuery } from "@apollo/react-hooks";

import { getLessons } from "../../../api/graphql";
import { DefaultLesson } from "../components/DefaultLesson";
import { LessonAlert } from "../components/LessonAlert";
import { LessonOption } from "../components/LessonOption";

export const Home = () => {
  const { data, error, loading } = useQuery(getLessons);
  // const [lessons, loading, error] = useCollectionDataOnce(
  //   firebase.firestore().collection("lessons").orderBy("id")
  // );

  if (error) {
    return <Text>Error: {JSON.stringify(error)}</Text>;
  }

  if (loading) {
    return <Text>Collection: Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View>
          <DefaultLesson lesson={data[0]} />
          <LessonAlert message="-50% discount - Premium lessons!" />
          {data.map((lesson: any, i: number) =>
            i > 0 ? <LessonOption lesson={lesson} key={i} /> : null
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
    paddingHorizontal: "5%",
  },
});
