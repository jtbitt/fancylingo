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
          style={styles.statusIcon}
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
    justifyContent: "center",
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
    marginLeft: "auto",
    marginRight: "auto",
  },
  lessonTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    height: 95,
    width: 130,
    borderRadius: 15,
    marginRight: 10,
  },
  statusIcon: {
    width: 140,
  },
  play: {
    marginRight: 10,
  },
});
