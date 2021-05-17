import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

import { hasuraConfig } from "../../config/keys";

export const makeApolloClient = (token?: string) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: `https://fancylingo.hasura.app/v1/graphql`,
      headers: {
        authorization: token ? `Bearer ${token}` : "",
        'x-hasura-admin-secret': token ? "" : hasuraConfig
      },
    }),
    cache: new InMemoryCache()
  });

  return client;
}

export default makeApolloClient;
