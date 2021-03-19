import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";

import { FlashCard } from "../components/FlashCard";

export const Deck = () => {
  return (
    <View style={styles.container}>
      <ProgressBar
        style={styles.progress}
        progress={0.5}
        color={Colors.red800}
      />
      <FlashCard onAnswer={() => console.log("card answered")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "10%",
    paddingHorizontal: "7.5%",
    justifyContent: "center",
  },
  progress: {
    height: 15,
    borderRadius: 20,
    marginBottom: 30,
  },
});
