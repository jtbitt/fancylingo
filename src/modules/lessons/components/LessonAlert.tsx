import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

interface ILessonAlertProps {
  message: string;
  onPress: () => void;
}

export const LessonAlert = ({ message, onPress }: ILessonAlertProps) => {
  return (
    <Button
      mode="contained"
      uppercase={false}
      style={styles.button}
      labelStyle={styles.messageText}
      onPress={onPress}
    >
      {message}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  messageText: {
    color: "white",
    fontSize: 17,
  },
});
