import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import { useQuery } from "@apollo/client";

import { useAuth } from "../../../contexts/Auth";
import { GetUserCards } from "../graphql/lessonQueries.graphql";
import { SavedCard } from "../components/SavedCard";

export const VocabularyList = ({ navigation }: any) => {
  const { uid } = useAuth();

  const { loading, error, data } = useQuery(GetUserCards, {
    variables: { uid: uid },
  });

  if (error) {
    return <Text>Error: {JSON.stringify(error)}</Text>;
  }

  if (loading) {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View>
          {data.user_cards.map((card: any, i: number) => (
            <SavedCard
              card={card.card}
              key={i}
              onPress={() =>
                navigation.navigate("Vocabulary Word", {
                  cardId: card.card.card_id,
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
