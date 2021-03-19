import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { StatusIcon } from "./StatusIcon";
import { Play } from "./Play";
import { Lesson } from "../interfaces/lesson.interface";
import { getDeckImage } from "../utils/getDeckImage";
import { getStatusColor } from "../utils/getStatusColor";

interface IDefaultLessonProps {
  lesson: Lesson;
}

export const DefaultLesson = ({ lesson }: IDefaultLessonProps) => {
  // use util function to get correct status message and color for status icon

  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={getDeckImage(lesson.image)} />
      <View style={styles.content}>
        <Text style={styles.title}>{lesson.name}</Text>
        <StatusIcon
          message={lesson.status}
          color={getStatusColor(lesson.status)}
        />
        <Play />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.48)",
  },
  cover: {
    height: 130,
    width: "100%",
    borderRadius: 15,
  },
  content: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: "10%",
  },
  title: {
    fontSize: 25,
    marginRight: 25,
    fontWeight: "500",
  },
});
