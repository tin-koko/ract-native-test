import { StyleSheet, ViewStyle } from "react-native";
import { hp, wp } from "../../utils/responsiveFunctions";

type CountryItemProps = {
  view: ViewStyle;
  row: ViewStyle;
};

const CountryItemStyles = StyleSheet.create<CountryItemProps>({
  view: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",

    marginHorizontal: wp(10),
    marginBottom: hp(20),
    padding: wp(10),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(6),
  },
});

export default CountryItemStyles;
