import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Button, Title } from "react-native-paper";

export const FlashCard = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover style={styles.image} source={require("./demo-image.png")} />
        <Card.Content style={styles.content}>
          <Title style={styles.title}>¿Qué es esto?</Title>
        </Card.Content>
      </Card>
      <Button
        style={styles.button}
        labelStyle={styles.buttonText}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        SEE ANSWER
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
  card: {
    width: "80%",
    marginBottom: 30,
  },
  image: {
    height: 350,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 50,
  },
  title: {
    fontSize: 30,
    color: "black",
  },
  button: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
