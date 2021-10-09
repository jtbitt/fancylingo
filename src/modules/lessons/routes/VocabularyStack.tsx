import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import { VocabularyListScreen } from "../screens/VocabularyListScreen";
import { VocabularyWordScreen } from "../screens/VocabularyWordScreen";
import { ICard } from "../interfaces/lesson.interface";

type VocabularyStackParamList = {
  Vocabulary: undefined;
  VocabularyWord: { card: ICard };
};

export type VocabularyListProps = StackScreenProps<
  VocabularyStackParamList,
  "Vocabulary"
>;
export type VocabularyWordProps = StackScreenProps<
  VocabularyStackParamList,
  "VocabularyWord"
>;

const Stack = createStackNavigator<VocabularyStackParamList>();

export const VocabularyStack = () => {
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
      <Stack.Screen name="Vocabulary" component={VocabularyListScreen} />
      <Stack.Screen name="VocabularyWord" component={VocabularyWordScreen} />
    </Stack.Navigator>
  );
};
