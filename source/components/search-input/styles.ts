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
    paddingVertical: hp(12),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    marginHorizontal: wp(20),
    marginVertical: hp(30),
    flexDirection: "row",
    flex: 1,
  },
  textInput: {
    marginLeft: wp(12),
    fontFamily: "Gilroy-SemiBold",
  },
});

export default SearchInputStyles;
