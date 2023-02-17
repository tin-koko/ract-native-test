import { StyleSheet, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import { wp } from "../../utils/responsiveFunctions";

type CountriesProps = {
  searchview: ViewStyle;
  gridButton: ViewStyle;
};

export const CountriesStyles = StyleSheet.create<CountriesProps>({
  searchview: {
    flexDirection: "row",
    alignItems: "center",
  },
  gridButton: {
    marginHorizontal: wp(12),
  },
});

export default CountriesStyles;
