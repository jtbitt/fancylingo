import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomeScreen } from "../screens/WelcomeScreen";
import { LessonListScreen } from "../screens/LessonListScreen";
import { LessonScreen } from "../screens/LessonScreen";
import { CongratsScreen } from "../screens/CongratsScreen";
import { StoreScreen } from "../screens/StoreScreen";

const Stack = createStackNavigator();

export const LessonStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: Platform.OS === "ios" ? 60 : 120,
          backgroundColor: "#ffe881",
          shadowColor: "rgba(101,101,101,0.5)",
          shadowRadius: 5,
        },
        headerTintColor: "#3D3C3C",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LessonList"
        component={LessonListScreen}
        options={{ title: "¡Bienvenido!" }}
      />
      <Stack.Screen name="Lesson" component={LessonScreen} />
      <Stack.Screen name="Congrats" component={CongratsScreen} />
      <Stack.Screen name="Store" component={StoreScreen} />
    </Stack.Navigator>
  );
};
