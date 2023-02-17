import { StyleSheet, ViewStyle } from "react-native";
import colors from "../../constants/colors";

type ScreenProps = {
  container: ViewStyle;
};

export const ScreenStyles = StyleSheet.create<ScreenProps>({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain,
  },
});

export default ScreenStyles;
