import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
            headerStyle: {
              backgroundColor: 'green'
            },
            title: ""
          }}
        />
        <Stack.Screen name="Country List" component={CountryList} />
        <Stack.Screen name="Details" component={Details}  options={{
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