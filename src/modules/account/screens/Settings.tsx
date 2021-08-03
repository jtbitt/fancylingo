import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import { UserAvatar } from "../components/UserAvatar";
import { SettingsList } from "../components/SettingsList";

export const Settings = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <UserAvatar />
      <SettingsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
