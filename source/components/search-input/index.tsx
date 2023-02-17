import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

//Svg
import SearchSvg from "../../assets/svg/icons/search.svg";
import SearchInputStyles from "./styles";

const SearchInput = () => {
  return (
    <View style={SearchInputStyles.container}>
      <SearchSvg />
      <TextInput
        style={SearchInputStyles.textInput}
        placeholder="Search Country"
        placeholderTextColor={"white"}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
