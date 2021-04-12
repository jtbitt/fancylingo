import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import * as firebase from "firebase";
import { firebaseConfig } from "./config/keys";
import { registration, signInWithGoogle, getLessons } from "./api/firebase";

import { Navbar } from "./components";
import { Login, Welcome } from "./modules/auth";
import { Home, Lesson, Congrats } from "./modules/lessons";
import { Store } from "./modules/shopping";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#fc5a5e",
    accent: "#ffe881",
  },
};

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Navbar color={theme.colors.accent} />
        <ImageBackground
          source={require("./assets/background.png")}
          style={styles.background}
        >
          {/* <Login /> */}
          {/* <Welcome /> */}
          {/* <Home /> */}
          <Lesson />
          {/* <Congrats /> */}
          {/* <Store /> */}
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
