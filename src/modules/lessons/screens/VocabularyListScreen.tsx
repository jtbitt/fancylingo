import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Headline } from "react-native-paper";

import { useQueryHandler } from "../../.,/../../hooks";
import { useCards } from "../hooks";
import { GetUserCards } from "../graphql/lessonQueries.graphql";
import { SavedCard } from "../components/SavedCard";

export const VocabularyListScreen = ({ navigation }: any) => {
  const { cards } = useCards(GetUserCards, 1);

  if (!cards) {
    return <></>;
  }

  if (!cards.length) {
    return (
      <View style={styles.noCardsContainer}>
        <Headline style={styles.noCards}>
          There are currently no cards saved. Save a card while practicing your
          deck if you would like to come back to it later!
        </Headline>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View>
          {cards.map((card: any, i: number) => (
            <SavedCard
              card={card}
              key={i}
              onPress={() =>
                navigation.navigate("Vocabulary Word", {
                  card: card,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  noCardsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
  noCards: {
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: "7.5%",
  },
});
