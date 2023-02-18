import {
  Animated,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { useRef } from "react";

//Svg
import ListSvg from "../../assets/svg/icons/list.svg";
import IconStyles from "./styles";

type ButtonProps = {
  onPress: () => void;
  style?: ViewStyle;
  selected?: boolean;
};

export const ListButton = ({ onPress, style, selected }: ButtonProps) => {
  const progress = useRef(new Animated.Value(0)).current;
  const rotation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  const toggleIcon = () => {
    Animated.timing(progress, {
      toValue: selected ? 1 : 0,
      useNativeDriver: true,
    }).start();
  };
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedPressable
      style={[IconStyles(rotation).icon, style]}
      onPress={() => {
        toggleIcon();
        onPress();
      }}
    >
      <ListSvg />
    </AnimatedPressable>
  );
};
