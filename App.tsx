import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CountryCard from "./components/CountryCard";
import Searchbar from "./components/searchBar";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/CountryList";
import Details from "./pages/Details";
import CountryList from "./pages/CountryList";
import { BottomTabs } from "./components/BottomTabs";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            // headerShown: false,
            headerStyle: {
              backgroundColor: 'green'
            },
            title: ""
          }}
        />
        <Stack.Screen name="Country List" component={CountryList} />
        <Stack.Screen name="Details" component={Details}  options={{
            // headerShown: false,
            headerStyle: {
              backgroundColor: 'green'
            },
            title: "More details about country"
          }} />
      </Stack.Navigator>
      </ApolloProvider>
    
    </NavigationContainer>
  );
}