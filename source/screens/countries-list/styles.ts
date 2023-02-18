import { StyleSheet, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import { wp } from "../../utils/responsiveFunctions";

type CountriesProps = {
  searchview: ViewStyle;
  iconButton: ViewStyle;
};

export const CountriesStyles = StyleSheet.create<CountriesProps>({
  searchview: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginRight: wp(20),
  },
});

export default CountriesStyles;
