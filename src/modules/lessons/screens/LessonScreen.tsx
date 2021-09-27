import React, { useState, useLayoutEffect } from "react";
import { HeaderBackButton } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import { ProgressBar, Colors, Provider } from "react-native-paper";

import { useCards } from "../hooks";
import { GetCards } from "../graphql/lessonQueries.graphql";
import { LessonLoading } from "../components/LessonLoading";
import { FlashCard } from "../components/FlashCard";
import { LessonModal } from "../components/LessonModal";

export const LessonScreen = ({ route, navigation }: any) => {
  const { lessonId, lessonName } = route.params;
  const [currentCard, setCurrentCard] = useState(0);
  const { cards, saveCard } = useCards(GetCards, 1);
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton onPress={() => setModalVisible(true)} />
      ),
    });
    navigation.setOptions({ title: lessonName });
  }, [navigation]);

  if (!cards) {
    return <LessonLoading></LessonLoading>;
  }

  const onModalChecked = (exit: boolean) => {
    setModalVisible(false);
    if (exit) {
      navigation.goBack();
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
  };

  const createFlashCard = () => {
    return (
      <FlashCard
        card={cards[currentCard]}
        onAnswer={onAnswerChosen}
        onSaved={onCardSaved}
      />
    );
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
          {createFlashCard()}
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
