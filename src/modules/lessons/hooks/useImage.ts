import { useState, useEffect } from "react";
import { useDownloadURL } from "react-firebase-hooks/storage";
import firebase from "firebase/app";
import "firebase/storage";

export const useImage = (imageRef?: string) => {
  const [downloadUrl, loading, error] = useDownloadURL(
    firebase.storage().ref(imageRef)
  );

  if (error) {
    console.log('error');
  }

  if (loading) {
    console.log('loading');
  }

  return { downloadUrl };
};