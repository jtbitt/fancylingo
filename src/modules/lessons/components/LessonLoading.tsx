import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";

export const LessonLoading = () => {
  const image = require("../assets/plane_charging.png");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>Lesson loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    height: 200,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
