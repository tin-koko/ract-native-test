import { StyleSheet, View } from "react-native";
import React from "react";
import MainScreen from "../../components/main-screen";
import Text from "../../components/text";
import { BackButton } from "../../components/icon-button";
import CountriesInfoStyles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

interface InfoDisplayProps {
  title: string;
  data: string;
}

const InfoDisplay = ({ title, data }: InfoDisplayProps) => {
  return (
    <View style={CountriesInfoStyles.infoitemrow}>
      <Text size={18}>{title}:</Text>
      <View style={CountriesInfoStyles.infoitem}>
        <Text size={16}>{data}</Text>
      </View>
    </View>
  );
};

interface CountryInfoScreenProps {
  navigation: StackNavigationProp<ParamListBase>;
  route: {
    params: {
      emoji: string;
      name: string;
      phone: string;
      continent: { name: string };
      languages: Array<{ code: string; name: string }>;
    };
  };
}
const CountryInfoScreen = ({ route }: CountryInfoScreenProps) => {
  const item = route.params;
  console.log(item);
  return (
    <MainScreen>
      <View style={CountriesInfoStyles.mainview}>
        <BackButton />
        <View style={CountriesInfoStyles.countrynameview}>
          <Text size={25}>{item.emoji} </Text>
          <Text size={25}>{item.name}</Text>
        </View>
        <InfoDisplay title={"Phone Code"} data={item.phone} />
        <InfoDisplay title={"Continent"} data={item.continent.name} />
        <View style={CountriesInfoStyles.infoitemrow}>
          <Text size={18}>Languages:</Text>
          {item.languages.map((data) => (
            <View style={CountriesInfoStyles.infoitem} key={data.code}>
              <Text>{data.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </MainScreen>
  );
};

export default CountryInfoScreen;

const styles = StyleSheet.create({});
