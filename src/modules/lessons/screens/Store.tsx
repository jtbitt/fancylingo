import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Title } from "react-native-paper";
import { useQuery } from "@apollo/client";
import { ActivityIndicator, Colors } from "react-native-paper";

import { useAuth } from "../../../contexts/Auth";
import { GET_LESSONS } from "../../../api/graphql";
import { Product } from "../components/Product";

export const Store = ({ navigation }: any) => {
  const { uid } = useAuth();
  const { loading, error, data } = useQuery(GET_LESSONS, {
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
  },
});
