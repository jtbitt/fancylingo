import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  ProgressBar,
  Colors,
  ActivityIndicator,
  Provider,
} from "react-native-paper";
import { useQuery } from "@apollo/client";

import { GetDeck } from "../graphql/lessonQueries.graphql";
import { FlashCard } from "../components/FlashCard";
import { LessonModal } from "../components/LessonModal";

interface IDefaultDeckProps {
  deckId: number;
}

export const Lesson = ({ route, navigation }: any) => {
  const { lessonId, lessonName } = route.params;
  const { loading, error, data } = useQuery(GetDeck, {
    variables: { lessonId: 1 },
  });
  const [currentCard, setCurrentCard] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  // set lesson title
  // navigation.setOptions({ title: lessonName });

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e: any) => {
        // Prevent user from automatically leaving the screen
        e.preventDefault();
        // Prompt the user before leaving the screen
        setModalVisible(true);
      }),
    [navigation]
  );

  const onModalChecked = (visibility: boolean) => {
    setModalVisible(visibility);
  };

  const onAnswerChosen = () => {
    if (currentCard === data.lesson_cards.length - 1) {
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
    <Provider>
      <View style={styles.container}>
        <LessonModal visible={modalVisible} onDismiss={onModalChecked} />
        <View>
          <ProgressBar
            style={styles.progress}
            progress={0.5}
            color={Colors.red800}
          />
          <FlashCard
            card={data.lesson_cards[currentCard].card}
            onAnswer={onAnswerChosen}
          />
        </View>
      </View>
    </Provider>
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
