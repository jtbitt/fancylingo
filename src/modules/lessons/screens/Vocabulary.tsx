import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { useQuery } from "@apollo/client";

import { useAuth } from "../../../contexts/Auth";
import { GetCards } from "../graphql/lessonQueries.graphql";
import { SavedCard } from "../components/SavedCard";

export const Vocabulary = () => {
  const { uid } = useAuth();

  const { loading, error, data } = useQuery(GetCards, {
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
          {data.user_cards.map((card: any, i: number) =>
            i > 0 ? (
              <SavedCard
                card={card.card}
                key={i}
                onPress={() => console.log("hi")}
              />
            ) : null
          )}
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
