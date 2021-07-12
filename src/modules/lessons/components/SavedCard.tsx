import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { getCardImage } from "../utils/getCardImage";

interface IDefaultSavedCardProps {
  card: any;
  onPress: () => void;
}

export const SavedCard = ({ card, onPress }: IDefaultSavedCardProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={getCardImage(card.image_url)} />
      <View style={styles.content}>
        <Text style={styles.title}>{card.word}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.48)",
  },
  cover: {
    height: 200,
    width: "100%",
    borderRadius: 15,
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: "10%",
  },
  title: {
    fontSize: 25,
    marginRight: 25,
    fontWeight: "500",
  },
});
