import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider, Appbar } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Appbar style={styles.top}>
        <Appbar.Action
          icon="archive"
          onPress={() => console.log("Pressed archive")}
        />
      </Appbar>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  top: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 50,
    zIndex: 900,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
