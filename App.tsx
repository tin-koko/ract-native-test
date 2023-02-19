import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./source/graphql/client";
import AppNavigator from "./source/navigation";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

StatusBar.setBarStyle("light-content");

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    </GestureHandlerRootView>
  );
}

export default App;
