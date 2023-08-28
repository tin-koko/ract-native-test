import { Text } from "react-native";
import { CountryInfoStyle as Styles } from "src/components/style";

import type { Country } from "src/types";

const CountryInfo = ({ name, emoji, phone, continent }: Country) => {
  return (
    <>
      <Text style={Styles.text}>Name: {name}</Text>
      <Text style={Styles.text}>Continent: {continent.name}</Text>
      <Text style={Styles.text}>Flag: {emoji}</Text>
      <Text style={Styles.text}>Code: {phone}</Text>
      <Text style={Styles.back}>Back</Text>
    </>
  );
};

export default CountryInfo;
