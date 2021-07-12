import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ProgressBar, Colors, ActivityIndicator } from "react-native-paper";
import { useQuery } from "@apollo/client";

import { GetCard } from "../graphql/lessonQueries.graphql";
import { FlashCard } from "../components/FlashCard";

interface IDefaultVocabularyWordProps {
  deckId: number;
}

export const VocabularyWord = ({ route, navigation }: any) => {
  const { cardId } = route.params;
  const { loading, error, data } = useQuery(GetCard, {
    variables: { cardId: cardId },
  });

  const onAnswerChosen = () => {
    navigation.navigate("Vocabulary");
  };

  if (error) {
    return <Text>Error: {JSON.stringify(error)}</Text>;
  }

  if (loading) {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  }

  return (
    <View style={styles.container}>
      <View>
        <FlashCard card={data.cards[0]} onAnswer={onAnswerChosen} />
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
