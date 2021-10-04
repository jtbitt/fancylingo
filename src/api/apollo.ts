import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const makeApolloClient = (token: string) => {
  console.log(token);
  const client = new ApolloClient({
    link: new HttpLink({
      uri: `https://fancylingo.hasura.app/v1/graphql`,
      headers: {
        authorization: `Bearer ${token}`
      }
    }),
    cache: new InMemoryCache()
  });

  return client;
}

export default makeApolloClient;
