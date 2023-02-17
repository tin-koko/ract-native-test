import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../../graphql/queries";
import AnimatedFlatlist, {
  AnimatedFlatlistHandle,
} from "../../components/animated-flatlist";
import MainScreen from "../../components/main-screen";
import SearchInput from "../../components/search-input";
import { GridButton, ListButton } from "../../components/icon-button";
import CountriesStyles from "./styles";

const CountriesListScreen = () => {
  const [selected, setSelected] = useState("list");
  const { data } = useQuery(GET_COUNTRIES);
  const animatedListRef = useRef<AnimatedFlatlistHandle>(null);
  const setToGrid = () => {
    animatedListRef.current?.setOrientation("grid");
    setSelected("grid");
  };
  const setToList = () => {
    animatedListRef.current?.setOrientation("list");

    setSelected("list");
  };
  return (
    <MainScreen>
      <View style={CountriesStyles.searchview}>
        <SearchInput />
        <ListButton selected={selected === "list"} onPress={setToList} />
        <GridButton
          selected={selected === "grid"}
          style={CountriesStyles.gridButton}
          onPress={setToGrid}
        />
      </View>
      <AnimatedFlatlist
        ref={animatedListRef}
        data={data?.countries}
        renderItem={({ item }) => (
          <View>
            <Text style={{ color: "red" }}>{item.name}</Text>
          </View>
        )}
      />
    </MainScreen>
  );
};

export default CountriesListScreen;

const styles = StyleSheet.create({});
