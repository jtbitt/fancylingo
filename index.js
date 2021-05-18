import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  ActivityIndicator,
  Colors,
} from "react-native-paper";

import App from "./src/App";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#fc5a5e",
    accent: "#ffe881",
  },
};

export default function Root() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </NavigationContainer>
  );
}

registerRootComponent(Root);
