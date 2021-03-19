import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

interface IStatusIconProps {
  message: string;
  color: string;
}

export const StatusIcon = ({ message, color }: IStatusIconProps) => {
  return (
    <Button
      style={[styles.progress, { backgroundColor: color }]}
      labelStyle={styles.progressText}
      mode="contained"
      uppercase={false}
    >
      {message}
    </Button>
  );
};

const styles = StyleSheet.create({
  progress: {
    borderRadius: 20,
    width: 140,
    marginRight: "auto",
  },
  progressText: {
    fontSize: 16,
    color: "white",
  },
});
