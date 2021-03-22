import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

interface IStatusIconProps {
  style?: any;
  message: string;
  color: string;
}

export const StatusIcon = ({ style, message, color }: IStatusIconProps) => {
  return (
    <Button
      style={[styles.progress, style, { backgroundColor: color }]}
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
  },
  progressText: {
    fontSize: 16,
    color: "white",
  },
});
