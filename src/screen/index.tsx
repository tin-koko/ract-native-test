import React, { useState, memo, useMemo, useCallback } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCountries, useCountryByCode } from "src/hook";

import Input from "src/components/input";
import CountryInfo from "src/components/elements/countryInfo";
import { MainScreenStyles as Styles } from "src/components/style";

import { filterFunc } from "src/config/func";

import type { CountryItemProps } from "src/types";

export default function MainScreen() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const { data: countryList, loading: countryListLoader } = useCountries();
  const { data: selectedCountryInfo, loading } =
    useCountryByCode(selectedCountry);

  const computedData = useMemo(
    () => filterFunc({ key: search, data: countryList, by: "name" }),
    [countryList, search]
  );

  const handleSearchChange = useCallback((text: string) => {
    setSearch(text);
  }, []);

  const CountryItem = memo(({ item, onPress }: CountryItemProps) => (
    <TouchableOpacity onPress={onPress} style={Styles.countryContainer}>
      <Text style={Styles.countryItem}>
        {item.name} {item.emoji}
      </Text>
    </TouchableOpacity>
  ));

  return (
    <SafeAreaView style={Styles.container}>
      {loading && <ActivityIndicator size="large" />}

      {selectedCountryInfo && (
        <TouchableOpacity onPress={() => setSelectedCountry(null)}>
          <CountryInfo {...selectedCountryInfo.country} />
        </TouchableOpacity>
      )}

      {!selectedCountry && countryList && !loading && (
        <>
          {!countryListLoader && (
            <FlatList
              data={computedData}
              keyExtractor={(item) => item.code}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => (
                <CountryItem
                  item={item}
                  onPress={() => setSelectedCountry(item.code)}
                />
              )}
            />
          )}

          <Input onChangeText={handleSearchChange} value={search} />
        </>
      )}
    </SafeAreaView>
  );
}
