import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { StatusIcon } from "./StatusIcon";
import { Play } from "./Play";
import { ILesson } from "../interfaces/lesson.interface";
import { getStatusMessage } from "../utils/getStatusMessage";
import { getStatusColor } from "../utils/getStatusColor";

interface ILessonOptionProps {
  lesson: ILesson;
  status: number;
  onPress: () => void;
}

export const LessonOption = ({
  lesson,
  status,
  onPress,
}: ILessonOptionProps) => {
  return (
    <View style={[styles.lesson, styles.shadow]}>
      <Image style={styles.image} source={{ uri: lesson.image_url }} />
      <View style={styles.lessonInfo}>
        <Text style={styles.lessonTitle}>{lesson.name}</Text>
        <StatusIcon
          message={getStatusMessage(status)}
          color={getStatusColor(status)}
        />
      </View>
      <Play style={styles.play} size={40} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  lesson: {
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF6D7",
    marginBottom: 20,
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
    marginRight: 15,
  },
  play: {
    marginRight: 15,
  },
});
