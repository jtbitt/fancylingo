import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";

import { useFirebase } from "../../../hooks";

export const Login = () => {
  const { signUp, signIn, signInWithGoogle, signInWithFacebook } =
    useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[styles.container]}>
      <View style={styles.topContainer}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
        <View style={styles.socialButtons}>
          <Button
            style={[styles.button, { width: "50%" }, styles.buttonSpacing]}
            labelStyle={styles.buttonText}
            icon="facebook"
            mode="contained"
            onPress={() => signInWithFacebook()}
          >
            FACEBOOK
          </Button>
          <Button
            style={[styles.button, { width: "50%" }]}
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
          style={[styles.input, styles.inputSpacing]}
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <HelperText type="error" visible={true}>
          Ex. myuser@gmail.com
        </HelperText>
        <TextInput
          style={[styles.input, styles.inputSpacing]}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <HelperText type="error" visible={true}>
          Check your password
        </HelperText>
        <Button
          style={[styles.button, { width: "100%" }, styles.inputSpacing]}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => signIn(email, password)}
        >
          LOG IN
        </Button>
        <Button
          style={[styles.button, { width: "100%" }, styles.inputSpacing]}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => signUp(email, password)}
        >
          CREATE ACCOUNT
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  socialButtons: {
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
