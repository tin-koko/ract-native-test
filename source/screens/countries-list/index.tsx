import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../../graphql/queries";
import AnimatedFlatlist, {
  AnimatedFlatlistHandle,
} from "../../components/animated-flatlist";
import MainScreen from "../../components/main-screen";

const CountriesListScreen = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const animatedListRef = useRef<AnimatedFlatlistHandle>(null);
  return (
    <MainScreen>
      <Button
        title="press"
        onPress={() => animatedListRef.current?.toggleGrid()}
      />
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
