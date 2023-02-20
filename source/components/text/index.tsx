import { StyleSheet, Text as RNText, View } from "react-native";
import React, { ReactNode } from "react";
import TextStyles from "./styles";

type TextProps = {
  children: ReactNode;
  size?: number;
};

const Text = ({ children, size }: TextProps) => {
  return <RNText style={TextStyles(size).icon}>{children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({});
