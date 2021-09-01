import React, { useState, useLayoutEffect } from "react";
import { HeaderBackButton } from "@react-navigation/stack";
import { StyleSheet, View, Alert } from "react-native";
import { ProgressBar, Colors, Provider } from "react-native-paper";

import { useCards } from "../hooks";

import { GetCards } from "../graphql/lessonQueries.graphql";
import { FlashCard } from "../components/FlashCard";
import { LessonModal } from "../components/LessonModal";

interface IDefaultDeckProps {
  deckId: number;
}

export const LessonScreen = ({ route, navigation }: any) => {
  const { lessonId, lessonName } = route.params;
  const { cards, saveCard } = useCards(GetCards, lessonId);
  const [currentCard, setCurrentCard] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton onPress={() => setModalVisible(true)} />
      ),
    });
    navigation.setOptions({ title: lessonName });
  }, [navigation]);

  if (!cards || !cards.length) {
    return <></>;
  }

  const onModalChecked = (exit: boolean) => {
    setModalVisible(false);
    if (exit) {
      navigation.navigate("LessonList");
    }
  };

  const onAnswerChosen = () => {
    if (currentCard === cards.length - 1) {
      navigation.navigate("Congrats");
    } else {
      setCurrentCard(currentCard + 1);
    }
  };

  const onCardSaved = () => {
    saveCard(cards[currentCard].card_id);
    Alert.alert("Success", "Card successfully saved");
  };

  return (
    <Provider>
      <LessonModal visible={modalVisible} onDismiss={onModalChecked} />
      <View style={styles.container}>
        <View>
          <ProgressBar
            style={styles.progress}
            progress={0.5}
            color={Colors.red800}
          />
          <FlashCard
            card={cards[currentCard]}
            onAnswer={onAnswerChosen}
            onSaved={onCardSaved}
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
