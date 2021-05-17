import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";

interface INavbarProps {
  color: string;
}

export const Navbar = ({ color }: INavbarProps) => {
  return (
    <Appbar style={[styles.nav, { backgroundColor: color }]}>
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
