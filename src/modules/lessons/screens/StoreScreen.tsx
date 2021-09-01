import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import { useLessons } from "../hooks";
import { LessonLoading } from "../components/LessonLoading";
import { Product } from "../components/Product";
import { Subscription } from "../components/Subscription";

export const StoreScreen = ({ navigation }: any) => {
  const { lessons } = useLessons();

  if (!lessons) {
    return <LessonLoading></LessonLoading>;
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
