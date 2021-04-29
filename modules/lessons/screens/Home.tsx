import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { DefaultLesson } from "../components/DefaultLesson";
import { LessonAlert } from "../components/LessonAlert";
import { LessonOption } from "../components/LessonOption";

export const Home = () => {
  // const [lessons, loading, error] = useCollectionDataOnce(
  //   firebase.firestore().collection("lessons").orderBy("id")
  // );
  // return (
  //   <View style={styles.container}>
  //     <ScrollView contentContainerStyle={styles.scroll}>
  //       {error && <Text>Error: {JSON.stringify(error)}</Text>}
  //       {loading && <Text>Collection: Loading...</Text>}
  //       {lessons && (
  //         <View>
  //           <DefaultLesson lesson={lessons[0]} />
  //           <LessonAlert message="-50% discount - Premium lessons!" />
  //           {lessons.map((lesson, i) =>
  //             i > 0 ? <LessonOption lesson={lesson} key={i} /> : null
  //           )}
  //         </View>
  //       )}
  //     </ScrollView>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: "5%",
  },
});
