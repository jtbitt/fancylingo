import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Title, Text, Button } from "react-native-paper";

export const WelcomeScreen = () => {
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
          onPress={() => console.log("Pressed")}
        >
          BEGINNER
        </Button>
      </View>
      <View style={styles.buttons}>
        <Button
          style={[styles.button, styles.buttonSpacing]}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          MEDIUM
        </Button>
        <Button
          style={styles.button}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => console.log("Pressed")}
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
    justifyContent: "space-between",
    marginVertical: "15%",
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  image: {
    height: 350,
    marginLeft: 20,
    resizeMode: "contain",
  },
  selectLevel: {
    fontWeight: "500",
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
