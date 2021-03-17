import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Title, Text, Button } from "react-native-paper";

export const Levels = () => {
  return (
    <View style={styles.container}>
      <Title>WELCOME JOHN DOE</Title>
      <Image source={require("./levels.png")} style={styles.image} />
      <Text>Select your level</Text>
      <View style={styles.buttons}>
        <Button
          style={[styles.button, styles.buttonSpacing]}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          BEGINNER
        </Button>
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
      <Button
        style={styles.button}
        labelStyle={styles.buttonText}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        START TO LEARN
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: "20%",
  },
  image: {
    height: 350,
    resizeMode: "contain",
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
