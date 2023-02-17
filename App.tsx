import React from "react";
import { View } from "react-native";
import { ApolloProvider } from "@apollo/client";
import { client } from "./source/graphql/client";
import AppNavigator from "./source/navigation";

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <View>
        <AppNavigator />
      </View>
    </ApolloProvider>
  );
}

export default App;
