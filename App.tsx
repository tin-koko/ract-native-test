import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persisted } from "src/store";

import MainScreen from "src/screen";
import { KeyboardAvoidingView, Platform } from "react-native";
export default function App() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persisted}>
            <MainScreen />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
}
