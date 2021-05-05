import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";

import { signInWithGoogle, signInWithFacebook } from "../../../api/firebase";

export const Login = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require("./logo.png")} style={styles.image} />
        <View style={styles.buttons}>
          <Button
            style={[styles.button, styles.buttonSpacing]}
            contentStyle={{ width: 150 }}
            labelStyle={styles.buttonText}
            icon="facebook"
            mode="contained"
            onPress={() => signInWithFacebook()}
          >
            FACEBOOK
          </Button>
          <Button
            style={styles.button}
            contentStyle={{ width: 150 }}
            labelStyle={styles.buttonText}
            icon="google"
            mode="contained"
            onPress={() => signInWithGoogle()}
          >
            GOOGLE
          </Button>
        </View>
      </View>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <HelperText type="error" visible={true}>
          Ex. myuser@gmail.com
        </HelperText>
        <TextInput
          style={[styles.input, styles.inputSpacing]}
          mode="outlined"
          label="Password"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <HelperText type="error" visible={true}>
          Check your password
        </HelperText>
      </View>
      <Button
        style={styles.button}
        labelStyle={styles.buttonText}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        LOG IN WITH YOUR ACCOUNT
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "20%",
    marginBottom: "20%",
  },
  topContainer: {
    width: "80%",
    alignItems: "center",
  },
  image: {
    height: 150,
    marginBottom: 50,
    resizeMode: "contain",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  buttonSpacing: {
    marginRight: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  inputs: {
    width: "80%",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.48)",
    color: "black",
  },
  inputSpacing: {
    marginTop: 20,
  },
});
