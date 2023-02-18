import { StyleSheet } from "react-native";

type TextProps = {
  icon: any;
};

const TextStyles = StyleSheet.create<TextProps>({
  icon: {
    color: "white",
    fontFamily: "Gilroy-SemiBold",
  },
});

export default TextStyles;
