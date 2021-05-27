import React, { useState, useEffect, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import firebase from "firebase/app";
import "firebase/auth";

type AuthContextData = {
  uid: string;
  token: string | null;
  loading: boolean;
};

type AuthUser = {
  uid: string;
  token: string | null;
};

export const AuthContext = React.createContext({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [authUser, setAuthUser] = useState<AuthUser>({ uid: "", token: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenSync = async () => {
      const token = await SecureStore.getItemAsync("token");
      setAuthUser({ uid: authUser.uid, token: token });
      setLoading(false);
    };
  });

  useEffect(() => {
    // Sync user
    firebase.auth().onAuthStateChanged(async (user: any) => {
      if (user) {
        console.log(user);
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim =
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
            return response.json().then((e) => {
              throw e;
            });
          }
        }
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ uid: authUser.uid, token: authUser.token, loading: loading }}
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
