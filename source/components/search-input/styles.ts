import { StyleSheet, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import { hp, wp } from "../../utils/responsiveFunctions";

type SearchInputProps = {
  container: ViewStyle;
  textInput: ViewStyle;
};

export const SearchInputStyles = StyleSheet.create<SearchInputProps>({
  container: {
    paddingHorizontal: wp(12),
    paddingVertical: hp(8),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    marginHorizontal: wp(20),
    marginVertical: hp(30),
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    marginLeft: wp(12),
    fontFamily: "Gilroy-SemiBold",
    color: "white",
    flex: 1,
    padding: 0,
    height: hp(30),
  },
});

export default SearchInputStyles;
