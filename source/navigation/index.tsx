import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../constants/routes";
import { CountriesListScreen, CountryInfoScreen } from "../screens";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={routes.CountriesList}
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
