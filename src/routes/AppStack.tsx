import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LessonStack } from "../modules/lessons/routes/LessonStack";

const Tab = createMaterialBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "#ffe881",
        height: 60,
      }}
      activeColor={"#fc5a5e"}
      inactiveColor={"black"}
    >
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        component={LessonStack}
      />
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        component={LessonStack}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="card-search-outline"
              color={color}
              size={26}
            />
          ),
        }}
        component={LessonStack}
      />
    </Tab.Navigator>
  );
};
