import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../modules/login";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
