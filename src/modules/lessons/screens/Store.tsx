import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Title } from "react-native-paper";
import { ActivityIndicator, Colors } from "react-native-paper";
import { graphql } from "@apollo/react-hoc";
import { useQuery } from "@apollo/client";

import { useAuth } from "../../../contexts/Auth";
import { getLessons } from "../graphql/lessonQueries.graphql";
import { Product } from "../components/Product";
import { Subscription } from "../components/Subscription";

export const Store = ({ navigation }: any) => {
  const { uid } = useAuth();
  const { loading, error, data } = useQuery(getLessons, {
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
      <Title style={styles.title}>Go farther with your Spanish</Title>
      <ScrollView horizontal={true}>
        {data.user_lessons.map((lesson: any, i: number) => (
          <Product
            product={lesson.lesson}
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
