import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Title, Text, Button } from "react-native-paper";

import { CongratsProps } from "../routes/LessonStack";

export const CongratsScreen = ({ navigation }: CongratsProps) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>¡Felicitaciones!</Title>
      <Text style={styles.text}>Lección completada</Text>
      <Image source={require("../assets/medal.png")} style={styles.image} />
      <Text style={styles.text}>¡Ganaste una medalla!</Text>
      <Button
        style={styles.button}
        labelStyle={[styles.buttonText, { color: "white" }]}
        mode="contained"
        onPress={() => navigation.navigate("LessonList")}
      >
        NEXT LESSON
      </Button>
      <Button
        style={styles.button}
        labelStyle={styles.buttonText}
        mode="text"
        onPress={() => navigation.navigate("LessonList")}
      >
        HOME
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "500",
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  image: {
    height: 250,
    resizeMode: "contain",
    marginTop: 30,
    marginBottom: 5,
  },
  button: {
    width: "auto",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  buttonSpacing: {
    marginRight: 40,
  },
  buttonText: {
    fontSize: 18,
  },
});
