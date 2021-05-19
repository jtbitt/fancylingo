import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ProgressBar, Colors, ActivityIndicator } from "react-native-paper";
import { useQuery } from "@apollo/react-hooks";

import { GET_DECK } from "../../../api/graphql";
import { FlashCard } from "../components/FlashCard";

interface IDefaultDeckProps {
  deckId: number;
}

export const Lesson = ({ navigation }: any) => {
  const { loading, error, data } = useQuery(GET_DECK);
  const [currentCard, setCurrentCard] = useState(0);

  const onAnswerChosen = () => {
    if (currentCard === data.cards.length - 1) {
      navigation.navigate("Congrats");
    } else {
      setCurrentCard(currentCard + 1);
    }
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
        <ProgressBar
          style={styles.progress}
          progress={0.5}
          color={Colors.red800}
        />
        <FlashCard card={data.cards[currentCard]} onAnswer={onAnswerChosen} />
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
