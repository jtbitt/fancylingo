import React, { useState, useEffect, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import firebase from "firebase/app";
import "firebase/auth";

import { useFirebase } from "../hooks";

type AuthContextData = {
  uid: string;
  token: string | null;
  loading: boolean;
  signOut: any;
};

type AuthUser = {
  uid: string;
  token: string | null;
};

export const AuthContext = React.createContext({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const { logOut } = useFirebase();
  const [authUser, setAuthUser] = useState<AuthUser>({
    uid: "sevYDH1M8Dv3oiayTiBAG4PiTpsA",
    token: "430f03fk3f3fk03f30kfk",
  });
  const [loading, setLoading] = useState(true);

  // always have dependencies on effect, either empty for running once, or some properties to refresh it/re-run
  useEffect(() => {
    const tokenSync = async () => {
      const token = await SecureStore.getItemAsync("token");
      setAuthUser({ uid: authUser.uid, token: token });
      setLoading(false);
    };
  }, []);

  // smaller functions, extract hook
  useEffect(() => {
    // Sync user
    // type user?
    return firebase.auth().onAuthStateChanged(async (user: any) => {
      if (!user) {
        return;
      }

      const token = await user.getIdToken();
      const idTokenResult = await user.getIdTokenResult();
      const hasuraClaim = idTokenResult.claims["https://hasura.io/jwt/claims"];

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
