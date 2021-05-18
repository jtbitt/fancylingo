import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { GET_LESSONS } from "../../../api/graphql";
import { DefaultLesson } from "../components/DefaultLesson";
import { LessonAlert } from "../components/LessonAlert";
import { LessonOption } from "../components/LessonOption";

export const Home = () => {
  const { data, error, loading } = useQuery(GET_LESSONS);
  const Tab = createBottomTabNavigator();

  if (error) {
    return <Text>Error: {JSON.stringify(error)}</Text>;
  }

  if (loading) {
    return <Text>Collection: Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* <View>
          <DefaultLesson lesson={data[0]} />
          <LessonAlert message="-50% discount - Premium lessons!" />
          {data.map((lesson: any, i: number) =>
            i > 0 ? <LessonOption lesson={lesson} key={i} /> : null
          )}
        </View> */}
      </ScrollView>
      <Tab.Navigator>
        <Tab.Screen name="Settings" component={Home} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Home} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: "5%",
  },
});
