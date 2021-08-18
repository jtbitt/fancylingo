import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

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
          backgroundColor: "#ffe881",
          height: 60,
          shadowColor: "rgba(101,101,101,0.5)",
          shadowRadius: 5,
        },
        headerTintColor: "#3D3C3C",
        headerBackTitleVisible: false,
      }}
    >
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
