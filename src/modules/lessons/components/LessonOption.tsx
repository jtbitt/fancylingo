import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useDownloadURL } from "react-firebase-hooks/storage";
import firebase from "firebase/app";
import "firebase/storage";

import { StatusIcon } from "./StatusIcon";
import { Play } from "./Play";
import { Lesson } from "../interfaces/lesson.interface";
import { getDeckImage } from "../utils/getDeckImage";
import { getStatusMessage } from "../utils/getStatusMessage";
import { getStatusColor } from "../utils/getStatusColor";

import { getImage } from "../../../api/firebase";

interface ILessonOptionProps {
  lesson: any;
  status: number;
  onPress: () => void;
}

export const LessonOption = ({
  lesson,
  status,
  onPress,
}: ILessonOptionProps) => {
  const [downloadUrl, loading, error] = useDownloadURL(
    firebase.storage().ref(lesson.image_url)
  );

  if (error || loading) {
    console.log("loading image");
  }

  return (
    <View style={styles.lesson}>
      <Image style={styles.image} source={{ uri: downloadUrl }} />
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
