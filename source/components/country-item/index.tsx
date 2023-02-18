import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../text";
import { Item } from "../animated-flatlist";
import CountryItemStyles from "./styles";

type CountryItemProps = {
  item: Item;
};

const CountryItem = ({ item }: CountryItemProps) => {
  console.log(item);
  return (
    <View style={CountryItemStyles.view}>
      <View style={CountryItemStyles.row}>
        <Text>{item.emoji} </Text>
        <Text> {item.name}</Text>
      </View>
      <View>
        <Text>{item.continent.name}</Text>
      </View>
    </View>
  );
};

export default CountryItem;

const styles = StyleSheet.create({});
