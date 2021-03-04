import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";

export const Navbar = () => {
  return (
    <Appbar style={styles.nav}>
      {/* <Appbar.Action
        icon="archive"
        onPress={() => console.log("Pressed archive")}
    /> */}
    </Appbar>
  );
};

const styles = StyleSheet.create({
  nav: {
    height: 80,
  },
});
