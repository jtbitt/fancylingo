import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const makeApolloClient = (token: string) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: `https://fancylingo.hasura.app/v1/graphql`,
      headers: {
        authorization: `Bearer ${token}`,
        "X-Hasura-Role": `user`
      }
    }),
    cache: new InMemoryCache()
  });

  return client;
}

export default makeApolloClient;
