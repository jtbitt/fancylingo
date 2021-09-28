import React from "react";
import { StyleSheet, View, ScrollView, RefreshControl } from "react-native";
import { Headline } from "react-native-paper";

import { useCards } from "../hooks";
import { LessonLoading } from "../components/LessonLoading";
import { GetUserCards } from "../graphql/lessonQueries.graphql";
import { SavedCard } from "../components/SavedCard";
import { VocabularyListProps } from "../routes/VocabularyStack";

export const VocabularyListScreen = ({ navigation }: VocabularyListProps) => {
  const { cards, refetch } = useCards(GetUserCards, 1);
  const [refreshing, setRefreshing] = React.useState(false);

  if (!cards) {
    return <LessonLoading></LessonLoading>;
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
      <ScrollView
        contentContainerStyle={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refetch} />
        }
      >
        <View>
          {cards.map((card: any, i: number) => (
            <SavedCard
              card={card}
              key={i}
              onPress={() =>
                navigation.navigate("VocabularyWord", {
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
