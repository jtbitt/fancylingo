import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

interface IStatusIconProps {
  style?: {};
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
  },
  progressText: {
    fontSize: 14,
    color: "white",
  },
});
