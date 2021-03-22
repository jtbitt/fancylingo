import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";

import { FlashCard } from "../components/FlashCard";
import { cards } from "../interfaces/lesson.interface";

interface IDefaultDeckProps {
  deckId: number;
}

export const Lesson = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const onAnswerChosen = () => {
    setCurrentCard(currentCard + 1);
    // record stuff for algorithm
  };

  const card = (
    <FlashCard card={cards[currentCard]} onAnswer={onAnswerChosen} />
  );

  return (
    <View style={styles.container}>
      <ProgressBar
        style={styles.progress}
        progress={0.5}
        color={Colors.red800}
      />
      {card}
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
