import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { StatusIcon } from "./StatusIcon";
import { Play } from "./Play";
import { Lesson } from "../interfaces/lesson.interface";
import { getDeckImage } from "../utils/getDeckImage";
import { getStatusMessage } from "../utils/getStatusMessage";
import { getStatusColor } from "../utils/getStatusColor";

interface ILessonOptionProps {
  lesson: any;
}

export const LessonOption = ({ lesson }: ILessonOptionProps) => {
  return (
    <View style={styles.lesson}>
      <Image style={styles.image} source={getDeckImage(lesson.image_url)} />
      <View style={styles.lessonInfo}>
        <Text style={styles.lessonTitle}>{lesson.name}</Text>
        <StatusIcon message={getStatusMessage(0)} color={getStatusColor(0)} />
      </View>
      <Play
        style={styles.play}
        size={40}
        onPress={() => console.log("enter lesson")}
      />
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
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    height: 105,
    width: 140,
    borderRadius: 15,
    marginRight: 20,
  },
  play: {
    marginRight: 15,
  },
});
