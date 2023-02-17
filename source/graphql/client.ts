import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CachePersistor, MMKVWrapper } from "apollo3-cache-persist";
import { MMKV } from "react-native-mmkv";

const cache = new InMemoryCache();

export const persistor = new CachePersistor({
  cache,
  storage: new MMKVWrapper(new MMKV()),
  maxSize: false,
});

export const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache,
});
