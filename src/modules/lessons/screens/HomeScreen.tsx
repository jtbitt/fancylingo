import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { LessonList, Lesson, Congrats } from "..";

const Stack = createStackNavigator();

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
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
        <Stack.Screen name="LessonList" component={LessonList} />
        <Stack.Screen name="Lesson" component={Lesson} />
        <Stack.Screen name="Congrats" component={Congrats} />
      </Stack.Navigator>
    </View>
  );
};
