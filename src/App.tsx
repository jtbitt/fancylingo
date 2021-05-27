import React from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";

import { firebaseConfig } from "../config/keys";
import { getEnvVars } from "../environment";
import { Router } from "./routes/Router";
import { AuthProvider } from "./contexts/Auth";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#fc5a5e",
    accent: "#ffe881",
    background: "transparent",
  },
};

export const App = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const env = getEnvVars();

  if (env?.apiUrl === "localhost:8080") {
    firebase.auth().useEmulator("http://localhost:9099/");
    firebase.functions().useEmulator("http://localhost", 5001);
  }

  return (
    <PaperProvider theme={theme}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.background}
      >
        <AuthProvider>
          <SafeAreaView style={styles.container}>
            <Router theme={theme} />
          </SafeAreaView>
        </AuthProvider>
      </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
