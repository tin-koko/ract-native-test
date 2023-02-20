import { View } from "react-native";
import React, { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../../graphql/queries";
import AnimatedFlatlist, {
  AnimatedFlatlistHandle,
} from "../../components/animated-flatlist";
import MainScreen from "../../components/main-screen";
import SearchInput from "../../components/search-input";
import { ListButton } from "../../components/icon-button";
import CountriesStyles from "./styles";
import CountryItem from "../../components/country-item";

const CountriesListScreen = () => {
  const [selected, setSelected] = useState("list");
  const { data } = useQuery(GET_COUNTRIES);
  const animatedListRef = useRef<AnimatedFlatlistHandle>(null);
  const toggleList = () => {
    setSelected((prev) => {
      if (prev === "list") {
        return "grid";
      } else {
        return "list";
      }
    });
    animatedListRef.current?.toggleList();
  };

  const scrollToIndex = (index: number) => {
    animatedListRef.current?.scrollToIndex(index);
  };
  return (
    <MainScreen>
      <View style={CountriesStyles.searchview}>
        <SearchInput data={data?.countries} scrollToIndex={scrollToIndex} />
        <ListButton
          selected={selected === "list"}
          onPress={toggleList}
          style={CountriesStyles.iconButton}
        />
      </View>
      <AnimatedFlatlist
        ref={animatedListRef}
        data={data?.countries}
        RenderItem={CountryItem}
      />
    </MainScreen>
  );
};

export default CountriesListScreen;
