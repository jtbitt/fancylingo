import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, List } from "react-native-paper";

import { useAuth } from "../../../contexts/Auth";

export const SettingsList = () => {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <List.Item
        title="Account Settings"
        style={styles.listItem}
        titleStyle={styles.listTitle}
        right={(props) => <List.Icon {...props} icon="chevron-right" />}
      />
      <List.Item
        title="Notification Settings"
        style={styles.listItem}
        titleStyle={styles.listTitle}
        right={(props) => <List.Icon {...props} icon="chevron-right" />}
      />
      <List.Item title="" style={styles.listSpacing} />
      <List.Item
        title="Privacy Policy"
        style={styles.listItem}
        titleStyle={styles.listTitle}
        right={(props) => <List.Icon {...props} icon="chevron-right" />}
      />
      <List.Item
        title="Q & A"
        style={styles.listItem}
        titleStyle={styles.listTitle}
        right={(props) => <List.Icon {...props} icon="chevron-right" />}
      />
      <List.Item
        title="About Us"
        style={styles.listItem}
        titleStyle={styles.listTitle}
        right={(props) => <List.Icon {...props} icon="chevron-right" />}
      />
      <List.Item title="" style={styles.listSpacing} />
      <List.Item
        title="Delete Account"
        style={styles.listItem}
        titleStyle={[styles.listTitle, styles.delete]}
        right={(props) => <List.Icon {...props} icon="" />}
      />
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonText}
        onPress={() => signOut()}
      >
        LOG OUT
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    justifyContent: "center",
  },
  listItem: {
    height: 35,
  },
  listSpacing: {
    height: 20,
  },
  listTitle: {
    fontSize: 18,
  },
  delete: {
    color: "#A0149E",
  },
  button: {
    alignSelf: "center",
    marginTop: 50,
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
