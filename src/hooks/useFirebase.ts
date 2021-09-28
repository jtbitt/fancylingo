import { useState } from "react";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import "firebase/storage";
import { Alert } from "react-native";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";

import { keys } from "../../config/keys";

interface IFirebaseMedia {
  name: string;
  url: string
}

export const useFirebase = () => {
  const [imageUrls, setImageUrls] = useState<IFirebaseMedia[]>();
  const [audioUrls, setAudioUrls] = useState<IFirebaseMedia[]>();

  const signUp = async (email: string, password: string) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
    } catch ({ message }) {
      Alert.alert(`Signup Error: ${message}`);
    }
  };
  
  const signIn = async (email: string, password: string) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch ({ message }) {
      Alert.alert(`Login Error: ${message}`);
    }
  };
  
  const signInWithGoogle = async () => {
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
      Alert.alert(`Google Login Error: ${message}`);
    }
  };
  
  const signInWithFacebook = async () => {
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
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  };
  
  const logOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch ({ message }) {
      Alert.alert("There is an issue with the system");
    }
  };

  const getMedia = async (mediaPath: string, mediaType: string) => {
    try {
      const mediaRef = firebase.storage().ref().child(mediaPath);
      const mediaList = await mediaRef.listAll();
      let mediaUrls = mediaList.items.map(async (itemRef) => {
        return { name: itemRef.name, url: await itemRef.getDownloadURL() };
      });
      let mediaDownloads = Promise.all(mediaUrls);
      let media = await mediaDownloads;
      mediaType === 'image' ? setImageUrls(media) : setAudioUrls(media);
    } catch ({ message }) {
      console.log(message);
    }
  };

  return { signUp, signIn, signInWithGoogle, signInWithFacebook, logOut, getMedia, imageUrls, audioUrls };
};