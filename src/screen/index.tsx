import React, { useState, useMemo, useCallback } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Input from "src/components/input";
import CountryInfo from "src/components/elements/countryInfo";
import { MainScreenStyles as Styles } from "src/components/style";

import { useCountries, useCountryByCode } from "src/hook";
import { filterFunc } from "src/config/func";

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
                <TouchableOpacity
                  onPress={() => setSelectedCountry(item.code)}
                  style={Styles.countryListContainer}
                >
                  <Text style={Styles.countryItem}>
                    {item.name} {item.emoji}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}

          <Input onChangeText={handleSearchChange} value={search} />
        </>
      )}
    </SafeAreaView>
  );
}
