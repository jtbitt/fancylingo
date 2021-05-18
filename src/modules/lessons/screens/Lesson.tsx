import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";
import { useQuery } from "@apollo/react-hooks";

import { GET_LESSONS } from "../../../api/graphql";
import { FlashCard } from "../components/FlashCard";

interface IDefaultDeckProps {
  deckId: number;
}

export const Lesson = () => {
  // const [cards, loading, error] = useDocumentDataOnce(
  //   firebase.firestore().doc("decks/colombian_slang"),
  //   {
  //     transform: (deck: any) => deck.cards,
  //   }
  // );
  const { data, error, loading } = useQuery(GET_LESSONS);
  const [currentCard, setCurrentCard] = useState(0);

  const onAnswerChosen = () => {
    setCurrentCard(currentCard + 1);
    // record stuff for algorithm
  };

  return (
    <View></View>
    // <View style={styles.container}>
    //   {error && <Text>Error: {JSON.stringify(error)}</Text>}
    //   {loading && <Text>Collection: Loading...</Text>}
    //   {cards && (
    //     <View>
    //       <ProgressBar
    //         style={styles.progress}
    //         progress={0.5}
    //         color={Colors.red800}
    //       />
    //       <FlashCard card={cards[currentCard]} onAnswer={onAnswerChosen} />
    //     </View>
    //   )}
    // </View>
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
