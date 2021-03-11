import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { FlashCard } from "../components/FlashCard";

export const Deck = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlashCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
