import { StyleSheet, ViewStyle } from "react-native";
import {
  LIST_ITEM_HEIGHT,
  LIST_ITEM_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../constants/variables";
import { hp, wp } from "../../utils/responsiveFunctions";

type CountryItemProps = {
  list: ViewStyle;
  row: ViewStyle;
  grid: ViewStyle;
};

const CountryItemStyles = StyleSheet.create<CountryItemProps>({
  grid: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    marginHorizontal: wp(20),
    padding: wp(10),
    height: "60%",
    width: LIST_ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    top: SCREEN_HEIGHT / 8,
  },
  list: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    marginHorizontal: wp(10),
    marginBottom: hp(20),
    padding: wp(10),
    height: LIST_ITEM_HEIGHT,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(6),
  },
});

export default CountryItemStyles;
