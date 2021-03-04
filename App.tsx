import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { Navbar } from "./components";
import { Deck } from "./modules/deck";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#fc5a5e",
    accent: "#fff0b3",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Navbar />
        <ImageBackground
          source={require("./assets/background.png")}
          style={styles.background}
        >
          <Deck />
        </ImageBackground>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
