import { Animated, StyleSheet } from "react-native";

type IconProps = {
  icon: any;
};

const IconStyles = (
  rotation: Animated.AnimatedInterpolation<string | number>
) =>
  StyleSheet.create<IconProps>({
    icon: {
      transform: [
        {
          rotate: rotation,
        },
      ],
    },
  });

export default IconStyles;
