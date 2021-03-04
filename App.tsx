import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Appbar,
  Card,
  Button,
  Title,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#fc5a5e",
    accent: "#fff0b3",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Appbar style={styles.nav}>
        {/* <Appbar.Action
          icon="archive"
          onPress={() => console.log("Pressed archive")}
        /> */}
      </Appbar>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/background.png")}
          style={styles.background}
        >
          <Card style={styles.card}>
            <Card.Cover
              style={styles.image}
              source={require("./assets/demo-image.png")}
            />
            <Card.Content style={styles.content}>
              <Title style={styles.title}>¿Qué es esto?</Title>
            </Card.Content>
          </Card>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            SEE ANSWER
          </Button>
        </ImageBackground>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 50,
    zIndex: 900,
    height: 80,
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
  card: {
    width: "80%",
  },
  image: {
    height: 350,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 50,
  },
  title: {
    fontSize: 30,
    color: "black",
  },
  button: {
    width: 150,
    color: "white",
  },
});
