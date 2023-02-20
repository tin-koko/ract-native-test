import { StyleSheet, ViewStyle } from "react-native";
import { hp, wp } from "../../utils/responsiveFunctions";

type CountriesInfoProps = {
  mainview: ViewStyle;
  countrynameview: ViewStyle;
  infoitem: ViewStyle;
  infoitemrow: ViewStyle;
};

const CountriesInfoStyles = StyleSheet.create<CountriesInfoProps>({
  mainview: {
    padding: wp(20),
  },
  countrynameview: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(15),
  },
  infoitemrow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(15),
  },
  infoitem: {
    padding: wp(5),
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    marginLeft: wp(5),
  },
});

export default CountriesInfoStyles;
