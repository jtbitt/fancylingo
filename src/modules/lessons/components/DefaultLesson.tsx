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

interface IDefaultLessonProps {
  lesson: any;
  status: number;
  onPress: () => void;
}

export const DefaultLesson = ({
  lesson,
  onPress,
  status,
}: IDefaultLessonProps) => {
  const [downloadUrl, loading, error] = useDownloadURL(
    firebase.storage().ref(lesson.image_url)
  );

  if (error || loading) {
    console.log("loading image");
  }

  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={{ uri: downloadUrl }} />
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
  statusIcon: {
    marginRight: "auto",
  },
  play: {
    marginRight: 15,
  },
});
