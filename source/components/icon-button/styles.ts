import { StyleSheet, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import { hp, wp } from "../../utils/responsiveFunctions";

type IconProps = {
  selected: ViewStyle;
  unselected: ViewStyle;
};

const IconStyles = StyleSheet.create<IconProps>({
  selected: {
    backgroundColor: colors.primary,
    padding: wp(5),
    borderRadius: 8,
  },
  unselected: {
    padding: wp(5),
    borderRadius: 8,
  },
});

export default IconStyles;
