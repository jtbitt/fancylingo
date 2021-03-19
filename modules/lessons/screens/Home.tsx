import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { DefaultLesson } from "../components/DefaultLesson";
import { LessonAlert } from "../components/LessonAlert";
import { LessonOption } from "../components/LessonOption";
import { lessons, defaultLesson } from "../interfaces/lesson.interface";

export const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DefaultLesson lesson={defaultLesson} />
      <LessonAlert message="-50% discount - Premium lessons!" />
      {lessons.map((lesson, i) => (
        <LessonOption lesson={lesson} key={i} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
  },
});
