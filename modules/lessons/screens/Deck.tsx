import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { FlashCard } from "../components/FlashCard";

export const Deck = () => {
  return (
    <View style={styles.container}>
      <FlashCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
