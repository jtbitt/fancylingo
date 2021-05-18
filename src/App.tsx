import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import { ApolloProvider } from "@apollo/client/react";
import { makeApolloClient } from "./api";
import * as SecureStore from "expo-secure-store";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { firebaseConfig } from "../config/keys";
import { getEnvVars } from "../environment";
import { CREATE_USER } from "./api/graphql";
import { Navbar } from "./components";
import { Login, Welcome } from "./modules/auth";
import { HomeScreen } from "./modules/lessons";
import { Store } from "./modules/shopping";

export default function App({ colors }: any) {
  const [token, setToken] = useState<any>();
  const [client, setClient] = useState<any>(makeApolloClient());
  const env = getEnvVars();
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

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
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          <Login />
        </ImageBackground>
      </SafeAreaView>
    );
  }

  if (token) {
    return (
      <ApolloProvider client={client}>
        <SafeAreaView style={styles.container}>
          {/* <Navbar color={colors.accent} /> */}
          <ImageBackground
            source={require("../assets/background.png")}
            style={styles.background}
          >
            <Tab.Navigator
              barStyle={{
                backgroundColor: colors.accent,
                height: 60,
              }}
              activeColor={colors.primary}
              inactiveColor={"black"}
            >
              <Tab.Screen
                name="Settings"
                options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="account"
                      color={color}
                      size={26}
                    />
                  ),
                }}
                component={HomeScreen}
              />
              <Tab.Screen
                name="Home"
                options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={26}
                    />
                  ),
                }}
                component={HomeScreen}
              />
              <Tab.Screen
                name="Search"
                options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="card-search-outline"
                      color={color}
                      size={26}
                    />
                  ),
                }}
                component={HomeScreen}
              />
            </Tab.Navigator>
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
