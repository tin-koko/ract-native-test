import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../text";
import { Item } from "../animated-flatlist";
import CountryItemStyles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation";

type CountryItemProps = {
  item: Item;
  isGrid: boolean;
  navigation: StackNavigationProp<RootStackParamList, "CountriesList">;
};

const CountryItem = ({ item, isGrid, navigation }: CountryItemProps) => {
  const { emoji, name, phone, continent, languages } = item;
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("CountryInfo", {
          emoji,
          name,
          phone,
          continent,
          languages,
        })
      }
      style={isGrid ? CountryItemStyles.grid : CountryItemStyles.list}
    >
      <View style={CountryItemStyles.row}>
        <Text>{item.emoji} </Text>
        <Text> {item.name}</Text>
      </View>

      <View>
        <Text>{item.continent.name}</Text>
      </View>
    </Pressable>
  );
};

export default CountryItem;

const styles = StyleSheet.create({});
