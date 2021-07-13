import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Settings } from "../screens/Settings";

const Stack = createStackNavigator();

export const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffe881",
          height: 60,
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
