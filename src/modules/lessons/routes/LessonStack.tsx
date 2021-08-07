import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LessonList } from "../screens/LessonList";
import { Lesson } from "../screens/Lesson";
import { Congrats } from "../screens/Congrats";
import { Store } from "../screens/Store";
import { LessonModal } from "../components/LessonModal";

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
        component={LessonList}
        options={{ title: "¡Bienvenido!" }}
      />
      <Stack.Screen name="Lesson" component={Lesson} />
      <Stack.Screen name="Congrats" component={Congrats} />
      <Stack.Screen name="Store" component={Store} />
    </Stack.Navigator>
  );
};
