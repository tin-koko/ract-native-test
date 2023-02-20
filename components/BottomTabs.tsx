import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../pages/About";
import CountryList from "../pages/CountryList";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName : string = '';
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "About") {
            iconName = focused ? "ios-people-circle" : "ios-people-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={CountryList} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}
