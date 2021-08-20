import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Title } from "react-native-paper";
import { ActivityIndicator, Colors } from "react-native-paper";

import { useQueryHandler } from "../../.,/../../hooks";
import { useLessons } from "../hooks";
import { GetLessons } from "../graphql/lessonQueries.graphql";
import { Product } from "../components/Product";
import { Subscription } from "../components/Subscription";

export const StoreScreen = ({ navigation }: any) => {
  const { queryData } = useQueryHandler(GetLessons);
  const { lessons } = useLessons(queryData, "lesson_images");

  if (!lessons) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Go farther with your Spanish</Title>
      <ScrollView horizontal={true}>
        {lessons.map((lesson: any, i: number) => (
          <Product
            product={lesson}
            key={i}
            onPress={() => console.log("cool")}
          />
        ))}
      </ScrollView>
      <Subscription onPress={() => console.log("cool")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    paddingVertical: 15,
  },
});
