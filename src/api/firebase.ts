import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";

import { Alert } from "react-native";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import * as GoogleSignIn from "expo-google-sign-in";

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
    console.log(message);
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
    console.log(message);
    alert(`Facebook Login Error: ${message}`);
  }
};

export const loggingOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
};

export const getLessons = async () => {
  const db = firebase.firestore();
  const lessons: any[] = [];

  try {
    const decksSnapshots = await db.collection('decks').get();

    decksSnapshots.forEach(doc => lessons.push(doc.data()))

  } catch (e) {
    console.log(e);
  }

  return lessons;
};

export const getLesson = async () => {
  try {
    const db = firebase.firestore();
    db.collection("decks/colombian-slang/cards")
      .get()
      .then((querySnapshot) => {
        // let lessons = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });
  } catch (err) {
    console.log(err);
  }
};
