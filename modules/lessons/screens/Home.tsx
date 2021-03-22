import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { DefaultLesson } from "../components/DefaultLesson";
import { LessonAlert } from "../components/LessonAlert";
import { LessonOption } from "../components/LessonOption";
import { lessons, defaultLesson } from "../interfaces/lesson.interface";

export const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <DefaultLesson lesson={defaultLesson} />
        <LessonAlert message="-50% discount - Premium lessons!" />
        {lessons.map((lesson, i) => (
          <LessonOption lesson={lesson} key={i} />
        ))}
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
