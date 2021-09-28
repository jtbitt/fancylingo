import React from "react";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import { Login } from "../screens/Login";

type AuthStackParamList = {
  Login: undefined;
};

export type LoginProps = StackScreenProps<AuthStackParamList, "Login">;

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
