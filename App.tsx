import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./source/graphql/client";
import AppNavigator from "./source/navigation";
import { StatusBar } from "react-native";

StatusBar.setBarStyle("light-content");

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
}

export default App;
