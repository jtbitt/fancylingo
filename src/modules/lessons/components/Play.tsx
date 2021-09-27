import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

interface IDefaultPlayProps {
  style?: {};
  size: number;
  onPress: () => void;
}

export const Play = ({ style, size, onPress }: IDefaultPlayProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Avatar.Icon size={size} icon="play" color="white" style={style} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
