import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { LessonList, Lesson, Congrats } from "..";

const Stack = createStackNavigator();

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen name="Lesson List" component={LessonList} />
        <Stack.Screen name="Lesson" component={Lesson} />
        <Stack.Screen name="Congrats" component={Congrats} />
      </Stack.Navigator>
    </View>
  );
};
