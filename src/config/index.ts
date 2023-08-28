import { ApolloClient, InMemoryCache } from "@apollo/client";

export const URL = "https://countries.trevorblades.com/graphql";

export const ApolloClientConfig = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});
