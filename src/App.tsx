import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
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
import { ApolloProvider } from "@apollo/client/react";
import { makeApolloClient } from "./api";
import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { firebaseConfig } from "../config/keys";
import { getEnvVars } from "../environment";
import { CREATE_USER } from "./api/graphql";
import { registration, signInWithGoogle, getLessons } from "./api/firebase";
import { Navbar } from "./components";
import { Login, Welcome } from "./modules/auth";
import { Home, Lesson, Congrats } from "./modules/lessons";
import { Store } from "./modules/shopping";

export default function App() {
  const [token, setToken] = useState<any>();
  const [client, setClient] = useState<any>(makeApolloClient());
  const env = getEnvVars();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    const tokenSync = async () => {
      const token = await SecureStore.getItemAsync("token");
      setToken(token);
    };
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    if (env?.apiUrl === "localhost:8080") {
      firebase.auth().useEmulator("http://localhost:9099/");
      firebase.functions().useEmulator("http://localhost", 5001);
    }
    firebase.auth().onAuthStateChanged(async (user: any) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
          console.log(token);
          // save token
          await SecureStore.setItemAsync("token", token);
          // set token
          setToken(token);
        } else {
          const endpoint =
            "http://localhost:5001/fancylingo-310003/us-central1/refreshToken";
          const response = await fetch(`${endpoint}?uid=${user.uid}`);

          if (response.status === 200) {
            // get fresh token
            const token = await user.getIdToken(true);
            // save token
            await SecureStore.setItemAsync("token", token);
            // set token
            setToken(token);
            // add user to DB
            const adminClient = makeApolloClient();
            adminClient
              .mutate({
                mutation: CREATE_USER,
                variables: {
                  userId: user.uid,
                  name: user.displayName,
                  email: user.email,
                },
              })
              .then((response: any) => console.log(response.data))
              .catch((err: any) => console.error(err));
          } else {
            return response.json().then((e) => {
              throw e;
            });
          }
        }
      }
    });
  }

  if (!token) {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
      </Stack.Navigator>
    );
  }

  if (token) {
    return (
      <ApolloProvider client={client}>
        <SafeAreaView style={styles.container}>
          {/* <Navbar color={theme.colors.accent} /> */}
          <ImageBackground
            source={require("../assets/background.png")}
            style={styles.background}
          >
            <Home />
          </ImageBackground>
        </SafeAreaView>
      </ApolloProvider>
    );
  }
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