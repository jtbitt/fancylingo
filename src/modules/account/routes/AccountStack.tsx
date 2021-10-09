import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import { Settings } from "../screens/Settings";

type AccountStackParamList = {
  Settings: undefined;
};

export type SettingsProps = StackScreenProps<AccountStackParamList, "Settings">;

const Stack = createStackNavigator();

export const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffe881",
          shadowColor: "rgba(101,101,101,0.5)",
          shadowRadius: 5,
        },
        headerTintColor: "#3D3C3C",
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
