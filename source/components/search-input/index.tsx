import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

//Svg
import SearchSvg from "../../assets/svg/icons/search.svg";
import SearchInputStyles from "./styles";

interface SearchInputProps {
  scrollToIndex: (index: number) => void;
  data: Array<{ name: string; code: string }>;
}

const SearchInput = ({ scrollToIndex, data }: SearchInputProps) => {
  const _onChangeText = (text: string) => {
    const index = data.findIndex((item) => {
      return (
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.code.toLowerCase().includes(text.toLowerCase())
      );
    });
    scrollToIndex(index > -1 ? index : 0);
  };
  return (
    <View style={SearchInputStyles.container}>
      <SearchSvg />
      <TextInput
        style={SearchInputStyles.textInput}
        placeholder="Search Country"
        placeholderTextColor={"white"}
        onChangeText={_onChangeText}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
