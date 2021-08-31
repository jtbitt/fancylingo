import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import { Title, Text, Button } from "react-native-paper";

export const WelcomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: "15%",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
  },
  image: {
    height: 350,
    marginLeft: 20,
    resizeMode: "contain",
  },
  selectLevel: {
    fontWeight: "700",
    fontSize: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
  },
  button: {
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  buttonSpacing: {
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});