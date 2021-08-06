import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { useDownloadURL } from "react-firebase-hooks/storage";
import firebase from "firebase/app";
import "firebase/storage";

interface IDefaultSavedCardProps {
  card: any;
  onPress: () => void;
}

export const SavedCard = ({ card, onPress }: IDefaultSavedCardProps) => {
  const [downloadUrl, loading, error] = useDownloadURL(
    firebase.storage().ref(card.image_url)
  );

  if (error || loading) {
    console.log("loading image");
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.cover} source={{ uri: downloadUrl }} />
      <View style={styles.content}>
        <Text style={styles.title}>{card.word}</Text>
      </View>
    </TouchableOpacity>
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
