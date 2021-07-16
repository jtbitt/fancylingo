import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Button, List } from "react-native-paper";

import { UserAvatar } from "../components/UserAvatar";

export const Settings = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <UserAvatar />
      <View style={styles.settingsContainer}>
        <List.Item
          title="Account Settings"
          style={{ height: 35 }}
          titleStyle={{ fontSize: 18 }}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Notification Settings"
          style={{ height: 35 }}
          titleStyle={{ fontSize: 18 }}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item title="" style={{ height: 20 }} />
        <List.Item
          title="Privacy Policy"
          style={{ height: 35 }}
          titleStyle={{ fontSize: 18 }}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Q & A"
          style={{ height: 35 }}
          titleStyle={{ fontSize: 18 }}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="About Us"
          style={{ height: 35 }}
          titleStyle={{ fontSize: 18 }}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item title="" style={{ height: 20 }} />
        <List.Item
          title="Delete Account"
          style={{ height: 35 }}
          titleStyle={{ fontSize: 18, color: "#A0149E" }}
          right={(props) => <List.Icon {...props} icon="" />}
        />
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => console.log("Pressed")}
        >
          LOG OUT
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsContainer: {
    flex: 1,
    padding: "5%",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    marginTop: 80,
    width: 150,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
