import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { StatusIcon } from "./StatusIcon";
import { Play } from "./Play";
import { ILesson } from "../interfaces/lesson.interface";
import { getStatusMessage } from "../utils/getStatusMessage";
import { getStatusColor } from "../utils/getStatusColor";

interface IDefaultLessonProps {
  lesson: ILesson;
  status: number;
  onPress: () => void;
}

export const DefaultLesson = ({
  lesson,
  onPress,
  status,
}: IDefaultLessonProps) => {
  return (
    <View style={[styles.card, styles.shadow]}>
      <Image style={styles.cover} source={{ uri: lesson.image_url }} />
      <View style={styles.content}>
        <Text style={styles.title}>{lesson.name}</Text>
        <StatusIcon
          style={styles.statusIcon}
          message={getStatusMessage(status)}
          color={getStatusColor(status)}
        />
        <Play style={styles.play} size={40} onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: "#FFF6D7",
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
  statusIcon: {
    marginRight: "auto",
  },
  play: {
    marginRight: 15,
  },
});
