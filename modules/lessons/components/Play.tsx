import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

export const Play = () => {
  return (
    <Avatar.Icon size={40} icon="play" color="white" style={styles.play} />
  );
};

const styles = StyleSheet.create({
  play: {
    marginRight: 15,
  },
});
