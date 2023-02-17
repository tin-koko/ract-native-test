import React, { useEffect } from "react";
import { View } from "react-native";
import { ApolloProvider } from "@apollo/client";
import { client, persistor } from "./source/graphql/client";
import { Provider } from "react-redux";
import { store } from "./source/redux/store";
import AppNavigator from "./source/navigation";

function App(): JSX.Element {
  useEffect(() => {
    async function initializeCache() {
      await persistor.restore();
    }
    initializeCache();
  }, []);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <View>
          <AppNavigator />
        </View>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
