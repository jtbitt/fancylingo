import React, { useState } from "react";
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
      <View style={styles.scrollview}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {lessons.map((lesson: any, i: number) => (
            <Product
              product={lesson}
              productKey={i}
              key={i}
              length={lessons.length}
              onPress={() => console.log("cool")}
            />
          ))}
        </ScrollView>
      </View>
      <Subscription onPress={() => console.log("cool")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: "5%",
  },
  scrollview: {
    height: 305,
  },
});
