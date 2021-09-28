import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Title, Subheading } from "react-native-paper";

interface IDefaultUserAvatarProps {
  avatar: string;
  name: string;
  email: string;
}

export const UserAvatar = () => {
  return (
    <View style={styles.container}>
      <Avatar.Text style={styles.avatar} size={100} label="JD" color="black" />
      <View style={styles.infoContainer}>
        <Title style={styles.name}>John Doe</Title>
        <Subheading style={styles.email}>johndoe@gmail.com</Subheading>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fc5a5e",
    padding: 30,
  },
  avatar: {
    backgroundColor: "#ffe881",
  },
  infoContainer: {
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    color: "white",
  },
  email: {
    color: "white",
  },
});
