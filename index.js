import React from "react";
import { registerRootComponent } from "expo";
import "react-native-gesture-handler";

import { App } from "./src/App";

export default function Root() {
  return <App />;
}

registerRootComponent(Root);
