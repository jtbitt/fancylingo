import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Button } from "react-native-paper";

import { UserAvatar } from "../components/UserAvatar";

export const Settings = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <UserAvatar />
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonText}
        onPress={() => console.log("Pressed")}
      >
        LOG OUT
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {},
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
