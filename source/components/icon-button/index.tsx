import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";

//Svg
import ListSvg from "../../assets/svg/icons/list.svg";
import GridSvg from "../../assets/svg/icons/grid.svg";
import IconStyles from "./styles";

type ButtonProps = {
  onPress?: () => void;
  style?: ViewStyle;
  selected?: boolean;
};

export const ListButton = ({ onPress, style, selected }: ButtonProps) => {
  const iconStyle = selected ? IconStyles.selected : IconStyles.unselected;
  return (
    <TouchableOpacity style={[iconStyle, style]} onPress={onPress}>
      <ListSvg />
    </TouchableOpacity>
  );
};

export const GridButton = ({ onPress, style, selected }: ButtonProps) => {
  const iconStyle = selected ? IconStyles.selected : IconStyles.unselected;

  return (
    <TouchableOpacity style={[iconStyle, style]} onPress={onPress}>
      <GridSvg />
    </TouchableOpacity>
  );
};
