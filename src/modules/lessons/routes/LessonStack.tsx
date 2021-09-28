import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import { WelcomeScreen } from "../screens/WelcomeScreen";
import { LessonListScreen } from "../screens/LessonListScreen";
import { LessonScreen } from "../screens/LessonScreen";
import { CongratsScreen } from "../screens/CongratsScreen";
import { StoreScreen } from "../screens/StoreScreen";

type LessonStackParamList = {
  Welcome: undefined;
  LessonList: undefined;
  Lesson: { lessonId: string; lessonName: string };
  Congrats: undefined;
  Store: undefined;
};

export type WelcomeProps = StackScreenProps<LessonStackParamList, "Welcome">;
export type LessonListProps = StackScreenProps<
  LessonStackParamList,
  "LessonList"
>;
export type LessonProps = StackScreenProps<LessonStackParamList, "Lesson">;
export type CongratsProps = StackScreenProps<LessonStackParamList, "Congrats">;
export type StoreProps = StackScreenProps<LessonStackParamList, "Store">;

const Stack = createStackNavigator<LessonStackParamList>();

export const LessonStack = () => {
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
      <Stack.Screen
        name="Store"
        component={StoreScreen}
        options={{ title: "Premium" }}
      />
    </Stack.Navigator>
  );
};
