import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client/react";

import { makeApolloClient } from "../api";
import { AppStack } from "./AppStack";
import { AuthStack } from "../modules/auth/routes/AuthStack";
import { useAuth } from "../contexts/Auth";

export const Router = ({ theme }: any) => {
  const { loading, token } = useAuth();

  if (loading) {
    console.log("loading");
  }

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
