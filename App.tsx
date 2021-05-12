import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import { ApolloProvider } from "react-apollo";
import { makeApolloClient } from "./api";

import { firebaseConfig, hasuraConfig } from "./config/keys";
import { getEnvVars } from "./environment";
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
  const env = getEnvVars();
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    if (env?.apiUrl === "localhost:8080") {
      firebase.auth().useEmulator("http://localhost:9099/");
      firebase.functions().useEmulator("http://localhost", 5001);
    }
    firebase.auth().onAuthStateChanged(async (user: any) => {
      if (user) {
        const token = await user.getIdToken();
        console.log(token);
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
          // set auth state
        } else {
          const endpoint =
            "http://localhost:5001/fancylingo-310003/us-central1/refreshToken";
          const response = await fetch(`${endpoint}?uid=${user.uid}`);

          if (response.status === 200) {
            const token = await user.getIdToken(true);
            // store token
          } else {
            return response.json().then((e) => {
              throw e;
            });
          }
        }
      }
    });
  }

  // const [client, setClient] = useState<any>();

  // useEffect(() => {
  //   // const client = makeApolloClient(hasuraConfig);
  //   // setClient(client);
  // }, []);

  // if (!client) {
  //   return <ActivityIndicator animating={true} color={Colors.red800} />;
  // }

  return (
    // <ApolloProvider client={client}>
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        {/* <Navbar color={theme.colors.accent} /> */}
        <ImageBackground
          source={require("./assets/background.png")}
          style={styles.background}
        >
          <Login />
          {/* <Welcome /> */}
          {/* <Home /> */}
          {/* <Lesson /> */}
          {/* <Congrats /> */}
          {/* <Store /> */}
        </ImageBackground>
      </SafeAreaView>
    </PaperProvider>
    // </ApolloProvider>
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
