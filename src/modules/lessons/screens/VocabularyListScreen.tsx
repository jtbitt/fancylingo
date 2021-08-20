import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";

import { useQueryHandler } from "../../.,/../../hooks";
import { useCards } from "../hooks";
import { GetUserCards } from "../graphql/lessonQueries.graphql";
import { SavedCard } from "../components/SavedCard";

export const VocabularyListScreen = ({ navigation }: any) => {
  const { queryData } = useQueryHandler(GetUserCards);
  const { cards } = useCards(queryData, "card_images");

  if (!cards) {
    return <></>;
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
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: "7.5%",
  },
});
