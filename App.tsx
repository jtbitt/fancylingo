import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import { ApolloProvider } from "react-apollo";
import { makeApolloClient } from "./api";

import { hasuraConfig } from "./config/keys";
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
  const [client, setClient] = useState<any>();

  useEffect(() => {
    const client = makeApolloClient(hasuraConfig);
    setClient(client);
  }, []);

  if (!client) {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  }

  return (
    <ApolloProvider client={client}>
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
            {/* <Lesson /> */}
            {/* <Congrats /> */}
            {/* <Store /> */}
          </ImageBackground>
        </SafeAreaView>
      </PaperProvider>
    </ApolloProvider>
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
