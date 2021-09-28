import React from "react";
import { StyleSheet, View } from "react-native";

import { UserAvatar } from "../components/UserAvatar";
import { SettingsList } from "../components/SettingsList";
import { SettingsProps } from "../routes/AccountStack";

export const Settings = ({ navigation }: SettingsProps) => {
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
