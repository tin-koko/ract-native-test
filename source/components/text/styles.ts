import { StyleSheet } from "react-native";
import { fp } from "../../utils/responsiveFunctions";
type TextProps = {
  icon: any;
};

const TextStyles = (size: number = 13) =>
  StyleSheet.create<TextProps>({
    icon: {
      color: "white",
      fontFamily: "Gilroy-SemiBold",
      fontSize: fp(size),
    },
  });

export default TextStyles;
