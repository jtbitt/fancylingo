import React, { useState, useEffect } from "react";
import { HeaderBackButton } from "@react-navigation/stack";
import { StyleSheet, View, Text, Button } from "react-native";
import {
  ProgressBar,
  Colors,
  ActivityIndicator,
  Provider,
  Portal,
} from "react-native-paper";
import { useQuery, useMutation } from "@apollo/client";
import { useAuth } from "../../../contexts/Auth";

import { GetDeck, SaveCard } from "../graphql/lessonQueries.graphql";
import { FlashCard } from "../components/FlashCard";
import { LessonModal } from "../components/LessonModal";

interface IDefaultDeckProps {
  deckId: number;
}

export const Lesson = ({ route, navigation }: any) => {
  const { uid } = useAuth();
  const { lessonId, lessonName } = route.params;
  const { loading, error, data } = useQuery(GetDeck, {
    variables: { lessonId: 1 },
  });
  const [saveCard] = useMutation(SaveCard);
  const [currentCard, setCurrentCard] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton onPress={() => setModalVisible(true)} />
      ),
    });
  }, [navigation]);
  // set lesson title
  // navigation.setOptions({ title: lessonName });

  const onModalChecked = (exit: boolean) => {
    setModalVisible(false);
    if (exit) {
      navigation.navigate("LessonList");
    }
  };

  const onAnswerChosen = () => {
    if (currentCard === data.lesson_cards.length - 1) {
      navigation.navigate("Congrats");
    } else {
      setCurrentCard(currentCard + 1);
    }
  };

  const onCardSaved = () => {
    saveCard({
      variables: { uid: uid, cardId: data.lesson_cards[currentCard].card_id },
    });
  };

  if (error) {
    return <Text>Error: {JSON.stringify(error)}</Text>;
  }

  if (loading) {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  }

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
            card={data.lesson_cards[currentCard].card}
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
