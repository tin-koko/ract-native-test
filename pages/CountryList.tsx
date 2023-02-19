import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CountryCard from "../components/CountryCard";
import Searchbar from "../components/searchBar";


export default function CountryList() {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" backgroundColor="green" />
        <Searchbar search={search} setSearch={setSearch} />
        <CountryCard search={search} />   
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  h1: {
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
});
