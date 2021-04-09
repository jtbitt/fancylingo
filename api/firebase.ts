import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";
import { lessons } from "../modules/lessons/interfaces/lesson.interface";

export const registration = async (email: string, password: string, lastName: string, firstName: string) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser);

    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      lastName: lastName,
      firstName: firstName,
    });
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
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithRedirect(provider)
    .getRedirectResult()
    .then((result) => {
      console.log(result);
      if (result.credential) {
        const credential = result.credential;
        const token = credential.accessToken;
      }
      const user = result.user;
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
};

export const signInWithFacebook = async () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithRedirect(provider)
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        const credential = result.credential;
        const token = credential.accessToken;
      }
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
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
