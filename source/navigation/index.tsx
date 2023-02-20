import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../constants/routes";
import { CountriesListScreen, CountryInfoScreen } from "../screens";

export type RootStackParamList = {
  CountriesList: undefined;
  CountryInfo: {
    emoji: string;
    name: string;
    phone: string;
    continent: { name: string };
    languages: Array<{ code: string; name: string }>;
  };
};

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={routes.CountriesList}
          component={CountriesListScreen}
        />
        <Stack.Screen name={routes.CountryInfo} component={CountryInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
