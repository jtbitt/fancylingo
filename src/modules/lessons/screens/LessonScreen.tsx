import React, { useState, useEffect, useLayoutEffect } from "react";
import { HeaderBackButton } from "@react-navigation/stack";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import {
  ProgressBar,
  Colors,
  ActivityIndicator,
  Provider,
  Portal,
} from "react-native-paper";

import { useQueryHandler, useMutationHandler } from "../../.,/../../hooks";
import { useCards } from "../hooks";

import { GetCards, SaveCard } from "../graphql/lessonQueries.graphql";
import { FlashCard } from "../components/FlashCard";
import { LessonModal } from "../components/LessonModal";

interface IDefaultDeckProps {
  deckId: number;
}

export const LessonScreen = ({ route, navigation }: any) => {
  const { lessonId, lessonName } = route.params;
  const { queryData } = useQueryHandler(GetCards, { lessonId: 1 });
  const { cards } = useCards(queryData, "card_images");
  const { mutationData, setMutation } = useMutationHandler(SaveCard);
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

  if (!cards) {
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
    setMutation({
      cardId: cards[currentCard].card_id,
    });
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
