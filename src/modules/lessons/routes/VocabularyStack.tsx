import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { VocabularyListScreen } from "../screens/VocabularyListScreen";
import { VocabularyWordScreen } from "../screens/VocabularyWordScreen";

const Stack = createStackNavigator();

export const VocabularyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffe881",
          height: Platform.OS === "ios" ? 60 : 120,
          shadowColor: "rgba(101,101,101,0.5)",
          shadowRadius: 5,
        },
        headerTintColor: "#3D3C3C",
      }}
    >
      <Stack.Screen name="Vocabulary" component={VocabularyListScreen} />
      <Stack.Screen name="Vocabulary Word" component={VocabularyWordScreen} />
    </Stack.Navigator>
  );
};
