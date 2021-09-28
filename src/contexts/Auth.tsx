import React, { useState, useEffect, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import firebase from "firebase/app";
import "firebase/auth";

import { useFirebase } from "../hooks";

type AuthContextData = {
  uid: string;
  token: string | null;
  loading: boolean;
  signOut: () => void;
};

type AuthUser = {
  uid: string;
  token: string | null;
};

type FirebaseUser = firebase.User | null;

type HasuraClaim = {
  "x-hasura-allowed-role": string[];
  "x-hasura-default-role": string;
  "x-hasura-user-id": string;
};

export const AuthContext = React.createContext({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const { logOut } = useFirebase();
  const [authUser, setAuthUser] = useState<AuthUser>({
    uid: "",
    token: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenSync = async () => {
      const token = await SecureStore.getItemAsync("token");
      setAuthUser({ uid: authUser.uid, token: token });
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (user: FirebaseUser) => {
      if (!user) {
        return;
      }

      const token = await user.getIdToken();
      const idTokenResult = await user.getIdTokenResult();
      const hasuraClaim: HasuraClaim =
        idTokenResult.claims["https://hasura.io/jwt/claims"];

      if (hasuraClaim) {
        // save token
        await SecureStore.setItemAsync("token", token);
        // set uid and token
        setAuthUser({ uid: user.uid, token: token });
        setLoading(false);
      } else {
        const endpoint =
          "http://localhost:5001/fancylingo-310003/us-central1/refreshToken";
        const response = await fetch(`${endpoint}?uid=${user.uid}`);

        if (response.status === 200) {
          // get fresh token
          const token = await user.getIdToken(true);
          // save token
          await SecureStore.setItemAsync("token", token);
          // set uid and token
          setAuthUser({ uid: user.uid, token: token });
          setLoading(false);
        } else {
          // make sure you have error boundary to catch it
          // async / await maybe
          return response.json().then((e) => {
            throw e;
          });
        }
      }
    });
  }, []);

  const signOut = async () => {
    logOut();
    setAuthUser({ uid: "", token: "" });
    await SecureStore.deleteItemAsync("token");
  };

  return (
    <AuthContext.Provider
      value={{
        uid: authUser.uid,
        token: authUser.token,
        loading: loading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
