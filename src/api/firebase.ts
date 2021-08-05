import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import "firebase/storage";

import { Alert } from "react-native";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";

import { keys } from "../../config/keys";

export const registration = async (email: string, password: string, lastName: string, firstName: string) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: keys.ANDROID_CLIENT_ID,
      iosClientId: keys.IOS_CLIENT_ID,
      behavior: 'web',
      scopes: ['profile', 'email']
    });
    
    if (result.type  === 'success') {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
      const googleProfileData = await firebase.auth().signInWithCredential(credential);
    }
  } catch ({ message }) {
    alert('login: Error:' + message);
  }
};

export const signInWithFacebook = async () => {
  try {
    await Facebook.initializeAsync(keys.FACEBOOK_APP_ID);

    const result = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile', 'email']
    });

    if (result.type === 'success') {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const credential = firebase.auth.FacebookAuthProvider.credential(result.token);
      const facebookProfileData = await firebase.auth().signInWithCredential(credential);
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};

export const logOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
};

export const getImage = async (image: string) => {
  try {
    const imageRef = firebase.storage().ref(image);
    const result = await imageRef.getDownloadURL();
    console.log(result);
    return result;
  } catch ({ message }) {
    console.log(message);
  }
}

// export const deleteUser = async (uid: string) => {
//   try {
//     await firebase.auth().deleteUser(uid)
//   }
// }
