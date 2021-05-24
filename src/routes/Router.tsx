import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase/app";
import "firebase/auth";
import { ApolloProvider } from "@apollo/client/react";

import { makeApolloClient } from "../api";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useAuth } from "../contexts/Auth";

export const Router = ({ theme }: any) => {
  const { loading, token } = useAuth();

  // if (error) {
  // }

  if (loading) {
    console.log("loading");
  }

  console.log(token);

  return (
    <NavigationContainer theme={theme}>
      {token ? (
        <ApolloProvider client={makeApolloClient(token)}>
          <AppStack />
        </ApolloProvider>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};
