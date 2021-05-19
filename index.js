import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { ImageBackground } from "react-native";

import App from "./src/App";

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

export default function Root() {
  return (
    <ImageBackground
      source={require("./assets/background.png")}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <NavigationContainer theme={theme}>
        <PaperProvider theme={theme}>
          <App colors={theme.colors} />
        </PaperProvider>
      </NavigationContainer>
    </ImageBackground>
  );
}

registerRootComponent(Root);
