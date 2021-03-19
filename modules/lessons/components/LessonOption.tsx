import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { StatusIcon } from "./StatusIcon";
import { Play } from "./Play";
import { Lesson } from "../interfaces/lesson.interface";
import { getDeckImage } from "../utils/getDeckImage";
import { getStatusColor } from "../utils/getStatusColor";

interface ILessonOptionProps {
  lesson: Lesson;
}

export const LessonOption = ({ lesson }: ILessonOptionProps) => {
  // use util function to get correct status message and color for status icon

  return (
    <View style={styles.lesson}>
      <Image style={styles.image} source={getDeckImage(lesson.image)} />
      <View style={styles.lessonInfo}>
        <Text style={styles.lessonTitle}>{lesson.name}</Text>
        <StatusIcon
          message={lesson.status}
          color={getStatusColor(lesson.status)}
        />
      </View>
      <Play />
    </View>
  );
};

const styles = StyleSheet.create({
  lesson: {
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.48)",
    marginBottom: 20,
  },
  lessonInfo: {
    marginRight: "auto",
  },
  lessonTitle: {
    fontSize: 22,
    marginBottom: 10,
  },
  image: {
    height: 105,
    width: 140,
    borderRadius: 15,
    marginRight: 20,
  },
});
