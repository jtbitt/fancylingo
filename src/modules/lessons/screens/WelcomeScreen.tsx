import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Title, Text, Button } from "react-native-paper";
import { Platform } from "react-native";

import { WelcomeProps } from "../routes/LessonStack";

export const WelcomeScreen = ({ navigation }: WelcomeProps) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>WELCOME JOHN DOE</Title>
      <Image source={require("../assets/levels.png")} style={styles.image} />
      <Text style={styles.selectLevel}>Select your level</Text>
      <View style={styles.buttons}>
        <Button
          style={[styles.button, styles.buttonSpacing]}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => navigation.navigate("LessonList")}
        >
          BEGINNER
        </Button>
      </View>
      <View style={styles.buttons}>
        <Button
          style={[styles.button, styles.buttonSpacing]}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => navigation.navigate("LessonList")}
        >
          MEDIUM
        </Button>
        <Button
          style={styles.button}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => navigation.navigate("LessonList")}
        >
          EXPERT
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "10%",
    marginTop: Platform.OS === "ios" ? "10%" : "20%",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
  },
  image: {
    height: 350,
    marginLeft: 20,
    resizeMode: "contain",
    marginTop: 20,
  },
  selectLevel: {
    fontWeight: "700",
    fontSize: 20,
    marginTop: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    marginTop: 20,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  buttonSpacing: {
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
