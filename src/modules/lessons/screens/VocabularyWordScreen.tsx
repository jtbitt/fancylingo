import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ProgressBar, Colors, ActivityIndicator } from "react-native-paper";
import { useQuery } from "@apollo/client";

import { useQueryHandler } from "../../.,/../../hooks";
import { useCards } from "../hooks";
import { GetCard } from "../graphql/lessonQueries.graphql";
import { FlashCard } from "../components/FlashCard";

interface IDefaultVocabularyWordProps {
  deckId: number;
}

export const VocabularyWordScreen = ({ route, navigation }: any) => {
  const { card } = route.params;

  const onAnswerChosen = () => {
    navigation.navigate("Vocabulary");
  };

  return (
    <View style={styles.container}>
      <View>
        <FlashCard card={card} onAnswer={onAnswerChosen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    justifyContent: "center",
  },
  progress: {
    height: 15,
    borderRadius: 20,
    marginBottom: 30,
  },
});
